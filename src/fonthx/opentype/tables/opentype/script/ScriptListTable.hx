package fonthx.opentype.tables.opentype.script;

import fonthx.model.font.features.Script;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.model.font.features.Layout;
import fonthx.model.font.features.ScriptTag;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#scripts-and-languages
 */
class ScriptListTable {

    private var layout:Layout;
    public var length(get, never):Int;
    private var scriptTables:Array<ScriptTable>;

    public function new() {
    }

    public function setLayout(layout:Layout) {
        this.layout = layout;
    }

    private function initScriptTables() {
        scriptTables = new Array();
        for (script in layout.scripts) {
            scriptTables.push(new ScriptTable(script));
        }
    }

    public function write(tt:ITrueTypeWriter) {
        initScriptTables();
        tt.writeSHORT(layout.scripts.length); // uint16 scriptCount Number of ScriptRecords
        var offset = headerToScriptTables();
        for (scriptTable in scriptTables) {
            var script = scriptTable.script;
            // Write ScriptRecord // https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#slTbl_sRec
            tt.writeTag(script.tag.toString())
                .writeOffset16(offset); // Offset from beginning of ScriptList Table to Script table
            if (script.tag != ScriptTag.DEFAULT) {
                offset += scriptTable.length;
            }
        }

        // Write Script Tables
        // https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#script-table-and-language-system-record
        for (scriptTable in scriptTables) {
            scriptTable.write(tt);
        }
    }

    function get_length():Int {
        initScriptTables();
        var l = headerToScriptTables();
        for (scriptTable in scriptTables) {
            var script = scriptTable.script;
            if (script.tag == DEFAULT) {
                continue;
            }
            l += scriptTable.length;
        }
        return l;
    }

    function headerToScriptTables() {
        return 2 + (layout.scripts.length * 6);
    }




}




