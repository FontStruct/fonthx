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
        lookups = new Array();
    }

    public function addScript(script:Script) {
        if (getScript(script.tag) != null) {
            return;
        }
        scripts.push(script);
        scripts.sort(function(a:Script, b:Script) {
            return (a.tag.toString() > b.tag.toString()) ? 1 : (b.tag.toString() > a.tag.toString()) ? -1 : 0;
        });
    }

    public function addFeature(feature:Feature) {
        features.push(feature);
        features.sort(function(a:Feature, b:Feature) {
            return (a.tag.toString() > b.tag.toString()) ? 1 : (b.tag.toString() > a.tag.toString()) ? -1 : 0;
        });
        var idx = 0;
        for (feature in features) {
            feature.idx = idx++;
        }
    }

    public function addLookup(lookup:Lookup) {
        lookups.push(lookup);
        var idx = 0;
        for (lookup in lookups) {
            lookup.idx = idx++; // todo hmm
        }
    }

    public function getScript(tag:ScriptTag):Script {
        return scripts.find(function(s:Script) {
            return s.tag == tag;
        });
    }

}
