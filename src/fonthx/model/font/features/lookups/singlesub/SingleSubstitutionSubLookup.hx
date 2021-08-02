package fonthx.model.font.features.lookups.singlesub;

/**
* https://docs.microsoft.com/en-us/typography/opentype/spec/gsub#lookuptype-1-single-substitution-subtable
**/
class SingleSubstitutionSubLookup extends AbstractSubLookup implements ISubLookup {

    @:isVar public var subs(get, null):Array<SingleSubstitution>;

    public function new() {
        super();
        subs = new Array();
    }

    public function addSubstitution(fromId:Int, toId:Int) {
        subs.push(new SingleSubstitution(fromId, toId));
    }

    private function get_subs() {
        return subs;
    }
}
