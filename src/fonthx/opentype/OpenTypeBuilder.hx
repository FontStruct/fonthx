package fonthx.opentype;

import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.glyphnames.GlyphNamer;
import fonthx.model.font.IContourGlyph;
import fonthx.model.font.IFont;
import fonthx.model.geom.Rectangle;
import fonthx.opentype.cff.CFF;
import fonthx.opentype.constants.MacStyle;
import fonthx.opentype.constants.OS2Embeddable;
import fonthx.opentype.constants.OS2FontSelectionFlags;
import fonthx.opentype.constants.OS2Weight;
import fonthx.opentype.constants.OS2Width;
import fonthx.opentype.FontFileFormat;
import fonthx.opentype.os2.OS2Codepages;
import fonthx.opentype.os2.OS2Ranges;
import fonthx.opentype.svg.SVGTable;
import fonthx.opentype.tables.COLRTable;
import fonthx.opentype.tables.CPALTable;
import fonthx.opentype.tables.DSIGTable;
import fonthx.opentype.tables.FontHeader;
import fonthx.opentype.tables.GlyphTable;
import fonthx.opentype.tables.HorizontalHeaderTable;
import fonthx.opentype.tables.HorizontalMetricsTable;
import fonthx.opentype.tables.KerningTable;
import fonthx.opentype.tables.LocationTable;
import fonthx.opentype.tables.MaximumProfileTable;
import fonthx.opentype.tables.OS2Table;
import fonthx.opentype.tables.PostTable;
import fonthx.opentype.tables.SnftTable;
import fonthx.opentype.tables.Table;
import fonthx.opentype.tables.TableDirectory;
import fonthx.opentype.tables.cmap.CharacterMapFormat12Subtable;
import fonthx.opentype.tables.cmap.CharacterMapFormat4Subtable;
import fonthx.opentype.tables.cmap.CharacterMapTable;
import fonthx.opentype.tables.naming.NamingRecord;
import fonthx.opentype.tables.naming.NamingTable;
import fonthx.opentype.tables.opentype.GPOSTable;
import fonthx.opentype.tables.opentype.GSUBTable;
import fonthx.opentype.utils.Utils;
import fonthx.opentype.writers.TrueTypeFileWriter;
import fonthx.utils.ExecutionTimer;
import fonthx.utils.MathUtils;
import haxe.Int64;
import haxe.io.Bytes;
import haxe.io.BytesBuffer;
using Lambda;
using fonthx.opentype.options.OptionMapTools;

class OpenTypeBuilder {

    /**
    * Given an IFont, generate a Font File for it in the specified format (TrueType or OpenType)
    **/
    public static function build(
        font:IFont,
        format:FontFileFormat = FontFileFormat.TrueType,
        options:BuildOptions = null
    ):Bytes {
        if (options == null) {
            options = new BuildOptions();
        }

        trace("Generating font file for " + font.name + " " + font.glyphs.length + " glyphs");

        if (font.glyphs.length == 0) {
            trace("Font file contains no glyphs");
            return null;
        }

        if (options.includeCOLR) {
            for (i in 0...font.glyphs.length) {
                var g:IContourGlyph = font.glyphs[i];
                var layers = g.getLayers();
                for (l in layers) {
                    font.glyphs.push(l);
                }
            }
        }

        if (options.sortGlyphs) {
            font.sortGlyphs();
        }

        GlyphNamer.nameGlyphs(font.glyphs);

        ExecutionTimer.start('OpenTypeBuilder.build');

        var tdir = new TableDirectory();
        var ttf = new OpenTypeFont(tdir);

        ttf.addTable(createCmap(font));
        ttf.addTable(createFontHeader(font, format));
        ttf.addTable(createHorizontalHeaderTable(font));
        ttf.addTable(createHorizontalMetricsTable(font));

        if (font.hasKerning()) {
            if (options.includeDeprecatedKERNTable) {
                var numPairs = font.getKerningPairs().length;
                if (numPairs > 10919) { // (((256 * 256) - 18) / 6);
                    trace('Too many kerning pairs ${numPairs}. KERN table will overflow. No KERN table will be written');
                } else {
                    ttf.addTable(createKerningTable(font));
                }
            }
            ttf.addTable(createGPOSTable(font));
        }

        if (font.gsubLayout.features.length > 0) {
            ttf.addTable(createGSUBTable(font));
        }

        ttf.addTable(createMaximumProfileTable(font, format));
        ttf.addTable(createNamingTable(font, options));
        ttf.addTable(createOS2Table(font));
        ttf.addTable(new PostTable(font, PostTable.VERSION_3_0));

        if (format == FontFileFormat.CFF) {
            ttf.addTable(createCFFTable(font, options));
        } else {
            var glyphTable = new GlyphTable(font);
            ttf.addTable(glyphTable);
            ttf.addTable(new LocationTable(glyphTable));
        }

        if (options.includeSVG) {
            var svgTable = new SVGTable(font);
            ttf.addTable(svgTable);
        }

        if (options.includeCOLR) {
            ttf.addTable(createCPALTable(font));
            ttf.addTable(createCOLRTable(font, options));
        }

        ttf.addTable(new DSIGTable());
        ttf.addTable(new SnftTable(ttf.getNumTables(), format));

        var bytes = writeToBytes(ttf);

        ExecutionTimer.end('OpenTypeBuilder.build');

        return bytes;

    }

