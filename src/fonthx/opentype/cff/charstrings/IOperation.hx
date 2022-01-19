package fonthx.opentype.cff.charstrings;

import fonthx.opentype.cff.operators.CharstringOp;
import haxe.io.Bytes;

interface IOperation {
    var op:CharstringOp;
    var bytes(get, never):Bytes;
    var lastPoint(get, never):Array<Float>;
    function toString():String;
}
