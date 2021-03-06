package fonthx.examples.pixelfonter;

import fonthx.model.font.ContourOptions;
import fonthx.model.font.PathProperties;
import fonthx.model.font.AbstractContourGlyph;
import fonthx.model.geom.Rectangle;
import fonthx.model.font.IContourConsumer;
import fonthx.model.font.IContourGlyph;

class PixelGlyph extends AbstractContourGlyph implements IContourGlyph {

    private var pixels:Array<Pixel>;

    /** Pixel width and height in em units */
    public var pixelSize:Int;
    public var shape:Int;

    public var bounds:Rectangle;
    public var gridBounds:Rectangle;

    public static var useCircles:Bool = false;

    public function new(codepoint:Int) {
        super(codepoint);
        pixels = new Array();
        bounds = new Rectangle();
        gridBounds = null;
    }

    public function addPixel(x:Int, y:Int, color:String = '#FF0000') {
        pixels.push(new Pixel(x, y, color));
        if (gridBounds == null) {
            gridBounds = new Rectangle(x, y, 1, 1);
        } else {
            gridBounds.add(x, y);
        }
        // todo following is flawed (if left side is offset from 0)
        bounds.add((x + 1) * pixelSize, (y + 1) * pixelSize);
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
                consumer.lineTo(x1, y1);
            }
            consumer.endPath();
            consumer.endGroup();
            consumer.endShape();
        }
        consumer.end();
    }

    public function getPixels() {
        return pixels;
    }

    override public function get_advancedWidth():Float {
        return bounds.width + pixelSize;
    }

    override public function get_numPoints():Int {
        return pixels.length * 5;
    }

    override public function get_numContours():Int {
        return pixels.length;
    }

    override public function get_lsb():Float {
        return 0;
    }

    override public function get_rsb():Float {
        return pixelSize;
    }

}

class Pixel {

    public var x:Int;
    public var y:Int;
    public var color:String;
    public var opacity:Float;

    public function new(x, y, color = '#FF0000', opacity = 1) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.opacity = opacity;
    }

    public function toString():String {
        return '(${x}, ${y}) ${color} ${opacity}';
    }
}
