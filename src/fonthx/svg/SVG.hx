package fonthx.svg;

class SVG {

    private var options:SVGOptions;
    private var s:StringBuf;

    public function new(options:SVGOptions) {
        this.options = options;
        s = new StringBuf();
       // s.add('<?xml version="1.0" encoding="UTF-8"?>');
    }

    public function open() {
        // The size of the initial viewport for the SVG document is the em square: height and width both equal to head.unitsPerEm
        s.add('<svg version="1.1" xmlns="http://www.w3.org/2000/svg"${dimensions()}>');
    }

    public function add(s:String) {
        this.s.add(s);
    }

    public function close() {
        s.add('</svg>');
    }

    private function dimensions() {
        if (!options.asSheet) return '';
        return ' width="${options.sheetW}" height="${options.sheetH}"';
    }

    public function toString():String {
        return s.toString();
    }


}
