package fonthx.opentype.os2;

import haxe.Json;
import haxe.ds.IntMap;
using Lambda;


#if macro
import haxe.macro.Expr;
import haxe.io.Path;
import haxe.macro.Context;
import haxe.macro.Type;
import sys.io.File;
import sys.FileSystem;
import haxe.macro.Expr.ExprOf;
#end




class OS2Codepages {

    public static var codepages:Array<OS2Codepage> = new Array();

    public static function getFunctionalCodepages(codepoints:Array<Int>, threshold = 0.5) {
        if (codepages.length == 0) {
            OS2CompiledCodepages.init();
        }
        var functionalBits = new Array<Int>();
        for (page in codepages) {
            if (codepoints.length / page.numCodepoints < threshold) {
                continue; // no chance!!
            }
            if (page.getCoverage(codepoints) > threshold) {
                functionalBits.push(page.bit);
            }
        }
        return functionalBits;
    }



}
