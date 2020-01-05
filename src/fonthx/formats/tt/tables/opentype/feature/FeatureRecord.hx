package fonthx.formats.tt.tables.opentype.feature;

import fonthx.model.font.features.FeatureTag;
import fonthx.model.font.features.Feature;
import fonthx.formats.tt.writers.ITrueTypeWriter;

using Lambda;

class FeatureRecord {

    public var tag(get, null):FeatureTag;
    public var feature(get, null):Feature;
    public var featureTable:FeatureTable;
    public var length(get, null):Int;

    public function new(feature:Feature) {
        this.featureTable = new FeatureTable(feature);
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeTag(tag.toString());
        tt.writeOffset16(0);
    }

    function get_tag():FeatureTag {
        return featureTable.feature.tag;
    }

    function get_feature():Feature {
        return featureTable.feature;
    }

    function get_length():Int {
        return 6 + featureTable.length;
    }

}
