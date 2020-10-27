package fonthx.formats.tt.tables;

import fonthx.model.font.glyphnames.GlyphNamer;
import fonthx.model.font.glyphnames.AGLFN;
import fonthx.examples.pixelfonter.PixelGlyph;
import fonthx.examples.pixelfonter.PixelGlyph.Pixel;
import fonthx.formats.tt.writers.TrueTypeFileWriter;
import fonthx.formats.tt.io.ByteWriter;
import fonthx.examples.pixelfonter.PixelFont;
import fonthx.formats.tt.cff.CFF;

using buddy.Should;

class CFFSpec extends buddy.BuddySuite {

    private function getTableAsArray(table:Table):Array<Int> {
        var byteWriter = new ByteWriter();
        table.write(new TrueTypeFileWriter(byteWriter));
        var bytes = byteWriter.getBytes();
        var b = [];
        for (i in 0...bytes.length) {
            b.push(bytes.get(i));
        }
        return b;
    }

    public function new() {

        var f:PixelFont;
        AGLFN.init();
        beforeEach({
            f = new PixelFont('pixelfont', 1000, 12);
            var g2 = f.addGlyph(65);
            g2.name = 'poopsA';
            for (i in 66...91) {
                f.addGlyph(i);
            }
            f.addGlyph(0);
            GlyphNamer.nameGlyphs(f.glyphs);
        });

        @include
        describe("CFF", function() {
            it("generates", function() {
                var cff:CFF = new CFF(f);
                var bytes = getTableAsArray(cff);
                trace(bytes);
            });
        });
    }
}