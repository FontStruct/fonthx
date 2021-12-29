package fonthx.opentype.tables;

import haxe.io.Bytes;
import fonthx.opentype.glyph.CompositeGlyphDescription;
import fonthx.opentype.glyph.GlyphDescriptionContourConsumer;
import fonthx.model.font.IFont;
import fonthx.opentype.glyph.SimpleGlyphDescription;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * Truetype glyph table 
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/glyf
 * @see http://developer.apple.com/textfonts/TTRefMan/RM06/Chap6glyf.html
 */
class GlyphTable extends Table {

    private var offsets:Array<Int> ;
    private var font:IFont;

    /**
	 * Construct a new Glyph Table
	 * @param font 
	 */
    public function new(font:IFont) {
        super(Table.GLYF);
        this.font = font;
    }

    override public function getBytes():Bytes {
        offsets = new Array<Int>();
        var coffset = 0;
        for (glyph in font.glyphs) {
            if (glyph.isComposite()) {
                var cgDesc = new CompositeGlyphDescription();
                tt.writeBytes(cgDesc.write(glyph, font));
                offsets.push(coffset);
                coffset = tt.getPosition() - this.offset;

            } else {
                var gDesc = new SimpleGlyphDescription();
                var consumer = new GlyphDescriptionContourConsumer(gDesc);
                glyph.walkContours(consumer);
                tt.writeBytes(gDesc.write());
                offsets.push(coffset);
                coffset = tt.getPosition() - this.offset;
            }
        }
        /*In order to compute the length of the last glyph element,
		there is an extra entry after the last valid index. */
        offsets.push(coffset);
        return tt.getBytes();
    }

    public function getOffsets():Array<Int> {
        return offsets;
    }

}                               