package fonthx.model.geom;

class CubicBezier {

    private var p0:Point;
    private var p1:Point;
    private var p2:Point;
    private var p3:Point;
    private var recursionCount:Int;
    static var recursionTolerance:Int = 1;
    static var maxDistance:Int = 1;

    public function new(p0:Point, p1:Point, p2:Point, p3:Point) {
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    /**
	 * Converts cubic bezier to quadratic with some approximation
	 * @return array of quadratic beziers. each curve consists of three control points
	 */
    public function toQuadratics() {
        recursionCount = 0;
        var quadPoints = new Array<Point>();

        // make first quadratic approximation
        var q0 = p0.clone();
        var q1 = getIntersectionPoint(p0, p1, p2, p3);
        var q2 = p3.clone();

        // check and break if needed
        breakCubic(p0, p1, p2, p3, q0, q1, q2, 0.0, 1.0, quadPoints);

        return quadPoints;
    }

    private function breakCubic(c0:Point, c1:Point, c2:Point, c3:Point,
                                q0:Point, q1:Point, q2:Point,
                                t0:Float, t1:Float, result) {
        recursionCount++;
        // compute mid point on cubic curve on specified interval
        var midPoint = t0 + (t1 - t0) * 0.5;
        var cubicMidPoint = getPointOnCubic(c0, c1, c2, c3, midPoint);

        // compute mid point on quatric curve on interval 0..1
        var quadMidPoint = getPointOnQuadratic(q0, q1, q2, 0.5);

        // compute distance between mid points
        var dist = distance(quadMidPoint, cubicMidPoint);

        // if distance small enough , then we are done /*RM_TODO 1 is a tolerance setting*/
        if (dist < maxDistance || recursionCount > recursionTolerance) {
            result.push(q1);
            result.push(q2);
            return;
        }

        // compute tangent of cubic curve at mid point
        var dl = derivativeOfCubicBezier(c0, c1, c2, c3, midPoint);

        // transfer tangent vector to cubic mid point, so they together represent the true tangent
        dl.x = dl.x + cubicMidPoint.x;
        dl.y = dl.y + cubicMidPoint.y;

        // left subdivision
        var qq1 = getIntersectionPoint(q0, q1, cubicMidPoint, dl);
        breakCubic(c0, c1, c2, c3, q0, qq1, cubicMidPoint, t0, midPoint, result);

        // right subdivision
        var qq1 = getIntersectionPoint(q2, q1, cubicMidPoint, dl);
        breakCubic(c0, c1, c2, c3, cubicMidPoint, qq1, q2, midPoint, t1, result);
    }

    /**
     * Cubic Bezier interpolation
     * B(t) = P0*(1-t)^3 + P1*3*t*(1-t)^2 + P2*3*t^2*(1-t) + P3*t^3
     *
     * @param p0     first control point
     * @param p1     second control point
     * @param p2     third control point
     * @param p3     fourth control point
     * @param t      parameter from 0 to 1
     * @return point on the curve corresponding given parameter
     */
    private function getPointOnCubic(p0:Point, p1:Point, p2:Point, p3:Point, t:Float):Point {
        var tt = t * t; // t^2
        var ttt = tt * t; // t^3
        var t1 = 1 - t; // 1-t
        var tt1 = t1 * t1; // (1-t)^2
        var tt2 = tt1 * t1; // (1-t)^3
        var tt3 = 3 * t * tt1; // 3*t*(1-t)^2
        var tt4 = 3 * tt * t1; // 3*t^2*(1-t)

        var x = p0.x * tt2 + p1.x * tt3 + p2.x * tt4 + p3.x * ttt;
        var y = p0.y * tt2 + p1.y * tt3 + p2.y * tt4 + p3.y * ttt;

        return new Point(x, y);
    }

    /**
     * Quadratic Bezier interpolation
     * B(t) = P0*(1-t)^2 + P1*2*t*(1-t) + P2*t^2
     *
     * @param p0     first control point (anchor)
     * @param p1     second control point (control)
     * @param p2     third control point (anchor)
     * @param t      parameter from 0 to 1
     * @return point on the curve corresponding given parameter
     */
    private function getPointOnQuadratic(p0:Point, p1:Point, p2:Point, t:Float):Point {
        var tt = t * t; // t^2
        var t1 = 1 - t; // 1-t
        var tt1 = t1 * t1; // (1-t)^2
        var tt4 = 2 * t * t1; // 2*t*(1-t)

        var x = p0.x * tt1 + p1.x * tt4 + p2.x * tt;
        var y = p0.y * tt1 + p1.y * tt4 + p2.y * tt;

        return new Point(x, y);

    }

    /**
     * Computes intersection of two lines
     * Each line is specified by two points
     *
     * @param a0     first point of line A
     * @param a1     second point of line A
     * @param b0     first point of line B
     * @param b1     second point of line B
     * @return intersection point
     */
    function getIntersectionPoint(a0:Point, a1:Point, b0:Point, b1:Point):Point {
        var dAx = a1.x - a0.x;
        var dAy = a1.y - a0.y;
        var dBx = b1.x - b0.x;
        var dBy = b1.y - b0.y;
        var Fa = dAx * a0.y - dAy * a0.x;
        var Fb = dBx * b0.y - dBy * b0.x;
        var ddd = dBy * dAx - dBx * dAy;

        var x:Float = 0;
        var y:Float = 0;
        if (ddd != 0) {
            x = (Fa * dBx - Fb * dAx) / ddd;
            y = (Fa * dBy - Fb * dAy) / ddd;
        }

        return new Point(x, y);
    }

    // Computer distance between points (Pythagoras)
    private function distance(p0:Point, p1:Point):Float {
        var vx = p1.x - p0.x;
        var vy = p1.y - p0.y;
        return Math.abs(Math.sqrt(vx * vx + vy * vy));
    }

    /**
     * Computes derivative of cubic bezier at specified point
     *
     * @param p0     cubic curve parameter
     * @param p1     cubic curve parameter
     * @param p2     cubic curve parameter
     * @param p3     cubic curve parameter
     * @param t      specified point on the curve
     * @return derivative of specified curve at specified point
     */
    private function derivativeOfCubicBezier(p0:Point, p1:Point, p2:Point, p3:Point, t:Float):Point {
        var ax = 3 * p1.x - 3 * p2.x - p0.x + p3.x;
        var bx = 3 * (p0.x - 2 * p1.x + p2.x);
        var cx = 3 * (p1.x - p0.x);

        var ay = 3 * p1.y - 3 * p2.y - p0.y + p3.y;
        var by = 3 * (p0.y - 2 * p1.y + p2.y);
        var cy = 3 * (p1.y - p0.y);

        var x = 3 * ax * t * t + 2 * bx * t + cx;
        var y = 3 * ay * t * t + 2 * by * t + cy;

        return new Point(x, y);
    }
}