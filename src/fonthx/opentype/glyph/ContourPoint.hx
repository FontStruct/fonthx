package fonthx.opentype.glyph;

class ContourPoint {

    public static var OFF_CURVE = 0x00;
    public static var ON_CURVE = 0x01;
    public static var X_SHORT = 0x02;
    public static var Y_SHORT = 0x04;
    public static var REPEAT = 0x08;
    public static var X_SAME_OR_SIGN = 0x10;
    public static var Y_SAME_OR_SIGN = 0x20;

    public var x:Int;
    public var y:Int;
    public var flags:Int;
    public var previous:ContourPoint;
    public var next:ContourPoint;

    public function new(x = 0, y = 0, flags = 0x01 /* ON CURVE */) {
        this.x = x;
        this.y = y;
        this.flags = flags;
        this.previous = null;
        this.next = null;
    }

    public static function copy(other:ContourPoint) {
        var cpy = new ContourPoint(other.x, other.y, other.flags);
        cpy.previous = other.previous;
        cpy.next = other.next;
        return cpy;
    }

    public function getHead():ContourPoint {
        var p = this;
        while (p.previous != null) {
            p = p.previous;
        }
        return p;
    }

    public function isShortY():Bool {
        return ((flags & ContourPoint.Y_SHORT) == 1);
    }

    public function isSameY():Bool {
        return ((flags & ContourPoint.Y_SAME_OR_SIGN) == 1 && !isShortY());
    }

    public function isShortX():Bool {
        return ((flags & ContourPoint.X_SHORT) == 1);
    }

    public function isSameX():Bool {
        return ((flags & ContourPoint.X_SAME_OR_SIGN) == 1 && !isShortX());
    }

    public function isNegatedX():Bool {
        return ((flags & ContourPoint.X_SAME_OR_SIGN) == 0 && isShortX());
    }

    public function isNegatedY():Bool {
        return ((flags & ContourPoint.Y_SAME_OR_SIGN) == 0 && isShortY());
    }

    public function isEnd():Bool {
        return next == null;
    }

    public function equals(other:ContourPoint):Bool {
        return
            x == other.x &&
            y == other.y &&
            flags == other.flags
        ;
    }

    public function toString() {
        return x + "," + y + " " + (isEnd() ? "end" : "");
    }
}
