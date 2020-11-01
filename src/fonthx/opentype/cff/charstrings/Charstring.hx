package fonthx.opentype.cff.charstrings;
import fonthx.opentype.cff.operators.CharstringOp;
import fonthx.model.font.IContourConsumer;
import fonthx.model.font.AbstractContourConsumer;
import fonthx.model.geom.Point;

// w? {hs* vs* cm* hm* mt subpath}? {mt subpath}* endchar
// we do not support widths (w?)
// we do not support hints (hs* vs* cm* hm*)
// Charstrings may contain subr and gsubr calls as desired at any point
// endchar
// subpath
class Charstring extends AbstractContourConsumer implements IContourConsumer {

    public var subpaths:Array<Subpath>;
    private var subpath:Subpath;
    private var useFixed:Bool;
    private var pen:Point;

    public function new(useFixed) {
        this.useFixed = useFixed;
        subpaths = new Array();
        pen = new Point();
    }

    override public function startPath() {
        subpath = new Subpath();
    }

    override public function endPath() {
        subpaths.push(subpath);
    }

    override public function moveTo(x:Float, y:Float) {
        if (subpath.lastOp != null && subpath.lastOp.lastPoint != null) {
            if (subpath.lastOp.lastPoint[0] == x) {
                subpath.addOperation(createOperation(vmoveto, [y - subpath.lastOp.lastPoint[0]]));
                return;
            } else if (subpath.lastOp.lastPoint[1] == y) {
                subpath.addOperation(createOperation(hmoveto, [x - subpath.lastOp.lastPoint[1]]));
                return;
            }
        }
        subpath.addOperation(createOperation(rmoveto, [x, y]));
    }

    override public function lineTo(x:Float, y:Float) {
        if (subpath.lastOp != null && subpath.lastOp.lastPoint != null) {
            if (subpath.lastOp.lastPoint[0] == x) {
                subpath.addOperation(createOperation(vlineto, [y - subpath.lastOp.lastPoint[0]]));
                return;
            } else if (subpath.lastOp.lastPoint[1] == y) {
                subpath.addOperation(createOperation(hlineto, [x - subpath.lastOp.lastPoint[1]]));
                return;
            }
        }
        subpath.addOperation(createOperation(rlineto, [x, y]));
    }

    override public function cubicTo(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float) {
        var lastPoint = subpath.lastOp.lastPoint;
        var x0 = lastPoint[0];
        var y0 = lastPoint[1];
        subpath.addOperation(createOperation(rrcurveto, [x1 - x0, y1 - y0, x2 - x0, y2 - y0, x3 - x0, y3 - y0]));
    }

    override public function quadTo(x1:Float, y1:Float, x2:Float, y2:Float) {
        var lastPoint = subpath.lastOp.lastPoint;
        var x0 = lastPoint[0];
        var y0 = lastPoint[1];
        cubicTo(
            x0 + ((2/3) * (x1 - x0)),
            y0 + ((2/3) * (y1 - y0)),
            x2 + ((2/3) * (x1 - x2)),
            y2 + ((2/3) * (y1 - y2)),
            x2,
            y2
        );
    }


    private function createOperation(op:CharstringOp, values:Array<Float> = null):IOperation {
        return useFixed? new FixedOperation(op, values) : new IntegerOperation(op, values);
    }





}
