package fonthx.formats.tt.tables;

import fonthx.formats.tt.tables.opentype.GPOSTable;
using buddy.Should;

class GPOSSpec extends buddy.BuddySuite {
    public function new() {
        describe("GPOS", function() {
            var gpos = new GPOSTable();
        });
    }
}