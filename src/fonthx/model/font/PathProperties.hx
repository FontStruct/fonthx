package fonthx.model.font;

import fonthx.model.color.RGBAColor;
class PathProperties {

    public var fill:RGBAColor;
    public var stroke:RGBAColor;
    public var opacity:Float;

    public function new() {
        fill = RGBAColor.BLACK;
        stroke = 0;
        opacity = 1;
    }
}
