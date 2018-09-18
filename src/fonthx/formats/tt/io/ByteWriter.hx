package fonthx.formats.tt.io;

import haxe.io.Bytes;
import haxe.io.BytesBuffer;

class ByteWriter implements IByteWriter {

    private var buffer:BytesBuffer;
    private var cursor:Int;

    public function new(src:Bytes = null) {
        buffer = new BytesBuffer();
        if (src != null) {
            buffer.add(src);
        }
        cursor = buffer.length;
    }

    public function getBytes():Bytes {
        return buffer.getBytes();
    }

    public function writeByte(c:Int):Void {
        buffer.addByte(c);
        cursor++;
    }

    public function writeBytes(s:Bytes):Int {
        buffer.add(s);
        cursor += s.length;
        return cursor;
    }

    public function close():Void {}

    public function flush():Void {}

    public function closeAndFlush() {}

}
