package fonthx.model.font;

import haxe.ds.IntMap;
import fonthx.model.font.KerningPair;

interface IFont {

    var glyphs(get, null):Array<IContourGlyph>;

    var emSquare(get, null):Int;

    var name(get, set):String;
    var style(get, null):String;
    var sampleText(get, null):String;
    var copyright(get, null):String;
    var creationDate(get, null):String;
    var author(get, null): String;
    var description(get, null):String;
    var uniqueFamilyName(get, null):String;
    var fullName(get, null):String;
    var version(get, null):String;
    var postscriptName(get, null):String;
    var trademark(get, null):String;
    var manufacturerURL(get, null):String;
    var vendorURL(get, null):String;
    var URL(get, null):String;
    var license(get, null):String;
    var licenseURL(get, null):String;
    var styleModifiers(get, null):String;
    var extraNamingRecords(get, null):IntMap<String>;

    // todo make these integers
    var idealAscender(get, null):Float;
    var idealDescender(get, null):Float;
    var realAscender(get, null):Float;
    var realDescender(get, null):Float;
    var typoLineGap(get, null):Float;

    function getGlyphForCodepoint(cp:Int):IContourGlyph;

    function getLineGap():Int;
    function getNumberOfHMetrics():Int;

    function hasKerning():Bool;
    function getKerningPairs():Array<KerningPair>;


}
