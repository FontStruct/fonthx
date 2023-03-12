package fonthx.opentype.tables.opentype.lookup;

import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.features.lookups.Lookup;
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

    public var lookup:Lookup;
    public var subtables:Array<ILookupSubtable>;
    public var length(get, never):Int;
    @:isVar public var useExtension(get, set):Bool;

    public function new(lookup:Lookup) {
        this.lookup = lookup;
        this.useExtension = false;
        updateSubtables();
    }

    public function updateSubtables() {
        subtables = new Array();
        for (subLookup in lookup.subLookups) {
            var subtable = LookupSubtableFactory.createSubtable(subLookup);
            subtables.push(subtable);
        }
    }

    public function write(tt:ITrueTypeWriter):Void {
        // uint16 	lookupType 	Different enumerations for GSUB and GPOS
        tt.writeUINT16(useExtension? (lookup.isPos?
            LookupType.GPOS_EXTENSION_POSITIONING : LookupType.GSUB_EXTENSION_SUBSTITUTION) :
            lookup.type
        );
        // uint16 	lookupFlag 	Lookup qualifiers
        tt.writeUINT16(lookup.flags);
        // uint16 	subTableCount 	Number of subtables for this lookup
        tt.writeUINT16(subtables.length);
        for (subtable in subtables) {
            trace('writing offset to ${subtable.offset}');
            tt.writeOffset16(subtable.offset); // Array of offsets to lookup subtables, from beginning of Lookup table
        }
        // TODO This field is only present if bit useMarkFilteringSet of lookup flags is set.
        // uint16 	markFilteringSet 	Index (base 0) into GDEF mark glyph sets structure.
    }

    public function get_length():Int {
        return 6 + (2 * subtables.length);
    }

    function set_useExtension(useExtension:Bool):Bool {
        return this.useExtension = useExtension;
    }

    function get_useExtension():Bool {
        return useExtension;
    }


}






