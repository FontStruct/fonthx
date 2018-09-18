package fonthx.model.font;

import fonthx.model.geom.Rectangle;

interface IContourGlyph {

    /**
    * get the codepoint for the Glyph
    **/
    var codepoint(get, set):Int;

    /**
    * get the count of contours in the glyph
    **/
    var numContours(get, null):Int;

    /**
    * get the count of points in the glyph contours
    **/
    var numPoints(get, null):Int;

    /**
    * get the glyph’s advanced width
    **/
    var advancedWidth(get, null):Float;

    /**
    * get/set the glyph’s right side-bearing
    **/
    var lsb(get, set):Float;

    /**
    * get/set the glyph’s right side-bearing
    **/
    var rsb(get, set):Float;

    /**
    * @return true if the Glyph is unmapped (i.e. has no codepoint mapping in the cmap)
    **/
    var unmapped:Bool;

    /**
    * get the bounding box
    **/
    function getBounds():Rectangle;

    /**
    * Plot the glyph contours using the IContourConsumer interface
    * Used, for example, for recording the glyph contours into glyph descriptions in the TrueType GLYF table
    **/
    function walkContours(consumer:IContourConsumer):Void;

}