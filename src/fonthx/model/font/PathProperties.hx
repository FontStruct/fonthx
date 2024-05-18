package fonthx.model.font;

import fonthx.model.color.RGBAColor;
class PathProperties {

    public var fill:Null<RGBAColor>;
    public var stroke:Null<RGBAColor>;
    public var opacity:Float;

    public function new() {
        fill = RGBAColor.BLACK;
        stroke = null;
        opacity = 1;
    }
}
