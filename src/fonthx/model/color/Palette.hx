package fonthx.model.color;

using Lambda;

class Palette {

    public var colors:Array<RGBAColor>;

    public function new() {
        colors = new Array();
    }

    public function addColor(color:RGBAColor) {
        if (!colors.contains(color)) {
            colors.push(color);
        }
    }

    public function addRGBA(r:Int, g: Int, b:Int, a:Int = 255){
        addColor(RGBAColor.fromRGBA(r, g, b, a));
    }


}
