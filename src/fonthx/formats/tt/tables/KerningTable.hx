package fonthx.formats.tt.tables;

import fonthx.model.font.KerningPair;
import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
 * Kern Table
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/kern
 */
class KerningTable extends Table
{
	// members
	private var pairs:Array<KerningPair>;

	/**
	 * Contstruct a new KernTable
	 */
	public function new() {
		super(Table.KERN);
	}

    override public function write(tt:ITrueTypeWriter) {

		// version
		tt.writeUSHORT(0);
		// number of subtables (always one single format 0 for now)
		tt.writeUSHORT(1);

		// start single subtable

		// subtable header
		var numPairs = pairs.length;
		// subtable format
		tt.writeUSHORT(0);
		// subtable length
		tt.writeUSHORT(numPairs * 6 + 14);
		// coverage
		tt.writeUSHORT(1); // hori

		// format 0 table
		// The largest power of two less than or equal to the value of nPairs,
		// multiplied by the size in bytes of an entry in the table.
		var maxPow2 = 1;
		var exp = 0;
        while (maxPow2 <= numPairs) {
            maxPow2 = maxPow2 << 1;
            ++exp;
        }
		maxPow2 = maxPow2 >> 1;
		--exp;

		// number of pairs
		tt.writeUSHORT(numPairs);
		// searchRange
		tt.writeUSHORT(maxPow2 * 6);
		// entrySelector
		tt.writeUSHORT(exp);
		//rangeShift
		tt.writeUSHORT((numPairs - maxPow2) * 6);

		// need to sort our pairs
		// The left and right halves of the kerning pair make an unsigned 32-bit number, which is then used to order the kerning pairs numerically.
        pairs.sort(function (kp1, kp2) {
		    	var id1 = kp1.left << 8 | kp1.right;
		    	var id2 = kp2.left << 8 | kp2.right;
		    	if (id2 == id1) {
		    		return 0;
		    	} else if (id2 > id1) {
		    		return -1;
		    	}
		    	return 1;
		      });
		for (kp in pairs) {
			tt.writeUSHORT(kp.left);
			tt.writeUSHORT(kp.right);
			tt.writeSHORT(Std.int(kp.value)); // fixme ROUNDING
		}
	}

	public function setKerningPairs(pairs:Array<KerningPair>) {
		this.pairs = pairs;
	}

}




