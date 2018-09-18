package fonthx.formats.tt.utils;

import haxe.Int64;

class Utils {

    /**
	 * Number of seconds since 12:00 midnight, January 1, 1904. 64-bit integer
	 * @return
	 */
    public static function getMillisSince1904(date:Date):Int64 {
        // millis since midnight 01/01/70;
        // this ain’t workin
        var now:Int64 = Int64.fromFloat(date.getTime());
        var dayInMillis:Int64 = Int64.ofInt(24 * 60 * 60 * 1000);
        var days1904To1970:Int64 = Int64.ofInt((365 * (1970 - 1904)) + 17); // 17 leap years
        var millis1904To1970:Int64 = days1904To1970 * dayInMillis;
        now += millis1904To1970;
        now /= 1000;
        return now;
    }

}
