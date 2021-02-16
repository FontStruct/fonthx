package fonthx.opentype.tables.opentype.lookup.coverage;

/**
*
* Format 2 consists of a format code (coverageFormat) and a count of glyph index ranges (rangeCount), followed by an
* array of records (rangeRecords). Each RangeRecord consists of a start glyph index (startGlyphID) an end glyph index (endGlyphID)
* and the Coverage Index associated with the range’s Start glyph. Ranges must be in glyph ID order, and they must be
* distinct, with no overlapping.
*
* The Coverage Indexes for the first range begin with zero (0) and increase sequentially to (endGlyphId - startGlyphId).
* For each successive range, the starting Coverage Index is one greater than the ending Coverage Index of the the
* preceding range. Thus, startCoverageIndex for each non-initial range must equal the length of the preceding range
* (endGlyphID - startGlyphID + 1) added to the startGlyphIndex of the preceding range. This allows for a quick
* calculation of the Coverage Index for any glyph in any range using the formula:
* Coverage Index (glyphID) = startCoverageIndex + glyphID - startGlyphID.
*
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-format-2
 *
 */
import fonthx.opentype.writers.ITrueTypeWriter;
class GlyphRangeCoverageTable implements ICommonTable {

    public var length(get, never):Int;
    public var ranges:Array<CoverageRange>;

    public function new(ranges:Array<CoverageRange>) {
        this.ranges = ranges;
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(2);
        tt.writeUINT16(this.ranges.length);
        for (range in ranges) {
            tt.writeUINT16(range.start);
            tt.writeUINT16(range.end);
            tt.writeUINT16(range.idx);
        }
    }

    public function get_length():Int {
        return  4 + (this.ranges.length * 6);
    }


}







