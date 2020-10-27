package fonthx.opentype.types;

class Fixed {

    // Fixed:
    // 32-bit signed fixed-point number (16.16)
    // A 32-bit signed fixed-point number with a 16 bit twos-complement
    //	magnitude component and 16 fractional bits.
    // @see https://fonttools.readthedocs.io/en/latest/_modules/fontTools/misc/fixedTools.html#floatToFixed
    public static function toFixed(f:Float, precisionBits:Int = 16):Int {
        return Fixed.round(f * (1 << precisionBits));
    }

    // https://fonttools.readthedocs.io/en/latest/_modules/fontTools/misc/fixedTools.html#otRound
    public static function round(f:Float) {
        return Std.int(Math.floor(f + 0.5));
    }

}
