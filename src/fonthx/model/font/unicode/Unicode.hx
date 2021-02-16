package fonthx.model.font.unicode;

typedef Blocks = {
    var start:Int;
    var end:Int;
    var name:String;
}

class Unicode {

    /*
	Some blocks not yet included (todo FontStruct-specific issue)
	CJK Compatibility Ideographs, 511
	Unified Canadian Aboriginal Syllabics, 639
	CJK Unified Ideographs Extension A, 6591
	CJK Unified Ideographs, 20991
	Yi Syllables, 1167
	Hangul Syllables, 11183
	High Surrogates, 895
	Low Surrogates, 1023
	Private Use Area, 6399
	Arabic Presentation Forms-A, 687
	Cuneiform, 1023
	Egyptian Hieroglyphs, 1071
	Bamum Supplement, 575
	Mathematical Alphanumeric Symbols, 1023
	Miscellaneous Symbols And Pictographs, 767
	CJK Unified Ideographs Extension B, 42719
	CJK Unified Ideographs Extension C, 4159
	CJK Compatibility Ideographs Supplement, 543
	Supplementary Private Use Area-A, 65535 (reduce)
	Supplementary Private Use Area-B, 65535 (reduce)
	*/

    public static var whitespace:Array<Int> = [0x20, 0xA0, 0x1160, 0x115F, 0x3000];

    public static function fromCharCode(c:Int):String {
        // removed an old abstraction here – maybe it will return!
        return String.fromCharCode(c);
    }

