package fonthx.opentype;

import haxe.ds.IntMap;
class BuildOptions {

    public var useFixedCoordinatesInCFF:Bool = false;
    public var useSubroutinesInCFF:Bool = false;
    public var includeSVG:Bool = false;
    public var sortGlyphs:Bool = true;
    public var extraNamingRecords:IntMap<String>;
    public function new() {
        extraNamingRecords = new IntMap();
    }

}
