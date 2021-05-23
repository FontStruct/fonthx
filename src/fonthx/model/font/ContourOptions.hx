package fonthx.model.font;

class ContourOptions {

    public static inline var UNMERGED:Int = 0;
    public static inline var MERGED_LAYERED:Int = 1;
    public static inline var MERGED_FULLY:Int = 2;

    public var mergeType:Int;

    public function new(mergeType:Int = ContourOptions.UNMERGED) {
        this.mergeType = mergeType;
    }
}
