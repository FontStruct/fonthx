package fonthx.model.font.features;

using Lambda;

// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

class Layout {

    public var defaultLangSys:Language;
    public var scripts:Array<Script>;
    public var features:Array<Feature>;

    public function new() {
        scripts = new Array();
        features = new Array();
        defaultLangSys = null;
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
        if (getFeature(feature.tag) != null) {
            return;
        }
        features.push(feature);
    }

    public function getScript(tag:ScriptTag):Script {
        return scripts.find(function(s:Script) {
            return s.tag == tag;
        });
    }


    public function hasFeature(tag:FeatureTag):Bool {
        return getFeature(tag) == null;
    }

    public function getFeature(tag:FeatureTag):Feature {
        return features.find(function(f:Feature) {
            return f.tag == tag;
        });
    }
}
