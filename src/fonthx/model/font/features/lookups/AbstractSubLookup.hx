package fonthx.model.font.features.lookups;
class AbstractSubLookup {

    public var coveredGlyphIndices:Array<Int>;

    public function new() {
        coveredGlyphIndices = new Array();
    }

    public function addGlyphIndex(idx:Int) {
        coveredGlyphIndices.push(idx);
    }
}
