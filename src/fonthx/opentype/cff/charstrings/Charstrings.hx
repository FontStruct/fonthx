package fonthx.opentype.cff.charstrings;
import fonthx.model.font.IFont;
import fonthx.opentype.writers.ITrueTypeWriter;
import haxe.ds.StringMap;
import haxe.io.Bytes;
using fonthx.opentype.options.OptionMapTools;

class Charstrings {

    public var subrs:Array<Subpath>;
    var subrLookup:StringMap<Int>;
    var charstrings:Array<Charstring>;
    var current:Charstring;

    public function new() {
        charstrings = new Array();
        subrs = new Array();
        subrLookup = new StringMap();
    }

    // https://github.com/caryll/otfcc/blob/4c4f7993024068bcab672471cc7563e3998d3ad4/lib/libcff/charstring-il.c
    // https://github.com/opentypejs/opentype.js/blob/ea4009e6d44678322cf34bb39b95cb47be1787ba/src/tables/cff.js#L1154
    public function write(tt:ITrueTypeWriter, f:IFont, options:BuildOptions) {
        for (g in f.glyphs) {
            var charstring = new Charstring(g.advancedWidth, options.useFixedCoordinatesInCFF);
            g.walkContours(charstring);
            charstrings.push(charstring);
        }

        if (options.useSubroutinesInCFF) {
            // find subpaths which are used multiple times and record these as subroutines
            // this is very basic
            var subpathCounts = new StringMap<Int>();
            for (charstring in charstrings) {
                for (subpath in charstring.subpaths) {
                    var hash = subpath.getHash();
                    if (subpathCounts.exists(hash) && !subrLookup.exists(hash)) {
                        // this subpath is used more than once, so we record it as a subroutine
                        subrLookup.set(hash, subrs.length);
                        subrs.push(subpath.clone());
                    } else {
                        subpathCounts.set(hash, 1);
                    }
                }
            }
            // replace charstrings with subroutines
            var bias = 32768;
            if (subrs.length < 33900) {
                bias = 1131;
            }
            if (subrs.length < 1240) {
                bias = 107;
            }
            for (charstring in charstrings) {
                for (subpath in charstring.subpaths) {
                    var hash = subpath.getHash();
                    if (subrLookup.exists(hash)) {
                        subpath.replaceWithGlobalSubroutine(subrLookup.get(hash) - bias);
                    }
                }
            }
        }

        // write index of charstrings
        var charstringBlocks:Array<Bytes> = new Array();

        for (charstring in charstrings) {
            charstringBlocks.push(charstring.bytes);

        }
        tt.writeByteBlockIndex(charstringBlocks);
    }
}