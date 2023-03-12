package fonthx.opentype.tables;

import fonthx.opentype.constants.OS2Embeddable;
import fonthx.opentype.constants.OS2FontSelectionFlags;
import fonthx.opentype.constants.OS2Weight;
import fonthx.opentype.constants.OS2Width;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
    OS/2 and Windows Metrics Table
    @see https://docs.microsoft.com/en-us/typography/opentype/spec/os2
    todo really need to look into the versions
**/
class OS2Table extends Table
{
	private var version:Int;
	private var xAvgCharWidth:Int;
	private var usWeightClass:Int;
	private var usWidthClass:Int;
	private var fsType:Int;
	private var ySubscriptXSize:Int;
	private var ySubscriptYSize:Int;
	private var ySubscriptXOffset:Int;
	private var ySubscriptYOffset:Int;
	private var ySuperscriptXSize:Int;
	private var ySuperscriptYSize:Int;
	private var ySuperscriptXOffset:Int;
	private var ySuperscriptYOffset:Int;
	private var yStrikeoutSize:Int;
	private var yStrikeoutPosition:Int;
	private var sFamilyClass:Int;
	private var panose:Array<Int>;
	private var ulUnicodeRange1:Int;
	private var ulUnicodeRange2:Int;
	private var ulUnicodeRange3:Int;
	private var ulUnicodeRange4:Int;
	private var achVendID:String;
	private var fsSelection:Int;
	private var usFirstCharIndex:Int;
	private var usLastCharIndex:Int;
	private var sTypoAscender:Int;
	private var sTypoDescender:Int;
	private var sTypoLineGap:Int;
	private var usWinAscent:Int;
	private var usWinDescent:Int;
	private var ulCodePageRange1:Int;
	private var ulCodePageRange2:Int;
	private var sxHeight:Int;
	private var sCapHeight:Int;
	private var usDefaultChar:Int;
	private var usBreakChar:Int;
	private var usMaxContext:Int;
	
	/**
	   Create a new OS2 Table
	 **/
	public function new() {
		super(Table.OS2);
		version = 0x0003;
		xAvgCharWidth = 0;
		usWeightClass = OS2Weight.NORMAL;
		usWidthClass = OS2Width.NORMAL;
		fsType = OS2Embeddable.INSTALLABLE;
		ySubscriptXSize = 100;
		ySubscriptYSize = 100;
		ySubscriptXOffset = 0;
		ySubscriptYOffset = 100;
		ySuperscriptXSize = 100;
		ySuperscriptYSize = 100;
		ySuperscriptXOffset = 0;
		ySuperscriptYOffset = 100;
		yStrikeoutSize = 50;
		yStrikeoutPosition = 225;
		sFamilyClass = 0; // no classification
		panose = new Array<Int>();
		for (i in 0...10) {
			panose.push(0);
		}
		panose[2] = 4;

        /**
        * 126 bits to indicate “functional” unicode block coverage
        *
        * This field is used to specify the Unicode blocks or ranges encompassed by the font file in 'cmap' subtables
        * for platform 3, encoding ID 1 (Microsoft platform, Unicode BMP)
        * and platform 3, encoding ID 10 (Microsoft platform, Unicode full repertoire).
        * If a bit is set (1), then the Unicode ranges assigned to that bit are considered functional.
        * If the bit is clear (0), then the range is not considered functional.
        * Each of the bits is treated as an independent flag and the bits can be set in any combination.
        * The determination of “functional” is left up to the font designer, although character set selection should
        * attempt to be functional by ranges if at all possible.
        *
        **/
        ulUnicodeRange1 = 0x00000000;
		ulUnicodeRange2 = 0x00000000;
		ulUnicodeRange3 = 0x00000000;
		ulUnicodeRange4 = 0x00000000;
		achVendID = "FSTR";
		fsSelection = OS2FontSelectionFlags.REGULAR;
		usFirstCharIndex = 0x20;
		usLastCharIndex = 0xFF;
		sTypoAscender = 0;
		sTypoDescender = 0;
		sTypoLineGap = 0;
		usWinAscent = 0;
		usWinDescent = 0;
		ulCodePageRange1 = 0x00000001;
		ulCodePageRange2 = 0x00000000;
		sxHeight = 0;
		sCapHeight = 0;
		usDefaultChar = 0;
		usBreakChar = 0x0020;
		usMaxContext = 0;
	}

