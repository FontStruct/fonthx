package fonthx.svg;

class SVG {

    private var options:SVGOptions;
    private var s:StringBuf;

    public function new(options:SVGOptions) {
        this.options = options;
        s = new StringBuf();
    }

    public function open() {
        // The size of the initial viewport for the SVG document is the em square: height and width both equal to head.unitsPerEm
        var id = options.id > -1? ' id="glyph${options.id}"' : '';
        s.add('<svg xmlns="http://www.w3.org/2000/svg"${viewBox()}${id}>');
    }

    public function add(s:String) {
        this.s.add(s);
    }

    public function close() {
        s.add('</svg>');
    }

    private function viewBox() {
        if (options.width == 0) return '';
        return ' viewBox=" 0 ${options.height} ${options.width} ${options.height}"';
    }

    public function toString():String {
        return s.toString();
    }


}
