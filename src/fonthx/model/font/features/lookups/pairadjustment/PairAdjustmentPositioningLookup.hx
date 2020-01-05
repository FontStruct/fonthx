package fonthx.model.font.features.lookups;

class PairAdjustmentPositioningLookup implements ILookup {

    @:isVar public var pairs(get, null):Array<PositioningPair>;
    @:isVar public var classes(get, null):Array<PositioningPairClass>;

    public function new() {
        pairs = new Array();
        classes = new Array();
    }

    public function get_pairs() {
        return pairs;
    }

    public function addPair(pair:PositioningPair) {
        this.pairs.push(pair);
    }

    public function addPairs(pairs:Array<PositioningPair>) {
        this.pairs = this.pairs.concat(pairs);
    }

    public function get_classes():Array<PositioningPairClass> {
        return classes;
    }

    public function addClass(clazz:PositioningPairClass) {
        this.classes.push(clazz);
    }

    public function addClasses(classes:Array<PositioningPairClass>) {
        this.classes = this.classes.concat(classes);
    }

}
