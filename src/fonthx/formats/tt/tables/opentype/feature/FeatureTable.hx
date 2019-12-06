package fonthx.formats.tt.tables.opentype.feature;

import fonthx.formats.tt.tables.opentype.lookup.LookupTable;
import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * Feature tables defined within the GSUB table contain references to glyph substitution lookups, and
 * feature tables defined within the GPOS table contain references to glyph positioning lookups
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#feature-table
 */
class FeatureTable {

    private var lookups:Array<LookupTable>;

    public function new() {
        lookups = new Array();
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeOffset16(0);            // featureParams	= NULL (reserved for offset to FeatureParams)
        tt.writeUINT16(lookups.length); // lookupIndexCount	Number of LookupList indices for this feature
        for (lookup in lookups) {       // Array of indices into the LookupList — zero-based (first lookup is LookupListIndex = 0)
            tt.writeUINT16(0);
        }
    }

    public function addLookup(lookup:LookupTable) {
        this.lookups.push(lookup);
    }

}




