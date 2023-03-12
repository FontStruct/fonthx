package fonthx.opentype.tables.opentype.lookup;

import fonthx.model.font.features.lookups.ISubLookup;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.opentype.writers.TrueTypeFileWriter;

class AbstractLookupSubtable implements ILookupSubtable {

    public static var MAX_SIZE = 65536;

    public var length(get, never):Int;
    public var offset:Int = 0;
    public var subLookup:ISubLookup;

    public function new(subLookup:ISubLookup = null) {
        this.subLookup = subLookup;
    }

    public function write(tt:ITrueTypeWriter) {

    }

    public function get_length():Int {
        return 0;
    }

    public function canSplit():Bool {
        return this.subLookup != null && this.subLookup.canSplit();
    }

    public function split():Array<ILookupSubtable> {
        return null;
    }
}
