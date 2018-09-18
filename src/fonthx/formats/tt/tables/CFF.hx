package fonthx.formats.tt.tables;

import fonthx.model.font.IFont;
import fonthx.formats.tt.writers.ITrueTypeWriter;

abstract Card8(Int) {
    inline public function new(i:Int) {
        this = i;
    }
}

abstract Card16(Int) {
    inline public function new(i:Int) {
        this = i;
    }
}

// https://docs.microsoft.com/en-us/typography/opentype/spec/cff

// http://wwwimages.adobe.com/www.adobe.com/content/dam/acom/en/devnet/font/pdfs/5176.CFF.pdf

// http://wwwimages.adobe.com/www.adobe.com/content/dam/acom/en/devnet/font/pdfs/5177.Type2.pdf

// see also https://www-cdf.fnal.gov/offline/PostScript/T1_SPEC.PDF


// https://github.com/pomax/CFF-glyphlet-fonts http://pomax.github.io/CFF-glyphlet-fonts/

// https://github.com/nodebox/opentype.js/blob/master/src/tables/cff.js
// https://github.com/fonttools/fonttools/blob/master/Lib/fontTools/cffLib.py
// https://github.com/devongovett/fontkit


class CFF extends Table {

	private var font:IFont;

	/**
	 * Construct a new CFFTable Table
	 * @param font 
	 *
	 */
	public function new(font:IFont) {
		super(Table.CFF);
		this.font = font;
	}
	
	override public function write(tt:ITrueTypeWriter) {
		
		// write header
		tt.writeByte(1); // Format major version, starting at 1
		tt.writeByte(0); // Format minor version (starting at 0
		tt.writeByte(4); // Header size
		tt.writeByte(1); // the size of all offsets (0) relative to the start of CFF data (1,2,3 or 4)
		
		// Name INDEX
		var name:String = font.fullName;
		tt.writeSHORT(1); // count (1 name)
		tt.writeByte(1); // offset array element size
		tt.writeByte(1); // 1 offset of 1
		tt.writeByte(name.length + 1); // extra offset to determine length
		tt.writeByteString(name);
		/*
				
		// Top DICT INDEX
		tt.writeSHORT(1); // count (1 name)
		tt.writeByte(1); // offset array element size
		tt.writeByte(1); // 1 offset of 1
		
		
		tt.writeByte(name.length + 1); // extra offset to determine length
		*/
		// Top DICT Data


	}


}

