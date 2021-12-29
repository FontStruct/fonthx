package fonthx.opentype.tables;

import haxe.io.Bytes;
import fonthx.opentype.writers.ITrueTypeWriter;

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

	override public function getBytes():Bytes {
		// we use the long format
		var offsets = glyphTable.getOffsets();
		for (o in offsets) {
			tt.writeULONG(o);
		}
        return tt.getBytes();
	}

}
