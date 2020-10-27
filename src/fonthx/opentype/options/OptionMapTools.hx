package fonthx.opentype.options;

import haxe.ds.StringMap;
class OptionMapTools {

    public static function getBool(options:StringMap<String>, k:String, def:Bool = false):Bool {
        if (!options.exists(k)) return def;
        var v = options.get(k);
        return v == '1' || v == 'true';
    }

    public static function getInt(options:StringMap<String>, k:String, def:Int = -1):Int {
        if (!options.exists(k)) return def;
        return Std.parseInt(options.get(k));
    }

    public static function getFloat(options:StringMap<String>, k:String, def:Float = -1):Float {
        if (!options.exists(k)) return def;
        return Std.parseFloat(options.get(k));
    }

    public static function getString(options:StringMap<String>, k:String, def:String = null):String {
        if (!options.exists(k)) return def;
        return options.get(k);
    }

    public static function merge(defaults:StringMap<String>, options:StringMap<String> = null) {
        var merged = new StringMap<String>();
        for (key in defaults.keys()) {
            merged.set(key, defaults.get(key));
        }
        if (options != null) {
            for (key in options.keys()) {
                merged.set(key, options.get(key));
            }
        }
        return merged;
    }

}
