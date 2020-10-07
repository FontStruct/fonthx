package fonthx.model.font.features;


// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

class Language {

    public var tag:LanguageTag;
    public var features:Array<Feature>;

    public function new(tag:LanguageTag) {
        this.tag = tag;
        features = new Array();
    }

    public function addFeature(feature:Feature) {
        features.push(feature);
    }

}
