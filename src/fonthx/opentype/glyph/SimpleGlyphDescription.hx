package fonthx.opentype.glyph;

import fonthx.model.geom.Rectangle;
import fonthx.opentype.writers.ITrueTypeWriter;

class SimpleGlyphDescription {

	private var points:Array<ContourPoint> ;
	private var bounds:Rectangle;
	private var numContours:Int;
	public var lastPoint:ContourPoint;
	private var simpleFlags:Bool = true;

	public function new() {
		points = new Array<ContourPoint>();
		numContours = 0;
		lastPoint = null;
	}
	
	public function startContour() {
		lastPoint = null;
	}
	
	public function closeContour() {
		if (lastPoint != null) {
			var start = ContourPoint.copy(lastPoint.getHead());
			if (start != lastPoint) {
				start.previous = lastPoint;
				start.next = null;
			}
			points.push(start);
		}
	}
	
	public function addPoint(x:Int, y:Int, onCurve:Bool) {
		var p = new ContourPoint(x, y, onCurve? ContourPoint.ON_CURVE : ContourPoint.OFF_CURVE);
		p.previous = lastPoint;
		if (!simpleFlags) {
			if (p.x > -256 && p.x < 256) {
				p.flags |= ContourPoint.X_SHORT;
				if (p.x >= 0) {
					p.flags |= ContourPoint.X_SAME_OR_SIGN;
				}
			} else  if (p.previous != null && p.x == p.previous.x) {
				p.flags |= ContourPoint.X_SAME_OR_SIGN;
			}
			if (p.y > -256 && p.y < 256) {
				p.flags |= ContourPoint.Y_SHORT;
				if (p.y >= 0) {
					p.flags |= ContourPoint.Y_SAME_OR_SIGN;
				}
			} else  if (p.previous != null && p.y == p.previous.y) {
				p.flags |= ContourPoint.Y_SAME_OR_SIGN;
			}
		}
		points.push(p);
		if (lastPoint == null) {
			numContours++;
		} else {
			lastPoint.next = p;
			
		}
		lastPoint = p;
	}

	/**
	 * Add repeat flags
	 * @return
	 */
	private function prepareFlags():Array<Int> {
		var flags  = new Array<Int>();
		var p:ContourPoint;
		var currentFlag = -1;
		var repeatCount = 0;
		var lastPoint:ContourPoint = null;
		for (p in points) {
			if (lastPoint == null || lastPoint.flags != p.flags) {
				if (currentFlag != -1 && repeatCount > 0) {
					currentFlag |= ContourPoint.REPEAT;
				}
				currentFlag = p.flags;
				flags.push(currentFlag);
				if (repeatCount > 0) {
					flags.push(repeatCount);
					repeatCount = 0;
				}
			} 
			if (lastPoint != null && lastPoint.flags == p.flags) {
				repeatCount++;
			}
			lastPoint = p;
		}
		if (currentFlag != -1 && repeatCount > 0) {
			currentFlag |= ContourPoint.REPEAT;
			flags.push(repeatCount);
		}
		return flags;
	}
	
	public function write(tt:ITrueTypeWriter) {
		if (numContours == 0) {
			return;
		}
		tt.markPosition();
		var endPtsOfContours = new Array<Int>();
		bounds = null;
		var count = 0;
		for (p in points) {
			if (bounds == null) {
				bounds = new Rectangle(p.x, p.y, 0, 0);
			} else {
				bounds.add(p.x, p.y);
			}
			if (p.isEnd()) {
				endPtsOfContours.push(count);
			}
			count++;
		}
		if (bounds == null) {
			bounds = new Rectangle();
		}
		// write glyph header
		tt
            .writeSHORT(numContours)
            .writeSHORT(Std.int(bounds.left))
            .writeSHORT(Std.int(bounds.top))
            .writeSHORT(Std.int(bounds.right))
            .writeSHORT(Std.int(bounds.bottom));
		
		// write array of contour end points
		for (endPt in endPtsOfContours) {
			tt.writeUSHORT(endPt);
		}
		tt.writeSHORT(0); // no instructions
		// write flags array
		if (simpleFlags) {
			for (p in points) {
				tt.writeByte(p.flags);
			}
		} else {
			var flags = prepareFlags();
			for (flag in flags) {
				tt.writeByte(flag);
			}
		}
		// write x coordinates
		var x = 0;
		var last:ContourPoint = null;
		for (p in points) {
			x = p.x - (last == null? 0 : last.x);
			if (p.isShortX()) {
				if (p.isNegatedX()) {
					tt.writeByte(0 - x);
				} else {
					tt.writeByte(x);
				}
			} else {
				if (!p.isSameX()) {
					tt.writeSHORT(x);
				}
			}
			last = p;
		}
		// write y coordinates
		var y = 0;
		last = null;
		for (p in points) {
			y = p.y - (last == null? 0 : last.y);
			if (p.isShortY()) {
				if (p.isNegatedY()) {
					tt.writeByte(0 - y);
				} else {
					tt.writeByte(y);
				}
				
			} else {
				if (!p.isSameY()) {
					tt.writeSHORT(y);
				}
			}
			last = p;
		}
		tt.pad(true);
	}

	public function getNumContours() {
		return numContours;
	}

	public function getPoints() {
		return points;
	}




}
