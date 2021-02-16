package fonthx.opentype.tables.opentype.lookup;

import fonthx.model.font.features.Layout;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * LookupListTable
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#lookup-list-table
 */
class LookupListTable {

    private var layout:Layout;
    private var lookupTables:Array<LookupTable>;

    public function new() {
        lookupTables = new Array();
    }

    public function setLayout(layout:Layout) {
        this.layout = layout;
    }

    public function write(tt:ITrueTypeWriter) {
        for (lookup in layout.lookups) {
            lookupTables.push(new LookupTable(lookup));
        }
        tt.writeUINT16(layout.lookups.length);  // uint16 lookupCount - Number of lookups in this table (the font)
        var offset = 2 + (2 * layout.lookups.length);
        for (lookupTable in lookupTables) {
            tt.writeOffset16(offset);           // Offset16 lookups[lookupCount] Array of offsets to Lookup tables,
            // from beginning of LookupList — zero based (first lookup is Lookup index = 0)
            offset += lookupTable.length; // not sure about this
        }
        // Lookup Tables
        for (lookupTable in lookupTables) {
            lookupTable.write(tt);
        }

    }


}
