package fonthx.opentype.tables;

import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;

using buddy.Should;

class KerningTableSpec extends buddy.BuddySuite {

    private function getPairAt(bytes:haxe.io.Bytes, pairIndex:Int):Array<Int> {
        var offset = 18 + (pairIndex * 6);
        var left = (bytes.get(offset) << 8) | bytes.get(offset + 1);
        var right = (bytes.get(offset + 2) << 8) | bytes.get(offset + 3);
        var value = (bytes.get(offset + 4) << 8) | bytes.get(offset + 5);

        if (value > 0x7FFF) {
            value -= 0x10000;
        }

        return [left, right, value];
    }

    private function assertPair(bytes:haxe.io.Bytes, pairIndex:Int, left:Int, right:Int, value:Int):Void {
        var pair = getPairAt(bytes, pairIndex);

        pair[0].should().be(left);
        pair[1].should().be(right);
        pair[2].should().be(value);
    }

    public function new() {
        describe("KerningTable", function() {
            it("sorts pairs by left and right glyph ids when glyph ids exceed 255", function() {
                var table = new KerningTable();

                table.setKerningPairs([
                    new PositioningPair(1, 0, -10),
                    new PositioningPair(0, 256, -20),
                    new PositioningPair(0, 1, -30),
                    new PositioningPair(1, 256, -40),
                    new PositioningPair(0, 300, -50)
                ]);

                var bytes = table.getBytes();

                assertPair(bytes, 0, 0, 1, -30);
                assertPair(bytes, 1, 0, 256, -20);
                assertPair(bytes, 2, 0, 300, -50);
                assertPair(bytes, 3, 1, 0, -10);
                assertPair(bytes, 4, 1, 256, -40);
            });
        });
    }
}
