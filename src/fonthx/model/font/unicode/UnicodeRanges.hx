package fonthx.model.font.unicode;

import haxe.ds.IntMap;

// todo hmmm
class UnicodeRanges {

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
    private static var ranges:IntMap<UnicodeRanges>;

    public function new(from:Int, to:Int) {
        this.from = from;
        this.to = to;
    }

    public static function init() {
        ranges = new IntMap<UnicodeRanges>();
        ranges.set(UnicodeRanges.BASIC_LATIN, new UnicodeRanges(0x0000, 0x007F));
        ranges.set(UnicodeRanges.LATIN_1_SUPPLEMENT, new UnicodeRanges(0x0080, 0x00FF));
        ranges.set(UnicodeRanges.LATIN_EXTENDED_A, new UnicodeRanges(0x0100, 0x017F));
        ranges.set(UnicodeRanges.LATIN_EXTENDED_B, new UnicodeRanges(0x0180, 0x024F));
        ranges.set(UnicodeRanges.IPA_EXTENSIONS, new UnicodeRanges(0x0250, 0x02AF));
        ranges.set(UnicodeRanges.SPACING_MODIFIER_LETTERS, new UnicodeRanges(0x02B0, 0x02FF));
        ranges.set(UnicodeRanges.COMBINING_DIACRITICAL_MARKS, new UnicodeRanges(0x0300, 0x036F));
        ranges.set(UnicodeRanges.GREEK_AND_COPTIC, new UnicodeRanges(0x0370, 0x03FF));
        ranges.set(UnicodeRanges.CYRILLIC, new UnicodeRanges(0x0400, 0x04FF));
        ranges.set(UnicodeRanges.CYRILLIC_SUPPLEMENTARY, new UnicodeRanges(0x0500, 0x052F));
        ranges.set(UnicodeRanges.ARMENIAN, new UnicodeRanges(0x0530, 0x058F));
        ranges.set(UnicodeRanges.HEBREW, new UnicodeRanges(0x0590, 0x05FF));
        ranges.set(UnicodeRanges.ARABIC, new UnicodeRanges(0x0600, 0x06FF));
        ranges.set(UnicodeRanges.SYRIAC, new UnicodeRanges(0x0700, 0x074F));
        ranges.set(UnicodeRanges.THAANA, new UnicodeRanges(0x0780, 0x07BF));
        ranges.set(UnicodeRanges.DEVANAGARI, new UnicodeRanges(0x0900, 0x097F));
        ranges.set(UnicodeRanges.BENGALI, new UnicodeRanges(0x0980, 0x09FF));
        ranges.set(UnicodeRanges.GURMUKHI, new UnicodeRanges(0x0A00, 0x0A7F));
        ranges.set(UnicodeRanges.GUJARATI, new UnicodeRanges(0x0A80, 0x0AFF));
        ranges.set(UnicodeRanges.ORIYA, new UnicodeRanges(0x0B00, 0x0B7F));
        ranges.set(UnicodeRanges.TAMIL, new UnicodeRanges(0x0B80, 0x0BFF));
        ranges.set(UnicodeRanges.TELUGU, new UnicodeRanges(0x0C00, 0x0C7F));
        ranges.set(UnicodeRanges.KANNADA, new UnicodeRanges(0x0C80, 0x0CFF));
        ranges.set(UnicodeRanges.MALAYALAM, new UnicodeRanges(0x0D00, 0x0D7F));
        ranges.set(UnicodeRanges.SINHALA, new UnicodeRanges(0x0D80, 0x0DFF));
        ranges.set(UnicodeRanges.THAI, new UnicodeRanges(0x0E00, 0x0E7F));
        ranges.set(UnicodeRanges.LAO, new UnicodeRanges(0x0E80, 0x0EFF));
        ranges.set(UnicodeRanges.TIBETAN, new UnicodeRanges(0x0F00, 0x0FFF));
        ranges.set(UnicodeRanges.MYANMAR, new UnicodeRanges(0x1000, 0x109F));
        ranges.set(UnicodeRanges.GEORGIAN, new UnicodeRanges(0x10A0, 0x10FF));
        ranges.set(UnicodeRanges.HANGUL_JAMO, new UnicodeRanges(0x1100, 0x11FF));
        ranges.set(UnicodeRanges.ETHIOPIC, new UnicodeRanges(0x1200, 0x139F));
        ranges.set(UnicodeRanges.CHEROKEE, new UnicodeRanges(0x13A0, 0x13FF));
        ranges.set(UnicodeRanges.UNIFIED_CANADIAN_ABORIGINAL_SYLLABICS, new UnicodeRanges(0x1400, 0x167F));
        ranges.set(UnicodeRanges.OGHAM, new UnicodeRanges(0x1680, 0x169F));
        ranges.set(UnicodeRanges.RUNIC, new UnicodeRanges(0x16A0, 0x16FF));
        ranges.set(UnicodeRanges.TAGALOG, new UnicodeRanges(0x1700, 0x171F));
        ranges.set(UnicodeRanges.KHMER, new UnicodeRanges(0x1780, 0x17FF));
        ranges.set(UnicodeRanges.MONGOLIAN, new UnicodeRanges(0x1800, 0x18AF));
        ranges.set(UnicodeRanges.COMBINING_DIACRITICAL_MARKS, new UnicodeRanges(0x1DC0, 0x1DFF));
        ranges.set(UnicodeRanges.LATIN_EXTENDED_ADDITIONAL, new UnicodeRanges(0x1E00, 0x1EFF));
        ranges.set(UnicodeRanges.GREEK_EXTENDED, new UnicodeRanges(0x1F00, 0x1FFF));
        ranges.set(UnicodeRanges.GENERAL_PUNCTUATION, new UnicodeRanges(0x2000, 0x206F));
        ranges.set(UnicodeRanges.SUPERSCRIPTS_AND_SUBSCRIPTS, new UnicodeRanges(0x2070, 0x209F));
        ranges.set(UnicodeRanges.CURRENCY_SYMBOLS, new UnicodeRanges(0x20A0, 0x20CF));
        ranges.set(UnicodeRanges.COMBINING_DIACRITICAL_MARKS_FOR_SYMBOLS, new UnicodeRanges(0x20D0, 0x20FF));
        ranges.set(UnicodeRanges.LETTERLIKE_SYMBOLS, new UnicodeRanges(0x2100, 0x214F));
        ranges.set(UnicodeRanges.NUMBER_FORMS, new UnicodeRanges(0x2150, 0x218F));
        ranges.set(UnicodeRanges.ARROWS, new UnicodeRanges(0x2190, 0x21FF));
        ranges.set(UnicodeRanges.MATHEMATICAL_OPERATORS, new UnicodeRanges(0x2200, 0x22FF));
        ranges.set(UnicodeRanges.MISCELLANEOUS_TECHNICAL, new UnicodeRanges(0x2300, 0x23FF));
        ranges.set(UnicodeRanges.CONTROL_PICTURES, new UnicodeRanges(0x2400, 0x243F));
        ranges.set(UnicodeRanges.OPTICAL_CHARACTER_RECOGNITION, new UnicodeRanges(0x2440, 0x245F));
        ranges.set(UnicodeRanges.ENCLOSED_ALPHANUMERICS, new UnicodeRanges(0x2460, 0x24FF));
        ranges.set(UnicodeRanges.BOX_DRAWING, new UnicodeRanges(0x2500, 0x27F));
        ranges.set(UnicodeRanges.BLOCK_ELEMENTS, new UnicodeRanges(0x2580, 0x259F));
        ranges.set(UnicodeRanges.GEOMETRIC_SHAPES, new UnicodeRanges(0x25A0, 0x25FF));
        ranges.set(UnicodeRanges.MISCELLANEOUS_SYMBOLS, new UnicodeRanges(0x2600, 0x26FF));
        ranges.set(UnicodeRanges.DINGBATS, new UnicodeRanges(0x2700, 0x27BF));
        ranges.set(UnicodeRanges.BRAILLE_PATTERNS, new UnicodeRanges(0x2800, 0x28FF));
        ranges.set(UnicodeRanges.CJK_SYMBOLS_AND_PUNCTUATION, new UnicodeRanges(0x3000, 0x303F));
        ranges.set(UnicodeRanges.HIRAGANA, new UnicodeRanges(0x3040, 0x309F));
        ranges.set(UnicodeRanges.KATAKANA, new UnicodeRanges(0x30A0, 0x30FF));
        ranges.set(UnicodeRanges.BOPOMOFO, new UnicodeRanges(0x3100, 0x312F));
        ranges.set(UnicodeRanges.HANGUL_COMPATIBILITY_JAMO, new UnicodeRanges(0x3130, 0x318F));
        ranges.set(UnicodeRanges.ENCLOSED_CJK_LETTERS_AND_MONTHS, new UnicodeRanges(0x3200, 0x32FF));
        ranges.set(UnicodeRanges.CJK_COMPATIBILITY_FORMS, new UnicodeRanges(0xFE30, 0xFE4F));
        ranges.set(UnicodeRanges.CJK_UNIFIED_IDEOGRAPHS, new UnicodeRanges(0x4E00, 0x9FFF));
        ranges.set(UnicodeRanges.YI_SYLLABLES, new UnicodeRanges(0xA000, 0xA48F));
        ranges.set(UnicodeRanges.HANGUL_SYLLABLES, new UnicodeRanges(0xAC00, 0xD7AF));
        ranges.set(UnicodeRanges.PRIVATE_USE_AREA, new UnicodeRanges(0xE000, 0xF8FF));
        ranges.set(UnicodeRanges.CJK_COMPATIBILITY_IDEOGRAPHS, new UnicodeRanges(0xF900, 0xFAFF));
        ranges.set(UnicodeRanges.ALPHABETIC_PRESENTATION_FORMS, new UnicodeRanges(0xFB00, 0xFB4F));
        ranges.set(UnicodeRanges.ARABIC_PRESENTATION_FORMS_A, new UnicodeRanges(0xFB50, 0xFDFF));
        ranges.set(UnicodeRanges.VARIATION_SELECTORS, new UnicodeRanges(0xFE00, 0xFE0F));
        ranges.set(UnicodeRanges.COMBINING_HALF_MARKS, new UnicodeRanges(0xFE20, 0xFE2F));
        ranges.set(UnicodeRanges.SMALL_FORM_VARIANTS, new UnicodeRanges(0xFE50, 0xFE6F));
        ranges.set(UnicodeRanges.ARABIC_PRESENTATION_FORMS_B, new UnicodeRanges(0xFE70, 0xFEFF));
        ranges.set(UnicodeRanges.HALFWIDTH_AND_FULLWIDTH_FORMS, new UnicodeRanges(0xFF00, 0xFFEF));
        ranges.set(UnicodeRanges.SPECIALS, new UnicodeRanges(0xFFF0, 0xFFFF));
        ranges.set(UnicodeRanges.OLD_ITALIC, new UnicodeRanges(0x10300, 0x1032F));
        ranges.set(UnicodeRanges.GOTHIC, new UnicodeRanges(0x10330, 0x1034F));
        ranges.set(UnicodeRanges.DESERET, new UnicodeRanges(0x10400, 0x1044F));
        ranges.set(UnicodeRanges.BYZANTINE_MUSICAL_SYMBOLS, new UnicodeRanges(0x1D000, 0x1D0FF));
        ranges.set(UnicodeRanges.MATHEMATICAL_ALPHANUMERIC_SYMBOLS, new UnicodeRanges(0x1D400, 0x1D7FF));
        ranges.set(UnicodeRanges.TAGS, new UnicodeRanges(0xE0000, 0xE007F));
    }

    public static function getForCodepoint(codepoint:Int):UnicodeRanges {
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
