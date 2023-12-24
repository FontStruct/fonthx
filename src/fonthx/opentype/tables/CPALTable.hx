package fonthx.opentype.tables;

import fonthx.model.color.Palette;
import fonthx.opentype.writers.ITrueTypeWriter;

using Lambda;

/**
 * CPAL table
 * The palette table is a set of one or more palettes, each containing a predefined number of color records. It may also contain 'name' table IDs describing the palettes and their entries.
 * @see https://learn.microsoft.com/en-us/typography/opentype/spec/cpal
 */
class CPALTable extends Table {

    private var palettes:Array<Palette>;

    public function new(version:Int = 0) {
        super(Table.CPAL);
        this.version = version; // we only support v0
        palettes = new Array();
    }

    override public function write(tt:ITrueTypeWriter) {
        var numPaletteEntries = 0;
        if (palettes.length > 0) {
            numPaletteEntries = palettes[0].length; // todo crass assumption
        }
        tt
            .writeUINT16(version)
            .writeUINT16(numPaletteEntries) // numPaletteEntries Number of palette entries in each palette. (always the same?)
            .writeUINT16(palettes.length) // numPalettes Number of palettes in the table.
            .writeUINT16(palettes.fold(function(sum:Int, p:Palette) {
                return sum + p.colors.length;
            }, 0)) // numColorRecords Total number of color records, combined for all palettes.
            .writeOffset32(12) // colorRecordsArrayOffset Offset from the beginning of CPAL table to the first ColorRecord.
        ;
        var idx = 0;
        for (palette in palettes) {
            tt.writeUINT16(idx); // colorRecordIndices[numPalettes] Index of each palette’s first color record in the combined color record array.
            idx += numPaletteEntries;
        }
        for (palette in palettes) {
            for (color in palette.colors) {
                tt.writeByte(color.b);
                tt.writeByte(color.g);
                tt.writeByte(color.r);
                tt.writeByte(color.a);
            }
        }
    }

    public function addPalette(palette:Palette) {
        palettes.push(palette);
    }


}
