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

    public function buildSheet(glyphs:Array<IContourGlyph>, options:SVGOptions = null) {
        if (options == null) {
            options = new SVGOptions();
        }
        var offset:Float = 0;
        options.width = 1000;
        options.height = 1000;
        options.perRow = Std.int(Math.ceil(Math.sqrt(glyphs.length)));
        offset = options.gap + options.width;
        options.width = options.height = options.perRow * offset;

        var svg = new SVG(options);
        svg.open();

        var idx = 0;
        for (g in glyphs) {
            idx++;
            var svgGlyph = new SVGGlyph(idx, options);
            if (idx % options.perRow == 0) {
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
