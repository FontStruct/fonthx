package fonthx.examples.pixelfonter;

import fonthx.examples.pixelfonter.GlyphIdentifier;
import fonthx.model.font.features.ScriptTag;
import fonthx.svg.SVGBuilder;
import fonthx.utils.ExecutionTimer;
import haxe.io.Bytes;
import fonthx.model.font.glyphnames.GlyphNamer;
import fonthx.opentype.BuildOptions;
import fonthx.services.FeatureSpecParser;
import fonthx.opentype.OpenTypeBuilder;
import fonthx.model.color.RGBAColor;
import fonthx.model.font.IContourGlyph;
using StringTools;
using Lambda;

/**
* The core pixelfonter module
**/
class PixelFonter {

    public static function build(opts:PixelFonterParams):Bytes {

        ExecutionTimer.start('PixelFonter::generate');

        // parse codepoint string
        var codepointSegments = opts.codepointString.split(',');

        // assemble full list of codepoints & unencoded glyphs
        var identifiers:Array<GlyphIdentifier> = codepointSegments.fold(function(segment:String, identifiers:Array<GlyphIdentifier>) {
            var extremes = segment.split('-');
            if (extremes.length != 2) {
                var identifier = new GlyphIdentifier();
                if (Std.parseInt(segment) > 0) {
                    identifier.codepoint = Std.parseInt(segment);
                } else {
                    identifier.name = segment;
                }
                identifiers.push(identifier);
                return identifiers;
            }
            for (i in Std.parseInt(extremes[0])...Std.parseInt(extremes[1]) + 1) {
                identifiers.push(new GlyphIdentifier(i));
            }
            return identifiers;
        }, new Array<GlyphIdentifier>());

        var em = 1024;
        var pixelSize = Std.int(em / opts.glyphWidth);

        // create the font with an emSquare
        var font = new PixelFont(opts.name, em, pixelSize, opts.shape);

        // build the glyph data
        var numRows = opts.imageHeight / opts.glyphHeight;
        for (idx in 0 ... identifiers.length) {
            var glyph = font.addGlyph(identifiers[idx].codepoint, identifiers[idx].name);
            for (dy in 0 ... opts.glyphHeight) {
                for (dx in 0 ... opts.glyphWidth) {
                    var x = (idx * opts.glyphWidth + dx);
                    var row = Std.int(Math.floor(x / opts.imageWidth));
                    x = x % opts.imageWidth;
                    var y = dy + (row * opts.glyphHeight);
                    var pidx = ((y * opts.imageWidth) + x) * 4;
                    var r = opts.pixelData.get(pidx + 2);
                    var g = opts.pixelData.get(pidx + 1);
                    var b = opts.pixelData.get(pidx);
                    var color = RGBAColor.fromRGBA(r, g, b);
//                    trace(color, RGBAColor.WHITE);
                    if (color == RGBAColor.WHITE) continue;
                    font.palette.addColor(color);
                    glyph.addPixel(dx, opts.glyphHeight - (dy + 1), color); // note inverted y axis
                }
            }
        }

        if (opts.svgSheet) {
            var svgBuilder = new SVGBuilder();
            var svg = svgBuilder.buildSheet(font.glyphs);
            ExecutionTimer.end('PixelFonter::generate');
            return Bytes.ofString(svg);
        }

        // setup gsub layout – default script
        font.gsubLayout.setDefaults(ScriptTag.LATIN);
        // setup gpos layout – default script
        font.gposLayout.setDefaults(ScriptTag.LATIN);

        font.addDefaultGlyphs();

        if (opts.includeCOLR) {
            for (i in 0...font.glyphs.length) {
                var g:IContourGlyph = font.glyphs[i];
                var layers = g.getLayers();
                for (l in layers) {
                    font.glyphs.push(l);
                }
            }
        }

        if (opts.useComposites) {
            var pixelGlyph = font.addGlyph(0, 'pixel');
            pixelGlyph.pixelSize = em;
            pixelGlyph.addPixel(0, 0);
            for (g in font.glyphs) {
                if (g.isComposite()) {
                    var pg = cast(g, PixelGlyph);
                    pg.createComponents(pixelGlyph);
                }
            }
        }

        font.prepareForExport();

        // we need GlyphNamer here already so that we can use names more in the feature spec, todo hmm
        GlyphNamer.nameGlyphs(font.glyphs);
        if (opts.features != null) {
            var featureSpecParser = new FeatureSpecParser();
            featureSpecParser.toLayout(opts.features, font);
        }

        var buildOptions = new BuildOptions();
        buildOptions.useSubroutinesInCFF = true;
        buildOptions.useFixedCoordinatesInCFF = opts.floatingPointCoords;
        buildOptions.includeSVG = opts.includeSVG;
        //buildOptions.includeDeprecatedKERNTable = true;
        buildOptions.includeCOLR = opts.includeCOLR;

        var bytes = OpenTypeBuilder.build(font, opts.format == 'ttf' ? TrueType : CFF, buildOptions);

        ExecutionTimer.end('PixelFonter::generate');

        return bytes;
    }


}
