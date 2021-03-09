package fonthx.svg;
import fonthx.model.font.PathProperties;
import fonthx.model.font.IContourConsumer;
import fonthx.model.font.AbstractContourConsumer;

// https://docs.microsoft.com/en-us/typography/opentype/spec/svg#glyph-identifiers
class SVG extends AbstractContourConsumer implements IContourConsumer {


    private var s:String = '<?xml version="1.0" encoding="utf-8"?>';
    private var emSquare:Int;
    private var currProps:PathProperties = null;

    public function new(emSquare:Int) {
        this.emSquare = emSquare;
    }

    override public function start() {
        // The size of the initial viewport for the SVG document is the em square: height and width both equal to head.unitsPerEm
        s = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">';
    }

    override public function startPath(props:PathProperties = null) {
        if (props != null) {
            currProps = props;
        } else if (currProps == null) {
            currProps = new PathProperties();
        }
        s += '<path ';
        if (props.fill != null) {
            s += 'fill="${props.fill}" ';
        }
        if (props.stroke != null) {
            s += 'fill="${props.stroke}" ';
        }
        s += 'd="';
    }

    // <path d="M0,1000h1000C1000,447.716,552.837,0,0,0V1000z"/>

    override public function moveTo(x:Float, y:Float) {
        s += 'M${x},${m(y)}'; // M is absolute moveto
    }
    override public function lineTo(x:Float, y:Float) {
        s += 'L${x},${m(y)}'; // L is absolute lineto
    }
    override public function quadTo(x1:Float, y1:Float, x2:Float, y2:Float) {
        s += 'Q${x1},${m(y1)},${x2},${m(y2)}';
    }
    override public function cubicTo(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float) {
        s += 'C${x1},${m(y1)},${x2},${m(y2)},${x3},${m(y3)}';
    }

    override public function endPath() {
        s += '"/>'; // z to close path?
    }

    override public function end() {
        s += '</svg>';
    }

    // mirror the y coordinate
    // – The default SVG coordinate system is vertically mirrored in comparison to the TrueType/CFF design grid:
    // the positive y-axis points downward, rather than usual convention for OpenType of the positive y-axis pointing
    // upward
    private function m(y) {
        return this.emSquare - y;
    }

    public function getString() {
        return s;
    }

}
