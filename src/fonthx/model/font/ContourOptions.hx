package fonthx.model.font;

class ContourOptions {

    public static inline var LAYERED_CONTOURS:Int = 1;
    public static inline var FLAT_CONTOURS:Int = 2;

    public var mergeType:Int;

    public function new(mergeType:Int = ContourOptions.FLAT_CONTOURS) {
        this.mergeType = mergeType;
    }
}
