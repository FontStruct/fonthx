package fonthx.opentype.constants;

/**
 * Microsoft language ids
 * for the name table
 *
 */
class MicrosoftLanguages {

	// todo: add other languages
	public static var ENU = 0x0409;

    /*
    // https://docs.microsoft.com/en-us/typography/opentype/spec/name#windows-platform-specific-encoding-and-language-ids-platform-id-3
    Afrikaans	South Africa	0436
    Albanian	Albania	041C
    Alsatian	France	0484
    Amharic	Ethiopia	045E
    Arabic	Algeria	1401
    Arabic	Bahrain	3C01
    Arabic	Egypt	0C01
    Arabic	Iraq	0801
    Arabic	Jordan	2C01
    Arabic	Kuwait	3401
    Arabic	Lebanon	3001
    Arabic	Libya	1001
    Arabic	Morocco	1801
    Arabic	Oman	2001
    Arabic	Qatar	4001
    Arabic	Saudi Arabia	0401
    Arabic	Syria	2801
    Arabic	Tunisia	1C01
    Arabic	U.A.E.	3801
    Arabic	Yemen	2401
    Armenian	Armenia	042B
    Assamese	India	044D
    Azeri (Cyrillic)	Azerbaijan	082C
    Azeri (Latin)	Azerbaijan	042C
    Bashkir	Russia	046D
    Basque	Basque	042D
    Belarusian	Belarus	0423
    Bengali	Bangladesh	0845
    Bengali	India	0445
    Bosnian (Cyrillic)	Bosnia and Herzegovina	201A
    Bosnian (Latin)	Bosnia and Herzegovina	141A
    Breton	France	047E
    Bulgarian	Bulgaria	0402
    Catalan	Catalan	0403
    Chinese	Hong Kong S.A.R.	0C04
    Chinese	Macao S.A.R.	1404
    Chinese	People's Republic of China	0804
    Chinese	Singapore	1004
    Chinese	Taiwan	0404
    Corsican	France	0483
    Croatian	Croatia	041A
    Croatian (Latin)	Bosnia and Herzegovina	101A
    Czech	Czech Republic	0405
    Danish	Denmark	0406
    Dari	Afghanistan	048C
    Divehi	Maldives	0465
    Dutch	Belgium	0813
    Dutch	Netherlands	0413
    English	Australia	0C09
    English	Belize	2809
    English	Canada	1009
    English	Caribbean	2409
    English	India	4009
    English	Ireland	1809
    English	Jamaica	2009
    English	Malaysia	4409
    English	New Zealand	1409
    English	Republic of the Philippines	3409
    English	Singapore	4809
    English	South Africa	1C09
    English	Trinidad and Tobago	2C09
    English	United Kingdom	0809
    English	United States	0409
    English	Zimbabwe	3009
    Estonian	Estonia	0425
    Faroese	Faroe Islands	0438
    Filipino	Philippines	0464
    Finnish	Finland	040B
    French	Belgium	080C
    French	Canada	0C0C
    French	France	040C
    French	Luxembourg	140c
    French	Principality of Monaco	180C
    French	Switzerland	100C
    Frisian	Netherlands	0462
    Galician	Galician	0456
    Georgian	Georgia	0437
    German	Austria	0C07
    German	Germany	0407
    German	Liechtenstein	1407
    German	Luxembourg	1007
    German	Switzerland	0807
    Greek	Greece	0408
    Greenlandic	Greenland	046F
    Gujarati	India	0447
    Hausa (Latin)	Nigeria	0468
    Hebrew	Israel	040D
    Hindi	India	0439
    Hungarian	Hungary	040E
    Icelandic	Iceland	040F
    Igbo	Nigeria	0470
    Indonesian	Indonesia	0421
    Inuktitut	Canada	045D
    Inuktitut (Latin)	Canada	085D
    Irish	Ireland	083C
    isiXhosa	South Africa	0434
    isiZulu	South Africa	0435
    Italian	Italy	0410
    Italian	Switzerland	0810
    Japanese	Japan	0411
    Kannada	India	044B
    Kazakh	Kazakhstan	043F
    Khmer	Cambodia	0453
    K'iche	Guatemala	0486
    Kinyarwanda	Rwanda	0487
    Kiswahili	Kenya	0441
    Konkani	India	0457
    Korean	Korea	0412
    Kyrgyz	Kyrgyzstan	0440
    Lao	Lao P.D.R.	0454
    Latvian	Latvia	0426
    Lithuanian	Lithuania	0427
    Lower Sorbian	Germany	082E
    Luxembourgish	Luxembourg	046E
    Macedonian (FYROM)	Former Yugoslav Republic of Macedonia	042F
    Malay	Brunei Darussalam	083E
    Malay	Malaysia	043E
    Malayalam	India	044C
    Maltese	Malta	043A
    Maori	New Zealand	0481
    Mapudungun	Chile	047A
    Marathi	India	044E
    Mohawk	Mohawk	047C
    Mongolian (Cyrillic)	Mongolia	0450
    Mongolian (Traditional)	People's Republic of China	0850
    Nepali	Nepal	0461
    Norwegian (Bokmal)	Norway	0414
    Norwegian (Nynorsk)	Norway	0814
    Occitan	France	0482
    Odia (formerly Oriya)	India	0448
    Pashto	Afghanistan	0463
    Polish	Poland	0415
    Portuguese	Brazil	0416
    Portuguese	Portugal	0816
    Punjabi	India	0446
    Quechua	Bolivia	046B
    Quechua	Ecuador	086B
    Quechua	Peru	0C6B
    Romanian	Romania	0418
    Romansh	Switzerland	0417
    Russian	Russia	0419
    Sami (Inari)	Finland	243B
    Sami (Lule)	Norway	103B
    Sami (Lule)	Sweden	143B
    Sami (Northern)	Finland	0C3B
    Sami (Northern)	Norway	043B
    Sami (Northern)	Sweden	083B
    Sami (Skolt)	Finland	203B
    Sami (Southern)	Norway	183B
    Sami (Southern)	Sweden	1C3B
    Sanskrit	India	044F
    Serbian (Cyrillic)	Bosnia and Herzegovina	1C1A
    Serbian (Cyrillic)	Serbia	0C1A
    Serbian (Latin)	Bosnia and Herzegovina	181A
    Serbian (Latin)	Serbia	081A
    Sesotho sa Leboa	South Africa	046C
    Setswana	South Africa	0432
    Sinhala	Sri Lanka	045B
    Slovak	Slovakia	041B
    Slovenian	Slovenia	0424
    Spanish	Argentina	2C0A
    Spanish	Bolivia	400A
    Spanish	Chile	340A
    Spanish	Colombia	240A
    Spanish	Costa Rica	140A
    Spanish	Dominican Republic	1C0A
    Spanish	Ecuador	300A
    Spanish	El Salvador	440A
    Spanish	Guatemala	100A
    Spanish	Honduras	480A
    Spanish	Mexico	080A
    Spanish	Nicaragua	4C0A
    Spanish	Panama	180A
    Spanish	Paraguay	3C0A
    Spanish	Peru	280A
    Spanish	Puerto Rico	500A
    Spanish (Modern Sort)	Spain	0C0A
    Spanish (Traditional Sort)	Spain	040A
    Spanish	United States	540A
    Spanish	Uruguay	380A
    Spanish	Venezuela	200A
    Sweden	Finland	081D
    Swedish	Sweden	041D
    Syriac	Syria	045A
    Tajik (Cyrillic)	Tajikistan	0428
    Tamazight (Latin)	Algeria	085F
    Tamil	India	0449
    Tatar	Russia	0444
    Telugu	India	044A
    Thai	Thailand	041E
    Tibetan	PRC	0451
    Turkish	Turkey	041F
    Turkmen	Turkmenistan	0442
    Uighur	PRC	0480
    Ukrainian	Ukraine	0422
    Upper Sorbian	Germany	042E
    Urdu	Islamic Republic of Pakistan	0420
    Uzbek (Cyrillic)	Uzbekistan	0843
    Uzbek (Latin)	Uzbekistan	0443
    Vietnamese	Vietnam	042A
    Welsh	United Kingdom	0452
    Wolof	Senegal	0488
    Yakut	Russia	0485
    Yi	PRC	0478
    Yoruba	Nigeria	046A
    */
	
}