    private static function writeToBytes(ttf:OpenTypeFont):Bytes {

        var byteBlocks:Map<String, Bytes> = new Map();

        // write the tables
        var numTables = 0;
        for (tag in Table.compileOrder) {
            var table = ttf.getTable(tag);
            if (table == null) continue;
            numTables++;
            var writer = new TrueTypeFileWriter(); // todo need a factory for this (DI)
            trace('Writing ${table.tag}'); // todo control verbosity
            writer.writeBytes(table.getBytes());
            table.length = writer.getPosition(); // store actual not padded length
            writer.pad();
            byteBlocks[tag] = writer.getBytes();
            // calculate and store the checksum
            table.checksum = calculateChecksum(byteBlocks[tag]);
        }

        // store offsets in the table directory
        var offset = 12 + numTables * 16;
        for (tag in Table.optimalOrder) {
            var table = ttf.getTable(tag);
            if (table == null) continue;
            table.offset = offset;
            offset += byteBlocks[tag].length;
        }

        // write the table directory
        byteBlocks[Table.TDIR] = ttf.getTable(Table.TDIR).getBytes();

        // write the font header
        byteBlocks[Table.SFNT] = ttf.getTable(Table.SFNT).getBytes();

        // assemble the byte blocks into entire font “file”
        var b:BytesBuffer = new BytesBuffer();
        b.addBytes(byteBlocks[Table.SFNT], 0, byteBlocks[Table.SFNT].length);
        b.addBytes(byteBlocks[Table.TDIR], 0, byteBlocks[Table.TDIR].length);
        for (tag in Table.optimalOrder) {
            if (!byteBlocks.exists(tag)) continue;
            b.addBytes(byteBlocks[tag], 0, byteBlocks[tag].length);
        }

        // checksum the whole font and record the result in the header
        var bytes = b.getBytes();
        var csa = 0xB1B0AFBA - calculateChecksum(bytes);
        var offset = ttf.getTable(Table.HEAD).offset + 8;
        bytes.set(offset, (csa >>> 24) & 0xFF);
        bytes.set(offset + 1, (csa >>> 16) & 0xFF);
        bytes.set(offset + 2, (csa >>> 8) & 0xFF);
        bytes.set(offset + 3, csa & 0xFF);
        return bytes;
    }

    private static function createFontHeader(fnt:IFont, format:FontFileFormat):FontHeader {
        var head = new FontHeader();
        var now = Date.now();
        head.setFormat(format)
            .setCreated(Utils.getMillisSince1904(now))
            .setModified(Utils.getMillisSince1904(now))
            .setVersion('${fnt.majorVersion}.${fnt.minorVersion}')
            .setEmSquare(fnt.emSquare)
        ;
        // calculate bounds
        var bounds = null;
        for (g in fnt.glyphs) {
            var gBounds = g.getBounds();
            if (bounds == null) {
                bounds = gBounds;
            } else {
                if (gBounds != null) {
                    bounds = bounds.union(gBounds);
                }
            }
        }
        if (bounds == null) {
            bounds = new Rectangle();
        }
        head.setBounds(bounds)
        .setMacStyle(MacStyle.REGULAR) // todo: parameterize
        .setFontDirectionHint(2) // todo: make constants for this
        .setLongOffsetFormat(true)
        .setSmallestReadablePixelSize(8) // todo: parameterize
        ;
        return head;
    }

