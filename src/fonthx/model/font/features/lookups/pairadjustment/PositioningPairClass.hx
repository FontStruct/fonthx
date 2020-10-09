package fonthx.model.font.features.lookups.pairadjustment;

class PositioningPairClass {

    @:isVar public var name(get, set):String;
    public var pairs:Array<Array<Int>>;
    public var value:Float;

    public function new(
        name:String,
        value:Float
    ) {
        this.name = name;
        this.value = value;
        this.pairs = new Array();
    }

    public function addPair(idx1:Int, idx2:Int) {
        this.pairs.push([idx1, idx2]);
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
