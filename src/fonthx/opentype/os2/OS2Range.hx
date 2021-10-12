package fonthx.opentype.os2;

class OS2Range {

    public var bit:Int;
    public var name:String;
    public var from:Int;
    public var to:Int;
    public var version:Int;

    public function new(bit:Int, name:String, from:Int, to:Int, version = 1) {
        this.bit = bit;
        this.name = name;
        this.from = from;
        this.to = to;
        this.version = version;
    }


}
