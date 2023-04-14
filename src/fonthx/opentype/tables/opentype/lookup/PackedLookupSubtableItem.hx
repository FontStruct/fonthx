package fonthx.opentype.tables.opentype.lookup;

// just a convenience to keep references from subtables to lookupTables
class PackedLookupSubtableItem {
    public var subtable:ILookupSubtable;
    public var lookupTable:LookupTable;

    public function new(subtable:ILookupSubtable, lookupTable:LookupTable) {
        this.subtable = subtable;
        this.lookupTable = lookupTable;
    }
}
