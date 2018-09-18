package fonthx.formats.tt.tables;

import fonthx.formats.tt.writers.ITrueTypeWriter;

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
	private var italicAngleMantissa:Int;
	private var italicAngleFraction:Int;
	private var underlinePosition:Int;
	private var underlineThickness:Int;
	private var isFixedPitch:Int;
	private var minMemType42:Int;
	private var maxMemType42:Int;
	private var minMemType1:Int;
	private var maxMemType1:Int;
	
	private var names:Array<String>;
	private var standardNames:Array<Int>;

	/**
	 * Create a new POST table
	 */
	public function new(version:Int) {
		super(Table.POST);
		this.version = version;
		italicAngleMantissa = 0;
		italicAngleFraction = 0;
		underlinePosition = 100;
		underlineThickness = 10;
		isFixedPitch = 0;
		names = new Array<String>();
		standardNames = new Array<Int>();
	}


	override public function write(tt:ITrueTypeWriter) {
		tt
            .writeULONG(version)
		    .writeFixed(italicAngleMantissa, italicAngleFraction)
            .writeUSHORT(underlinePosition)
		    .writeUSHORT(underlineThickness)
            .writeULONG(isFixedPitch)
            .writeULONG(minMemType42)
            .writeULONG(maxMemType42)
            .writeULONG(minMemType1)
            .writeULONG(maxMemType1)
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

	/**
	 * Set monospaced flag
	 * 
	 * @param value
	 */
	public function setMonospaced(value:Bool):PostTable {
		isFixedPitch = value ? 1 : 0;
        return this;
	}

	/**
	 * Italic angle in counter-clockwise degrees from the vertical. 0.0 for
	 * upright text, negative for text that leans to the right (forward).
	 * 
	 * @param mantissa
	 * @param fraction
	 */
	public function setItalicAngle(mantissa:Int, fraction:Int):PostTable {
		italicAngleMantissa = mantissa;
		italicAngleFraction = fraction;
        return this;
	}

	/**
	 * This is the suggested distance of the top of the underline from the
	 * baseline. (negative values indicate below baseline).
	 * 
	 * @param underlinePosition
	 */
	public function setUnderlinePosition(underlinePosition:Int):PostTable {
		this.underlinePosition = underlinePosition;
        return this;
	}

	/**
	 * Set a suggested value for the underline thickness.
	 * 
	 * @param underlineThickness
	 */
	public function setUnderlineThickness(underlineThickness:Int):PostTable {
		this.underlineThickness = underlineThickness;
        return this;
	}

	/**
	 * Set the version use constants VERSION_1_0 etc.
	 * 
	 * @param version
	 */
	public function setVersion(version:Int):PostTable {
		this.version = version;
        return this;
	}


}
