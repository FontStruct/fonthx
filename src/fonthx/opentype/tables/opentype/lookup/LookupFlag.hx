package fonthx.opentype.tables.opentype.lookup;

@:enum
abstract LookupFlag(Int) {

    /**
    * rightToLeft	This bit relates only to the correct processing of the cursive attachment lookup type (GPOS lookup
    * type 3). When this bit is set, the last glyph in a given sequence to which the cursive attachment lookup is
    * applied, will be positioned on the baseline.
    * Note: Setting of this bit is not intended to be used by operating systems or applications to determine text direction.
**/
    public var RIGHT_TO_LEFT = 0x0001;
    // If set, skips over base glyphs
    public var IGNORE_BASE_GLYPHS = 0x0002;
    // If set, skips over ligatures
    public var IGNORE_LIGATURES = 0x0004;
    // If set, skips over all combining marks
    public var IGNORE_MARKS = 0x0008;
    /*
    * If set, indicates that the lookup table structure is followed by a MarkFilteringSet field. The layout engine skips
    * over all mark glyphs not in the mark filtering set indicated.
    */
    public var USE_MARK_FILTERING_SET = 0x0010;
    // For future use (Set to zero)
    public var RESERVED = 0x00E0;
    // If not zero, skips over all marks of attachment type different from specified.
    public var MARK_ATTACHMENT_TYPE = 0xFF00;

    @:to
    public function toInt():Int {
        return this;
    }

}
