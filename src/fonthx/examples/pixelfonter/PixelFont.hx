package fonthx.examples.pixelfonter;

import fonthx.model.font.features.Layout;
import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.features.lookups.Lookup;
import fonthx.model.font.features.LanguageTag;
import fonthx.model.font.features.Language;
import fonthx.model.font.features.Script;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;
import fonthx.model.font.features.Feature;
import fonthx.examples.pixelfonter.PixelGlyph.Pixel;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;
import fonthx.model.font.features.ScriptTag;
import fonthx.model.font.features.FeatureTag;
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
    private var shape:Int;
    private var kerningSubLookup:PairAdjustmentPositioningSubLookup;

    public function new(name:String, emSquare:Int, pixelSize:Int, shape:Int = 1) {
        super();
        this.name = name;
        this.emSquare = emSquare;
        this.pixelSize = pixelSize;
        this.shape = shape;
        idealAscender = emSquare + (pixelSize * 2);
        idealDescender = 0;
        realAscender = emSquare + (pixelSize * 2);
        realDescender = 0;
        typoLineGap = emSquare;
        kerningSubLookup = new PairAdjustmentPositioningSubLookup();
    }

    public function addGlyph(codepoint:Int, name:String = null):PixelGlyph {
        var glyph = new PixelGlyph(codepoint, name);
        glyph.pixelSize = pixelSize;
        glyph.shape = shape;
        this.glyphs.push(glyph);
        return glyph;
    }

    public function prepareForExport():Void {

        // todo: do default prep in TT Builder

        // https://docs.microsoft.com/en-us/typography/opentype/spec/recom#glyph-0-the-notdef-glyph
        // https://docs.microsoft.com/en-us/typography/opentype/otspec170/recom#first-four-glyphs-in-fonts

        // add .notdef glyph
        var notdef = addGlyph(0);
        notdef.name = '.notdef';
        //NotDefGlyph.draw(notdef, 500);

//        // add .nul glyph
//        var nul = addGlyph(0);
//
//        // add CR (0x0D)
//        var cr = addGlyph(0x0D);
//        cr.bounds = new Rectangle(0, 0, pixelSize * 2, emSquare);
//
        // add space
        var space = addGlyph(0x20);
        space.bounds = new Rectangle(0, 0, pixelSize * 2, emSquare);

        // sort glyphs by codepoint
        glyphs.sort(function(a:IContourGlyph, b:IContourGlyph) {
            return a.codepoint - b.codepoint;
        });




        var kerning = new Feature(FeatureTag.FEAT_KERN, true);
        gposLayout.addFeature(kerning, ScriptTag.LATIN);
        var kerningLookup = autoKern();
        kerning.addLookup(kerningLookup);
        gposLayout.addLookup(kerningLookup);


    }

    override function get_vendorID():String {
        return "PXFR";
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
        return '1.0';
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

    override public function getKerningPairs():Array<PositioningPair> {
        return kerningSubLookup.pairs;
    }

    private function autoKern():Lookup {
        var lookup = new Lookup(LookupType.GPOS_PAIR_ADJUSTMENT, true);
        lookup.addSubLookup(kerningSubLookup);
        var leftId = 0;
        for (left in glyphs) {
            var rightId = 0;
            for (right in glyphs) {
                var kern = autoKernGlyphs(cast(left, PixelGlyph), cast(right, PixelGlyph));
                if (kern != 0) {
                    kern = Std.int(kern * pixelSize);
                    kerningSubLookup.addPair(new PositioningPair(leftId, rightId, kern));
                }
                rightId ++;
            }
            leftId ++;
        }
        return lookup;
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
        var leftLeadEdgePixels:Map<Int, Int> = new Map<Int, Int>();
        for (px in leftPixels) {
            if (!leftLeadEdgePixels.exists(px.y) || px.x > leftLeadEdgePixels[px.y]) {
                leftLeadEdgePixels[px.y] = px.x;
            }
        }

        // build an array of “leftmost” nodes on the right
        var rightTrailEdgePixels:Map<Int, Int> = new Map<Int, Int>();
        for (px in rightPixels) {
            if (!rightTrailEdgePixels.exists(px.y) || px.x < rightTrailEdgePixels[px.y]) {
                rightTrailEdgePixels[px.y] = px.x;
            }
        }

        // start glyphs at offsets to get the basic unkerned spacing
        var leftOffset:Int = 0 - Std.int(leftBounds.left);
        var rightOffset:Int = 0 - Std.int(rightBounds.left);
        rightOffset += Std.int(leftBounds.width);

        var kern:Int = 0;
        var closeEnough:Bool = false;
        var y:Int;
        var trailingEdge:Int;
        while (!closeEnough) {
            for (y in rightTrailEdgePixels.keys()) {
                trailingEdge = rightTrailEdgePixels[y] + rightOffset + kern;
                if (
                (leftLeadEdgePixels.exists(y) && trailingEdge == ((leftLeadEdgePixels[y] + leftOffset) + 1)) ||
                (leftLeadEdgePixels.exists(y + 1) && trailingEdge == (leftLeadEdgePixels[y + 1] + leftOffset)) ||
                (leftLeadEdgePixels.exists(y - 1) && trailingEdge == (leftLeadEdgePixels[y - 1] + leftOffset))) {
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
