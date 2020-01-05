package fonthx.model.font.features.lookups;

@:enum
abstract LookupType(Int) {

    public var GPOS_SINGLE_ADJUSTMENT            = 1; // Adjust position of a single glyph
    public var GPOS_PAIR_ADJUSTMENT              = 2; // Adjust position of a pair of glyphs
    public var GPOS_CURSIVE_ATTACHMENT           = 3; // Attach cursive glyphs
    public var GPOS_MARKTOBASE_ATTACHMENT        = 4; // Attach a combining mark to a base glyph
    public var GPOS_MARKTOLIGATURE_ATTACHMENT    = 5; // Attach a combining mark to a ligature
    public var GPOS_MARKTOMARK_ATTACHMENT        = 6; // Attach a combining mark to another mark
    public var GPOS_CONTEXT_POSITIONING          = 7; // Position one or more glyphs in context
    public var GPOS_CHAINED_CONTEXT_POSITIONING  = 8; // Position one or more glyphs in chained context
    public var GPOS_EXTENSION_POSITIONING        = 9; // Extension mechanism for other positionings

    @:to
    public function toInt():Int {
        return this;
    }

}
