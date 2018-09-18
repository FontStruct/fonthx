package fonthx.utils;

import fonthx.utils.StringEncoder.Encoding;
using buddy.Should;

class StringEncoderSpec extends buddy.BuddySuite {
    public function new() {
        describe("StringEncoder", function() {
            describe("encode macroman", function() {
                it("encodes an ASCII string", function() {
                    var res = StringEncoder.encode("Hello World", Encoding.MACROMAN);
                    res.should.be("Hello World");
                });
                it("encodes extended latin", function() {
                    var res = StringEncoder.encode("Hößéd", Encoding.MACROMAN);
                    var expected = [0x48, 0x9A, 0xA7, 0x8E, 0x64];
                    for (i in 0...res.length) {
                        res.get(i).should.be(expected[i]);
                    }
                });
                it("skips unknown chars", function() {
                    var res = StringEncoder.encode("AŁğÞ", Encoding.MACROMAN);
                    var expected = [0x41];
                    for (i in 0...res.length) {
                        res.get(i).should.be(expected[i]);
                    }
                });
            });
        });
    }
}