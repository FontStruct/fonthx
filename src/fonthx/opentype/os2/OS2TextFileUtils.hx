package fonthx.opentype.os2;
using StringTools;

class OS2TextFileUtils {

    public static function getSignificantLines(txt:String):Array<String> {
        return txt.split('\n').map(function(s:String) {
            return s.trim();
        }).filter(function(s:String) {
            return s != null && s.length > 0 && s.charAt(0) != '#';
        });
    }

}