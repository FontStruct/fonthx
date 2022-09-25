package fonthx.opentype.os2;



import fonthx.opentype.os2.OS2RangeProviderMacro;
import haxe.ds.IntMap;

class OS2Ranges {

    private static var ranges:Array<OS2Range> = OS2RangeProviderMacro.getRanges();



    public static function getFunctionalRanges(codepoints:Array<Int>, threshold = 0.5) {
        var counts:IntMap<Int> = new IntMap<Int>();
        var hasSMP = false;
        for (cp in codepoints) {
            var bit = getBitForCodepoint(cp);
            if (bit >= 0) {
                if (counts.exists(bit)) {
                    counts.set(bit, counts.get(bit) + 1);
                } else {
                    counts.set(bit, 1);
                }
            }
            if (cp > 0xFFFF) {
                hasSMP = true;
            }
        }
        var functionalBits = new Array<Int>();
        for (bit in counts.keys()) {
            var range = getRangeForBit(bit);
            var coverage = counts.get(bit) / (range.to - range.from);
            if (coverage > threshold) {
                functionalBits.push(bit);
            }
        }
        if (hasSMP && functionalBits.indexOf(57) == -1) {
            functionalBits.push(57);
        }
        return functionalBits;
    }

    public static function getBitForCodepoint(codepoint:Int):Int {
        for (range in ranges) {
            if (codepoint >= range.from && codepoint <= range.to) {
                return range.bit;
            }
        }
        return -1;
    }

    public static function getRangeForBit(bit:Int):OS2Range {
        for (range in ranges) {
            if (bit == range.bit) {
                return range;
            }
        }
        return null;
    }



}
