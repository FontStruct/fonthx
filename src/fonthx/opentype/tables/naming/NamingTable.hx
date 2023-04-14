package fonthx.opentype.tables.naming;

import String;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
    Naming Table
    The naming table allows multilingual strings to be associated
    with the OpenType font file.
    @see https://docs.microsoft.com/en-us/typography/opentype/spec/name
    https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6name.html
    https://github.com/caryll/otfcc/blob/235d1bd6fb81c8daeaa5232aa840c1e37f07fa86/lib/table/name.c
 **/
class NamingTable extends Table {

    private var records:Array<NamingRecord>;

    private var format:Int;

    // default constructor
    public function new() {
        super(Table.NAME);
        format = 0;
        records = new Array<NamingRecord>();
    }

    public function addRecord(nameId:Int, string:String, encoding:NamingEncoding) {
        if (string != null && string.length > 0) {
            records.push(new NamingRecord(encoding.platformId, encoding.encodingId, encoding.languageId, nameId, string));
        }
    }

    public function toString() {
        var s = "";
        for (r in records) {
            s = s + r.toString() + "\n" ;
        }
        return s;
    }

    public function write() {
        tt
            .writeUSHORT(format)
            .writeUSHORT(records.length)
            .writeUSHORT((records.length * 12) + 6) // Offset to start of string storage (from start of table)
        ;
        var offset = 0;
        // infos about naming records, offsets, types etc.
        for (r in records) {
            var l = r.getByteLength();
            r.write(tt, offset);
            offset += l;
        }
        // the strings
        for (r in records) {
            tt.writeBytes(r.getBytes());
        }
    }

}
