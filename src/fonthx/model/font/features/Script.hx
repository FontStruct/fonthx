package fonthx.model.font.features;

import fonthx.model.font.features.lookups.ILookup;

// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

class Feature {

    public var feature:FeatureTag;
    public var script:ScriptTag;
    public var language:LanguageTag;
    public var lookups:Array<ILookup>;

    public function new(tag:FeatureTag) {
        this.feature = tag;
        lookups = new Array();
    }

    public function addLookup(lookup:ILookup) {
        lookups.push(lookup);
    }
}
