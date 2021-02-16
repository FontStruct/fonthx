package fonthx.opentype.cff;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.model.font.IFont;

using Lambda;

class Charsets {

    public static function write(tt:ITrueTypeWriter, f:IFont, strings:Strings) {
        var notdef = '.notdef';

        // range calculation based on fonttools implementation
        // https://rsms.me/fonttools-docs/_modules/fontTools/cffLib.html#packEncoding1
        // see also https://github.com/fontforge/fontforge/blob/db455c1e90b3a578afe3c6c438c9962e58d06423/fontforge/tottf.c#L1749
        var ranges = new Array<SIDRange>();
        var first = -1;
        var end = 0;
        for (g in f.glyphs) {
            if (g.name == notdef) continue;
            var sid = strings.sid(g.name);
            if (sid != -1) {
                if (first == -1) {
                    first = sid;
                } else if (sid != end + 1) {
                    ranges.push(new SIDRange(first, end - first));
                    first = sid;
                }
                end = sid;
            } else {
                trace("SID not found");
            }
        }
        if (end > 0) {
            ranges.push(new SIDRange(first, end - first));
        }

        // choose format
        var format:Int = 0;
        // if the number of ranges is less than 90% of the number of glyphs, then we will use ranges
        if (ranges.length < (f.glyphs.length * 0.9)) {
            format = 1;
            var maxRange = ranges.fold(function(r:SIDRange, acc:Int) {
                if (r.length() > acc) {
                    acc = r.length();
                }
                return acc;
            }, 0);
            if (maxRange > 255) {
                format = 2;
            }
        }
        tt.writeCard8(format);
        if (format == 0) {
            for (g in f.glyphs) {
                if (g.name == notdef) continue;
                var sid = strings.sid(g.name);
                if (sid != -1) {
                    tt.writeUINT16(sid);
                }
            }
        } else {
            for (r in ranges) {
                tt.writeUINT16(r.first);
                if (format == 1) {
                    tt.writeCard8(r.remaining);
                } else {
                    tt.writeCard16(r.remaining);
                }
            }
        }
    }

}

private class SIDRange {
    public var first:Int;
    public var remaining:Int;

    public function new(first:Int, remaining:Int) {
        this.first = first;
        this.remaining = remaining;
    }

    public function length() {
        return this.remaining;
    }

    public function toString() {
        return 'SID Range ${first},${remaining}';
    }

}




