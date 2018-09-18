package fonthx.model.geom;

/**
    An individual geometrical shape to be drawn with a single fill
    Contains an array of Paths
**/
class Shape
{

    public var paths:Array<Path>;
	private var bounds:Rectangle;
	
    public function new() {
        paths = new Array<Path>();
    }
	
    /**
	 * Add a path to this Shape
	 * @param path Path the Path to add.
	 */
    public function addPath(path:Path){
        paths.push(path);
    }
	
    public function getBounds():Rectangle {
		if (bounds == null) {
			bounds = calculateBounds();
        }
		return bounds;
    }
	
	public function calculateBounds():Rectangle{
		bounds = null;
		for (path in paths){
			if (bounds == null) {
				bounds = path.getBounds().clone();
            } else {
				bounds = bounds.union(path.getBounds());
            }
        }
		return bounds;
    }

    public function forEachPath(action:Path -> Void):Void {
        for (path in paths) {
            action(path);
        }
    }


    public function clone():Shape{
		var clone = new Shape();
		for (path in paths) {
			clone.addPath(path.clone());
        }
		return clone;
    }


    public function toString():String{
        return "Shape \n" + paths.join("\n");
    }
}

