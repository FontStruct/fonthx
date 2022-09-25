package fonthx.opentype.tables.opentype.lookup;

import fonthx.opentype.tables.opentype.lookup.gsub.LigatureSubstitutionSubtableFormat1;
import fonthx.model.font.features.lookups.ligasub.LigaSubstitutionSubLookup;
import fonthx.model.font.features.lookups.ISubLookup;
import fonthx.model.font.features.lookups.pairadjustment.ClassPairAdjustmentPositioningSubLookup;
import fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup;
import fonthx.model.font.features.lookups.singlesub.SingleSubstitutionSubLookup;
import fonthx.opentype.tables.opentype.lookup.gpos.PairAdjustmentPositioningSubtableFormat1;
import fonthx.opentype.tables.opentype.lookup.gpos.PairAdjustmentPositioningSubtableFormat2;
import fonthx.opentype.tables.opentype.lookup.gsub.SingleSubstitutionSubtableFormat1;
import fonthx.opentype.tables.opentype.lookup.gsub.SingleSubstitutionSubtableFormat2;

class LookupSubtableFactory {

    public static function createSubtable(subLookup:ISubLookup):ILookupSubtable {
        if (Std.isOfType(subLookup, PairAdjustmentPositioningSubLookup)) {
            return new PairAdjustmentPositioningSubtableFormat1(cast subLookup);
        } else if (Std.isOfType(subLookup, ClassPairAdjustmentPositioningSubLookup)) {
            return new PairAdjustmentPositioningSubtableFormat2(cast subLookup);
        } else if (Std.isOfType(subLookup, SingleSubstitutionSubLookup)) {
            // choose most appropriate format
            var ssSubLookup = cast(subLookup, SingleSubstitutionSubLookup);
            if (ssSubLookup.simpleDeltaSubstitutions()) {
                return new SingleSubstitutionSubtableFormat1(ssSubLookup);
            }
            return new SingleSubstitutionSubtableFormat2(ssSubLookup);
        } else if (Std.isOfType(subLookup, LigaSubstitutionSubLookup)) {
            return new LigatureSubstitutionSubtableFormat1(cast subLookup);
        }
        trace('Unidentified lookup subtable ${Type.getClassName(Type.getClass(subLookup))}');
        return null;
    }
}
