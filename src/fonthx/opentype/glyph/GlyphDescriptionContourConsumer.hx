package fonthx.opentype.glyph;

import fonthx.model.geom.Point;
import fonthx.model.geom.CubicBezier;
import fonthx.model.font.AbstractContourConsumer;

class GlyphDescriptionContourConsumer extends AbstractContourConsumer {

    private var gDesc:SimpleGlyphDescription;

    public function new(gDesc:SimpleGlyphDescription) {
        this.gDesc = gDesc;
    }

    override public function moveTo(x:Float, y:Float) {
        if (gDesc.lastPoint != null) {
            // if we are moving on from an existing contour, close the existing one before
            // starting a new one
            gDesc.closeContour();
        }
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
        var p0 = new Point(gDesc.lastPoint.x, gDesc.lastPoint.y);
        var p1 = new Point(x1, y1);
        var p2 = new Point(x2, y2);
        var p3 = new Point(x3, y3);
        var b = new CubicBezier(p0, p1, p2, p3);
        var quadPoints = b.toQuadratics();
        var i = 0;
        while (i < quadPoints.length) {
            quadTo(quadPoints[i].x, quadPoints[i].y, quadPoints[i + 1].x, quadPoints[i + 1].y);
            i += 2;
        }
    }

    override public function endPath() {
        gDesc.closeContour();
    }

}
