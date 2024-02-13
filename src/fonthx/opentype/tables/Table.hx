package fonthx.opentype.tables;

import fonthx.svg.SVG;
import fonthx.opentype.writers.ITrueTypeWriter;

class Table {

    public static var SFNT = "sfnt";
    public static var TDIR = "tdir";
    public static var CMAP = "cmap";
    public static var HEAD = "head";
    public static var HHEA = "hhea";
    public static var HMTX = "hmtx";
    public static var MAXP = "maxp";
    public static var NAME = "name";
    public static var OS2 = "OS/2";
    public static var POST = "post";
    public static var GLYF = "glyf";
    public static var LOCA = "loca";
    public static var CFF = "CFF ";
    public static var SVG = "SVG ";
    public static var COLR = "COLR";
    public static var CPAL = "CPAL";
    public static var KERN = "kern";
    public static var GPOS = "GPOS";
    public static var GSUB = "GSUB";
    public static var DSIG = "DSIG";

    /**
    * @see https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6.html
    * With the exception of the font directory which must appear first in the font file, the tables that make up a font
    * can appear in any order.
    *
    * @see https://docs.microsoft.com/en-us/typography/opentype/spec/recom
    * OpenType fonts with TrueType outlines are more efficient in the Windows operating system when the tables are
    * ordered as follows (from first to last): head, hhea, maxp, OS/2, hmtx, LTSH, VDMX, hdmx, cmap, fpgm, prep, cvt,
    * loca, glyf, kern, name, post, gasp, PCLT, DSIG
    */
    // "sfnt", "tdir",

    public static var compileOrder = [HEAD, HHEA, MAXP, OS2, HMTX, CMAP, GLYF, LOCA,
        CFF, KERN, NAME, POST, GPOS, GSUB, SVG, DSIG, CPAL];

    public static var optimalOrder = [HEAD, HHEA, MAXP, OS2, HMTX, CMAP, LOCA, GLYF,
        CFF, KERN, NAME, POST, GPOS, GSUB, SVG, DSIG, CPAL];

    public var tag:String;
    public var offset:Int;
    public var length:Int;
    public var checksum:Int;

    public function new(tag:String = "") {
        this.tag = tag;
        offset = 0;
        length = 0;
        checksum = 0;
    }

    public function write(tt:ITrueTypeWriter) {
        // default implementation does nothing
    }


}