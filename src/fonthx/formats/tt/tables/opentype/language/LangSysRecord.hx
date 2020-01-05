package fonthx.formats.tt.tables.opentype.language;

import fonthx.model.font.features.Feature;
import fonthx.model.font.features.LanguageTag;
import fonthx.formats.tt.writers.ITrueTypeWriter;

class LangSysRecord {

    private var features:Array<Feature>; // todo ???
    public var tag:LanguageTag;
    public var length(get, null):Int;

    public function new(tag:LanguageTag) {
        this.tag = tag;
        features = new Array();
    }

    public function write(tt:ITrueTypeWriter) {
        tt.writeTag(tag.toString());
        tt.writeOffset16(0);
    }

    public function addFeature(feature:Feature) {
        features.push(feature);
    }

    function get_length():Int {
        return 6;
    }
}
