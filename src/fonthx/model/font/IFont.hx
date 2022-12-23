package fonthx.model.font;

import fonthx.model.font.features.Layout;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;

/**
* Interface to implement for a fonthx Font,
* @see AbstractFont for a base implementation
**/
interface IFont {

    var glyphs(get, null):Array<IContourGlyph>;
    var name(get, null):String;
    var author(get, null):String;
    var style(get, null):String;
    var creationDate(get, null):String;
    var minorVersion(get, null):Int;
    var majorVersion(get, null):Int;
    var gposLayout(get, null):Layout;
    var gsubLayout(get, null):Layout;
    var emSquare(get, null):Int;

    // todo put following in IExportableFont or IOpenTypable (and IPostscriptable)?
    var description(get, null):String;
    var fullName(get, null):String;
    var styleModifiers(get, null):String;
    var copyright(get, null):String;
    var license(get, null):String;
    var licenseURL(get, null):String;
    var uniqueFamilyName(get, null):String;
    var postscriptName(get, null):String;
    var trademark(get, null):String;
    var manufacturerURL(get, null):String;
    var vendorID(get, null):String;
    var vendorURL(get, null):String;
    var URL(get, null):String;
    var sampleText(get, null):String;

    var idealAscender(get, null):Float;
    var idealDescender(get, null):Float;
    var realAscender(get, null):Float;
    var realDescender(get, null):Float;
    var typoLineGap(get, null):Float;

    function getGlyphForCodepoint(cp:Int):IContourGlyph;
    function getGlyphIndexForGlyph(g:IContourGlyph):Int;
    function getGlyphIndexForCodepoint(cp:Int):Int;
    function getGlyphIndexForName(name:String):Int;
    function getKerningPairs():Array<PositioningPair>;
    function getLineGap():Int;
    function getNumberOfHMetrics():Int;
    function hasKerning():Bool;
    function isFixedPitch():Bool;
    function getItalicAngle():Float;
    function getUnderlinePosition():Int;
    function getUnderlineThickness():Int;
    function sortGlyphs():Void;

}
