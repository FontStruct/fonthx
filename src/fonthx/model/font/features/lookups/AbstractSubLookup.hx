package fonthx.model.font.features.lookups;
class AbstractSubLookup {

    public var coveredGlyphIndices:Array<Int>;

    public function new(subLookup = null) {
        coveredGlyphIndices = new Array();
    }

    public function addGlyphIndex(idx:Int) {
        if (coveredGlyphIndices.indexOf(idx) == -1) {
            coveredGlyphIndices.push(idx);
            // todo do we need to sort here? do we even need this field and this class? – it’s really to do with the output format
            coveredGlyphIndices.sort(function(a, b) {return a - b;});
        }
    }

    public function canSplit():Bool {
        return false;
    }

    public function split(maxValueCount:Int):Array<ILookup> {
        return null;
    }
}
