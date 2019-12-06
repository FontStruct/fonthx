package fonthx.model.font.features;

/**
* @see https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags
**/

@:enum
abstract FeatureTag(String) {

    public var FEAT_AALT = 'aalt';
    public var FEAT_ABVF = 'abvf';
    public var FEAT_ABVM = 'abvm';
    public var FEAT_ABVS = 'abvs';
    public var FEAT_AFRC = 'afrc';
    public var FEAT_AKHN = 'akhn';
    public var FEAT_BLWF = 'blwf';
    public var FEAT_BLWM = 'blwm';
    public var FEAT_BLWS = 'blws';
    public var FEAT_CALT = 'calt';
    public var FEAT_CASE = 'case';
    public var FEAT_CCMP = 'ccmp';
    public var FEAT_CFAR = 'cfar';
    public var FEAT_CJCT = 'cjct';
    public var FEAT_CLIG = 'clig';
    public var FEAT_CPCT = 'cpct';
    public var FEAT_CPSP = 'cpsp';
    public var FEAT_CSWH = 'cswh';
    public var FEAT_CURS = 'curs';
    public var FEAT_C2PC = 'c2pc';
    public var FEAT_C2SC = 'c2sc';
    public var FEAT_DIST = 'dist';
    public var FEAT_DLIG = 'dlig';
    public var FEAT_DNOM = 'dnom';
    public var FEAT_DTLS = 'dtls';
    public var FEAT_EXPT = 'expt';
    public var FEAT_FALT = 'falt';
    public var FEAT_FIN2 = 'fin2';
    public var FEAT_FIN3 = 'fin3';
    public var FEAT_FINA = 'fina';
    public var FEAT_FLAC = 'flac';
    public var FEAT_FRAC = 'frac';
    public var FEAT_FWID = 'fwid';
    public var FEAT_HALF = 'half';
    public var FEAT_HALN = 'haln';
    public var FEAT_HALT = 'halt';
    public var FEAT_HIST = 'hist';
    public var FEAT_HKNA = 'hkna';
    public var FEAT_HLIG = 'hlig';
    public var FEAT_HNGL = 'hngl';
    public var FEAT_HOJO = 'hojo';
    public var FEAT_HWID = 'hwid';
    public var FEAT_INIT = 'init';
    public var FEAT_ISOL = 'isol';
    public var FEAT_ITAL = 'ital';
    public var FEAT_JALT = 'jalt';
    public var FEAT_JP78 = 'jp78';
    public var FEAT_JP83 = 'jp83';
    public var FEAT_JP90 = 'jp90';
    public var FEAT_JP04 = 'jp04';
    public var FEAT_KERN = 'kern';
    public var FEAT_LFBD = 'lfbd';
    public var FEAT_LIGA = 'liga';
    public var FEAT_LJMO = 'ljmo';
    public var FEAT_LNUM = 'lnum';
    public var FEAT_LOCL = 'locl';
    public var FEAT_LTRA = 'ltra';
    public var FEAT_LTRM = 'ltrm';
    public var FEAT_MARK = 'mark';
    public var FEAT_MED2 = 'med2';
    public var FEAT_MEDI = 'medi';
    public var FEAT_MGRK = 'mgrk';
    public var FEAT_MKMK = 'mkmk';
    public var FEAT_MSET = 'mset';
    public var FEAT_NALT = 'nalt';
    public var FEAT_NLCK = 'nlck';
    public var FEAT_NUKT = 'nukt';
    public var FEAT_NUMR = 'numr';
    public var FEAT_ONUM = 'onum';
    public var FEAT_OPBD = 'opbd';
    public var FEAT_ORDN = 'ordn';
    public var FEAT_ORNM = 'ornm';
    public var FEAT_PALT = 'palt';
    public var FEAT_PCAP = 'pcap';
    public var FEAT_PKNA = 'pkna';
    public var FEAT_PNUM = 'pnum';
    public var FEAT_PREF = 'pref';
    public var FEAT_PRES = 'pres';
    public var FEAT_PSTF = 'pstf';
    public var FEAT_PSTS = 'psts';
    public var FEAT_PWID = 'pwid';
    public var FEAT_QWID = 'qwid';
    public var FEAT_RAND = 'rand';
    public var FEAT_RCLT = 'rclt';
    public var FEAT_RKRF = 'rkrf';
    public var FEAT_RLIG = 'rlig';
    public var FEAT_RPHF = 'rphf';
    public var FEAT_RTBD = 'rtbd';
    public var FEAT_RTLA = 'rtla';
    public var FEAT_RTLM = 'rtlm';
    public var FEAT_RUBY = 'ruby';
    public var FEAT_RVRN = 'rvrn';
    public var FEAT_SALT = 'salt';
    public var FEAT_SINF = 'sinf';
    public var FEAT_SIZE = 'size';
    public var FEAT_SMCP = 'smcp';
    public var FEAT_SMPL = 'smpl';
    public var FEAT_SS01 = 'ss01';
    public var FEAT_SS02 = 'ss02';
    public var FEAT_SS03 = 'ss03';
    public var FEAT_SS04 = 'ss04';
    public var FEAT_SS05 = 'ss05';
    public var FEAT_SS06 = 'ss06';
    public var FEAT_SS07 = 'ss07';
    public var FEAT_SS08 = 'ss08';
    public var FEAT_SS09 = 'ss09';
    public var FEAT_SS10 = 'ss10';
    public var FEAT_SS11 = 'ss11';
    public var FEAT_SS12 = 'ss12';
    public var FEAT_SS13 = 'ss13';
    public var FEAT_SS14 = 'ss14';
    public var FEAT_SS15 = 'ss15';
    public var FEAT_SS16 = 'ss16';
    public var FEAT_SS17 = 'ss17';
    public var FEAT_SS18 = 'ss18';
    public var FEAT_SS19 = 'ss19';
    public var FEAT_SS20 = 'ss20';
    public var FEAT_SSTY = 'ssty';
    public var FEAT_STCH = 'stch';
    public var FEAT_SUBS = 'subs';
    public var FEAT_SUPS = 'sups';
    public var FEAT_SWSH = 'swsh';
    public var FEAT_TITL = 'titl';
    public var FEAT_TJMO = 'tjmo';
    public var FEAT_TNAM = 'tnam';
    public var FEAT_TNUM = 'tnum';
    public var FEAT_TRAD = 'trad';
    public var FEAT_TWID = 'twid';
    public var FEAT_UNIC = 'unic';
    public var FEAT_VALT = 'valt';
    public var FEAT_VATU = 'vatu';
    public var FEAT_VERT = 'vert';
    public var FEAT_VHAL = 'vhal';
    public var FEAT_VJMO = 'vjmo';
    public var FEAT_VKNA = 'vkna';
    public var FEAT_VKRN = 'vkrn';
    public var FEAT_VPAL = 'vpal';
    public var FEAT_VRT2 = 'vrt2';
    public var FEAT_VRTR = 'vrtr';
    public var FEAT_ZERO = 'zero';
//'cv01' – 'cv99 = 'Characte

    @:to
    public function toString():String {
        return this;
    }

}
