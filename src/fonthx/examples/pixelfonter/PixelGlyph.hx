package fonthx.examples.pixelfonter;

import fonthx.model.font.AbstractContourGlyph;
import fonthx.model.geom.Rectangle;
import fonthx.model.font.IContourConsumer;
import fonthx.model.font.IContourGlyph;

class PixelGlyph extends AbstractContourGlyph implements IContourGlyph {

    private var pixels:Array<Pixel>;

    /** Pixel width and height in em units */
    public var pixelSize:Int;

    public var bounds:Rectangle;
    public var gridBounds:Rectangle;

    public function new(codepoint:Int) {
        super(codepoint);
        pixels = new Array();
        bounds = new Rectangle();
        gridBounds = null;
    }

    public function addPixel(x:Int, y:Int) {
        pixels.push(new Pixel(x, y));
        if (gridBounds == null) {
            gridBounds = new Rectangle((x + 1), (y + 1), 1, 1);
        } else {
            gridBounds.add((x + 1), (y + 1));
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
    override public function walkContours(consumer:IContourConsumer) {
        consumer.start();
        for (p in pixels) {
            consumer.startShape();
            consumer.startGroup();
            consumer.startPath();
            var x1 = p.x * pixelSize;
            var y1 = p.y * pixelSize;
            var x2 = x1 + pixelSize;
            var y2 = y1 + pixelSize;
            consumer.moveTo(x1, y1);
            consumer.lineTo(x2, y1);
            consumer.lineTo(x2, y2);
            consumer.lineTo(x1, y2);
            consumer.lineTo(x1, y1);
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

    public function new(x, y) {
        this.x = x;
        this.y = y;
    }

    public function toString():String {
        return '(${x}, ${y})';
    }
}
