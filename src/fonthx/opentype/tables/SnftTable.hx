package fonthx.opentype.tables;

import haxe.io.Bytes;

class SnftTable extends Table {

    private var numTables:Int;
    private var format:FontFileFormat;

    public function new(numTables:Int, format:FontFileFormat) {
        super(Table.SFNT);
        this.numTables = numTables;
        this.format = format;
    }

    override public function getBytes():Bytes {
        var maxPow2:Int = Std.int(Math.pow(2, Math.floor(Math.log(numTables) / Math.log(2))));
        var searchRange:Int = (maxPow2) * 16;
        var entrySelector:Int = Std.int(Math.log(maxPow2) / Math.log(2));
        var rangeShift:Int = (numTables * 16) - searchRange;
        if (format == FontFileFormat.CFF) {
            tt.writeTag('OTTO');
        } else {
            tt.writeULONG(0x00010000); // write version
        }
        tt.writeUSHORT(numTables);
        tt.writeUSHORT(searchRange);
        tt.writeUSHORT(entrySelector);
        tt.writeUSHORT(rangeShift);
        return tt.getBytes();
    }

}