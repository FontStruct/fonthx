package fonthx.formats.tt.tables.opentype.script;

import fonthx.formats.tt.writers.ITrueTypeWriter;
import fonthx.model.font.features.Layout;
import fonthx.model.font.features.ScriptTag;

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

        var scriptListTableOffset = 2 + (layout.scripts.length * 6);
        for (script in layout.scripts) {
            // Write ScriptRecord // https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#slTbl_sRec
            tt.writeTag(script.tag.toString());
            tt.writeOffset16(scriptListTableOffset); // Offset from beginning of ScriptList Table to Script table
            if (script.tag != ScriptTag.DEFAULT) {
                scriptListTableOffset += (4 + (script.languages.length * 6));
            }
        }

        // Write Script Tables
        // https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#script-table-and-language-system-record
        for (script in layout.scripts) {
            if (script.tag == DEFAULT) {
                continue;
            }
            // defaultLangSys
            tt.writeOffset16((script.defaultLangSys == null) ? 0 : (4 + (script.languages.length * 6)));
            // langSysCount
            tt.writeUINT16(script.languages.length);
            var scriptTableOffset = 4;

            // Write LangSysRecords
            for (language in script.languages) {
                tt.writeTag(language.tag);
                tt.writeOffset16(scriptTableOffset); // Offset from beginning of Script table to LangSys table
                scriptTableOffset += 6;
            }

            // Write LangSys tables
            // https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#language-system-table
            for (language in script.allLanguages) {
                tt.writeUINT16(0); // lookupOrder = NULL (reserved for an offset to a reordering table)
                tt.writeUINT16(0xFFFF); // requiredFeatureIndex – for now, no support for required features
                tt.writeUINT16(language.features.length); // featureIndexCount
                for (feature in language.features) {
                    tt.writeUINT16(feature.idx); // Array of indices into the FeatureList, in arbitrary order
                }
            }
        }
    }

    function get_length():Int {
        var l = 2 + (layout.scripts.length * 6); // numScriptRecords + 6 bytes for each script record
        for (script in layout.scripts) {
            if (script.tag == DEFAULT) {
                continue;
            }
            l += 4; // script table header
            l += script.languages.length * 6; // lang sys records
            for (language in script.languages) {
                l += 6 + (language.features.length * 2); // lang sys tables
            }
        }
        return l;
    }

}




