package fonthx.model.font.features.lookups.singlesub;
class SingleSubstitution {

    public var fromId:Int;
    public var toId:Int;

    public function new(fromId, toId) {
        this.fromId = fromId;
        this.toId = toId;
    }

    public function getDelta() {
        return this.toId - this.fromId;
    }
}
