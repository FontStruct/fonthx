package fonthx.formats.tt.tables.opentype.lookup.gpos;

import fonthx.formats.tt.tables.opentype.lookup.coverage.AbstractCoverageTable;
import fonthx.formats.tt.writers.ITrueTypeWriter;

// https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#lookup-type-2-pair-adjustment-positioning-subtable


/**
* A pair adjustment positioning subtable (PairPos) is used to adjust the placement or advances of two glyphs in relation
 * to one another — for instance, to specify kerning data for pairs of glyphs. Compared to a typical kerning table,
 * however, a PairPos subtable offers more flexiblity and precise control over glyph positioning. The PairPos subtable
 * can adjust each glyph in a pair independently in both the X and Y directions, and it can explicitly describe the
 * particular type of adjustment applied to each glyph.
 * PairPos subtables can be either of two formats: one that identifies glyphs individually by index (Format 1), and one
 * that identifies glyphs by class (Format 2).
 **/
class PairAdjustmentPositioningSubtable {

    // Pair Adjustment Positioning Format 1: Adjustments for Glyph Pairs
    // Pair Adjustment Positioning Format 2: Class Pair Adjustment

    public var format;

    private var coverageTable:AbstractCoverageTable;

    public static var GLYPH_PAIR_FORMAT = 1;
    public static var CLASS_PAIR_FORMAT = 2;


    public function new(format:Int) {
        this.format = format;
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(format);  // posFormat Format identifier
        tt.writeOffset16(0); // coverageOffset Offset to Coverage table, from beginning of PairPos subtable
        tt.writeUINT16(0); // valueFormat1	Defines the types of data in valueRecord1 — for the first glyph in the pair (may be zero).
        tt.writeUINT16(0); // valueFormat2	Defines the types of data in valueRecord2 — for the second glyph in the pair (may be zero).
        tt.writeUINT16(0); // pairSetCount	Number of PairSet tables
        // pairSetOffsets[pairSetCount]	Array of offsets to PairSet tables. Offsets are from beginning of PairPos subtable, ordered by Coverage Index.

    }



}
