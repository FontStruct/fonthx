package fonthx.model.font;

import fonthx.model.color.RGBAColor;
import fonthx.model.geom.Rectangle;

class AbstractContourGlyph implements IContourGlyph {

    private var components:Array<GlyphComponent>;
    private var layers:Array<IContourGlyph>;

    @:isVar public var codepoint(get, set):Int;
    @:isVar public var numContours(get, null):Int;
    @:isVar public var numPoints(get, null):Int;
    @:isVar public var advancedWidth(get, null):Float;
    @:isVar public var lsb(get, set):Float;
    @:isVar public var rsb(get, set):Float;
    @:isVar public var name(get, set):String;
    @:isVar public var isLayer(get, set):Bool;

    public var unmapped:Bool;
    public var color:RGBAColor = RGBAColor.BLACK;

    public function new(codepoint:Int = 0, name:String = null, isLayer = false) {
        this.codepoint = codepoint;
        this.name = name;
        this.isLayer = isLayer;
        unmapped = codepoint < 1;
        components = new Array();
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

    function set_name(value:String):String {
        return this.name = value;
    }

    function get_name():String {
        // AGL?
        return name;
    }

    public function walkContours(consumer:IContourConsumer, options:ContourOptions = null):Void {

    }

    public function isComposite():Bool {
        return components.length > 0;
    }

    public function getComponents():Array<GlyphComponent> {
        return components;
    }


    public function hasLayers():Bool {
        return layers.length > 0;
    }

    public function getLayers():Array<IContourGlyph> {
        return layers;
    }

    public function get_isLayer():Bool {
        return isLayer;

    }
    public function set_isLayer(isLayer:Bool):Bool {
        this.isLayer = isLayer;
        return isLayer;
    }

}
