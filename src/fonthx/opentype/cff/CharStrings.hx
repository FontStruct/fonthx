package fonthx.opentype.cff;
import haxe.ds.StringMap;
import fonthx.model.font.IFont;
import fonthx.opentype.writers.ITrueTypeWriter;
using fonthx.opentype.options.OptionMapTools;
using fonthx.opentype.options.BuildOptions.BuildOptions;

class CharStrings {

    // https://github.com/caryll/otfcc/blob/4c4f7993024068bcab672471cc7563e3998d3ad4/lib/libcff/charstring-il.c
    // https://github.com/opentypejs/opentype.js/blob/ea4009e6d44678322cf34bb39b95cb47be1787ba/src/tables/cff.js#L1154
    public static function write(tt:ITrueTypeWriter, f:IFont, options:StringMap<String>) {
        var useFixed = options.getBool(BuildOptions.useFixedCoordinatesInCFF);
        for (g in f.glyphs) {
            // g.walkContours()
        }
    }
}
