package fonthx.opentype.tables.opentype.lookup;

import fonthx.model.font.features.lookups.Lookup;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * LookupListTable
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#lookup-list-table
 */
class LookupListTable {

    private var lookups:Array<Lookup>;
    private var lookupTables:Array<LookupTable>;

    public function new() {
        lookupTables = new Array();
    }

    public function setLookups(lookups:Array<Lookup>) {
        this.lookups = lookups;
        for (lookup in lookups) {
            lookupTables.push(new LookupTable(lookup));
        }
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(lookups.length); // uint16 lookupCount - Number of lookups in this table (the font)
        var offset = 2 + (2 * lookups.length);
        var lookupTablesBaseOffset = 0;
        for (lookupTable in lookupTables) {
            tt.writeOffset16(offset); // Offset16 lookups[lookupCount] Array of offsets to Lookup tables,
            // from beginning of LookupList — zero based (first lookup is Lookup index = 0)
            offset += lookupTable.length; // our lookup tables are contiguous
            lookupTablesBaseOffset += lookupTable.length;
        }
        // lookup tables next, starting at offset
        // first prepare subtable offsets, relative to their respective table starts
        var subtableOffset = 0;
        trace(lookupTables.length + ' lookup tables');
        for (lookupTable in lookupTables) {
            trace(lookupTable.subtables.length + ' subtables');
            for (subtable in lookupTable.subtables) {
                trace(Type.getClass(subtable));
                // offset relative to 0 byte of their lookup table
                subtable.offset = subtableOffset + lookupTablesBaseOffset;
                trace("subtable offset", subtable.offset, subtable.length, subtableOffset, lookupTablesBaseOffset);
                subtableOffset += subtable.length;
            }
            lookupTablesBaseOffset -= lookupTable.length;
        }
        // Write Lookup Tables
        for (lookupTable in lookupTables) {
            lookupTable.write(tt);
        }
        // Write Subtables
        for (lookupTable in lookupTables) {
            for (subtable in lookupTable.subtables) {
                tt.writeBytes(subtable.tt.getBytes());
            }
        }
    }


}
