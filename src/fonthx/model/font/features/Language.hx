package fonthx.model.font.features;


// default script is LATIN
// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

class Script {

    public var tag:ScriptTag;
    public var languages:Array<Language>;

    public function new(tag:ScriptTag) {
        this.tag = tag;
        languages = new Array();
    }

    public function addLanguage(language:Language) {
        languages.push(language);
    }
}
