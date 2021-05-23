package fonthx.model.font;

import fonthx.model.geom.Rectangle;

/**
* Interface to implement for a fonthx Glyph
* @see AbstractContourGlyph for a base implementation
**/
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
    * get/set the glyph’s name
    **/
    var name(get, set):String;

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
    * @param options For specifying contour type e.g. merged if the implementation supports merging
    **/
    function walkContours(consumer:IContourConsumer, options:ContourOptions = null):Void;

}