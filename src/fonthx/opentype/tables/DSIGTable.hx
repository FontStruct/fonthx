package fonthx.opentype.tables;

import haxe.io.Bytes;

// https://docs.microsoft.com/en-us/typography/opentype/spec/dsig
// this is just a stub
class DSIGTable extends Table
{
    public function new() {
        super(Table.DSIG);
    }

	override public function getBytes():Bytes {
        tt.writeULONG(0x00000001);
        tt.writeUINT16(0);
        tt.writeUINT16(0);
        return tt.getBytes();
	}

}








