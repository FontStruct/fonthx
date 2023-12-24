package fonthx.model.color;

class RGBAColor {

    var r:Int;
    var g:Int;
    var b:Int;
    var a:Int;

    public function new(r:Int = 0, g:Int = 0, b:Int = 0, a:Int = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
