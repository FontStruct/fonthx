package fonthx.model.font;

class GlyphComponent {

    public var glyph:IContourGlyph;
    public var offsetX:Float = 1;
    public var offsetY:Float = 1;
    public var scaleX:Float = 1;
    public var scaleY:Float = 1;

    public function new(glyph:IContourGlyph) {
        this.glyph = glyph;
    }

    public function setOffset(x:Float, y:Float) {
        this.offsetX = x;
        this.offsetY = y;
    }

    public function setScale(x:Float, y:Float) {
        this.scaleX = x;
        this.scaleY = y;
    }
}
