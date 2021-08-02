package fonthx.opentype.tables.opentype.lookup;

import fonthx.opentype.tables.opentype.lookup.gsub.SingleSubstitutionSubtableFormat1;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitutionSubLookup;
import fonthx.opentype.tables.opentype.lookup.gpos.PairAdjustmentPositioningSubtableFormat1;
import fonthx.opentype.tables.opentype.lookup.gpos.PairAdjustmentPositioningSubtableFormat2;
import fonthx.model.font.features.lookups.ISubLookup;
import fonthx.model.font.features.lookups.pairadjustment.ClassPairAdjustmentPositioningSubLookup;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;

class LookupSubtableFactory {

    public static function createSubtable(subLookup:ISubLookup):ILookupSubtable {
        if (Std.is(subLookup, PairAdjustmentPositioningSubLookup)) {
            return new PairAdjustmentPositioningSubtableFormat1(cast subLookup);
        } else if (Std.is(subLookup, ClassPairAdjustmentPositioningSubLookup)) {
            return new PairAdjustmentPositioningSubtableFormat2(cast subLookup);
        } else if (Std.is(subLookup, SingleSubstitutionSubLookup)) {
            return new SingleSubstitutionSubtableFormat1(cast subLookup);
        }
        trace('Unidentified lookup subtable ${Type.getClassName(Type.getClass(subLookup))}');
        return null;
    }
}
