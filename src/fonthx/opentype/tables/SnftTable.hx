package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

class SnftTable extends Table {

    private var numTables:Int;

    public function new(numTables:Int) {
        super(Table.SFNT);
        this.numTables = numTables;
    }

    override public function write(tt:ITrueTypeWriter) {
        var maxPow2:Int = Std.int(Math.pow(2, Math.floor(Math.log(numTables) / Math.log(2))));
        var searchRange:Int = (maxPow2) * 16;
        var entrySelector:Int = Std.int(Math.log(maxPow2) / Math.log(2));
        var rangeShift:Int = (numTables * 16) - searchRange;
        tt.writeULONG(0x00010000); // write version
        tt.writeUSHORT(numTables);
        tt.writeUSHORT(searchRange);
        tt.writeUSHORT(entrySelector);
        tt.writeUSHORT(rangeShift);
    }

}