    private static function hasSMP(fnt:IFont):Bool {
        for (g in fnt.glyphs) {
            if (g.codepoint > 0xFFFF) {
                return true;
            }
        }
        return false;
    }


    private static function createCmap(fnt:IFont):CharacterMapTable {
        // https://docs.microsoft.com/en-us/typography/opentype/spec/recom#cmap-table
        /*
        1) If the font supports only characters in the Unicode Basic Multilingual Plane (U+0000 to U+FFFF):
        either platform 3, encoding 1; or platform 0, encoding 3. With either encoding, use a format 4 subtable.
        2) If the font supports any characters in a Unicode supplementary plane (U+10000 to U+10FFFF):
        either platform 3, encoding 10; or platform 0, encoding 4.
        With either encoding, use a format 12 subtable.
        */

        var cmap = new CharacterMapTable();
        cmap.addSubtable(new CharacterMapFormat4Subtable(0, 3, 0)); // unicode 2
        if (hasSMP(fnt)) {
            cmap.addSubtable(new CharacterMapFormat12Subtable(0, 4, 0));
        }
        cmap.addSubtable(new CharacterMapFormat4Subtable(3, 1, 0)); // ms unicode
        for (sub in cmap.getSubtables()) {
            // iterate over glyphs adding mappings
            for (g in fnt.glyphs) {
                sub.addCodepoint(g.codepoint);
            }
        }
        return cmap;
    }

    private static function createHorizontalHeaderTable(font:IFont):HorizontalHeaderTable {
        var table = new HorizontalHeaderTable();
        var minLSB = MathUtils.MAX_INT;
        var minRSB = MathUtils.MAX_INT;
        var maxAdvancedWidth = 0;
        var xMaxExtent = 0;
        var b:Rectangle;
        for (glyph in font.glyphs) {
            if (glyph.numContours <= 0) {
                continue;
            }
            if (glyph.advancedWidth > maxAdvancedWidth) {
                maxAdvancedWidth = Std.int(glyph.advancedWidth);
            }
            // todo floor / ceil / round – Std.int rounds towards 0
            if (glyph.lsb < minLSB) {
                minLSB = Std.int(glyph.lsb);
            }
            if (glyph.rsb < minRSB && glyph.codepoint != 0) {
                minRSB = Std.int(glyph.rsb);
            }
            b = glyph.getBounds();
            var xExtent = (glyph.lsb + ((b == null) ? 0 : b.width));
            if (xExtent > xMaxExtent) {
                xMaxExtent = Std.int(xExtent);
            }
        }
        table
        .setAdvanceWidthMax(maxAdvancedWidth)
        .setAscender(Std.int(font.realAscender))
        .setCaretOffset(0)
        .setCaretSlopeRise(1)
        .setCaretSlopeRun(0)
        .setDescender(Std.int(font.realDescender))
        .setLineGap(font.getLineGap())
        .setMinLeftSideBearing(minLSB)
        .setMinRightSideBearing(minRSB)
        .setNumberOfHMetrics(font.getNumberOfHMetrics())
        .setXMaxExtent(xMaxExtent)
        ;
        // todo calculate “usMaxContext”
        var maxContext = 0;
        for (lookup in font.gsubLayout.lookups) {
            if (lookup.type == LookupType.GSUB_SINGLE) {
                maxContext = MathUtils.maxint(2, maxContext);
            } else if (lookup.type == LookupType.GSUB_LIGATURE) {
                //maxContext = MathUtils.maxint(2, maxContext);
            }
        }
        for (lookup in font.gposLayout.lookups) {
            if (lookup.type == LookupType.GPOS_PAIR_ADJUSTMENT) {
                maxContext = MathUtils.maxint(2, maxContext);
            }
        }

        return table;
    }

    private static function createHorizontalMetricsTable(fnt:IFont):HorizontalMetricsTable {
        var table = new HorizontalMetricsTable();
        for (g in fnt.glyphs) {
            table.addMetric(Std.int(g.advancedWidth), Std.int(g.lsb));
        }
        return table;
    }

