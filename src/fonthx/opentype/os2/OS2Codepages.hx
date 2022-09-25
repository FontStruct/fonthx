package fonthx.opentype.os2;

using Lambda;

class OS2Codepages {

    public static var codepages:Array<OS2Codepage> = new Array();

    public static function getFunctionalCodepages(codepoints:Array<Int>, threshold = 0.5) {
        if (codepages.length == 0) {
            OS2CompiledCodepages.init();
        }
        var functionalBits = new Array<Int>();
        for (page in codepages) {
            if (codepoints.length / page.numCodepoints < threshold) {
                continue; // no chance!!
            }
            if (page.getCoverage(codepoints) > threshold) {
                functionalBits.push(page.bit);
            }
        }
        return functionalBits;
    }



}