	override public function write(tt:ITrueTypeWriter) {
		tt
            .writeUSHORT(version)
            .writeSHORT(xAvgCharWidth)
            .writeUSHORT(usWeightClass)
            .writeUSHORT(usWidthClass)
            .writeUSHORT(fsType)
            .writeSHORT(ySubscriptXSize)
            .writeSHORT(ySubscriptYSize)
            .writeSHORT(ySubscriptXOffset)
            .writeSHORT(ySubscriptYOffset)
            .writeSHORT(ySuperscriptXSize)
            .writeSHORT(ySuperscriptYSize)
            .writeSHORT(ySuperscriptXOffset)
            .writeSHORT(ySuperscriptYOffset)
            .writeSHORT(yStrikeoutSize)
            .writeSHORT(yStrikeoutPosition)
            .writeSHORT(sFamilyClass);
		for (i in 0...10) {
			tt.writeByte(panose[i]);
		}
		tt
            .writeULONG(ulUnicodeRange1)
            .writeULONG(ulUnicodeRange2)
            .writeULONG(ulUnicodeRange3)
            .writeULONG(ulUnicodeRange4)
            .writeTag(achVendID)
            .writeUSHORT(fsSelection)
            .writeUSHORT(usFirstCharIndex)
            .writeUSHORT(usLastCharIndex)
            .writeSHORT(sTypoAscender)
            .writeSHORT(sTypoDescender)
            .writeSHORT(sTypoLineGap)
            .writeUSHORT(usWinAscent)
            .writeUSHORT(usWinDescent)
            .writeULONG(ulCodePageRange1)
            .writeULONG(ulCodePageRange2)
            .writeSHORT(sxHeight)
            .writeSHORT(sCapHeight)
            .writeUSHORT(usDefaultChar)
            .writeUSHORT(usBreakChar)
            .writeUSHORT(usMaxContext);
	}


	/**
	   Set Font Vendor Identification (four letter tag)
	 **/
	public function setVendorID(vendorID:String):OS2Table {
		achVendID = vendorID;
        return this;
	}

	/**
	   Set font selection flags
	   Use constants from fonthx.tt.constants.FontSelectionFlags;
	 **/
	public function setFontSelectionFlags(flags:Int):OS2Table {
        // todo this is a bit mask
		fsSelection = flags;
        return this;
	}

	/**
        Type flags. Indicates font embedding licensing rights for the font.
        Use constants from fonthx.tt.constants.Embedding;
        @param embeddingType
	 **/
	public function setEmbedding(embeddingType:Int):OS2Table {
		this.fsType = embeddingType;
        return this;
	}

	/**
        Set a panose bit
        complex font classification system
	 **/
	public function setPanoseBit(value:Int, index:Int):OS2Table {
		if (index < 10) {
			panose[index] = value;
		}
        return this;
	}
	
	/**
        Set a metric specifying the distance between the baseline and the
        approximate height of uppercase letters measured in FUnits.
        Based on height of capital H.
	 **/
	public function setCapHeight(capHeight:Int):OS2Table {
		sCapHeight = capHeight;
        return this;
	}

	/**
        Set the (IBM) Font-family class and subclass
	 **/
	public function setFamilyClass(familyClass:Int):OS2Table {
		sFamilyClass = familyClass;
        return this;
	}

