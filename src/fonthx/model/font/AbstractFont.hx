package fonthx.model.font;

import fonthx.model.font.features.Layout;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;
using Lambda;

class AbstractFont implements IFont {

    public var glyphs(get, null):Array<IContourGlyph>;
    @:isVar public var name(get, set):String;
    @:isVar public var emSquare(get, set):Int;
    @:isVar public var style(get, set):String;
    @:isVar public var sampleText(get, set):String;
    @:isVar public var idealAscender(get, set):Float;
    @:isVar public var idealDescender(get, set):Float;
    @:isVar public var realAscender(get, set):Float;
    @:isVar public var realDescender(get, set):Float;
    @:isVar public var typoLineGap(get, set):Float;
    @:isVar public var gposLayout(get, null):Layout;
    @:isVar public var gsubLayout(get, null):Layout;
    public var copyright(get, null):String;
    public var creationDate(get, null):String;
    public var author(get, null):String;
    public var description(get, null):String;
    public var uniqueFamilyName(get, null):String;
    public var fullName(get, null):String;
    public var minorVersion(get, null):Int;
    public var majorVersion(get, null):Int;
    public var postscriptName(get, null):String;
    public var trademark(get, null):String;
    public var manufacturerURL(get, null):String;
    public var vendorID(get, null):String;
    public var vendorURL(get, null):String;
    public var URL(get, null):String;
    public var license(get, null):String;
    public var licenseURL(get, null):String;
    public var styleModifiers(get, null):String;

    public function new() {
        glyphs = new Array();
        name = 'Unnamed';
        majorVersion = 1;
        minorVersion = 0;
        style = "Regular";
        copyright = '';
        description = '';
        emSquare = 1000;
        gposLayout = new Layout();
        gsubLayout = new Layout();
    }

    public function getGlyphForCodepoint(cp:Int):IContourGlyph {
        return glyphs.find(function(g) { return g.codepoint == cp; });
    }

    public function getGlyphIndexForGlyph(g:IContourGlyph) {
        var idx = this.getGlyphIndexForCodepoint(g.codepoint);
        if (idx == -1) {
            idx = this.getGlyphIndexForName(g.name);
        }
        return idx;
    }

    public function getGlyphIndexForCodepoint(cp:Int):Int {
        if (cp < 1) return -1;
        for (i in 0...glyphs.length) {
            if (glyphs[i].codepoint == cp) {
                return i;
            }
        }
        return -1;
    }

    public function getGlyphIndexForName(name:String):Int {
        if (name == null || name.length == 0) return -1;
        for (i in 0...glyphs.length) {
            if (glyphs[i].name == name) {
                return i;
            }
        }
        return -1;
    }

    function get_name():String {
        return name;
    }

    function set_name(value:String) {
        return this.name = value;
    }

    function get_style():String {
        return style;
    }

    function set_style(value:String) {
        return this.style = value;
    }

    function get_copyright():String {
        return copyright;
    }

    function set_copyright(value:String) {
        return this.copyright = value;
    }

    function get_creationDate():String {
        return creationDate;
    }

    function set_creationDate(value:String) {
        return this.creationDate = value;
    }

    function get_author():String {
        return author;
    }

    function set_author(value:String) {
        return this.author = value;
    }

    function get_description():String {
        return description;
    }

    function set_description(value:String) {
        return this.description = value;
    }

    function get_uniqueFamilyName():String {
        return uniqueFamilyName;
    }

    function set_uniqueFamilyName(value:String) {
        return this.uniqueFamilyName = value;
    }

    function get_fullName():String {
        return fullName;
    }

    function set_fullName(value:String) {
        return this.fullName = value;
    }

    function get_majorVersion():Int {
        return majorVersion;
    }

    function get_minorVersion():Int {
        return minorVersion;
    }

    function set_majorVersion(value:Int) {
        return this.majorVersion = value;
    }

    function set_minorVersion(value:Int) {
        return this.minorVersion = value;
    }

    function get_postscriptName():String {
        return postscriptName;
    }

    function set_postscriptName(value:String) {
        return this.postscriptName = value;
    }

    function get_trademark():String {
        return trademark;
    }

    function set_trademark(value:String) {
        return this.trademark = value;
    }

    function get_manufacturerURL():String {
        return manufacturerURL;
    }

    function set_manufacturerURL(value:String) {
        return this.manufacturerURL = value;
    }

    function get_vendorID():String {
        return "-";
    }

    function get_vendorURL():String {
        return vendorURL;
    }

    function set_vendorURL(value:String) {
        return this.vendorURL = value;
    }

    function get_URL():String {
        return URL;
    }

    function set_URL(value:String) {
        return this.URL = value;
    }

    function get_license():String {
        return license;
    }

    function set_license(value:String) {
        return this.license = value;
    }

    function get_licenseURL():String {
        return licenseURL;
    }

    function set_licenseURL(value:String) {
        return this.licenseURL = value;
    }

    function get_styleModifiers():String {
        return styleModifiers;
    }

    function set_styleModifiers(value:String) {
        return this.styleModifiers = value;
    }

    function get_sampleText():String {
        return sampleText;
    }

    function set_sampleText(value:String) {
        return this.sampleText = value;
    }

    function get_emSquare():Int {
        return emSquare;
    }

    function set_emSquare(value:Int):Int {
        return this.emSquare = value;
    }


    function get_idealAscender():Float {
        return idealAscender;
    }

    function set_idealAscender(value:Float):Float {
        return this.idealAscender = value;
    }

    function get_idealDescender():Float {
        return idealDescender;
    }

    function set_idealDescender(value:Float):Float {
        return this.idealDescender = value;
    }

    function get_realAscender():Float {
        return realAscender;
    }

    function set_realAscender(value:Float):Float {
        return this.realAscender = value;
    }

    function get_realDescender():Float {
        return realDescender;
    }

    function set_realDescender(value:Float):Float {
        return this.realDescender = value;
    }

    function get_typoLineGap():Float {
        return typoLineGap;
    }

    function set_typoLineGap(value:Float):Float {
        return this.typoLineGap = value;
    }

    function get_gsubLayout():Layout {
        return gsubLayout;
    }


    function get_gposLayout():Layout {
        return gposLayout;
    }

    function get_glyphs():Array<IContourGlyph> {
        return glyphs;
    }

    public function getLineGap():Int {
        return 0;
    }

    public function getNumberOfHMetrics():Int {
        return 0;
    }

    public function hasKerning():Bool {
        return getKerningPairs() != null && getKerningPairs().length > 0;
    }

    public function getKerningPairs():Array<PositioningPair> {
        return null;
    }

    public function isFixedPitch() {
        return false;
    }

    public function getItalicAngle():Float {
        return 0;
    }

    public function getUnderlinePosition():Int {
        return Std.int(emSquare / 10);
    }

    public function getUnderlineThickness():Int {
        return Std.int(emSquare / 20);
    }

    public function sortGlyphs():Void {
        glyphs.sort(function(a:IContourGlyph, b:IContourGlyph) {
            if (a.name == '.notdef') {
                return -1; // must be first
            }
            return a.codepoint - b.codepoint;
        });
    }

}
