package fonthx.opentype.tables;

import fonthx.examples.pixelfonter.PixelFont;
import fonthx.model.font.glyphnames.AGLFN;
import fonthx.model.font.glyphnames.GlyphNamer;
import fonthx.opentype.cff.CFF;
import fonthx.opentype.cff.operators.TopDictOp;
import fonthx.opentype.writers.TrueTypeFileWriter;

using buddy.Should;
using StringTools;

class CFFSpec extends buddy.BuddySuite {

    private var idx = 0;
    private var bytes:Array<Int>;

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

    private function escapedOperator() {
        return (nextByte() << 8) + nextByte();
    }

    private function twoByteOperand() {
        var b0 = nextByte();
        var b1 = nextByte();
        return (b0 - 247) * 256 + b1 + 108;
    }

    private function oneByteOperand() {
        return nextByte() - 139;
    }

    private function nextByte() {
//        trace(bytes[idx+1].hex());
        return bytes[idx++];
    }

    private function nextStringBytesShouldBe(s:String) {
        for (i in 0...s.length) {
            nextByte().should().be(s.charCodeAt(i));
        }
    }

    public function new() {

        var f:PixelFont;
        AGLFN.init();
        beforeEach({
            f = new PixelFont('pixelfont', 1000, 12);
            var notdef = f.addGlyph(0);
            notdef.name = '.notdef';
            var A = f.addGlyph(65);
            A.addPixel(0, 0);
            A.addPixel(0, 1);
            A.addPixel(0, 2);
            A.addPixel(1, 1);
            A.addPixel(1, 2);
            A.addPixel(2, 0);
            A.addPixel(2, 1);
            A.addPixel(2, 2);
            GlyphNamer.nameGlyphs(f.glyphs);
        });

        describe("CFF", function() {
            it("generates", function() {
                var cff:CFF = new CFF(f, new BuildOptions());
                bytes = getTableAsArray(cff);
                idx = 0;

                // header
                nextByte().should.be(1);
                nextByte().should.be(0);
                nextByte().should.be(4);
                nextByte().should.be(2); // offSize (length > 256)

                // name index
                nextByte().should.be(0);
                nextByte().should.be(1); // 1 string in the name idx (2 bytes)

                nextByte().should.be(1); // offsize
                nextByte().should.be(1); // first offset
                nextByte().should.be(1 + f.postscriptName.length); // closing offset
                nextStringBytesShouldBe(f.postscriptName);

                // top dict index
                nextByte().should.be(0);
                nextByte().should.be(1); // 1 top dict
                nextByte().should.be(1); // offsize
                nextByte().should.be(1); // first offset
                var closingOffset = nextByte();

                var topDictStartIdx = idx;
                twoByteOperand().should.be(391);
                nextByte().should.be(TopDictOp.version);
                twoByteOperand().should.be(392);
                nextByte().should.be(TopDictOp.FullName);
                twoByteOperand().should.be(393);
                nextByte().should.be(TopDictOp.FamilyName);
                twoByteOperand().should.be(388);
                nextByte().should.be(TopDictOp.Weight);
                oneByteOperand().should.be(0);
                escapedOperator().should.be(TopDictOp.isFixedPitch);
                nextByte(); nextByte(); //ItalicAngle Fixed
                escapedOperator().should.be(TopDictOp.ItalicAngle);
                oneByteOperand().should.be(100);
                escapedOperator().should.be(TopDictOp.UnderlinePosition);
                oneByteOperand().should.be(50);
                escapedOperator().should.be(TopDictOp.UnderlineThickness);
                oneByteOperand().should.be(2);
                escapedOperator().should.be(TopDictOp.CharstringType);
                oneByteOperand().should.be(0);
                nextByte().should.be(TopDictOp.Encoding);
                oneByteOperand().should.be(0);
                oneByteOperand().should.be(0);
                nextByte().should.be(TopDictOp.Private);
                twoByteOperand().should.be(133);
                nextByte().should.be(TopDictOp.charset);
                twoByteOperand().should.be(137);
                nextByte().should.be(TopDictOp.CharStrings);

                var topDictEndIdx = idx + 1;
                closingOffset.should.be(topDictEndIdx - topDictStartIdx);

                // STRING_INDEX
                nextByte().should.be(0);
                nextByte().should.be(3); // 3 entries in the STRING INDEX
                nextByte().should.be(1); // offsize
                nextByte().should.be(1); // first offset
                for (i in 0...2) {
                    nextByte(); // additional offsets
                }
                var closingOffset = nextByte();
                closingOffset.should.be(1 + '${f.version}${f.fullName}${f.postscriptName}'.length);
                nextStringBytesShouldBe(f.version);
                nextStringBytesShouldBe(f.fullName);
                nextStringBytesShouldBe(f.postscriptName);

                // GLOBAL_SUBR_INDEX
                nextByte().should.be(0);
                nextByte().should.be(0); // no global subroutines yet
                nextByte().should.be(1); // offsize
//                nextByte().should.be(1); // first offset
//                var closingOffset = nextByte();
//                trace(closingOffset);
//
//                // CHARSETS
//                nextByte().should.be(1); // charsets format 1


                // CHARSTRINGS_INDEX
                // PRIVATE_DICT
            });
        });
    }
}