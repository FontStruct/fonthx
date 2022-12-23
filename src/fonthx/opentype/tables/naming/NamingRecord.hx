package fonthx.opentype.tables.naming;

import fonthx.opentype.constants.MacintoshEncoding;
import fonthx.opentype.constants.Platform;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.utils.StringEncoder;
import haxe.io.Bytes;
import haxe.io.BytesBuffer;

/**
    A Naming Record from a Naming Table
 **/
class NamingRecord {

    /**
        Copyright notice
	 **/
    public static var COPYRIGHT = 0;

    /**
        Font Family name. Up to four fonts can share the Font Family name,
        forming a font style linking group
        (regular, italic, bold, bold italic - as defined by OS/2.fsSelection bit settings)
	 */
    public static var FONT_FAMILY = 1;

    /**
         Font Subfamily name. The Font Subfamily name distiguishes the font
         in a group with the same Font Family name (name ID 1).
         This is assumed to address style (italic, oblique) and weight
         (light, bold, black, etc.)
	 **/
    public static var FONT_SUBFAMILY = 2;

    /**
        Unique font identifier
	 **/
    public static var UNIQUE_NAME = 3;

    /**
        Full font name; this should be a combination of strings 1 and 2.
	 **/
    public static var FULLNAME = 4;

    /**
        Version string. Should begin with the syntax 'Version <number>.<number>'
        The string must contain a version number of the following form:
        one or more digits (0-9) of value less than 65,535, followed by a period,
        followed by one or more digits of value less than 65,535.
	 **/
    public static var VERSION = 5;

    /**
        Postscript name for the font - A font may have only one PostScript name and that name must be ASCII.;
	 **/
    public static var PS_NAME = 6;

    /**
        Trademark; this is used to save any trademark notice/information for this font.
	 **/
    public static var TRADEMARK_NOTICE = 7;

    /**
        Manufacturer Name
	 **/
    public static var MANUFACTURER = 8;

    /**
        Designer; name of the designer of the typeface
	 **/
    public static var DESIGNER = 9;

    /**
        Description; description of the typeface.
	 **/
    public static var DESCRIPTION = 10;

    /**
        URL Vendor; URL of font vendor (with protocol, e.g., http://, ftp://)
	 **/
    public static var VENDOR_URL = 11;

    /**
	 * URL Designer; URL of typeface designer (with protocol, e.g., http://, ftp://)
	 */
    public static var DESIGNER_URL = 12;

    /**
	 * License Description; description of how the font may be legally used, 
	 * or different example scenarios for licensed use.
	 * This field should be written in plain language, not legalese.
	 */
    public static var LICENSE = 13;

    /**
	 * License Info URL; URL where additional licensing information can be found.
	 */
    public static var LICENSE_URL = 14;

    /**
	 * Preferred Family; For historical reasons, font families have contained a
	 * maximum of four styles, but font designers may group more than four fonts
	 * to a single family. 
	 */
    public static var PREFERRED_FAMILY = 16;

    /**
	 * Preferred Subfamily; Allows font designers to include the preferred
	 * subfamily grouping that is more descriptive than ID 2
	 */
    public static var PREFERRED_SUBFAMILY = 17;

    /**
	 * Compatible Full (Macintosh only); On the Macintosh, the menu name 
	 * is constructed using the FOND resource. This usually matches the 
	 * Full Name. If you want the name of the font to appear differently 
	 * than the Full Name, you can insert the Compatible Full Name in ID 18
	 */
    public static var COMPATIBLE_FULL = 18;

    /**
	 * Sample text; This can be the font name, or any other text
	 * that the designer thinks is the best sample to display the font in
	 */
    public static var SAMPLE_TEXT = 19;

    /**
	 * Platform ID
	 */
    public var platformID:Int;

    /**
	 * Platform-specific encoding ID
	 */
    public var encodingID:Int;

    /**
	 * Language ID
	 */
    public var languageID:Int;

    /**
	 * Name ID
	 */
    public var nameID:Int;

    /**
	 * String length (in bytes)
	 */
    public var offset:Int;

    /**
	 * String offset from start of storage area (in bytes)
	 */
    public var string:String;

    /**
	 * Create a new Naming Record
	 * @param platformID
	 * @param encodingID
	 * @param languageID
	 * @param nameID
	 * @param string
	 */

    public function new(platformID:Int, encodingID:Int, languageID:Int,
                        nameID:Int, string:String) {
        this.platformID = platformID;
        this.encodingID = encodingID;
        this.languageID = languageID;
        this.nameID = nameID;
        this.string = string == null? "" : string;
        offset = 0;
    }

    public function isUnicode():Bool {
        return (platformID != Platform.MACINTOSH);
    }

    public function write(tt:ITrueTypeWriter, offset:Int) {
        this.offset = offset;
        tt
            .writeUSHORT(platformID)
            .writeUSHORT(encodingID)
            .writeUSHORT(languageID)
            .writeUSHORT(nameID)
            .writeUSHORT(getByteLength())
            .writeUSHORT(offset)
        ;
    }

    public function getString() {
        return string;
    }

    public function getBytes():Bytes {
        // todo: review this
        if (platformID == Platform.MACINTOSH && encodingID == MacintoshEncoding.ROMAN) {
            return StringEncoder.encode(string, Encoding.MACROMAN);
        } else {
            //  UTF-16BE
            var bytes:BytesBuffer = new BytesBuffer();
            for (i in 0...string.length) {
                var  c = string.charCodeAt(i);
                bytes.addByte((c >>> 8) & 0xFF);
                bytes.addByte(c & 0xFF);
            }
            return bytes.getBytes();
        }
    }

    public function getByteLength():Int {
        return getBytes().length;
    }

    public function toString() {
        return platformID + "," + encodingID + "," + languageID + "," + nameID + ": " + string;
    }

}









