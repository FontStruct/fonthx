package fonthx.model.geom;

class DrawingCommand {
    public static inline var MOVETO = 0;   // PathIterator.SEG_MOVETO
    public static inline var LINETO = 1;   // PathIterator.SEG_LINETO
    public static inline var QUADTO = 2;   // PathIterator.SEG_QUADTO
    public static inline var CUBICTO = 3;  // PathIterator.SEG_CUBICTO
    public static inline var CLOSE = 4;    // PathIterator.SEG_CLOSE
}

