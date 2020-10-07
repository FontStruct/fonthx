package fonthx.model.font.features.lookups.pairadjustment;

import fonthx.model.font.features.lookups.AbstractSubLookup;

class PairAdjustmentPositioningSubLookup extends AbstractSubLookup implements ISubLookup {

    @:isVar public var pairs(get, null):Array<PositioningPair>;

    public function new() {
        super();
        pairs = new Array();
    }

    public function get_pairs() {
        return pairs;
    }

    public function addPair(pair:PositioningPair) {
        pairs.push(pair);
        addGlyphIndex(pair.left);
    }

    public function addPairs(pairs:Array<PositioningPair>) {
        for (pair in pairs) {
            addPair(pair);
        }
    }

}
