package fonthx.formats.tt.tables.opentype.script;

import fonthx.model.font.features.LanguageTag;
import fonthx.formats.tt.tables.opentype.language.LangSysRecord;
import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * Script Table and Language System Record
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#script-table-and-language-system-record
 * @see
 */
class ScriptTable {

    public var defaultSysRecord = 0;
    private var languageRecords:Array<LangSysRecord>;

    public function new() {
        languageRecords = new Array();
    }

    public function write(tt:ITrueTypeWriter) {
        // defaultSysRecord
        tt.writeOffset16(this.defaultSysRecord);
        // langSysCount
        tt.writeUINT16(languageRecords.length);
        for (record in languageRecords) {
            record.write(tt);
        }
    }

    public function setDefaultLanguage(tag:LanguageTag) {

    }

    public function addLanguage(tag:LanguageTag):LangSysRecord {
        var record = getLangSysRecord(tag);
        if (record == null) {
            record = new LangSysRecord(tag);
            languageRecords.push(record);
        }
        return record;
//        this.languageRecords.sort(function(a:LangSysRecord, b:LangSysRecord) {
//            return (a.tag.toString() > b.tag.toString()) ? 1 : (b.tag.toString() > a.tag.toString()) ? -1 : 0;
//        });
    }

    private function getLangSysRecord(tag:LanguageTag) {
        var record = languageRecords.filter(function(r:LangSysRecord) {
            return r.tag == tag;
        });
        if (record.length > 0) {
            return record[0];
        }
        return null;
    }

}




