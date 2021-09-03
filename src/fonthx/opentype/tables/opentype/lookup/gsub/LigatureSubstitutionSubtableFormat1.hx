package fonthx.opentype.tables.opentype.lookup.gsub;

import fonthx.model.font.features.lookups.ligasub.LigaSubstitutionSubLookup;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitution;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitutionSubLookup;
import fonthx.opentype.tables.opentype.lookup.coverage.CoverageTableHelper;
import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**
* https://docs.microsoft.com/en-us/typography/opentype/spec/gsub#lookuptype-4-ligature-substitution-subtable
*
* Ligature Substitution Format 1 (Lookup Type 4)
*
* It contains a format identifier (substFormat), a Coverage table offset (coverageOffset), a count of the ligature sets
* defined in this table (ligatureSetCount), and an array of offsets to LigatureSet tables (ligatureSetOffsets).
* The Coverage table specifies only the index of the first glyph component of each ligature set.
**/
class LigatureSubstitutionSubtableFormat1 implements ILookupSubtable {

    public var length(get, never):Int;
    private var subLookup:LigaSubstitutionSubLookup;

    public function new(subLookup:LigaSubstitutionSubLookup) {
        this.subLookup = subLookup;
    }

    public function write(tt:ITrueTypeWriter):Void {
        var coverageTable = getCoverageTable();
        tt.writeUINT16(1); // uint16 	substFormat 	Format identifier: format = 1
        tt.writeOffset16(6 + subLookup.subs.length * 2); // Offset to Coverage table, from beginning of substitution subtable
        tt.writeSHORT(subLookup.subs.length); // uint16 	ligatureSetCount 	Number of LigatureSet tables
        // Array of offsets to LigatureSet tables. Offsets are from beginning of substitution subtable, ordered by Coverage index
        // Offset16 	ligatureSetOffsets[ligatureSetCount]
        coverageTable.write(tt);
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
