package fonthx.examples.pixelfonter;

import haxe.io.Bytes;

class PixelFonterParams {

    public var glyphWidth:Int;
    public var glyphHeight:Int;
    public var codepointString:String;
    public var name:String;
    public var format:String;
    public var outputPath:String;
    public var shape:Int;
    public var includeSVG:Bool;
    public var svgSheet:Bool;
    public var floatingPointCoords:Bool;
    public var features:Dynamic;
    public var imageWidth:Int;
    public var imageHeight:Int;
    public var pixelData:Bytes;

    public function new(o:Dynamic = null) {
        imageWidth = 0;
        imageHeight = 0;
        pixelData = null;
        features = null;
        if (o != null) {
            for (field in Type.getInstanceFields(PixelFonterParams)) {
                if (Reflect.hasField(o, field)) {
                    Reflect.setProperty(this, field, Reflect.getProperty(o, field));
                }
            }
        }
    }

}