package fonthx.model.color;

class Palette {

    var colors:Array<RGBAColor>;

    public function new() {
        colors = new Array();
    }

    public function addColor(color:RGBAColor) {
        colors.push(color);
    }


}
