package fonthx.svg;

import fonthx.model.font.IFont;
class SVGBuilder {

    public function new() {

    }

    public function build(font:IFont) {
        var svg = new Xml();
        Xml.createDocType();
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
