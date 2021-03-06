package fonthx.examples.pixelfonter;

import fonthx.svg.SVGBuilder;
import fonthx.opentype.BuildOptions;
import fonthx.utils.ExecutionTimer;
import fonthx.opentype.FontFileFormat;
import fonthx.opentype.OpenTypeBuilder;
import haxe.io.Bytes;

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

        // assemble full list of codepoints
        var codepoints:Array<Int> = codepointSegments.fold(function(segment:String, cps:Array<Int>) {
            var extremes = segment.split('-');
            for (i in Std.parseInt(extremes[0])...Std.parseInt(extremes[1]) + 1) {
                cps.push(i);
            }
            return cps;
        }, new Array<Int>());

        var em = 1024;
        var pixelSize = Std.int(em / opts.glyphWidth);

        // create the font with an emSquare
        var font = new PixelFont(opts.name, em, pixelSize, opts.shape);

        // build the glyph data
        var numRows = opts.imageHeight / opts.glyphHeight;
        for (idx in 0 ... codepoints.length) {
            var glyph = font.addGlyph(codepoints[idx]);
            for (dy in 0 ... opts.glyphHeight) {
                for (dx in 0 ... opts.glyphWidth) {
                    var x = (idx * opts.glyphWidth + dx);
                    var row = Std.int(Math.floor(x / opts.imageWidth));
                    x = x % opts.imageWidth;
                    var y = dy + (row * opts.glyphHeight);
                    var idx = ((y * opts.imageWidth) + x) * 4;
                    var color = opts.pixelData.get(idx);
                    if (color != 0) continue;
                    glyph.addPixel(dx, opts.glyphHeight - (dy + 1), dy > Math.floor((opts.glyphHeight - 3) / 2) ? '#0099CC' : '#CC0000'); // note inverted y axis
                }
            }
        }

        if (opts.svgSheet) {
            var svgBuilder = new SVGBuilder();
            var svg = svgBuilder.buildSheet(font.glyphs);
            ExecutionTimer.end('PixelFonter::generate');
            return Bytes.ofString(svg);
        }

        font.prepareForExport();

        var buildOptions = new BuildOptions();
        buildOptions.useSubroutinesInCFF = true;
        buildOptions.useFixedCoordinatesInCFF = opts.floatingPointCoords;
        buildOptions.includeSVG = opts.includeSVG;
        var bytes = OpenTypeBuilder.build(font, opts.format == 'ttf' ? TrueType : CFF, buildOptions);

        ExecutionTimer.end('PixelFonter::generate');

        return bytes;
    }


}
