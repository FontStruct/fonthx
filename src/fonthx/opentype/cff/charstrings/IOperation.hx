package fonthx.opentype.cff.charstrings;

import fonthx.model.geom.Point;
import haxe.io.Bytes;
interface IOperation {
    var bytes(get, never):Bytes;
    var lastPoint(get, never):Array<Float>;
}
