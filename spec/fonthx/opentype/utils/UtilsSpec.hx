package fonthx.formats.tt.utils;

import haxe.Int64;
using buddy.Should;

class UtilsSpec extends buddy.BuddySuite {
    public function new() {
        describe('Utils', function() {
            describe("getMillisSince1904", function() {
                it("should work for the 21st century", function() {
                    var now = new Date(2018, 3, 1, 0, 0, 0); // midnight on 1st April 2018
                    var res = Utils.getMillisSince1904(now);
                    res.should.be(Int64.fromFloat(3605378400));
                });
            });
        });
    }
}