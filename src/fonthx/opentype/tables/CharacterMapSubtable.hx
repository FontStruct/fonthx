package fonthx.opentype.tables;

class CharacterMapSubtable extends Table {
	
	public var platformID:Int;
    public var encodingID:Int;
    public var languageID:Int;
	private var codepoints:Array<Int>;
	private var unmapped:Int;

	public function new(platformID:Int, encodingID:Int, languageID:Int = 0) {
		super();
		unmapped = 0;
		this.platformID = platformID;
		this.encodingID = encodingID; 
		this.languageID = languageID; 
		codepoints = new Array<Int>();
	}

	public function calculateLength() {
		return length;
	}

    public function addMapping(idx:Int, codepoint:Int) {

    }

	public function addCodepoint(codepoint:Int) {
		codepoints.push(codepoint);
        // todo increment unmapped here?
	}
	
	public function incrementUnmapped() {
		unmapped++;
	}

	public function getUnmapped() {
		return unmapped;
	}

}
