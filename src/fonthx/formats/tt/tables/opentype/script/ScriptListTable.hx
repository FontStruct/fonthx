package fonthx.formats.tt.tables.opentype.script;

import fonthx.formats.tt.writers.ITrueTypeWriter;
import fonthx.model.font.features.Layout;
import fonthx.model.font.features.ScriptTag;

using Lambda;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#scripts-and-languages
 */
class ScriptListTable extends LayoutAware {

    private var layout:Layout;
    public var length(get, null):Int;

    public function new(layoutTable:LayoutTable) {
        super(layoutTable);
    }

    public function setLayout(layout:Layout) {
        this.layout = layout;
    }

    public function write(tt:ITrueTypeWriter) {

        tt.writeSHORT(layout.scripts.length); // Number of ScriptRecords

        var offset = 2 + (layout.scripts.length * 6);
        for (i in 0...layout.scripts.length) {
            var script = layout.scripts[i];
            // Write ScriptRecord // https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#slTbl_sRec
            tt.writeTag(script.tag.toString());
            tt.writeOffset16(offset); // Offset to Script table, from beginning of ScriptList
            if (script.tag != DEFAULT) {
                offset += (4 + (script.languages.length * 6));
            }
        }

        // Write Script Tables
        // https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#script-table-and-language-system-record
        for (i in 0...layout.scripts.length) {
            var script = layout.scripts[i];
            if (script.tag == DEFAULT) {
                continue;
            }
            // defaultLangSys
            tt.writeOffset16((layout.defaultLangSys == null)? 0 : (4 + (script.languages.length * 6)));
            // langSysCount
            tt.writeUINT16(script.languages.length);
            var offset = 0;
            // LangSysRecords
            for (language in script.languages) {
                tt.writeTag(language.tag);
                // Offset to LangSys table, from beginning of Script table
                tt.writeOffset16(0);
                // lookupOrder (16)
                // requiredFeatureIndex (16)
                // featureIndexCount (16)
                // featureIndices[featureIndexCount] (16[])
                // language.lookups.length * (2 + 2 + 2
                offset += 6;
            }
        }
    }

    function get_length():Int {
        return 0;
    }

}




