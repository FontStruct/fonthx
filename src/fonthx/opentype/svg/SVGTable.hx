package fonthx.opentype.svg;
import haxe.Utf8;
import fonthx.svg.SVGOptions;
import fonthx.model.font.IFont;
import fonthx.opentype.tables.Table;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.svg.SVGBuilder;
import haxe.io.Bytes;
#if sys
import haxe.zip.Compress;
import haxe.zip.FlushMode;
#end

/**
* https://docs.microsoft.com/en-us/typography/opentype/spec/svg
* The SVG table is optional, and may be used in OpenType fonts with TrueType, CFF or CFF2 outlines. For every SVG glyph
* description, there must be a corresponding TrueType, CFF or CFF2 glyph description in the font.
**/
class SVGTable extends Table {

    private var font:IFont;

    public function new(font:IFont) {
        this.font = font;
        super(Table.SVG);
    }

    override public function write(tt:ITrueTypeWriter) {
        // Header
        tt.writeUINT16(0); // Table version (starting at 0). Set to 0.
        tt.writeOffset32(10); // Offset to the SVG Document List, from the start of the SVG table. Must be non-zero.
        tt.writeULONG(0); // reserved
        // SVGDocumentList
        tt.writeUINT16(1); // we will put all glyphs in a single SVG record
        // SVGDocumentRecord
        tt.writeUINT16(1);                      // startGlyphID 	The first glyph ID for the range covered by this record.
        tt.writeUINT16(font.glyphs.length - 1); // endGlyphID 	    The last glyph ID for the range covered by this record.
        tt.writeOffset32(14);                    // svgDocOffset 	Offset from the beginning of the SVGDocumentList to an SVG document. Must be non-zero.
        var svgOptions = new SVGOptions();
        svgOptions.emSquare = font.emSquare;
        var builder = new SVGBuilder();
        var svg = builder.build(font, svgOptions);
        var bytes:Bytes = Bytes.ofString(svg);
        tt.writeULONG(bytes.length);            // svgDocLength 	Length of the SVG document data. Must be non-zero.
        #if sys
          var compress = new Compress(9);
          compress.setFlushMode(FlushMode.FINISH);
          var buffer = haxe.io.Bytes.alloc(bytes.length);
          var r = compress.execute(bytes,0,buffer,0);
          compress.close();
          bytes= buffer.sub(0,r.write);
        #end
        tt.writeBytes(bytes);

    }
}
