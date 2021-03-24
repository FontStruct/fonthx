package fonthx.svg;

import fonthx.model.font.IContourGlyph;

class SVGBuilder {

    public function new() {

    }

    public function buildGlyph(idx:Int, glyph:IContourGlyph, options:SVGOptions = null) {
        if (options == null) {
            options = new SVGOptions();
        }
        var svg = new SVG(options);
        svg.open();

        var svgGlyph = new SVGGlyph(idx, options);
        glyph.walkContours(svgGlyph);
        svg.add(svgGlyph.toString());

        svg.close();
        return svg.toString();
    }

    public function buildSheet(glyphs:Array<IContourGlyph>, options:SVGOptions = null, sheetConfig:SVGSheetConfig = null) {
        if (options == null) {
            options = new SVGOptions();
        }
        if (sheetConfig == null) {
            sheetConfig = new SVGSheetConfig();
        }
        var offset:Float = 0;
        sheetConfig.perRow = Std.int(Math.ceil(Math.sqrt(glyphs.length)));
        offset = sheetConfig.gap + options.boxSize;

        var boxSize = options.boxSize;
        options.boxSize = sheetConfig.perRow * offset;
        options.isGlyph = false;
        var svg = new SVG(options);
        svg.open();
        options.boxSize = boxSize;

        var idx = 0;
        for (g in glyphs) {
            idx++;
            var svgGlyph = new SVGGlyph(idx, options);
            if (idx % sheetConfig.perRow == 0) {
                options.offsetX = 0;
                options.offsetY += offset;
            } else {
                options.offsetX += offset;
            }
            g.walkContours(svgGlyph);
            svg.add(svgGlyph.toString());

        }
        svg.close();
        return svg.toString();
    }
}
