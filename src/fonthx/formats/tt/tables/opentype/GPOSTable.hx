package fonthx.formats.tt.tables.opentype;

import fonthx.model.font.features.FeatureTag;
import fonthx.model.font.features.LanguageTag;
import fonthx.model.font.features.ScriptTag;
import fonthx.formats.tt.tables.opentype.feature.FeatureListTable;
import fonthx.formats.tt.tables.opentype.lookup.LookupListTable;
import fonthx.formats.tt.tables.opentype.script.ScriptListTable;
import fonthx.formats.tt.writers.ITrueTypeWriter;
import fonthx.model.font.KerningPair;

/**
 * GPOS Table
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/gpos
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#table-organization
 */
class GPOSTable extends Table
{
	// members
	private var pairs:Array<KerningPair>;

    private var scriptList:ScriptListTable;
    private var featureList:FeatureListTable;
    private var lookupList:LookupListTable;

	public function new() {
		super(Table.GPOS);
        scriptList = new ScriptListTable();
        featureList = new FeatureListTable();
        lookupList = new LookupListTable();
	}

    override public function write(tt:ITrueTypeWriter) {
        tt.writeUINT16(1); // Major version of the GPOS table, = 1
        tt.writeUINT16(0); // Minor version of the GPOS table, = 0
        tt.writeOffset16(0x0A); // Offset to ScriptList table, from beginning of GPOS table (always 10 bytes)
        tt.writeOffset16(0); // Offset to FeatureList table, from beginning of GPOS table
        tt.writeOffset16(0); // Offset to LookupList table, from beginning of GPOS table
        scriptList.write(tt);
    }

    public function initForSimpleKerning() {
        addScript(ScriptTag.DEFAULT);
    }

    public function addKerningPair(pair:KerningPair, script:ScriptTag, lang:LanguageTag) {

    }

    public function addFeature(tag:ScriptTag, lang:LanguageTag, feat:FeatureTag) {
        scriptList.addFeature(tag, lang, feat);
    }

    public function addLanguage(tag:ScriptTag, lang:LanguageTag) {
        scriptList.addLanguage(tag, lang);
    }

    public function addScript(tag:ScriptTag) {
        scriptList.addScript(tag);
    }

	public function setKerningPairs(pairs:Array<KerningPair>, script:ScriptTag = ScriptTag.LATIN, lang:LanguageTag = LanguageTag.ENGLISH) {
		this.pairs = pairs;
        this.scriptList.addScript(script);

        // todo convert pairs to classes?

	}

    // addKerningPair (GLYPH1, GLYPH2, script (DEF), language (DEF))


}




