package fonthx.opentype.tables.opentype.lookup.gsub;

import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitution;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitutionSubLookup;
import fonthx.opentype.tables.opentype.lookup.coverage.CoverageTableHelper;
import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**
* https://docs.microsoft.com/en-us/typography/opentype/spec/gsub#12-single-substitution-format-2
*
* Single substitution (SingleSubst) subtables tell a client to replace a single glyph with another glyph.
* The subtables can be either of two formats. Both formats require two distinct sets of glyph indices:
* one that defines input glyphs (specified in the Coverage table), and one that defines the output glyphs.
* Format 1 requires less space than Format 2, but it is less flexible.
*
* Format 2 is more flexible than Format 1, but requires more space. It provides an array of output glyph indices
* (substituteGlyphIDs) explicitly matched to the input glyph indices specified in the Coverage table.
*
* The SingleSubstFormat2 subtable specifies a format identifier (substFormat), an offset to a Coverage table that
* defines the input glyph indices, a count of output glyph indices in the substituteGlyphIDs array (glyphCount), as
* well as the list of the output glyph indices in the substitute array (substituteGlyphIDs).
*
* The substituteGlyphIDs array must contain the same number of glyph indices as the Coverage table. To locate the
* corresponding output glyph index in the substituteGlyphIDs array, this format uses the Coverage index returned from
* the Coverage table.
*
* e.g. smcp, c2sc, lnum, locl, onum, possibly frac
*
**/
class SingleSubstitutionSubtableFormat2 extends AbstractLookupSubtable {

    private var SSSubLookup:SingleSubstitutionSubLookup;

    public function new(subLookup:SingleSubstitutionSubLookup) {
        super(subLookup);
        this.SSSubLookup = subLookup;
    }

    override public function write(tt:ITrueTypeWriter):Void {
        var coverageTable = getCoverageTable();
        tt.writeUINT16(2); // uint16 	Format identifier
        tt.writeOffset16(6 + (2 * SSSubLookup.subs.length)); // Offset16 coverageOffset Offset to Coverage table, from beginning of substitution subtable
        tt.writeSHORT(SSSubLookup.subs.length);
        for (sub in SSSubLookup.subs) {
            tt.writeUINT16(sub.toId);
        }
        coverageTable.write(tt); // coverage table at the end
    }

    override public function get_length():Int {
        return 6 + (2 * SSSubLookup.subs.length) + this.getCoverageTable().length;
    }

    // todo can this be shared with the format1 table
    private var _coverageTable:ICommonTable = null;
    private function getCoverageTable():ICommonTable {
        if (_coverageTable != null) {
            return _coverageTable;
        }
        // coverage – each pairset needs a coverage idx
        var coverage = SSSubLookup.subs.fold(function(p:SingleSubstitution, acc:Array<Int>) {
            if (acc.indexOf(p.fromId) == -1) {
                acc.push(p.fromId);
            }
            return acc;
        }, new Array<Int>());
        coverage.sort(function(a, b) {
            return a - b;
        });
        return CoverageTableHelper.getCoverageTable(coverage);
    }


}
