package fonthx.examples.pixelfonter;

import haxe.crypto.Base64;
import haxe.io.BytesInput;
using format.png.Tools;

@:buildXml('
<linker id="exe" exe="em++">
    <flag value="--bind"/>
    <flag value="-s"/>
    <flag value="WASM=1"/>
    <flag value="-s"/>
    <flag value="SAFE_HEAP=1"/>
    <flag value="-s"/>
    <flag value="WARN_UNALIGNED=1"/>
    <flag value="-s"/>
    <flag value="ASSERTIONS=1"/>
    <flag value="-s"/>
    <flag value="TOTAL_MEMORY=512MB"/>
    <flag value="-s"/>
    <flag value="--shell-file"/>
    <flag value="${HXCWD}/build/examples/pixelfonter/wasm.html"/>
</linker>
')

@:cppFileCode('

#include <emscripten/bind.h>

using namespace emscripten;

EMSCRIPTEN_BINDINGS(my_module) {
    function("generate", optional_override([] (const std::string s, const std::string format, const bool includeSVG) {
        ::String res = fonthx::examples::pixelfonter::PixelFonterBrowserApp_obj::generate(
            ::String(s.c_str(), strlen(s.c_str())),
            ::String(format.c_str(), strlen(format.c_str())),
            includeSVG
         );
        return std::string(res.__s);
    }));
}

')

/**
* Pixelfonter for Browser JS and WASM
**/
@:expose
class PixelFonterBrowserApp {

    public static function main() {
        #if cpp
        untyped __cpp__('
            EM_ASM( wasmReady() );
        ');
        #end
    }
    // todo drop wasm (for now)
    public static function generate(imageData:String, options:Dynamic) {
        var o = new PixelFonterParams(options);
        var bytes = Base64.decode(imageData.split(',')[1]);
        var handle = new BytesInput(bytes);
        var png = new format.png.Reader(handle).read();
        o.imageWidth = png.getHeader().width;
        o.imageHeight = png.getHeader().height;
        o.pixelData = png.extract32();
        handle.close();
        var file = PixelFonter.build(o);
        return Base64.encode(file);
    }


}

