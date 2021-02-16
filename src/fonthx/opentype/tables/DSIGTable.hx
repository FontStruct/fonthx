package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

// https://docs.microsoft.com/en-us/typography/opentype/spec/dsig
// this is just a stub
class DSIGTable extends Table
{
    public function new() {
        super(Table.DSIG);
    }

	override public function write(tt:ITrueTypeWriter) {
        tt.writeULONG(0x00000001);
        tt.writeUINT16(0);
        tt.writeUINT16(0);
	}

}








