package fonthx.model.geom;

using buddy.Should;

class RectangleSpec extends buddy.BuddySuite {
    public function new() {
        describe("Rectangle", function() {
            describe("contains", function() {
                it("is true for top left", function() {
                    new Rectangle(0, 0, 10, 10).contains(0, 0).should.be(true);
                });
                it("is true for bottom right", function() {
                    new Rectangle(0, 0, 10, 10).contains(9, 9).should.be(true);
                });
                it("is true for centre", function() {
                    new Rectangle(0, 0, 10, 10).contains(5, 5).should.be(true);
                });
                it("is false for outside top left", function() {
                    new Rectangle(0, 0, 10, 10).contains(-1, -1).should.be(false);
                });
                it("is false for outside bottom right", function() {
                    new Rectangle(0, 0, 10, 10).contains(10, 10).should.be(false);
                });
            });
            describe("add", function() {
                it("expands to the top left", function() {
                    var r = new Rectangle(0, 0, 10, 10);
                    r.add(-1, -1);
                    r.width.should.be(11);
                    r.height.should.be(11);
                });
                it("expands to the bottom right", function() {
                    var r = new Rectangle(0, 0, 10, 10);
                    r.add(11, 11);
                    r.width.should.be(11);
                    r.height.should.be(11);
                });
                it("does not expands in the centre", function() {
                    var r = new Rectangle(0, 0, 10, 10);
                    r.add(5, 5);
                    r.width.should.be(10);
                    r.height.should.be(10);
                });
            });
            describe("union", function() {
                it("expands to the bottom right", function() {
                    var u = new Rectangle(0, 0, 10, 10).union(new Rectangle(5, 5, 10, 10));
                    u.width.should.be(15);
                    u.height.should.be(15);
                });
                it("does not expand in the centre", function() {
                    var u = new Rectangle(0, 0, 10, 10).union(new Rectangle(5, 5, 1, 1));
                    u.width.should.be(10);
                    u.height.should.be(10);
                });
            });
            describe("intersects", function() {
                it("is true for the top left", function() {
                    var r = new Rectangle(0, 0, 10, 10);
                    var r2 = new Rectangle(-5, -5, 10, 10);
                    r.intersects(r2).should.be(true);
                });
                it("is true for the bottom right", function() {
                    var r = new Rectangle(0, 0, 10, 10);
                    var r2 = new Rectangle(5, 5, 10, 10);
                    r.intersects(r2).should.be(true);
                });
                it("is false for the bottom right outside", function() {
                    var r = new Rectangle(0, 0, 10, 10);
                    var r2 = new Rectangle(10, 10, 10, 10);
                    r.intersects(r2).should.be(false);
                });
                it("is false for the top left outside", function() {
                    var r = new Rectangle(0, 0, 10, 10);
                    var r2 = new Rectangle(-20, -20, 10, 10);
                    r.intersects(r2).should.be(false);
                });
            });

        });
    }
}