package fonthx.opentype.tables.opentype.lookup;

import fonthx.opentype.writers.ITrueTypeWriter;
interface ICommonTable {

    public var length(get, never):Int;
    function write(tt:ITrueTypeWriter):Void;


}