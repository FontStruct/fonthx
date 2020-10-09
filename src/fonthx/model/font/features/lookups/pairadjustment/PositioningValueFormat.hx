package fonthx.model.font.features.lookups.pairadjustment;

// https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#value-record

@:enum
abstract PositioningValueFormat(Int) {
    public var NONE                         = 0;
    public var X_PLACEMENT                  = 0x0001; // Includes horizontal adjustment for placement
    public var Y_PLACEMENT                  = 0x0002; // Includes vertical adjustment for placement
    public var X_ADVANCE                    = 0x0004; // Includes horizontal adjustment for advance
    public var Y_ADVANCE                    = 0x0008; // Includes vertical adjustment for advance
    public var X_PLACEMENT_DEVICE           = 0x0010; // Includes Device table (non-variable font) / VariationIndex table (variable font) for horizontal placement
    public var Y_PLACEMENT_DEVICE           = 0x0020; // Includes Device table (non-variable font) / VariationIndex table (variable font) for vertical placement
    public var X_ADVANCE_DEVICE             = 0x0040; // Includes Device table (non-variable font) / VariationIndex table (variable font) for horizontal advance
    public var Y_ADVANCE_DEVICE             = 0x0080; // Includes Device table (non-variable font) / VariationIndex table (variable font) for vertical advance
}
