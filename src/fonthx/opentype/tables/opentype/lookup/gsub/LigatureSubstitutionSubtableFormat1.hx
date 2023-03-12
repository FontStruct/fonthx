package fonthx.opentype.tables.opentype.lookup.gsub;

import fonthx.model.font.features.lookups.LookupType;
import fonthx.model.font.features.lookups.ligasub.LigaSubstitution;
import fonthx.model.font.features.lookups.ligasub.LigaSubstitutionSubLookup;
import fonthx.opentype.tables.opentype.lookup.coverage.CoverageTableHelper;
import fonthx.opentype.writers.ITrueTypeWriter;
import haxe.ds.IntMap;

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
class LigatureSubstitutionSubtableFormat1 extends AbstractLookupSubtable {

    private var LSSubLookup:LigaSubstitutionSubLookup;

    public function new(subLookup:LigaSubstitutionSubLookup) {
        super(subLookup);
        this.LSSubLookup = subLookup;
    }

    override public function write(tt:ITrueTypeWriter):Void {
        var ligatureSetCount = 0;
        var ligatureSetMap = LSSubLookup.subs.fold(function(p:LigaSubstitution, acc:IntMap<Array<LigaSubstitution>>) {
            // The Coverage table specifies only the index of the first glyph component of each ligature set.
            var leadingGlyph = p.componentGlyphIds[0];
            if (!acc.exists(leadingGlyph)) {
                acc.set(leadingGlyph, new Array<LigaSubstitution>());
                ligatureSetCount++;
            }
            var subArray = acc.get(leadingGlyph);
            subArray.push(p);
            return acc;
        }, new IntMap<Array<LigaSubstitution>>());

        var coverageTable = getCoverageTable();

        tt.writeUINT16(1); // uint16 	substFormat 	Format identifier: format = 1
        var covTableOffset = 6 + ligatureSetCount * 2;
        tt.writeOffset16(covTableOffset); // Offset to Coverage table, from beginning of substitution subtable
        tt.writeSHORT(ligatureSetCount); // uint16 	ligatureSetCount 	Number of LigatureSet tables
        // Offset16 	ligatureSetOffsets[ligatureSetCount]
        // Array of offsets to LigatureSet tables. Offsets are from beginning of substitution subtable, ordered by Coverage index
        var offset = covTableOffset + coverageTable.length;
        var leadingGlyphIds = [for (i in ligatureSetMap.keys()) i];
        leadingGlyphIds.sort(function(a, b) {
            return a - b;
        });
        for (i in leadingGlyphIds) {
            tt.writeOffset16(offset);
            var set = ligatureSetMap.get(i);
            offset += 2; // ligatureCount
            for (ligaSub in set) {
                offset += 2; // ligatureOffsets
                offset += 2 + 2 + ((ligaSub.componentGlyphIds.length - 1) * 2); // ligatureGlyph, componentCount, componentGlyphIDs
            }
        }
        coverageTable.write(tt);
        // write the ligature set tables themselves
        for (i in leadingGlyphIds) {
            var set = ligatureSetMap.get(i);
            tt.writeUINT16(set.length); // ligatureCount
            var offset = 2 + (set.length * 2);
            for (ligaSub in set) {
                tt.writeUINT16(offset); // ligatureOffset
                offset += 2 + 2 + (ligaSub.componentGlyphIds.length - 1) * 2;
            }
            for (ligaSub in set) {
                tt.writeUINT16(ligaSub.ligatureGlyphId); // ligatureGlyph
                tt.writeUINT16(ligaSub.componentGlyphIds.length); // componentCount
                for (i in 1...ligaSub.componentGlyphIds.length) {
                    tt.writeUINT16(ligaSub.componentGlyphIds[i]); // componentGlyphIDs (apart from 1st)
                }
            }
        }
    }

    override public function get_length():Int {
        return 6 + getCoverageTable().length;
    }

    private var _coverageTable:ICommonTable = null;

    private function getCoverageTable():ICommonTable {
        if (_coverageTable != null) {
            return _coverageTable;
        }
        var coverage:Array<Int> = LSSubLookup.subs.fold(function(p:LigaSubstitution, acc:Array<Int>) {
            // The Coverage table specifies only the index of the first glyph component of each ligature set.
            var leadingGlyph = p.componentGlyphIds[0];
            if (acc.indexOf(leadingGlyph) == -1) {
                acc.push(leadingGlyph);
            }
            return acc;
        }, new Array<Int>());
        coverage.sort(function(a, b) {
            return a - b;
        });
        return CoverageTableHelper.getCoverageTable(coverage);
    }


}
