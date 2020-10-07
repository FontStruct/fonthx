package fonthx.formats.tt.tables;

import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.features.lookups.Lookup;
import fonthx.model.font.features.LanguageTag;
import fonthx.model.font.features.Language;
import fonthx.formats.tt.tables.opentype.LayoutTable;
import fonthx.formats.tt.io.ByteWriter;
import fonthx.formats.tt.tables.opentype.GPOSTable;
import fonthx.formats.tt.writers.TrueTypeFileWriter;
import fonthx.model.font.features.Feature;
import fonthx.model.font.features.FeatureTag;
import fonthx.model.font.features.Layout;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;
import fonthx.model.font.features.Script;
import fonthx.model.font.features.ScriptTag;
using buddy.Should;
using StringTools;
using Lambda;

@include
class GPOSSpec extends buddy.BuddySuite {

    private function getTableAsArray(gpos:LayoutTable):Array<Int> {
        var byteWriter = new ByteWriter();
        gpos.write(new TrueTypeFileWriter(byteWriter));
        var bytes = byteWriter.getBytes();
        var b = [];
        for (i in 0...bytes.length) {
            b.push(bytes.get(i));
        }
        return b;
    }

    public function new() {

        var gpos:GPOSTable;
        var layout:Layout;
        var latin:Script;
        var english:Language;

        beforeEach({
            latin = new Script(ScriptTag.LATIN);
            layout = new Layout();
            english = new Language(LanguageTag.ENGLISH);
            latin.defaultLangSys = new Language(LanguageTag.DEFAULT);
            latin.addLanguage(english);
            layout.addScript(latin);
            gpos = new GPOSTable();
            gpos.setLayout(layout);
            gpos.majorVersion = 1;
            gpos.minorVersion = 0;
        });

        describe("GPOS", function() {
            it("Has a valid header", function() {
                var bytes = getTableAsArray(gpos);
                bytes[0].should.be(0x00);
                bytes[1].should.be(0x01); // major version (16-bit)
                bytes[2].should.be(0x00);
                bytes[3].should.be(0x00); // minor version (16-bit)
                bytes[4].should.be(0x00);
                bytes[5].should.be(0x0A); // offset to script list table (always 10)
                bytes[6].should.be(0x00);
                bytes[7].should.be(0x22); // offset to feature list table = 34
                // = 2 (numRecords) + 6 (1 x scriptRecord) + 4 (1 x script table header) + 6 (1 x language record) + 10 (SLT offset)
                bytes[8].should.be(0x00);
                bytes[9].should.be(0x24); // offset to lookup list, just 2 more than feature list offset because we have no features

            });
            it("Can add a valid script list table", function() {
                var bytes = getTableAsArray(gpos).slice(10);
                // ScriptList table
                bytes[0].should.be(0x00);   // number of script records (1) – in this case we have no DFLT
                bytes[1].should.be(0x01);
                // ScriptRecord
                bytes[2].should.be(0x6C);   // Tag scriptTag l
                bytes[3].should.be(0x61);   // a
                bytes[4].should.be(0x74);   // t
                bytes[5].should.be(0x6E);   // n
                bytes[6].should.be(0);      // Offset16 scriptOffset to 1st script table from beginning of script list
                bytes[7].should.be(8);
                // ScriptTable
                bytes[8].should.be(0);      // Offset16 defaultLangSys to default LangSys table, from beginning of Script table — may be NULL as in this case
                bytes[9].should.be(0x0A);
                bytes[10].should.be(0);     // uint16 langSysCount number of lang records (1)
                bytes[11].should.be(0x01);
                // LangSysRecord
                bytes[12].should.be(0x45);  // langSysTag E
                bytes[13].should.be(0x4E);  // N
                bytes[14].should.be(0x47);  // G
                bytes[15].should.be(0x20);  // " "
                bytes[16].should.be(0);     // offset to LangSys table
                bytes[17].should.be(0x04);
                // LangSys tables – this would be the first one
                bytes[18].should.be(0);     // lookupOrder = NULL
                bytes[19].should.be(0);
                bytes[20].should.be(0xFF);  // no requiredFeature
                bytes[21].should.be(0xFF);
                bytes[22].should.be(0);     // no features at all!
                bytes[23].should.be(0);
                // c’est ca
            });
            it("Can add a valid feature list table", function() {

                var kerning = new Feature(FeatureTag.FEAT_KERN);
                var dist = new Feature(FeatureTag.FEAT_DIST);

                var pairsLookup = new Lookup(LookupType.GPOS_PAIR_ADJUSTMENT);
                var pairsSub = new PairAdjustmentPositioningSubLookup();
                pairsLookup.addSubtable(pairsSub);

                // todo do we really want to add features both to languages and the entire layout?
                // todo do we really want to add lookups both to features and the entire layout? YES to control order?

                kerning.addLookup(pairsLookup);
                layout.addLookup(pairsLookup);

                pairsSub.addPair(new PositioningPair(0, 1, 10));
                pairsSub.addPair(new PositioningPair(1, 2, 10));
                pairsSub.addPair(new PositioningPair(2, 3, 10));

                latin.defaultLangSys.addFeature(kerning);
                latin.defaultLangSys.addFeature(dist);

                layout.addFeature(kerning);
                layout.addFeature(dist);

                var bytes = getTableAsArray(gpos);
                var featureTableBytes = bytes.slice(bytes[7]);
                trace(featureTableBytes);

            });
        });
    }
}