package fonthx.opentype;

import fonthx.opentype.constants.MicrosoftLanguages;
import fonthx.opentype.constants.MicrosoftEncoding;
import fonthx.opentype.constants.MacintoshEncoding;
import fonthx.opentype.constants.MacintoshLanguages;
import fonthx.opentype.constants.UnicodeEncoding;
import fonthx.opentype.constants.Platform;
import fonthx.opentype.tables.naming.NamingEncoding;
import haxe.ds.IntMap;

class BuildOptions {

    public var useFixedCoordinatesInCFF:Bool = false;
    public var useSubroutinesInCFF:Bool = false;
    public var includeDeprecatedKERNTable:Bool = false;
    public var includeSVG:Bool = false; // todo general color config
    public var includeCOLR:Bool = false;
    public var sortGlyphs:Bool = true;
    public var namingEncodings:Array<NamingEncoding> = [
        {platformId: Platform.UNICODE /*  0 */, encodingId: UnicodeEncoding.UNICODE_1_0, languageId: 0},
        {platformId: Platform.MACINTOSH /*  1 */, encodingId: MacintoshEncoding.ROMAN, languageId: MacintoshLanguages.ENGLISH},
        {platformId: Platform.MICROSOFT /*  3 */, encodingId: MicrosoftEncoding.UNICODE_BMP_ONLY, languageId: MicrosoftLanguages.ENU}
    ];
    public var extraNamingRecords:IntMap<String>;
    public function new() {
        extraNamingRecords = new IntMap();
    }

}

