package fonthx.examples.pixelfonter;

import arguable.ArgParser;
using StringTools;
using Lambda;
using format.png.Tools;

/**
* CLI version of Pixelfonter
**/
class PixelFonterApp {

    public static function main() {

        trace("Executing PixelFonter");

        ArgParser.delimiter = '-';
        var args = ArgParser.parse(Sys.args());

        if (args.has('h') || args.length == 0 || !args.has('i')) {
            // show usage
            trace('Usage:');
            trace('-i string path to the source image (required)');
            trace('-w int pixel width of the glyph cells in the source image (defaults to 5)');
            trace('-h int pixel height of the glyph cells in the source image (defaults to 5)');
            trace('-c string charmap of the glyphs in the image, from left to right, in comma separated blocks e.g. 65-90,96-120 (defaults to 65-90,33-58)');
            trace('-n string name for the output font (defaults to “Pixel Font”)');
            trace('-o string full path for the output font including the filename and suffix (defaults to “output.ttf”)');
            trace('-f format ttf|otf (defaults to “ttf”)');
            return 0;
        }

        var o:PixelFonterParams = {
            imagePath: args.get('i').value,
            glyphWidth: args.has('w') ? Std.parseInt(args.get('w').value) : 5,
            glyphHeight: args.has('h') ? Std.parseInt(args.get('h').value) : 5,
            codepointString: args.has('c') ? args.get('c').value : '65-90,33-58',
            name: args.has('n') ? args.get('n').value : 'Pixel Font',
            outputPath: args.has('o') ? args.get('o').value : 'output.ttf',
            format: args.has('f') ? args.get('f').value : 'ttf'
        }

        // load the image
        var handle = sys.io.File.read(o.imagePath, true);
        var png = new format.png.Reader(handle).read();
        o.imageWidth = png.getHeader().width;
        o.imageHeight = png.getHeader().height;
        o.pixelData = png.extract32();
        handle.close();

        // get the truetype bytes
        var bytes = PixelFonter.build(o);

        // save ’em
        sys.io.File.saveBytes(o.outputPath, bytes);

        return 0;
    }
}