    private static function createMaximumProfileTable(fnt:IFont, format:FontFileFormat):MaximumProfileTable {
        var table = new MaximumProfileTable();
        var isTT = format == FontFileFormat.TrueType;
        table
        .setVersion(isTT ? MaximumProfileTable.TRUETYPE_OUTLINES : MaximumProfileTable.CFF_OUTLINES)
        .setNumGlyphs(fnt.glyphs.length);
        if (isTT) {
            var maxPoints = 0;
            var maxContours = 0;
            for (g in fnt.glyphs) {
                var numPoints = g.numPoints;
                if (numPoints > maxPoints) {
                    maxPoints = numPoints;
                }
                var numContours = g.numContours;
                if (numContours > maxContours) {
                    maxContours = numContours;
                }
            }
            table
            .setMaxPoints(maxPoints)
            .setMaxContours(maxContours);
        }
        return table;
    }

    private static function createNamingTable(fnt:IFont, options:BuildOptions):NamingTable {
        var table = new NamingTable();
        trace("Creating Naming table");
        for (encoding in options.namingEncodings) {
            var addRecord = function(key, content) { table.addRecord(key, content, encoding); } // shorthand

            addRecord(NamingRecord.COPYRIGHT, fnt.copyright);
            addRecord(NamingRecord.FONT_FAMILY, fnt.uniqueFamilyName);
            addRecord(NamingRecord.FONT_SUBFAMILY, fnt.styleModifiers);
            addRecord(NamingRecord.UNIQUE_NAME, fnt.uniqueFamilyName == null ? null : fnt.uniqueFamilyName);
            addRecord(NamingRecord.FULLNAME, fnt.fullName);
            addRecord(NamingRecord.VERSION, 'Version ${fnt.majorVersion}.${fnt.minorVersion}');
            var postscriptName = Utils.postscriptName(fnt.postscriptName);
            if (postscriptName.length > 2) {
                addRecord(NamingRecord.PS_NAME, postscriptName);
            }
            addRecord(NamingRecord.TRADEMARK_NOTICE, fnt.trademark);
            addRecord(NamingRecord.MANUFACTURER, fnt.manufacturerURL);
            addRecord(NamingRecord.DESIGNER, fnt.author);
            addRecord(NamingRecord.DESCRIPTION, fnt.description);
            addRecord(NamingRecord.VENDOR_URL, fnt.vendorURL);
            addRecord(NamingRecord.DESIGNER_URL, fnt.URL);
            addRecord(NamingRecord.LICENSE, fnt.license);

            addRecord(NamingRecord.LICENSE_URL, fnt.licenseURL);

            addRecord(NamingRecord.SAMPLE_TEXT, fnt.sampleText);
            if (options.extraNamingRecords != null) {
                for (id in options.extraNamingRecords.keys()) {
                    addRecord(id, options.extraNamingRecords.get(id));
                }
            }
        }
        return table;
    }

    private static function createOS2Table(font:IFont):OS2Table {
        // todo: a lot needs to be parameterized here
        var table = new OS2Table();
        var halfEM = Std.int(font.emSquare / 2);
        table
        .setVersion(0x0002)
        .setAvgCharWidth(calculateAvgCharWidth(font))
        .setWeightClass(OS2Weight.NORMAL)
        .setWidthClass(OS2Width.NORMAL)
        .setEmbedding(OS2Embeddable.PREVIEW_AND_PRINT)
        .setYSubscriptXSize(halfEM)
        .setYSubscriptYSize(halfEM)
        .setYSubscriptXOffset(0)
        .setYSubscriptYOffset(Std.int(font.idealDescender / 2))
        .setYSuperscriptXSize(halfEM)
        .setYSuperscriptYSize(halfEM)
        .setYSuperscriptXOffset(0)
        .setYSuperscriptYOffset(halfEM)
        .setStrikeoutSize(Std.int(font.emSquare / 20))
        .setStrikeoutPosition(Std.int(font.emSquare / 5))
        ;
        var codepoints:Array<Int> = new Array<Int>();
        for (g in font.glyphs) {
            codepoints.push(g.codepoint);
            codepoints.push(g.codepoint);
        }
        var os2Bits = OS2Ranges.getFunctionalRanges(codepoints);
        for (bit in os2Bits) {
            table.addUnicodeRange(bit);
        }

        table
        .setVendorID(font.vendorID)
        .setFontSelectionFlags(OS2FontSelectionFlags.REGULAR)
        .setFirstCharIndex(getFirstCharCode(font))
        ;
        var lastCharCode = getLastCharCode(font);
        table.setLastCharIndex(lastCharCode)
        .setTypoAscender(Std.int(font.idealAscender)) // http://typophile.com/node/13081?
        .setTypoDescender(Std.int(font.idealDescender))
        .setTypoLineGap(Std.int(font.typoLineGap))
        .setWinAscent(Std.int(font.realAscender))
        .setWinDescent(Std.int(0 - font.realDescender));
        var sxHeight = 0;
        var x = font.getGlyphForCodepoint(0x78);
        if (x != null && x.getBounds() != null) {
            sxHeight = Std.int(x.getBounds().height);
        }
        table.setSxHeight(sxHeight);
        var capHeight = 0;
        var H = font.getGlyphForCodepoint(0x48);
        if (H != null && H.getBounds() != null) {
            capHeight = Std.int(H.getBounds().height);
        }
        table.setCapHeight(capHeight)
        .setDefaultChar(0)
        .setBreakChar(0x20);
        var os2Bits = OS2Codepages.getFunctionalCodepages(codepoints);
        for (bit in os2Bits) {
            table.addCodePage(bit);
        }
        return table;
    }

