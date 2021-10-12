package fonthx.utils.codepagecompiler;
import fonthx.opentype.tables.opentype.lookup.coverage.CoverageRange;
import sys.io.File;
import sys.FileSystem;
import fonthx.opentype.os2.OS2TextFileUtils;

using Lambda;

class CodepageCompiler {

    public static function main() {
        var txt:String = File.getContent('./src/fonthx/utils/codepagecompiler/os2codepages.txt');
        var codeTop:String = '
package fonthx.opentype.os2;

/** File created by CodepageCompiler (macro too slow!) */
class OS2CompiledCodepages {
    public static function init() {\n';

        var codeBody:String = '';

        var lines:Array<String> = OS2TextFileUtils.getSignificantLines(txt);
        var splitter = ~/\s+/g;
        var data = new Array<Dynamic>();
        for (line in lines) {
            var parts = line.split(';');
            if (parts[0].indexOf('-') != -1) continue;
            if (parts[1].indexOf('-') != -1) continue;
            if (parts.length != 3) continue;
            var bit  = Std.parseInt(parts[0]);
            var relativeFilename = './src/fonthx/utils/codepagecompiler/codepages/CP${parts[1]}.txt';
            if (!FileSystem.exists(relativeFilename)) {
                trace('File not found ${relativeFilename}');
                continue;
            }
            trace('Parsing ${relativeFilename}');
            var pageText:String = File.getContent(relativeFilename);
            if (pageText == null || pageText.length == 0) continue;
            var codepoints = [];
            var pageLines = OS2TextFileUtils.getSignificantLines(pageText);
            for (cpLine in pageLines) {
                var bits = splitter.split(cpLine);
                var cp = Std.parseInt(bits[1]);
                if (cp < 0x20) continue;
                codepoints.push(cp);
            }
            codepoints.sort(function(a, b) {
                return a - b;
            });
            var lastCp:Int = -1;
            var ranges = new Array<CoverageRange>();
            var currentRange:CoverageRange = null;
            for (cp in codepoints) {
                if (currentRange == null) {
                    currentRange = new CoverageRange();
                    currentRange.start = cp;
                } else if (cp != lastCp + 1) {
                    currentRange.end = lastCp;
                    ranges.push(new CoverageRange(currentRange.start, currentRange.end));
                    currentRange = new CoverageRange(cp);
                }
                lastCp = cp;
            }
            if (currentRange != null && currentRange.end == -1) {
                currentRange.end = lastCp;
                ranges.push(currentRange);
            }
            var numCodepoints:Int = ranges.fold(function(range:CoverageRange, acc:Int) {
                acc += ((range.end - range.start) + 1);
                return acc;
            }, 0);
            var rangeString = ranges.map(function(range:CoverageRange) {
                return '${range.start}, ${range.end}';
            }).join(',');
            var methodName = 'add${parts[1]}';
            codeBody += '       public static function ${methodName}() {
            OS2Codepages.codepages.push(new OS2Codepage(${bit},${numCodepoints},[${rangeString}]));
        }\n\n';
            codeTop += '        ${methodName}();\n';
        }
        codeTop += '    }\n';
        var codeBottom = '}\n';

        File.saveContent('./src/fonthx/opentype/os2/OS2CompiledCodepages.hx', codeTop + '\n' + codeBody + '\n' + codeBottom);

    }

}
