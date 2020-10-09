package fonthx.formats.tt.tables.opentype;
import fonthx.model.font.features.Layout;
import fonthx.formats.tt.writers.ITrueTypeWriter;
import fonthx.model.font.features.Feature;
import fonthx.formats.tt.tables.opentype.lookup.LookupListTable;
import fonthx.formats.tt.tables.opentype.feature.FeatureListTable;
import fonthx.formats.tt.tables.opentype.script.ScriptListTable;

class LayoutTable extends Table {

    public var majorVersion:Int;
    public var minorVersion:Int;
    public var scriptList:ScriptListTable;
    public var featureList:FeatureListTable;
    public var lookupList:LookupListTable;

    public function new(tag:String) {
        super(tag);
        majorVersion = 1;
        minorVersion = 0;
        scriptList = new ScriptListTable();
        featureList = new FeatureListTable();
        lookupList = new LookupListTable();
    }

    public function setLayout(layout:Layout) {
        scriptList.setLayout(layout);
        featureList.setLayout(layout);
        lookupList.setLayout(layout);
    }

    override public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(majorVersion);
        tt.writeUINT16(minorVersion);
        var offset = 10;                // (length of this header)
        tt.writeOffset16(offset);       // Offset to ScriptList table, from beginning of layout table (always 10 bytes)
        offset += scriptList.length;
        tt.writeOffset16(offset);       // Offset to FeatureList table, from beginning of layout table
        offset += featureList.length;
        tt.writeOffset16(offset);       // Offset to LookupList table, from beginning of layout table
        scriptList.write(tt);
        featureList.write(tt);
        lookupList.write(tt);
    }
}
