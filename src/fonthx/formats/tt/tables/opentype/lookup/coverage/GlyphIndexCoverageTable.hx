package fonthx.formats.tt.tables.opentype.lookup.coverage;

import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
*
* Coverage Format 1 consists of a format code (coverageFormat) and a count of covered glyphs (glyphCount), followed by
* an array of glyph indices (glyphArray). The glyph indices must be in numerical order for binary searching of the list.
* When a glyph is found in the Coverage table, its position in the glyphArray determines the Coverage Index that is
* returned — the first glyph has a Coverage Index = 0, and the last glyph has a Coverage Index = GlyphCount -1.
* @see https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-format-1
*
*/
class GlyphIndexCoverageTable extends AbstractCoverageTable {

    public var length(get, null):Int;
    public var indices:Array<Int>;

    public function new() {
        indices = new Array();
        this.format = AbstractCoverageTable.LIST_FORMAT;
    }

    public function addIndex(i:Int) {
        indices.push(i);
    }

    public function write(tt:ITrueTypeWriter) {
        indices.sort(function(a, b) {
            return a - b;
        });
        tt.writeUINT16(this.format);
        tt.writeUINT16(this.indices.length);
        for (i in indices) {
            tt.writeUINT16(i);
        }
    }

    public function get_length():Int {
        return (this.indices.length + 2) * 2;
    }

}




