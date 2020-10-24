package fonthx.model.font.glyphnames;
import haxe.ds.IntMap;

class AGLFN {

    public static var uvToGlyphName:IntMap<String>;

    public static function init() {
        if (uvToGlyphName != null) return;
        uvToGlyphName = new IntMap();
        var text = Assets.getText("AGLFN");
        var lines = text.split("\n");
        var splitter = ~/\s+/g;
        for (line in lines) {
            if (line.substr(0, 1) == '#' || line.length == 0) {
                continue;
            }
            var parts = line.split(';');
            if (parts.length != 3) continue;
            uvToGlyphName.set(Std.parseInt("0x" + parts[0]), parts[1]);
        }
    }
}
