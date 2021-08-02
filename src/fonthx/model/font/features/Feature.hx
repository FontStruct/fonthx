package fonthx.model.font.features;

import fonthx.model.font.features.lookups.Lookup;

// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

class Feature {

    public var tag:FeatureTag;
    public var idx:Int;
    public var lookups:Array<Lookup>;
    public var isPos:Bool;

    public function new(tag:FeatureTag, isPos:Bool = false) {
        this.tag = tag;
        this.isPos = isPos;
        idx = 0;
        lookups = new Array();
    }

    public function addLookup(lookup:Lookup) {
        lookups.push(lookup);
    }
}
