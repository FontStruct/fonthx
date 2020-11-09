package fonthx.opentype.cff;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.model.font.IFont;

using Lambda;

class Charsets {

    public static function write(tt:ITrueTypeWriter, f:IFont, strings:Strings) {
        var notdef = '.notdef';
        var ranges = new Array<SIDRange>();
        var currRange = new SIDRange();
        ranges.push(currRange);
        for (g in f.glyphs) {
            if (g.name == notdef) continue;
            var sid = strings.sid(g.name);
            if (sid != -1) {
                if (currRange.isNew()) {
                    currRange.first = sid;
                } else if (currRange.continuesWith(sid)) {
                    currRange.extend(sid);
                } else {
                    currRange = new SIDRange(sid);
                    ranges.push(currRange);
                }
            }
        }
        var maxRange = ranges.fold(function(r:SIDRange, acc:Int) {
            if (r.length() > acc) {
                acc = r.length();
            }
            return acc;
        }, 0);

        // choose format
        var format:Int = 0;
        // if the number of ranges is less than 90% of the number of glyphs then we will use ranges
        if (ranges.length < (f.glyphs.length * 0.9)) {
            format = 1;
            if (maxRange > 256) {
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
                trace(r.first, r.remaining);
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
    public var first(default, set):Int;
    public var remaining(get, null):Int;
    var last:Int;

    public function new(first:Int = -1) {
        this.first = first;
        remaining = 0;
    }

    function set_first(value:Int):Int {
        last = value;
        return first = value;
    }

    public function continuesWith(sid:Int):Bool {
        return sid - 1 == last;
    }

    public function extend(sid) {
        remaining++;
        last = sid;
    }

    public function length() {
        return remaining + 1;
    }

    public function isNew() {
        return first == -1;
    }

    function get_remaining():Int {
        return remaining;
    }
}




