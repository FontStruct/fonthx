package fonthx.opentype.cff.charstrings;

import fonthx.opentype.cff.operators.CharstringOp;
import haxe.crypto.Md5;
import haxe.io.Bytes;
import haxe.io.BytesBuffer;
using Lambda;

class Subpath {

    var ops:Array<IOperation>;
    public var bytes(get, never):Bytes;

    public function new() {
        ops = new Array();
    }

    public function addOperation(op:IOperation) {
        ops.push(op);
        _bytes = null;
    }

    private var _hash:String;
    public function getHash(forceRehash = false):String {
        if (_hash == null || forceRehash) {
         _hash = Md5.encode(bytes.toString()).toString();
        }
        return _hash;
    }


    public function replaceWithGlobalSubroutine(subrIdx:Int) {
        ops = new Array();
        addOperation(new IntegerOperation(CharstringOp.callgsubr, [subrIdx]));
    }

    private var _bytes:Bytes;
    function get_bytes() {
        if (_bytes != null) return _bytes;
        var buffer:BytesBuffer = ops.fold(function(op:IOperation, b:BytesBuffer) {
            b.addBytes(op.bytes, 0, op.bytes.length);
            return b;
        }, new BytesBuffer());
        _bytes = buffer.getBytes();
        return _bytes;
    }
}




