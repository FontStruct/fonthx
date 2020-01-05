package fonthx.formats.tt.tables.opentype.lookup;

import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * LookupListTable
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#lookup-list-table
 */
class LookupListTable extends LayoutAware {

    private var lookups:Array<LookupTable>;

    public function new(layoutTable:LayoutTable) {
        super(layoutTable);
        lookups = new Array();
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeSHORT(lookups.length);  // lookupCount	Number of lookups in this table
        for (lookup in lookups) {
            tt.writeOffset16(0);           // Array of offsets to Lookup tables, from beginning of LookupList — zero based (first lookup is Lookup index = 0)
        }
    }

}
