package fonthx.formats.tt;

import haxe.ds.IntMap;

class UnicodeRange {

    public static var BASIC_LATIN = 0;
    public static var LATIN_1_SUPPLEMENT = 1;
    public static var LATIN_EXTENDED_A = 2;
    public static var LATIN_EXTENDED_B = 3;
    public static var IPA_EXTENSIONS = 4;
    public static var SPACING_MODIFIER_LETTERS = 5;
    public static var COMBINING_DIACRITICAL_MARKS = 6;
    public static var GREEK_AND_COPTIC = 7;
    public static var RESERVED_FOR_UNICODE_SUBRANGES = 8;
    public static var CYRILLIC = 9;
    public static var CYRILLIC_SUPPLEMENTARY = 9;
    public static var ARMENIAN = 10;
    public static var HEBREW = 11;
    public static var ARABIC = 13;
    public static var DEVANAGARI = 15;
    public static var BENGALI = 16;
    public static var GURMUKHI = 17;
    public static var GUJARATI = 18;
    public static var ORIYA = 19;
    public static var TAMIL = 20;
    public static var TELUGU = 21;
    public static var KANNADA = 22;
    public static var MALAYALAM = 23;
    public static var THAI = 24;
    public static var LAO = 25;
    public static var GEORGIAN = 26;
    public static var HANGUL_JAMO = 28;
    public static var LATIN_EXTENDED_ADDITIONAL = 29;
    public static var GREEK_EXTENDED = 30;
    public static var GENERAL_PUNCTUATION = 31;
    public static var SUPERSCRIPTS_AND_SUBSCRIPTS = 32;
    public static var CURRENCY_SYMBOLS = 33;
    public static var COMBINING_DIACRITICAL_MARKS_FOR_SYMBOLS = 34;
    public static var LETTERLIKE_SYMBOLS = 35;
    public static var NUMBER_FORMS = 36;
    public static var ARROWS = 37;
    public static var MATHEMATICAL_OPERATORS = 38;
    public static var MISCELLANEOUS_TECHNICAL = 39;
    public static var CONTROL_PICTURES = 40;
    public static var OPTICAL_CHARACTER_RECOGNITION = 41;
    public static var ENCLOSED_ALPHANUMERICS = 42;
    public static var BOX_DRAWING = 43;
    public static var BLOCK_ELEMENTS = 44;
    public static var GEOMETRIC_SHAPES = 45;
    public static var MISCELLANEOUS_SYMBOLS = 46;
    public static var DINGBATS = 47;
    public static var CJK_SYMBOLS_AND_PUNCTUATION = 48;
    public static var HIRAGANA = 49;
    public static var KATAKANA = 50;
    public static var BOPOMOFO = 51;
    public static var HANGUL_COMPATIBILITY_JAMO = 52;
    public static var ENCLOSED_CJK_LETTERS_AND_MONTHS = 54;
    public static var CJK_COMPATIBILITY = 55;
    public static var HANGUL_SYLLABLES = 56;
    public static var NON_PLANE_0 = 57;
    public static var CJK_UNIFIED_IDEOGRAPHS = 59;
    public static var PRIVATE_USE_AREA = 60;
    public static var CJK_COMPATIBILITY_IDEOGRAPHS = 61;
    public static var ALPHABETIC_PRESENTATION_FORMS = 62;
    public static var ARABIC_PRESENTATION_FORMS_A = 63;
    public static var COMBINING_HALF_MARKS = 64;
    public static var CJK_COMPATIBILITY_FORMS = 65;
    public static var SMALL_FORM_VARIANTS = 66;
    public static var ARABIC_PRESENTATION_FORMS_B = 67;
    public static var HALFWIDTH_AND_FULLWIDTH_FORMS = 68;
    public static var SPECIALS = 69;
    public static var TIBETAN = 70;
    public static var SYRIAC = 71;
    public static var THAANA = 72;
    public static var SINHALA = 73;
    public static var MYANMAR = 74;
    public static var ETHIOPIC = 75;
    public static var CHEROKEE = 76;
    public static var UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS = 77;
    public static var OGHAM = 78;
    public static var RUNIC = 79;
    public static var KHMER = 80;
    public static var MONGOLIAN = 81;
    public static var BRAILLE_PATTERNS = 82;
    public static var YI_SYLLABLES = 83;
    public static var TAGALOG = 84;
    public static var OLD_ITALIC = 85;
    public static var GOTHIC = 86;
    public static var DESERET = 87;
    public static var BYZANTINE_MUSICAL_SYMBOLS = 88;
    public static var MATHEMATICAL_ALPHANUMERIC_SYMBOLS = 89;
    public static var PRIVATE_USE = 90;
    public static var VARIATION_SELECTORS = 91;
    public static var TAGS = 92;

