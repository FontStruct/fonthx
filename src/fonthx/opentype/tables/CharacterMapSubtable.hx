package fonthx.opentype.tables;

/**
 * CharacterMap Subtable
*/
class CharacterMapSubtable extends Table {
	
	private var platformID:Int;
	private var encodingID:Int;
    private var languageID:Int;
	private var codepoints:Array<Int>;
	private var unmapped:Int;

	// default constructor
	public function new(platformID:Int, encodingID:Int, languageID:Int) {
		super();
		unmapped = 0;
		this.platformID = platformID;
		this.encodingID = encodingID; 
		this.languageID = languageID; 
		codepoints = new Array<Int>();
	}

	public function getPlatformID():Int {
		return platformID;
	}

	public function getEncodingID() {
		return encodingID;
	}

	public function getLanguageID() {
		return languageID;
	}
	
	public function calculateLength() {
		return length;
	}
	
	/**
	 * set the platform-specific language ID or zero if language-independent 
	 * @param id
	 */
	public function setPlatformID(id:Int) {
		platformID = id;
	}

	public function setEncodingID(i:Int) {
		encodingID = i;
	}

	public function setLanguageID(i:Int) {
		languageID = i;
	}

	public function addCodepoint(codepoint:Int) {
		codepoints.push(codepoint);
	}
	
	public function incrementUnmapped() {
		unmapped++;
	}

	public function getUnmapped() {
		return unmapped;
	}

}
