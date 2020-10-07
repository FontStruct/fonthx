package fonthx.formats.tt.tables.opentype.lookup;

import fonthx.model.font.features.Layout;
import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * LookupListTable
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#lookup-list-table
 */
class LookupListTable extends LayoutAware {

    private var layout:Layout;

    public function setLayout(layout:Layout) {
        this.layout = layout;
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(layout.lookups.length);  // uint16 lookupCount - Number of lookups in this table (the font)
        var offset = 0;
        for (lookup in layout.lookups) {
            tt.writeOffset16(offset);           // Offset16 lookups[lookupCount] Array of offsets to Lookup tables,
                                                // from beginning of LookupList — zero based (first lookup is Lookup index = 0)
        }
        // Lookup Tables
        for (lookup in layout.lookups) {
            tt.writeUINT16(lookup.type);                // uint16 	lookupType 	Different enumerations for GSUB and GPOS
            tt.writeUINT16(lookup.flags);               // uint16 	lookupFlag 	Lookup qualifiers
            tt.writeUINT16(lookup.subLookups.length);   // uint16 	subTableCount 	Number of subtables for this lookup
            for (subLookup in lookup.subLookups) {
                // Offset16 	subtableOffsets[subTableCount] 	Array of offsets to lookup subtables, from beginning of Lookup table
                tt.writeOffset16(0);
            }
            // tt.writeUINT16(lookup.flags);                // uint16 	markFilteringSet Index (base 0) into GDEF mark
                                                            // glyph sets structure. This field is only present if bit
                                                            // useMarkFilteringSet of lookup flags is set.
                                                            // todo implement
        }

    }


}
