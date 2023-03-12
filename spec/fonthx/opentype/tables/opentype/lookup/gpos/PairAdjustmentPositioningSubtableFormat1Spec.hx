package fonthx.opentype.tables.opentype.lookup.gpos;

import fonthx.opentype.writers.TrueTypeFileWriter;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;

using buddy.Should;

class PairAdjustmentPositioningSubtableFormat1Spec extends buddy.BuddySuite {

    public function new() {
        describe("PairAdjustmentPositioningSubtableFormat1", function() {
            it("splits if too over 64K", function() {
                // create a massive kerning lookup
                var lookup = new PairAdjustmentPositioningSubLookup();
                for (i in 0...15000) {
                    lookup.addPair(new PositioningPair(i + 65, i + 66, 5));
                }
                var subtable = new PairAdjustmentPositioningSubtableFormat1(lookup);
                var splitTables = subtable.split();
                splitTables.length.should().beGreaterThan(1);
                for (splitTable in splitTables) {
                    splitTable.length.should().beLessThan(AbstractLookupSubtable.MAX_SIZE);
                }
            });
        });
    }
}
