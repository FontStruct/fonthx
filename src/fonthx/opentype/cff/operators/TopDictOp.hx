package fonthx.opentype.cff.operators;

@:enum
abstract TopDictOp(Int) to Int {

    var escape = 0xC00;

    // N.B. case inconsistencies match spec
    var version = 0;
    var Notice = 1;
    var Copyright = escape | 0;
    var FullName = 2;
    var FamilyName = 3;
    var Weight = 4;
    var isFixedPitch = escape | 1;
    var ItalicAngle = escape | 2;
    var UnderlinePosition = escape | 3;
    var UnderlineThickness = escape | 4;
    var PaintType = escape | 5;
    var CharstringType = escape | 6;
    var FontMatrix = escape | 7;
    var UniqueID = 13;
    var FontBBox = 5;
    var StrokeWidth = escape | 8;
    var XUID = 14;
    var charset = 15;
    var Encoding = 16;
    var CharStrings = 17;
    var Private = 18;
    var SyntheticBase = escape | 20;
    var PostScript = escape | 21;
    var BaseFontName = escape | 22;
    var BaseFontBlend = escape | 23;

}
