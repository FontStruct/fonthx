package fonthx.opentype.tables.cmap;

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
        var prevCode = -100;
        var currCode = 0;
        var currGroup:Group = null;
        for (i in 0...codepoints.length) {
            currCode = codepoints[i];
            var mappable = currCode > 0;
            var consecutive = currCode == (prevCode + 1);
            if (!consecutive) {
                if (currGroup != null) {
                    currGroup.end  = prevCode;
                    groups.push(currGroup);
                }
                if (mappable) {
                    currGroup = new Group(currCode, 0, i);
                }
            }
            if (mappable) {
                prevCode = currCode;
            }
        }
        // closing last group
        if (currGroup != null && currCode > 0) {
           currGroup.end = currCode;
           groups.push(currGroup);
        }
        //trace(groups);
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



