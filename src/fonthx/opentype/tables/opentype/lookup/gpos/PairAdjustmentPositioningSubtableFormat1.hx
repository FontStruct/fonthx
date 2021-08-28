package fonthx.opentype.tables.opentype.lookup.gpos;

import fonthx.opentype.tables.opentype.lookup.coverage.CoverageTableHelper;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;

using Lambda;

/**
* https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#lookup-type-2-pair-adjustment-positioning-subtable
*
* A pair adjustment positioning subtable (PairPos) is used to adjust the placement or advances of two glyphs in relation
 * to one another — for instance, to specify kerning data for pairs of glyphs. Compared to a typical kerning table,
 * however, a PairPos subtable offers more flexiblity and precise control over glyph positioning. The PairPos subtable
 * can adjust each glyph in a pair independently in both the X and Y directions, and it can explicitly describe the
 * particular type of adjustment applied to each glyph.
 * PairPos subtables can be either of two formats: one that identifies glyphs individually by index (Format 1), and one
 * that identifies glyphs by class (Format 2).
 **/
class PairAdjustmentPositioningSubtableFormat1 implements ILookupSubtable {

    public var length(get, never):Int;
    private var subLookup:PairAdjustmentPositioningSubLookup;

    public function new(subLookup:PairAdjustmentPositioningSubLookup) {
        this.subLookup = subLookup;
    }

    public function write(tt:ITrueTypeWriter):Void {

        var coverageTable = getCoverageTable();
        var valueRecordLength = getValueRecordLength();
        var groupedPairs = getGroupedPairs();

        tt.writeUINT16(1); // uint16 	posFormat Format identifier
        tt.writeOffset16(this.length - coverageTable.length); // Offset16 coverageOffset Offset to Coverage table, from beginning of this PairPos subtable
        tt.writeUINT16(cast subLookup.format1); // uint16 	valueFormat1	Defines the types of data in valueRecord1 — for the first glyph in the pair (may be zero).
        tt.writeUINT16(cast subLookup.format2); // uint16   valueFormat2	Defines the types of data in valueRecord2 — for the second glyph in the pair (may be zero).
        tt.writeUINT16(groupedPairs.length); // uint16   pairSetCount	Number of PairSet tables

        // group the pairs according to first glyph
        var offset = 10 + (2 * groupedPairs.length);
        for (group in groupedPairs) {
            tt.writeOffset16(offset); // Offset16 pairSetOffsets[pairSetCount] Array of offsets to PairSet tables.
            // Offsets are from beginning of this PairPos subtable, ordered by Coverage Index.
            offset += (2 + (group.length * valueRecordLength));
            group.sort(function(a, b) {return a.idx2 - b.idx2;});
        }
        // Pair Set Tables
        /*
        A PairSet table enumerates all the glyph pairs that begin with a covered glyph.
        An array of PairValueRecords (pairValueRecords) contains one record for each pair and lists the records sorted
        by the glyph ID of the second glyph in each pair.
        The pairValueCount field specifies the number of PairValueRecords in the set.
         */
        for (group in groupedPairs) {
            tt.writeUINT16(group.length); // uint16 pairValueCount 	Number of PairValueRecords
            // PairValueRecord
            for (pair in group) {
                tt.writeUINT16(pair.idx2);
                // https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#valueRecord
                if (subLookup.hasFirstValues()) {
                    tt.writeSHORT(Std.int(pair.x)); // int16
                }
                if (subLookup.hasSecondValues()) {
                    tt.writeSHORT(Std.int(pair.y)); // int16
                }
            }
        }
        coverageTable.write(tt); // coverage table at the end
    }

    public function get_length():Int {
        var valueRecordLength = getValueRecordLength();
        var groupedPairs = getGroupedPairs();
        var l = 10;
        l += groupedPairs.length * 2; // pairSetOffsets
        // pair set tables
        l += groupedPairs.length * 2; // pairValueCount
        for (group in groupedPairs) {
            l += (group.length * valueRecordLength);
        }
        l += getCoverageTable().length;
        return l;
    }

    private var _coverageTable:ICommonTable = null;

    private function getCoverageTable():ICommonTable {
        if (_coverageTable != null) {
            return _coverageTable;
        }
        // coverage – each pairset needs a coverage idx
        var coverage = subLookup.pairs.fold(function(p:PositioningPair, acc:Array<Int>) {
            if (acc.indexOf(p.idx1) == -1) {
                acc.push(p.idx1);
            }
            return acc;
        }, new Array<Int>());
        // todo maybe put sort into helper
        coverage.sort(function(a, b) {
            return a - b;
        });
        return CoverageTableHelper.getCoverageTable(coverage);
    }

    private var _grouped:Array<Array<PositioningPair>> = null;

    private function getGroupedPairs() {
        var pairs = subLookup.pairs.copy();
        pairs.sort(function(a, b) {
            return a.idx1 - b.idx1;
        });
        // group the pairs according to first glyph
        if (_grouped != null) {
            return _grouped;
        }
        var currentGroup:Array<PositioningPair> = [];
        var lastPair:PositioningPair = null;
        _grouped = pairs.fold(function(p:PositioningPair, acc:Array<Array<PositioningPair>>) {
            if (lastPair != null && p.idx1 != lastPair.idx1) {
                currentGroup = [];
                acc.push(currentGroup);
            }
            currentGroup.push(p);
            lastPair = p;
            return acc;
        }, [currentGroup]);
        return _grouped;
    }

    private function getValueRecordLength():Int {
        var valueRecordLength = 2;
        if (subLookup.hasFirstValues()) {
            valueRecordLength += 2;
        }
        if (subLookup.hasSecondValues()) {
            valueRecordLength += 2;
        }
        return valueRecordLength;
    }

}
