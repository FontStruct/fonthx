package fonthx.model.font.features;

import fonthx.model.font.features.lookups.ILookup;

// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

class Feature {

    public var tag:FeatureTag;
    public var lookups:Array<ILookup>;

    public function new(tag:FeatureTag) {
        this.tag = tag;
        lookups = new Array();
    }

    public function addLookup(lookup:ILookup) {
        lookups.push(lookup);
    }
}
