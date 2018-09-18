package fonthx;

@:dox(hide)
class Assets {

    /**
        Convenience wrapper function for accessing embedded text assets
        @param id the id to reference the asset, defined in the relevant project hxml
    **/
    public static function getText(id:String):String {
        return haxe.Resource.getString(id);
    }

}

