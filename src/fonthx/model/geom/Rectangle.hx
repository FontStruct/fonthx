package fonthx.model.geom;

class Rectangle {

    public var x:Float;
    public var y:Float;
    public var width:Float;
    public var height:Float;
    public var top (get, set):Float;
    public var topLeft (get, set):Point;
    public var bottom (get, set):Float;
    public var bottomRight (get, set):Point;
    public var left (get, set):Float;
    public var right (get, set):Float;
    public var size (get, set):Point;

    public function new(x:Float = 0, y:Float = 0, width:Float = 0, height:Float = 0):Void {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public function clone():Rectangle {
        return new Rectangle (x, y, width, height);
    }

    public function contains(x:Float, y:Float):Bool {
        return x >= this.x && y >= this.y && x < right && y < bottom;
    }

    public function extendBounds(r:Rectangle) {
        var dx = x - r.x;
        if (dx > 0) {
            x -= dx;
            width += dx;
        }
        var dy = y - r.y;
        if (dy > 0) {
            y -= dy;
            height += dy;
        }
        if (r.right > right) {
            right = r.right;
        }
        if (r.bottom > bottom) {
            bottom = r.bottom;
        }
    }

    public function intersects(toIntersect:Rectangle):Bool {
        var x0 = x < toIntersect.x ? toIntersect.x : x;
        var x1 = right > toIntersect.right ? toIntersect.right : right;
        if (x1 <= x0) {
            return false;
        }
        var y0 = y < toIntersect.y ? toIntersect.y : y;
        var y1 = bottom > toIntersect.bottom ? toIntersect.bottom : bottom;
        return y1 > y0;
    }

    public function offset(dx:Float, dy:Float):Void {
        x += dx;
        y += dy;
    }

    public function add(x:Float, y:Float):Void {
        extendBounds(new Rectangle(x, y, 0, 0));
    }

    public function toString():String {
        return "(x=" + x + ", y=" + y + ", width=" + width + ", height=" + height + ")";
    }

    public function union(toUnion:Rectangle):Rectangle {
        var x0 = x > toUnion.x ? toUnion.x : x;
        var x1 = right < toUnion.right ? toUnion.right : right;
        var y0 = y > toUnion.y ? toUnion.y : y;
        var y1 = bottom < toUnion.bottom ? toUnion.bottom : bottom;
        return new Rectangle (x0, y0, x1 - x0, y1 - y0);
    }

    public function transform(mtx:Matrix):Rectangle {
        var p1 = topLeft.transform(mtx);
        var p2 = bottomRight.transform(mtx);
        return new Rectangle(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
    }

    public function normalize():Void {
        if (width < 0) {
            x = x + width;
            width = Math.abs(width);
        }
        if (height < 0) {
            y = y + width;
            height = Math.abs(height);
        }
    }

    // Getters & Setters

    private function get_bottom() { return y + height; }

    private function set_bottom(value:Float) { height = value - y; return value; }

    private function get_bottomRight() { return new Point (x + width, y + height); }

    private function set_bottomRight(value:Point) { width = value.x - x; height = value.y - y; return value.clone(); }

    private function get_left() { return x; }

    private function set_left(value:Float) { width -= value - x; x = value; return value; }

    private function get_right() { return x + width; }

    private function set_right(value:Float) { width = value - x; return value; }

    private function get_size() { return new Point (width, height); }

    private function set_size(value:Point) { width = value.x; height = value.y; return value.clone(); }

    private function get_top() { return y; }

    private function set_top(value:Float) { height -= value - y; y = value; return value; }

    private function get_topLeft() { return new Point (x, y); }

    private function set_topLeft(value:Point) { x = value.x; y = value.y; return value.clone(); }

}