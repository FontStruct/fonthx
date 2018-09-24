# fonthx: Simple TrueType Generation for Haxe

* A very basic font generation library (currently TrueType only) written in [Haxe](https://haxe.org)
* The core of the font generation module used by [FontStruct](https://fontstruct.com) 
* Aimed at Haxe (or other) developers who wish to create font generation tools
* Should work with nodejs, js, cpp, c# and java targets. WASM too

## Example

https://fontstruct.github.io/fonthx/

## Installation

1. Clone this repo with git to a folder on your machine

        git clone git@github.com:FontStruct/fonthx.git

1. Install Haxe, e.g. from https://haxe.org/download/       
    
1. Install Haxe dependencies

        haxelib install haxelib.json
        
1. To compile for node, you will need to have nodejs installed. To compile for java, you will need to have a java JDK installed. Other requirements listed below. If on Windows, you may need to adjust some of the paths below. 
    
## Try it for node

Build:

    haxe build/examples/pixelfonter/pixelfonter-node.hxml
    
This will build the pixelfonter example, which will create a TrueType font from a PNG image.

Now run:
    
    node dist/examples/pixelfonter/node/PixelFonterApp.js -i build/examples/pixelfonter/pixel-font-5x5.png -c65-91 -o tmp/pixelfont.ttf

## Try the same thing for Java

Build:
    
    haxe build/examples/pixelfonter/pixelfonter-java.hxml
    
Run:

    java -jar dist/examples/pixelfonter/java/PixelFonterApp-Debug.jar -i build/examples/pixelfonter/pixel-font-5x5.png -c65-91 -o tmp/pixelfont.ttf
    
## Try the same thing for native C++

Build:

    haxe build/examples/pixelfonter/pixelfonter-cpp.hxml
    
Run:

    dist/examples/pixelfonter/cpp/PixelFonterApp-debug -i build/examples/pixelfonter/pixel-font-5x5.png -c65-91 -o tmp/pixelfont.ttf
         
    
## And C# !?!

In order to build and run this example on OSX or Linux you will need to install mono, e.g. via brew install mono

Build:
    
    haxe build/examples/pixelfonter/pixelfonter-cs.hxml
    
Run:        

    mono dist/examples/pixelfonter/cs/bin/PixelFonterApp-Debug.exe -i build/examples/pixelfonter/pixel-font-5x5.png -c65-91 -o tmp/pixelfont.ttf

## And in the browser with a simple GUI

    haxe build/examples/pixelfonter/pixelfonter-js.hxml    

– In order to view this example, you will need to point a web server at dist/examples/pixelfonter/js/index.html

## And even with WASM!
    
    HXCWD=`pwd` haxe build/examples/pixelfonter/pixelfonter-wasm.hxml     

– You will need to setup emscripten in order to compile this one. You will also need to point a web server at dist/examples/pixelfonter/wasm/index.html. The easiest way is with emrun e.g.

    emrun --no_emrun_detect --browser chrome dist/examples/pixelfonter/wasm/PixelFonterBrowserApp-debug.html
    
(May well take a while to initialise)    
    
## Developing and Testing

Set up the dev tools (gulp):

    npm install
    
Run specs:

    gulp specs
    
Or, develop and run specs:

    gulp specs-watch
    
Develop using the pixelfonter example app (node target):     
    
    gulp pixelfonter-watch
    
Show all the available gulp tasks:

    gulp --tasks
    
## Build a font generation tool

Look at the Pixelfonter example for guidance, in particular [PixelFonter](src/fonthx/examples/pixelfonter/PixelFonter.hx)

You need to:

1. create a font class implementing [IFont](src/fonthx/model/font/IFont.hx) (optionally extending [AbstractFont](src/fonthx/model/font/AbstractFont.hx))
1. create a glyph class implementing [IContourGlyph](src/fonthx/model/font/IContourGlyph.hx) (optionally extending [AbstractContourGlyph](src/fonthx/model/font/AbstractContourGlyph.hx))
1. instantiate your font class, add some glyphs to it, then
1. get your TrueType bytes using [TrueTypeBuilder](src/fonthx/formats/tt/TrueTypeBuilder.hx)

    