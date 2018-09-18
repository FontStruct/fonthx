package fonthx.examples.pixelfonter;

import fonthx.model.geom.Rectangle;
import fonthx.model.font.IContourGlyph;
import fonthx.model.font.IFont;
import fonthx.model.font.AbstractFont;

using StringTools;

class PixelFont implements IFont extends AbstractFont {

    private var pixelSize:Int;

    public function new(name:String, emSquare:Int, pixelSize:Int) {
        super();
        this.name = name;
        this.emSquare = emSquare;
        this.pixelSize = pixelSize;
        idealAscender = emSquare + (pixelSize * 2);
        idealDescender = 0;
        realAscender = emSquare + (pixelSize * 2);
        realDescender = 0;
        typoLineGap = emSquare;
    }

    public function addGlyph(cp:Int):PixelGlyph {
        var glyph = new PixelGlyph(cp);
        glyph.pixelSize = pixelSize;
        this.glyphs.push(glyph);
        return glyph;
    }

    public function prepareForExport():Void {


        // todo: do default prep in TT Builder
        // add space
        var space = addGlyph(0x20);
        space.bounds = new Rectangle(0, 0, pixelSize * 2, emSquare);

        // add CR (0x0D)
        var cr = addGlyph(0x0D);
        cr.unmapped = true;

        // add .nul glyph
        var nul = addGlyph(0);
        nul.unmapped = true;

        // add .notdef glyph
        var notdef = addGlyph(0);
        notdef.unmapped = true;
        //NotDefGlyph.draw(notdef, 500);

        // sort glyphs by codepoint
        glyphs.sort(function(a:IContourGlyph, b:IContourGlyph) {
            return a.codepoint - b.codepoint;
        });

    }

    override public function get_uniqueFamilyName() {
        return 'PixelFonter' + name;
    }

    override public function get_styleModifiers() {
        return 'Regular';
    }

    override public function get_fullName() {
        return uniqueFamilyName + ' ' + styleModifiers;
    }

    override public function get_version() {
        return 'Version 0.0';
    }

    override public function get_postscriptName() {
        var psName = ~/[^\x00-\x7F]]/g.replace(get_uniqueFamilyName(), '');
        psName =  psName.replace(' ', '');
        return psName;
    }

    override public function getNumberOfHMetrics():Int {
        return this.glyphs.length;
    }

    override public function getLineGap() {
        return 0;
    }



}
