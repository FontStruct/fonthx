package fonthx.opentype.cff;

import haxe.io.BytesBuffer;

using fonthx.opentype.postscript.Encoder;

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
            bytes.encodeInt(i);
        }
        bytes.encodeOperator(k);
    }

    public function addInt(k:Int, v:Int) {
        bytes.encodeInt(v);
        bytes.encodeOperator(k);
    }

    public function addBoolean(k:Int, b:Bool) {
        addInt(k, b ? 1 : 0);
    }

    public function addReal(k:Int, f:Float) {
        bytes.encodeFixed(f);
        bytes.encodeOperator(k);
    }

}
