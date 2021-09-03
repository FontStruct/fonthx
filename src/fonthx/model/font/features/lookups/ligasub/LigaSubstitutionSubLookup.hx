package fonthx.model.font.features.lookups.ligasub;
class LigaSubstitutionSubLookup extends AbstractSubLookup implements ISubLookup {

    @:isVar public var subs(get, null):Array<LigaSubstitution>;
    // todo maybe hashmap with initial component ids as keys

    private function get_subs() {
        return subs;
    }

    public function addSubstitution(ligatureId:Int, componentIds:Array<Int> = null):LigaSubstitution {
        var sub = new LigaSubstitution(ligatureId, componentIds);
        return sub;
    }
}
