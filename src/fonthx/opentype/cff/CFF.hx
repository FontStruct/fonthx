package fonthx.opentype.cff;
import fonthx.model.font.IFont;
import fonthx.opentype.cff.operators.TopDictOp;
import fonthx.opentype.cff.Strings;
import fonthx.opentype.tables.Table;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.opentype.cff.charstrings.Charstrings;

using StringTools;

class CFF extends Table {

    private var font:IFont;
    private var strings:Strings;
    private var options:BuildOptions;

    public function new(font:IFont, options:BuildOptions) {
        this.options = options;
        this.font = font;
        strings = new Strings();
        super(Table.CFF);
    }

    override public function write(tt:ITrueTypeWriter) {

        // HEADER
        writeHeader(tt);

        // NAME INDEX (single entry only)
        writeNameIndex(tt);

        // TOP DICT INDEX
        writeTopDict(tt);

        // STRING INDEX
        writeStringsIndex(tt);

        // GLOBAL SUBR INDEX
        tt.writeStringsIndex([]);

        // NB We do not support ENCODINGS – dropped in CFF2 anyway

        // CHARSETS
        Charsets.write(tt, font, strings);

        // CHARSTRINGS INDEX
        var charstrings = new Charstrings();
        charstrings.write(tt, font, options);

        // PRIVATE DICT

        // LOCAL SUBR INDEX – we have none (write empty index?)
        tt.writeStringsIndex([]);
    }

    public function writeHeader(tt:ITrueTypeWriter) {
        tt.writeCard8(1); // Format major version (starting at 1)
        tt.writeCard8(0); // Format minor version (starting at 0)
        tt.writeCard8(4); // Header size (bytes) (starting at 0)
        tt.writeByte(1); // The offSize field specifies the size of all offsets (0) relative to the start of CFF data.
        // todo, this will not always be 1, will it? – or we write this last?
        // An offsize is a 1 byte unsigned numeral that specifies the size of (local) Offset(s)
    }

    public function writeNameIndex(tt:ITrueTypeWriter) {
        // The Name Index contains the PostScript language name (FontName or CIDFontName) of the font.
        // It is not a requirement that this name be the same as name ID 6 entries in the 'name' table.
        // For compatibility with client software, such as PostScript interpreters and Acrobat®, font names should be
        // no longer than 127 characters and should not contain any of the following ASCII characters:
        // [, ], (, ), {, }, <, >, /, %, null (NUL), space, tab, carriage return, line feed, form feed.
        var name = ~/[\[\]\(\)\{\}\/<>%\s]+/g.replace(font.name, '').substr(0, 126);
        tt.writeStringsIndex([name]);
    }

    public function writeTopDict(tt:ITrueTypeWriter) {
        var topDict = new Dictionary();
        topDict.addInt(version, strings.require(font.version));
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
        // topDict.addInt(PaintType, 0 ); // not relevant
        topDict.addInt(CharstringType, 2); // The format of the charstring data, this is the default (type 2)
        // topDict.addIntArray(FontMatrix, []); // not relevant
        // topDict.addInt(UniqueID, 0); // not relevant https://fontforge.org/docs/techref/UniqueID.html
        // topDict.addInt(FontBBox); // not implemented
        // topDict.addInt(StrokeWidth, 0)  // not relevant
        // topDict.addIntArray(XUID, []); // not relevant
        topDict.addInt(charset, 0); // charset offset
        topDict.addInt(Encoding, 0); // encoding offset – we just refer to the standard encoding
        topDict.addInt(TopDictOp.CharStrings, 0); // charstrings offset
        topDict.addIntArray(Private, [0, 0]); // Private Private DICT size and offset (0)
        // topDict.addInt(SyntheticBase, 0); // not relevant
        // topDict.addInt(PostScript, 0); // embedded PostScript language code, not implemented
        // topDict.addInt(BaseFontName, 0); // not relevant – MM related
        // topDict.addInt(BaseFontBlend, 0); // not relevant – MM related
        // there are additional operators for CID fonts – we don’t support these
        tt.writeByteBlockIndex([topDict.bytes.getBytes()]);

        // we need to add any custom glyph names to our string index
        for (g in font.glyphs) {
            strings.require(g.name);
        }
        tt.writeStringsIndex(strings.custom());
    }

    public function writeStringsIndex(tt:ITrueTypeWriter) {
        // we need to add any custom glyph names to our string index
        for (g in font.glyphs) {
            strings.require(g.name);
        }
        tt.writeStringsIndex(strings.custom());
    }
}
