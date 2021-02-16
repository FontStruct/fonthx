package fonthx.opentype.codepage;

import haxe.ds.IntMap;
import fonthx.Assets;

// todo incomplete
class OS2Codepage {

    public static var LATIN_1 = 1252;
    public static var LATIN_2 = 1250;
    public static var CYRILLIC = 1251;
    public static var GREEK = 1253;
    public static var TURKISH = 1254;
    public static var HEBREW = 1255;
    public static var ARABIC = 1256;
    public static var WINDOWS_BALTIC = 1257;
    public static var VIETNAMESE = 1258;
    public static var THAI = 874;
    public static var JIS_JAPAN = 932;
    public static var CHINESE_SIMPLIFIED = 936;
    public static var KOREAN_WANSUNG = 949;
    public static var CHINESE_TRADITIONAL = 950;

    private static var inited = false;
    private static var bits:IntMap<Int>;

    /*	
21 	1361 	Korean Johab
22-28 	  	Reserved for Alternate ANSI & OEM
29 	  	Macintosh Character Set (US Roman)
30 	  	OEM Character Set
31 	  	Symbol Character Set
32-47 	  	Reserved for OEM
48 	869 	IBM Greek
49 	866 	MS-DOS Russian
50 	865 	MS-DOS Nordic
51 	864 	Arabic
52 	863 	MS-DOS Canadian French
53 	862 	Hebrew
54 	861 	MS-DOS Icelandic
55 	860 	MS-DOS Portuguese
56 	857 	IBM Turkish
57 	855 	IBM Cyrillic; primarily Russian
58 	852 	Latin 2
59 	775 	MS-DOS Baltic
60 	737 	Greek; former 437 G
61 	708 	Arabic; ASMO 708
62 	850 	WE/Latin 1
63 	437 	US
 */

    private var id:Int;
    private var bit:Int;
    private var codepoints:Array<Int>;

    public function new(id:Int) {
        this.id = id;
        codepoints = new Array<Int>();
        load();
        if (!inited) {
            init();
        }
        bit = bits.get(id);
    }

    private static function init() {
        bits = new IntMap<Int>();
        bits.set(LATIN_1, 0);
        bits.set(LATIN_2, 1);
        bits.set(CYRILLIC, 2);
        bits.set(GREEK, 3);
        bits.set(TURKISH, 4);
        bits.set(HEBREW, 5);
        bits.set(ARABIC, 6);
        bits.set(WINDOWS_BALTIC, 7);
        bits.set(VIETNAMESE, 8);
        bits.set(THAI, 16);
        bits.set(JIS_JAPAN, 17);
        bits.set(CHINESE_SIMPLIFIED, 18);
        bits.set(KOREAN_WANSUNG, 19);
        bits.set(CHINESE_TRADITIONAL, 20);
        inited = true;
    }

    private function load() {
        var text = Assets.getText("CP" + id);
        var lines = text.split("\n");
        var splitter = ~/\s+/g;
        for (line in lines) {
            if (line.substr(0, 1) == '#' || line.length == 0) {
                continue;
            }
            var parts = splitter.split(line);
            if (parts.length < 2) {
                continue;
            }
            codepoints.push(Std.parseInt(parts[1]));
        }
    }

    public function getBit() {
        return bit;
    }

    public function isFunctional(available:Array<Int>) {
        var needed = Std.int(codepoints.length * 0.5);
        var has = 0;
        for (cp in available) {
            if (codepoints.indexOf(cp) != -1) {
                has++;
                if (has >= needed) {
                    return true;
                }
            }
        }
        return false;
    }

}
