package fonthx.services;

import fonthx.model.font.features.lookups.ligasub.LigaSubstitutionSubLookup;
import Reflect;
import fonthx.model.font.features.Feature;
import fonthx.model.font.features.Language;
import fonthx.model.font.features.lookups.Lookup;
import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitutionSubLookup;
import fonthx.model.font.features.Script;
import fonthx.model.font.IFont;

using Lambda;

class FeatureSpecParser {

    public function new() {

    }

    public function toLayout(spec:Dynamic, font:IFont) {
        if (Reflect.hasField(spec, 'languageSystems')) {
            var langSystems:Array<Dynamic> = spec.languageSystems;
            for (langSystem in langSystems) {
                // todo check for valid ScriptTag? && add to font/layout somehow e.g. layout.languageSystems
                var script = new Script(langSystem.script);
                var lang = new Language(langSystem.language);
            }
        }
        if (Reflect.hasField(spec, 'features')) {
            var featureSpecs:Array<Dynamic> = spec.features;
            for (featureSpec in featureSpecs) {
                var feature = getFeature(featureSpec, font);
                if (feature.isPos) {
                    font.gposLayout.addFeature(feature);
                } else {
                    font.gsubLayout.addFeature(feature);
                }
                // font.layout.getScript(ScriptTag.DEFAULT).defaultLangSys.addFeature(feature); // fixme: no,see PixelFont lang & script management
            }
        }
    }

    public function getFeature(featureSpec:Dynamic, font:IFont) {
        var isPos = Reflect.hasField(featureSpec, 'isPos');
        var feature = new Feature(featureSpec.name, isPos);
        if (Reflect.hasField(featureSpec, 'lookups')) {
            var lookupSpecs:Array<Dynamic> = featureSpec.lookups;
            for (lookupSpec in lookupSpecs) {
                var type = lookupSpec.type;
                var lookup = new Lookup(type, isPos);
                if (type == LookupType.GSUB_SINGLE) {
                    var subLookup = new SingleSubstitutionSubLookup();
                    lookup.addSubLookup(subLookup);
                    var rules:Array<Dynamic> = lookupSpec.rules;
                    for (sub in rules) {
                        var fromGlyph = getGlyphId(sub[0], font);
                        var toGlyph = getGlyphId(sub[1], font);
                        if (fromGlyph != -1 && toGlyph != -1) {
                            subLookup.addSubstitution(fromGlyph, toGlyph);
                        }
                    }
                } else if (type == LookupType.GSUB_LIGATURE) {
                    var subLookup = new LigaSubstitutionSubLookup();
                    lookup.addSubLookup(subLookup);
                    var rules:Array<Dynamic> = lookupSpec.rules;
                    for (rule in rules) {
                        var componentGroups:Array<Array<Int>> = rule[0];
                        var ligatureId = getGlyphId(rule[1], font);
                        for (group in componentGroups) {
                            subLookup.addSubstitution(ligatureId, group.map(function(id:Int) {
                                return getGlyphId(id, font);
                            }));
                        }
                    }
                }
                if (lookup.subLookups.length > 0) {
                    if (feature.isPos) {
                        font.gposLayout.addLookup(lookup);
                    } else {
                        font.gsubLayout.addLookup(lookup);
                    }
                    feature.addLookup(lookup); // add feature ref to lookup
                }
            }
        }
        return feature;
    }

    // todo consider putting this in font(?)
    public function getGlyphId(id:Dynamic, font:IFont) {
        if (Std.is(id, std.String)) {
            return font.getGlyphIndexForName(id);
        }
        if (Std.is(id, Int)) {
            return font.getGlyphIndexForCodepoint(id);
        }
        return -1;
    }
}

/*

features: {
                // referencing http://adobe-type-tools.github.io/afdko/OpenTypeFeatureFileSpecification.html#4
                // script have, langs, and langs have features, features have lookups
                // (lookups belong to features belong to langs which belong to scripts)
                // if not specified, will belong to a default lang and a default script (latin)
                languageSystems: [
                    {
                        script: ScriptTag.DEFAULT,
                        language: LanguageTag.DEFAULT
                    }
                ],
                features: [{
                    name: FeatureTag.FEAT_SMCP,
                    lookups: [{
                        // script: x,
                        // language: x,
                        // id:
//                        rules: [
//                            ['sub', 'A', 'A.sc']
//                        ]
                        rules: [for (cp in 65...91) cp].map(function(cp:Int) {
                            var c = String.fromCharCode(cp);
                            return ['sub', c, '${c}.sc'];
                        })
                    }]

                }],
            }

 */