	/**
        Set the typographic ascender for this font.
        Remember that this is not the same as the Ascender value in the 'hhea' table,
        which Apple defines in a far different manner.
	 **/
	public function setTypoAscender(typoAscender:Int):OS2Table {
		sTypoAscender = typoAscender;
        return this;
	}

	/**
        The typographic descender for this font.
        Remember that this is not the same as the Descender value in the 'hhea' table,
        which Apple defines in a far different manner.
	 **/
	public function setTypoDescender(typoDescender:Int):OS2Table {
		sTypoDescender = typoDescender;
        return this;
	}

	/**
        Set the typographic line gap for this font.
        Remember that this is not the same as the LineGap value in the 'hhea' table,
        which Apple defines in a far different manner.
	 **/
	public function setTypoLineGap(typoLineGap:Int):OS2Table {
		sTypoLineGap = typoLineGap;
        return this;
	}

	
	/**
        Set a metric specifying the distance between the baseline and the
        approximate height of non-ascending lowercase letters measured in FUnits.
        Based on height of small x.
	 **/
	public function setSxHeight(sxHeight:Int):OS2Table {
		this.sxHeight = sxHeight;
        return this;
    }

	/**
        Add a Code Page Character Range
        @see https://docs.microsoft.com/en-us/typography/opentype/spec/os2#cpr
	 **/
	public function addCodePage(codepageIndex:Int):OS2Table {
		if (codepageIndex < 32) {
			ulCodePageRange1 |= (1 << codepageIndex);
		} else{
			ulCodePageRange2 |= (1 << (codepageIndex - 32));
		}
        return this;
	}

	/**
        Add a unicode range
        @param rangeIndex
	 **/
	public function addUnicodeRange(rangeIndex:Int) {
		if (rangeIndex < 0) {
			return;
		}
		if (rangeIndex < 32) {
			ulUnicodeRange1 |= (1 << rangeIndex);
		} else if (rangeIndex < 64) {
			ulUnicodeRange2 |= (1 << (rangeIndex - 32));
		} else if (rangeIndex < 96) {
			ulUnicodeRange3 |= (1 << (rangeIndex - 64));	
		} else {
			ulUnicodeRange4 |= (1 << (rangeIndex - 96));	
		}
        //trace(ulUnicodeRange1, ulUnicodeRange2, ulUnicodeRange3, ulUnicodeRange4);
	}
	
	/**
        Set the break character codepoint
        This is the Unicode encoding of the glyph that Windows uses as the break character.
        The break character is used to separate words and justify text.
        Most fonts specify 'space' as the break character.
	 **/
	public function setBreakChar(codepoint:Int):OS2Table {
		usBreakChar = codepoint;
        return this;
	}

	
	/**
	   Set the default character
	   Whenever a request is made for a character that is not in the font, 
	   Windows provides this default character. 
	 **/
	public function setDefaultChar(defaultChar:Int):OS2Table {
		this.usDefaultChar = defaultChar;
        return this;
	}

	/**
	   Set The minimum Unicode index (character code) in this font, 
	   according to the cmap subtable for platform ID 3 and 
	   platform- specific encoding ID 0 or 1
	   For most fonts supporting Win-ANSI or other character sets, 
	   this value would be 0x0020.
	 **/
	public function setFirstCharIndex(firstCharIndex:Int):OS2Table {
		usFirstCharIndex = firstCharIndex;
        return this;
	}

	
	/**
	   Set the maximum Unicode index (character code) in this font, 
	   according to the cmap subtable for platform ID 3 and 
	   encoding ID 0 or 1.
	 **/
	public function setLastCharIndex(lastCharIndex:Int):OS2Table {
		usLastCharIndex = lastCharIndex;
        return this;
	}
	
	/**
        The maximum length of a target glyph context for any feature in this font.
	 **/
	public function setMaxContext(maxContext:Int):OS2Table {
		this.usMaxContext = maxContext;
        return this;
	}

