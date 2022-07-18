package fonthx.model.geom;

class Path {

    public var length(get, never):Int;
    public var points:Array<Point>;

    public function new() {
        points = new Array<Point>();
    }

    public function append(p:Point) {
        if (points.length > 0) {
            points[points.length - 1].next = p;
            p.prev = points[points.length - 1];
        }
        points.push(p);
    }

    private function get_length():Int {
        return points.length;
    }

    public function getBounds():Rectangle {
        var bounds:Rectangle = null;
        for (p in points) {
            if (bounds == null) {
                bounds = new Rectangle(p.x, p.y);
            } else {
                if (!Math.isNaN(p.x)) {
                    if (p.x > bounds.right) {
                        bounds.right = p.x;
                    }
                    if (p.x < bounds.left) {
                        bounds.left = p.x;
                    }
                }
                if (!Math.isNaN(p.y)) {
                    if (p.y > bounds.bottom) {
                        bounds.bottom = p.y;
                    }
                    if (p.y < bounds.top) {
                        bounds.top = p.y;
                    }
                }
            }
        }
        return bounds;
    }

    public function toString():String {
        return "Path \n" + points.join("\n");
    }

    public function clone():Path {
        var clone = new Path();
        for (p in points) {
            clone.append(p.clone());
        }
        return clone;
    }

    public function scale(x:Float, y:Float, cx:Float = 0, cy:Float = 0) {
        for (p in points) {
            p.x = cx + (p.x * x);
            p.y = cy + (p.y * y);
        }
    }

    public function offset(x:Float, y:Float) {
        for (p in points) {
            p.x += x;
            p.y += y;
        }
    }

    public function forEachPoint(action:Point -> Int -> Void):Void {
        var j:Int = 0;
        while (j < this.points.length) {
            action(this.points[j], j);
            j++;
        }
    }

}

