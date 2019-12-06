package fonthx.formats.tt.tables.opentype.language;

using StringTools;

class LangSys {

    public var tag:LanguageTag;
    public var offset:Int;

    public function new(tag:LanguageTag, offset:Int) {
        this.tag = tag;
        this.offset = offset;
    }


}
