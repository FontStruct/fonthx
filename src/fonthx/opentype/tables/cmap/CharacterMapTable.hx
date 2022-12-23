package fonthx.opentype.tables.cmap;

import fonthx.opentype.writers.TrueTypeFileWriter;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * Character To Glyph Index Mapping Table
 * This table defines the mapping of character codes to the glyph index
 * values used in the font. It may contain more than one subtable,
 * in order to support more than one character encoding scheme.

 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/cmap
 */
class CharacterMapTable extends Table {
	
	private var subtables:Array<CharacterMapSubtable> ;

	/**
	 * Construct a new CharacterMapTable
	 */
	public function new() {
		super(Table.CMAP);
		subtables = new Array<CharacterMapSubtable>();
	}
	
	override public function write(tt:ITrueTypeWriter) {
		/*
		 * The header entries must be sorted first by platform ID,
		 * then by platform-specific encoding ID, and then by the version field 
		 * in the corresponding subtable. 
		 * Each platform ID, platform-specific encoding ID, 
		 * and subtable language combination may appear only 
		 * once in the 'cmap' table.
		 */
		tt.writeUSHORT(0);
		var numTables = subtables.length;
		tt.writeUSHORT(numTables);
		// subtable entries
		var subtableOffset = 4 + (numTables * 8);
		for (t in subtables) {
			tt.writeUSHORT(t.platformID) // platform id
			.writeUSHORT(t.encodingID) // encoding id
			.writeULONG(subtableOffset); // offset to subtable from start of this table, fill later
			subtableOffset += t.calculateLength();
		}
		// subtables
		for (t in subtables) {
			t.write(tt);
		}
	}

	public function addSubtable(sub:CharacterMapSubtable) {
		subtables.push(sub);
	}
	
	public function getSubtables():Array<CharacterMapSubtable> {
		return subtables;
	}

}
