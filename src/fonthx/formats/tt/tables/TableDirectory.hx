package fonthx.formats.tt.tables;

import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
    @see https://docs.microsoft.com/en-us/typography/opentype/spec/font-file
**/
class TableDirectory extends Table {
	
	private var entries:Array<TableDirectoryEntry>;

	public function new() {
		super(Table.TDIR);
		entries = new Array<TableDirectoryEntry>();
	}

	public function addEntry(entry:TableDirectoryEntry) {
		entries.push(entry);

    }

	override public function write(tt:ITrueTypeWriter) {
        // Entries in the Table Record must be sorted in ascending order by tag
        entries.sort(function(a:TableDirectoryEntry, b:TableDirectoryEntry) {
            if (b.table.tag > a.table.tag) {
                return -1;
            }
            if (b.table.tag < a.table.tag) {
                return 1;
            }
            return 0;
        });
		for (entry in entries) {
			entry.write(tt);
		}
	}


}
