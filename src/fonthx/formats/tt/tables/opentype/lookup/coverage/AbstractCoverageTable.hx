package fonthx.formats.tt.tables.opentype.lookup.coverage;

import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * Each subtable (except an Extension LookupType subtable) in a lookup references a Coverage table (Coverage), which
 * specifies all the glyphs affected by a substitution or positioning operation described in the subtable.
 * The GSUB, GPOS, and GDEF tables rely on this notion of coverage. If a glyph does not appear in a Coverage table, the
 * client can skip that subtable and move immediately to the next subtable.
 *
 * A Coverage table identifies glyphs by glyph indices (glyph IDs) either of two ways:
 *
 * * As a list of individual glyph indices in the glyph set.
 * * As ranges of consecutive indices. The range format gives a number of start-glyph and end-glyph index pairs to
 *   denote the consecutive glyphs covered by the table.
 *
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table
 */
class AbstractCoverageTable {

    // Pair Adjustment Positioning Format 1: Adjustments for Glyph Pairs
    // Pair Adjustment Positioning Format 2: Class Pair Adjustment

    public var format;

    public static var LIST_FORMAT = 1;
    public static var RANGE_FORMAT = 2;


}




