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

    public function addSubstitution(fromId:Int, toId:Int):SingleSubstitution {
        var sub = new SingleSubstitution(fromId, toId);
        subs.push(sub);
        return sub;
    }

    /**
    * Does this subLookup contain only substitutions with one common delta?
    **/
    public function simpleDeltaSubstitutions():Bool {
        if (subs.length < 2) return true;
        var delta = subs[0].toId - subs[0].fromId;
        for (sub in subs) {
            if (sub.toId - sub.fromId != delta) {
                return false;
            }
        }
        return true;
    }

    private function get_subs() {
        return subs;
    }
}
