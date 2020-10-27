package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

/**
    Naming Table
    The naming table allows multilingual strings to be associated
    with the OpenType font file.
    @see https://docs.microsoft.com/en-us/typography/opentype/spec/name
 **/
class NamingTable extends Table {

    private var records:Array<NamingRecord>;

    private var format:Int;

    // macintosh encoding ids
    public static var E_MAC_ROMAN = 0;

    // microsoft language ids
    public static var L_MS_ENGLISH = 0x0409;

    // macintosh language ids
    public static var L_MAC_ENGLISH = 0;

    // standard naming record ids

    // default constructor
    public function new() {
        super(Table.NAME);
        format = 0;
        records = new Array<NamingRecord>();
    }

    /**
	 * Add a naming record
	 * @param platformId
	 * @param encodingId
	 * @param languageId
	 * @param nameId
	 * @param string
	 */
    public function addRecord(nameId:Int, string:String, platformId:Int, encodingId:Int, languageId:Int) {
        if (string != null && string.length > 0) {
            records.push(new NamingRecord(platformId, encodingId, languageId, nameId, string));
        }
    }

    public function toString() {
        var s = "";
        for (r in records) {
            s = s + r.toString() + "\n" ;
        }
        return s;
    }

    override public function write(tt:ITrueTypeWriter) {
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
