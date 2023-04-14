package fonthx.utils;

import fonthx.Assets;
import haxe.ds.IntMap;
import haxe.ds.StringMap;
import haxe.io.Bytes;
import haxe.io.BytesBuffer;

class StringEncoder {

    private static var encodings = new StringMap<IntMap<Int>>();

    /**
        Encode the given string in the given encoding (supported encodings: Encoding.MACROMAN)
        @param s the string to encode
        @param encodingName the encoding
    **/
    public static function encode(s:String, encoding:Encoding):Bytes {
        var buffer = new BytesBuffer();
        var encodingMap = getEncoding(encoding);
        for (i in 0...s.length) {
            var code = s.charCodeAt(i);
            var encoded = encodingMap.get(code);
            if (encoded != null) {
                // todo perhaps throw exception if we cannot encode
                buffer.addByte(encoded);
            }
        }
        var bytes = buffer.getBytes();
        return bytes;
    }

    private static function getEncoding(encoding:Encoding):IntMap<Int> {
        var encodingName = cast(encoding, String);
        var encodingMap = encodings.get(encodingName);
        if (encodingMap == null) {
            // load the encoding from the resource
            var text = Assets.getText("ENC" + encodingName.toUpperCase());
            var lines = text.split("\n");
            encodingMap = new IntMap();
            for (line in lines) {
                if (line.indexOf('#') == 0 || line.length == 0) {
                    continue;
                }
                var r = ~/\s/g;
                var parts = r.split(line);
                if (parts.length < 2) {
                    continue;
                }
                var codepoint = Std.parseInt(parts[0]);
                var unicode = Std.parseInt(parts[1]);
                encodingMap.set(unicode, codepoint);
            }
            encodings.set(encodingName, encodingMap);
        }
        return encodingMap;
    }
}

@:enum
@:dox(hide)
abstract Encoding(String) {
    var MACROMAN = 'MACROMAN';
}
