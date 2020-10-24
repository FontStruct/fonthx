package fonthx.formats.tt;

import fonthx.model.font.glyphnames.GlyphNamer;
import fonthx.model.font.glyphnames.AGLFN;
import fonthx.model.font.unicode.UnicodeRanges;
import fonthx.formats.tt.tables.opentype.GPOSTable;
import haxe.Int64;
import haxe.io.BytesBuffer;
import haxe.io.Bytes;
import fonthx.formats.tt.io.ByteWriter;
import fonthx.formats.tt.codepage.OS2Codepage;
import fonthx.formats.tt.constants.MacintoshEncoding;
import fonthx.formats.tt.constants.MacintoshLanguages;
import fonthx.formats.tt.constants.MacStyle;
import fonthx.formats.tt.constants.MicrosoftEncoding;
import fonthx.formats.tt.constants.MicrosoftLanguages;
import fonthx.formats.tt.constants.OS2Embeddable;
import fonthx.formats.tt.constants.OS2FontSelectionFlags;
import fonthx.formats.tt.constants.OS2Weight;
import fonthx.formats.tt.constants.OS2Width;
import fonthx.formats.tt.constants.Platform;
import fonthx.formats.tt.constants.UnicodeEncoding;
import fonthx.formats.tt.tables.CharacterMapFormat4Subtable;
import fonthx.formats.tt.tables.CharacterMapTable;
import fonthx.formats.tt.tables.FontHeader;
import fonthx.formats.tt.tables.GlyphTable;
import fonthx.formats.tt.tables.HorizontalHeaderTable;
import fonthx.formats.tt.tables.HorizontalMetricsTable;
import fonthx.formats.tt.tables.KerningTable;
import fonthx.formats.tt.tables.LocationTable;
import fonthx.formats.tt.tables.MaximumProfileTable;
import fonthx.formats.tt.tables.NamingRecord;
import fonthx.formats.tt.tables.NamingTable;
import fonthx.formats.tt.tables.OS2Table;
import fonthx.formats.tt.tables.PostTable;
import fonthx.formats.tt.tables.SnftTable;
import fonthx.formats.tt.tables.Table;
import fonthx.formats.tt.tables.TableDirectory;
import fonthx.formats.tt.utils.Utils;
import fonthx.formats.tt.writers.TrueTypeFileWriter;
import fonthx.formats.tt.cff.CFF;
import fonthx.model.font.IContourGlyph;
import fonthx.model.font.IFont;
import fonthx.model.geom.Rectangle;
import fonthx.utils.ExecutionTimer;
import fonthx.utils.MathUtils;

using Lambda;

class TrueTypeBuilder {

    /**
    * Given an IFont, generate a Font File for it in the specified format (only TrueType supported)
    **/
    public static function build(font:IFont, format:FontFileFormat):Bytes {
        trace("Generating font file for " + font.name + " " + font.glyphs.length + " glyphs");

        if (font.glyphs.length == 0) {
            return null;
        }

        GlyphNamer.nameGlyphs(font.glyphs);

        ExecutionTimer.start('TrueType.build');

        var tdir = new TableDirectory();
        var ttf = new TrueTypeFont(tdir);

        ttf.addTable(createCmap(font));
        ttf.addTable(createFontHeader(font, format));
        ttf.addTable(createHorizontalHeaderTable(font));
        ttf.addTable(createHorizontalMetricsTable(font));

        if (font.hasKerning()) {
            ttf.addTable(createKerningTable(font));
            ttf.addTable(createGPOSTable(font));
        }

        ttf.addTable(createMaximumProfileTable(font));
        ttf.addTable(createNamingTable(font));
        ttf.addTable(createOS2Table(font));
        ttf.addTable(new PostTable(font, PostTable.VERSION_3_0));

        if (format == FontFileFormat.OpenType) {
            ttf.addTable(createCFFTable(font));
        }

        var glyphTable = new GlyphTable(font);
        ttf.addTable(glyphTable);

        ttf.addTable(new LocationTable(glyphTable));
        ttf.addTable(new SnftTable(ttf.getNumTables()));

        var bytes = writeToBytes(ttf);

        ExecutionTimer.end('Mortar.build');

        return bytes;

    }

