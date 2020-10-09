package fonthx.formats.tt.tables.opentype.lookup.gpos;

import fonthx.model.font.features.lookups.pairadjustment.ClassPairAdjustmentPositioningSubLookup;
import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
* https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#lookup-type-2-pair-adjustment-positioning-subtable
*
* A pair adjustment positioning subtable (PairPos) is used to adjust the placement or advances of two glyphs in relation
 * to one another — for instance, to specify kerning data for pairs of glyphs. Compared to a typical kerning table,
 * however, a PairPos subtable offers more flexiblity and precise control over glyph positioning. The PairPos subtable
 * can adjust each glyph in a pair independently in both the X and Y directions, and it can explicitly describe the
 * particular type of adjustment applied to each glyph.
 * PairPos subtables can be either of two formats: one that identifies glyphs individually by index (Format 1), and one
 * that identifies glyphs by class (Format 2).
 **/
class PairAdjustmentPositioningSubtableFormat2 implements ILookupSubtable {

    public var length(get, never):Int;
    private var subLookup:ClassPairAdjustmentPositioningSubLookup;



    public function new(subLookup:ClassPairAdjustmentPositioningSubLookup) {
        this.subLookup = subLookup;
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(2);      // posFormat Format identifier
        tt.writeOffset16(0);    // coverageOffset Offset to Coverage table, from beginning of PairPos subtable
        tt.writeUINT16(0);      // valueFormat1	Defines the types of data in valueRecord1 — for the first glyph in the pair (may be zero).
        tt.writeUINT16(0);      // valueFormat2	Defines the types of data in valueRecord2 — for the second glyph in the pair (may be zero).
        tt.writeUINT16(0);      // pairSetCount	Number of PairSet tables
        // pairSetOffsets[pairSetCount]	Array of offsets to PairSet tables. Offsets are from beginning of PairPos subtable, ordered by Coverage Index.

    }

    public function get_length():Int {
        return 0;
    }


}
