package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/cmap
 */
class CharacterMapFormat4Subtable extends CharacterMapSubtable {

    private var segStarts:Array<Int> ; // array of segment start codes
    private var segEnds:Array<Int> ; // array of segment end codes
    private var segCount:Int;
    private var prepared:Bool;

    /**
	 * Construct a new CharacterMapFormat4Subtable
	 */
    public function new(platformID:Int, encodingID:Int, languageID:Int) {
        super(platformID, encodingID, languageID);
        segStarts = new Array();
        segEnds = new Array();
        prepared = false;
    }

    override public function calculateLength():Int {
        if (length == 0) {
            prepareSegments();
            var numGlyphs = codepoints.length;
            length = 16 + (segCount * 8) + (numGlyphs * 2);
//            var over = length % 4;
//            if (over != 0) {
//               length += (4 - over);
//            }
        }
        return length;
    }

    private function prepareSegments() {
        if (prepared) {
            return;
        }
        var numGlyphs = codepoints.length;
        segCount = 1;
        var prevCode = codepoints[0];
        segStarts.push(prevCode);
        segEnds.push(0);
        var currCode = 0;
        // work out number of segments
        for (i in 1...numGlyphs) {
            currCode = codepoints[i];
            if (currCode != (prevCode + 1)) {
                segEnds[segCount - 1] = prevCode;
                segStarts.push(currCode);
                segEnds.push(0);
                segCount++;
            }
            prevCode = currCode;
        }
        // closing segment
        segEnds[segCount - 1] = currCode;
        segEnds.push(0xFFFF);
        segStarts.push(0xFFFF);
        segCount++;
        prepared = true;
    }

    override public function write(tt:ITrueTypeWriter) {
        prepareSegments();
        var numGlyphs = codepoints.length;
        tt.writeUSHORT(4); // Format number is set to 4.
        tt.writeUSHORT(calculateLength()); // This is the length in bytes of the subtable.
        tt.writeUSHORT(0); // language 0 if not for mac.
        tt.writeUSHORT(segCount * 2); // segCountX2 2 x segCount.
        var searchRange = Std.int(2 * (Math.pow(2, Math.floor(Math.log(segCount)
        / Math.log(2))))); // searchRange 2 x
        // (2**floor(log2(segCount)))
        tt.writeUSHORT(searchRange);
        tt.writeUSHORT(Std.int(Math.log(searchRange / 2) / Math.log(2))); // entrySelector
        // log2(searchRange/2)
        tt.writeUSHORT((2 * segCount) - searchRange); // rangeShift 2 x segCount -
        // searchRange

        // write ends
        for (code in segEnds) {
            // endCount[segCount] End characterCode for each segment,
            // last=0xFFFF.
            tt.writeUSHORT(code);
        }
        tt.writeUSHORT(0); // reservedPad Set to 0.

        // write starts

        for (code in segStarts) {
            // startCount[segCount] Start character code for each segment.
            tt.writeUSHORT(code);
        }

        // write deltas
        var charsSoFar = 0;
        for (i in 0...segCount) {
            var start = segStarts[i];
            var delta = -0xFFFF;
            if (start != 0xFFFF) {
                delta = getUnmapped() - (start - charsSoFar);
            }
            tt.writeSHORT(delta);
            var end = segEnds[i];

            //trace("Segment " + start + "-" + end + " Delta " + delta + " chars previous " + charsSoFar);

            charsSoFar += ((end - start) + 1);
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



