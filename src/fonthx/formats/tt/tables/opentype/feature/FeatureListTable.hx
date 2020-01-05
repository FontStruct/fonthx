package fonthx.formats.tt.tables.opentype.feature;

import fonthx.formats.tt.writers.ITrueTypeWriter;
import fonthx.model.font.features.Feature;

using Lambda;

/**
 * GPOS Table
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#flTbl
 * @see
 */
class FeatureListTable extends LayoutAware {

    private var features:Array<Feature>;
    private var records:Array<FeatureRecord>;
    public var length(get, null):Int;

    public function new(layoutTable:LayoutTable) {
        super(layoutTable);
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

    public function addFeature(feature:Feature) {
        var featureRecord = new FeatureRecord(feature);
        records.push(featureRecord);
        sort();
        return featureRecord;
    }

    function get_length():Int {
        return records.fold(function(record, l) {
            return l + record.length;
        }, 2);
    }

}
