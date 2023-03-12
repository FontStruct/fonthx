package fonthx.opentype.tables.opentype.lookup;

import fonthx.model.font.features.lookups.ISubLookup;
import fonthx.opentype.writers.ITrueTypeWriter;

interface ILookupSubtable extends ICommonTable {

    public var offset:Int;
    public var subLookup:ISubLookup;
    public function canSplit():Bool;
    public function split():Array<ILookupSubtable>;

}