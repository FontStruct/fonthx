package fonthx.examples.pixelfonter;

import fonthx.model.font.GlyphComponent;
import fonthx.model.font.IContourGlyph;

class CompositePixelGlyph extends PixelGlyph implements IContourGlyph {

    private var components:Array<GlyphComponent>;

    public function new(codepoint:Int, name = null) {
        super(codepoint, name);
        components = new Array();
    }

    override public function isComposite():Bool {
        return true;
    }

    public function createComponents(sourceGlyph:IContourGlyph):Void {
        var scale = pixelSize / emSquare;
        for (p in pixels) {
            var comp = new GlyphComponent(sourceGlyph);
            comp.setScale(scale, scale);
            comp.setOffset(p.x * pixelSize, p.y * pixelSize);
            components.push(comp);
        }
    }

    override public function getComponents():Array<GlyphComponent> {
        return this.components;
    }

}
