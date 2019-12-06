package fonthx.formats.tt.tables.opentype.script;

import fonthx.model.font.features.LanguageTag;
import fonthx.model.font.features.ScriptTag;
import fonthx.formats.tt.tables.opentype.language.LangSysRecord;
import fonthx.formats.tt.writers.ITrueTypeWriter;

using StringTools;

class ScriptRecord {

    public var tag:ScriptTag;
    public var scriptTable:ScriptTable;

    public function new(tag:ScriptTag) {
        this.tag = tag;
        this.scriptTable = new ScriptTable();
    }

    public function addLanguage(tag:LanguageTag):LangSysRecord {
        return this.scriptTable.addLanguage(tag);
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeTag(tag.toString());
        tt.writeOffset16(0);
    }

}
