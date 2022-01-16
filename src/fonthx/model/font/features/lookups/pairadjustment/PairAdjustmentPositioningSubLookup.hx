package fonthx.model.font.features.lookups.pairadjustment;

import fonthx.model.font.features.lookups.AbstractSubLookup;

//  https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#pair-adjustment-positioning-format-1-adjustments-for-glyph-pairs
class PairAdjustmentPositioningSubLookup extends AbstractSubLookup implements ISubLookup {

    @:isVar public var pairs(get, null):Array<PositioningPair>;
    public var format1:PositioningValueFormat;
    public var format2:PositioningValueFormat;

    public function new(
        format1:PositioningValueFormat = PositioningValueFormat.X_ADVANCE,
        format2:PositioningValueFormat = PositioningValueFormat.NONE
    ) {
        super();
        pairs = new Array();
        this.format1 = format1;
        this.format2 = format2;
    }

    public function reset() {
        pairs = new Array();
        coveredGlyphIndices = new Array();
    }

    public function get_pairs() {
        return pairs;
    }

    public function addPair(pair:PositioningPair) {
        pairs.push(pair);
        addGlyphIndex(pair.idx1);
    }

    public function addPairs(pairs:Array<PositioningPair>) {
        for (pair in pairs) {
            addPair(pair);
        }
    }

    public function hasFirstValues() {
        return this.format1 != PositioningValueFormat.NONE;
    }

    public function hasSecondValues() {
        return this.format2 != PositioningValueFormat.NONE;
    }
}
