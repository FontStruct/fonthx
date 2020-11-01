package fonthx.opentype.cff.charstrings;

import haxe.io.Bytes;
interface IOperation {
    var bytes(get, never):Bytes;
    var lastPoint(get, never):Array<Float>;
}
