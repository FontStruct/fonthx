package fonthx.formats.tt.cff;

import haxe.io.Bytes;
import fonthx.formats.tt.writers.ITrueTypeWriter;

using Lambda;

class Index {

    /*
        An INDEX is an array of variable-sized objects. It comprises a
        header, an offset array, and object data. An object is retrieved by
        indexing the offset array and fetching the object at the
        specified offset. The object’s length can be determined by
        subtracting its offset from the next offset in the offset array. An
        additional offset is added at the end of the offset array so the
        length of the last object may be determined

        Type Name Description
        Card16 count Number of objects stored in INDEX
        OffSize offSize Offset array element size
        Offset offset
        [count+1]
        Offset array (from byte preceding
        object data)
        Card8 data
        [<varies>]
     */

    // todo put this in TTWriter??
    public static function writeStrings(tt:ITrueTypeWriter, data:Array<String>) {
        var blocks = data.map(function(s:String) {
           return Bytes.ofString(s);
        });
        return writeByteBlocks(tt, blocks);
    }

    public static function writeByteBlocks(tt:ITrueTypeWriter, blocks:Array<Bytes>) {
        tt.writeCard16(blocks.length);      // count Number of objects stored in INDEX
        if (blocks.length == 0) {
            return;
        }

        // calc offsize
        var offSize = 4;
        var lastOffset = blocks.fold(function(s:Bytes, acc:Int) {
            return acc + s.length;
        }, 1);
        if (lastOffset <= 0xff) {
            offSize = 1;
        } else if (lastOffset <= 0xffff) {
            offSize = 2;
        } else if (lastOffset <= 0xffffff) {
            offSize = 3;
        }

        tt.writeByte(offSize);              // offSize (1-4, number of bytes used to store offsets in this index)
        var offset = 1;
        for (o in blocks) {
            tt.writeByte(offset);           // array of offsets
            offset += o.length;
        }
        tt.writeByte(offset);               // An additional offset is added at the end of the offset array so the length of the last object may be determined
        for (bytes in blocks) {
            tt.writeBytes(bytes);          // write the actual data
        }

    }

}
