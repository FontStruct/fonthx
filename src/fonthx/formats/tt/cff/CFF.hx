package fonthx.formats.tt.cff;
import fonthx.formats.tt.writers.ITrueTypeWriter;
import fonthx.formats.tt.tables.Table;

class CFF extends Table {

    public function new() {
        super(Table.CFF);
    }

    /*
        // CFF Data Layout
        Header
        Name INDEX
        Top DICT INDEX
        String INDEX
        Global Subr INDEX
        Encodings
        Charsets
        FDSelect
        CharStrings INDEX
        Font DICT INDEX
        Private DICT
        Local Subr INDEX
        Copyright and Trademark Notices

        The majority of CFF data is contained by either of two data structures called DICT and INDEX which are described in subsequent sections.

     */

    override public function write(tt:ITrueTypeWriter) {
        // Header

        //  CFF data that is not intended to ever be used outside of OpenType context uses the four byte OpenType magic number instead of the four byte CFF Header.

        tt.writeCard8(1); // Format major version (starting at 1)
        tt.writeCard8(0); // Format minor version (starting at 0)
        tt.writeCard8(4); // Header size (bytes) (starting at 0)
        tt.writeByte(1); // The offSize field specifies the size of all offsets (0) relative to the start of CFF data.
                          // An offsize is a 1 byte unsigned numeral that specifies the size of (local) Offset(s)
        // Name Index – not used in OT CFF
    }
}
