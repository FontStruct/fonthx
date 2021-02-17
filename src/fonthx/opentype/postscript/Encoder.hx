package fonthx.opentype.postscript;
import fonthx.utils.StepIterator.StepIterator;
import haxe.io.BytesBuffer;
using StringTools;
using fonthx.opentype.types.Fixed;

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

    // see also https://github.com/caryll/otfcc/blob/235d1bd6fb81c8daeaa5232aa840c1e37f07fa86/lib/libcff/cff-codecs.c#L49
    // or https://gist.github.com/rsms/efd5663749a9b66bc53be8f85becc9d2
    // or https://github.com/adobe-type-tools/afdko/blob/2c36ad10f9d964759f643e8ed7b0972a27aa26bd/c/makeotf/makeotf_lib/source/typecomp/dict.c#L26
    public static function encodeFloat(bytes:BytesBuffer, f:Float) {
        if (f == 0) {
            bytes.addByte(30);
            bytes.addByte(0x0F);
            return;
        }
        // todo parameterize precision
        // https://stackoverflow.com/questions/23689001/how-to-reliably-format-a-floating-point-number-to-a-specified-number-of-decimal
        var s = Std.string(f);
        encodeStringAsFloat(bytes, s);
    }

    public static function encodeStringAsFloat(bytes:BytesBuffer, s:String) {
        var s = s.toLowerCase().replace('+', '');
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
            } else if (c == '–' || c == '−' || c == '-' || c == '-') { // check for en dash, then minus, then hyphen-minus then hyphen – todo regex above
                if (nibbles.length > 0 && nibbles[nibbles.length - 1] == 0xb) {
                    nibbles.pop();
                    nibbles.push(0xc);
                } else {
                    nibbles.push(0xe);
                }
            }
        }
        nibbles.push(0xf); // end of number
        if (nibbles.length % 2 != 0) {
            nibbles.push(0xf);
        }

        bytes.addByte(30);
        for (i in new StepIterator(0, nibbles.length, 2)) {
            bytes.addByte(nibbles[i] << 4 | nibbles[i + 1]);
        }
    }


    public static function round(number:Float, precision = 2): Float
    {
        number *= Math.pow(10, precision);
        return Math.round(number) / Math.pow(10, precision);
    }

}
