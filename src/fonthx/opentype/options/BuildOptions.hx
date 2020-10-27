package fonthx.opentype.options;

import haxe.ds.StringMap;

@:enum
abstract BuildOptions(String) to String {
    var useFixedCoordinatesInCFF = 'useFixedCoordinatesInCFF';
}

class DefaultOptions {
    public static function provide():StringMap<String> {
        return [
            useFixedCoordinatesInCFF => 'false'
        ];
    }
}
