package fonthx.model.font.glyphnames;

using StringTools;

class GlyphNamer {

    public static function nameGlyphs(glyphs:Array<IContourGlyph>) {
        trace("naming glyphs");
        AGLFN.init();
        var idx = 0;
        for (g in glyphs) {
            if (g.name != null) {
                continue;
            }
            if (g.codepoint > 0) {
                if (AGLFN.uvToGlyphName.exists(g.codepoint)) {
                    g.name = AGLFN.uvToGlyphName.get(g.codepoint);
                } else {
                    g.name = 'uni${g.codepoint.hex()}';
                }
            } else {
                g.name = 'glyph${idx++}';
            }
        }
    }

}
