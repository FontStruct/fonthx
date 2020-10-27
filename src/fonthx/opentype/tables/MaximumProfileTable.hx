package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * Maximum Profile table
 * 
 * This table establishes the memory requirements for this font. 
 * Fonts with CFF data must use Version 0.5 of this table, specifying only
 * the numGlyphs field. Fonts with TrueType outlines must use Version 1.0
 * of this table, where all data is required. 
 * Both formats of OpenType require a 'maxp' table because a number of 
 * applications call the Windows GetFontData( ) API on the 'maxp' table to 
 * determine the number of glyphs in the font
 * 
 * This table establishes the memory requirements for this font.
 *
 * @see http://www.microsoft.com/typography/otspec/maxp.htm
 */
class MaximumProfileTable extends Table
{
	
	public static var TRUETYPE_OUTLINES = 0x00010000;
	public static var CFF_OUTLINES = 0x00005000;
	
	
	public var version:Int;
	
	/**
	 * The number of glyphs in the font
	 */
	public var numGlyphs:Int;
	
	/**
	 * Maximum points in a non-composite glyph
	 */
	public var maxPoints:Int;
	
	/**
	 * Maximum contours in a non-composite glyph
	 */
	public var maxContours:Int;
	
	/**
	 * Maximum points in a composite glyph
	 */
	public var maxCompositePoints:Int;
	
	/**
	 * Maximum contours in a composite glyph
	 */
	public var maxCompositeContours:Int;
	
	/**
	 * 1 if instructions do not use the twilight zone (Z0), 
	 * or 2 if instructions do use Z0; should be set to 2 in most cases
	 */
	public var maxZones:Int;
	
	/**
	 * Maximum points used in Z0
	 */
	public var maxTwilightPoints:Int;
	
	/**
	 * Number of Storage Area locations
	 */
	public var maxStorage:Int;
	
	/**
	 * Number of FDEFs
	 */
	public var maxFunctionDefs:Int;
	
	/**
	 * 	Number of IDEFs
	 */
	public var 	maxInstructionDefs:Int;
	
	/**
	 * Maximum stack depth
	 */
	public var maxStackElements:Int;
	
	/**
	 * Maximum byte count for glyph instructions
	 */
	public var maxSizeOfInstructions:Int;
	
	/**
	 * Maximum number of components referenced at "top level" 
	 * for any composite glyph
	 */
	public var maxComponentElements:Int;
	
	/**
	 * 	Maximum levels of recursion; 1 for simple components
	 */
	public var maxComponentDepth:Int;
	
	// default constructor
	public function new() {
		super(Table.MAXP);
		version = TRUETYPE_OUTLINES;
		numGlyphs = 0;
		maxPoints = 0;
		maxContours = 0;
		maxCompositePoints = 0;
		maxCompositeContours = 0;
		maxZones = 2;
		maxTwilightPoints = 0;
		maxStorage = 0;
		maxFunctionDefs = 0;
		maxInstructionDefs = 0;
		maxStackElements = 0;
		maxSizeOfInstructions = 0;
		maxComponentElements = 0;
		maxComponentDepth = 0;
	}


	override public function write(tt:ITrueTypeWriter) {
		tt.writeULONG(version);
		tt.writeUSHORT(numGlyphs);
		tt.writeUSHORT(maxPoints);
		tt.writeUSHORT(maxContours);
		tt.writeUSHORT(maxCompositePoints);
		tt.writeUSHORT(maxCompositeContours);
		tt.writeUSHORT(maxZones);
		tt.writeUSHORT(maxTwilightPoints);
		tt.writeUSHORT(maxStorage);
		tt.writeUSHORT(maxFunctionDefs);
		tt.writeUSHORT(maxInstructionDefs);
		tt.writeUSHORT(maxStackElements);
		tt.writeUSHORT(maxSizeOfInstructions);
		tt.writeUSHORT(maxComponentElements);
		tt.writeUSHORT(maxComponentDepth);
	}

	/**
	 * Maximum levels of recursion; 1 for simple components
	 * @param maxComponentDepth
	 */
	public function setMaxComponentDepth(maxComponentDepth:Int):MaximumProfileTable {
		this.maxComponentDepth = maxComponentDepth;
        return this;
	}

	/**
	 * Maximum number of components referenced at "top level" for any 
	 * composite glyph
	 * @param maxComponentElements
	 */
	public function setMaxComponentElements(maxComponentElements:Int):MaximumProfileTable {
		this.maxComponentElements = maxComponentElements;
        return this;
	}

	/**
	 * Maximum contours in a composite glyph
	 * @param maxCompositeContours
	 */
	public function setMaxCompositeContours(maxCompositeContours:Int):MaximumProfileTable {
		this.maxCompositeContours = maxCompositeContours;
        return this;
	}

	/**
	 * Maximum points in a composite glyph
	 * @param maxCompositePoints
	 */
	public function setMaxCompositePoints(maxCompositePoints:Int):MaximumProfileTable {
		this.maxCompositePoints = maxCompositePoints;
        return this;
	}

	/**
	 * Set maximum contours in a non-composite glyph
	 * @param maxContours
	 */
	public function setMaxContours(maxContours:Int):MaximumProfileTable {
		this.maxContours = maxContours;
        return this;
	}

	/**
	 * Set number of FDEFs
	 * @param maxFunctionDefs
	 */
	public function setMaxFunctionDefs(maxFunctionDefs:Int):MaximumProfileTable {
		this.maxFunctionDefs = maxFunctionDefs;
        return this;
	}

	/**
	 * Set number of IDEFs
	 * @param maxInstructionDefs
	 */
	public function setMaxInstructionDefs(maxInstructionDefs:Int) {
		this.maxInstructionDefs = maxInstructionDefs;
	}

	/**
	 * Maximum points in a non-composite glyph.
	 * @param maxPoints
	 */
	public function setMaxPoints(maxPoints:Int):MaximumProfileTable {
		this.maxPoints = maxPoints;
        return this;
	}

	/**
	 * Set maximum byte count for glyph instructions
	 * @param maxSizeOfInstructions
	 */
	public function setMaxSizeOfInstructions(maxSizeOfInstructions:Int):MaximumProfileTable {
		this.maxSizeOfInstructions = maxSizeOfInstructions;
        return this;
	}

	/**
	 * Set maximum stack depth
	 * @param maxStackElements
	 */
	public function setMaxStackElements(maxStackElements:Int):MaximumProfileTable {
		this.maxStackElements = maxStackElements;
        return this;
	}

	/**
	 * Set number of Storage Area locations
	 * @param maxStorage
	 */
	public function setMaxStorage(maxStorage:Int):MaximumProfileTable {
		this.maxStorage = maxStorage;
        return this;
	}

	/**
	 * Set maximum points used in Z0
	 * @param maxTwilightPoints
	 */
	public function setMaxTwilightPoints(maxTwilightPoints:Int):MaximumProfileTable {
		this.maxTwilightPoints = maxTwilightPoints;
        return this;
	}

	/**
	 * 1 if instructions do not use the twilight zone (Z0), 
	 * or 2 if instructions do use Z0; should be set to 2 in most cases.
	 * @param maxZones
	 */
	public function setMaxZones(maxZones:Int):MaximumProfileTable {
		this.maxZones = maxZones;
        return this;
	}

	/**
	 * Set the number of glyphs in the font
	 * @param numGlyphs
	 */
	public function setNumGlyphs(numGlyphs:Int):MaximumProfileTable {
		this.numGlyphs = numGlyphs;
        return this;
	}

	public function setVersion(version:Int):MaximumProfileTable {
		this.version = version;
        return this;
	}
	
			
}








