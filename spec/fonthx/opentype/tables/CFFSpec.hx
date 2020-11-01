package fonthx.opentype.tables;

import fonthx.model.font.glyphnames.GlyphNamer;
import fonthx.model.font.glyphnames.AGLFN;
import fonthx.examples.pixelfonter.PixelGlyph;
import fonthx.examples.pixelfonter.PixelGlyph.Pixel;
import fonthx.opentype.writers.TrueTypeFileWriter;
import fonthx.opentype.io.ByteWriter;
import fonthx.examples.pixelfonter.PixelFont;
import fonthx.opentype.cff.CFF;

using buddy.Should;

class CFFSpec extends buddy.BuddySuite {

    private function getTableAsArray(table:Table):Array<Int> {
        var tt = new TrueTypeFileWriter();
        table.write(tt);
        var bytes = tt.getBytes();
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
            g2.addPixel(0 , 0);
            g2.addPixel(1, 1);
            g2.name = 'poopsA';
            for (i in 66...91) {
                f.addGlyph(i);
                g2.addPixel(i - 66 , i - 66);
                g2.addPixel(1 - 62, i - 62);
            }
            f.addGlyph(0);
            GlyphNamer.nameGlyphs(f.glyphs);
        });

        @include
        describe("CFF", function() {
            it("generates", function() {
                var cff:CFF = new CFF(f, new BuildOptions());
                var bytes = getTableAsArray(cff);
                trace(bytes);
            });
        });
    }
}