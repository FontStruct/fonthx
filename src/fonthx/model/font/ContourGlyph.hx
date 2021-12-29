package fonthx.model.font;

import fonthx.model.font.AbstractContourGlyph;
import fonthx.model.geom.Shape;

class ContourGlyph extends AbstractContourGlyph implements IContourGlyph {

    public var areas:Array<Shape>;

    public function new(codepoint:Int) {
        super(codepoint);
    }



}
