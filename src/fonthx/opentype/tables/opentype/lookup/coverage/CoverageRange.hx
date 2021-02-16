package fonthx.opentype.tables.opentype.lookup.coverage;

class CoverageRange {
    public var start:Int;
    public var end:Int;
    public var idx:Int;

    public function new(start:Int = 0, end:Int = -1, idx:Int = 0) {
        this.start = start;
        this.end = end;
        this.idx = idx;
    }
}
