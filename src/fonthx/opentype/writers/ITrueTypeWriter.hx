package fonthx.opentype.writers;

import haxe.Int64;
import haxe.io.Bytes;

interface ITrueTypeWriter {

    public function markPosition():Void;

    public function getPosition():Int;

    public function writeULONG(b:Int):ITrueTypeWriter;

    /**
	 * append a 16-bit unsigned integer.
	 */
    public function writeUSHORT(b:Int):ITrueTypeWriter;

    /**
	* append a 16-bit unsigned integer – alias for writeUSHORT
	*/
    public function writeUINT16(b:Int):ITrueTypeWriter;

    /**
	* append a 16-bit unsigned integer.– alias for writeUSHORT
	*/
    public function writeOffset16(b:Int):ITrueTypeWriter;

    /**
	* append a 16-bit signed integer.
	*/
    public function writeSHORT(b:Int):ITrueTypeWriter;

    /**
	 * append an 8-bit unsigned integer.
	 */

    public function writeByte(b:Int):ITrueTypeWriter;

    public function writeTag(s:String):ITrueTypeWriter;

    /**
	 * Append a Date represented in number of seconds since 
	 * 12:00 midnight,
	 * January 1, 1904.
	 * The value is represented as a signed 64-bit integer.
	 * @throws IOException 
	 */

    public function writeLONGDATETIME(secs:Int64):ITrueTypeWriter;

    /**
	 * Append a string of 8-bit chars
	 * @param s
	 * @throws IOException 
	 */
    public function writeByteString(s:String):ITrueTypeWriter;

    public function writeBytes(bytes:Bytes):ITrueTypeWriter;

    /**
	 * Add a Pascal String
	 * @param name
	 */
    public function writePascalString(name:String):ITrueTypeWriter;

    /**
	 * append a version number
	 * @throws IOException
	 */
    public function writeVersion(major:Int, minor:Int):ITrueTypeWriter;

    /**
	 * append a fixed 32-bit signed fixed-ContourPoint number (16.16)
	 * @throws IOException 
	 */
    public function writeFixed(f:Float):ITrueTypeWriter;

    /**
	 *  make sure the output length is divisible by 4
	 *  pad with zeroes
	 * @param mod
	 */
    public function pad(fromMark:Bool = false):Void;

    /**
    * Append a Card8 – 0 – 255 – 1-byte unsigned number
    **/
    public function writeCard8(b:Int):ITrueTypeWriter;

    /**
    * Append a Card16 – 0 – 65535 – 2-byte unsigned number
    **/
    public function writeCard16(b:Int):ITrueTypeWriter;

    public function getBytes():Bytes;

}
