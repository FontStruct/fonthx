package fonthx.opentype.tables;

import haxe.io.Bytes;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * Horizontal Header
 * This table contains information for horizontal layout.
 * The values in the minRightSidebearing, minLeftSideBearing and 
 * xMaxExtent should be computed using  only  glyphs that have contours. 
 * Glyphs with no contours should be ignored for the purposes of these 
 * calculations. All reserved areas must be set to 0.
 * The ascender, descender and linegap values in this table are 
 * Apple specific. Also see information in the OS/2 table.
 * @see http://www.microsoft.com/typography/otspec/hhea.htm
 * @see http://developer.apple.com/textfonts/TTRefMan/RM06/Chap6hhea.html
 */
class HorizontalHeaderTable extends Table
{

	private var ascender:Int;
	private var descender:Int;
	private var lineGap:Int;
	private var advanceWidthMax:Int;
	private var minLeftSideBearing:Int;
	private var minRightSideBearing:Int;
	private var xMaxExtent:Int;
	private var caretSlopeRise:Int;
	private var caretSlopeRun:Int;
	private var caretOffset:Int;
	private var numberOfHMetrics:Int;
			
	/**
	 * default constructor
	 */
	public function new() {
		super(Table.HHEA);
		ascender = 0;
		descender = 0;
		lineGap = 0;
		caretSlopeRise = 1;
		caretSlopeRun = 0;
		caretOffset = 0;
		advanceWidthMax = 0;
		minLeftSideBearing = 0;
		minRightSideBearing = 0;
		xMaxExtent = 0;
		numberOfHMetrics = 0;
	}


	override public function getBytes():Bytes {
		tt
            .writeULONG(0x00010000)
            .writeSHORT(ascender)
            .writeSHORT(descender)
            .writeSHORT(lineGap)
            .writeUSHORT(advanceWidthMax)
            .writeSHORT(minLeftSideBearing)
            .writeSHORT(minRightSideBearing)
            .writeSHORT(xMaxExtent)
            .writeSHORT(caretSlopeRise)
            .writeSHORT(caretSlopeRun)
            .writeSHORT(caretOffset)
        ;
		for (i in 0...5) {
			tt.writeSHORT(0);
		}
		tt.writeUSHORT(numberOfHMetrics);
        return tt.getBytes();
	}

	/**
	 * Maximum advance width value in 'hmtx' table.
	 * @param advanceWidthMax
	 */
	public function setAdvanceWidthMax(advanceWidthMax:Int):HorizontalHeaderTable {
		this.advanceWidthMax = advanceWidthMax;
        return this;
	}

	/**
	 * Typographic ascent. (Distance from baseline of highest ascender)
	 * @param ascender
	 */
	public function setAscender(ascender:Int):HorizontalHeaderTable {
		this.ascender = ascender;
        return this;
	}

	/**
	 * The amount by which a slanted highlight on a glyph needs to be shifted 
	 * to produce the best appearance. Set to 0 for non-slanted fonts
	 * @param caretOffset
	 */
	public function setCaretOffset(caretOffset:Int):HorizontalHeaderTable {
		this.caretOffset = caretOffset;
        return this;
	}

	/**
	 * Used to calculate the slope of the cursor (rise/run)
	 * 1 for vertical.
	 * @param caretSlopeRise
	 */
	public function setCaretSlopeRise(caretSlopeRise:Int):HorizontalHeaderTable {
		this.caretSlopeRise = caretSlopeRise;
        return this;
	}
	
	/**
	 * 0 for vertical.
	 * @param caretSlopeRun
	 */
	public function setCaretSlopeRun(caretSlopeRun:Int):HorizontalHeaderTable {
		this.caretSlopeRun = caretSlopeRun;
        return this;
	}

	/**
	 * Typographic descent. (Distance from baseline of lowest descender)
	 * @param descender
	 */
	public function setDescender(descender:Int):HorizontalHeaderTable {
		this.descender = descender;
        return this;
	}

	/**
	 * Typographic line gap
	 * @param lineGap
	 */
	public function setLineGap(lineGap:Int):HorizontalHeaderTable {
		this.lineGap = lineGap;
        return this;
	}

	/**
	 * Minimum left sidebearing value in 'hmtx' table.
	 * @param minLeftSideBearing
	 */
	public function setMinLeftSideBearing(minLeftSideBearing:Int):HorizontalHeaderTable {
		this.minLeftSideBearing = minLeftSideBearing;
        return this;
	}

	/**
	 * Minimum right sidebearing value
	 * calculated as Min(aw - lsb - (xMax - xMin)).
	 * @param minRightSideBearing
	 */
	public function setMinRightSideBearing(minRightSideBearing:Int):HorizontalHeaderTable {
		this.minRightSideBearing = minRightSideBearing;
        return this;
	}

	/**
	 * Number of hMetric entries in 'hmtx' table
	 * @param numberOfHMetrics
	 */
	public function setNumberOfHMetrics(numberOfHMetrics:Int):HorizontalHeaderTable {
		this.numberOfHMetrics = numberOfHMetrics;
        return this;
	}

	/**
	 * Max(lsb + (xMax - xMin))
	 * @param maxExtent
	 */
	public function setXMaxExtent(maxExtent:Int):HorizontalHeaderTable {
		xMaxExtent = maxExtent;
        return this;
	}
		
}






