package fonthx.formats.tt.tables.opentype.feature;

import fonthx.model.font.features.FeatureTag;
import fonthx.formats.tt.writers.ITrueTypeWriter;

using StringTools;

class FeatureRecord {

    public var tag:FeatureTag;
    public var featureTable:FeatureTable;

    public function new(tag:FeatureTag) {
        this.tag = tag;
        this.featureTable = new FeatureTable();
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeTag(tag.toString());
        tt.writeOffset16(0);
    }

}
