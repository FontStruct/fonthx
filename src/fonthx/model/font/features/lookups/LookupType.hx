package fonthx.model.font.features.lookups;

@:enum
abstract LookupType(Int) {

    public var UNDEFINED = 0;

    public var GPOS_SINGLE_ADJUSTMENT = 1; // Adjust position of a single glyph
    public var GPOS_PAIR_ADJUSTMENT = 2; // Adjust position of a pair of glyphs
    public var GPOS_CURSIVE_ATTACHMENT = 3; // Attach cursive glyphs
    public var GPOS_MARKTOBASE_ATTACHMENT = 4; // Attach a combining mark to a base glyph
    public var GPOS_MARKTOLIGATURE_ATTACHMENT = 5; // Attach a combining mark to a ligature
    public var GPOS_MARKTOMARK_ATTACHMENT = 6; // Attach a combining mark to another mark
    public var GPOS_CONTEXT_POSITIONING = 7; // Position one or more glyphs in context
    public var GPOS_CHAINED_CONTEXT_POSITIONING = 8; // Position one or more glyphs in chained context
    public var GPOS_EXTENSION_POSITIONING = 9; // Extension mechanism for other positionings

    public var GSUB_SINGLE = 1; // (format 1.1 1.2) Replace one glyph with one glyph
    public var GSUB_MULTIPLE = 2; // (format 2.1) // Replace one glyph with more than one glyph
    public var GSUB_ALTERNATE = 3; // (format 3.1) Replace one glyph with one of many glyphs
    public var GSUB_LIGATURE = 4; // (format 4.1) Replace multiple glyphs with one glyph
    public var GSUB_CONTEXT = 5; // (format 5.1 5.2 5.3) Replace one or more glyphs in context
    public var GSUB_CHAINING_CONTEXT = 6; // (format 6.1 6.2 6.3) Replace one or more glyphs in chained context
    public var GSUB_EXTENSION_SUBSTITUTION = 7; // (format 7.1) Extension mechanism for other substitutions (i.e. this excludes the Extension type substitution itself)
    public var GSUB_REVERSE_CHAINING_CONTEXT_SINGLE = 8; // (format 8.1) Applied in reverse order, replace single glyph in chaining context

    @:to
    public function toInt():Int {
        return this;
    }


}
