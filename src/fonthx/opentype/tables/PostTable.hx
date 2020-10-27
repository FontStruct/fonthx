package fonthx.opentype.tables;

import fonthx.model.font.IFont;
import fonthx.opentype.writers.ITrueTypeWriter;

using fonthx.opentype.types.Fixed;

/**
 * Postscript table
 * This table contains additional information needed to use TrueType
 * or OpenType fonts on PostScript printers.
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/post
 */
class PostTable extends Table {

	/**
	 * This TrueType-based font file contains exactly the 258 glyphs
	 * in the standard Macintosh TrueType font file
	 */
	public static var VERSION_1_0 = 0x00010000;
	
	/**
	 * This is the version required by TrueType-based fonts to be used on Windows.
	 * And the default
	 */
    public static var VERSION_2_0 = 0x00020000;
	
	/**
	 * This version of the 'post' table has been deprecated 
	 * as of OpenType Specification v1.3.
	 */
    public static var VERSION_2_5 = 0x00025000;
	
	/**
	 * This version is used by OpenType fonts with TrueType or CFF data.
	 */
    public static var VERSION_3_0 = 0x00030000;

	private var version:Int;
    private var font:IFont;
	private var names:Array<String>;
	private var standardNames:Array<Int>;

	/**
	 * Create a new POST table
	 */
	public function new(font:IFont, version:Int) {
		super(Table.POST);
        this.font = font;
		this.version = version;
		names = new Array<String>();
		standardNames = new Array<Int>();
	}

	override public function write(tt:ITrueTypeWriter) {
		tt
            .writeULONG(version)
		    .writeFixed(font.getItalicAngle())
            .writeUSHORT(font.getUnderlinePosition())
		    .writeUSHORT(font.getUnderlineThickness())
            .writeULONG(font.isFixedPitch()? 1 : 0)
            .writeULONG(0)   // minMemType42 – unimplemented
            .writeULONG(0)   // maxMemType42
            .writeULONG(0)    // minMemType1
            .writeULONG(0)    // maxMemType1
        ;
		if (version == VERSION_2_0) {
			tt.writeUSHORT(names.length +  standardNames.length);
			for (standardIndex in standardNames) {
				tt.writeUSHORT(standardIndex);
			}
			var count = 258;
			for (name in names) {
				tt.writeUSHORT(count++);
			}
            for (name in names) {
				tt.writePascalString(name);
			}
		}
	}


	/**
	 * Add a glyph with a name from the Macintosh standard order
	 * @param index a number between 0 and 257 indicating the index of the
	 * glyph name within the Macintosh standard order
	 */
	public function appendMacStandardGlyph(index:Int) {
		standardNames.push(index);
	}	
	
	/**
	 * Add a glyph with the given name
	 * @param name
	 */
	public function appendNamedGlyph(name:String) {
		names.push(name);
	}


}
