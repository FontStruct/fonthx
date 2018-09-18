package fonthx.utils;

/**
    Math Utility constants and functions
**/
@:dox(hide)
class MathUtils {

    public static var MAX_INT = 2147483647;
    public static var MIN_INT = -2147483648;

    /**
        Int Max (Math.max in Haxe is Float)
    **/
    public static function maxint(a:Int, b:Int):Int {
        return (a > b) ? a : b;
    }

    /**
        Int Min (Math.min in Haxe is Float)
    **/
    public static function minint(a:Int, b:Int):Int {
        return (a < b) ? a : b;
    }

}
