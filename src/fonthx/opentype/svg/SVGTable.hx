package fonthx.opentype.svg;
import haxe.io.Bytes;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.model.font.IFont;
import fonthx.opentype.tables.Table;
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
        tt.writeUINT16(font.glyphs.length); // numEntries
        var idx = 0;
        var offset = 2;
        for (g in font.glyphs) {
            idx++;
            if (g.name == '.notdef') {
                continue;
            }
            // SVGDocumentRecord
            var svg = new SVG(font.emSquare);
            g.walkContours(svg);
            // we only support one svg = one glyph
            tt.writeUINT16(idx); // startGlyphID 	The first glyph ID for the range covered by this record.
            tt.writeUINT16(idx); // endGlyphID 	    The last glyph ID for the range covered by this record.
            tt.writeOffset32(offset);
            var bytes:Bytes = Bytes.ofString(svg.getString());
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
}
