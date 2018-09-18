package fonthx.model.font;

class AbstractContourConsumer implements IContourConsumer {

    public function start() {}
    public function startGroup() {}
    public function startShape() {}
    public function startPath() {}
    public function moveTo(x:Float, y:Float) {}
    public function lineTo(x:Float, y:Float) {}
    public function quadTo(x1:Float, y1:Float, x2:Float, y2:Float) {}
    public function cubicTo(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float) {}
    public function endPath() {}
    public function endShape() {}
    public function endGroup() {}
    public function end() {}

}
