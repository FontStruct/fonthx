package fonthx.examples.pixelfonter;

class Pixel {

    public var x:Int;
    public var y:Int;
    public var color:String;
    public var opacity:Float;

    public function new(x, y, color = '#FF0000', opacity = 1) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.opacity = opacity;
    }

    public function toString():String {
        return '(${x}, ${y}) ${color} ${opacity}';
    }
}
