package fonthx.model.font.features.lookups.pairadjustment;

import fonthx.model.font.features.lookups.AbstractSubLookup;

class ClassPairAdjustmentPositioningSubLookup extends AbstractSubLookup implements ISubLookup {

    @:isVar public var classes(get, null):Array<PositioningPairClass>;
    public var format1:PositioningValueFormat;
    public var format2:PositioningValueFormat;

    public function new(
        format1:PositioningValueFormat = PositioningValueFormat.X_ADVANCE,
        format2:PositioningValueFormat = PositioningValueFormat.NONE
    ) {
        super();
        classes = new Array();
        this.format2 = format2;
        this.format1 = format1;
    }

    public function get_classes():Array<PositioningPairClass> {
        return classes;
    }

    public function addClass(clazz:PositioningPairClass) {
        this.classes.push(clazz);
        for (pair in clazz.pairs) {
           addGlyphIndex(pair[0]);
        }
    }

    public function addClasses(classes:Array<PositioningPairClass>) {
        for (clazz in classes) {
            addClass(clazz);
        }
    }

}
