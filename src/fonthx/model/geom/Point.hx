package fonthx.model.geom;

/**
    A single 2D point. Can be On- or Off-contour. Supports creation of a linked
    list with previous and next handles.
**/
class Point
{
    
    /**
        An ON point is on a contour
	 **/
    public static inline var ON:Int = 0;
	
    /**
        An ON point is off a contour (i.e. a curve control point)
	 **/
    public static inline var OFF:Int = 1;
	
    /**
        The next point in a linked list of Points
	 **/
    public var next:Point;
	
    /**
        The previous point in a linked list of Points
	 **/
    public var prev:Point;
	
    /**
        The type of this point (ON or OFF)
	 */
    public var type:Int;
	
    /**
	 * The x-coordinate for this Point
	 */
    public var x:Float;
	
    /**
	 * The y-coordinate for this Point
	 */
    public var y:Float;
    
    /**
	 * Construct a new Point
	 * @param x The x-coordinate for the new Point
	 * @param y The y-coordinate for the new Point
	 * @param type The type ON/OFF for the new Point
    */
    public function new(x:Float = 0, y:Float = 0, type:Int = 0) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    
    public function clone():Point {
        var clone = new Point();
        clone.x = x;
        clone.y = y;
        clone.type = type;
        return clone;
    }
    
    /**
	 * Get a string representation of this object
	 */
    public function toString():String {
        return "Pt [" + x + "," + y + "] " + (((type == ON)) ? "ON":"OFF");
    }
}

