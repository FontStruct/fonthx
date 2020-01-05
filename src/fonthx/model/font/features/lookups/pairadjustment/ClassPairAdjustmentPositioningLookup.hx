package fonthx.model.font.features.lookups.pairadjustment;

class ClassPairAdjustmentPositioningLookup implements ILookup {

    @:isVar public var classes(get, null):Array<PositioningPairClass>;

    public function new() {
        classes = new Array();
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
