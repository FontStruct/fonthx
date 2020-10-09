package fonthx.formats.tt.tables.opentype.script;
import fonthx.model.font.features.Language;
import fonthx.formats.tt.tables.opentype.lookup.ICommonTable;
import fonthx.formats.tt.writers.ITrueTypeWriter;
import fonthx.model.font.features.Script;

class ScriptTable implements ICommonTable {

    public var script:Script;
    public var length(get, never):Int;

    public function new(script:Script) {
        this.script = script;
    }

    public function write(tt:ITrueTypeWriter) {
        if (script.tag == DEFAULT) {
            return;
        }
        // Offset16 defaultLangSys Offset to default LangSys table, from beginning of this Script table — may be NULL
        tt.writeOffset16((script.defaultLangSys == null) ? 0 : (4 + (script.languages.length * 6)));
        // uint16 langSysCount Number of LangSysRecords for this script — excluding the default LangSys
        tt.writeUINT16(script.languages.length);

        // Write LangSysRecords
        var scriptTableOffset = 4 + (script.languages.length * 6);
        if (script.defaultLangSys != null) {
            scriptTableOffset += getLangSysTableLength(script.defaultLangSys);
        }
        for (language in script.languages) {
            tt.writeTag(language.tag);
            tt.writeOffset16(scriptTableOffset); // Offset16 langSysOffset Offset to LangSys table, from beginning of Script table
            scriptTableOffset += getLangSysTableLength(language);
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

    public function get_length():Int {
        if (script.tag == DEFAULT) {
            return 0;
        }
        var l = 4; // header
        l += (6 * script.languages.length); // LangSysRecords
        // langSysTables
        for (language in script.allLanguages) {
            l += getLangSysTableLength(language);
        }
        return l;
    }

    private function getLangSysTableLength(language:Language) {
        return 6 + (2 * language.features.length);
    }
}
