package fonthx.opentype.cff.charstrings;

import haxe.crypto.Md5;
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
            var buf = getBytes(false).getBytes();
            var len:Int = buf.length;
            if (len % 16 != 0) {
                var paddedLen:Int = Math.ceil(len / 16) * 16;
                var buf2:Bytes = Bytes.alloc(paddedLen);
                buf2.fill(0, paddedLen, 0x65);
                buf2.blit(0, buf, 0, len);
                buf = buf2;
            }
            _hash = Md5.encode(Md5.make(buf).toString());
        }
        return _hash;
    }

    public function replaceWithGlobalSubroutine(subrIdx:Int) {
        var moveTo = ops[0];
        ops = new Array();
        addOperation(moveTo);
        addOperation(new IntegerOperation(CharstringOp.callgsubr, [subrIdx]));
    }

    private var _bytes:Bytes;
    function get_bytes() {
        if (_bytes == null) {
            _bytes = getBytes().getBytes();
        }
        return _bytes;
    }

    public function clone():Subpath {
        var s = new Subpath();
        for (op in ops) {
            s.addOperation(op);
        }
        return s;
    }

    public function getBytes(withMoveTo:Bool = true):BytesBuffer {
        var idx = 0;
        return ops.fold(function(op:IOperation, b:BytesBuffer) {
            if (idx != 0 || withMoveTo) {
                b.addBytes(op.bytes, 0, op.bytes.length);
            }
            idx++;
            return b;
        }, new BytesBuffer());
    }

    public function toString():String {
        return ops.map(function(op:IOperation) {
            return op.toString();
        }).join('|');
    }

}