	/**
        Set the Weight class.
        Indicates the visual weight (degree of blackness or thickness of strokes)
        of the characters in the font.
        Use constants from fonthx.tt.constants.Weight;
	 **/
	public function setWeightClass(weightClass:Int):OS2Table {
		this.usWeightClass = weightClass;
        return this;
	}

	/**
        Set the Width class.
        Indicates a relative change from the normal aspect ratio (width to height ratio)
        as specified by a font designer for the glyphs in a font.
        Use constants from fonthx.tt.constants.Width;
	 **/
	public function setWidthClass(widthClass:Int):OS2Table {
		this.usWidthClass = widthClass;
        return this;
	}

	/**
	   Set the ascender metric for Windows.
	 **/
	public function setWinAscent(winAscent:Int):OS2Table {
		usWinAscent = winAscent;
        return this;
	}
	
	/**
	   Set the descender metric for Windows. 
	 **/
	public function setWinDescent(winDescent:Int):OS2Table {
		usWinDescent = winDescent;
        return this;
	}

	/**
	   Set the version number for this OS/2 table.
	   Default is 3. (we will probably only support 3)
	   Versions zero (0, TrueType rev 1.5), 
	   one (1, TrueType rev 1.66), 
	   and two (2, OpenType rev 1.2) have been used previously.
	   @param version
	 **/
	public function setVersion(version:Int):OS2Table {
		this.version = version;
        return this;
	}

	/**
	   The Average Character Width parameter specifies the arithmetic average of the escapement (width) of all non-zero
	   width glyphs in the font. (v3+ only)
	   @param avgCharWidth
	 **/
	public function setAvgCharWidth(avgCharWidth:Int):OS2Table {
		xAvgCharWidth = avgCharWidth;
        return this;
	}

	/**
        Set Strikeout position
	 **/
	public function setStrikeoutPosition(strikeoutPosition:Int):OS2Table {
		yStrikeoutPosition = strikeoutPosition;
        return this;
	}

	/**
	   Set Strikeout size
	 **/
	public function setStrikeoutSize(strikeoutSize:Int):OS2Table {
		yStrikeoutSize = strikeoutSize;
        return this;
	}

	/**
        Set Subscript x offset
	 **/
	public function setYSubscriptXOffset(subscriptXOffset:Int):OS2Table {
		ySubscriptXOffset = subscriptXOffset;
        return this;
	}

	/**
	   Set Subscript horizontal font size.
	 **/
	public function setYSubscriptXSize(subscriptXSize:Int):OS2Table {
		ySubscriptXSize = subscriptXSize;
        return this;
	}

	/**
        Set Subscript y offset
	 **/
	public function setYSubscriptYOffset(subscriptYOffset:Int):OS2Table {
		ySubscriptYOffset = subscriptYOffset;
        return this;
	}

	/**
        Subscript vertical font size
	 **/
	public function setYSubscriptYSize(subscriptYSize:Int):OS2Table {
		ySubscriptYSize = subscriptYSize;
        return this;
	}

	/**
        Set Superscript x offset
	 **/
	public function setYSuperscriptXOffset(superscriptXOffset:Int):OS2Table {
		ySuperscriptXOffset = superscriptXOffset;
        return this;
	}

	/**
        Set Superscript horizontal font size.
	 **/
	public function setYSuperscriptXSize(superscriptXSize:Int):OS2Table {
		ySuperscriptXSize = superscriptXSize;
        return this;
	}

	/**
        Set Superscript y offset
	 **/
	public function setYSuperscriptYOffset(superscriptYOffset:Int):OS2Table {
		ySuperscriptYOffset = superscriptYOffset;
        return this;
	}

	/**
        Set Superscript vertical font size.
	 **/
	public function setYSuperscriptYSize(superscriptYSize:Int):OS2Table {
		ySuperscriptYSize = superscriptYSize;
        return this;
	}

}
