package fonthx.opentype.tables;

import fonthx.opentype.tables.naming.NamingRecord;
import fonthx.opentype.constants.MacintoshEncoding;
import fonthx.opentype.constants.MacintoshLanguages;
import fonthx.opentype.constants.MicrosoftEncoding;
import fonthx.opentype.constants.MicrosoftLanguages;
import fonthx.opentype.constants.Platform;
import fonthx.opentype.constants.UnicodeEncoding;

using buddy.Should;
using StringTools;

class NamingRecordSpec extends buddy.BuddySuite {

    public function new() {
        describe("Name", function() {
            var s = 'testo[mat]';
            it("encodes mac roman", function() {
                var record = new NamingRecord(
                Platform.MACINTOSH,
                MacintoshEncoding.ROMAN,
                MacintoshLanguages.ENGLISH,
                NamingRecord.DESCRIPTION,
                s
                );
                record.getByteLength().should().be(s.length);
            });

            it("encodes unicode 1", function() {
                var record = new NamingRecord(
                Platform.UNICODE,
                UnicodeEncoding.UNICODE_1_0,
                0,
                NamingRecord.DESCRIPTION,
                s
                );
                record.getByteLength().should().be(s.length * 2);
            });

            it("encodes microsoft unicode", function() {
                var record = new NamingRecord(
                Platform.MICROSOFT,
                MicrosoftEncoding.UNICODE_BMP_ONLY,
                MicrosoftLanguages.ENU,
                NamingRecord.DESCRIPTION,
                s
                );
                record.getByteLength().should().be(s.length * 2);
            });
        });
    }
}