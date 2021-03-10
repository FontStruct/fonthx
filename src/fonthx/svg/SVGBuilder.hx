package fonthx.svg;

import fonthx.model.font.IFont;
class SVGBuilder {

    public function new() {

    }

    public function build(font:IFont, options:SVGOptions = null) {
        if (options == null) {
            options = new SVGOptions();
        }
        var offset:Float = 0;
        if (options.asSheet) {
            options.perRow = Std.int(Math.ceil(Math.sqrt(font.glyphs.length)));
            offset = options.gap + options.emSquare;
            options.sheetW = options.sheetH = options.perRow * offset;
        }

        var svg = new SVG(options);
        svg.open();

        var idx = 0;
        for (g in font.glyphs) {
            if (g.name == '.notdef') {
                continue;
            }
            idx++;
            var svgGlyph = new SVGGlyph(idx, options);
            if (options.asSheet) {
                if (idx % options.perRow == 0) {
                    options.offsetX = 0;
                    options.offsetY += offset;
                } else {
                    options.offsetX += offset;
                }
            }
            g.walkContours(svgGlyph);
            svg.add(svgGlyph.toString());

        }
        svg.close();
        trace(svg.toString());
        return svg.toString();
    }
}
