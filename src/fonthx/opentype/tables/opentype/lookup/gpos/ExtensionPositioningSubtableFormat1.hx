package fonthx.opentype.tables.opentype.lookup.gpos;

import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**

 **/
class ExtensionPositioningSubtableFormat1 extends AbstractLookupSubtable {

    private var subtable:ILookupSubtable;

    public function new(subtable:ILookupSubtable) {
        super();
        this.subtable = subtable;
    }

    override public function write(tt:ITrueTypeWriter):Void {
        // uint16 | posFormat | Format identifier
        tt.writeUINT16(1);
        // uint16 | extensionLookupType | Lookup type of subtable referenced by extensionOffset (i.e. the extension subtable)
        tt.writeOffset16(this.length - coverageTable.length);
        // Offset32 | extensionOffset |  Offset to the extension subtable, of lookup type extensionLookupType, relative to the start of the ExtensionPosFormat1 subtable.
        tt.writeOffset32(8);
    }

    override public function get_length():Int {
        return 8;
    }

}
