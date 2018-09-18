package fonthx.model.font;

import fonthx.model.geom.Rectangle;

class AbstractContourGlyph implements IContourGlyph {

    @:isVar public var codepoint(get, set):Int;
    @:isVar public var numContours(get, null):Int;
    @:isVar public var numPoints(get, null):Int;
    @:isVar public var advancedWidth(get, null):Float;
    @:isVar public var lsb(get, set):Float;
    @:isVar public var rsb(get, set):Float;
    public var unmapped:Bool;

    public function new(codepoint:Int) {
        this.codepoint = codepoint;
        unmapped = false;
    }

    public function getBounds():Rectangle {
        return null;
    }

    function set_rsb(value:Float):Float {
        return this.rsb = value;
    }

    function get_rsb():Float {
        return rsb;
    }

    function set_lsb(value:Float):Float {
        return this.lsb = value;
    }

    function get_lsb():Float {
        return lsb;
    }

    function get_advancedWidth():Float {
        return advancedWidth;
    }

    function get_numPoints():Int {
        return numPoints;
    }

    function get_numContours():Int {
        return numContours;
    }

    function set_codepoint(value:Int):Int {
        return this.codepoint = value;
    }

    function get_codepoint():Int {
        return codepoint;
    }

    public function walkContours(consumer:IContourConsumer):Void {

    }

}
