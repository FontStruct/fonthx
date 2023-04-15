package fonthx.opentype.tables.opentype.lookup;

import fonthx.opentype.tables.opentype.lookup.PackedLookupSubtableItem;
import fonthx.opentype.tables.opentype.lookup.gpos.ExtensionPositioningSubtableFormat1;
import fonthx.model.font.features.lookups.Lookup;
import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**
 * LookupListTable
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#lookup-list-table
 */
class LookupListTable {

    private var lookups:Array<Lookup>;
    private var lookupTables:Array<LookupTable>;
    private var tag:String; // GPOS

    public function new(tag:String) {
        lookupTables = new Array();
        this.tag = tag;
    }

    public function setLookups(lookups:Array<Lookup>) {
        this.lookups = lookups;
        for (lookup in lookups) {
            lookupTables.push(new LookupTable(lookup));
        }
    }

    public function write(tt:ITrueTypeWriter) {

        tt.writeUINT16(lookups.length); // uint16 lookupCount - Number of lookups in this list table

        // split any overflowing tables
        for (lookupTable in lookupTables) {
            var subLookupsWithSplits = lookupTable.subtables.fold(function(subtable:ILookupSubtable, acc:Array<ILookupSubtable>) {
                if (subtable.length >= AbstractLookupSubtable.MAX_SIZE) {
                    trace('Splitting subtable of length ${subtable.length} bytes');
                    if (subtable.canSplit()) {
                        acc = acc.concat(subtable.split());
                    } else {
                        trace('Cannot split overflowing sublookup!'); // todo handle this more elegantly? throw an exception?
                    }
                } else {
                    acc.push(subtable);
                }
                return acc;
            }, new Array<ILookupSubtable>());
            if (subLookupsWithSplits.length != lookupTable.subtables.length) {
                trace('Replacing ${lookupTable.subtables.length} subtables with ${subLookupsWithSplits.length} split subtables');
                lookupTable.subtables = subLookupsWithSplits;
            }
        }

        // collect all subtables in a flat array
        var packedSubtables:Array<PackedLookupSubtableItem> = lookupTables.fold(function(lookupTable:LookupTable, acc:Array<PackedLookupSubtableItem>) {
            return acc.concat(lookupTable.subtables.map(function(subtable:ILookupSubtable) {
                return new PackedLookupSubtableItem(subtable, lookupTable);
            }));
        }, new Array<PackedLookupSubtableItem>());

        // sort them with the largest at the end
        packedSubtables.sort(function(a:PackedLookupSubtableItem, b:PackedLookupSubtableItem) {
            return a.subtable.length - b.subtable.length;
        });

        // any subtables beyond a certain point (ca.64K) will be wrapped in extension position subtables
        // the 254 is just to give us a few extra bytes of heuristic leeway.
        var useExtendedTablesFrom = (256 * 254) - ((packedSubtables.length * 2) + (lookupTables.length * 6));
        var pos = 0;
        var packedExtensionSubtables = new Array<PackedLookupSubtableItem>();
        for (i in 0...packedSubtables.length) {
            var packedSubtable = packedSubtables[i];
            var subtable = packedSubtable.subtable;
            var lookupTable = packedSubtable.lookupTable;
            pos += subtable.length;
            if (pos > useExtendedTablesFrom && !lookupTable.useExtension) {
                // “wrap” ALL the subtables inside the current lookupTable in extension subtables …
                var extensionSubtables:Array<ILookupSubtable> = new Array();
                for (toExtendSubtable in lookupTable.subtables) {
                    var ext = new ExtensionPositioningSubtableFormat1(toExtendSubtable, lookupTable.lookup.type);
                    packedExtensionSubtables.push(new PackedLookupSubtableItem(ext, lookupTable));
                    extensionSubtables.push(ext);
                }
                // and replace them with the wrapper subtable in the layouttable array of subtables
                lookupTable.subtables = extensionSubtables;
                // maek the lookup table as using the extension mechanism
                lookupTable.useExtension = true;
            }
        }

        // prepend the extension tables (if any) to the list of subtables
        packedSubtables = packedExtensionSubtables.concat(packedSubtables);

        // write subtable offsets (relative to the start of the first subtable)
        var offset = 0;
        for (packedSubtableItem in packedSubtables) {
            packedSubtableItem.subtable.offset = offset;
            offset += packedSubtableItem.subtable.length;
        }

        // set long (32-bit) offsets in the extension position subtables (if any)
        for (packedSubtableItem in packedExtensionSubtables) {
            var ext:ExtensionPositioningSubtableFormat1 = cast packedSubtableItem.subtable;
            ext.longOffset = ext.subtable.offset - ext.offset;
        }

        var offset = 2 + (2 * lookups.length);
        var lookupTablesBaseOffset = 0;
        // write the offsets to the lookup tables in this table, and add up the length of these offset entries
        for (lookupTable in lookupTables) {
            tt.writeOffset16(offset); // Offset16 lookups[lookupCount] Array of offsets to Lookup tables,
            // from beginning of LookupList — zero based (first lookup is Lookup index = 0)
            offset += lookupTable.length; // our lookup tables are contiguous
//            trace('LookupTable', lookupTable.subtables.length, lookupTable.length);
            lookupTablesBaseOffset += lookupTable.length;
        }

        // now adjust the subtable offsets so they are relative to the beginning of their respective lookupTable
        // (until now they are relative to the start of the first subtable)
        for (lookupTable in lookupTables) {
            for (subtable in lookupTable.subtables) {
                subtable.offset = subtable.offset + lookupTablesBaseOffset;
            }
            lookupTablesBaseOffset -= lookupTable.length;
        }

        // Write Lookup Tables themselves
        for (lookupTable in lookupTables) {
            lookupTable.write(tt);
        }
        // Write Subtables
        for (packedSubtable in packedSubtables) {
            var subtable = packedSubtable.subtable;
            subtable.write(tt);
        }
    }


}