    private static function writeToBytes(ttf:TrueTypeFont):Bytes {

        var byteBlocks:Map<String, Bytes> = new Map();

        // write the tables
        var numTables = 0;
        for (tag in Table.compileOrder) {
            var table = ttf.getTable(tag);
            if (table == null) continue;
            numTables++;
            var bytesOut = new ByteWriter();
            var writer = new TrueTypeFileWriter(bytesOut);
            trace('Writing ${table.tag}'); // todo control verbosity
            table.write(writer);
            table.length = writer.getPosition(); // store actual not padded length
            writer.pad();
            byteBlocks[tag] = bytesOut.getBytes();
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
        var out = new ByteWriter();
        var writer = new TrueTypeFileWriter(out);
        ttf.getTable(Table.TDIR).write(writer);
        byteBlocks[Table.TDIR] = out.getBytes();

        // write the font header
        out = new ByteWriter();
        writer = new TrueTypeFileWriter(out);
        ttf.getTable(Table.SFNT).write(writer);
        byteBlocks[Table.SFNT] = out.getBytes();

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
        head
        .setFormat(format)
        .setCreated(Utils.getMillisSince1904(now))
        .setModified(Utils.getMillisSince1904(now))
        .setFontRevision(1, 0)
        .setEmSquare(fnt.emSquare);
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
        head
        .setBounds(bounds)
        .setMacStyle(MacStyle.REGULAR) // todo: parameterize
        .setFontDirectionHint(2) // todo: make constants for this
        .setLongOffsetFormat(true)
        .setSmallestReadablePixelSize(8)
        ;
        return head;
    }

    private static function createCmap(fnt:IFont):CharacterMapTable {
        var cmap = new CharacterMapTable();
        cmap.addSubtable(new CharacterMapFormat4Subtable(0, 3, 0)); // unicode 2
        cmap.addSubtable(new CharacterMapFormat4Subtable(3, 1, 0)); // ms unicode
        for (sub in cmap.getSubtables()) {
            // iterate over glyphs adding mappings
            for (g in fnt.glyphs) {
                // skip missing and null glyphs
                if (g.unmapped) {
                    sub.incrementUnmapped();
                } else {
                    sub.addCodepoint(g.codepoint);
                }
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
        return table;
    }

    private static function createHorizontalMetricsTable(fnt:IFont):HorizontalMetricsTable {
        var table = new HorizontalMetricsTable();
        for (g in fnt.glyphs) {
            table.addMetric(Std.int(g.advancedWidth), Std.int(g.lsb));
        }
        return table;
    }

    private static function createMaximumProfileTable(fnt:IFont):MaximumProfileTable {
        var table = new MaximumProfileTable();
        table
        .setVersion(MaximumProfileTable.TRUETYPE_OUTLINES)
        .setNumGlyphs(fnt.glyphs.length);
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
        return table;
    }

    private static function createNamingTable(fnt:IFont):NamingTable {
        var table = new NamingTable();
        for (i in 1...3) {
            var platform = Platform.UNICODE;
            var encoding = UnicodeEncoding.UNICODE_1_0; // 0 = Unicode 1.0 semantics
            // todo: set language?
            var language = 0;
            if (i == 1) {
                platform = Platform.MACINTOSH; // 1
                encoding = MacintoshEncoding.ROMAN; // 0
                language = MacintoshLanguages.ENGLISH; // 0
            } else if (i == 2) {
                platform = Platform.MICROSOFT; // 3
                encoding = MicrosoftEncoding.UNICODE_BMP_ONLY; // 1
                language = MicrosoftLanguages.ENU; // 0x0409
            }
            var addRecord = function(key, content) {
                if (content != null) {
                    table.addRecord(key, content, platform, encoding, language);
                }
            }
            addRecord(NamingRecord.COPYRIGHT, fnt.copyright);
            addRecord(NamingRecord.FONT_FAMILY, fnt.uniqueFamilyName);
            addRecord(NamingRecord.FONT_SUBFAMILY, fnt.styleModifiers);
            addRecord(NamingRecord.UNIQUE_NAME, fnt.uniqueFamilyName == null ? null : fnt.uniqueFamilyName);
            addRecord(NamingRecord.FULLNAME, fnt.fullName);

            addRecord(NamingRecord.VERSION, fnt.version);
            addRecord(NamingRecord.PS_NAME, fnt.postscriptName);
            addRecord(NamingRecord.TRADEMARK_NOTICE, fnt.trademark);
            addRecord(NamingRecord.MANUFACTURER, fnt.manufacturerURL);
            addRecord(NamingRecord.DESIGNER, fnt.author);
            addRecord(NamingRecord.DESCRIPTION, fnt.description);
            addRecord(NamingRecord.VENDOR_URL, fnt.vendorURL);
            addRecord(NamingRecord.DESIGNER_URL, fnt.URL);
            addRecord(NamingRecord.LICENSE, fnt.license);
            if (fnt.licenseURL != null && fnt.licenseURL.length > 0) {
                // todo null records will not be added in any case
                addRecord(NamingRecord.LICENSE_URL, fnt.licenseURL);
            }
            addRecord(NamingRecord.SAMPLE_TEXT, fnt.sampleText);
            if (fnt.extraNamingRecords != null) {
                for (id in fnt.extraNamingRecords.keys()) {
                    addRecord(id, fnt.extraNamingRecords.get(id));
                }
            }
        }
        return table;
    }

    private static function createOS2Table(font:IFont):OS2Table {
        // todo: a lot needs to be parameterized here
        //FontMetrics metrics = font.getMetrics();
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
            table.addUnicodeRange(UnicodeRanges.getKeyForCodepoint(g.codepoint));
        }

        table
        .setVendorID(font.vendorID)
        .setFontSelectionFlags(OS2FontSelectionFlags.REGULAR)
        .setFirstCharIndex(getFirstCharCode(font))
        .setLastCharIndex(getLastCharCode(font))
        .setTypoAscender(Std.int(font.idealAscender)) // http://typophile.com/node/13081?
        .setTypoDescender(Std.int(font.idealDescender))
        .setTypoLineGap(Std.int(font.typoLineGap))
        .setWinAscent(Std.int(font.realAscender))
        .setWinDescent(Std.int(0 - font.realDescender));

        // trace([font.idealAscender, font.idealDescender, font.typoLineGap, font.realAscender, font.realDescender].join(' '));

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
        table
        .setCapHeight(capHeight)
        .setDefaultChar(0)
        .setBreakChar(0x20);

        var codepages:Array<OS2Codepage> = new Array<OS2Codepage>();
        codepages.push(new OS2Codepage(OS2Codepage.LATIN_1));
        codepages.push(new OS2Codepage(OS2Codepage.LATIN_2));
        codepages.push(new OS2Codepage(OS2Codepage.CYRILLIC));
        codepages.push(new OS2Codepage(OS2Codepage.GREEK));
        codepages.push(new OS2Codepage(OS2Codepage.TURKISH));
        codepages.push(new OS2Codepage(OS2Codepage.HEBREW));
        codepages.push(new OS2Codepage(OS2Codepage.ARABIC));
        codepages.push(new OS2Codepage(OS2Codepage.WINDOWS_BALTIC));
        codepages.push(new OS2Codepage(OS2Codepage.VIETNAMESE));
        codepages.push(new OS2Codepage(OS2Codepage.THAI));
        for (cpg in codepages) {
            if (cpg.isFunctional(codepoints)) {
                table.addCodePage(cpg.getBit());
            }
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
        table.setLayout(font.layout);
        return table;
    }

    private static function createCFFTable(font:IFont):CFF {
        var table = new CFF(font);
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
            return g.codepoint > acc ? g.codepoint : acc;
        }, 0);
    }

    private static function calculateChecksum(bytes:Bytes):Int {
        // todo: seems to work and validate but optimize and consider potential data loss!!!
        // look at UInt ?
        // We really want a 32-bit unsigned integer
        // should the checksum field in tables be Int64?
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
