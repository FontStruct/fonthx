package fonthx.opentype.tables.opentype.lookup.gsub;

import fonthx.model.font.features.lookups.singlesub.SingleSubstitution;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitutionSubLookup;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;
import fonthx.opentype.tables.opentype.lookup.coverage.CoverageTableHelper;
import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**
* https://docs.microsoft.com/en-us/typography/opentype/spec/gsub#lookuptype-1-single-substitution-subtable
*
* Single substitution (SingleSubst) subtables tell a client to replace a single glyph with another glyph.
* The subtables can be either of two formats. Both formats require two distinct sets of glyph indices:
* one that defines input glyphs (specified in the Coverage table), and one that defines the output glyphs.
* Format 1 requires less space than Format 2, but it is less flexible.
 *
 *Format 1 calculates the indices of the output glyphs, which are not explicitly defined in the subtable.
 * To calculate an output glyph index, Format 1 adds a constant delta value to the input glyph index.
 * For the substitutions to occur properly, the glyph indices in the input and output ranges must be in the same order.
 * This format does not use the Coverage index that is returned from the Coverage table.
 *
 * The SingleSubstFormat1 subtable begins with a format identifier (substFormat) of 1.
 * An offset references a Coverage table that specifies the indices of the input glyphs.
 * The deltaGlyphID is a constant value added to each input glyph index to calculate the index of the corresponding
 * output glyph. Addition of deltaGlyphID is modulo 65536.
 **/
class SingleSubstitutionSubtableFormat1 implements ILookupSubtable {

    public var length(get, never):Int;
    private var subLookup:SingleSubstitutionSubLookup;

    public function new(subLookup:SingleSubstitutionSubLookup) {
        this.subLookup = subLookup;
    }

    public function write(tt:ITrueTypeWriter):Void {
        var coverageTable = getCoverageTable();
        tt.writeUINT16(1); // uint16 	Format identifier
        tt.writeOffset16(6); // Offset16 coverageOffset Offset to Coverage table, from beginning of this PairPos subtable
        tt.writeSHORT(subLookup.subs[0].getDelta());
        coverageTable.write(tt); // coverage table at the end
    }

    public function get_length():Int {
        return 6 + getCoverageTable().length;
    }

    private var _coverageTable:ICommonTable = null;

    private function getCoverageTable():ICommonTable {
        if (_coverageTable != null) {
            return _coverageTable;
        }
        // coverage – each pairset needs a coverage idx
        var coverage = subLookup.subs.fold(function(p:SingleSubstitution, acc:Array<Int>) {
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
