package fonthx.model.font.features;

using Lambda;

// example KERN lookups for cyrillic (russian, greek, serbian), latin (english, french, german)
// example LIGA lookups for cyrillic (russian, greek, serbian), latin (english, french, german)

class Script {

    public var tag:ScriptTag;
    public var languages:Array<Language>;
    public var allLanguages(get, null):Array<Language>;
    public var defaultLangSys:Language;

    public function new(tag:ScriptTag) {
        this.tag = tag;
        languages = new Array();
        defaultLangSys = null;
    }

    public function addLanguage(language:Language) {
        languages.push(language);
    }

    public function get_allLanguages() {
        var all = languages.copy();
        if (defaultLangSys != null) {
            all.unshift(defaultLangSys);
        }
        return all;
    }

    public function getLanguage(tag:LanguageTag):Language {
        return languages.find(function(l:Language) {
            return l.tag == tag;
        });
    }
}
