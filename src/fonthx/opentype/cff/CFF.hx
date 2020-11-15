package fonthx.opentype.cff;
import fonthx.model.font.IFont;
import fonthx.opentype.cff.charstrings.Charstrings;
import fonthx.opentype.cff.charstrings.Subpath;
import fonthx.opentype.cff.operators.TopDictOp;
import fonthx.opentype.cff.Strings;
import fonthx.opentype.tables.Table;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.opentype.writers.TrueTypeFileWriter;
import haxe.ds.StringMap;
import haxe.io.Bytes;

using StringTools;

class CFF extends Table {

    public static var HEADER = "header";
    public static var NAME_INDEX = "name_index";
    public static var TOP_DICT_INDEX = "top_dict_index";
    public static var STRING_INDEX = "string_index";
    public static var GLOBAL_SUBR_INDEX = "global_subr_index";
    public static var CHARSETS = "charsets";
    public static var CHARSTRINGS_INDEX = "charstrings_index";
    public static var PRIVATE_DICT = "private_dict";

    private var font:IFont;
    private var strings:Strings;
    private var sections:StringMap<Bytes>;
    private var options:BuildOptions;
    private var charstrings:Charstrings;
    private var offSize:Int;

    public function new(font:IFont, options:BuildOptions) {
        this.options = options;
        this.font = font;
        strings = new Strings();
        sections = new StringMap();
        charstrings = new Charstrings();
        super(Table.CFF);
    }

    override public function write(tt:ITrueTypeWriter) {

        // NAME INDEX (single entry only)
        createNameIndex();


        // CHARSTRINGS INDEX
        createCharstringsIndex();

        // GLOBAL SUBR INDEX (needs to happen after charstring creation)
        createGlobalSubrsIndex();

        // CHARSETS
        createCharsets();

        // PRIVATE DICT
        createPrivateDict();

        // TOP DICT INDEX
        // useful https://github.com/Pomax/simple-cff-builder/blob/gh-pages/src/SFNT/tables/CFF_.js
        // and https://github.com/caryll/otfcc/blob/4c4f7993024068bcab672471cc7563e3998d3ad4/lib/table/CFF.c#L1233
        // create the base dictionary without offsets
        var topDict = createTopDict();

        // STRING INDEX
        createStringsIndex();

        // HEADER
        // calculate offSize
        // I don’t really understand the purpose of this value in the header
        offSize = 4;
        length += 4; // for the header
        length += 64; // for the topDict (overestimation);
        if (length < 0xFF) {
            offSize = 1;
        } else if (length < 0xFFFF) {
            offSize = 2;
        } else if (length < 0xFFFFFF) {
            offSize = 3;
        }
        createHeader();

        // FINISH TOP DICT
        var topDictBaseLength = topDict.bytes.length + 4; // 4 for the index-defining bytes
        var baseOffset:Int = sections.get(HEADER).length +
                                sections.get(NAME_INDEX).length +
                                topDictBaseLength +
                                sections.get(STRING_INDEX).length +
                                sections.get(GLOBAL_SUBR_INDEX).length
        ;
        // then add offsets to top dict
        // do this iteratively until length of topDict is constant.
        var topDictOffsets:Dictionary;
        var topDictOffsetsLength = 0;
        var lastOffsetsLength = 0;
        do {
            lastOffsetsLength = topDictOffsetsLength;
            topDictOffsets = new Dictionary();
            topDictOffsets.addInt(charset, baseOffset + topDictOffsetsLength + 1);
            topDictOffsets.addInt(TopDictOp.CharStrings, baseOffset + topDictOffsetsLength + sections.get(CHARSETS).length + 1);
            topDictOffsetsLength = topDictOffsets.bytes.length;
            //trace(baseOffset + topDictOffsetsLength);
            //trace(baseOffset + topDictOffsetsLength + sections.get(CHARSETS).length);
        } while (topDictOffsetsLength - lastOffsetsLength != 0);
        var topDictOffsetBytes = topDictOffsets.bytes.getBytes();
        topDict.bytes.addBytes(topDictOffsetBytes, 0, topDictOffsetBytes.length);
        var tdiw = new TrueTypeFileWriter();
        tdiw.writeByteBlockIndex([topDict.bytes.getBytes()]);
        sections.set(TOP_DICT_INDEX, tdiw.getBytes());

        var sectionOrder = [
            HEADER,
            NAME_INDEX,
            TOP_DICT_INDEX,
            STRING_INDEX,
            GLOBAL_SUBR_INDEX,
            CHARSETS,
            CHARSTRINGS_INDEX,
            PRIVATE_DICT
        ];
        for (sectionKey in sectionOrder) {
            tt.writeBytes(sections.get(sectionKey));
        }
    }