    public static var blocks:Array<Blocks> = [
        {
            start:0x0020,
            end:0x007F,
            name:"Basic Latin"

        }, {
            start:0x00A0,
            end:0x00FF,
            name:"Latin-1 Supplement"

        }, {
            start:0x0100,
            end:0x017F,
            name:"Latin Extended-A"

        }, {
            start:0x0180,
            end:0x024F,
            name:"Latin Extended-B"

        }, {
            start:0x0250,
            end:0x02AF,
            name:"IPA Extensions"

        }, {
            start:0x02B0,
            end:0x02FF,
            name:"Spacing Modifier Letters"

        }, {
            start:0x0300,
            end:0x036F,
            name:"Combining Diacritical Marks"

        }, {
            start:0x0370,
            end:0x03FF,
            name:"Greek and Coptic"

        }, {
            start:0x0400,
            end:0x04FF,
            name:"Cyrillic"

        }, {
            start:0x0500,
            end:0x052F,
            name:"Cyrillic Supplement"

        }, {
            start:0x0530,
            end:0x058F,
            name:"Armenian"

        }, {
            start:0x0590,
            end:0x05FF,
            name:"Hebrew"
        }, {
            start:0x0600,
            end:0x06FF,
            name:"Arabic"
        }, {
            start:0x0700,
            end:0x074F,
            name:"Syriac"
        }, {
            start:0x0750,
            end:0x077F,
            name:"Arabic Supplement"
        }, {
            start:0x0780,
            end:0x07BF,
            name:"Thaana"
        }, {
            start:0x07C0,
            end:0x07FF,
            name:"NKo"
        }, {
            start:0x0800,
            end:0x083F,
            name:"Samaritan"
        }, {
            start:0x0840,
            end:0x085F,
            name:"Mandaic"
        }, {
            start:0x0900,
            end:0x097F,
            name:"Devanagari"
        }, {
            start:0x0980,
            end:0x09FF,
            name:"Bengali"
        }, {
            start:0x0A00,
            end:0x0A7F,
            name:"Gurmukhi"
        }, {
            start:0x0A80,
            end:0x0AFF,
            name:"Gujarati"
        }, {
            start:0x0B00,
            end:0x0B7F,
            name:"Oriya"
        }, {
            start:0x0B80,
            end:0x0BFF,
            name:"Tamil"
        }, {
            start:0x0C00,
            end:0x0C7F,
            name:"Telugu"
        }, {
            start:0x0C80,
            end:0x0CFF,
            name:"Kannada"
        }, {
            start:0x0D00,
            end:0x0D7F,
            name:"Malayalam"
        }, {
            start:0x0D80,
            end:0x0DFF,
            name:"Sinhala"
        }, {
            start:0x0E00,
            end:0x0E7F,
            name:"Thai"
        }, {
            start:0x0E80,
            end:0x0EFF,
            name:"Lao"
        }, {
            start:0x0F00,
            end:0x0FFF,
            name:"Tibetan"
        }, {
            start:0x1000,
            end:0x109F,
            name:"Myanmar"
        }, {
            start:0x10A0,
            end:0x10FF,
            name:"Georgian"
        }, {
            start:0x1100,
            end:0x11FF,
            name:"Hangul Jamo"
        }, {
            start:0x1200,
            end:0x137F,
            name:"Ethiopic"
        }, {
            start:0x1380,
            end:0x139F,
            name:"Ethiopic Supplement"
        }, {
            start:0x13A0,
            end:0x13FF,
            name:"Cherokee"
        }, {
            start:0x1400,
            end:0x167F,
            name:"Unified Canadian Aboriginal Syllabics"
        },
        {
            start:0x1680,
            end:0x169F,
            name:"Ogham"
        }, {
            start:0x16A0,
            end:0x16FF,
            name:"Runic"
        }, {
            start:0x1700,
            end:0x171F,
            name:"Tagalog"
        }, {
            start:0x1720,
            end:0x173F,
            name:"Hanunoo"
        }, {
            start:0x1740,
            end:0x175F,
            name:"Buhid"
        }, {
            start:0x1760,
            end:0x177F,
            name:"Tagbanwa"
        }, {
            start:0x1780,
            end:0x17FF,
            name:"Khmer"
        }, {
            start:0x1800,
            end:0x18AF,
            name:"Mongolian"
        }, {
            start:0x18B0,
            end:0x18FF,
            name:"Unified Canadian Aboriginal Syllabics Extended"
        }, {
            start:0x1900,
            end:0x194F,
            name:"Limbu"
        }, {
            start:0x1950,
            end:0x197F,
            name:"Tai Le"
        }, {
            start:0x1980,
            end:0x19DF,
            name:"New Tai Lue"
        }, {
            start:0x19E0,
            end:0x19FF,
            name:"Khmer Symbols"
        }, {
            start:0x1A00,
            end:0x1A1F,
            name:"Buginese"
        }, {
            start:0x1A20,
            end:0x1AAF,
            name:"Tai Tham"
        }, {
            start:0x1B00,
            end:0x1B7F,
            name:"Balinese"
        }, {
            start:0x1B80,
            end:0x1BBF,
            name:"Sundanese"
        }, {
            start:0x1BC0,
            end:0x1BFF,
            name:"Batak"
        }, {
            start:0x1C00,
            end:0x1C4F,
            name:"Lepcha"
        }, {
            start:0x1C50,
            end:0x1C7F,
            name:"Ol Chiki"
        }, {
            start:0x1CD0,
            end:0x1CFF,
            name:"Vedic Extensions"
        }, {
            start:0x1D00,
            end:0x1D7F,
            name:"Phonetic Extensions"
        }, {
            start:0x1D80,
            end:0x1DBF,
            name:"Phonetic Extensions Supplement"
        }, {
            start:0x1DC0,
            end:0x1DFF,
            name:"Combining Diacritical Marks Supplement"
        }, {
            start:0x1E00,
            end:0x1EFF,
            name:"Latin Extended Additional"
        }, {
            start:0x1F00,
            end:0x1FFF,
            name:"Greek Extended"
        }, {
            start:0x2000,
            end:0x206F,
            name:"General Punctuation"
        }, {
            start:0x2070,
            end:0x209F,
            name:"Superscripts and Subscripts"
        }, {
            start:0x20A0,
            end:0x20CF,
            name:"Currency Symbols"
        }, {
            start:0x20D0,
            end:0x20FF,
            name:"Combining Diacritical Marks for Symbols"
        }, {
            start:0x2100,
            end:0x214F,
            name:"Letterlike Symbols"
        }, {
            start:0x2150,
            end:0x218F,
            name:"Number Forms"
        }, {
            start:0x2190,
            end:0x21FF,
            name:"Arrows"
        }, {
            start:0x2200,
            end:0x22FF,
            name:"Mathematical Operators"
        }, {
            start:0x2300,
            end:0x23FF,
            name:"Miscellaneous Technical"
        }, {
            start:0x2400,
            end:0x243F,
            name:"Control Pictures"
        }, {
            start:0x2440,
            end:0x245F,
            name:"Optical Character Recognition"
        }, {
            start:0x2460,
            end:0x24FF,
            name:"Enclosed Alphanumerics"
        }, {
            start:0x2500,
            end:0x257F,
            name:"Box Drawing"
        }, {
            start:0x2580,
            end:0x259F,
            name:"Block Elements"
        }, {
            start:0x25A0,
            end:0x25FF,
            name:"Geometric Shapes"
        }, {
            start:0x2600,
            end:0x26FF,
            name:"Miscellaneous Symbols"
        }, {
            start:0x2700,
            end:0x27BF,
            name:"Dingbats"
        }, {
            start:0x27C0,
            end:0x27EF,
            name:"Miscellaneous Mathematical Symbols-A"
        }, {
            start:0x27F0,
            end:0x27FF,
            name:"Supplemental Arrows-A"
        }, {
            start:0x2800,
            end:0x28FF,
            name:"Braille Patterns"
        }, {
            start:0x2900,
            end:0x297F,
            name:"Supplemental Arrows-B"
        }, {
            start:0x2980,
            end:0x29FF,
            name:"Miscellaneous Mathematical Symbols-B"
        }, {
            start:0x2A00,
            end:0x2AFF,
            name:"Supplemental Mathematical Operators"
        }, {
            start:0x2B00,
            end:0x2BFF,
            name:"Miscellaneous Symbols and Arrows"
        }, {
            start:0x2C00,
            end:0x2C5F,
            name:"Glagolitic"
        }, {
            start:0x2C60,
            end:0x2C7F,
            name:"Latin Extended-C"
        }, {
            start:0x2C80,
            end:0x2CFF,
            name:"Coptic"
        }, {
            start:0x2D00,
            end:0x2D2F,
            name:"Georgian Supplement"
        }, {
            start:0x2D30,
            end:0x2D7F,
            name:"Tifinagh"
        }, {
            start:0x2D80,
            end:0x2DDF,
            name:"Ethiopic Extended"
        }, {
            start:0x2DE0,
            end:0x2DFF,
            name:"Cyrillic Extended-A"
        }, {
            start:0x2E00,
            end:0x2E7F,
            name:"Supplemental Punctuation"
        }, {
            start:0x2E80,
            end:0x2EFF,
            name:"CJK Radicals Supplement"
        }, {
            start:0x2F00,
            end:0x2FDF,
            name:"Kangxi Radicals"
        }, {
            start:0x2FF0,
            end:0x2FFF,
            name:"Ideographic Description Characters"
        }, {
            start:0x3000,
            end:0x303F,
            name:"CJK Symbols and Punctuation"
        }, {
            start:0x3040,
            end:0x309F,
            name:"Hiragana"
        }, {
            start:0x30A0,
            end:0x30FF,
            name:"Katakana"
        }, {
            start:0x3100,
            end:0x312F,
            name:"Bopomofo"
        }, {
            start:0x3130,
            end:0x318F,
            name:"Hangul Compatibility Jamo"
        }, {
            start:0x3190,
            end:0x319F,
            name:"Kanbun"
        }, {
            start:0x31A0,
            end:0x31BF,
            name:"Bopomofo Extended"
        }, {
            start:0x31C0,
            end:0x31EF,
            name:"CJK Strokes"
        }, {
            start:0x31F0,
            end:0x31FF,
            name:"Katakana Phonetic Extensions"
        }, {
            start:0x3200,
            end:0x32FF,
            name:"Enclosed CJK Letters and Months"
        }, {
            start:0x3300,
            end:0x33FF,
            name:"CJK Compatibility"
        },
            //{start:0x3400, end:0x4DBF, name:"CJK Unified Ideographs Extension A"},
        {
            start:0x4DC0,
            end:0x4DFF,
            name:"Yijing Hexagram Symbols"
        },
            //{start:0x4E00, end:0x9FFF, name:"CJK Unified Ideographs"},
            //{start:0xA000, end:0xA48F, name:"Yi Syllables"},
            //{start:0xA490, end:0xA4CF, name:"Yi Radicals"},
        {
            start:0xA4D0,
            end:0xA4FF,
            name:"Lisu"
        }, {
            start:0xA500,
            end:0xA63F,
            name:"Vai"
        }, {
            start:0xA640,
            end:0xA69F,
            name:"Cyrillic Extended-B"
        }, {
            start:0xA6A0,
            end:0xA6FF,
            name:"Bamum"
        }, {
            start:0xA700,
            end:0xA71F,
            name:"Modifier Tone Letters"
        }, {
            start:0xA720,
            end:0xA7FF,
            name:"Latin Extended-D"
        }, {
            start:0xA800,
            end:0xA82F,
            name:"Syloti Nagri"
        }, {
            start:0xA830,
            end:0xA83F,
            name:"Common Indic Number Forms"
        }, {
            start:0xA840,
            end:0xA87F,
            name:"Phags-pa"
        }, {
            start:0xA880,
            end:0xA8DF,
            name:"Saurashtra"
        }, {
            start:0xA8E0,
            end:0xA8FF,
            name:"Devanagari Extended"
        }, {
            start:0xA900,
            end:0xA92F,
            name:"Kayah Li"
        }, {
            start:0xA930,
            end:0xA95F,
            name:"Rejang"
        }, {
            start:0xA960,
            end:0xA97F,
            name:"Hangul Jamo Extended-A"
        }, {
            start:0xA980,
            end:0xA9DF,
            name:"Javanese"
        }, {
            start:0xAA00,
            end:0xAA5F,
            name:"Cham"
        }, {
            start:0xAA60,
            end:0xAA7F,
            name:"Myanmar Extended-A"
        }, {
            start:0xAA80,
            end:0xAADF,
            name:"Tai Viet"
        }, {
            start:0xAB00,
            end:0xAB2F,
            name:"Ethiopic Extended-A"
        }, {
            start:0xABC0,
            end:0xABFF,
            name:"Meetei Mayek"
        },
            //{start:0xAC00, end:0xD7AF, name:"Hangul Syllables"},
        {
            start:0xD7B0,
            end:0xD7FF,
            name:"Hangul Jamo Extended-B"
        },
            //{start:0xD800, end:0xDB7F, name:"High Surrogates"}
        {
            start:0xDB80,
            end:0xDBFF,
            name:"High Private Use Surrogates"
        },
            //{start:0xDC00, end:0xDFFF, name:"Low Surrogates"},
            //{start:0xE000, end:0xF8FF, name:"Private Use Area"},
            //{start:0xF900, end:0xFAFF, name:"CJK Compatibility Ideographs"},
        {
            start:0xFB00,
            end:0xFB4F,
            name:"Alphabetic Presentation Forms"
        },
            //{start:0xFB50, end:0xFDFF, name:"Arabic Presentation Forms-A"}
        {
            start:0xFE00,
            end:0xFE0F,
            name:"Variation Selectors"
        }, {
            start:0xFE10,
            end:0xFE1F,
            name:"Vertical Forms"
        }, {
            start:0xFE20,
            end:0xFE2F,
            name:"Combining Half Marks"
        }, {
            start:0xFE30,
            end:0xFE4F,
            name:"CJK Compatibility Forms"
        }, {
            start:0xFE50,
            end:0xFE6F,
            name:"Small Form Variants"
        }, {
            start:0xFE70,
            end:0xFEFF,
            name:"Arabic Presentation Forms-B"
        }, {
            start:0xFF00,
            end:0xFFEF,
            name:"Halfwidth and Fullwidth Forms"
        }, {
            start:0xFFF0,
            end:0xFFFE,
            name:"Specials"
        }];

}
