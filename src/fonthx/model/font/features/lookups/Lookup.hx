package fonthx.model.font.features.lookups;

class Lookup {

    public var subLookups:Array<ISubLookup>;
    public var idx:Int = 0;
    public var type:LookupType = LookupType.UNDEFINED;

    /*
    Type 	Name 	Description
    0x0001 	rightToLeft 	This bit relates only to the correct processing of the cursive attachment lookup type (GPOS lookup type 3). When this bit is set, the last glyph in a given sequence to which the cursive attachment lookup is applied, will be positioned on the baseline.
    Note: Setting of this bit is not intended to be used by operating systems or applications to determine text direction.
    0x0002 	ignoreBaseGlyphs 	If set, skips over base glyphs
    0x0004 	ignoreLigatures 	If set, skips over ligatures
    0x0008 	ignoreMarks 	If set, skips over all combining marks
    0x0010 	useMarkFilteringSet 	If set, indicates that the lookup table structure is followed by a MarkFilteringSet field. The layout engine skips over all mark glyphs not in the mark filtering set indicated.
    0x00E0 	reserved 	For future use (Set to zero)
    0xFF00 	markAttachmentType 	If not zero, skips over all marks of attachment type different from specified.
     */
    public var flags:Int = 0;

    public function new(type:LookupType) {
        this.subLookups = new Array();
        this.type = type;
    }

    public function addSubtable(subtable:ISubLookup) {
        this.subLookups.push(subtable);
    }

}
