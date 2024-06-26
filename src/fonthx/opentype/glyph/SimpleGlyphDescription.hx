package fonthx.opentype.glyph;

import haxe.io.Bytes;
import fonthx.opentype.writers.TrueTypeFileWriter;
import fonthx.model.geom.Rectangle;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
* @see https://docs.microsoft.com/en-us/typography/opentype/spec/glyf#simple-glyph-description
**/
class SimpleGlyphDescription {

    private var points:Array<ContourPoint> ;
    private var bounds:Rectangle;
    private var numContours:Int;
    public var lastPoint:ContourPoint;
    private var firstPoint:ContourPoint;
    private var simpleFlags:Bool = true;

    private var tt:TrueTypeFileWriter;

    public function new() {
        points = new Array<ContourPoint>();
        numContours = 0;
        lastPoint = null;
        tt = new TrueTypeFileWriter();
    }

    public function startContour() {
        lastPoint = null;
        firstPoint = null;
    }

    public function closeContour() {
        /*
        * FT docu
        * The last point in a contour uses the first as an end point to create a closed contour. For example, if the
        * last two points of a contour were an ‘on’ point followed by a conic ‘off’ point, the first point in the contour
        * would be used as final point to create an ‘on’ – ‘off’ – ‘on’ sequence as described above.
        **/
        if (lastPoint != null && firstPoint != null && points.length > 0 && lastPoint.equals(firstPoint)) {
            var extraPoint = points.pop();
            if (extraPoint.previous != null) {
                extraPoint.previous.next = null;
            }
        }
    }

    public function addPoint(x:Int, y:Int, onCurve:Bool) {
        var p = new ContourPoint(x, y, onCurve ? ContourPoint.ON_CURVE : ContourPoint.OFF_CURVE);
        if (lastPoint != null && lastPoint.equals(p)) {
            return;
        }
        p.previous = lastPoint;
        if (!simpleFlags) {
            if (p.x > -256 && p.x < 256) {
                p.flags |= ContourPoint.X_SHORT;
                if (p.x >= 0) {
                    p.flags |= ContourPoint.X_SAME_OR_SIGN;
                }
            } else if (p.previous != null && p.x == p.previous.x) {
                p.flags |= ContourPoint.X_SAME_OR_SIGN;
            }
            if (p.y > -256 && p.y < 256) {
                p.flags |= ContourPoint.Y_SHORT;
                if (p.y >= 0) {
                    p.flags |= ContourPoint.Y_SAME_OR_SIGN;
                }
            } else if (p.previous != null && p.y == p.previous.y) {
                p.flags |= ContourPoint.Y_SAME_OR_SIGN;
            }
        }
        points.push(p);
        if (lastPoint == null) {
            numContours++;
            firstPoint = p;
        } else {
            lastPoint.next = p;

        }
        lastPoint = p;
    }

    /**
	 * Add repeat flags
	 * @return
	 */
    private function prepareFlags():Array<Int> {
        var flags = new Array<Int>();
        var p:ContourPoint;
        var currentFlag = -1;
        var repeatCount = 0;
        var lastPoint:ContourPoint = null;
        for (p in points) {
            if (lastPoint == null || lastPoint.flags != p.flags) {
                if (currentFlag != -1 && repeatCount > 0) {
                    currentFlag |= ContourPoint.REPEAT;
                }
                currentFlag = p.flags;
                flags.push(currentFlag);
                if (repeatCount > 0) {
                    flags.push(repeatCount);
                    repeatCount = 0;
                }
            }
            if (lastPoint != null && lastPoint.flags == p.flags) {
                repeatCount++;
            }
            lastPoint = p;
        }
        if (currentFlag != -1 && repeatCount > 0) {
            currentFlag |= ContourPoint.REPEAT;
            flags.push(repeatCount);
        }
        return flags;
    }

    public function write():Bytes {
        if (numContours == 0) {
            return tt.getBytes();
        }
        tt.markPosition();
        var endPtsOfContours = new Array<Int>();
        bounds = null;
        var count = 0;
        for (p in points) {
            if (bounds == null) {
                bounds = new Rectangle(p.x, p.y, 0, 0);
            } else {
                bounds.add(p.x, p.y);
            }
            if (p.isEnd()) {
                endPtsOfContours.push(count);
            }
            count++;
        }
        if (bounds == null) {
            bounds = new Rectangle();
        }
        // write glyph header
        tt
        .writeSHORT(numContours)
        .writeSHORT(Std.int(bounds.left))
        .writeSHORT(Std.int(bounds.top))
        .writeSHORT(Std.int(bounds.right))
        .writeSHORT(Std.int(bounds.bottom));

        // write array of contour end points
        for (endPt in endPtsOfContours) {
            tt.writeUSHORT(endPt);
        }
        tt.writeSHORT(0); // no instructions
        // write flags array
        if (simpleFlags) {
            for (p in points) {
                tt.writeByte(p.flags);
            }
        } else {
            var flags = prepareFlags();
            for (flag in flags) {
                tt.writeByte(flag);
            }
        }
        // write x coordinates
        var x = 0;
        var last:ContourPoint = null;
        for (p in points) {
            x = p.x - (last == null ? 0 : last.x);
            if (p.isShortX()) {
                if (p.isNegatedX()) {
                    tt.writeByte(0 - x);
                } else {
                    tt.writeByte(x);
                }
            } else {
                if (!p.isSameX()) {
                    tt.writeSHORT(x);
                }
            }
            last = p;
        }
        // write y coordinates
        var y = 0;
        last = null;
        for (p in points) {
            y = p.y - (last == null ? 0 : last.y);
            if (p.isShortY()) {
                if (p.isNegatedY()) {
                    tt.writeByte(0 - y);
                } else {
                    tt.writeByte(y);
                }

            } else {
                if (!p.isSameY()) {
                    tt.writeSHORT(y);
                }
            }
            last = p;
        }
        tt.pad(true);
        return tt.getBytes();
    }

    public function getNumContours() {
        return numContours;
    }

    public function getPoints() {
        return points;
    }


}
