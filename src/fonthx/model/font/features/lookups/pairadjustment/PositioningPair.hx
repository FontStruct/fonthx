package fonthx.model.font.features;

import Std;

class PositioningPair {

    public var left:Int;
    public var right:Int;
    public var value:Float;

    public function new(left:Int, right:Int, value:Float) {
        this.left = left;
        this.right = right;
        this.value = value;
    }

    public static function getKey(left:Int, right:Int):String {
        return Std.string(left) + "_" + Std.string(right);
    }

    public function toString() {
        return PositioningPair.getKey(left, right) + ": " + value;
    }

}
