package fonthx.opentype.tables.opentype;
import haxe.io.Bytes;
import fonthx.opentype.tables.Table;
import fonthx.model.font.features.Layout;
import fonthx.opentype.writers.ITrueTypeWriter;
import fonthx.opentype.tables.opentype.lookup.LookupListTable;
import fonthx.opentype.tables.opentype.feature.FeatureListTable;
import fonthx.opentype.tables.opentype.script.ScriptListTable;

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
        lookupList = new LookupListTable(tag);
    }

    public function setLayout(layout:Layout) {
        scriptList.setScripts(layout.scripts);
        featureList.setFeatures(layout.features);
        lookupList.setLookups(layout.lookups);
    }

    override public function getBytes():Bytes {
        var offset = 10; // (length of this header)
        tt.writeUINT16(majorVersion)
            .writeUINT16(minorVersion)
            .writeOffset16(offset); // Offset to ScriptList table, from beginning of layout table (always 10 bytes)
        offset += scriptList.length;
        tt.writeOffset16(offset); // Offset to FeatureList table, from beginning of layout table
        offset += featureList.length;
        tt.writeOffset16(offset); // Offset to LookupList table, from beginning of layout table
        scriptList.write(tt);
        featureList.write(tt);
        lookupList.write(tt);
        return tt.getBytes();
    }
}
