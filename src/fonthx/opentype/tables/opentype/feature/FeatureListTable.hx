package fonthx.opentype.tables.opentype.feature;

import fonthx.model.font.features.Feature;
import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**
 * GPOS Table
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#flTbl
 * @see
 */
class FeatureListTable {

    public var features:Array<Feature>;
    public var length(get, never):Int;

    public function new() {
    }

    public function setFeatures(features:Array<Feature>) {
        this.features = features;
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeSHORT(features.length); // uint16 featureCount
        var offset = 2 + (6 * features.length);
        // FeatureRecords
        for (feature in features) {
            tt.writeTag(feature.tag); // Tag featureTag
            tt.writeOffset16(offset); // Offset16 featureOffset, Offset to Feature table, from beginning of FeatureList
            offset += (4 + (feature.lookups.length * 2));
        }
        // Feature table
        for (feature in features) {
            tt.writeOffset16(0); // Offset16 featureParams = NULL (reserved for offset to FeatureParams)
            tt.writeUINT16(feature.lookups.length); // uint16 lookupIndexCount Number of LookupList indices for this feature
            for (lookup in feature.lookups) {
                tt.writeUINT16(lookup.idx); // uint16 lookupListIndices[lookupIndexCount]
                // Array of indices into the LookupList — zero-based (first lookup is LookupListIndex = 0)
            }
        }
    }

    function get_length():Int {
        var l = 2 + features.length * 6;
        for (feature in features) {
            l += (4 + (feature.lookups.length * 2));
        }
        return l;
    }

}
