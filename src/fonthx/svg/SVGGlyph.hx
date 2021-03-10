package fonthx.svg;
import fonthx.model.font.AbstractContourConsumer;
import fonthx.model.font.IContourConsumer;
import fonthx.model.font.PathProperties;

// https://docs.microsoft.com/en-us/typography/opentype/spec/svg#glyph-identifiers
class SVGGlyph extends AbstractContourConsumer implements IContourConsumer {


    private var s:StringBuf;
    private var id:Int;
    private var options:SVGOptions;
    private var currProps:PathProperties = null;

    public function new(id:Int, options:SVGOptions) {
        this.id = id;
        this.options = options;
        s = new StringBuf();
    }

    private function offset() {
        if (!options.asSheet) return '';
        return ' transform="translate(${options.offsetX},${options.offsetY})"';
    }

    override public function start() {
        s.add('<g id="glyph${id}"${offset()}>');
    }

    override public function startPath(props:PathProperties = null) {
        if (props != null) {
            currProps = props;
        } else if (currProps == null) {
            currProps = new PathProperties();
        }
        s.add('<path ');
        if (props.fill != null) {
            s.add('fill="${props.fill}" ');
        }
        if (props.stroke != null) {
            s.add('fill="${props.stroke}" ');
        }
        s.add('d="');
    }

    override public function moveTo(x:Float, y:Float) {
        s.add('M${x},${m(y)}'); // M is absolute moveto
    }

    override public function lineTo(x:Float, y:Float) {
        s.add('L${x},${m(y)}'); // L is absolute lineto
    }

    override public function quadTo(x1:Float, y1:Float, x2:Float, y2:Float) {
        s.add('Q${x1},${m(y1)},${x2},${m(y2)}');
    }

    override public function cubicTo(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float) {
        s.add('C${x1},${m(y1)},${x2},${m(y2)},${x3},${m(y3)}');
    }

    override public function endPath() {
        s.add('"/>'); // z to close path?
    }

    override public function end() {
        s.add('</g>');
    }

    // mirror the y coordinate
    // – The default SVG coordinate system is vertically mirrored in comparison to the TrueType/CFF design grid:
    // the positive y-axis points downward, rather than usual convention for OpenType of the positive y-axis pointing
    // upward
    private function m(y:Float) {
        return options.emSquare - y;
    }

    public function toString() {
        return s.toString();
    }

}
