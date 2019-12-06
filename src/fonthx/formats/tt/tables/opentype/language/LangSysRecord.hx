package fonthx.formats.tt.tables.opentype.language;

import fonthx.model.font.features.LanguageTag;
import fonthx.formats.tt.writers.ITrueTypeWriter;
using StringTools;

class LangSysRecord {

    public var tag:LanguageTag;

    public function new(tag:LanguageTag) {
        this.tag = tag;
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeTag(tag.toString());
        tt.writeOffset16(0);
    }
}
