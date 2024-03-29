package fonthx.opentype.tables.opentype.script;

import fonthx.model.font.features.Script;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.model.font.features.ScriptTag;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#scripts-and-languages
 */
class ScriptListTable {

    public var length(get, never):Int;
    private var scripts:Array<Script>;
    private var scriptTables:Array<ScriptTable>;

    public function new() {
        scriptTables = new Array();
    }

    public function setScripts(scripts:Array<Script>) {
        this.scripts = scripts;
    }

    private function initScriptTables() {
        if (scriptTables.length == 0) {
            for (script in scripts) {
                scriptTables.push(new ScriptTable(script));
            }
        }
    }

    public function write(tt:ITrueTypeWriter) {
        initScriptTables();
        tt.writeSHORT(scripts.length); // uint16 scriptCount Number of ScriptRecords
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
        return 2 + (scripts.length * 6);
    }




}




