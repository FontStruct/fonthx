package fonthx.examples.pixelfonter;

import fonthx.model.color.RGBAColor;
class Pixel {

    public var x:Int;
    public var y:Int;
    public var color:RGBAColor;
    public var opacity:Float;

    public function new(x, y, color = RGBAColor.BLACK, opacity = 1) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.opacity = opacity;
    }

    public function toString():String {
        return '(${x}, ${y}) ${color} ${opacity}';
    }
}
