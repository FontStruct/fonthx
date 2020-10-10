package fonthx.formats.tt.tables.opentype.lookup.coverage;

using Lambda;

class CoverageTableHelper {

    public static function getCoverageTable(indices:Array<Int>):ICommonTable {
        var ranges = CoverageTableHelper.buildRanges(indices);
        if (CoverageTableHelper.preferRanges(ranges, indices)) {
            return new GlyphRangeCoverageTable(ranges);
        }
        return new GlyphIndexCoverageTable(indices);
    }

    public static function buildRanges(indices:Array<Int>):Array<CoverageRange> {
        var prev = -2;
        var currRange:CoverageRange = null;
        var ranges:Array<CoverageRange> = indices.fold(function(glyphIdx:Int, acc:Array<CoverageRange>) {
            if (glyphIdx != prev + 1) {
                if (currRange != null) {
                    currRange.end = prev;
                }
                currRange = new CoverageRange(glyphIdx);
                acc.push(currRange);
            }
            prev = glyphIdx;
            return acc;
        }, []);
        if (ranges.length > 0 && ranges[ranges.length - 1].end == -1) {
            ranges[ranges.length - 1].end = prev;
        }
        if (ranges.length > 1) {
            for (i in 1...ranges.length) {
                var prev = ranges[i - 1];
                var curr = ranges[i];
                // For each successive range, the starting Coverage Index is one greater than the ending Coverage Index of the the preceding range.
                curr.idx = prev.idx + (prev.end - prev.start) + 1;
            }
        }
        return ranges;
    }

    public static function preferRanges(ranges:Array<CoverageRange>, indices:Array<Int>):Bool {
        return (4 + (ranges.length * 6)) <= (4 + (indices.length * 2));
    }

}
