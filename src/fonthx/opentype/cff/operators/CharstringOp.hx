package fonthx.opentype.cff.operators;

@:enum
abstract CharstringOp(Int) to Int {

    var escape = 0xC00;

    // Path construction operators

    /**
    * relative moveto
    * |- dx1 dy1 rmoveto (21) |-
    * moves the current point to a position at the relative coordinates (dx1, dy1)
    */
    var rmoveto = 21;
    /**
    * horizontal moveto
    * |- dx1 hmoveto (22) |-
    * moves the current point dx1 units in the horizontal direction.
    **/
    var hmoveto = 22;
    /**
    * vertical moveto
    * |- dy1 vmoveto (4) |-
    * moves the current point dy1 units in the vertical direction.
    **/
    var vmoveto = 4;
    /**
    * relative lineto
    * |- {dxa dya}+ rlineto (5) |-
    * appends a line from the current point to a position at the relative coordinates dxa, dya.
    * Additional rlineto operations are performed for all subsequent argument pairs.
    * The number of lines is determined from the number of arguments on the stack.
    **/
    var rlineto = 5;
    /**
    * horizontal lineto
    * |- dx1 {dya dxb}* hlineto (6) |-
    * |- {dxa dyb}+ hlineto (6) |-
    * appends a horizontal line of length dx1 to the current point. With an odd number of arguments, subsequent argument
    * pairs are interpreted as alternating values of dy and dx, for which additional lineto operators draw alternating
    * vertical and horizontal lines. With an even number of arguments, the arguments are interpreted as alternating
    * horizontal and vertical lines.
    * The number of lines is determined from the number of arguments on the stack.
    **/
    var hlineto = 6;
    /**
    * vertical lineto
    * |- dy1 {dxa dyb}* vlineto (7) |-
    * |- {dya dxb}+ vlineto (7) |-
    * appends a vertical line of length dy1 to the current point. With an odd number of arguments, subsequent argument
    * pairs are interpreted as alternating values of dx and dy, for which additional lineto operators draw alternating
    * horizontal and vertical lines. With an even number of arguments, the arguments are interpreted as alternating
    * vertical and horizontal lines.
    * The number of lines is determined from the number of arguments on the stack.
    **/
    var vlineto = 7;
    /**
    * relative curveto(s)
    * |- {dxa dya dxb dyb dxc dyc}+ rrcurveto (8) |-
    * appends a Bézier curve, defined by dxa...dyc, to the current point. For each subsequent set of six arguments, an
    * additional curve is appended to the current point. The number of curve segments is determined from the number of
    * arguments on the number stack and is limited only by the size of the number stack.
    **/
    var rrcurveto = 8;
    /**
    * horizontal curveto(s)
    * |- dy1? {dxa dxb dyb dxc}+ hhcurveto (27) |-
    * appends one or more Bézier curves, as described by the dxa...dxc set of arguments, to the current point.
    * For each curve, if there are 4 arguments, the curve starts and ends horizontal.
    * The first curve need not start horizontal (the odd argument case).
    * Note the argument order for the odd argument case.
    **/
    var hhcurveto = 27;
    /**
    * horizontal/vertical curveto(s)
    * |- dx1 dx2 dy2 dy3 {dya dxb dyb dxc dxd dxe dye dyf}* dxf? hvcurveto (31) |-
    * |- {dxa dxb dyb dyc dyd dxe dye dxf}+ dyf? hvcurveto (31) |-
    * appends one or more Bézier curves to the current point.
    * The tangent for the first Bézier must be horizontal, and the second must be vertical (except as noted below).
    * If there is a multiple of four arguments, the curve starts horizontal and ends vertical.
    * Note that the curves alternate between start horizontal, end vertical, and start vertical, and end horizontal.
    * The last curve (the odd argument case) need not end horizontal/vertical.
    **/
    var hvcurveto = 31;
    /**
    * relative curveto(s) followed by 1 relative lineto
    * |- {dxa dya dxb dyb dxc dyc}+ dxd dyd rcurveline (24) |-
    * is equivalent to one rrcurveto for each set of six arguments
    * dxa...dyc, followed by exactly one rlineto using the dxd, dyd arguments.
    * The number of curves is determined from the count on the argument stack.
    **/
    var rcurveline = 24;
    /**
    * 1 relative lineto followed by relative curveto(s) 
    * |- {dxa dya dxb dyb dxc dyc}+ dxd dyd rcurveline (24) |-
    * is equivalent to one rlineto for each pair of arguments beyond the six arguments dxb...dyd needed for
    * the one rrcurveto command.
    * The number of lines is determined from the count of items on the argument stack.
    **/
    var rlinecurve = 25;
    /**
    * vertical/horizontal curveto
    * |- dy1 dx2 dy2 dx3 {dxa dxb dyb dyc dyd dxe dye dxf}* dyf? vhcurveto (30) |-
    * |- {dya dxb dyb dxc dxd dxe dye dyf}+ dxf? vhcurveto (30) |-
    * appends one or more Bézier curves to the current point, where the first tangent is vertical and the second tangent
    * is horizontal. This command is the complement of hvcurveto
    **/
    var vhcurveto = 30;
    /**
    * vertical curveto(s)
    * |- dx1? {dya dxb dyb dyc}+ vvcurveto (26) |-
    * appends one or more curves to the current point. If the argument count is a multiple of four, the curve starts and
    * ends vertical. If the argument count is odd, the first curve does not begin with a vertical tangent.
    **/
    var vvcurveto = 26;

    var endchar = 14;

    var callgsubr = 29;

    var returnop = 11;

}
