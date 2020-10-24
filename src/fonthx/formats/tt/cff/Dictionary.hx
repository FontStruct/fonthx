package fonthx.formats.tt.cff;

import haxe.io.BytesBuffer;

using StringTools;

/**
* Font dictionary data comprising key-value pairs is represented in a compact tokenized format that is similar to that
* used to represent Type 1 charstrings.
*
* Dictionary keys are encoded as *1- or 2-byte* operators (keys) and dictionary values are
* encoded as variable-size *numeric* operands that represent either integer or real values.
*
* An operator is preceded by the operand(s) that specify its value.
* value,value,value,key|value,key|value,key|value,value,key …
*
* A DICT is simply a sequence of operand(s)/operator – value(s)/key) – bytes concatenated together.
*
* Operators and operands may be distinguished by inspection of their first byte:
* 0–21 specify operators and 28, 29, 30, and 32–254 specify operands (numbers).
* Byte values 22–27, 31, and 255 are reserved.
* An operator may be preceded by up to a maximum of 48 operands.
*
**/
class Dictionary {

    public var bytes:BytesBuffer;

    public function new() {
        bytes = new BytesBuffer();
    }

    public function addIntArray(k:Int, v:Array<Int>) {
        for (i in v) {
            encodeInt(i);
        }
        encodeKey(k);
    }

    public function addInt(k:Int, v:Int) {
        encodeInt(v);
        encodeKey(k);
    }

    public function addBoolean(k:Int, b:Bool) {
        addInt(k, b ? 1 : 0);
    }

    public function addReal(k:Int, f:Float) {
        encodeFloat(f);
        encodeKey(k);
    }

    // https://github.com/caryll/otfcc/blob/master/lib/libcff/cff-codecs.c#L30
    private function encodeInt(v:Int) {
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

    private function encodeKey(k:Int) {
        if (k > 0xFF) {
            bytes.addByte(k >> 8);
            k = k & 0xFF;
        }
        bytes.addByte(k);
    }

    private function encodeFloat(f:Float) {
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

    static public function escapeOp(v:Int) {
        return 0xC00 | v;
    }


}
