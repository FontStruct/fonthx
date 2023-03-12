package fonthx.opentype.tables.opentype.lookup.gpos;

import fonthx.model.font.features.lookups.LookupType;
import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**

 **/
class ExtensionPositioningSubtableFormat1 extends AbstractLookupSubtable {

    public var subtable:ILookupSubtable;
    public var longOffset:Int;
    public var lookupType:Int;

    public function new(subtable:ILookupSubtable, lookupType:Int) {
        this.subtable = subtable;
        this.lookupType = lookupType;
        super();
    }


    override public function write(tt:ITrueTypeWriter):Void {
        // uint16 | posFormat | Format identifier
        tt.writeUINT16(1);
        // uint16 | extensionLookupType | Lookup type of subtable referenced by extensionOffset (i.e. the extension subtable)
        tt.writeOffset16(lookupType);
        // Offset32 | extensionOffset |  Offset to the extension subtable, of lookup type extensionLookupType, relative to the start of the ExtensionPosFormat1 subtable.
        tt.writeOffset32(longOffset);
        trace('Extension Position subtable with offset ${longOffset}');
    }

    override public function get_length():Int {
        return 8;
    }

}
