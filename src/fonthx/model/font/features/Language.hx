package fonthx.model.font.features;


// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

import fonthx.model.font.features.lookups.ILookup;

class Language {

    public var tag:LanguageTag;
    public var lookups:Array<ILookup>;

    public function new(tag:LanguageTag) {
        this.tag = tag;
        lookups = new Array();
    }

    public function addLookup(lookup:ILookup) {
        lookups.push(lookup);
    }
}
