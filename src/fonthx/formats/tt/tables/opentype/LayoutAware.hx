package fonthx.formats.tt.tables.opentype;

import fonthx.formats.tt.tables.opentype.lookup.LookupListTable;
import fonthx.formats.tt.tables.opentype.feature.FeatureListTable;
import fonthx.formats.tt.tables.opentype.script.ScriptListTable;

class LayoutAware {

    public var scriptList(get, null):ScriptListTable;
    public var featureList(get, null):FeatureListTable;
    public var lookupList(get, null):LookupListTable;

    public var layoutTable:LayoutTable;

    public function new(layoutTable:LayoutTable) {
        this.layoutTable = layoutTable;
    }

    public function get_scriptList():ScriptListTable {
        return scriptList;
    }

    function get_featureList():FeatureListTable {
        return featureList;
    }

    function get_lookupList():LookupListTable {
        return lookupList;
    }


}
