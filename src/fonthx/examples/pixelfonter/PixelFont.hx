package fonthx.examples.pixelfonter;

import fonthx.examples.pixelfonter.PixelGlyph.Pixel;
import fonthx.model.font.KerningPair;
import fonthx.model.font.features.LanguageTag;
import fonthx.model.font.features.ScriptTag;
import fonthx.model.font.features.FeatureTag;
import fonthx.model.font.features.Kerning;
import fonthx.model.font.KerningClass;
import fonthx.model.geom.Rectangle;
import fonthx.model.font.IContourGlyph;
import fonthx.model.font.IFont;
import fonthx.model.font.AbstractFont;

using StringTools;

/**
* A Pixel Font
**/
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

        this.features.push(autoKern());

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
        psName = psName.replace(' ', '');
        return psName;
    }

    override public function getNumberOfHMetrics():Int {
        return this.glyphs.length;
    }

    override public function getLineGap() {
        return 0;
    }

    override public function getKerningPairs():Array<KerningPair> {
        return cast(this.features[0], Kerning).pairs;
    }

    private function autoKern():Kerning {
        var kerning = new Kerning();
        kerning.feature = cast FeatureTag.FEAT_KERN;
        kerning.language = cast LanguageTag.ENGLISH;
        kerning.script = cast ScriptTag.LATIN;
        var leftId = 0;
        for (left in glyphs) {
            var rightId = 0;
            for (right in glyphs) {
                var kern = autoKernGlyphs(cast(left, PixelGlyph), cast(right, PixelGlyph));
                if (kern != 0) {
                    kerning.pairs.push(new KerningPair(leftId, rightId, kern));
                }
                rightId ++;
            }
            leftId ++;
        }
        if (kerning.pairs.length > 0) {
            for (pair in kerning.pairs) {
                pair.value = Std.int(pair.value * pixelSize);
            }
        }
        return kerning;
    }

    private static function autoKernGlyphs(left:PixelGlyph, right:PixelGlyph):Int {

        if (left.getPixels().length == 0 || right.getPixels().length == 0) {
            return 0;
        }

        var leftBounds:Rectangle = left.getGridBounds();
        var rightBounds:Rectangle = right.getGridBounds();
        var leftPixels:Array<Pixel> = left.getPixels();
        var rightPixels:Array<Pixel> = right.getPixels();

        // build an array of “rightmost” nodes on the left
        var leadEdgePixels:Map<Int, Int> = new Map<Int, Int>();
        for (px in leftPixels) {
            if (!leadEdgePixels.exists(px.y) || px.x > leadEdgePixels[px.y]) {
                leadEdgePixels[px.y] = px.x;
            }
        }

        // build an array of “leftmost” nodes on the right
        var trailEdgePixels:Map<Int, Int> = new Map<Int, Int>();
        for (px in rightPixels) {
            if (!trailEdgePixels.exists(px.y) || px.x < trailEdgePixels[px.y]) {
                trailEdgePixels[px.y] = px.x;
            }
        }

        // start glyphs at offsets to get the basic unkerned spacing
        var leftOffset:Int = 0 - Std.int(leftBounds.left);
        var rightOffset:Int = 0 - Std.int(rightBounds.left);
        var trace = left.codepoint == 65 && right.codepoint == 73;
        if (trace) {
            trace(leadEdgePixels, trailEdgePixels, leftOffset, rightOffset, leftBounds, rightBounds);
        }
        rightOffset += Std.int(leftBounds.width);

        var kern:Int = 0;
        var closeEnough:Bool = false;
        var y:Int;
        var trailingEdge:Int;
        while (!closeEnough) {
            for (y in trailEdgePixels.keys()) {
                trailingEdge = trailEdgePixels[y] + rightOffset + kern;
                if (
                (leadEdgePixels.exists(y) && trailingEdge == (leadEdgePixels[y] + leftOffset)) ||
                (leadEdgePixels.exists(y + 1) && trailingEdge == (leadEdgePixels[y + 1] + leftOffset)) ||
                (leadEdgePixels.exists(y - 1) && trailingEdge == (leadEdgePixels[y - 1] + leftOffset))) {
                    // we are touching!
                    closeEnough = true;
                    break;
                }
            }
            if (kern < -20) {
                kern = 0;
                break;
            }
            if (!closeEnough) {
                kern--;
            }
        }
        return kern;
    }

}
