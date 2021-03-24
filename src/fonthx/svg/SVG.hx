package fonthx.svg;

class SVG {

    private var options:SVGOptions;
    private var s:StringBuf;

    public function new(options:SVGOptions) {
        this.options = options;
        s = new StringBuf();
    }

    public function open() {
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
        if (options.boxSize == 0) return '';
        if (options.isGlyph) {
            return ' viewBox="0 ${options.boxSize} ${options.boxSize} ${options.boxSize}"';
        }
        return ' viewBox="0 0 ${options.boxSize} ${options.boxSize}"';
    }

    public function toString():String {
        return s.toString();
    }


}
