package fonthx.opentype.tables;

import fonthx.model.font.IFont;
import fonthx.opentype.writers.ITrueTypeWriter;

import fonthx.model.font.IContourGlyph;
using fonthx.opentype.types.Fixed;

/**
 * COLR table
 * The COLR table adds support for multi-colored glyphs in a manner that integrates with the rasterizers of existing
 * text engines and that is designed to be easy to support with current OpenType font files.
 * @see https://learn.microsoft.com/en-us/typography/opentype/spec/colr
 */
class COLRTable extends Table {

    private var font:IFont;
    private var version:Int = 0;

	public function new(font:IFont, version:Int = 0) {
		super(Table.COLR);
        this.font = font;
		this.version = version; // todo we only support v0
	}

	override public function write(tt:ITrueTypeWriter) {

        var baseGlyphs = font.glyphs.filter(function(g:IContourGlyph) {
            return g.hasLayers();
        });
        var layerGlyphs = font.glyphs.filter(function(g:IContourGlyph) {
            return !g.hasLayers();
        });

        // header
		tt
            .writeUINT16(version)
            .writeUINT16(baseGlyphs.length)                 // numBaseGlyphRecords      Number of BaseGlyph records; may be 0 in a version 1 table.
            .writeOffset32(14)                              // baseGlyphRecordsOffset   Offset to baseGlyphRecords array (from start of COLR table)
            .writeOffset32(14 + (6 * baseGlyphs.length))    // layerRecordsOffset       Offset to layerRecords array (from start of COLR table)
            .writeUINT16(layerGlyphs.length)                // numLayerRecords          Number of Layer records; may be 0 in a version 1 table.
//            .writeOffset32(0)   // baseGlyphListOffset 	        Offset to BaseGlyphList table.
//            .writeOffset32(0)   // layerListOffset 	            Offset to LayerList table (may be NULL).
//            .writeOffset32(0)   // clipListOffset 	            Offset to ClipList table (may be NULL).
//            .writeOffset32(0)   // varIndexMapOffset 	        Offset to DeltaSetIndexMap table (may be NULL).
//            .writeOffset32(0)   // itemVariationStoreOffset 	Offset to ItemVariationStore (may be NULL).
        ;
        // base glyph records
        var layerRecIdx = 0;
        for (g in baseGlyphs) {
            tt.writeUINT16(font.getGlyphIndexForGlyph(g));  // glyphID 	Glyph ID of the base glyph.
            tt.writeUINT16(layerRecIdx);                    // firstLayerIndex 	Index (base 0) into the layerRecords array.
            tt.writeUINT16(g.getLayers().length);           // numLayers 	Number of color layers associated with this glyph.
            layerRecIdx += g.getLayers().length;
        }
        // layer records
        for (g in baseGlyphs) {
            for (l in g.getLayers()) {
                tt.writeUINT16(font.getGlyphIndexForGlyph(l));  // glyphID 	Glyph ID of the glyph used for a given layer.
                tt.writeUINT16(font.palette.colors.indexOf(l.color));                              // uint16 	paletteIndex 	Index (base 0) for a palette entry in the CPAL table.
            }
        }
    }

}
