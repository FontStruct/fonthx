package fonthx.utils;

import haxe.ds.StringMap;

/**
    Utility functions for timing the execution of blocks of code (in milliseconds)
**/
@:dox(hide)
class ExecutionTimer {

    private static var _spans:StringMap<Float> = new StringMap();

    /**
     Start timing the block identified by key
     @param key block identifier
    **/
    static public function start(key:String) {
        _spans.set(key, Date.now().getTime());
    }

    /**
     Trace the elapsed time for the block identified by key.
     @param key block identifier
    **/
    static public function end(key:String) {
        var start = _spans.get(key);
        if (start != null) {
            trace('${key} took ${Date.now().getTime() - start}ms');
        }
    }

}
