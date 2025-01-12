package fonthx.examples.pixelfonter;

import fonthx.model.color.RGBAColor;
import fonthx.model.font.AbstractContourGlyph;
import fonthx.model.font.ContourOptions;
import fonthx.model.font.GlyphComponent;
import fonthx.model.font.IContourConsumer;
import fonthx.model.font.IContourGlyph;
import fonthx.model.font.PathProperties;
import fonthx.model.geom.Rectangle;

using Lambda;
using StringTools;

class PixelGlyph extends AbstractContourGlyph implements IContourGlyph {

    private var pixels:Array<Pixel>;

    /** Pixel width and height in em units */
    public var pixelSize:Int;
    public var emSquare:Int;
    public var shape:Int;

    public var bounds:Rectangle;
    public var gridBounds:Rectangle;

    public function new(codepoint:Int, name = null, isLayer = false) {
        super(codepoint, name, isLayer);
        pixels = new Array();
        bounds = null;
        gridBounds = null;
    }

    public function addPixel(x:Int, y:Int, color:RGBAColor = RGBAColor.BLACK) {
        pixels.push(new Pixel(x, y, color));
        if (gridBounds == null) {
            gridBounds = new Rectangle(x, y, 1, 1);
        } else {
            gridBounds.add(x, y);
        }
        if (bounds == null) {
            bounds = new Rectangle(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        } else {
            bounds.extendBounds(new Rectangle(x * pixelSize, y * pixelSize, pixelSize, pixelSize));
        }
    }

    public function toString():String {
        return 'Codepoint ${codepoint}: ' + pixels.toString();
    }

    override public function getBounds():Rectangle {
        return bounds;
    }

    public function getGridBounds():Rectangle {
        return gridBounds;
    }

    /**
    * @inherit
    **/
    override public function walkContours(consumer:IContourConsumer, options:ContourOptions = null) {
        consumer.start();
        var props:PathProperties = new PathProperties();
        for (p in pixels) {
            props.fill = p.color;
            consumer.startShape();
            consumer.startGroup();
            consumer.startPath(props);
            if (shape == 2) {
                // dots
                var r:Float = pixelSize / 2;
                var c = 0.552284749831 * r;
                var x0:Float = p.x * pixelSize;
                var y0:Float = p.y * pixelSize;
                var x1:Float = x0 + r;
                var y1:Float = y0 + r;
                var x2:Float = x1 + r;
                var y2:Float = y1 - r;
                var x3:Float = x2 - r;
                var y3:Float = y2 - r;
                consumer.moveTo(x0, y0);
                consumer.cubicTo(x0, y0 + c, x1 - c, y1, x1, y1);
                consumer.cubicTo(x1 + c, y1, x2, y2 + c, x2, y2);
                consumer.cubicTo(x2, y2 - c, x3 + c, y3, x3, y3);
                consumer.cubicTo(x3 - c, y3, x0, y0 - c, x0, y0);
            } else {
                // pixels
                var x1 = p.x * pixelSize;
                var y1 = p.y * pixelSize;
                var x2 = x1 + pixelSize;
                var y2 = y1 + pixelSize;
                consumer.moveTo(x1, y1);
                consumer.lineTo(x2, y1);
                consumer.lineTo(x2, y2);
                consumer.lineTo(x1, y2);
            }
            consumer.endPath();
            consumer.endGroup();
            consumer.endShape();
        }
        consumer.end();
    }

    public function createComponents(sourceGlyph:IContourGlyph):Void {
        var scale = pixelSize / emSquare;
        for (p in pixels) {
            var comp = new GlyphComponent(sourceGlyph);
            comp.setScale(scale, scale);
            comp.setOffset(p.x * pixelSize, p.y * pixelSize);
            components.push(comp);
        }
    }

    override public function getLayers():Array<IContourGlyph> {
        if (layers == null) {
            // make layer glyphs (with colors) from this one
            layers = new Array<IContourGlyph>();
            for (p in pixels) {
                var layerGlyph = cast(layers.find(function(g:IContourGlyph) {
                    return g.color == p.color;
                }), PixelGlyph);
                if (layerGlyph == null) {
                    layerGlyph = new PixelGlyph(0, ['layer', name, codepoint.hex(), p.color.rgbHex].join('-'));
                    layerGlyph.pixelSize = pixelSize;
                    layerGlyph.emSquare = emSquare;
                    layerGlyph.shape = shape;
                    layerGlyph.color = p.color;
                    layerGlyph.isLayer = true;
                    layers.push(layerGlyph);
                }
                layerGlyph.addPixel(p.x, p.y, p.color);
            }
        }
        return layers;
    }

    override public function hasLayers():Bool {
        return layers != null;
    }

    public function getPixels() {
        return pixels;
    }

    override public function get_advancedWidth():Float {
        return bounds == null? pixelSize : bounds.width + pixelSize;
    }

    override public function get_numPoints():Int {
        return pixels.length * 5;
    }

    override public function get_numContours():Int {
        return pixels.length;
    }

    override public function get_lsb():Float {
        return bounds == null? 0 : bounds.left;
    }

    override public function get_rsb():Float {
        return pixelSize;
    }

}
