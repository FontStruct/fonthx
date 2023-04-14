package fonthx.model.font.features.lookups;

interface ISubLookup {
    public var coveredGlyphIndices:Array<Int>;
    public function canSplit():Bool;
    public function split(maxValueCount:Int):Array<ILookup>;
}
