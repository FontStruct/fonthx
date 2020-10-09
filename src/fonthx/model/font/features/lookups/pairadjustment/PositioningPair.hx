package fonthx.model.font.features.lookups.pairadjustment;

import Std;

class PositioningPair {

    public var idx1:Int;
    public var idx2:Int;
    public var x:Float;
    public var y:Float;

    public function new(
        left:Int,
        right:Int,
        x:Float,
        y:Float = 0
    ) {
        this.idx1 = left;
        this.idx2 = right;
        this.x = x;
        this.y = y;
    }

    public static function getKey(idx1:Int, idx2:Int):String {
        return Std.string(idx1) + "_" + Std.string(idx2);
    }

    public function toString() {
        return PositioningPair.getKey(idx1, idx2) + ": (" + x + "," + y + ")";
    }

}
