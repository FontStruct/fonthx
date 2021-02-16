package fonthx.opentype.cff.charstrings;

import haxe.io.BytesBuffer;
using fonthx.opentype.postscript.Encoder;

class FixedOperation extends AbstractOperation {

    override private function encodeValue(b:BytesBuffer, v:Float) {
        b.encodeFixed(v);
    }
}


