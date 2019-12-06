package fonthx.formats.tt.tables.opentype.lookup;

import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * A Lookup table (Lookup) defines the specific conditions, type, and results of a substitution or positioning action
 * that is used to implement a feature. For example, a substitution operation requires a list of target glyph indices to
  * be replaced, a list of replacement glyph indices, and a description of the type of substitution action.
  * Each Lookup table may contain only one type of information (LookupType), determined by whether the lookup is part of
  * a GSUB or GPOS table. GSUB supports eight LookupTypes, and GPOS supports nine LookupTypes (for details about
  * LookupTypes, see the GSUB and GPOS chapters of the document).
 */
class LookupTable {

    private var flag:Int = 0;
    private var subtables:Array<ILookupSubtable>;
    private var type:LookupType;

    public function new() {
        subtables = new Array();
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(type); // Different enumerations for GSUB and GPOS
        tt.writeUINT16(flag); // Lookup qualifiers
        tt.writeUINT16(subtables.length); // Number of subtables for this lookup
        for (subtable in subtables) {
            tt.writeOffset16(0); // Array of offsets to lookup subtables, from beginning of Lookup table
        }
        /*
        // Index (base 0) into GDEF mark glyph sets structure. This field is only present if bit useMarkFilteringSet of lookup flags is set.
        tt.writeUINT16(markFilteringSet);
         */
    }

    public function setType(type:LookupType) {
        this.type = type;
    }

    public function setFlag(flag:Int) {
        this.flag = this.flag | flag;
    }


}




