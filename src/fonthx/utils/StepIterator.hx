package fonthx.utils;

class StepIterator {
    var end:Int;
    var step:Int;
    var index:Int;

    public inline function new(start:Int, end:Int, step:Int) {
        this.index = start;
        this.end = end;
        this.step = step;
    }

    public inline function hasNext() return index < end;
    public inline function next() return (index += step) - step;
}