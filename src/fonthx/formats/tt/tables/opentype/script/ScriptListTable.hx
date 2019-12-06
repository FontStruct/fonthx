package fonthx.formats.tt.tables.opentype.script;

import fonthx.model.font.features.ScriptTag;
import fonthx.model.font.features.FeatureTag;
import fonthx.model.font.features.LanguageTag;
import fonthx.formats.tt.tables.opentype.language.LangSysRecord;
import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#scripts-and-languages
 */
class ScriptListTable {

    private var records:Array<ScriptRecord>;

    public function new() {
        records = new Array();
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeSHORT(this.records.length); // Number of ScriptRecords
        for (record in records) {
            record.write(tt);
        }
    }

    public function addFeature(tag:ScriptTag, lang:LanguageTag, feat:FeatureTag) {
        var lang = addLanguage(tag, lang);
    }

    public function addLanguage(tag:ScriptTag, lang:LanguageTag):LangSysRecord {
        var script = this.addScript(tag);
        return  script.addLanguage(lang);
    }

    public function addScript(tag:ScriptTag):ScriptRecord {
        var script = getScriptRecord(tag);
        if (script == null) {
            script = new ScriptRecord(tag);
            this.records.push(script);
            sort();
        }
        return script;
    }

    private function sort() {
        this.records.sort(function(a:ScriptRecord, b:ScriptRecord) {
            return (a.tag.toString() > b.tag.toString()) ? 1 : (b.tag.toString() > a.tag.toString()) ? -1 : 0;
        });
    }

    private function getScriptRecord(tag:ScriptTag) {
        var record = records.filter(function(r:ScriptRecord) {
            return r.tag == tag;
        });
        if (record.length > 0) {
            return records[0];
        }
        return null;
    }

}




