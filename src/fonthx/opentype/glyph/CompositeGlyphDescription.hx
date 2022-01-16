package fonthx.opentype.glyph;

import fonthx.model.font.IFont;
import fonthx.model.font.IContourGlyph;
import fonthx.opentype.writers.ITrueTypeWriter;

/**
* @see https://docs.microsoft.com/en-us/typography/opentype/spec/glyf#composite-glyph-description
**/
class CompositeGlyphDescription {

    // Bit 0: If this is set, the arguments are 16-bit (uint16 or int16); otherwise, they are bytes (uint8 or int8).
    public static var ARG_1_AND_2_ARE_WORDS:Int = 0x0001;
    // Bit 1: If this is set, the arguments are signed xy values; otherwise, they are unsigned point numbers.
    public static var ARGS_ARE_XY_VALUES:Int = 0x0002;
    // Bit 2: If set and ARGS_ARE_XY_VALUES is also set, the xy values are rounded to the nearest grid line. Ignored if
    // ARGS_ARE_XY_VALUES is not set.
    public static var ROUND_XY_TO_GRID:Int = 0x0004;
    // Bit 3: This indicates that there is a simple scale for the component. Otherwise, scale = 1.0.
    public static var WE_HAVE_A_SCALE:Int = 0x0008;
    // Bit 5: Indicates at least one more glyph after this one.
    public static var MORE_COMPONENTS:Int = 0x0020;
    // Bit 6: The x direction will use a different scale from the y direction.
    public static var WE_HAVE_AN_X_AND_Y_SCALE:Int = 0x0040;
    //	Bit 7: There is a 2 by 2 transformation that will be used to scale the component.
    public static var WE_HAVE_A_TWO_BY_TWO:Int = 0x0080;
    //	Bit 8: Following the last component are instructions for the composite character.
    public static var WE_HAVE_INSTRUCTIONS:Int = 0x0100;
    // Bit 9: If set, this forces the aw and lsb (and rsb) for the composite to be equal to those from this component
    // glyph. This works for hinted and unhinted glyphs.
    public static var USE_MY_METRICS:Int = 0x0200;
    // Bit 10: If set, the components of the compound glyph overlap. Use of this flag is not required in OpenType —
    // that is, it is valid to have components overlap without having this flag set. It may affect behaviors in some
    // platforms, however. (See Apple’s specification for details regarding behavior in Apple platforms.) When used,
    // it must be set on the flag word for the first component. See additional remarks, above, for the similar
    // OVERLAP_SIMPLE flag used in simple-glyph descriptions.
    public static var OVERLAP_COMPOUND:Int = 0x0400;
    // Bit 11: The composite is designed to have the component offset scaled. Ignored if ARGS_ARE_XY_VALUES is not set.
    public static var SCALED_COMPONENT_OFFSET:Int = 0x0800;
    // Bit 12: The composite is designed not to have the component offset scaled. Ignored if ARGS_ARE_XY_VALUES is not set.
    public static var UNSCALED_COMPONENT_OFFSET:Int = 0x1000;

    public function new() {
    }

    public function write(tt:ITrueTypeWriter, glyph:IContourGlyph, font:IFont) {

        tt.markPosition();
        var bounds = glyph.getBounds();
        // write glyph header – todo this could be shared with SimpleGlyphDescription
        tt
        .writeSHORT(-1)
        .writeSHORT(Std.int(bounds.left))
        .writeSHORT(Std.int(bounds.top))
        .writeSHORT(Std.int(bounds.right))
        .writeSHORT(Std.int(bounds.bottom))
        ;
        var components = glyph.getComponents();
        for (idx in 0...components.length) {
            var component = components[idx];
            // we only support 16-bit offsets, and x y values
            var flags = ARG_1_AND_2_ARE_WORDS | ARGS_ARE_XY_VALUES;
            if (idx < components.length - 1) {
                flags |= MORE_COMPONENTS;
            }
            if (component.scaleX != 1.0 || component.scaleY != 1.0) {
                if (component.rotation != 0) {
                    flags |= WE_HAVE_A_TWO_BY_TWO;
                } else if (component.scaleX != component.scaleY) {
                    flags |= WE_HAVE_AN_X_AND_Y_SCALE;
                } else {
                    flags |= WE_HAVE_A_SCALE;
                }
            }
            tt.writeUSHORT(flags);
            var glyphIdx = font.getGlyphIndexForGlyph(component.glyph); // todo error handling
            tt.writeUSHORT(glyphIdx);
            tt.writeUSHORT(Std.int(component.offsetX));
            tt.writeUSHORT(Std.int(component.offsetY));
            if (flags & WE_HAVE_A_SCALE != 0) {
                tt.writeF2DOT14(component.scaleX);
            }
            if (flags & WE_HAVE_AN_X_AND_Y_SCALE != 0) {
                tt.writeF2DOT14(component.scaleX);
                tt.writeF2DOT14(component.scaleY);
            }
            if (flags & WE_HAVE_A_TWO_BY_TWO != 0) {
                // https://en.wikipedia.org/wiki/Rotation_matrix
                var a = component.rotation * Math.PI/180;
                var sin = Math.round(Math.sin(a) * 10000) / 10000;
                var cos = Math.round(Math.cos(a) * 10000) / 10000;
                tt.writeF2DOT14(cos * component.scaleX);
                tt.writeF2DOT14(-sin * component.scaleY);
                tt.writeF2DOT14(sin * component.scaleX);
                tt.writeF2DOT14(cos * component.scaleY);

            }
        }

        tt.pad(true);
    }


}
