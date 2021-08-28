package fonthx.opentype.tables.opentype.lookup;

import fonthx.model.font.features.lookups.Lookup;
import fonthx.model.font.features.lookups.LookupType;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * A Lookup table (Lookup) defines the specific conditions, type, and results of a substitution or positioning action
 * that is used to implement a feature. For example, a substitution operation requires a list of target glyph indices to
  * be replaced, a list of replacement glyph indices, and a description of the type of substitution action.
  * Each Lookup table may contain only one type of information (LookupType), determined by whether the lookup is part of
  * a GSUB or GPOS table. GSUB supports eight LookupTypes, and GPOS supports nine LookupTypes (for details about
  * LookupTypes, see the GSUB and GPOS chapters of the document).
 */
class LookupTable implements ICommonTable {

    private var lookup:Lookup;
    private var subtables:Array<ILookupSubtable>;
    public var length(get, never):Int;

    public function new(lookup:Lookup) {
        this.lookup = lookup;
        subtables = new Array();
        for (sublookup in lookup.subLookups) {
            var subtable = LookupSubtableFactory.createSubtable(sublookup);
            subtables.push(subtable);
        }
    }

    public function write(tt:ITrueTypeWriter):Void {
        tt.writeUINT16(lookup.type);                    // uint16 	lookupType 	Different enumerations for GSUB and GPOS
        tt.writeUINT16(lookup.flags);                   // uint16 	lookupFlag 	Lookup qualifiers
        tt.writeUINT16(lookup.subLookups.length);       // uint16 	subTableCount 	Number of subtables for this lookup
        var offset = 6 + (2 * lookup.subLookups.length);
        for (subtable in subtables) {
            // Offset16 	subtableOffsets[subTableCount] 	Array of offsets to lookup subtables, from beginning of Lookup table
            tt.writeOffset16(offset); // Array of offsets to lookup subtables, from beginning of Lookup table
            offset += subtable.length;
        }
        // uint16 	markFilteringSet 	Index (base 0) into GDEF mark glyph sets structure. TODO This field is only present if bit useMarkFilteringSet of lookup flags is set.
        for (subtable in subtables) {
            subtable.write(tt);
        }
    }

    public function get_length():Int {
        var l = 6 + (2 * lookup.subLookups.length);
        for (subtable in subtables) {
            l += subtable.length;
        }
        return l;
    }


}




