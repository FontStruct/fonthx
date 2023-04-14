package fonthx.opentype.utils;

import haxe.iterators.StringIterator;
import haxe.Int64;

class Utils {

    /**
	 * Number of seconds since 12:00 midnight, January 1, 1904. 64-bit integer
	 * @return
	 */
    public static function getMillisSince1904(date:Date):Int64 {
        // millis since midnight 01/01/70;
        // todo check this
        var now:Int64 = Int64.fromFloat(date.getTime());
        var dayInMillis:Int64 = Int64.ofInt(24 * 60 * 60 * 1000);
        var days1904To1970:Int64 = Int64.ofInt((365 * (1970 - 1904)) + 17); // 17 leap years
        var millis1904To1970:Int64 = days1904To1970 * dayInMillis;
        now += millis1904To1970;
        now /= 1000;
        return now;
    }

    public static function postscriptName(s:String):String {
        var iter = new StringIterator(s);
        var psName = '';
        for (code in iter) {
            // and restricted to the printable ASCII subset, codes 33 through 126,
            if (code < 33 || code > 126) continue;
            // except for the 10 characters: '[', ']', '(', ')', '{', '}', '<', '>', '/', '%'.
            if ([91, 93, 40, 41, 123, 125, 60, 62, 47, 37].indexOf(code) != -1) continue;
            psName += String.fromCharCode(code);
        }
        // and no longer than 63 characters;
        return psName.substr(0, 63);
    }

}
