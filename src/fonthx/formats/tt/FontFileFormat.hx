package fonthx.formats.tt;

@:enum
abstract FontFileFormat(String) {
    var TrueType = 'ttf';
    var OpenType = 'otf';
}