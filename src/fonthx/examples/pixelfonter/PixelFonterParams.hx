package fonthx.examples.pixelfonter;

import haxe.io.Bytes;

typedef PixelFonterParams = {
    imagePath:String,
    glyphWidth:Int,
    glyphHeight:Int,
    codepointString:String,
    name:String,
    format:String,
    outputPath:String,
    features:Dynamic,
    shape:Int,
    includeSVG:Bool,
    svgSheet:Bool,
    floatingPointCoords:Bool,
    ?imageWidth: Int,
    ?imageHeight: Int,
    ?pixelData: Bytes
}