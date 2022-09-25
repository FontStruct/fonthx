package fonthx.opentype.os2;

#if macro
import haxe.io.Path;
import haxe.macro.Context;
import haxe.macro.Type;
import sys.io.File;
import haxe.macro.Expr.ExprOf;
#end

class OS2RangeProviderMacro {
    // https://stackoverflow.com/questions/63364360/haxe-4-uncaught-exception-macro-in-macro
    macro public static function getRanges() {
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
}
