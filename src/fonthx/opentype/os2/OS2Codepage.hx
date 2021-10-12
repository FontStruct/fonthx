package fonthx.opentype.os2;

class OS2Codepage {

    public var bit:Int;
    public var ranges:Array<Int>;
    public var numCodepoints:Int;

    public function new(bit:Int, numCodepoints:Int, ranges:Array<Int>) {
        this.bit = bit;
        this.numCodepoints = numCodepoints;
        this.ranges = ranges;
    }

    public function getCoverage(codepoints:Array<Int>) {
        var count = 0;
        for (cp in codepoints) {
            var found = false;
            var i = 0;
            while (i < ranges.length) {
                if (cp >= ranges[i] && cp <= ranges[i + 1]) {
                    found = true;
                    break;
                }
                i += 2;
            }
            if (found) {
                count++;
            }
        }
        return count / this.numCodepoints;
    }

}
