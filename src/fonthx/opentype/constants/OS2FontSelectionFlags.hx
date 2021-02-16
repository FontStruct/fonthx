package fonthx.opentype.constants;

@:enum
abstract OS2FontSelectionFlags(Int) to Int {

	/**
	 * Font contains Italic characters, otherwise they are upright.
	 */
	var ITALIC = 0x01;
	
	/**
	 * Characters are underscored.
	 */
	var UNDERSCORE = 0x02;
	
	/**
	 * Characters have their foreground and background reversed.
	 */
	var NEGATIVE = 0x04;
	
	/**
	 * Outline (hollow) characters, otherwise they are solid.
	 */
	var OUTLINED = 0x08;
	
	/**
	 * Characters are overstruck.
	 */
	var STRIKEOUT = 0x10;
	
	/**
	 * Characters are emboldened.
	 */
	var BOLD = 0x20;
	
	/**
	 * Characters are in the standard weight/style for the font.
	 */
	var REGULAR = 0x40;

    @:to
    public function toInt():Int {
        return cast(this, Int);
    }
	
}
