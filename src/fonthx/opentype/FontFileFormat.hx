package fonthx.opentype;

@:enum
abstract FontFileFormat(String) {
    var TrueType = 'ttf';
    var CFF = 'otf';
}