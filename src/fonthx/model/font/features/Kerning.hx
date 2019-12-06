package fonthx.model.font.features;

class Kerning extends Feature {

    @:isVar public var pairs(get, set):Array<KerningPair>;
    @:isVar public var classes(get, set):Array<KerningClass>;
    public var pairBased = true;

    public function new() {
        super();
        pairs = new Array();
        classes = new Array();
    }

    public function get_pairs() {
        return pairs;
    }

    function set_pairs(pairs:Array<KerningPair>):Array<KerningPair> {
        return this.pairs = pairs;
    }

    function get_classes():Array<KerningClass> {
        return classes;
    }

    function set_classes(classes:Array<KerningClass>):Array<KerningClass> {
        return this.classes = classes;
    }


}
