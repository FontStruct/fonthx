package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/cmap#format-4-segment-mapping-to-delta-values
 */
class CharacterMapFormat4Subtable extends CharacterMapSubtable {

    private var segments:Array<Segment>;

    public function new(platformID:Int, encodingID:Int, languageID:Int) {
        super(platformID, encodingID, languageID);
        segments = new Array();
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
        if (segments.length > 0) {
            return;
        }
        var prevCode = -100;
        var currCode = 0;
        var currSeg:Segment = null;
        for (i in 0...codepoints.length) {
            currCode = codepoints[i];
            var mappable = currCode > 0;
            var consecutive = currCode == (prevCode + 1);
            if (!consecutive) {
                if (currSeg != null) {
                    currSeg.end  = prevCode;
                    segments.push(currSeg);
                }
                if (mappable) {
                    currSeg = new Segment(currCode, 0, i - currCode);
                }
            }
            if (mappable) {
                prevCode = currCode;
            }
        }
        // closing last segment
        if (currSeg != null && currCode > 0) {
            currSeg.end = currCode;
            segments.push(currSeg);
        }
        segments.push(new Segment(0xFFFF, 0xFFFF));
        //trace(groups);
    }

    override public function write(tt:ITrueTypeWriter) {
        prepareSegments();
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
        for (seg in segments) {
            tt.writeSHORT(seg.idDelta);
        }

        // write indexOffsets
        for (code in 0...segments.length) {
            // idRangeOffset[segCount] Offsets into glyphIdArray or 0
            tt.writeUSHORT(0);
        }

        var numGlyphs = codepoints.filter(function(cp:Int) {
            return cp > 0;
        }).length;
        for (i in 0...numGlyphs) {
            // Glyph index array (arbitrary length)
            tt.writeUSHORT(0);
        }

    }

}

class Segment {
    public var start:Int;
    public var end:Int;
    public var idDelta:Int;
    public function new(start:Int, end:Int, idDelta:Int = 1) {
        this.start = start;
        this.end = end;
        this.idDelta = idDelta;
    }
}