    private static function createKerningTable(font:IFont):KerningTable {
        var table = new KerningTable();
        table.setKerningPairs(font.getKerningPairs());
        return table;
    }

    private static function createGPOSTable(font:IFont):GPOSTable {
        var table = new GPOSTable();
        table.setLayout(font.gposLayout);
        return table;
    }

    private static function createGSUBTable(font:IFont):GSUBTable {
        var table = new GSUBTable();
        table.setLayout(font.gsubLayout);
        return table;
    }

    private static function createCFFTable(font:IFont, options:BuildOptions):CFF {
        var table = new CFF(font, options);
        return table;
    }

    private static function createCPALTable(font:IFont):CPALTable {
        var table = new CPALTable();
        table.addPalette(font.palette);
        return table;
    }

    private static function createCOLRTable(font:IFont, options:BuildOptions):COLRTable {
        var table = new COLRTable(font);
        return table;
    }

    private static function ensureRequiredGlyphs(f:IFont):Void {
        // add space if not present
        var space = f.getGlyphForCodepoint(32);
        var autoSpace = space == null;
        if (autoSpace) {
            //space = new MatrixGlyph(32);
        }
        //var spacec = new MatrixContourGlyph(cast(space, MatrixGlyph));
        //glyphs.unshift(spacec);
    }

    /**
	 * Calculate the average character width value for the OS/2 table
	 * The Average Character Width parameter specifies the arithmetic average of the escapement (width) of all non-zero
	 * width glyphs in the font.
	 *
	 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/os2#xavgcharwidth
	 *
	 */
    private static function calculateAvgCharWidth(font:IFont) {
        var totalWidth:Float = 0;
        var numWidths = 0;
        // todo: review this – I suspect the validator is wrong here
        for (g in font.glyphs) {
            var w = g.advancedWidth;
            if (w > 0) {
                totalWidth += w;
                numWidths++;
            }
        }
        var averageWidth:Int = Std.int(Math.floor(totalWidth / numWidths));
        return averageWidth;
    }

    private static function getFirstCharCode(fnt:IFont) {
        var first = fnt.glyphs.fold(function(g:IContourGlyph, acc:Int) {
            return g.unmapped == false && g.codepoint > 1 && g.codepoint < acc ? g.codepoint : acc;
        }, MathUtils.MAX_INT);
        return first == MathUtils.MAX_INT ? 0 : first;
    }

    private static function getLastCharCode(fnt:IFont) {
        return fnt.glyphs.fold(function(g:IContourGlyph, acc:Int) {
            return g.codepoint < 0xFFFF && g.codepoint > acc ? g.codepoint : acc;
        }, 0);
    }

    private static function calculateChecksum(bytes:Bytes):Int {
        var checksum:Int64 = Int64.make(0, 0);
        var numBytes = bytes.length;
        var i = 0;
        while (i < numBytes) {
            checksum += (bytes.get(i) << 24) + (bytes.get(i + 1) << 16) + (bytes.get(i + 2) << 8) + (bytes.get(i + 3));
            i += 4;
        }
        checksum %= Int64.make(1, 0); //Math.pow(2,32);
        return checksum.low;
    }


}
