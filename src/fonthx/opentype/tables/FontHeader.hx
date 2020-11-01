package fonthx.opentype.tables;

import haxe.Int64;
import Math;
import fonthx.model.geom.Rectangle;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * Font Header This table gives global information about the font. The bounding
 * box values should be computed using only glyphs that have contours.
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/head
 */
class FontHeader extends Table {

    private var format:FontFileFormat;
    private var tableVersionMajor:Int;
    private var tableVersionMinor:Int;
    private var unitsPerEm:Int;
    private var flags:Int;
    private var created:Int64;
    private var modified:Int64;
    private var xMin:Int;
    private var yMin:Int;
    private var xMax:Int;
    private var yMax:Int;
    private var macStyle:Int;
    private var lowestRecPPEM:Int;
    private var fontDirectionHint:Int;
    private var indexToLocFormat:Int;

    /**
	 * Construct a new Font Header
	 */
    public function new() {
        super(Table.HEAD);
        format = FontFileFormat.TrueType;
        tableVersionMajor = 1;
        tableVersionMinor = 0;
        unitsPerEm = 1024;
        // todo: fully implement flags
        flags = 0 << 15 |   // Bit 0: Baseline for font at y=0;
                0 << 14 |   // Bit 1: Left sidebearing ContourPoint at x=0;
                0 << 13 |   // Bit 2: Instructions may depend on ContourPoint size;
                0 << 12 |   // Bit 3: Force ppem to integer values for all internal scaler math; may use fractional ppem
                            // sizes if this bit is clear;
                0 << 11 |   // Bit 4: Instructions may alter advance width (the advance widths might not scale linearly)
                0 << 10 |   // Bit 5: This bit should be set in fonts that are intended to be laid out vertically
                0 << 9  |   // Bit 6: set to 0
                0 << 8  |   // Bit 7: This bit should be set if the font requires layout for correct linguistic
                            // rendering (e.g. Arabic fonts)
                0 << 7  |   // Bit 8: This bit should be set for a GX font which has one or more metamorphosis effects
                            // designated as happening by default.
                0 << 6  |   // Bit 9: This bit should be set if the font contains any strong right-to-left glyphs.
                0 << 5  |   // Bit 10: This bit should be set if the font contains Indic-style rearrangement effects.
                0 << 4  |   // Bit 11: Font data is 'lossless,' as a result of having been compressed and decompressed
                            // with the Agfa MicroType Express engine.
                0 << 3  |   // Bit 12: Font converted (produce compatible metrics)
                0 << 2  |   // Bit 13: Font optimised for ClearType
                0 << 1  |   // Bit 14: Reserved, set to 0
                0 << 0      // Bit 15: Reserved, set to 0
        ;
        created = 0;
        modified = 0;
        macStyle = 0;
        lowestRecPPEM = 3;
        fontDirectionHint = 2;
        indexToLocFormat = 1;
    }

    override public function write(tt:ITrueTypeWriter) {
        if (format == FontFileFormat.CFF) {
            tt.writeTag('OTTO');
        } else {
            tt.writeULONG(0x00010000);
        }
        tt
        .writeVersion(tableVersionMajor, tableVersionMinor)
        .writeULONG(0) // will be rewritten
        .writeULONG(0x5F0F3CF5)
        .writeUSHORT(flags)
        .writeUSHORT(unitsPerEm) // unitsPerEm Valid range is from 16 to 16384
        .writeLONGDATETIME(created)
        .writeLONGDATETIME(modified)
        .writeSHORT(xMin)
        .writeSHORT(yMin)
        .writeSHORT(xMax)
        .writeSHORT(yMax)
        .writeUSHORT(macStyle)
        .writeUSHORT(lowestRecPPEM)
        .writeSHORT(fontDirectionHint)
        .writeSHORT(indexToLocFormat) // indexToLocFormat 0 for short offsets, 1 for long.
        .writeSHORT(0)
        ;
    }

    /**
	 * Set font creation date
	 * Number of seconds since 12:00 midnight, January 1, 1904. 64-bit integer
	 * @param date
	 */
    public function setCreated(secs:Int64):FontHeader {
        created = secs;
        return this;
    }

    /**
	 * Set font modification date
	 * Number of seconds since 12:00 midnight, January 1, 1904. 64-bit integer
	 * @param date
	 */
    public function setModified(secs:Int64):FontHeader {
        modified = secs;
        return this;
    }

    /**
	 * Set Manufacturer Font revision
	 * @param mantissa whole number part of version, e.g. the 1 in 1.0
	 * @param fraction floating point part of version,  e.g. the 0 in 1.0
	 */
    public function setFontRevision(mantissa:Int, fraction:Int):FontHeader {
        tableVersionMajor = mantissa;
        tableVersionMinor = fraction;
        return this;
    }

    /**
	 * Set the EmSquare (Font units per Em)
	 * Value range is 2 to 16384. Should be a power of 2 for fonts
	 * with TrueType outlines
	 */
    public function setEmSquare(emSquare:Int):FontHeader {
        unitsPerEm = emSquare;
        return this;
    }

    /**
	 * Set the cumulative bounds for all glyphs in the font
	 * @param bounds
	 */
    public function setBounds(bounds:Rectangle):FontHeader {
        this.xMin = Math.ceil(bounds.left);
        this.yMin = Math.ceil(bounds.top);
        this.xMax = Math.floor(bounds.right);
        this.yMax = Math.floor(bounds.bottom);
        return this;
    }

    /**
	 * Set the mac style for the font
	 * @param styleFlags
	 */
    public function setMacStyle(styleFlags:Int):FontHeader {
        macStyle = styleFlags;
        return this;
    }

    /**
	 * 0: Fully mixed directional glyphs
	 * 1: Only strongly left to right
	 * 2: Like 1 but also contains neutrals
	 * -1: Only strongly right to left
	 * @param hint
	 */
    public function setFontDirectionHint(hint:Int):FontHeader {
        fontDirectionHint = hint;
        return this;
    }

    /**
	 * Set true for long offsets
	 * @param value
	 */
    public function setLongOffsetFormat(value:Bool):FontHeader {
        indexToLocFormat = value ? 1 : 0;
        return this;
    }

    public function setSmallestReadablePixelSize(size:Int):FontHeader {
        lowestRecPPEM = size;
        return this;
    }

    public function setFormat(f:FontFileFormat):FontHeader {
        format = f;
        return this;
    }

}
