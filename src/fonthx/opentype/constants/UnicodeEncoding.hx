package fonthx.opentype.constants;

/**
 * Unicode platform-specific encoding IDs 
 * for the name and cmap tables
 */
class UnicodeEncoding {

	/**
	 * Unicode 1.0 semantics
	 */
	public static var UNICODE_1_0 = 0;
	
	/**
	 * Unicode 1.1 semantics
	 */
	public static var UNICODE_1_1 = 1;
	
	/**
	 * ISO 10646:1993 semantics
	 */
	public static var ISO_10646 = 2;
	
	/**
	 * Unicode 2.0 and onwards semantics, Unicode BMP only.
	 */
	public static var UNICODE2_BMP = 3;
	
	/**
	 * Unicode 2.0 and onwards semantics, Unicode full repertoire.	
	 */
	public static var UNICODE2_FULL = 4;

	
}
