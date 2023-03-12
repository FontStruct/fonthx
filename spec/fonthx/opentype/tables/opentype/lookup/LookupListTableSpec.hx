package fonthx.opentype.tables.opentype.lookup;

import fonthx.opentype.writers.TrueTypeFileWriter;
import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.features.lookups.Lookup;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;
import fonthx.opentype.tables.Table;

using buddy.Should;

class LookupListTableSpec extends buddy.BuddySuite {
    public function new() {
        @include
        describe("LookupListTable", function() {
            it("splits overflowing subtables and uses extension position if necessary", function() {
                // create a massive kerning lookup
                var sublookup = new PairAdjustmentPositioningSubLookup();
                for (i in 0...60000) {
                    sublookup.addPair(new PositioningPair(i + 65, i + 66, 5));
                }
                var lookup = new Lookup(LookupType.GPOS_PAIR_ADJUSTMENT, true);
                lookup.addSubLookup(sublookup);
                var layoutList = new LookupListTable(Table.GPOS);
                layoutList.setLookups([lookup]);
                var tt = new TrueTypeFileWriter();
                layoutList.write(tt);

            });
        });
    }
}
