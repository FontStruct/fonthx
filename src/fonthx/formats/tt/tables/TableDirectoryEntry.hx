package fonthx.formats.tt.tables;

import fonthx.formats.tt.writers.ITrueTypeWriter;

using StringTools;

class TableDirectoryEntry {

    public var table:Table;

    public function new(table:Table) {
        this.table = table;
    }

    public function write(tt:ITrueTypeWriter) {
        tt
            .writeTag(table.tag)
            .writeULONG(table.checksum)
            .writeULONG(table.offset)
            .writeULONG(table.length)
        ;
    }

}
