package fonthx.model.font;

class LayerComponent {

    public var glyph:IContourGlyph;
    public var paletteIdx:Int;

    public function new(glyph:IContourGlyph, paletteIdx:Int = 0) {
        this.glyph = glyph;
        this.paletteIdx = paletteIdx;
    }

}
