package fonthx.examples.pixelfonter;

import haxe.io.BytesInput;
import haxe.crypto.Base64;
using format.png.Tools;

@:buildXml('
<linker id="exe" exe="emcc">
    <flag value="--bind"/>
    <flag value="-s"/>
    <flag value="ALLOW_MEMORY_GROWTH=1"/>
    <flag value="-s"/>
    <flag value="TOTAL_MEMORY=32MB"/>
    <flag value="-s"/>
    <flag value="BINARYEN_TRAP_MODE=\'clamp\'"/>
    <flag value="--shell-file"/>
    <flag value="${HXCWD}/build/examples/pixelfonter/wasm.html"/>
</linker>
')

@:cppFileCode('

#include <emscripten/bind.h>

using namespace emscripten;

EMSCRIPTEN_BINDINGS(my_module) {
    function("generate", optional_override([] (const std::string s) {
        ::String res = fonthx::examples::pixelfonter::PixelFonterBrowserApp_obj::generate(
            ::String(s.c_str(), strlen(s.c_str())));
        return std::string(res.__s);
    }));
}

')

@:expose
class PixelFonterBrowserApp {

    public static function main() {
        #if cpp
        untyped __cpp__('
            EM_ASM( wasmReady() );
        ');
        #end
    }

    public static function generate(imageData:String) {
        var o:PixelFonterParams = {
            imagePath: 'pixel-font-5x5.png',
            glyphWidth: 5,
            glyphHeight: 5,
            codepointString: '65-90,33-58',
            name: 'Pixel Font',
            outputPath: '',
        }
        var bytes = Base64.decode(imageData.split(',')[1]);
        var handle = new BytesInput(bytes);
        var png = new format.png.Reader(handle).read();
        o.imageWidth = png.getHeader().width;
        o.imageHeight = png.getHeader().height;
        o.pixelData = png.extract32();
        handle.close();
        var ttf = PixelFonter.build(o);
        return Base64.encode(ttf);
    }


}

