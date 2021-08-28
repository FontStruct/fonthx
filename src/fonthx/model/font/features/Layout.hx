package fonthx.model.font.features;

import fonthx.model.font.features.lookups.Lookup;
using Lambda;

// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

// http://adobe-type-tools.github.io/afdko/OpenTypeFeatureFileSpecification.html

class Layout {

    public var scripts:Array<Script>;
    public var features:Array<Feature>;
    public var lookups:Array<Lookup>;

    public function new() {
        scripts = new Array();
        features = new Array();
        lookups= new Array();
    }

    public function setDefaults(scriptTag:ScriptTag, addDefault:Bool = true) {
        var script = new Script(scriptTag);
        addScript(script);
        if (addDefault) {
            var defaultLang = new Language(LanguageTag.DEFAULT);
            script.defaultLangSys = defaultLang;
        }
    }

    public function addScript(script:Script):Layout {
        if (getScript(script.tag) != null) {
            return this;
        }
        scripts.push(script);
        scripts.sort(function(a:Script, b:Script) {
            return (a.tag.toString() > b.tag.toString()) ? 1 : (b.tag.toString() > a.tag.toString()) ? -1 : 0;
        });
        return this;
    }

    public function addFeature(feature:Feature, scriptTag:ScriptTag = null, langTag:LanguageTag = null):Layout {
        features.push(feature);
        features.sort(function(a:Feature, b:Feature) {
            return (a.tag.toString() > b.tag.toString()) ? 1 : (b.tag.toString() > a.tag.toString()) ? -1 : 0;
        });
        var idx = 0;
        for (feature in features) {
            feature.idx = idx++;
        }
        var script = this.getScript(scriptTag);
        if (script == null) {
            // get DFLT script, or the first script
            script = this.getDefaultScript();
        }
        if (script == null) {
            trace('No script to add feature to');
            return this;
        }
        var lang = script.getLanguage(langTag);
        if (lang == null) {
            // get default language
            lang = script.defaultLangSys;
        }
        if (lang == null) {
            trace('No language to add feature to');
            return this;
        }
        trace('Adding feature ${feature.tag} to ${script.tag}/${lang.tag}');
        lang.addFeature(feature);
        return this;
    }

    public function addLookup(lookup:Lookup):Layout {
        trace('Adding lookup ${lookup.isPos? 'GPOS' : 'GSUB'}');
        lookups.push(lookup);
        var idx = 0;
        for (lookup in lookups) {
            lookup.idx = idx++; // todo hmm
        }
        return this;
    }

    public function getScript(tag:ScriptTag):Script {
        return scripts.find(function(s:Script) {
            return s.tag == tag;
        });
    }


    public function getDefaultScript():Script {
        if (scripts.length == 0) return null;
        var script = this.getScript(ScriptTag.DEFAULT);
        if (script == null) {
            script = this.scripts[0];
        }
        return script;
    }


}
