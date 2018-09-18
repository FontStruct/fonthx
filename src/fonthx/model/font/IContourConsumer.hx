package fonthx.model.font;

interface IContourConsumer {

    function start():Void;
    function startGroup():Void;
    function startShape():Void;
    function startPath():Void;
    function moveTo(x:Float, y:Float):Void;
    function lineTo(x:Float, y:Float):Void;
    function quadTo(x1:Float, y1:Float, x2:Float, y2:Float):Void;
    function cubicTo(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float):Void;
    function endPath():Void;
    function endShape():Void;
    function endGroup():Void;
    function end():Void;

}
