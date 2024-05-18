package fonthx.opentype.tables;

import haxe.io.Bytes;

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

	override public function getBytes():Bytes {
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
        return tt.getBytes();
	}


}
