package fonthx.formats.tt.tables.opentype.lookup.coverage;

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
import fonthx.formats.tt.writers.ITrueTypeWriter;
class GlyphRangeCoverageTable extends AbstractCoverageTable {

    public var length(get, null):Int;
    public var ranges:Array<Array<Int>>;

    public function new() {
        ranges = new Array();
        this.format = AbstractCoverageTable.RANGE_FORMAT;
    }

    public function addRange(start:Int, end:Int) {
        ranges.push([start, end]);
    }

    public function write(tt:ITrueTypeWriter) {
        ranges.sort(function(a, b) {
            return a[0] - b[0];
        });
        tt.writeUINT16(this.format);
        tt.writeUINT16(this.indices.length);
        var coverageIdx  = 0;
        for (range in ranges) {
            tt.writeUINT16(range[0]);
            tt.writeUINT16(range[1]);
            tt.writeUINT16(coverageIdx);
            coverageIdx = range[0] + ((range[1] - range[0]) + 1);
        }
    }

    public function get_length():Int {
        return (this.indices.length + 2) * 2;
    }


}







