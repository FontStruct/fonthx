package fonthx.opentype.tables;

import fonthx.model.font.IFont;
import fonthx.opentype.writers.ITrueTypeWriter;

using fonthx.opentype.types.Fixed;

/**
 * COLR table
 * The COLR table adds support for multi-colored glyphs in a manner that integrates with the rasterizers of existing
 * text engines and that is designed to be easy to support with current OpenType font files.
 * @see https://learn.microsoft.com/en-us/typography/opentype/spec/colr
 */
class COLRTable extends Table {

	public function new(font:IFont, version:Int = 1) {
		super(Table.COLR);
        this.font = font;
		this.version = version; // todo we only support subset of v1
	}

	override public function write(tt:ITrueTypeWriter) {
        // header
		tt
            .writeUINT16(version)
            .writeUINT16(0)     // numBaseGlyphRecords          Number of BaseGlyph records; may be 0 in a version 1 table.
            .writeOffset32(0)   // baseGlyphRecordsOffset       Offset to baseGlyphRecords array (may be NULL)
            .writeOffset32(0)   // layerRecordsOffset           Offset to layerRecords array (may be NULL).
            .writeUINT16(0)     // numLayerRecords              Number of Layer records; may be 0 in a version 1 table.
            .writeOffset32(0)   // baseGlyphListOffset 	        Offset to BaseGlyphList table.
            .writeOffset32(0)   // layerListOffset 	            Offset to LayerList table (may be NULL).
            .writeOffset32(0)   // clipListOffset 	            Offset to ClipList table (may be NULL). todo unsupported
            .writeOffset32(0)   // varIndexMapOffset 	        Offset to DeltaSetIndexMap table (may be NULL). todo unsupported
            .writeOffset32(0)   // itemVariationStoreOffset 	Offset to ItemVariationStore (may be NULL). todo unsupported
        ;
	}


}
