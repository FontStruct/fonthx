package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/cmap#format-4-segment-mapping-to-delta-values
 */
class CharacterMapFormat4Subtable extends CharacterMapSubtable {

    private var segments:Array<Segment>;
    private var prepared:Bool;

    public function new(platformID:Int, encodingID:Int, languageID:Int) {
        super(platformID, encodingID, languageID);
        segments = new Array();
        prepared = false;
    }

    override public function calculateLength():Int {
        if (length == 0) {
            prepareSegments();
            var numGlyphs = codepoints.length;
            length = 16 + (segments.length * 8) + (numGlyphs * 2);
        }
        return length;
    }

    private function prepareSegments() {
        if (prepared) {
            return;
        }
        var numGlyphs = codepoints.length;
        var prevCode = codepoints[0];
        segments.push(new Segment(prevCode, 0));
        var currCode = 0;
        // work out number of segments
        for (i in 1...numGlyphs) {
            currCode = codepoints[i];
            if (currCode != (prevCode + 1)) {
                segments[segments.length - 1].end = prevCode;
                segments.push(new Segment(currCode, 0));
            }
            prevCode = currCode;
        }
        // closing segment
        segments[segments.length - 1].end = currCode;
        segments.push(new Segment(0xFFFF, 0xFFFF));
        prepared = true;
    }

    override public function write(tt:ITrueTypeWriter) {
        prepareSegments();
        var numGlyphs = codepoints.length;
        var segCount = segments.length;
        tt.writeUSHORT(4); // Format number is set to 4.
        tt.writeUSHORT(calculateLength()); // This is the length in bytes of the subtable.
        tt.writeUSHORT(0); // language 0 if not for mac.
        tt.writeUSHORT(segCount * 2); // 2 x segCount.
        var searchRange = Std.int(2 * (Math.pow(2, Math.floor(Math.log(segCount)
        / Math.log(2))))); // searchRange 2 x
        // (2**floor(log2(segCount)))
        tt.writeUSHORT(searchRange);
        tt.writeUSHORT(Std.int(Math.log(searchRange / 2) / Math.log(2))); // entrySelector
        // log2(searchRange/2)
        tt.writeUSHORT((2 * segCount) - searchRange); // rangeShift 2 x segCount -
        // searchRange

        // write ends
        for (seg in segments) {
            // endCount[segCount] End characterCode for each segment,
            // last=0xFFFF.
            tt.writeUSHORT(seg.end);
        }
        tt.writeUSHORT(0); // reservedPad Set to 0.

        // write starts
        for (seg in segments) {
            // startCount[segCount] Start character code for each segment.
            tt.writeUSHORT(seg.start);
        }

        // write deltas
        var charsSoFar = 0;
        for (seg in segments) {
            var delta = -0xFFFF;
            if (seg.start != 0xFFFF) {
                delta = getUnmapped() - (seg.start - charsSoFar);
            }
            tt.writeSHORT(delta);
            charsSoFar += ((seg.end - seg.start) + 1);
        }

        // write indexOffsets
        for (code in 0...segCount) {
            // idRangeOffset[segCount] Offsets into glyphIdArray or 0
            tt.writeUSHORT(0);
        }

        for (i in 0...numGlyphs) {
            // Glyph index array (arbitrary length)
            tt.writeUSHORT(0);
        }

    }

}

class Segment {
    public var start:Int;
    public var end:Int;
    public function new(start:Int, end:Int) {
        this.start = start;
        this.end = end;
    }
}