    private var from:Int;
    private var to:Int;
    private static var ranges:IntMap<UnicodeRange>;

    public function new(from:Int, to:Int) {
        this.from = from;
        this.to = to;
    }

    public static function init() {
        ranges = new IntMap<UnicodeRange>();
        ranges.set(UnicodeRange.BASIC_LATIN, new UnicodeRange(0x0000, 0x007F));
        ranges.set(UnicodeRange.LATIN_1_SUPPLEMENT, new UnicodeRange(0x0080, 0x00FF));
        ranges.set(UnicodeRange.LATIN_EXTENDED_A, new UnicodeRange(0x0100, 0x017F));
        ranges.set(UnicodeRange.LATIN_EXTENDED_B, new UnicodeRange(0x0180, 0x024F));
        ranges.set(UnicodeRange.IPA_EXTENSIONS, new UnicodeRange(0x0250, 0x02AF));
        ranges.set(UnicodeRange.SPACING_MODIFIER_LETTERS, new UnicodeRange(0x02B0, 0x02FF));
        ranges.set(UnicodeRange.COMBINING_DIACRITICAL_MARKS, new UnicodeRange(0x0300, 0x036F));
        ranges.set(UnicodeRange.GREEK_AND_COPTIC, new UnicodeRange(0x0370, 0x03FF));
        ranges.set(UnicodeRange.CYRILLIC, new UnicodeRange(0x0400, 0x04FF));
        ranges.set(UnicodeRange.CYRILLIC_SUPPLEMENTARY, new UnicodeRange(0x0500, 0x052F));
        ranges.set(UnicodeRange.ARMENIAN, new UnicodeRange(0x0530, 0x058F));
        ranges.set(UnicodeRange.HEBREW, new UnicodeRange(0x0590, 0x05FF));
        ranges.set(UnicodeRange.ARABIC, new UnicodeRange(0x0600, 0x06FF));
        ranges.set(UnicodeRange.SYRIAC, new UnicodeRange(0x0700, 0x074F));
        ranges.set(UnicodeRange.THAANA, new UnicodeRange(0x0780, 0x07BF));
        ranges.set(UnicodeRange.DEVANAGARI, new UnicodeRange(0x0900, 0x097F));
        ranges.set(UnicodeRange.BENGALI, new UnicodeRange(0x0980, 0x09FF));
        ranges.set(UnicodeRange.GURMUKHI, new UnicodeRange(0x0A00, 0x0A7F));
        ranges.set(UnicodeRange.GUJARATI, new UnicodeRange(0x0A80, 0x0AFF));
        ranges.set(UnicodeRange.ORIYA, new UnicodeRange(0x0B00, 0x0B7F));
        ranges.set(UnicodeRange.TAMIL, new UnicodeRange(0x0B80, 0x0BFF));
        ranges.set(UnicodeRange.TELUGU, new UnicodeRange(0x0C00, 0x0C7F));
        ranges.set(UnicodeRange.KANNADA, new UnicodeRange(0x0C80, 0x0CFF));
        ranges.set(UnicodeRange.MALAYALAM, new UnicodeRange(0x0D00, 0x0D7F));
        ranges.set(UnicodeRange.SINHALA, new UnicodeRange(0x0D80, 0x0DFF));
        ranges.set(UnicodeRange.THAI, new UnicodeRange(0x0E00, 0x0E7F));
        ranges.set(UnicodeRange.LAO, new UnicodeRange(0x0E80, 0x0EFF));
        ranges.set(UnicodeRange.TIBETAN, new UnicodeRange(0x0F00, 0x0FFF));
        ranges.set(UnicodeRange.MYANMAR, new UnicodeRange(0x1000, 0x109F));
        ranges.set(UnicodeRange.GEORGIAN, new UnicodeRange(0x10A0, 0x10FF));
        ranges.set(UnicodeRange.HANGUL_JAMO, new UnicodeRange(0x1100, 0x11FF));
        ranges.set(UnicodeRange.ETHIOPIC, new UnicodeRange(0x1200, 0x139F));
        ranges.set(UnicodeRange.CHEROKEE, new UnicodeRange(0x13A0, 0x13FF));
        ranges.set(UnicodeRange.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS, new UnicodeRange(0x1400, 0x167F));
        ranges.set(UnicodeRange.OGHAM, new UnicodeRange(0x1680, 0x169F));
        ranges.set(UnicodeRange.RUNIC, new UnicodeRange(0x16A0, 0x16FF));
        ranges.set(UnicodeRange.TAGALOG, new UnicodeRange(0x1700, 0x171F));
        ranges.set(UnicodeRange.KHMER, new UnicodeRange(0x1780, 0x17FF));
        ranges.set(UnicodeRange.MONGOLIAN, new UnicodeRange(0x1800, 0x18AF));
        ranges.set(UnicodeRange.COMBINING_DIACRITICAL_MARKS, new UnicodeRange(0x1DC0, 0x1DFF));
        ranges.set(UnicodeRange.LATIN_EXTENDED_ADDITIONAL, new UnicodeRange(0x1E00, 0x1EFF));
        ranges.set(UnicodeRange.GREEK_EXTENDED, new UnicodeRange(0x1F00, 0x1FFF));
        ranges.set(UnicodeRange.GENERAL_PUNCTUATION, new UnicodeRange(0x2000, 0x206F));
        ranges.set(UnicodeRange.SUPERSCRIPTS_AND_SUBSCRIPTS, new UnicodeRange(0x2070, 0x209F));
        ranges.set(UnicodeRange.CURRENCY_SYMBOLS, new UnicodeRange(0x20A0, 0x20CF));
        ranges.set(UnicodeRange.COMBINING_DIACRITICAL_MARKS_FOR_SYMBOLS, new UnicodeRange(0x20D0, 0x20FF));
        ranges.set(UnicodeRange.LETTERLIKE_SYMBOLS, new UnicodeRange(0x2100, 0x214F));
        ranges.set(UnicodeRange.NUMBER_FORMS, new UnicodeRange(0x2150, 0x218F));
        ranges.set(UnicodeRange.ARROWS, new UnicodeRange(0x2190, 0x21FF));
        ranges.set(UnicodeRange.MATHEMATICAL_OPERATORS, new UnicodeRange(0x2200, 0x22FF));
        ranges.set(UnicodeRange.MISCELLANEOUS_TECHNICAL, new UnicodeRange(0x2300, 0x23FF));
        ranges.set(UnicodeRange.CONTROL_PICTURES, new UnicodeRange(0x2400, 0x243F));
        ranges.set(UnicodeRange.OPTICAL_CHARACTER_RECOGNITION, new UnicodeRange(0x2440, 0x245F));
        ranges.set(UnicodeRange.ENCLOSED_ALPHANUMERICS, new UnicodeRange(0x2460, 0x24FF));
        ranges.set(UnicodeRange.BOX_DRAWING, new UnicodeRange(0x2500, 0x27F));
        ranges.set(UnicodeRange.BLOCK_ELEMENTS, new UnicodeRange(0x2580, 0x259F));
        ranges.set(UnicodeRange.GEOMETRIC_SHAPES, new UnicodeRange(0x25A0, 0x25FF));
        ranges.set(UnicodeRange.MISCELLANEOUS_SYMBOLS, new UnicodeRange(0x2600, 0x26FF));
        ranges.set(UnicodeRange.DINGBATS, new UnicodeRange(0x2700, 0x27BF));
        ranges.set(UnicodeRange.BRAILLE_PATTERNS, new UnicodeRange(0x2800, 0x28FF));
        ranges.set(UnicodeRange.CJK_SYMBOLS_AND_PUNCTUATION, new UnicodeRange(0x3000, 0x303F));
        ranges.set(UnicodeRange.HIRAGANA, new UnicodeRange(0x3040, 0x309F));
        ranges.set(UnicodeRange.KATAKANA, new UnicodeRange(0x30A0, 0x30FF));
        ranges.set(UnicodeRange.BOPOMOFO, new UnicodeRange(0x3100, 0x312F));
        ranges.set(UnicodeRange.HANGUL_COMPATIBILITY_JAMO, new UnicodeRange(0x3130, 0x318F));
        ranges.set(UnicodeRange.ENCLOSED_CJK_LETTERS_AND_MONTHS, new UnicodeRange(0x3200, 0x32FF));
        ranges.set(UnicodeRange.CJK_COMPATIBILITY_FORMS, new UnicodeRange(0xFE30, 0xFE4F));
        ranges.set(UnicodeRange.CJK_UNIFIED_IDEOGRAPHS, new UnicodeRange(0x4E00, 0x9FFF));
        ranges.set(UnicodeRange.YI_SYLLABLES, new UnicodeRange(0xA000, 0xA48F));
        ranges.set(UnicodeRange.HANGUL_SYLLABLES, new UnicodeRange(0xAC00, 0xD7AF));
        ranges.set(UnicodeRange.PRIVATE_USE_AREA, new UnicodeRange(0xE000, 0xF8FF));
        ranges.set(UnicodeRange.CJK_COMPATIBILITY_IDEOGRAPHS, new UnicodeRange(0xF900, 0xFAFF));
        ranges.set(UnicodeRange.ALPHABETIC_PRESENTATION_FORMS, new UnicodeRange(0xFB00, 0xFB4F));
        ranges.set(UnicodeRange.ARABIC_PRESENTATION_FORMS_A, new UnicodeRange(0xFB50, 0xFDFF));
        ranges.set(UnicodeRange.VARIATION_SELECTORS, new UnicodeRange(0xFE00, 0xFE0F));
        ranges.set(UnicodeRange.COMBINING_HALF_MARKS, new UnicodeRange(0xFE20, 0xFE2F));
        ranges.set(UnicodeRange.SMALL_FORM_VARIANTS, new UnicodeRange(0xFE50, 0xFE6F));
        ranges.set(UnicodeRange.ARABIC_PRESENTATION_FORMS_B, new UnicodeRange(0xFE70, 0xFEFF));
        ranges.set(UnicodeRange.HALFWIDTH_AND_FULLWIDTH_FORMS, new UnicodeRange(0xFF00, 0xFFEF));
        ranges.set(UnicodeRange.SPECIALS, new UnicodeRange(0xFFF0, 0xFFFF));
        ranges.set(UnicodeRange.OLD_ITALIC, new UnicodeRange(0x10300, 0x1032F));
        ranges.set(UnicodeRange.GOTHIC, new UnicodeRange(0x10330, 0x1034F));
        ranges.set(UnicodeRange.DESERET, new UnicodeRange(0x10400, 0x1044F));
        ranges.set(UnicodeRange.BYZANTINE_MUSICAL_SYMBOLS, new UnicodeRange(0x1D000, 0x1D0FF));
        ranges.set(UnicodeRange.MATHEMATICAL_ALPHANUMERIC_SYMBOLS, new UnicodeRange(0x1D400, 0x1D7FF));
        ranges.set(UnicodeRange.TAGS, new UnicodeRange(0xE0000, 0xE007F));
    }

    public static function getForCodepoint(codepoint:Int):UnicodeRange {
        if (ranges == null) {
            init();
        }
        for (key in ranges.keys()) {
            var range = ranges.get(key);
            if (codepoint >= range.from && codepoint <= range.to) {
                return range;
            }
        }
        return null;
    }

    public static function getKeyForCodepoint(codepoint:Int):Int {
        if (ranges == null) {
            init();
        }
        for (key in ranges.keys()) {
            var range = ranges.get(key);
            if (codepoint >= range.from && codepoint <= range.to) {
                return key;
            }
        }
        return -1;
    }

}