    public function createHeader() {
        var tt = createWriter();
        tt.writeCard8(1); // Format major version (starting at 1)
        tt.writeCard8(0); // Format minor version (starting at 0)
        tt.writeCard8(4); // Header size (bytes) (starting at 0)
        // Data objects are often specified by byte offsets that are relative to some reference point within the CFF data.
        // These offsets are 1 to 4 bytes in length.
        tt.writeByte(offSize); // The offSize field specifies the size of all offsets (0) relative to the start of CFF data.
        // This document uses the convention of enclosing the reference point in parentheses
        // and uses a reference point of (0) to indicate an offset relative to the start of the CFF data and (self) to indicate
        // an offset relative to the data structure containing the offset.
        // An offsize is a 1 byte unsigned numeral that specifies the size of (local) Offset(s)
        sections.set(HEADER, tt.getBytes());
    }

    public function createTopDict() {
        var topDict = new Dictionary();
        topDict.addInt(version, strings.require(Std.string(font.version)));
        if (font.description.length > 0) {
            topDict.addInt(Notice, strings.require(font.description));
        }
        if (font.copyright.length > 0) {
            topDict.addInt(Copyright, strings.require(font.copyright));
        }
        topDict.addInt(FullName, strings.require(font.fullName));
        topDict.addInt(FamilyName, strings.require(font.uniqueFamilyName));
        topDict.addInt(Weight, strings.require(font.style)); // todo hmmm
        topDict.addBoolean(isFixedPitch, font.isFixedPitch());
        topDict.addReal(ItalicAngle, font.getItalicAngle());
        topDict.addInt(UnderlinePosition, font.getUnderlinePosition());
        topDict.addInt(UnderlineThickness, font.getUnderlineThickness());
        topDict.addInt(CharstringType, 2); // The format of the charstring data, this is the default (type 2)
        topDict.addInt(Encoding, 0); // encoding offset – we just refer to the standard encoding, no encoding support, dropped in CFF2 anyway
        topDict.addIntArray(Private, [0, 0]); // Private DICT size and offset – we don’t support non-default values so zero-length

        // topDict.addInt(PaintType, 0 ); // not relevant
        // topDict.addIntArray(FontMatrix, []); // not relevant
        // topDict.addInt(UniqueID, 0); // not relevant https://fontforge.org/docs/techref/UniqueID.html
        // topDict.addInt(FontBBox); // not implemented
        // topDict.addInt(StrokeWidth, 0)  // not relevant
        // topDict.addIntArray(XUID, []); // not relevant
        // topDict.addInt(SyntheticBase, 0); // not relevant
        // topDict.addInt(PostScript, 0); // embedded PostScript language code, not implemented
        // topDict.addInt(BaseFontName, 0); // not relevant – MM related
        // topDict.addInt(BaseFontBlend, 0); // not relevant – MM related
        // there are additional operators for CID fonts – we don’t support these

        length += topDict.bytes.length;
        return topDict;
    }

    public function createNameIndex() {
        var tt = createWriter();
        // The Name Index contains the PostScript language name (FontName or CIDFontName) of the font.
        // It is not a requirement that this name be the same as name ID 6 entries in the 'name' table.
        // For compatibility with client software, such as PostScript interpreters and Acrobat®, font names should be
        // no longer than 127 characters and should not contain any of the following ASCII characters:
        // [, ], (, ), {, }, <, >, /, %, null (NUL), space, tab, carriage return, line feed, form feed.
        var name = ~/[\[\]\(\)\{\}\/<>%\s]+/g.replace(font.postscriptName, '').substr(0, 126);
        tt.writeStringsIndex([name]);
        length += tt.getPosition();
        sections.set(NAME_INDEX, tt.getBytes());
    }

    public function createGlobalSubrsIndex() {
        var tt = createWriter();
        tt.writeByteBlockIndex(charstrings.subrs.map(function(s:Subpath) {
            return s.bytes;
        }));
        length += tt.getPosition();
        sections.set(GLOBAL_SUBR_INDEX, tt.getBytes());
    }

    public function createCharsets() {
        var tt = createWriter();
        Charsets.write(tt, font, strings);
        length += tt.getPosition();
        sections.set(CHARSETS, tt.getBytes());
    }

    public function createPrivateDict() {
        var tt = createWriter();
        // unsupported – no bytes
        length += tt.getPosition();
        sections.set(PRIVATE_DICT, tt.getBytes());
    }

    public function createCharstringsIndex() {
        var tt = createWriter();
        charstrings.write(tt, font, options);
        length += tt.getPosition();
        sections.set(CHARSTRINGS_INDEX, tt.getBytes());
    }

    public function createStringsIndex() {
        var tt = createWriter();
        // we need to add any custom glyph names to our string index
        for (g in font.glyphs) {
            if (g.codepoint == 0) continue;
            strings.require(g.name);
        }
        tt.writeStringsIndex(strings.custom());
        length += tt.getPosition();
        sections.set(STRING_INDEX, tt.getBytes());
    }


    private function createWriter():ITrueTypeWriter {
        return new TrueTypeFileWriter();
    }
}
