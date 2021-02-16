package fonthx.opentype.postscript;
import haxe.io.BytesBuffer;
using StringTools;

class Encoder {

    public static function encodeOperator(bytes:BytesBuffer, op:Int) {
        if (op > 0xFF) {
            bytes.addByte(op >> 8);
            op = op & 0xFF;
        }
        bytes.addByte(op);
    }

    // https://github.com/caryll/otfcc/blob/master/lib/libcff/cff-codecs.c#L30
    public static function encodeInt(bytes:BytesBuffer, v:Int) {
        if (v >= -107 && v <= 107) {
            bytes.addByte(v + 139);
        } else if (v >= 108 && v <= 1131) {
            v -= 108;
            bytes.addByte((v >> 8) + 247);
            bytes.addByte(v & 0xFF);
        } else if (v >= -1131 && v <= -108) {
            v = -108 - v;
            bytes.addByte((v >> 8) + 251);
            bytes.addByte(v & 0xFF);
        } else if (v >= -32768 && v < 32768) {
            bytes.addByte(28);
            bytes.addByte(v >> 8);
            bytes.addByte(v & 0xFF);
        } else if (v >= -32768 && v < 32768) {
            bytes.addByte(29);
            bytes.addByte((v >> 24) & 0xff);
            bytes.addByte((v >> 16) & 0xff);
            bytes.addByte((v >> 8) & 0xff);
            bytes.addByte(v & 0xff);
        }
    }

    public static function encodeFixed(bytes:BytesBuffer, f:Float) {
        // todo quantizing option for f?
        bytes.addByte(30);
        if (f == 0) {
            bytes.addByte(0x0F);
            return;
        }
        var s = Std.string(f).toLowerCase().replace('+', '');
        var chars = s.split('');
        var nibbles = new Array<Int>();
        for (c in chars) {
            var ord = c.charCodeAt(0) - 0x30;
            if (ord >= 0 && ord < 10) {
                nibbles.push(ord);
            } else if (c == '.') {
                nibbles.push(0xa);
            } else if (c == 'e') {
                nibbles.push(0xb);
            } else if (c == '-') {
                if (nibbles.length > 0 && nibbles[nibbles.length - 1] == 0xb) {
                    nibbles.pop();
                    nibbles.push(0xc);
                } else {
                    nibbles.push(0xe);
                }
            }
        }
        nibbles.push(0xf);
        if (nibbles.length % 2 == 1) {
            nibbles.push(0xf);
        }
        for (nibble in nibbles) {
            bytes.addByte(nibble);
        }
    }
}
