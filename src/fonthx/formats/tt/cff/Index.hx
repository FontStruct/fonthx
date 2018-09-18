package fonthx.formats.tt.cff;

import fonthx.formats.tt.writers.ITrueTypeWriter;

class Index<T> {
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

    //public var count:Card16; // Number of objects stored in INDEX
    public var offSize:Int; // Offset array element size
    public var offset:Array<Int>; // Offset array (from byte preceding object data)
    public var data:Array<Int>;

    public function new() {

    }

    public function writeStrings(tt:ITrueTypeWriter, data:Array<String>) {
        tt.writeUSHORT(data.length);
        if (data.length == 0) {
            return;
        }
    }



}
