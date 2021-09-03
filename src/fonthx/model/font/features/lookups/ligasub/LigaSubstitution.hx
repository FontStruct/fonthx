package fonthx.model.font.features.lookups.ligasub;
class LigaSubstitution {

    public var componentGlyphIds:Array<Int>;
    public var ligatureGlyphId:Int;

    public function new(ligatureGlyphId:Int, componentIds:Array<Int> = null) {
        this.ligatureGlyphId = ligatureGlyphId;
        this.componentGlyphIds = componentIds;
        if (this.componentGlyphIds == null) {
            this.componentGlyphIds = new Array();
        }
    }

    public function add(componentId:Int) {
        this.componentGlyphIds.push(componentId);
    }
}
