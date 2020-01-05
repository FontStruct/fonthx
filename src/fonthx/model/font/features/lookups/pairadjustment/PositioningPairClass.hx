package fonthx.model.font.features;

class PositioningPairClass {

    @:isVar public var name(get, set):String;
    public var pairs:Array<Array<Int>>;
    public var value:Float;

    public function new(name: String, value:Float = 0) {
        this.value = value;
        this.pairs = new Array();
    }

    public function addPair(g1:Int, g2: Int) {
        this.pairs.push([g1, g2]);
    }

    public function toString() {
        return name;
    }

    function get_name():String {
        return name;
    }

    function set_name(name:String):String {
        return this.name = name;
    }

}
