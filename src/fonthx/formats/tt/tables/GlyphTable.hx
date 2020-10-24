package fonthx.formats.tt.tables;

import fonthx.formats.tt.glyph.GlyphDescriptionContourConsumer;
import fonthx.model.font.IFont;
import fonthx.formats.tt.glyph.SimpleGlyphDescription;
import fonthx.formats.tt.writers.ITrueTypeWriter;

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

    override public function write(tt:ITrueTypeWriter) {
        offsets = new Array<Int>();
        var coffset = 0;
        for (glyph in font.glyphs) {
            var gDesc = new SimpleGlyphDescription();
            var consumer = new GlyphDescriptionContourConsumer(gDesc);
            glyph.walkContours(consumer);
            gDesc.write(tt);
            offsets.push(coffset);
            coffset = tt.getPosition() - this.offset;
        }
        /*In order to compute the length of the last glyph element,
		there is an extra entry after the last valid index. */
        offsets.push(coffset);
    }

    public function getOffsets():Array<Int> {
        return offsets;
    }

}                               