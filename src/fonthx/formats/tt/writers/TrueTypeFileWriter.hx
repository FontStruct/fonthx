package fonthx.formats.tt.writers;

import fonthx.formats.tt.io.IByteWriter;
import haxe.Int64;
import haxe.io.Bytes;

using fonthx.formats.tt.types.Fixed;

class TrueTypeFileWriter implements ITrueTypeWriter {

    private var out:IByteWriter;
    private var mark:Int;
    private var pos:Int;

    public function new(out) {
        this.out = out;
        pos = 0;
    }

    public function markPosition():Void {
        mark = pos;
    }

    public function getPosition() {
        return pos;
    }

    private function write(b:Int) {
        out.writeByte(b);
        pos++;
    }

    public function writeULONG(b:Int):ITrueTypeWriter {
        write((b >>> 24) & 0xFF);
        write((b >>> 16) & 0xFF);
        write((b >>> 8) & 0xFF);
        write(b & 0xFF);
        return this;
    }

    /**
	 * append a 16-bit unsigned integer.
	 */
    public function writeUSHORT(b:Int):ITrueTypeWriter {
        write((b >>> 8) & 0xFF);
        write(b & 0xFF);
        return this;
    }

    /**
	* append a 16-bit unsigned integer – alias for writeUSHORT
	 */
    public function writeUINT16(b:Int):ITrueTypeWriter {
        writeUSHORT(b);
        return this;
    }

    /**
	* append a 16-bit unsigned integer – alias for writeUSHORT
	 */
    public function writeOffset16(b:Int):ITrueTypeWriter {
        writeUSHORT(b);
        return this;
    }

    /**
	* append a 16-bit signed integer.
	*/

    public function writeSHORT(b:Int):ITrueTypeWriter {
        return writeUSHORT(b);
    }

    /**
	 * append an 8-bit unsigned integer.
	 */

    public function writeByte(b:Int):ITrueTypeWriter {
        write(b);
        return this;
    }

    public function writeCard8(b:Int):ITrueTypeWriter {
        write(b);
        return this;
    }

    public function writeCard16(b:Int):ITrueTypeWriter {
        writeUINT16(b);
        return this;
    }

    public function writeTag(s:String):ITrueTypeWriter {
        write(s.charCodeAt(0));
        write(s.charCodeAt(1));
        write(s.charCodeAt(2));
        write(s.charCodeAt(3));
        return this;
    }

    /**
	 * Append a Date represented in number of seconds since 
	 * 12:00 midnight,
	 * January 1, 1904.
	 * The value is represented as a signed 64-bit integer.
	 * @throws IOException 
	 */

    public function writeLONGDATETIME(secs:Int64):ITrueTypeWriter {
        write((secs.high >>> 24) & 0xFF);
        write((secs.high >>> 16) & 0xFF);
        write((secs.high >>> 8) & 0xFF);
        write(secs.high & 0xFF);
        write((secs.low >>> 24) & 0xFF);
        write((secs.low >>> 16) & 0xFF);
        write((secs.low >>> 8) & 0xFF);
        write(secs.low & 0xFF);
        return this;
    }

    /**
	 * Append a string of 8-bit chars
	 * @param s
	 * @throws IOException 
	 */

    public function writeByteString(s:String):ITrueTypeWriter {
        for (i in 0...s.length) {
            var c = s.charCodeAt(i);
            write(c & 0xFF);
        }
        return this;
    }

    public function writeBytes(bytes:Bytes):ITrueTypeWriter {
        out.writeBytes(bytes);
        pos += bytes.length;
        return this;
    }

    /**
	 * Add a Pascal String
	 * @param name
	 */

    public function writePascalString(name:String):ITrueTypeWriter {
        // pascal strings can only be 255 chars long
        var l = name.length;
        if (l > 255) {
            name = name.substring(0, 255);
        }
        writeByte(l);
        writeByteString(name);
        return this;
    }

    /**
	 * append a fixed 32-bit signed fixed-ContourPoint number (16.16)
	 * @throws IOException 
	 */
    public function writeFixed(f:Float):ITrueTypeWriter {
        writeULONG(f.toFixed());
        return this;
    }

    public function writeVersion(major:Int, minor:Int):ITrueTypeWriter {
        writeUSHORT(major);
        writeUSHORT(minor);
        return this;
    }

    /**
	 *  make sure the stream length is divisible by 4 
	 *  pad with zeroes
	 * @param mod
	 */
    public function pad(fromMark:Bool = false) {
        var missing = 4 - ((fromMark ? pos - mark : pos) % 4);
        if (missing <= 0 || missing >= 4) {
            return;
        }
        for (i in 0...missing) {
            writeByte(0);
        }
    }

}
