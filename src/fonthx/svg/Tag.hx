package fonthx.svg;
import haxe.ds.StringMap;
class Tag {

    private var tag:String;
    private var attrs:StringMap;
    private var selfClosing:Bool = false;
    private var children:Array<Tag>;

    public function new(tag:String, attrs:StringMap, selfClosing:Bool = false) {
        this.tag = tag;
        this.attrs = attrs;
        this.children = new Array();
        this.selfClosing = selfClosing;
    }

    public function open():String {
        var s = '<${tag}';
        for (k in attrs.keys()) {
            s += ' ${k}="${attrs.get(k)}"';
        }
        if (selfClosing) {
            s = s + '/';
        }
        s = s + '>';
    }

    public function children():String {

    }

    public function show():String {
        return '${open}${close}';
    }

    public function close():String {
        if (selfClosing) {
            return '';
        }
        return '<${tag}/>';
    }


}
