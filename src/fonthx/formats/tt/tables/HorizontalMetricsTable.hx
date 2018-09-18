package fonthx.formats.tt.tables;

import fonthx.formats.tt.writers.ITrueTypeWriter;

/**
* @see https://docs.microsoft.com/en-us/typography/opentype/spec/hmtx
**/
class HorizontalMetricsTable extends Table
{
	private var metrics:Array<HorizontalMetric>;
	
	/**
	 * Contstruct a new HorizontalMetricsTable
	 */
	public function new() {
		super(Table.HMTX);
		metrics = new Array<HorizontalMetric>();
	}
	
	public function addMetric(advanceWidth:Int, lsb:Int) {
		metrics.push(new HorizontalMetric(advanceWidth, lsb));
	}

	override public function write(tt:ITrueTypeWriter) {
		for (hm in metrics) {
			tt
                .writeUSHORT(hm.advanceWidth)
			    .writeSHORT(hm.lsb);
		}
	}
			
}

class HorizontalMetric {

    public var advanceWidth:Int;
    public var lsb:Int;

	public function new(advanceWidth:Int, lsb:Int) {
		this.advanceWidth = advanceWidth;
		this.lsb = lsb;
	}

}





