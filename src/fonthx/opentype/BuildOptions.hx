package fonthx.opentype;

import haxe.ds.IntMap;
class BuildOptions {

    public var useFixedCoordinatesInCFF:Bool = false;
    public var extraNamingRecords:IntMap<String>;
    public function new() {
        extraNamingRecords = new IntMap();
    }

}
