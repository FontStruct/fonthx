package fonthx.formats.tt.tables.opentype;

/**
* ValueFormat Flags
**/
@:enum
abstract ValueFormat(Int) {
    var X_PLACEMENT = 0x0001;           // Includes horizontal adjustment for placement
    var Y_PLACEMENT = 0x0002;           // Includes vertical adjustment for placement
    var X_ADVANCE = 0x0004;             // Includes horizontal adjustment for advance
    var Y_ADVANCE = 0x0008;             // Includes vertical adjustment for advance
    var X_PLACEMENT_DEVICE = 0x0010;    // Includes Device table (non-variable font) / VariationIndex table (variable font) for horizontal placement
    var Y_PLACEMENT_DEVICE = 0x0020;    // Includes Device table (non-variable font) / VariationIndex table (variable font) for vertical placement
    var X_ADVANCE_DEVICE = 0x0040;      // Includes Device table (non-variable font) / VariationIndex table (variable font) for horizontal advance
    var Y_ADVANCE_DEVICE = 0x0080;      // Includes Device table (non-variable font) / VariationIndex table (variable font) for vertical advance
    var RESERVED = 0xFF00;              // For future use (set to zero)
}
