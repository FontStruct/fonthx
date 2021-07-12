package fonthx.opentype.tables;

import fonthx.opentype.writers.ITrueTypeWriter;

/**
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/cmap#format-12-segmented-coverage
 */
class CharacterMapFormat12Subtable extends CharacterMapSubtable {

    private var groups:Array<Group>;

    public function new(platformID:Int, encodingID:Int, languageID:Int = 0) {
        super(platformID, encodingID, languageID);
        groups = new Array();
    }

    override public function calculateLength():Int {
        if (length == 0) {
            prepareGroups();
            length = 16 + (groups.length * 12);
        }
        return length;
    }

    private function prepareGroups() {
        if (groups.length > 0) {
            return;
        }
        var numGlyphs = codepoints.length;
        var prevCode = codepoints[0];
        groups.push(new Group(prevCode, 0, 1));
        var currCode = 0;
        // work out number of segments
        for (i in 1...numGlyphs) {
            currCode = codepoints[i];
            if (currCode != (prevCode + 1)) {
                groups[groups.length - 1].end = prevCode;
                groups.push(new Group(currCode, 0, i + 1));
            }
            prevCode = currCode;
        }
        // closing last group
        groups[groups.length - 1].end = currCode;
    }

    override public function write(tt:ITrueTypeWriter) {
        prepareGroups();
        tt.writeUSHORT(12);                 // Format number is set to 12.
        tt.writeUSHORT(0);                  // Reserved; set to 0
        tt.writeULONG(calculateLength());   // Byte length of this subtable (including the header)
        tt.writeULONG(0);                   // language 0 if not for mac.
        tt.writeULONG(groups.length);       // Number of groupings which follow
        for (g in groups) {
            tt.writeULONG(g.start);
            tt.writeULONG(g.end);
            tt.writeULONG(g.startId);
        }
    }

}

class Group {
    public var start:Int;
    public var end:Int;
    public var startId:Int;
    public function new(start:Int, end:Int, startId:Int) {
        this.start = start;
        this.end = end;
        this.startId = startId;
    }
}



