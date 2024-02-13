package fonthx.model.color;

abstract RGBAColor(Int) from Int to Int {

    public var r(get, set):Int;
    public var g(get, set):Int;
    public var b(get, set):Int;
    public var a(get, set):Int;
    public var rgbHex(get, never):String;

    public static inline var BLACK:RGBAColor = 0x000000FF;
    public static inline var WHITE:RGBAColor = 0xFFFFFFFF;

    inline function new(rgba:Int) this = rgba;

    @:from public static inline function fromString(rgba:String):RGBAColor {
        return new RGBAColor(Std.parseInt(rgba));
    }

    public static inline function fromRGBA(r:Int, g:Int, b:Int, a:Int = 0xFF):RGBAColor {
        return new RGBAColor((r << 24) | (g << 16) | (b << 8) | a);
    }

    inline function get_rgbHex():String {
        return StringTools.hex((this >> 8) & 0xFFFFFF, 6);
    }

    inline function get_r() return (this >> 24) & 0xff;
    inline function set_r(r:Int) { this = fromRGBA(r, g, b, a); return r; }

    inline function get_g() return (this >> 16) & 0xff;
    inline function set_g(g:Int) { this = fromRGBA(r, g, b, a); return g; }

    inline function get_b() return (this >> 8) & 0xff;
    inline function set_b(b:Int) { this = fromRGBA(r, g, b, a); return b; }

    inline function get_a() return this & 0xff;
    inline function set_a(a:Int) { this = fromRGBA(r, g, b, a); return a; }


}
