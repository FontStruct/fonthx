package fonthx.opentype.tables.opentype.lookup;

import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.opentype.writers.TrueTypeFileWriter;

class AbstractLookupSubtable implements ILookupSubtable {

    public var length(get, never):Int;
    public var offset:Int = 0;
    public var tt:ITrueTypeWriter;

    public function new() {
        tt = new TrueTypeFileWriter();
    }

    public function write(tt:ITrueTypeWriter) {

    }

    public function writeInternally() {
        write(tt);
    }

    public function get_length():Int {
        return 0;
    }


}
