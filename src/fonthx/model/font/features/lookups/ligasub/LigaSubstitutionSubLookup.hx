package fonthx.model.font.features.lookups.ligasub;
class LigaSubstitutionSubLookup extends AbstractSubLookup implements ISubLookup {

    // todo maybe hashmap with initial component ids as keys
    @:isVar public var subs(get, null):Array<LigaSubstitution>;

    public function new() {
        super();
        subs = new Array();
    }

    private function get_subs() {
        return subs;
    }

    public function addSubstitution(ligatureId:Int, componentIds:Array<Int> = null):LigaSubstitution {
        var sub = new LigaSubstitution(ligatureId, componentIds);
        subs.push(sub);
        return sub;
    }
}
