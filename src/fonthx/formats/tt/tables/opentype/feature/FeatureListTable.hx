package fonthx.formats.tt.tables.opentype.feature;

import fonthx.model.font.features.FeatureTag;
import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * GPOS Table
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#flTbl
 * @see
 */
class FeatureListTable {

    private var records:Array<FeatureRecord>;

    public function new() {
        records = new Array();
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeSHORT(this.records.length); // Number of ScriptRecords
        for (record in records) {
            record.write(tt);
        }
    }

    private function sort() {
        this.records.sort(function(a:FeatureRecord, b:FeatureRecord) {
            return (a.tag.toString() > b.tag.toString()) ? 1 : (b.tag.toString() > a.tag.toString()) ? -1 : 0;
        });
    }

    public function addFeature(tag:FeatureTag) {
        var feature = getFeatureRecord(tag);
        if (feature == null) {
            feature = new FeatureRecord(tag);
            this.records.push(feature);
            this.sort();
        }
        return feature;

    }

    private function getFeatureRecord(tag:FeatureTag) {
        var record = records.filter(function(r:FeatureRecord) {
            return r.tag == tag;
        });
        if (record.length > 0) {
            return records[0];
        }
        return null;
    }

}




