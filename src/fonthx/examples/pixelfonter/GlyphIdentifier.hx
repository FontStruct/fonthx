package fonthx.examples.pixelfonter;

class GlyphIdentifier {
    public var name:String = null;
    public var codepoint:Int = -1;
    public function new(codepoint = -1) {
        this.codepoint = codepoint;
    }
}