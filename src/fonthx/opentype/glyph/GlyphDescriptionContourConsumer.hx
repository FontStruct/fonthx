package fonthx.opentype.glyph;

import fonthx.model.font.AbstractContourConsumer;

class GlyphDescriptionContourConsumer extends AbstractContourConsumer {

    private var gDesc:SimpleGlyphDescription;

    public function new(gDesc:SimpleGlyphDescription) {
        this.gDesc = gDesc;
    }

    override public function moveTo(x:Float, y:Float) {
        gDesc.startContour();
        gDesc.addPoint(Std.int(x), Std.int(y), true);
    }

    override public function lineTo(x:Float, y:Float) {
        gDesc.addPoint(Std.int(x), Std.int(y), true);
    }

    override public function quadTo(x1:Float, y1:Float, x2:Float, y2:Float) {
        gDesc.addPoint(Std.int(x1), Std.int(y1), false);
        gDesc.addPoint(Std.int(x2), Std.int(y2), true);
    }

    override public function cubicTo(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float) {
        gDesc.addPoint(Std.int(x1), Std.int(y1), false);
        gDesc.addPoint(Std.int(x2), Std.int(y2), true);
        gDesc.addPoint(Std.int(x3), Std.int(y3), true);
    }

    override public function endPath() {
        // gDesc.closeContour();
    }

}
