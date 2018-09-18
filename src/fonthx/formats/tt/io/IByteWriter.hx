package fonthx.formats.tt.io;

import haxe.io.Bytes;

interface IByteWriter {
    function writeByte(c:Int):Void;
    function writeBytes(s:Bytes):Int;
    function closeAndFlush():Void;
    function close():Void;
    function flush():Void;
}
