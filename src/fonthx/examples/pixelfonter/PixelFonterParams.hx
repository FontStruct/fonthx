package fonthx.examples.pixelfonter;

import haxe.io.Bytes;

typedef PixelFonterParams = {
    imagePath:String,
    glyphWidth:Int,
    glyphHeight:Int,
    codepointString:String,
    name:String,
    outputPath:String,
    ?imageWidth: Int,
    ?imageHeight: Int,
    ?pixelData: Bytes
}