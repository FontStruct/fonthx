package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

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
