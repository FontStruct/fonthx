package fonthx.opentype.os2;

#if macro
import haxe.io.Path;
import haxe.macro.Context;
import haxe.macro.Type;
import sys.io.File;
import haxe.macro.Expr.ExprOf;
#end

import haxe.ds.IntMap;

class OS2Ranges {

    private static var ranges:Array<OS2Range> = getRanges();

    public static macro function getRanges() {
        var ranges = [];
        #if macro
        var posInfos = Context.getPosInfos(Context.currentPos());
        var filePath:String = Path.join([Path.directory(posInfos.file), 'os2ranges.txt']);
        var txt:String = File.getContent(filePath);
        #end
        var lines:Array<String> = OS2TextFileUtils.getSignificantLines(txt);
        var lastBit = 0;
        for (line in lines) {
            var parts = line.split(';');
            if (parts.length != 4) continue;
            var bitS = parts[0];
            var bit = 0;
            if (bitS == '-') {
                bit = lastBit;
            } else {
                bit  = Std.parseInt(parts[0]);
            }
            lastBit = bit;
            var name = parts[1];
            var extremes = parts[2].split('-');
            var from = Std.parseInt('0x${extremes[0]}');
            var to = Std.parseInt('0x${extremes[1]}');
            var version = 1;
            if (parts[3] != '-') {
                version = Std.parseInt(parts[3]);
            }
            ranges.push(macro new fonthx.opentype.os2.OS2Range($v{bit},$v{name},$v{from},$v{to},$v{version}));
        }
        return macro $a{ranges};
    }

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
