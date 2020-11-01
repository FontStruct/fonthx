package fonthx.model.font;

import fonthx.opentype.types.Fixed;
import fonthx.model.font.features.Layout;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;
import haxe.ds.IntMap;
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
    public var layout(get, null):Layout;
    public var copyright(get, null):String;
    public var creationDate(get, null):String;
    public var author(get, null):String;
    public var description(get, null):String;
    public var uniqueFamilyName(get, null):String;
    public var fullName(get, null):String;
    public var version(get, null):String;
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
        layout = new Layout();
        version="1.0";
        style="Regular";
        copyright = '';
        description = '';
        emSquare = 1000;
    }

    public function getGlyphForCodepoint(cp:Int):IContourGlyph {
        return glyphs.find(function(g) { return g.codepoint == cp; });
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

    function get_version():String {
        return version;
    }

    function set_version(value:String) {
        return this.version = value;
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

    public function get_layout():Layout {
        return layout;
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

    public function getItalicAngle():Float{
        return 0;
    }

    public function getUnderlinePosition():Int {
        return Std.int(emSquare / 10);
    }

    public function getUnderlineThickness():Int {
        return Std.int(emSquare / 20);
    }
}
