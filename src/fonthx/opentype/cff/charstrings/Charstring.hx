package fonthx.opentype.cff.charstrings;
import haxe.io.BytesBuffer;
import haxe.io.Bytes;
import fonthx.opentype.cff.operators.CharstringOp;
import fonthx.model.font.IContourConsumer;
import fonthx.model.font.AbstractContourConsumer;
import fonthx.model.geom.Point;
using fonthx.opentype.postscript.Encoder;

// w? {hs* vs* cm* hm* mt subpath}? {mt subpath}* endchar
// we do not support hints (hs* vs* cm* hm*)
// Charstrings may contain subr and gsubr calls as desired at any point
// endchar
// subpath
class Charstring extends AbstractContourConsumer implements IContourConsumer {

    public var subpaths:Array<Subpath>;
    private var subpath:Subpath;
    private var useFixed:Bool;
    private var width:Float;
    private var pen:Point;
    public var bytes(get, never):Bytes;

    public function new(width:Float, useFixed:Bool = false) {
        this.width = width;
        this.useFixed = useFixed;
        subpaths = new Array();
    }

    override public function start() {
        pen = null;
    }

    override public function startPath() {
        subpath = new Subpath();
    }

    override public function endPath() {
        subpaths.push(subpath);
    }

    override public function moveTo(x:Float, y:Float) {
        if (pen != null) {
            var dx = x - pen.x;
            var dy = y - pen.y;
            if (pen.x == x) {
                subpath.addOperation(createOperation(vmoveto, [dy])); // need to record dx to on last point
            } else if (pen.y == y) {
                subpath.addOperation(createOperation(hmoveto, [dx]));
            } else {
                subpath.addOperation(createOperation(rmoveto, [dx, dy]));
            }
        } else {
            subpath.addOperation(createOperation(rmoveto, [x, y]));
        }
        pen = new Point(x, y);
    }

    override public function lineTo(x:Float, y:Float) {
        if (pen != null) {
            var dx = x - pen.x;
            var dy = y - pen.y;
            if (pen.x == x) {
                subpath.addOperation(createOperation(vlineto, [dy]));
            } else if (pen.y == y) {
               subpath.addOperation(createOperation(hlineto, [dx]));
            } else {
                subpath.addOperation(createOperation(rlineto, [dx, dy]));
            }
        } else {
            subpath.addOperation(createOperation(rlineto, [x, y]));
        }
        pen = new Point(x, y);
    }

    override public function cubicTo(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float) {
        var x0 = pen.x;
        var y0 = pen.y;
        subpath.addOperation(createOperation(rrcurveto, [x1 - x0, y1 - y0, x2 - x0, y2 - y0, x3 - x0, y3 - y0]));
        pen = new Point(x3, y3);
    }

    override public function quadTo(x1:Float, y1:Float, x2:Float, y2:Float) {
        var x0 = pen.x;
        var y0 = pen.y;
        cubicTo(
            x0 + ((2 / 3) * (x1 - x0)),
            y0 + ((2 / 3) * (y1 - y0)),
            x2 + ((2 / 3) * (x1 - x2)),
            y2 + ((2 / 3) * (y1 - y2)),
            x2,
            y2
        );
        pen = new Point(x2, y2);
    }

    private function createOperation(op:CharstringOp, values:Array<Float> = null):IOperation {
        return useFixed ? new FixedOperation(op, values) : new IntegerOperation(op, values);
    }

    function get_bytes() {
        var buffer:BytesBuffer = new BytesBuffer();
        if (useFixed) {
            buffer.encodeFixed(width);
        } else {
            buffer.encodeInt(Std.int(width));
        }
        for (subpath in subpaths) {
            var bytes = subpath.bytes;
            buffer.addBytes(bytes, 0, bytes.length);
        }
        var endOp = createOperation(endchar, []).bytes;
        buffer.addBytes(endOp, 0, endOp.length);
        return buffer.getBytes();
    }

}