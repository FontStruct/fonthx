package fonthx.formats.tt.tables.opentype.script;

import fonthx.model.font.features.Script;
import fonthx.model.font.features.LanguageTag;
import fonthx.model.font.features.ScriptTag;
import fonthx.formats.tt.tables.opentype.language.LangSysRecord;
import fonthx.formats.tt.writers.ITrueTypeWriter;

using Lambda;

// https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#slTbl_sRec
class ScriptRecord {

    public var tag(get, null):ScriptTag;
    public var script:Script;

    public function new(script:Script) {
        this.script = script;
    }


    public function write(tt:ITrueTypeWriter, offset:Int) {
        tt.writeTag(script.tag.toString());
        tt.writeOffset16(offset); // Offset to Script table, from beginning of ScriptList
    }

    public function isDefault():Bool {
        return tag == ScriptTag.DEFAULT;
    }

    function get_tag():ScriptTag {
        return tag;
    }
}
