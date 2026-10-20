package fonthx.opentype.tables;

import haxe.io.Bytes;
import fonthx.model.font.features.lookups.pairadjustment.PositioningPair;

/**
 * Kern Table
 * @see https://docs.microsoft.com/en-us/typography/opentype/spec/kern
 */
class KerningTable extends Table
{
	// members
	private var pairs:Array<PositioningPair>;

	/**
	 * Contstruct a new KernTable
	 */
	public function new() {
		super(Table.KERN);
	}

    override public function getBytes():Bytes {

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
		// Compare the halves directly rather than packing them into an Int: Haxe Int is signed on many targets,
		// and the old 8-bit shift broke ordering once glyph indices exceeded 255.
		pairs.sort(function (kp1, kp2) {
			if (kp1.idx1 < kp2.idx1) {
				return -1;
			}
			if (kp1.idx1 > kp2.idx1) {
				return 1;
			}
			if (kp1.idx2 < kp2.idx2) {
				return -1;
			}
			if (kp1.idx2 > kp2.idx2) {
				return 1;
			}
			return 0;
		});
		for (kp in pairs) {
			tt.writeUSHORT(kp.idx1);
			tt.writeUSHORT(kp.idx2);
			tt.writeSHORT(Std.int(kp.x)); // fixme ROUNDING
		}
        return tt.getBytes();
	}

	public function setKerningPairs(pairs:Array<PositioningPair>) {
		this.pairs = pairs;
	}

}




