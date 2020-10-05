package fonthx.formats.tt.tables;

import fonthx.examples.pixelfonter.PixelFont;
import fonthx.formats.tt.writers.TrueTypeFileWriter;
import fonthx.formats.tt.tables.opentype.GPOSTable;
using buddy.Should;

@include
class GPOSSpec extends buddy.BuddySuite {
    public function new() {
        describe("GPOS", function() {
            var gpos = new GPOSTable();
            var font = new PixelFont('test-font', 1000, 10);

            font.prepareForExport();
            var bytes = TrueTypeBuilder.build(font, TrueType);
            trace(bytes.sub(0, 4));

        });
    }
}