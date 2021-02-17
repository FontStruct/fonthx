package fonthx.opentype.postscript;

import haxe.io.BytesBuffer;
using buddy.Should;
using fonthx.opentype.postscript.Encoder;
using Lambda;

class EncoderSpec extends buddy.BuddySuite {

    public function new() {

        @include
        describe("Encoder", function() {
            it("encodesFloats", function() {
                var bytes = new BytesBuffer();
                bytes.encodeFloat(-2.25);
                bytes.getBytes().toHex().should.be('1ee2a25f');
                var bytes = new BytesBuffer();
                bytes.encodeFloat(0);
                bytes.getBytes().toHex().should.be('1e0f');
            });
            it("encodesStringifiedFloats", function() {
                var bytes = new BytesBuffer();
                bytes.encodeStringAsFloat('0.140541E–3');
                bytes.getBytes().toHex().should.be('1e0a140541c3ff');
            });

        });
    }
}