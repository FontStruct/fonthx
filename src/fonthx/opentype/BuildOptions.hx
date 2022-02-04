package fonthx.opentype;

import haxe.ds.StringMap;
import haxe.ds.IntMap;
class BuildOptions {

    public var useFixedCoordinatesInCFF:Bool = false;
    public var useSubroutinesInCFF:Bool = false;
    public var includeDeprecatedKERNTable:Bool = false;
    public var includeSVG:Bool = false;
    public var sortGlyphs:Bool = true;
    public var extraNamingRecords:IntMap<String>;
    public var cacheTableOptions:StringMap<Int>;

    public function new() {
        extraNamingRecords = new IntMap();
    }

}
