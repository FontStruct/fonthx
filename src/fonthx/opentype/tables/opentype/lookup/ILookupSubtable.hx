package fonthx.opentype.tables.opentype.lookup;

import fonthx.opentype.writers.ITrueTypeWriter;

interface ILookupSubtable extends ICommonTable {

    public var tt:ITrueTypeWriter;
    public var offset:Int;

    public function writeInternally():Void;

}