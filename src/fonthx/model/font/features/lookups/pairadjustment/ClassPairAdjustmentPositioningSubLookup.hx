package fonthx.model.font.features.lookups.pairadjustment;

import fonthx.model.font.features.lookups.AbstractSubLookup;

class ClassPairAdjustmentPositioningSubLookup extends AbstractSubLookup implements ISubLookup {

    @:isVar public var classes(get, null):Array<PositioningPairClass>;

    public function new() {
        super();
        classes = new Array();
    }

    public function get_classes():Array<PositioningPairClass> {
        return classes;
    }

    public function addClass(clazz:PositioningPairClass) {
        this.classes.push(clazz);
        clazz.pairs.map(function(p:PositioningPair) {
           addGlyphIndex(p.left);
        });
    }

    public function addClasses(classes:Array<PositioningPairClass>) {
        for (clazz in classes) {
            addClass(clazz);
        }
    }

}
