package fonthx.formats.tt.tables;

import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * This table stores the offsets to the locations of the glyphs in the font,
 * relative to the beginning of the glyphData table
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/loca
 */
class LocationTable extends Table {
	
	private var glyphTable:GlyphTable;

	/**
	 * Construct a new Location Table
	 */
	public function new(glyphTable:GlyphTable) {
		super(Table.LOCA);
		this.glyphTable = glyphTable;
	}

	override public function write(tt:ITrueTypeWriter) {
		// we use the long format
		var offsets = glyphTable.getOffsets();
		for (o in offsets) {
			tt.writeULONG(o);
		}
	}

}
