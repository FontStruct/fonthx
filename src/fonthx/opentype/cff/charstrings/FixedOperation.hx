package fonthx.opentype.cff.charstrings;

import haxe.io.BytesBuffer;
using fonthx.opentype.postscript.Encoder;
using fonthx.opentype.types.Fixed;

class FixedOperation extends AbstractOperation {

    /**
    * If the charstring byte contains the value 255, the next four bytes indicate a two’s complement signed number.
    * The first of these four bytes contains the highest order bits, the second byte contains the next higher order bits
    * and the fourth byte contains the lowest order bits. This number is interpreted as a Fixed;
    * that is, a signed number with 16 bits of fraction.
    **/
    override private function encodeValue(buffer:BytesBuffer, v:Float) {
        var b = v.toFixed();
        buffer.addByte(255);
        buffer.addByte((b >>> 24) & 0xFF);
        buffer.addByte((b >>> 16) & 0xFF);
        buffer.addByte((b >>> 8) & 0xFF);
        buffer.addByte(b & 0xFF);
    }
}


