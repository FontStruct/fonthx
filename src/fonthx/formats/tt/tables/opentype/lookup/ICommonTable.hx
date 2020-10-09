package fonthx.formats.tt.tables.opentype.lookup;

import fonthx.formats.tt.writers.ITrueTypeWriter;
interface ICommonTable {

    public var length(get, never):Int;
    function write(tt:ITrueTypeWriter):Void;


}