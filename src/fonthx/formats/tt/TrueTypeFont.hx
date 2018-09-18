package fonthx.formats.tt;

import haxe.ds.StringMap;
import fonthx.formats.tt.tables.TableDirectoryEntry;
import fonthx.formats.tt.tables.TableDirectory;
import fonthx.formats.tt.tables.Table;

using Lambda;

class TrueTypeFont {

    private var tables:StringMap<Table> ;
    private var tdir:TableDirectory;

    public function new(tdir:TableDirectory) {
        this.tdir = tdir;
        tables = new StringMap<Table>();
        tables.set(tdir.tag, tdir);
    }

    public function addTable(t:Table) {
        tables.set(t.tag, t);
        if (t.tag == Table.SFNT || t.tag == Table.TDIR) {
            return;
        }
        tdir.addEntry(new TableDirectoryEntry(t));
    }

    public function getTable(tag:String):Table {
        return tables.get(tag);
    }

    public function getTables():StringMap<Table> {
        return tables;
    }

    public function getNumTables() {
        // offset and table directory are pseudo-tables. they don't count
        var size = tables.count();
        if (tables.exists(Table.SFNT)) {
            size--;
        }
        if (tables.exists(Table.TDIR)) {
            size--;
        }
        return size;
    }

}
