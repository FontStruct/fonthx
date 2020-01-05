package fonthx.model.font.features.lookups.pairadjustment;

class PairAdjustmentPositioningLookup implements ILookup {

    @:isVar public var pairs(get, null):Array<PositioningPair>;

    public function new() {
        pairs = new Array();
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

}
