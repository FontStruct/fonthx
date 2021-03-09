package fonthx.opentype.writers;

import fonthx.opentype.io.ByteWriter;
import fonthx.opentype.io.IByteWriter;
import haxe.Int64;
import haxe.io.Bytes;

using Lambda;
using fonthx.opentype.types.Fixed;

class TrueTypeFileWriter implements ITrueTypeWriter {

    private var out:IByteWriter;
    private var mark:Int;
    private var pos:Int;

    public function new() {
        this.out = new ByteWriter();
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
	* append a 32-bit unsigned integer – alias for writeULONG
	 */
    public function writeOffset32(b:Int):ITrueTypeWriter {
        writeULONG(b);
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

    public function writeByteBlockIndex(blocks:Array<Bytes>):ITrueTypeWriter {
        writeCard16(blocks.length);      // count Number of objects stored in INDEX
        if (blocks.length == 0) {
            return this; // we only need the count field
        }
        // calc offsize
        var offSize = 4;
        var lastOffset = blocks.fold(function(s:Bytes, acc:Int) {
            return acc + s.length;
        }, 1);
        if (lastOffset <= 0xff) {
            offSize = 1;
        } else if (lastOffset <= 0xffff) {
            offSize = 2;
        } else if (lastOffset <= 0xffffff) {
            offSize = 3;
        }
        writeByte(offSize);              // offSize (1-4, number of bytes used to store offsets in this index)
        var offset = 1;
        for (o in blocks) {
            writeOffset(offset, offSize);
            offset += o.length;
        }
        writeOffset(offset, offSize);            // An additional offset is added at the end of the offset array so the length of the last object may be determined
        for (bytes in blocks) {
            writeBytes(bytes);          // write the actual data
        }
        return this;
    }

    public function writeStringsIndex(data:Array<String>):ITrueTypeWriter {
        var blocks = data.map(function(s:String) {
            return Bytes.ofString(s);
        });
        return writeByteBlockIndex(blocks);
    }

    public function writeOffset(offset:Int, offSize:Int) {
        switch (offSize) {
            case 1:
                writeByte(offset);
            case 2:
                writeUSHORT(offset);
            case 3:
                writeByte((offset >>> 16) & 0xFF);
                writeByte((offset >>> 8) & 0xFF);
                writeByte(offset & 0xFF);
            default:
                writeULONG(offset);
        }
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

    public function getBytes():Bytes {
        return out.getBytes();
    }

}
