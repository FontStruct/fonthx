package fonthx.opentype.cff;
import haxe.ds.StringMap;
import fonthx.opentype.cff.Strings;
import fonthx.model.font.IFont;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.opentype.tables.Table;
import fonthx.opentype.cff.operators.TopDictOps;
import fonthx.opentype.cff.CharStrings as CharStringsTable;
using fonthx.opentype.cff.Dictionary;
using fonthx.opentype.options.OptionMapTools;

class CFF extends Table {

    private var font:IFont;
    private var strings:Strings;
    private var options:StringMap<String>;

    public function new(font:IFont, options:StringMap<String>) {
        this.options = options;
        this.font = font;
        strings = new Strings();
        super(Table.CFF);
    }

    /*
        // CFF Data Layout
        Header
        Name INDEX
        Top DICT INDEX
        String INDEX
        Global Subr INDEX
        Encodings
        Charsets
        FDSelect
        CharStrings INDEX
        Font DICT INDEX
        Private DICT
        Local Subr INDEX
        Copyright and Trademark Notices

        The majority of CFF data is contained by either of two data structures called DICT and INDEX which are described in subsequent sections.

     */

    override public function write(tt:ITrueTypeWriter) {

        // Header
        tt.writeCard8(1); // Format major version (starting at 1)
        tt.writeCard8(0); // Format minor version (starting at 0)
        tt.writeCard8(4); // Header size (bytes) (starting at 0)
        tt.writeByte(1); // The offSize field specifies the size of all offsets (0) relative to the start of CFF data.
                            // todo, this will not always be 1, will it?
                          // An offsize is a 1 byte unsigned numeral that specifies the size of (local) Offset(s)

        // Name Index
        // The Name Index contains the PostScript language names (FontName or CIDFontName) of all the fonts in the FontSet stored in an INDEX structure. The font names are sorted, thereby permitting a binary search to be performed when locating a specific font within a FontSet. The sort order is based on character codes treated as 8-bit unsigned integers. A given font name precedes another font name having the first name as its prefix. There must be at least one entry in this INDEX, i.e. the FontSet must contain at least one font.
        // Name Index – The Name INDEX in the CFF data must contain only one entry; that is, there must be only one font in the CFF FontSet. It is not a requirement that this name be the same as name ID 6 entries in the 'name' table.
        // todo For compatibility with client software, such as PostScript interpreters and Acrobat®, font names should be no longer than 127 characters and should not contain any of the following ASCII characters: [, ], (, ), {, }, <, >, /, %, null (NUL), space, tab, carriage return, line feed, form feed. It is recommended that font names be restricted to the printable ASCII subset, codes 33 through 126. Adobe Type Manager® (ATM®) software imposes a further restriction on the font name length of 63 characters.
        Index.writeStrings(tt, [font.name]);

        // Top Dict Index – todo put this in separate file?
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
        topDict.addInt(CharStrings, 0); // charstrings offset
        topDict.addIntArray(Private, [0, 0]); // Private Private DICT size and offset (0)
        // topDict.addInt(SyntheticBase, 0); // not relevant
        // topDict.addInt(PostScript, 0); // embedded PostScript language code, not implemented
        // topDict.addInt(BaseFontName, 0); // not relevant – MM related
        // topDict.addInt(BaseFontBlend, 0); // not relevant – MM related
        // there are additional operators for CID fonts – we don’t support these
        Index.writeByteBlocks(tt, [topDict.bytes.getBytes()]);

        // we need to add any custom glyph names to our string index
        for (g in font.glyphs) {
            strings.require(g.name);
        }
        Index.writeStrings(tt, strings.custom());

        // Global Subr INDEX – we have none

        // Encodings – we do not support these – dropped in CFF2
         // Charsets
        // https://github.com/caryll/otfcc/blob/4c4f7993024068bcab672471cc7563e3998d3ad4/lib/table/CFF.c#L479
        Charsets.write(tt, font, strings);
        CharStringsTable.write(tt, font, options);
    }
}
