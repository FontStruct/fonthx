package fonthx.opentype.cff.charstrings;

import fonthx.opentype.cff.operators.CharstringOp;
import haxe.io.Bytes;
import haxe.io.BytesBuffer;

using fonthx.opentype.postscript.Encoder;
using Lambda;

class AbstractOperation implements IOperation {

    public var op:CharstringOp;
    public var bytes(get, never):Bytes;
    private var values:Array<Float>;
    public var lastPoint(get, never):Array<Float>;

    public function new(op:CharstringOp, values:Array<Float> = null) {
        this.op = op;
        this.values = values;
    }

    private var _bytes:Bytes;
    function get_bytes():Bytes {
        if (_bytes != null) return _bytes;
        var buffer = new BytesBuffer();
        if (values != null) {
            for (v in values) {
                encodeValue(buffer, v);
            }
        }
        buffer.encodeOperator(op);
        _bytes = buffer.getBytes();
        return _bytes;
    }

    private function encodeValue(b:BytesBuffer, v:Float) {
        b.encodeInt(Std.int(v));
    }

    function get_lastPoint():Array<Float> {
        return this.values.length > 1? [this.values[this.values.length- 2], this.values[this.values.length- 1]] : null;
    }

    public function toString():String {
        return Std.string(op) + ":" + values.map(function(v:Float) {
            return Std.string(v);
        }).join(',');
    }
}


