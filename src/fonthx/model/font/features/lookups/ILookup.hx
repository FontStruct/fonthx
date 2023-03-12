package fonthx.model.font.features.lookups;

interface ILookup {
    var idx:Int;
    var flags:Int;
    var type:LookupType;
    var subLookups:Array<ISubLookup>;

}
