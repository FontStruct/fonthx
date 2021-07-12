package fonthx.examples.pixelfonter;

import haxe.io.BytesInput;
import haxe.crypto.Base64;
using format.png.Tools;

@:buildXml('
<linker id="exe" exe="em++">
    <flag value="--bind"/>
    <flag value="-s"/>
    <flag value="WASM=1"/>
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

    public static function generate(imageData:String, format:String = 'ttf', includeSVG:Bool = false) {
        var o:PixelFonterParams = {
            imagePath: 'pixel-font-5x5.png',
            glyphWidth: 5,
            glyphHeight: 5,
            codepointString: '65-90,33-58,65799-65804',
            name: 'Pixel Font',
            outputPath: '',
            floatingPointCoords: false,
            shape: 2,
            includeSVG: includeSVG,
            svgSheet: false,
            format: format
        }
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

