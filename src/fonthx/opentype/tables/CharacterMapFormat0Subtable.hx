package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.opentype.postscript.StandardVector;
import haxe.io.Bytes;

/**
 * Byte encoding table This is the Apple standard character to glyph index
 * mapping table This is a simple 1 to 1 mapping of character codes to glyph
 * indices. The glyph set is limited to 256. Note that if this format is used to
 * index into a larger glyph set, only the first 256 glyphs will be accessible.
 * https://docs.microsoft.com/en-us/typography/opentype/otspec140/cmap#format-0-byte-encoding-table
 */
class CharacterMapFormat0Subtable extends CharacterMapSubtable {

    public function new(platformID:Int, encodingID:Int, languageID:Int) {
        super(platformID, encodingID, languageID);
    }

    override public function write(tt:ITrueTypeWriter) {
        // UInt16 format Set to 0
        tt.writeUSHORT(0);
        // UInt16 length Length in bytes of the subtable (set to 262 for format
        // 0)
        tt.writeUSHORT(262);
        // UInt16 language Language code for this encoding subtable, or
        tt.writeUSHORT(languageID);
        // UInt8 glyphIndexArray[256] An array that maps character codes to
        // glyph index values

        var mapping = new Array<Int>();
        for (i in 0...256) {
            mapping[i] = 0;
        }
        for (i in 0...codepoints.length) {
            var c = codepoints[i];
            var macc:Int = StandardVector.getMac258ForUnicode(c);
            if (macc >= 0 && macc < 256) {
                mapping[i] = macc;
            }
        }
        for (i in 0...256) {
            tt.writeByte(mapping[i]);
        }
    }

    override public function calculateLength() {
        return 264; // round up from 262 for table padding - really?
    }

}
