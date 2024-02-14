(function ($hx_exports, $global) { "use strict";
$hx_exports["fonthx"] = $hx_exports["fonthx"] || {};
$hx_exports["fonthx"]["examples"] = $hx_exports["fonthx"]["examples"] || {};
$hx_exports["fonthx"]["examples"]["pixelfonter"] = $hx_exports["fonthx"]["examples"]["pixelfonter"] || {};
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
EReg.__name__ = "EReg";
EReg.prototype = {
	r: null
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
HxOverrides.__name__ = "HxOverrides";
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Lambda = function() { };
Lambda.__name__ = "Lambda";
Lambda.fold = function(it,f,first) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		first = f(x1,first);
	}
	return first;
};
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var _ = $getIterator(it);
		while(_.hasNext()) {
			var _1 = _.next();
			++n;
		}
	} else {
		var x = $getIterator(it);
		while(x.hasNext()) {
			var x1 = x.next();
			if(pred(x1)) {
				++n;
			}
		}
	}
	return n;
};
Lambda.find = function(it,f) {
	var v = $getIterator(it);
	while(v.hasNext()) {
		var v1 = v.next();
		if(f(v1)) {
			return v1;
		}
	}
	return null;
};
Math.__name__ = "Math";
var Reflect = function() { };
Reflect.__name__ = "Reflect";
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) {
		return null;
	} else {
		var tmp1;
		if(o.__properties__) {
			tmp = o.__properties__["get_" + field];
			tmp1 = tmp;
		} else {
			tmp1 = false;
		}
		if(tmp1) {
			return o[tmp]();
		} else {
			return o[field];
		}
	}
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	var tmp1;
	if(o.__properties__) {
		tmp = o.__properties__["set_" + field];
		tmp1 = tmp;
	} else {
		tmp1 = false;
	}
	if(tmp1) {
		o[tmp](value);
	} else {
		o[field] = value;
	}
};
var Std = function() { };
Std.__name__ = "Std";
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = "StringBuf";
StringBuf.prototype = {
	b: null
	,__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = "StringTools";
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	while(true) {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
		if(!(n > 0)) {
			break;
		}
	}
	if(digits != null) {
		while(s.length < digits) s = "0" + s;
	}
	return s;
};
var Type = function() { };
Type.__name__ = "Type";
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
};
var fonthx_Assets = function() { };
fonthx_Assets.__name__ = "fonthx.Assets";
fonthx_Assets.getText = function(id) {
	return haxe_Resource.getString(id);
};
var fonthx_examples_pixelfonter_GlyphIdentifier = function(codepoint) {
	if(codepoint == null) {
		codepoint = -1;
	}
	this.codepoint = -1;
	this.name = null;
	this.codepoint = codepoint;
};
fonthx_examples_pixelfonter_GlyphIdentifier.__name__ = "fonthx.examples.pixelfonter.GlyphIdentifier";
fonthx_examples_pixelfonter_GlyphIdentifier.prototype = {
	name: null
	,codepoint: null
	,__class__: fonthx_examples_pixelfonter_GlyphIdentifier
};
var fonthx_examples_pixelfonter_Pixel = function(x,y,color,opacity) {
	if(opacity == null) {
		opacity = 1;
	}
	if(color == null) {
		color = 255;
	}
	this.x = x;
	this.y = y;
	this.color = color;
	this.opacity = opacity;
};
fonthx_examples_pixelfonter_Pixel.__name__ = "fonthx.examples.pixelfonter.Pixel";
fonthx_examples_pixelfonter_Pixel.prototype = {
	x: null
	,y: null
	,color: null
	,opacity: null
	,toString: function() {
		return "(" + this.x + ", " + this.y + ") " + this.color + " " + this.opacity;
	}
	,__class__: fonthx_examples_pixelfonter_Pixel
};
var fonthx_model_font_IFont = function() { };
fonthx_model_font_IFont.__name__ = "fonthx.model.font.IFont";
fonthx_model_font_IFont.__isInterface__ = true;
fonthx_model_font_IFont.prototype = {
	get_glyphs: null
	,get_name: null
	,get_author: null
	,get_style: null
	,get_creationDate: null
	,get_minorVersion: null
	,get_majorVersion: null
	,get_gposLayout: null
	,get_gsubLayout: null
	,get_emSquare: null
	,get_palette: null
	,get_description: null
	,get_fullName: null
	,get_styleModifiers: null
	,get_copyright: null
	,get_license: null
	,get_licenseURL: null
	,get_uniqueFamilyName: null
	,get_postscriptName: null
	,get_trademark: null
	,get_manufacturerURL: null
	,get_vendorID: null
	,get_vendorURL: null
	,get_URL: null
	,get_sampleText: null
	,get_idealAscender: null
	,get_idealDescender: null
	,get_realAscender: null
	,get_realDescender: null
	,get_typoLineGap: null
	,glyphs: null
	,name: null
	,author: null
	,style: null
	,creationDate: null
	,minorVersion: null
	,majorVersion: null
	,gposLayout: null
	,gsubLayout: null
	,emSquare: null
	,palette: null
	,description: null
	,fullName: null
	,styleModifiers: null
	,copyright: null
	,license: null
	,licenseURL: null
	,uniqueFamilyName: null
	,postscriptName: null
	,trademark: null
	,manufacturerURL: null
	,vendorID: null
	,vendorURL: null
	,URL: null
	,sampleText: null
	,idealAscender: null
	,idealDescender: null
	,realAscender: null
	,realDescender: null
	,typoLineGap: null
	,getGlyphForCodepoint: null
	,getGlyphIndexForGlyph: null
	,getGlyphIndexForCodepoint: null
	,getGlyphIndexForName: null
	,getKerningPairs: null
	,getLineGap: null
	,getNumberOfHMetrics: null
	,hasKerning: null
	,isFixedPitch: null
	,getItalicAngle: null
	,getUnderlinePosition: null
	,getUnderlineThickness: null
	,sortGlyphs: null
	,__class__: fonthx_model_font_IFont
	,__properties__: {get_typoLineGap:"get_typoLineGap",get_realDescender:"get_realDescender",get_realAscender:"get_realAscender",get_idealDescender:"get_idealDescender",get_idealAscender:"get_idealAscender",get_sampleText:"get_sampleText",get_URL:"get_URL",get_vendorURL:"get_vendorURL",get_vendorID:"get_vendorID",get_manufacturerURL:"get_manufacturerURL",get_trademark:"get_trademark",get_postscriptName:"get_postscriptName",get_uniqueFamilyName:"get_uniqueFamilyName",get_licenseURL:"get_licenseURL",get_license:"get_license",get_copyright:"get_copyright",get_styleModifiers:"get_styleModifiers",get_fullName:"get_fullName",get_description:"get_description",get_palette:"get_palette",get_emSquare:"get_emSquare",get_gsubLayout:"get_gsubLayout",get_gposLayout:"get_gposLayout",get_majorVersion:"get_majorVersion",get_minorVersion:"get_minorVersion",get_creationDate:"get_creationDate",get_style:"get_style",get_author:"get_author",get_name:"get_name",get_glyphs:"get_glyphs"}
};
var fonthx_model_font_AbstractFont = function() {
	this.glyphs = [];
	this.set_name("Unnamed");
	this.majorVersion = 1;
	this.minorVersion = 0;
	this.set_style("Regular");
	this.copyright = "";
	this.description = "";
	this.set_emSquare(1000);
	this.gposLayout = new fonthx_model_font_features_Layout();
	this.gsubLayout = new fonthx_model_font_features_Layout();
};
fonthx_model_font_AbstractFont.__name__ = "fonthx.model.font.AbstractFont";
fonthx_model_font_AbstractFont.__interfaces__ = [fonthx_model_font_IFont];
fonthx_model_font_AbstractFont.prototype = {
	glyphs: null
	,name: null
	,emSquare: null
	,style: null
	,sampleText: null
	,idealAscender: null
	,idealDescender: null
	,realAscender: null
	,realDescender: null
	,typoLineGap: null
	,gposLayout: null
	,gsubLayout: null
	,copyright: null
	,creationDate: null
	,author: null
	,description: null
	,uniqueFamilyName: null
	,fullName: null
	,minorVersion: null
	,majorVersion: null
	,postscriptName: null
	,trademark: null
	,manufacturerURL: null
	,vendorID: null
	,vendorURL: null
	,URL: null
	,license: null
	,licenseURL: null
	,styleModifiers: null
	,palette: null
	,getGlyphForCodepoint: function(cp) {
		return Lambda.find(this.get_glyphs(),function(g) {
			return g.get_codepoint() == cp;
		});
	}
	,getGlyphIndexForGlyph: function(g) {
		var idx = this.getGlyphIndexForCodepoint(g.get_codepoint());
		if(idx == -1) {
			idx = this.getGlyphIndexForName(g.get_name());
		}
		return idx;
	}
	,getGlyphIndexForCodepoint: function(cp) {
		if(cp < 1) {
			return -1;
		}
		var _g = 0;
		var _g1 = this.get_glyphs().length;
		while(_g < _g1) {
			var i = _g++;
			if(this.get_glyphs()[i].get_codepoint() == cp) {
				return i;
			}
		}
		return -1;
	}
	,getGlyphIndexForName: function(name) {
		if(name == null || name.length == 0) {
			return -1;
		}
		var _g = 0;
		var _g1 = this.get_glyphs().length;
		while(_g < _g1) {
			var i = _g++;
			if(this.get_glyphs()[i].get_name() == name) {
				return i;
			}
		}
		return -1;
	}
	,get_name: function() {
		return this.name;
	}
	,set_name: function(value) {
		return this.name = value;
	}
	,get_style: function() {
		return this.style;
	}
	,set_style: function(value) {
		return this.style = value;
	}
	,get_copyright: function() {
		return this.copyright;
	}
	,set_copyright: function(value) {
		return this.copyright = value;
	}
	,get_creationDate: function() {
		return this.creationDate;
	}
	,set_creationDate: function(value) {
		return this.creationDate = value;
	}
	,get_author: function() {
		return this.author;
	}
	,set_author: function(value) {
		return this.author = value;
	}
	,get_description: function() {
		return this.description;
	}
	,set_description: function(value) {
		return this.description = value;
	}
	,get_uniqueFamilyName: function() {
		return this.uniqueFamilyName;
	}
	,set_uniqueFamilyName: function(value) {
		return this.uniqueFamilyName = value;
	}
	,get_fullName: function() {
		return this.fullName;
	}
	,set_fullName: function(value) {
		return this.fullName = value;
	}
	,get_majorVersion: function() {
		return this.majorVersion;
	}
	,get_minorVersion: function() {
		return this.minorVersion;
	}
	,set_majorVersion: function(value) {
		return this.majorVersion = value;
	}
	,set_minorVersion: function(value) {
		return this.minorVersion = value;
	}
	,get_postscriptName: function() {
		return this.postscriptName;
	}
	,set_postscriptName: function(value) {
		return this.postscriptName = value;
	}
	,get_trademark: function() {
		return this.trademark;
	}
	,set_trademark: function(value) {
		return this.trademark = value;
	}
	,get_manufacturerURL: function() {
		return this.manufacturerURL;
	}
	,set_manufacturerURL: function(value) {
		return this.manufacturerURL = value;
	}
	,get_vendorID: function() {
		return "-";
	}
	,get_vendorURL: function() {
		return this.vendorURL;
	}
	,set_vendorURL: function(value) {
		return this.vendorURL = value;
	}
	,get_URL: function() {
		return this.URL;
	}
	,set_URL: function(value) {
		return this.URL = value;
	}
	,get_license: function() {
		return this.license;
	}
	,set_license: function(value) {
		return this.license = value;
	}
	,get_licenseURL: function() {
		return this.licenseURL;
	}
	,set_licenseURL: function(value) {
		return this.licenseURL = value;
	}
	,get_styleModifiers: function() {
		return this.styleModifiers;
	}
	,set_styleModifiers: function(value) {
		return this.styleModifiers = value;
	}
	,get_sampleText: function() {
		return this.sampleText;
	}
	,set_sampleText: function(value) {
		return this.sampleText = value;
	}
	,get_emSquare: function() {
		return this.emSquare;
	}
	,set_emSquare: function(value) {
		return this.emSquare = value;
	}
	,get_idealAscender: function() {
		return this.idealAscender;
	}
	,set_idealAscender: function(value) {
		return this.idealAscender = value;
	}
	,get_idealDescender: function() {
		return this.idealDescender;
	}
	,set_idealDescender: function(value) {
		return this.idealDescender = value;
	}
	,get_realAscender: function() {
		return this.realAscender;
	}
	,set_realAscender: function(value) {
		return this.realAscender = value;
	}
	,get_realDescender: function() {
		return this.realDescender;
	}
	,set_realDescender: function(value) {
		return this.realDescender = value;
	}
	,get_typoLineGap: function() {
		return this.typoLineGap;
	}
	,set_typoLineGap: function(value) {
		return this.typoLineGap = value;
	}
	,get_gsubLayout: function() {
		return this.gsubLayout;
	}
	,get_gposLayout: function() {
		return this.gposLayout;
	}
	,get_glyphs: function() {
		return this.glyphs;
	}
	,getLineGap: function() {
		return 0;
	}
	,getNumberOfHMetrics: function() {
		return 0;
	}
	,hasKerning: function() {
		if(this.getKerningPairs() != null) {
			return this.getKerningPairs().length > 0;
		} else {
			return false;
		}
	}
	,getKerningPairs: function() {
		return null;
	}
	,isFixedPitch: function() {
		return false;
	}
	,getItalicAngle: function() {
		return 0;
	}
	,getUnderlinePosition: function() {
		return this.get_emSquare() / 10 | 0;
	}
	,getUnderlineThickness: function() {
		return this.get_emSquare() / 20 | 0;
	}
	,sortGlyphs: function() {
		this.get_glyphs().sort(function(a,b) {
			if(a.get_name() == ".notdef") {
				return -1;
			}
			return a.get_codepoint() - b.get_codepoint();
		});
	}
	,get_palette: function() {
		return null;
	}
	,__class__: fonthx_model_font_AbstractFont
	,__properties__: {get_palette:"get_palette",get_styleModifiers:"get_styleModifiers",get_licenseURL:"get_licenseURL",get_license:"get_license",get_URL:"get_URL",get_vendorURL:"get_vendorURL",get_vendorID:"get_vendorID",get_manufacturerURL:"get_manufacturerURL",get_trademark:"get_trademark",get_postscriptName:"get_postscriptName",get_majorVersion:"get_majorVersion",get_minorVersion:"get_minorVersion",get_fullName:"get_fullName",get_uniqueFamilyName:"get_uniqueFamilyName",get_description:"get_description",get_author:"get_author",get_creationDate:"get_creationDate",get_copyright:"get_copyright",get_gsubLayout:"get_gsubLayout",get_gposLayout:"get_gposLayout",set_typoLineGap:"set_typoLineGap",get_typoLineGap:"get_typoLineGap",set_realDescender:"set_realDescender",get_realDescender:"get_realDescender",set_realAscender:"set_realAscender",get_realAscender:"get_realAscender",set_idealDescender:"set_idealDescender",get_idealDescender:"get_idealDescender",set_idealAscender:"set_idealAscender",get_idealAscender:"get_idealAscender",set_sampleText:"set_sampleText",get_sampleText:"get_sampleText",set_style:"set_style",get_style:"get_style",set_emSquare:"set_emSquare",get_emSquare:"get_emSquare",set_name:"set_name",get_name:"get_name",get_glyphs:"get_glyphs"}
};
var fonthx_examples_pixelfonter_PixelFont = function(name,emSquare,pixelSize,shape) {
	if(shape == null) {
		shape = 1;
	}
	fonthx_model_font_AbstractFont.call(this);
	this.set_name(name);
	this.set_emSquare(emSquare);
	this.pixelSize = pixelSize;
	this.shape = shape;
	this.set_idealAscender(emSquare + pixelSize * 2);
	this.set_idealDescender(0);
	this.set_realAscender(emSquare + pixelSize * 2);
	this.set_realDescender(0);
	this.set_typoLineGap(emSquare);
	this.kerningSubLookup = new fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup();
	this._palette = new fonthx_model_color_Palette();
	this.get_palette().addColor(255);
};
fonthx_examples_pixelfonter_PixelFont.__name__ = "fonthx.examples.pixelfonter.PixelFont";
fonthx_examples_pixelfonter_PixelFont.__interfaces__ = [fonthx_model_font_IFont];
fonthx_examples_pixelfonter_PixelFont.autoKernGlyphs = function(left,right) {
	if(left.getPixels().length == 0 || right.getPixels().length == 0) {
		return 0;
	}
	var leftBounds = left.getGridBounds();
	var rightBounds = right.getGridBounds();
	var leftPixels = left.getPixels();
	var rightPixels = right.getPixels();
	var leftLeadEdgePixels_h = { };
	var _g = 0;
	while(_g < leftPixels.length) {
		var px = leftPixels[_g];
		++_g;
		if(!leftLeadEdgePixels_h.hasOwnProperty(px.y) || px.x > leftLeadEdgePixels_h[px.y]) {
			var v = px.x;
			leftLeadEdgePixels_h[px.y] = v;
		}
	}
	var rightTrailEdgePixels = new haxe_ds_IntMap();
	var _g = 0;
	while(_g < rightPixels.length) {
		var px = rightPixels[_g];
		++_g;
		if(!rightTrailEdgePixels.h.hasOwnProperty(px.y) || px.x < rightTrailEdgePixels.h[px.y]) {
			var v = px.x;
			rightTrailEdgePixels.h[px.y] = v;
		}
	}
	var leftOffset = 0 - (leftBounds.get_left() | 0);
	var rightOffset = 0 - (rightBounds.get_left() | 0);
	rightOffset += leftBounds.width | 0;
	var kern = 0;
	var closeEnough = false;
	var trailingEdge;
	while(!closeEnough) {
		var y = rightTrailEdgePixels.keys();
		while(y.hasNext()) {
			var y1 = y.next();
			trailingEdge = rightTrailEdgePixels.h[y1] + rightOffset + kern;
			if(leftLeadEdgePixels_h.hasOwnProperty(y1) && trailingEdge == leftLeadEdgePixels_h[y1] + leftOffset + 1 || leftLeadEdgePixels_h.hasOwnProperty(y1 + 1) && trailingEdge == leftLeadEdgePixels_h[y1 + 1] + leftOffset || leftLeadEdgePixels_h.hasOwnProperty(y1 - 1) && trailingEdge == leftLeadEdgePixels_h[y1 - 1] + leftOffset) {
				closeEnough = true;
				break;
			}
		}
		if(kern < -20) {
			kern = 0;
			break;
		}
		if(!closeEnough) {
			--kern;
		}
	}
	return kern;
};
fonthx_examples_pixelfonter_PixelFont.__super__ = fonthx_model_font_AbstractFont;
fonthx_examples_pixelfonter_PixelFont.prototype = $extend(fonthx_model_font_AbstractFont.prototype,{
	pixelSize: null
	,shape: null
	,kerningSubLookup: null
	,_palette: null
	,addGlyph: function(codepoint,name) {
		var glyph = new fonthx_examples_pixelfonter_PixelGlyph(codepoint,name);
		glyph.pixelSize = this.pixelSize;
		glyph.emSquare = this.get_emSquare();
		glyph.shape = this.shape;
		this.get_glyphs().push(glyph);
		return glyph;
	}
	,addDefaultGlyphs: function() {
		var notdef = this.addGlyph(0,".notdef");
		var space = this.addGlyph(32);
		space.bounds = new fonthx_model_geom_Rectangle(0,0,this.pixelSize * 2,this.get_emSquare());
	}
	,prepareForExport: function() {
		this.sortGlyphs();
		var kerning = new fonthx_model_font_features_Feature("kern",true);
		this.get_gposLayout().addFeature(kerning,"latn");
		var kerningLookup = this.autoKern();
		kerning.addLookup(kerningLookup);
		this.get_gposLayout().addLookup(kerningLookup);
	}
	,get_vendorID: function() {
		return "PXFR";
	}
	,get_uniqueFamilyName: function() {
		return "PixelFonter" + this.get_name();
	}
	,get_styleModifiers: function() {
		return "Regular";
	}
	,get_fullName: function() {
		return this.get_uniqueFamilyName() + " " + this.get_styleModifiers();
	}
	,get_postscriptName: function() {
		var _this_r = new RegExp("[^\\x00-\\x7F]]","g".split("u").join(""));
		var psName = this.get_uniqueFamilyName().replace(_this_r,"");
		psName = StringTools.replace(psName," ","");
		return psName;
	}
	,getNumberOfHMetrics: function() {
		return this.get_glyphs().length;
	}
	,getLineGap: function() {
		return 0;
	}
	,getKerningPairs: function() {
		return this.kerningSubLookup.get_pairs();
	}
	,autoKern: function() {
		var lookup = new fonthx_model_font_features_lookups_Lookup(2,true);
		lookup.addSubLookup(this.kerningSubLookup);
		var leftId = 0;
		var _g = 0;
		var _g1 = this.get_glyphs();
		while(_g < _g1.length) {
			var left = _g1[_g];
			++_g;
			var rightId = 0;
			var _g2 = 0;
			var _g3 = this.get_glyphs();
			while(_g2 < _g3.length) {
				var right = _g3[_g2];
				++_g2;
				var kern = fonthx_examples_pixelfonter_PixelFont.autoKernGlyphs(js_Boot.__cast(left , fonthx_examples_pixelfonter_PixelGlyph),js_Boot.__cast(right , fonthx_examples_pixelfonter_PixelGlyph));
				if(kern != 0) {
					kern = kern * this.pixelSize | 0;
					this.kerningSubLookup.addPair(new fonthx_model_font_features_lookups_pairadjustment_PositioningPair(leftId,rightId,kern));
				}
				++rightId;
			}
			++leftId;
		}
		return lookup;
	}
	,get_palette: function() {
		return this._palette;
	}
	,__class__: fonthx_examples_pixelfonter_PixelFont
});
var fonthx_examples_pixelfonter_PixelFonter = function() { };
fonthx_examples_pixelfonter_PixelFonter.__name__ = "fonthx.examples.pixelfonter.PixelFonter";
fonthx_examples_pixelfonter_PixelFonter.build = function(opts) {
	fonthx_utils_ExecutionTimer.start("PixelFonter::generate");
	var codepointSegments = opts.codepointString.split(",");
	var identifiers = Lambda.fold(codepointSegments,function(segment,identifiers) {
		var extremes = segment.split("-");
		if(extremes.length != 2) {
			var identifier = new fonthx_examples_pixelfonter_GlyphIdentifier();
			if(Std.parseInt(segment) > 0) {
				identifier.codepoint = Std.parseInt(segment);
			} else {
				identifier.name = segment;
			}
			identifiers.push(identifier);
			return identifiers;
		}
		var _g = Std.parseInt(extremes[0]);
		var _g1 = Std.parseInt(extremes[1]) + 1;
		while(_g < _g1) {
			var i = _g++;
			identifiers.push(new fonthx_examples_pixelfonter_GlyphIdentifier(i));
		}
		return identifiers;
	},[]);
	var em = 1024;
	var pixelSize = em / opts.glyphWidth | 0;
	var font = new fonthx_examples_pixelfonter_PixelFont(opts.name,em,pixelSize,opts.shape);
	var numRows = opts.imageHeight / opts.glyphHeight;
	var _g = 0;
	var _g1 = identifiers.length;
	while(_g < _g1) {
		var idx = _g++;
		var glyph = font.addGlyph(identifiers[idx].codepoint,identifiers[idx].name);
		var _g2 = 0;
		var _g3 = opts.glyphHeight;
		while(_g2 < _g3) {
			var dy = _g2++;
			var _g4 = 0;
			var _g5 = opts.glyphWidth;
			while(_g4 < _g5) {
				var dx = _g4++;
				var x = idx * opts.glyphWidth + dx;
				var row = Math.floor(x / opts.imageWidth) | 0;
				x %= opts.imageWidth;
				var y = dy + row * opts.glyphHeight;
				var pidx = (y * opts.imageWidth + x) * 4;
				var r = opts.pixelData.b[pidx + 2];
				var g = opts.pixelData.b[pidx + 1];
				var b = opts.pixelData.b[pidx];
				var this1 = r << 24 | g << 16 | b << 8 | 255;
				var color = this1;
				if(color == -1) {
					continue;
				}
				font.get_palette().addColor(color);
				glyph.addPixel(dx,opts.glyphHeight - (dy + 1),color);
			}
		}
	}
	if(opts.svgSheet) {
		var svgBuilder = new fonthx_svg_SVGBuilder();
		var svg = svgBuilder.buildSheet(font.get_glyphs());
		fonthx_utils_ExecutionTimer.end("PixelFonter::generate");
		return haxe_io_Bytes.ofString(svg);
	}
	font.get_gsubLayout().setDefaults("latn");
	font.get_gposLayout().setDefaults("latn");
	font.addDefaultGlyphs();
	var opts1 = opts.includeCOLR;
	if(opts.useComposites) {
		var pixelGlyph = font.addGlyph(0,"pixel");
		pixelGlyph.pixelSize = em;
		pixelGlyph.addPixel(0,0);
		var _g = 0;
		var _g1 = font.get_glyphs();
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g.isComposite()) {
				var pg = js_Boot.__cast(g , fonthx_examples_pixelfonter_PixelGlyph);
				pg.createComponents(pixelGlyph);
			}
		}
	}
	font.prepareForExport();
	fonthx_model_font_glyphnames_GlyphNamer.nameGlyphs(font.get_glyphs());
	if(opts.features != null) {
		var featureSpecParser = new fonthx_services_FeatureSpecParser();
		featureSpecParser.toLayout(opts.features,font);
	}
	var buildOptions = new fonthx_opentype_BuildOptions();
	buildOptions.useSubroutinesInCFF = true;
	buildOptions.useFixedCoordinatesInCFF = opts.floatingPointCoords;
	buildOptions.includeSVG = opts.includeSVG;
	buildOptions.includeCOLR = opts.includeCOLR;
	var bytes = fonthx_opentype_OpenTypeBuilder.build(font,opts.format == "ttf" ? "ttf" : "otf",buildOptions);
	fonthx_utils_ExecutionTimer.end("PixelFonter::generate");
	return bytes;
};
var fonthx_examples_pixelfonter_PixelFonterBrowserApp = $hx_exports["fonthx"]["examples"]["pixelfonter"]["PixelFonterBrowserApp"] = function() { };
fonthx_examples_pixelfonter_PixelFonterBrowserApp.__name__ = "fonthx.examples.pixelfonter.PixelFonterBrowserApp";
fonthx_examples_pixelfonter_PixelFonterBrowserApp.main = function() {
};
fonthx_examples_pixelfonter_PixelFonterBrowserApp.generate = function(imageData,options) {
	var o = new fonthx_examples_pixelfonter_PixelFonterParams(options);
	var bytes = haxe_crypto_Base64.decode(imageData.split(",")[1]);
	var handle = new haxe_io_BytesInput(bytes);
	var png = new format_png_Reader(handle).read();
	o.imageWidth = format_png_Tools.getHeader(png).width;
	o.imageHeight = format_png_Tools.getHeader(png).height;
	o.pixelData = format_png_Tools.extract32(png);
	handle.close();
	var file = fonthx_examples_pixelfonter_PixelFonter.build(o);
	return haxe_crypto_Base64.encode(file);
};
var fonthx_examples_pixelfonter_PixelFonterParams = function(o) {
	this.useComposites = false;
	this.includeCOLR = false;
	this.imageWidth = 0;
	this.imageHeight = 0;
	this.pixelData = null;
	this.features = null;
	if(o != null) {
		var _g = 0;
		var _g1 = Type.getInstanceFields(fonthx_examples_pixelfonter_PixelFonterParams);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(o,field)) {
				Reflect.setProperty(this,field,Reflect.getProperty(o,field));
			}
		}
	}
};
fonthx_examples_pixelfonter_PixelFonterParams.__name__ = "fonthx.examples.pixelfonter.PixelFonterParams";
fonthx_examples_pixelfonter_PixelFonterParams.prototype = {
	glyphWidth: null
	,glyphHeight: null
	,codepointString: null
	,name: null
	,format: null
	,outputPath: null
	,shape: null
	,includeSVG: null
	,includeCOLR: null
	,w: null
	,svgSheet: null
	,floatingPointCoords: null
	,useComposites: null
	,features: null
	,imageWidth: null
	,imageHeight: null
	,pixelData: null
	,__class__: fonthx_examples_pixelfonter_PixelFonterParams
};
var fonthx_model_font_IContourGlyph = function() { };
fonthx_model_font_IContourGlyph.__name__ = "fonthx.model.font.IContourGlyph";
fonthx_model_font_IContourGlyph.__isInterface__ = true;
fonthx_model_font_IContourGlyph.prototype = {
	get_codepoint: null
	,set_codepoint: null
	,get_numContours: null
	,get_numPoints: null
	,get_advancedWidth: null
	,get_lsb: null
	,set_lsb: null
	,get_rsb: null
	,set_rsb: null
	,get_name: null
	,set_name: null
	,numContours: null
	,numPoints: null
	,advancedWidth: null
	,unmapped: null
	,color: null
	,getBounds: null
	,walkContours: null
	,isComposite: null
	,getComponents: null
	,hasLayers: null
	,getLayers: null
	,__class__: fonthx_model_font_IContourGlyph
	,__properties__: {set_name:"set_name",get_name:"get_name",set_rsb:"set_rsb",get_rsb:"get_rsb",set_lsb:"set_lsb",get_lsb:"get_lsb",get_advancedWidth:"get_advancedWidth",get_numPoints:"get_numPoints",get_numContours:"get_numContours",set_codepoint:"set_codepoint",get_codepoint:"get_codepoint"}
};
var fonthx_model_font_AbstractContourGlyph = function(codepoint,name) {
	if(codepoint == null) {
		codepoint = 0;
	}
	this.color = 255;
	this.set_codepoint(codepoint);
	this.set_name(name);
	this.unmapped = codepoint < 1;
	this.components = [];
};
fonthx_model_font_AbstractContourGlyph.__name__ = "fonthx.model.font.AbstractContourGlyph";
fonthx_model_font_AbstractContourGlyph.__interfaces__ = [fonthx_model_font_IContourGlyph];
fonthx_model_font_AbstractContourGlyph.prototype = {
	components: null
	,layers: null
	,codepoint: null
	,numContours: null
	,numPoints: null
	,advancedWidth: null
	,lsb: null
	,rsb: null
	,name: null
	,unmapped: null
	,color: null
	,getBounds: function() {
		return null;
	}
	,set_rsb: function(value) {
		return this.rsb = value;
	}
	,get_rsb: function() {
		return this.rsb;
	}
	,set_lsb: function(value) {
		return this.lsb = value;
	}
	,get_lsb: function() {
		return this.lsb;
	}
	,get_advancedWidth: function() {
		return this.advancedWidth;
	}
	,get_numPoints: function() {
		return this.numPoints;
	}
	,get_numContours: function() {
		return this.numContours;
	}
	,set_codepoint: function(value) {
		return this.codepoint = value;
	}
	,get_codepoint: function() {
		return this.codepoint;
	}
	,set_name: function(value) {
		return this.name = value;
	}
	,get_name: function() {
		return this.name;
	}
	,walkContours: function(consumer,options) {
	}
	,isComposite: function() {
		return this.components.length > 0;
	}
	,getComponents: function() {
		return this.components;
	}
	,hasLayers: function() {
		return this.layers.length > 0;
	}
	,getLayers: function() {
		return this.layers;
	}
	,__class__: fonthx_model_font_AbstractContourGlyph
	,__properties__: {set_name:"set_name",get_name:"get_name",set_rsb:"set_rsb",get_rsb:"get_rsb",set_lsb:"set_lsb",get_lsb:"get_lsb",get_advancedWidth:"get_advancedWidth",get_numPoints:"get_numPoints",get_numContours:"get_numContours",set_codepoint:"set_codepoint",get_codepoint:"get_codepoint"}
};
var fonthx_examples_pixelfonter_PixelGlyph = function(codepoint,name) {
	fonthx_model_font_AbstractContourGlyph.call(this,codepoint,name);
	this.pixels = [];
	this.bounds = null;
	this.gridBounds = null;
};
fonthx_examples_pixelfonter_PixelGlyph.__name__ = "fonthx.examples.pixelfonter.PixelGlyph";
fonthx_examples_pixelfonter_PixelGlyph.__interfaces__ = [fonthx_model_font_IContourGlyph];
fonthx_examples_pixelfonter_PixelGlyph.__super__ = fonthx_model_font_AbstractContourGlyph;
fonthx_examples_pixelfonter_PixelGlyph.prototype = $extend(fonthx_model_font_AbstractContourGlyph.prototype,{
	pixels: null
	,pixelSize: null
	,emSquare: null
	,shape: null
	,bounds: null
	,gridBounds: null
	,addPixel: function(x,y,color) {
		if(color == null) {
			color = 255;
		}
		this.pixels.push(new fonthx_examples_pixelfonter_Pixel(x,y,color));
		if(this.gridBounds == null) {
			this.gridBounds = new fonthx_model_geom_Rectangle(x,y,1,1);
		} else {
			this.gridBounds.add(x,y);
		}
		if(this.bounds == null) {
			this.bounds = new fonthx_model_geom_Rectangle(x * this.pixelSize,y * this.pixelSize,this.pixelSize,this.pixelSize);
		} else {
			this.bounds.extendBounds(new fonthx_model_geom_Rectangle(x * this.pixelSize,y * this.pixelSize,this.pixelSize,this.pixelSize));
		}
	}
	,toString: function() {
		return "Codepoint " + this.get_codepoint() + ": " + this.pixels.toString();
	}
	,getBounds: function() {
		return this.bounds;
	}
	,getGridBounds: function() {
		return this.gridBounds;
	}
	,walkContours: function(consumer,options) {
		consumer.start();
		var props = new fonthx_model_font_PathProperties();
		var _g = 0;
		var _g1 = this.pixels;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			props.fill = p.color;
			consumer.startShape();
			consumer.startGroup();
			consumer.startPath(props);
			if(this.shape == 2) {
				var r = this.pixelSize / 2;
				var c = 0.552284749831 * r;
				var x0 = p.x * this.pixelSize;
				var y0 = p.y * this.pixelSize;
				var x1 = x0 + r;
				var y1 = y0 + r;
				var x2 = x1 + r;
				var y2 = y1 - r;
				var x3 = x2 - r;
				var y3 = y2 - r;
				consumer.moveTo(x0,y0);
				consumer.cubicTo(x0,y0 + c,x1 - c,y1,x1,y1);
				consumer.cubicTo(x1 + c,y1,x2,y2 + c,x2,y2);
				consumer.cubicTo(x2,y2 - c,x3 + c,y3,x3,y3);
				consumer.cubicTo(x3 - c,y3,x0,y0 - c,x0,y0);
			} else {
				var x11 = p.x * this.pixelSize;
				var y11 = p.y * this.pixelSize;
				var x21 = x11 + this.pixelSize;
				var y21 = y11 + this.pixelSize;
				consumer.moveTo(x11,y11);
				consumer.lineTo(x21,y11);
				consumer.lineTo(x21,y21);
				consumer.lineTo(x11,y21);
			}
			consumer.endPath();
			consumer.endGroup();
			consumer.endShape();
		}
		consumer.end();
	}
	,createComponents: function(sourceGlyph) {
		var scale = this.pixelSize / this.emSquare;
		var _g = 0;
		var _g1 = this.pixels;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			var comp = new fonthx_model_font_GlyphComponent(sourceGlyph);
			comp.setScale(scale,scale);
			comp.setOffset(p.x * this.pixelSize,p.y * this.pixelSize);
			this.components.push(comp);
		}
	}
	,getLayers: function() {
		if(this.layers == null) {
			this.layers = [];
			var _g = 0;
			var _g1 = this.pixels;
			while(_g < _g1.length) {
				var p = [_g1[_g]];
				++_g;
				var layerGlyph = js_Boot.__cast(Lambda.find(this.layers,(function(p) {
					return function(g) {
						return g.color == p[0].color;
					};
				})(p)) , fonthx_examples_pixelfonter_PixelGlyph);
				if(layerGlyph == null) {
					layerGlyph = new fonthx_examples_pixelfonter_PixelGlyph(0,["layer",this.get_name(),StringTools.hex(this.get_codepoint()),StringTools.hex(p[0].color >> 8 & 16777215,6)].join("-"));
					layerGlyph.pixelSize = this.pixelSize;
					layerGlyph.emSquare = this.emSquare;
					layerGlyph.shape = this.shape;
					layerGlyph.color = p[0].color;
					this.layers.push(layerGlyph);
				}
				layerGlyph.addPixel(p[0].x,p[0].y,p[0].color);
			}
		}
		return this.layers;
	}
	,hasLayers: function() {
		return this.layers != null;
	}
	,getPixels: function() {
		return this.pixels;
	}
	,get_advancedWidth: function() {
		if(this.bounds == null) {
			return this.pixelSize;
		} else {
			return this.bounds.width + this.pixelSize;
		}
	}
	,get_numPoints: function() {
		return this.pixels.length * 5;
	}
	,get_numContours: function() {
		return this.pixels.length;
	}
	,get_lsb: function() {
		if(this.bounds == null) {
			return 0;
		} else {
			return this.bounds.get_left();
		}
	}
	,get_rsb: function() {
		return this.pixelSize;
	}
	,__class__: fonthx_examples_pixelfonter_PixelGlyph
});
var fonthx_model_color_Palette = function() {
	this.colors = [];
};
fonthx_model_color_Palette.__name__ = "fonthx.model.color.Palette";
fonthx_model_color_Palette.prototype = {
	colors: null
	,addColor: function(color) {
		if(this.colors.indexOf(color) == -1) {
			this.colors.push(color);
		}
	}
	,addRGBA: function(r,g,b,a) {
		if(a == null) {
			a = 255;
		}
		var a1 = a;
		if(a1 == null) {
			a1 = 255;
		}
		var this1 = r << 24 | g << 16 | b << 8 | a1;
		this.addColor(this1);
	}
	,__class__: fonthx_model_color_Palette
};
var fonthx_model_color_RGBAColor = {};
fonthx_model_color_RGBAColor.__properties__ = {get_rgbHex:"get_rgbHex",set_a:"set_a",get_a:"get_a",set_b:"set_b",get_b:"get_b",set_g:"set_g",get_g:"get_g",set_r:"set_r",get_r:"get_r"};
fonthx_model_color_RGBAColor._new = function(rgba) {
	var this1 = rgba;
	return this1;
};
fonthx_model_color_RGBAColor.fromString = function(rgba) {
	var this1 = Std.parseInt(rgba);
	return this1;
};
fonthx_model_color_RGBAColor.fromRGBA = function(r,g,b,a) {
	if(a == null) {
		a = 255;
	}
	var this1 = r << 24 | g << 16 | b << 8 | a;
	return this1;
};
fonthx_model_color_RGBAColor.get_rgbHex = function(this1) {
	return StringTools.hex(this1 >> 8 & 16777215,6);
};
fonthx_model_color_RGBAColor.get_r = function(this1) {
	return this1 >> 24 & 255;
};
fonthx_model_color_RGBAColor.set_r = function(this1,r) {
	var a = this1 & 255;
	if(a == null) {
		a = 255;
	}
	var this2 = r << 24 | (this1 >> 16 & 255) << 16 | (this1 >> 8 & 255) << 8 | a;
	this1 = this2;
	return r;
};
fonthx_model_color_RGBAColor.get_g = function(this1) {
	return this1 >> 16 & 255;
};
fonthx_model_color_RGBAColor.set_g = function(this1,g) {
	var a = this1 & 255;
	if(a == null) {
		a = 255;
	}
	var this2 = (this1 >> 24 & 255) << 24 | g << 16 | (this1 >> 8 & 255) << 8 | a;
	this1 = this2;
	return g;
};
fonthx_model_color_RGBAColor.get_b = function(this1) {
	return this1 >> 8 & 255;
};
fonthx_model_color_RGBAColor.set_b = function(this1,b) {
	var a = this1 & 255;
	if(a == null) {
		a = 255;
	}
	var this2 = (this1 >> 24 & 255) << 24 | (this1 >> 16 & 255) << 16 | b << 8 | a;
	this1 = this2;
	return b;
};
fonthx_model_color_RGBAColor.get_a = function(this1) {
	return this1 & 255;
};
fonthx_model_color_RGBAColor.set_a = function(this1,a) {
	var a1 = a;
	if(a1 == null) {
		a1 = 255;
	}
	var this2 = (this1 >> 24 & 255) << 24 | (this1 >> 16 & 255) << 16 | (this1 >> 8 & 255) << 8 | a1;
	this1 = this2;
	return a;
};
var fonthx_model_font_IContourConsumer = function() { };
fonthx_model_font_IContourConsumer.__name__ = "fonthx.model.font.IContourConsumer";
fonthx_model_font_IContourConsumer.__isInterface__ = true;
fonthx_model_font_IContourConsumer.prototype = {
	start: null
	,startGroup: null
	,startShape: null
	,startPath: null
	,moveTo: null
	,lineTo: null
	,quadTo: null
	,cubicTo: null
	,endPath: null
	,endShape: null
	,endGroup: null
	,end: null
	,__class__: fonthx_model_font_IContourConsumer
};
var fonthx_model_font_AbstractContourConsumer = function() { };
fonthx_model_font_AbstractContourConsumer.__name__ = "fonthx.model.font.AbstractContourConsumer";
fonthx_model_font_AbstractContourConsumer.__interfaces__ = [fonthx_model_font_IContourConsumer];
fonthx_model_font_AbstractContourConsumer.prototype = {
	start: function() {
	}
	,startGroup: function() {
	}
	,startShape: function() {
	}
	,startPath: function(props) {
	}
	,moveTo: function(x,y) {
	}
	,lineTo: function(x,y) {
	}
	,quadTo: function(x1,y1,x2,y2) {
	}
	,cubicTo: function(x1,y1,x2,y2,x3,y3) {
	}
	,endPath: function() {
	}
	,endShape: function() {
	}
	,endGroup: function() {
	}
	,end: function() {
	}
	,__class__: fonthx_model_font_AbstractContourConsumer
};
var fonthx_model_font_ContourOptions = function(mergeType) {
	if(mergeType == null) {
		mergeType = 2;
	}
	this.mergeType = mergeType;
};
fonthx_model_font_ContourOptions.__name__ = "fonthx.model.font.ContourOptions";
fonthx_model_font_ContourOptions.prototype = {
	mergeType: null
	,__class__: fonthx_model_font_ContourOptions
};
var fonthx_model_font_GlyphComponent = function(glyph) {
	this.rotation = 0;
	this.scaleY = 1;
	this.scaleX = 1;
	this.offsetY = 0;
	this.offsetX = 0;
	this.glyph = glyph;
};
fonthx_model_font_GlyphComponent.__name__ = "fonthx.model.font.GlyphComponent";
fonthx_model_font_GlyphComponent.prototype = {
	glyph: null
	,offsetX: null
	,offsetY: null
	,scaleX: null
	,scaleY: null
	,rotation: null
	,setOffset: function(x,y) {
		this.offsetX = x;
		this.offsetY = y;
	}
	,setScale: function(x,y) {
		this.scaleX = x;
		this.scaleY = y;
	}
	,setRotation: function(r) {
		this.rotation = r;
	}
	,__class__: fonthx_model_font_GlyphComponent
};
var fonthx_model_font_PathProperties = function() {
	this.fill = 255;
	this.stroke = null;
	this.opacity = 1;
};
fonthx_model_font_PathProperties.__name__ = "fonthx.model.font.PathProperties";
fonthx_model_font_PathProperties.prototype = {
	fill: null
	,stroke: null
	,opacity: null
	,__class__: fonthx_model_font_PathProperties
};
var fonthx_model_font_features_Feature = function(tag,isPos) {
	if(isPos == null) {
		isPos = false;
	}
	this.tag = tag;
	this.isPos = isPos;
	this.idx = 0;
	this.lookups = [];
};
fonthx_model_font_features_Feature.__name__ = "fonthx.model.font.features.Feature";
fonthx_model_font_features_Feature.prototype = {
	tag: null
	,idx: null
	,lookups: null
	,isPos: null
	,addLookup: function(lookup) {
		this.lookups.push(lookup);
	}
	,__class__: fonthx_model_font_features_Feature
};
var fonthx_model_font_features_FeatureTag = {};
fonthx_model_font_features_FeatureTag.toString = function(this1) {
	return this1;
};
var fonthx_model_font_features_Language = function(tag) {
	this.tag = tag;
	this.features = [];
};
fonthx_model_font_features_Language.__name__ = "fonthx.model.font.features.Language";
fonthx_model_font_features_Language.prototype = {
	tag: null
	,features: null
	,addFeature: function(feature) {
		this.features.push(feature);
	}
	,__class__: fonthx_model_font_features_Language
};
var fonthx_model_font_features_LanguageTag = {};
fonthx_model_font_features_LanguageTag.toString = function(this1) {
	return this1;
};
var fonthx_model_font_features_Layout = function() {
	this.scripts = [];
	this.features = [];
	this.lookups = [];
};
fonthx_model_font_features_Layout.__name__ = "fonthx.model.font.features.Layout";
fonthx_model_font_features_Layout.prototype = {
	scripts: null
	,features: null
	,lookups: null
	,setDefaults: function(scriptTag,addDefault) {
		if(addDefault == null) {
			addDefault = true;
		}
		var script = new fonthx_model_font_features_Script(scriptTag);
		this.addScript(script);
		if(addDefault) {
			var defaultLang = new fonthx_model_font_features_Language("DFLT");
			script.defaultLangSys = defaultLang;
		}
	}
	,addScript: function(script) {
		if(this.getScript(script.tag) != null) {
			return this;
		}
		this.scripts.push(script);
		this.scripts.sort(function(a,b) {
			if(fonthx_model_font_features_ScriptTag.toString(a.tag) > fonthx_model_font_features_ScriptTag.toString(b.tag)) {
				return 1;
			} else if(fonthx_model_font_features_ScriptTag.toString(b.tag) > fonthx_model_font_features_ScriptTag.toString(a.tag)) {
				return -1;
			} else {
				return 0;
			}
		});
		return this;
	}
	,addFeature: function(feature,scriptTag,langTag) {
		this.features.push(feature);
		this.features.sort(function(a,b) {
			if(fonthx_model_font_features_FeatureTag.toString(a.tag) > fonthx_model_font_features_FeatureTag.toString(b.tag)) {
				return 1;
			} else if(fonthx_model_font_features_FeatureTag.toString(b.tag) > fonthx_model_font_features_FeatureTag.toString(a.tag)) {
				return -1;
			} else {
				return 0;
			}
		});
		var idx = 0;
		var _g = 0;
		var _g1 = this.features;
		while(_g < _g1.length) {
			var feature1 = _g1[_g];
			++_g;
			feature1.idx = idx++;
		}
		var script = this.getScript(scriptTag);
		if(script == null) {
			script = this.getDefaultScript();
		}
		if(script == null) {
			console.log("src/fonthx/model/font/features/Layout.hx:59:","No script to add feature to");
			return this;
		}
		var lang = script.getLanguage(langTag);
		if(lang == null) {
			lang = script.defaultLangSys;
		}
		if(lang == null) {
			console.log("src/fonthx/model/font/features/Layout.hx:68:","No language to add feature to");
			return this;
		}
		console.log("src/fonthx/model/font/features/Layout.hx:71:","Adding feature " + (feature.tag == null ? "null" : fonthx_model_font_features_FeatureTag.toString(feature.tag)) + " to " + (script.tag == null ? "null" : fonthx_model_font_features_ScriptTag.toString(script.tag)) + "/" + (lang.tag == null ? "null" : fonthx_model_font_features_LanguageTag.toString(lang.tag)));
		lang.addFeature(feature);
		return this;
	}
	,addLookup: function(lookup) {
		console.log("src/fonthx/model/font/features/Layout.hx:77:","Adding lookup " + (lookup.isPos ? "GPOS" : "GSUB"));
		this.lookups.push(lookup);
		var idx = 0;
		var _g = 0;
		var _g1 = this.lookups;
		while(_g < _g1.length) {
			var lookup = _g1[_g];
			++_g;
			lookup.idx = idx++;
		}
		return this;
	}
	,getScript: function(tag) {
		return Lambda.find(this.scripts,function(s) {
			return s.tag == tag;
		});
	}
	,getDefaultScript: function() {
		if(this.scripts.length == 0) {
			return null;
		}
		var script = this.getScript("DFLT");
		if(script == null) {
			script = this.scripts[0];
		}
		return script;
	}
	,__class__: fonthx_model_font_features_Layout
};
var fonthx_model_font_features_Script = function(tag) {
	this.tag = tag;
	this.languages = [];
	this.defaultLangSys = null;
};
fonthx_model_font_features_Script.__name__ = "fonthx.model.font.features.Script";
fonthx_model_font_features_Script.prototype = {
	tag: null
	,languages: null
	,allLanguages: null
	,defaultLangSys: null
	,addLanguage: function(language) {
		this.languages.push(language);
	}
	,get_allLanguages: function() {
		var all = this.languages.slice();
		if(this.defaultLangSys != null) {
			all.unshift(this.defaultLangSys);
		}
		return all;
	}
	,getLanguage: function(tag) {
		return Lambda.find(this.languages,function(l) {
			return l.tag == tag;
		});
	}
	,__class__: fonthx_model_font_features_Script
	,__properties__: {get_allLanguages:"get_allLanguages"}
};
var fonthx_model_font_features_ScriptTag = {};
fonthx_model_font_features_ScriptTag.toString = function(this1) {
	return this1;
};
var fonthx_model_font_features_lookups_AbstractSubLookup = function(subLookup) {
	this.coveredGlyphIndices = [];
};
fonthx_model_font_features_lookups_AbstractSubLookup.__name__ = "fonthx.model.font.features.lookups.AbstractSubLookup";
fonthx_model_font_features_lookups_AbstractSubLookup.prototype = {
	coveredGlyphIndices: null
	,addGlyphIndex: function(idx) {
		if(this.coveredGlyphIndices.indexOf(idx) == -1) {
			this.coveredGlyphIndices.push(idx);
			this.coveredGlyphIndices.sort(function(a,b) {
				return a - b;
			});
		}
	}
	,canSplit: function() {
		return false;
	}
	,split: function(maxValueCount) {
		return null;
	}
	,__class__: fonthx_model_font_features_lookups_AbstractSubLookup
};
var fonthx_model_font_features_lookups_ILookup = function() { };
fonthx_model_font_features_lookups_ILookup.__name__ = "fonthx.model.font.features.lookups.ILookup";
fonthx_model_font_features_lookups_ILookup.__isInterface__ = true;
fonthx_model_font_features_lookups_ILookup.prototype = {
	idx: null
	,flags: null
	,type: null
	,subLookups: null
	,__class__: fonthx_model_font_features_lookups_ILookup
};
var fonthx_model_font_features_lookups_ISubLookup = function() { };
fonthx_model_font_features_lookups_ISubLookup.__name__ = "fonthx.model.font.features.lookups.ISubLookup";
fonthx_model_font_features_lookups_ISubLookup.__isInterface__ = true;
fonthx_model_font_features_lookups_ISubLookup.prototype = {
	coveredGlyphIndices: null
	,canSplit: null
	,split: null
	,__class__: fonthx_model_font_features_lookups_ISubLookup
};
var fonthx_model_font_features_lookups_Lookup = function(type,isPos) {
	if(isPos == null) {
		isPos = false;
	}
	this.flags = 0;
	this.type = 0;
	this.idx = 0;
	this.subLookups = [];
	this.type = type;
	this.isPos = isPos;
};
fonthx_model_font_features_lookups_Lookup.__name__ = "fonthx.model.font.features.lookups.Lookup";
fonthx_model_font_features_lookups_Lookup.prototype = {
	subLookups: null
	,idx: null
	,type: null
	,isPos: null
	,flags: null
	,addSubLookup: function(subLookup) {
		this.subLookups.push(subLookup);
	}
	,__class__: fonthx_model_font_features_lookups_Lookup
};
var fonthx_model_font_features_lookups_LookupType = {};
fonthx_model_font_features_lookups_LookupType.toInt = function(this1) {
	return this1;
};
var fonthx_model_font_features_lookups_ligasub_LigaSubstitution = function(ligatureGlyphId,componentIds) {
	this.ligatureGlyphId = ligatureGlyphId;
	this.componentGlyphIds = componentIds;
	if(this.componentGlyphIds == null) {
		this.componentGlyphIds = [];
	}
};
fonthx_model_font_features_lookups_ligasub_LigaSubstitution.__name__ = "fonthx.model.font.features.lookups.ligasub.LigaSubstitution";
fonthx_model_font_features_lookups_ligasub_LigaSubstitution.prototype = {
	ligatureGlyphId: null
	,componentGlyphIds: null
	,add: function(componentId) {
		this.componentGlyphIds.push(componentId);
	}
	,__class__: fonthx_model_font_features_lookups_ligasub_LigaSubstitution
};
var fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup = function() {
	fonthx_model_font_features_lookups_AbstractSubLookup.call(this);
	this.subs = [];
};
fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup.__name__ = "fonthx.model.font.features.lookups.ligasub.LigaSubstitutionSubLookup";
fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup.__interfaces__ = [fonthx_model_font_features_lookups_ISubLookup];
fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup.__super__ = fonthx_model_font_features_lookups_AbstractSubLookup;
fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup.prototype = $extend(fonthx_model_font_features_lookups_AbstractSubLookup.prototype,{
	subs: null
	,get_subs: function() {
		return this.subs;
	}
	,addSubstitution: function(ligatureId,componentIds) {
		var sub = new fonthx_model_font_features_lookups_ligasub_LigaSubstitution(ligatureId,componentIds);
		this.get_subs().push(sub);
		return sub;
	}
	,__class__: fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup
	,__properties__: {get_subs:"get_subs"}
});
var fonthx_model_font_features_lookups_pairadjustment_ClassPairAdjustmentPositioningSubLookup = function(format1,format2) {
	if(format2 == null) {
		format2 = 0;
	}
	if(format1 == null) {
		format1 = 4;
	}
	fonthx_model_font_features_lookups_AbstractSubLookup.call(this);
	this.classes = [];
	this.format2 = format2;
	this.format1 = format1;
};
fonthx_model_font_features_lookups_pairadjustment_ClassPairAdjustmentPositioningSubLookup.__name__ = "fonthx.model.font.features.lookups.pairadjustment.ClassPairAdjustmentPositioningSubLookup";
fonthx_model_font_features_lookups_pairadjustment_ClassPairAdjustmentPositioningSubLookup.__interfaces__ = [fonthx_model_font_features_lookups_ISubLookup];
fonthx_model_font_features_lookups_pairadjustment_ClassPairAdjustmentPositioningSubLookup.__super__ = fonthx_model_font_features_lookups_AbstractSubLookup;
fonthx_model_font_features_lookups_pairadjustment_ClassPairAdjustmentPositioningSubLookup.prototype = $extend(fonthx_model_font_features_lookups_AbstractSubLookup.prototype,{
	classes: null
	,format1: null
	,format2: null
	,get_classes: function() {
		return this.classes;
	}
	,addClass: function(clazz) {
		this.get_classes().push(clazz);
		var _g = 0;
		var _g1 = clazz.pairs;
		while(_g < _g1.length) {
			var pair = _g1[_g];
			++_g;
			this.addGlyphIndex(pair[0]);
		}
	}
	,addClasses: function(classes) {
		var _g = 0;
		while(_g < classes.length) {
			var clazz = classes[_g];
			++_g;
			this.addClass(clazz);
		}
	}
	,__class__: fonthx_model_font_features_lookups_pairadjustment_ClassPairAdjustmentPositioningSubLookup
	,__properties__: {get_classes:"get_classes"}
});
var fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup = function(format1,format2) {
	if(format2 == null) {
		format2 = 0;
	}
	if(format1 == null) {
		format1 = 4;
	}
	fonthx_model_font_features_lookups_AbstractSubLookup.call(this);
	this.pairs = [];
	this.format1 = format1;
	this.format2 = format2;
};
fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup.__name__ = "fonthx.model.font.features.lookups.pairadjustment.PairAdjustmentPositioningSubLookup";
fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup.__interfaces__ = [fonthx_model_font_features_lookups_ISubLookup];
fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup.__super__ = fonthx_model_font_features_lookups_AbstractSubLookup;
fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup.prototype = $extend(fonthx_model_font_features_lookups_AbstractSubLookup.prototype,{
	pairs: null
	,format1: null
	,format2: null
	,reset: function() {
		this.pairs = [];
		this.coveredGlyphIndices = [];
	}
	,get_pairs: function() {
		return this.pairs;
	}
	,addPair: function(pair) {
		this.get_pairs().push(pair);
		this.addGlyphIndex(pair.idx1);
	}
	,addPairs: function(pairs) {
		var _g = 0;
		while(_g < pairs.length) {
			var pair = pairs[_g];
			++_g;
			this.addPair(pair);
		}
	}
	,hasFirstValues: function() {
		return this.format1 != 0;
	}
	,hasSecondValues: function() {
		return this.format2 != 0;
	}
	,canSplit: function() {
		return true;
	}
	,split: function(maxPairsPerTable) {
		var splitLookups = [];
		var lookup = new fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup();
		var _g = 0;
		var _g1 = this.get_pairs();
		while(_g < _g1.length) {
			var pair = _g1[_g];
			++_g;
			lookup.addPair(pair);
			if(lookup.get_pairs().length == maxPairsPerTable) {
				splitLookups.push(lookup);
				lookup = new fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup();
			}
		}
		if(lookup.get_pairs().length > 0) {
			splitLookups.push(lookup);
		}
		return splitLookups;
	}
	,__class__: fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup
	,__properties__: {get_pairs:"get_pairs"}
});
var fonthx_model_font_features_lookups_pairadjustment_PositioningPair = function(left,right,x,y) {
	if(y == null) {
		y = 0;
	}
	this.idx1 = left;
	this.idx2 = right;
	this.x = x;
	this.y = y;
};
fonthx_model_font_features_lookups_pairadjustment_PositioningPair.__name__ = "fonthx.model.font.features.lookups.pairadjustment.PositioningPair";
fonthx_model_font_features_lookups_pairadjustment_PositioningPair.getKey = function(idx1,idx2) {
	return (idx1 == null ? "null" : "" + idx1) + "_" + (idx2 == null ? "null" : "" + idx2);
};
fonthx_model_font_features_lookups_pairadjustment_PositioningPair.prototype = {
	idx1: null
	,idx2: null
	,x: null
	,y: null
	,toString: function() {
		return fonthx_model_font_features_lookups_pairadjustment_PositioningPair.getKey(this.idx1,this.idx2) + ": (" + this.x + "," + this.y + ")";
	}
	,__class__: fonthx_model_font_features_lookups_pairadjustment_PositioningPair
};
var fonthx_model_font_features_lookups_pairadjustment_PositioningPairClass = function(name,value) {
	this.set_name(name);
	this.value = value;
	this.pairs = [];
};
fonthx_model_font_features_lookups_pairadjustment_PositioningPairClass.__name__ = "fonthx.model.font.features.lookups.pairadjustment.PositioningPairClass";
fonthx_model_font_features_lookups_pairadjustment_PositioningPairClass.prototype = {
	name: null
	,pairs: null
	,value: null
	,addPair: function(idx1,idx2) {
		this.pairs.push([idx1,idx2]);
	}
	,toString: function() {
		return this.get_name();
	}
	,get_name: function() {
		return this.name;
	}
	,set_name: function(name) {
		return this.name = name;
	}
	,__class__: fonthx_model_font_features_lookups_pairadjustment_PositioningPairClass
	,__properties__: {set_name:"set_name",get_name:"get_name"}
};
var fonthx_model_font_features_lookups_singlesub_SingleSubstitution = function(fromId,toId) {
	this.fromId = fromId;
	this.toId = toId;
};
fonthx_model_font_features_lookups_singlesub_SingleSubstitution.__name__ = "fonthx.model.font.features.lookups.singlesub.SingleSubstitution";
fonthx_model_font_features_lookups_singlesub_SingleSubstitution.prototype = {
	fromId: null
	,toId: null
	,getDelta: function() {
		return this.toId - this.fromId;
	}
	,__class__: fonthx_model_font_features_lookups_singlesub_SingleSubstitution
};
var fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup = function() {
	fonthx_model_font_features_lookups_AbstractSubLookup.call(this);
	this.subs = [];
};
fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup.__name__ = "fonthx.model.font.features.lookups.singlesub.SingleSubstitutionSubLookup";
fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup.__interfaces__ = [fonthx_model_font_features_lookups_ISubLookup];
fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup.__super__ = fonthx_model_font_features_lookups_AbstractSubLookup;
fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup.prototype = $extend(fonthx_model_font_features_lookups_AbstractSubLookup.prototype,{
	subs: null
	,addSubstitution: function(fromId,toId) {
		var sub = new fonthx_model_font_features_lookups_singlesub_SingleSubstitution(fromId,toId);
		this.get_subs().push(sub);
		return sub;
	}
	,simpleDeltaSubstitutions: function() {
		if(this.get_subs().length < 2) {
			return true;
		}
		var delta = this.get_subs()[0].toId - this.get_subs()[0].fromId;
		var _g = 0;
		var _g1 = this.get_subs();
		while(_g < _g1.length) {
			var sub = _g1[_g];
			++_g;
			if(sub.toId - sub.fromId != delta) {
				return false;
			}
		}
		return true;
	}
	,get_subs: function() {
		return this.subs;
	}
	,__class__: fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup
	,__properties__: {get_subs:"get_subs"}
});
var fonthx_model_font_glyphnames_AGLFN = function() { };
fonthx_model_font_glyphnames_AGLFN.__name__ = "fonthx.model.font.glyphnames.AGLFN";
fonthx_model_font_glyphnames_AGLFN.init = function() {
	if(fonthx_model_font_glyphnames_AGLFN.uvToGlyphName != null) {
		return;
	}
	fonthx_model_font_glyphnames_AGLFN.uvToGlyphName = new haxe_ds_IntMap();
	var text = fonthx_Assets.getText("AGLFN");
	var lines = text.split("\n");
	var splitter_r = new RegExp("\\s+","g".split("u").join(""));
	var _g = 0;
	while(_g < lines.length) {
		var line = lines[_g];
		++_g;
		if(HxOverrides.substr(line,0,1) == "#" || line.length == 0) {
			continue;
		}
		var parts = line.split(";");
		if(parts.length != 3) {
			continue;
		}
		fonthx_model_font_glyphnames_AGLFN.uvToGlyphName.h[Std.parseInt("0x" + parts[0])] = parts[1];
	}
};
var fonthx_model_font_glyphnames_GlyphNamer = function() { };
fonthx_model_font_glyphnames_GlyphNamer.__name__ = "fonthx.model.font.glyphnames.GlyphNamer";
fonthx_model_font_glyphnames_GlyphNamer.nameGlyphs = function(glyphs) {
	fonthx_model_font_glyphnames_AGLFN.init();
	var idx = 0;
	var _g = 0;
	while(_g < glyphs.length) {
		var g = glyphs[_g];
		++_g;
		if(g.get_name() != null) {
			continue;
		}
		if(g.get_codepoint() > 0) {
			var _this = fonthx_model_font_glyphnames_AGLFN.uvToGlyphName;
			var key = g.get_codepoint();
			if(_this.h.hasOwnProperty(key)) {
				var _this1 = fonthx_model_font_glyphnames_AGLFN.uvToGlyphName;
				var key1 = g.get_codepoint();
				g.set_name(_this1.h[key1]);
			} else {
				g.set_name("uni" + StringTools.hex(g.get_codepoint()));
			}
		} else {
			g.set_name("glyph" + idx++);
		}
	}
};
var fonthx_model_geom_CubicBezier = function(p0,p1,p2,p3) {
	this.p0 = p0;
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
};
fonthx_model_geom_CubicBezier.__name__ = "fonthx.model.geom.CubicBezier";
fonthx_model_geom_CubicBezier.prototype = {
	p0: null
	,p1: null
	,p2: null
	,p3: null
	,recursionCount: null
	,toQuadratics: function() {
		this.recursionCount = 0;
		var quadPoints = [];
		var q0 = this.p0.clone();
		var q1 = this.getIntersectionPoint(this.p0,this.p1,this.p2,this.p3);
		var q2 = this.p3.clone();
		this.breakCubic(this.p0,this.p1,this.p2,this.p3,q0,q1,q2,0.0,1.0,quadPoints);
		return quadPoints;
	}
	,breakCubic: function(c0,c1,c2,c3,q0,q1,q2,t0,t1,result) {
		this.recursionCount++;
		var midPoint = t0 + (t1 - t0) * 0.5;
		var cubicMidPoint = this.getPointOnCubic(c0,c1,c2,c3,midPoint);
		var quadMidPoint = this.getPointOnQuadratic(q0,q1,q2,0.5);
		var dist = this.distance(quadMidPoint,cubicMidPoint);
		if(dist < fonthx_model_geom_CubicBezier.maxDistance || this.recursionCount > fonthx_model_geom_CubicBezier.recursionTolerance) {
			result.push(q1);
			result.push(q2);
			return;
		}
		var dl = this.derivativeOfCubicBezier(c0,c1,c2,c3,midPoint);
		dl.x += cubicMidPoint.x;
		dl.y += cubicMidPoint.y;
		var qq1 = this.getIntersectionPoint(q0,q1,cubicMidPoint,dl);
		this.breakCubic(c0,c1,c2,c3,q0,qq1,cubicMidPoint,t0,midPoint,result);
		var qq1 = this.getIntersectionPoint(q2,q1,cubicMidPoint,dl);
		this.breakCubic(c0,c1,c2,c3,cubicMidPoint,qq1,q2,midPoint,t1,result);
	}
	,getPointOnCubic: function(p0,p1,p2,p3,t) {
		var tt = t * t;
		var ttt = tt * t;
		var t1 = 1 - t;
		var tt1 = t1 * t1;
		var tt2 = tt1 * t1;
		var tt3 = 3 * t * tt1;
		var tt4 = 3 * tt * t1;
		var x = p0.x * tt2 + p1.x * tt3 + p2.x * tt4 + p3.x * ttt;
		var y = p0.y * tt2 + p1.y * tt3 + p2.y * tt4 + p3.y * ttt;
		return new fonthx_model_geom_Point(x,y);
	}
	,getPointOnQuadratic: function(p0,p1,p2,t) {
		var tt = t * t;
		var t1 = 1 - t;
		var tt1 = t1 * t1;
		var tt4 = 2 * t * t1;
		var x = p0.x * tt1 + p1.x * tt4 + p2.x * tt;
		var y = p0.y * tt1 + p1.y * tt4 + p2.y * tt;
		return new fonthx_model_geom_Point(x,y);
	}
	,getIntersectionPoint: function(a0,a1,b0,b1) {
		var dAx = a1.x - a0.x;
		var dAy = a1.y - a0.y;
		var dBx = b1.x - b0.x;
		var dBy = b1.y - b0.y;
		var Fa = dAx * a0.y - dAy * a0.x;
		var Fb = dBx * b0.y - dBy * b0.x;
		var ddd = dBy * dAx - dBx * dAy;
		var x = 0;
		var y = 0;
		if(ddd != 0) {
			x = (Fa * dBx - Fb * dAx) / ddd;
			y = (Fa * dBy - Fb * dAy) / ddd;
		}
		return new fonthx_model_geom_Point(x,y);
	}
	,distance: function(p0,p1) {
		var vx = p1.x - p0.x;
		var vy = p1.y - p0.y;
		return Math.abs(Math.sqrt(vx * vx + vy * vy));
	}
	,derivativeOfCubicBezier: function(p0,p1,p2,p3,t) {
		var ax = 3 * p1.x - 3 * p2.x - p0.x + p3.x;
		var bx = 3 * (p0.x - 2 * p1.x + p2.x);
		var cx = 3 * (p1.x - p0.x);
		var ay = 3 * p1.y - 3 * p2.y - p0.y + p3.y;
		var by = 3 * (p0.y - 2 * p1.y + p2.y);
		var cy = 3 * (p1.y - p0.y);
		var x = 3 * ax * t * t + 2 * bx * t + cx;
		var y = 3 * ay * t * t + 2 * by * t + cy;
		return new fonthx_model_geom_Point(x,y);
	}
	,__class__: fonthx_model_geom_CubicBezier
};
var fonthx_model_geom_Point = function(x,y,type) {
	if(type == null) {
		type = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
	this.type = type;
};
fonthx_model_geom_Point.__name__ = "fonthx.model.geom.Point";
fonthx_model_geom_Point.prototype = {
	next: null
	,prev: null
	,type: null
	,x: null
	,y: null
	,clone: function() {
		var clone = new fonthx_model_geom_Point();
		clone.x = this.x;
		clone.y = this.y;
		clone.type = this.type;
		return clone;
	}
	,equals: function(other) {
		if(this.x == other.x && this.y == other.y) {
			return this.type == other.type;
		} else {
			return false;
		}
	}
	,toString: function() {
		return "Pt [" + this.x + "," + this.y + "] " + (this.type == 0 ? "ON" : "OFF");
	}
	,__class__: fonthx_model_geom_Point
};
var fonthx_model_geom_Rectangle = function(x,y,width,height) {
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
fonthx_model_geom_Rectangle.__name__ = "fonthx.model.geom.Rectangle";
fonthx_model_geom_Rectangle.prototype = {
	height: null
	,width: null
	,x: null
	,y: null
	,clone: function() {
		return new fonthx_model_geom_Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		if(x >= this.x && y >= this.y && x < this.get_right()) {
			return y < this.get_bottom();
		} else {
			return false;
		}
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) {
			this.set_right(r.get_right());
		}
		if(r.get_bottom() > this.get_bottom()) {
			this.set_bottom(r.get_bottom());
		}
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x ? toIntersect.x : this.x;
		var x1 = this.get_right() > toIntersect.get_right() ? toIntersect.get_right() : this.get_right();
		if(x1 <= x0) {
			return false;
		}
		var y0 = this.y < toIntersect.y ? toIntersect.y : this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom() ? toIntersect.get_bottom() : this.get_bottom();
		return y1 > y0;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,add: function(x,y) {
		this.extendBounds(new fonthx_model_geom_Rectangle(x,y,0,0));
	}
	,toString: function() {
		return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")";
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x ? toUnion.x : this.x;
		var x1 = this.get_right() < toUnion.get_right() ? toUnion.get_right() : this.get_right();
		var y0 = this.y > toUnion.y ? toUnion.y : this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom() ? toUnion.get_bottom() : this.get_bottom();
		return new fonthx_model_geom_Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(value) {
		this.height = value - this.y;
		return value;
	}
	,get_bottomRight: function() {
		return new fonthx_model_geom_Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(value) {
		this.width = value.x - this.x;
		this.height = value.y - this.y;
		return value.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(value) {
		this.width -= value - this.x;
		this.x = value;
		return value;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(value) {
		this.width = value - this.x;
		return value;
	}
	,get_size: function() {
		return new fonthx_model_geom_Point(this.width,this.height);
	}
	,set_size: function(value) {
		this.width = value.x;
		this.height = value.y;
		return value.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(value) {
		this.height -= value - this.y;
		this.y = value;
		return value;
	}
	,get_topLeft: function() {
		return new fonthx_model_geom_Point(this.x,this.y);
	}
	,set_topLeft: function(value) {
		this.x = value.x;
		this.y = value.y;
		return value.clone();
	}
	,__class__: fonthx_model_geom_Rectangle
	,__properties__: {set_topLeft:"set_topLeft",get_topLeft:"get_topLeft",set_top:"set_top",get_top:"get_top",set_size:"set_size",get_size:"get_size",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_bottom:"set_bottom",get_bottom:"get_bottom"}
};
var fonthx_opentype_BuildOptions = function() {
	this.namingEncodings = [{ platformId : fonthx_opentype_constants_Platform.UNICODE, encodingId : fonthx_opentype_constants_UnicodeEncoding.UNICODE_1_0, languageId : 0},{ platformId : fonthx_opentype_constants_Platform.MACINTOSH, encodingId : fonthx_opentype_constants_MacintoshEncoding.ROMAN, languageId : fonthx_opentype_constants_MacintoshLanguages.ENGLISH},{ platformId : fonthx_opentype_constants_Platform.MICROSOFT, encodingId : fonthx_opentype_constants_MicrosoftEncoding.UNICODE_BMP_ONLY, languageId : fonthx_opentype_constants_MicrosoftLanguages.ENU}];
	this.sortGlyphs = true;
	this.includeCOLR = false;
	this.includeSVG = false;
	this.useSubroutinesInCFF = false;
	this.useFixedCoordinatesInCFF = false;
	this.extraNamingRecords = new haxe_ds_IntMap();
};
fonthx_opentype_BuildOptions.__name__ = "fonthx.opentype.BuildOptions";
fonthx_opentype_BuildOptions.prototype = {
	useFixedCoordinatesInCFF: null
	,useSubroutinesInCFF: null
	,includeSVG: null
	,includeCOLR: null
	,sortGlyphs: null
	,namingEncodings: null
	,extraNamingRecords: null
	,__class__: fonthx_opentype_BuildOptions
};
var fonthx_opentype_OpenTypeBuilder = function() { };
fonthx_opentype_OpenTypeBuilder.__name__ = "fonthx.opentype.OpenTypeBuilder";
fonthx_opentype_OpenTypeBuilder.build = function(font,format,options) {
	if(format == null) {
		format = "ttf";
	}
	if(options == null) {
		options = new fonthx_opentype_BuildOptions();
	}
	console.log("src/fonthx/opentype/OpenTypeBuilder.hx:64:","Generating font file for " + font.get_name() + " " + font.get_glyphs().length + " glyphs");
	if(font.get_glyphs().length == 0) {
		console.log("src/fonthx/opentype/OpenTypeBuilder.hx:67:","Font file contains no glyphs");
		return null;
	}
	if(options.includeCOLR) {
		var _g = 0;
		var _g1 = font.get_glyphs().length;
		while(_g < _g1) {
			var i = _g++;
			var g = font.get_glyphs()[i];
			var layers = g.getLayers();
			var _g2 = 0;
			while(_g2 < layers.length) {
				var l = layers[_g2];
				++_g2;
				font.get_glyphs().push(l);
			}
		}
	}
	if(options.sortGlyphs) {
		font.sortGlyphs();
	}
	fonthx_model_font_glyphnames_GlyphNamer.nameGlyphs(font.get_glyphs());
	fonthx_utils_ExecutionTimer.start("OpenTypeBuilder.build");
	var tdir = new fonthx_opentype_tables_TableDirectory();
	var ttf = new fonthx_opentype_OpenTypeFont(tdir);
	ttf.addTable(fonthx_opentype_OpenTypeBuilder.createCmap(font));
	ttf.addTable(fonthx_opentype_OpenTypeBuilder.createFontHeader(font,format));
	ttf.addTable(fonthx_opentype_OpenTypeBuilder.createHorizontalHeaderTable(font));
	ttf.addTable(fonthx_opentype_OpenTypeBuilder.createHorizontalMetricsTable(font));
	if(font.hasKerning()) {
		var numPairs = font.getKerningPairs().length;
		if(numPairs > 10919) {
			console.log("src/fonthx/opentype/OpenTypeBuilder.hx:100:","Too many kerning pairs " + numPairs + ". KERN table will overflow. No KERN table will be written");
		} else {
			ttf.addTable(fonthx_opentype_OpenTypeBuilder.createKerningTable(font));
		}
		ttf.addTable(fonthx_opentype_OpenTypeBuilder.createGPOSTable(font));
	}
	if(font.get_gsubLayout().features.length > 0) {
		ttf.addTable(fonthx_opentype_OpenTypeBuilder.createGSUBTable(font));
	}
	ttf.addTable(fonthx_opentype_OpenTypeBuilder.createMaximumProfileTable(font,format));
	ttf.addTable(fonthx_opentype_OpenTypeBuilder.createNamingTable(font,options));
	ttf.addTable(fonthx_opentype_OpenTypeBuilder.createOS2Table(font));
	ttf.addTable(new fonthx_opentype_tables_PostTable(font,fonthx_opentype_tables_PostTable.VERSION_3_0));
	if(format == "otf") {
		ttf.addTable(fonthx_opentype_OpenTypeBuilder.createCFFTable(font,options));
	} else {
		var glyphTable = new fonthx_opentype_tables_GlyphTable(font);
		ttf.addTable(glyphTable);
		ttf.addTable(new fonthx_opentype_tables_LocationTable(glyphTable));
	}
	if(options.includeSVG) {
		var svgTable = new fonthx_opentype_svg_SVGTable(font);
		ttf.addTable(svgTable);
	}
	if(options.includeCOLR) {
		ttf.addTable(fonthx_opentype_OpenTypeBuilder.createCPALTable(font));
		ttf.addTable(fonthx_opentype_OpenTypeBuilder.createCOLRTable(font,options));
	}
	ttf.addTable(new fonthx_opentype_tables_DSIGTable());
	ttf.addTable(new fonthx_opentype_tables_SnftTable(ttf.getNumTables(),format));
	var bytes = fonthx_opentype_OpenTypeBuilder.writeToBytes(ttf);
	fonthx_utils_ExecutionTimer.end("OpenTypeBuilder.build");
	return bytes;
};
fonthx_opentype_OpenTypeBuilder.writeToBytes = function(ttf) {
	var byteBlocks_h = Object.create(null);
	var numTables = 0;
	var _g = 0;
	var _g1 = fonthx_opentype_tables_Table.compileOrder;
	while(_g < _g1.length) {
		var tag = _g1[_g];
		++_g;
		var table = ttf.getTable(tag);
		if(table == null) {
			continue;
		}
		++numTables;
		var writer = new fonthx_opentype_writers_TrueTypeFileWriter();
		console.log("src/fonthx/opentype/OpenTypeBuilder.hx:156:","Writing " + table.tag);
		table.write(writer);
		table.length = writer.getPosition();
		writer.pad();
		var v = writer.getBytes();
		byteBlocks_h[tag] = v;
		table.checksum = fonthx_opentype_OpenTypeBuilder.calculateChecksum(byteBlocks_h[tag]);
	}
	var offset = 12 + numTables * 16;
	var _g = 0;
	var _g1 = fonthx_opentype_tables_Table.optimalOrder;
	while(_g < _g1.length) {
		var tag = _g1[_g];
		++_g;
		var table = ttf.getTable(tag);
		if(table == null) {
			continue;
		}
		table.offset = offset;
		offset += byteBlocks_h[tag].length;
	}
	var writer = new fonthx_opentype_writers_TrueTypeFileWriter();
	ttf.getTable(fonthx_opentype_tables_Table.TDIR).write(writer);
	var k = fonthx_opentype_tables_Table.TDIR;
	var v = writer.getBytes();
	byteBlocks_h[k] = v;
	writer = new fonthx_opentype_writers_TrueTypeFileWriter();
	ttf.getTable(fonthx_opentype_tables_Table.SFNT).write(writer);
	var k = fonthx_opentype_tables_Table.SFNT;
	var v = writer.getBytes();
	byteBlocks_h[k] = v;
	var b = new haxe_io_BytesBuffer();
	b.addBytes(byteBlocks_h[fonthx_opentype_tables_Table.SFNT],0,byteBlocks_h[fonthx_opentype_tables_Table.SFNT].length);
	b.addBytes(byteBlocks_h[fonthx_opentype_tables_Table.TDIR],0,byteBlocks_h[fonthx_opentype_tables_Table.TDIR].length);
	var _g = 0;
	var _g1 = fonthx_opentype_tables_Table.optimalOrder;
	while(_g < _g1.length) {
		var tag = _g1[_g];
		++_g;
		if(!Object.prototype.hasOwnProperty.call(byteBlocks_h,tag)) {
			continue;
		}
		b.addBytes(byteBlocks_h[tag],0,byteBlocks_h[tag].length);
	}
	var bytes = b.getBytes();
	var csa = -1313820742 - fonthx_opentype_OpenTypeBuilder.calculateChecksum(bytes);
	var offset = ttf.getTable(fonthx_opentype_tables_Table.HEAD).offset + 8;
	bytes.b[offset] = csa >>> 24 & 255;
	bytes.b[offset + 1] = csa >>> 16 & 255;
	bytes.b[offset + 2] = csa >>> 8 & 255;
	bytes.b[offset + 3] = csa & 255;
	return bytes;
};
fonthx_opentype_OpenTypeBuilder.createFontHeader = function(fnt,format) {
	var head = new fonthx_opentype_tables_FontHeader();
	var now = new Date();
	head.setFormat(format).setCreated(fonthx_opentype_utils_Utils.getMillisSince1904(now)).setModified(fonthx_opentype_utils_Utils.getMillisSince1904(now)).setVersion("" + fnt.get_majorVersion() + "." + fnt.get_minorVersion()).setEmSquare(fnt.get_emSquare());
	var bounds = null;
	var _g = 0;
	var _g1 = fnt.get_glyphs();
	while(_g < _g1.length) {
		var g = _g1[_g];
		++_g;
		var gBounds = g.getBounds();
		if(bounds == null) {
			bounds = gBounds;
		} else if(gBounds != null) {
			bounds = bounds.union(gBounds);
		}
	}
	if(bounds == null) {
		bounds = new fonthx_model_geom_Rectangle();
	}
	head.setBounds(bounds).setMacStyle(fonthx_opentype_constants_MacStyle.REGULAR).setFontDirectionHint(2).setLongOffsetFormat(true).setSmallestReadablePixelSize(8);
	return head;
};
fonthx_opentype_OpenTypeBuilder.hasSMP = function(fnt) {
	var _g = 0;
	var _g1 = fnt.get_glyphs();
	while(_g < _g1.length) {
		var g = _g1[_g];
		++_g;
		if(g.get_codepoint() > 65535) {
			return true;
		}
	}
	return false;
};
fonthx_opentype_OpenTypeBuilder.createCmap = function(fnt) {
	var cmap = new fonthx_opentype_tables_cmap_CharacterMapTable();
	cmap.addSubtable(new fonthx_opentype_tables_cmap_CharacterMapFormat4Subtable(0,3,0));
	if(fonthx_opentype_OpenTypeBuilder.hasSMP(fnt)) {
		cmap.addSubtable(new fonthx_opentype_tables_cmap_CharacterMapFormat12Subtable(0,4,0));
	}
	cmap.addSubtable(new fonthx_opentype_tables_cmap_CharacterMapFormat4Subtable(3,1,0));
	var _g = 0;
	var _g1 = cmap.getSubtables();
	while(_g < _g1.length) {
		var sub = _g1[_g];
		++_g;
		var _g2 = 0;
		var _g3 = fnt.get_glyphs();
		while(_g2 < _g3.length) {
			var g = _g3[_g2];
			++_g2;
			sub.addCodepoint(g.get_codepoint());
		}
	}
	return cmap;
};
fonthx_opentype_OpenTypeBuilder.createHorizontalHeaderTable = function(font) {
	var table = new fonthx_opentype_tables_HorizontalHeaderTable();
	var minLSB = fonthx_utils_MathUtils.MAX_INT;
	var minRSB = fonthx_utils_MathUtils.MAX_INT;
	var maxAdvancedWidth = 0;
	var xMaxExtent = 0;
	var b;
	var _g = 0;
	var _g1 = font.get_glyphs();
	while(_g < _g1.length) {
		var glyph = _g1[_g];
		++_g;
		if(glyph.get_numContours() <= 0) {
			continue;
		}
		if(glyph.get_advancedWidth() > maxAdvancedWidth) {
			maxAdvancedWidth = glyph.get_advancedWidth() | 0;
		}
		if(glyph.get_lsb() < minLSB) {
			minLSB = glyph.get_lsb() | 0;
		}
		if(glyph.get_rsb() < minRSB && glyph.get_codepoint() != 0) {
			minRSB = glyph.get_rsb() | 0;
		}
		b = glyph.getBounds();
		var xExtent = glyph.get_lsb() + (b == null ? 0 : b.width);
		if(xExtent > xMaxExtent) {
			xMaxExtent = xExtent | 0;
		}
	}
	table.setAdvanceWidthMax(maxAdvancedWidth).setAscender(font.get_realAscender() | 0).setCaretOffset(0).setCaretSlopeRise(1).setCaretSlopeRun(0).setDescender(font.get_realDescender() | 0).setLineGap(font.getLineGap()).setMinLeftSideBearing(minLSB).setMinRightSideBearing(minRSB).setNumberOfHMetrics(font.getNumberOfHMetrics()).setXMaxExtent(xMaxExtent);
	var maxContext = 0;
	var _g = 0;
	var _g1 = font.get_gsubLayout().lookups;
	while(_g < _g1.length) {
		var lookup = _g1[_g];
		++_g;
		if(lookup.type == 1) {
			maxContext = fonthx_utils_MathUtils.maxint(2,maxContext);
		} else {
			var tmp = lookup.type == 4;
		}
	}
	var _g = 0;
	var _g1 = font.get_gposLayout().lookups;
	while(_g < _g1.length) {
		var lookup = _g1[_g];
		++_g;
		if(lookup.type == 2) {
			maxContext = fonthx_utils_MathUtils.maxint(2,maxContext);
		}
	}
	return table;
};
fonthx_opentype_OpenTypeBuilder.createHorizontalMetricsTable = function(fnt) {
	var table = new fonthx_opentype_tables_HorizontalMetricsTable();
	var _g = 0;
	var _g1 = fnt.get_glyphs();
	while(_g < _g1.length) {
		var g = _g1[_g];
		++_g;
		table.addMetric(g.get_advancedWidth() | 0,g.get_lsb() | 0);
	}
	return table;
};
fonthx_opentype_OpenTypeBuilder.createMaximumProfileTable = function(fnt,format) {
	var table = new fonthx_opentype_tables_MaximumProfileTable();
	var isTT = format == "ttf";
	table.setVersion(isTT ? fonthx_opentype_tables_MaximumProfileTable.TRUETYPE_OUTLINES : fonthx_opentype_tables_MaximumProfileTable.CFF_OUTLINES).setNumGlyphs(fnt.get_glyphs().length);
	if(isTT) {
		var maxPoints = 0;
		var maxContours = 0;
		var _g = 0;
		var _g1 = fnt.get_glyphs();
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			var numPoints = g.get_numPoints();
			if(numPoints > maxPoints) {
				maxPoints = numPoints;
			}
			var numContours = g.get_numContours();
			if(numContours > maxContours) {
				maxContours = numContours;
			}
		}
		table.setMaxPoints(maxPoints).setMaxContours(maxContours);
	}
	return table;
};
fonthx_opentype_OpenTypeBuilder.createNamingTable = function(fnt,options) {
	var table = new fonthx_opentype_tables_naming_NamingTable();
	var _g = 0;
	var _g1 = options.namingEncodings;
	while(_g < _g1.length) {
		var encoding = [_g1[_g]];
		++_g;
		var addRecord = (function(encoding) {
			return function(key,content) {
				table.addRecord(key,content,encoding[0]);
			};
		})(encoding);
		addRecord(fonthx_opentype_tables_naming_NamingRecord.COPYRIGHT,fnt.get_copyright());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.FONT_FAMILY,fnt.get_uniqueFamilyName());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.FONT_SUBFAMILY,fnt.get_styleModifiers());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.UNIQUE_NAME,fnt.get_uniqueFamilyName() == null ? null : fnt.get_uniqueFamilyName());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.FULLNAME,fnt.get_fullName());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.VERSION,"Version " + fnt.get_majorVersion() + "." + fnt.get_minorVersion());
		var postscriptName = fonthx_opentype_utils_Utils.postscriptName(fnt.get_postscriptName());
		if(postscriptName.length > 2) {
			addRecord(fonthx_opentype_tables_naming_NamingRecord.PS_NAME,postscriptName);
		}
		addRecord(fonthx_opentype_tables_naming_NamingRecord.TRADEMARK_NOTICE,fnt.get_trademark());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.MANUFACTURER,fnt.get_manufacturerURL());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.DESIGNER,fnt.get_author());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.DESCRIPTION,fnt.get_description());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.VENDOR_URL,fnt.get_vendorURL());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.DESIGNER_URL,fnt.get_URL());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.LICENSE,fnt.get_license());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.LICENSE_URL,fnt.get_licenseURL());
		addRecord(fonthx_opentype_tables_naming_NamingRecord.SAMPLE_TEXT,fnt.get_sampleText());
		if(options.extraNamingRecords != null) {
			var id = options.extraNamingRecords.keys();
			while(id.hasNext()) {
				var id1 = id.next();
				addRecord(id1,options.extraNamingRecords.h[id1]);
			}
		}
	}
	return table;
};
fonthx_opentype_OpenTypeBuilder.createOS2Table = function(font) {
	var table = new fonthx_opentype_tables_OS2Table();
	var halfEM = font.get_emSquare() / 2 | 0;
	table.setVersion(2).setAvgCharWidth(fonthx_opentype_OpenTypeBuilder.calculateAvgCharWidth(font)).setWeightClass(fonthx_opentype_constants_OS2Weight.NORMAL).setWidthClass(fonthx_opentype_constants_OS2Width.NORMAL).setEmbedding(fonthx_opentype_constants_OS2Embeddable.PREVIEW_AND_PRINT).setYSubscriptXSize(halfEM).setYSubscriptYSize(halfEM).setYSubscriptXOffset(0).setYSubscriptYOffset(font.get_idealDescender() / 2 | 0).setYSuperscriptXSize(halfEM).setYSuperscriptYSize(halfEM).setYSuperscriptXOffset(0).setYSuperscriptYOffset(halfEM).setStrikeoutSize(font.get_emSquare() / 20 | 0).setStrikeoutPosition(font.get_emSquare() / 5 | 0);
	var codepoints = [];
	var _g = 0;
	var _g1 = font.get_glyphs();
	while(_g < _g1.length) {
		var g = _g1[_g];
		++_g;
		codepoints.push(g.get_codepoint());
		codepoints.push(g.get_codepoint());
	}
	var os2Bits = fonthx_opentype_os2_OS2Ranges.getFunctionalRanges(codepoints);
	var _g = 0;
	while(_g < os2Bits.length) {
		var bit = os2Bits[_g];
		++_g;
		table.addUnicodeRange(bit);
	}
	table.setVendorID(font.get_vendorID()).setFontSelectionFlags(64).setFirstCharIndex(fonthx_opentype_OpenTypeBuilder.getFirstCharCode(font));
	var lastCharCode = fonthx_opentype_OpenTypeBuilder.getLastCharCode(font);
	table.setLastCharIndex(lastCharCode).setTypoAscender(font.get_idealAscender() | 0).setTypoDescender(font.get_idealDescender() | 0).setTypoLineGap(font.get_typoLineGap() | 0).setWinAscent(font.get_realAscender() | 0).setWinDescent(0 - font.get_realDescender() | 0);
	var sxHeight = 0;
	var x = font.getGlyphForCodepoint(120);
	if(x != null && x.getBounds() != null) {
		sxHeight = x.getBounds().height | 0;
	}
	table.setSxHeight(sxHeight);
	var capHeight = 0;
	var H = font.getGlyphForCodepoint(72);
	if(H != null && H.getBounds() != null) {
		capHeight = H.getBounds().height | 0;
	}
	table.setCapHeight(capHeight).setDefaultChar(0).setBreakChar(32);
	var os2Bits = fonthx_opentype_os2_OS2Codepages.getFunctionalCodepages(codepoints);
	var _g = 0;
	while(_g < os2Bits.length) {
		var bit = os2Bits[_g];
		++_g;
		table.addCodePage(bit);
	}
	return table;
};
fonthx_opentype_OpenTypeBuilder.createKerningTable = function(font) {
	var table = new fonthx_opentype_tables_KerningTable();
	table.setKerningPairs(font.getKerningPairs());
	return table;
};
fonthx_opentype_OpenTypeBuilder.createGPOSTable = function(font) {
	var table = new fonthx_opentype_tables_opentype_GPOSTable();
	table.setLayout(font.get_gposLayout());
	return table;
};
fonthx_opentype_OpenTypeBuilder.createGSUBTable = function(font) {
	var table = new fonthx_opentype_tables_opentype_GSUBTable();
	table.setLayout(font.get_gsubLayout());
	return table;
};
fonthx_opentype_OpenTypeBuilder.createCFFTable = function(font,options) {
	var table = new fonthx_opentype_cff_CFF(font,options);
	return table;
};
fonthx_opentype_OpenTypeBuilder.createCPALTable = function(font) {
	var table = new fonthx_opentype_tables_CPALTable();
	table.addPalette(font.get_palette());
	return table;
};
fonthx_opentype_OpenTypeBuilder.createCOLRTable = function(font,options) {
	var table = new fonthx_opentype_tables_COLRTable(font);
	return table;
};
fonthx_opentype_OpenTypeBuilder.ensureRequiredGlyphs = function(f) {
	var space = f.getGlyphForCodepoint(32);
	var autoSpace = space == null;
	var autoSpace1 = autoSpace;
};
fonthx_opentype_OpenTypeBuilder.calculateAvgCharWidth = function(font) {
	var totalWidth = 0;
	var numWidths = 0;
	var _g = 0;
	var _g1 = font.get_glyphs();
	while(_g < _g1.length) {
		var g = _g1[_g];
		++_g;
		var w = g.get_advancedWidth();
		if(w > 0) {
			totalWidth += w;
			++numWidths;
		}
	}
	var averageWidth = Math.floor(totalWidth / numWidths) | 0;
	return averageWidth;
};
fonthx_opentype_OpenTypeBuilder.getFirstCharCode = function(fnt) {
	var first = Lambda.fold(fnt.get_glyphs(),function(g,acc) {
		if(g.unmapped == false && g.get_codepoint() > 1 && g.get_codepoint() < acc) {
			return g.get_codepoint();
		} else {
			return acc;
		}
	},fonthx_utils_MathUtils.MAX_INT);
	if(first == fonthx_utils_MathUtils.MAX_INT) {
		return 0;
	} else {
		return first;
	}
};
fonthx_opentype_OpenTypeBuilder.getLastCharCode = function(fnt) {
	return Lambda.fold(fnt.get_glyphs(),function(g,acc) {
		if(g.get_codepoint() < 65535 && g.get_codepoint() > acc) {
			return g.get_codepoint();
		} else {
			return acc;
		}
	},0);
};
fonthx_opentype_OpenTypeBuilder.calculateChecksum = function(bytes) {
	var this1 = new haxe__$Int64__$_$_$Int64(0,0);
	var checksum = this1;
	var numBytes = bytes.length;
	var i = 0;
	while(i < numBytes) {
		var x = (bytes.b[i] << 24) + (bytes.b[i + 1] << 16) + (bytes.b[i + 2] << 8) + bytes.b[i + 3];
		var b_high = x >> 31;
		var b_low = x;
		var high = checksum.high + b_high | 0;
		var low = checksum.low + b_low | 0;
		if(haxe_Int32.ucompare(low,checksum.low) < 0) {
			var ret = high++;
			high = high | 0;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(high,low);
		checksum = this1;
		i += 4;
	}
	var this1 = new haxe__$Int64__$_$_$Int64(1,0);
	checksum = haxe_Int64.divMod(checksum,this1).modulus;
	return checksum.low;
};
var fonthx_opentype_OpenTypeFont = function(tdir) {
	this.tdir = tdir;
	this.tables = new haxe_ds_StringMap();
	this.tables.h[tdir.tag] = tdir;
};
fonthx_opentype_OpenTypeFont.__name__ = "fonthx.opentype.OpenTypeFont";
fonthx_opentype_OpenTypeFont.prototype = {
	tables: null
	,tdir: null
	,addTable: function(t) {
		this.tables.h[t.tag] = t;
		if(t.tag == fonthx_opentype_tables_Table.SFNT || t.tag == fonthx_opentype_tables_Table.TDIR) {
			return;
		}
		this.tdir.addEntry(new fonthx_opentype_tables_TableDirectoryEntry(t));
	}
	,getTable: function(tag) {
		return this.tables.h[tag];
	}
	,getTables: function() {
		return this.tables;
	}
	,getNumTables: function() {
		var size = Lambda.count(this.tables);
		if(Object.prototype.hasOwnProperty.call(this.tables.h,fonthx_opentype_tables_Table.SFNT)) {
			--size;
		}
		if(Object.prototype.hasOwnProperty.call(this.tables.h,fonthx_opentype_tables_Table.TDIR)) {
			--size;
		}
		return size;
	}
	,__class__: fonthx_opentype_OpenTypeFont
};
var fonthx_opentype_tables_Table = function(tag) {
	if(tag == null) {
		tag = "";
	}
	this.tag = tag;
	this.offset = 0;
	this.length = 0;
	this.checksum = 0;
};
fonthx_opentype_tables_Table.__name__ = "fonthx.opentype.tables.Table";
fonthx_opentype_tables_Table.prototype = {
	tag: null
	,offset: null
	,length: null
	,checksum: null
	,write: function(tt) {
	}
	,__class__: fonthx_opentype_tables_Table
};
var fonthx_opentype_cff_CFF = function(font,options) {
	this.options = options;
	this.font = font;
	this.strings = new fonthx_opentype_cff_Strings();
	this.sections = new haxe_ds_StringMap();
	this.charstrings = new fonthx_opentype_cff_charstrings_Charstrings();
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.CFF);
};
fonthx_opentype_cff_CFF.__name__ = "fonthx.opentype.cff.CFF";
fonthx_opentype_cff_CFF.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_cff_CFF.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	font: null
	,strings: null
	,sections: null
	,options: null
	,charstrings: null
	,offSize: null
	,write: function(tt) {
		this.createNameIndex();
		this.createCharstringsIndex();
		this.createGlobalSubrsIndex();
		this.createPrivateDict();
		var topDict = this.createTopDict();
		this.createStringsIndex();
		this.createCharsets();
		this.offSize = 4;
		this.length += 4;
		this.length += 64;
		if(this.length < 255) {
			this.offSize = 1;
		} else if(this.length < 65535) {
			this.offSize = 2;
		} else if(this.length < 16777215) {
			this.offSize = 3;
		}
		this.createHeader();
		var topDictBaseLength = topDict.bytes.pos + 4;
		var baseOffset = this.sections.h[fonthx_opentype_cff_CFF.HEADER].length + this.sections.h[fonthx_opentype_cff_CFF.NAME_INDEX].length + topDictBaseLength + this.sections.h[fonthx_opentype_cff_CFF.STRING_INDEX].length + this.sections.h[fonthx_opentype_cff_CFF.GLOBAL_SUBR_INDEX].length;
		var topDictOffsets;
		var topDictOffsetsLength = 0;
		var lastOffsetsLength = 0;
		while(true) {
			lastOffsetsLength = topDictOffsetsLength;
			topDictOffsets = new fonthx_opentype_cff_Dictionary();
			topDictOffsets.addInt(15,baseOffset + topDictOffsetsLength + 1);
			topDictOffsets.addInt(17,baseOffset + topDictOffsetsLength + this.sections.h[fonthx_opentype_cff_CFF.CHARSETS].length + 1);
			topDictOffsetsLength = topDictOffsets.bytes.pos;
			if(!(topDictOffsetsLength - lastOffsetsLength != 0)) {
				break;
			}
		}
		var topDictOffsetBytes = topDictOffsets.bytes.getBytes();
		topDict.bytes.addBytes(topDictOffsetBytes,0,topDictOffsetBytes.length);
		var tdiw = new fonthx_opentype_writers_TrueTypeFileWriter();
		tdiw.writeByteBlockIndex([topDict.bytes.getBytes()]);
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.TOP_DICT_INDEX;
		var value = tdiw.getBytes();
		_this.h[key] = value;
		var sectionOrder = [fonthx_opentype_cff_CFF.HEADER,fonthx_opentype_cff_CFF.NAME_INDEX,fonthx_opentype_cff_CFF.TOP_DICT_INDEX,fonthx_opentype_cff_CFF.STRING_INDEX,fonthx_opentype_cff_CFF.GLOBAL_SUBR_INDEX,fonthx_opentype_cff_CFF.CHARSETS,fonthx_opentype_cff_CFF.CHARSTRINGS_INDEX,fonthx_opentype_cff_CFF.PRIVATE_DICT];
		var _g = 0;
		while(_g < sectionOrder.length) {
			var sectionKey = sectionOrder[_g];
			++_g;
			tt.writeBytes(this.sections.h[sectionKey]);
		}
	}
	,createHeader: function() {
		var tt = this.createWriter();
		tt.writeCard8(1);
		tt.writeCard8(0);
		tt.writeCard8(4);
		tt.writeByte(this.offSize);
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.HEADER;
		var value = tt.getBytes();
		_this.h[key] = value;
	}
	,createTopDict: function() {
		var topDict = new fonthx_opentype_cff_Dictionary();
		topDict.addInt(0,this.strings.require(Std.string("" + this.font.get_majorVersion() + "." + this.font.get_minorVersion())));
		if(this.font.get_description().length > 0) {
			topDict.addInt(1,this.strings.require(this.font.get_description()));
		}
		if(this.font.get_copyright().length > 0) {
			topDict.addInt(3072 | 0,this.strings.require(this.font.get_copyright()));
		}
		topDict.addInt(2,this.strings.require(this.font.get_fullName()));
		topDict.addInt(3,this.strings.require(this.font.get_uniqueFamilyName()));
		topDict.addInt(4,this.strings.require(this.font.get_style()));
		topDict.addBoolean(3072 | 1,this.font.isFixedPitch());
		topDict.addReal(3072 | 2,this.font.getItalicAngle());
		topDict.addInt(3072 | 3,this.font.getUnderlinePosition());
		topDict.addInt(3072 | 4,this.font.getUnderlineThickness());
		topDict.addInt(3072 | 6,2);
		topDict.addInt(16,0);
		topDict.addIntArray(18,[0,0]);
		this.length += topDict.bytes.pos;
		return topDict;
	}
	,createNameIndex: function() {
		var tt = this.createWriter();
		var _this_r = new RegExp("[\\[\\]\\(\\)\\{\\}/<>%\\s]+","g".split("u").join(""));
		var name = HxOverrides.substr(this.font.get_postscriptName().replace(_this_r,""),0,126);
		tt.writeStringsIndex([name]);
		this.length += tt.getPosition();
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.NAME_INDEX;
		var value = tt.getBytes();
		_this.h[key] = value;
	}
	,createGlobalSubrsIndex: function() {
		var tt = this.createWriter();
		var _this = this.charstrings.subrs;
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			var s = _this[i];
			s.addOperation(new fonthx_opentype_cff_charstrings_IntegerOperation(11));
			result[i] = s.getBytes(false).getBytes();
		}
		tt.writeByteBlockIndex(result);
		this.length += tt.getPosition();
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.GLOBAL_SUBR_INDEX;
		var value = tt.getBytes();
		_this.h[key] = value;
	}
	,createCharsets: function() {
		var tt = this.createWriter();
		fonthx_opentype_cff_Charsets.write(tt,this.font,this.strings);
		this.length += tt.getPosition();
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.CHARSETS;
		var value = tt.getBytes();
		_this.h[key] = value;
	}
	,createPrivateDict: function() {
		var tt = this.createWriter();
		this.length += tt.getPosition();
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.PRIVATE_DICT;
		var value = tt.getBytes();
		_this.h[key] = value;
	}
	,createCharstringsIndex: function() {
		var tt = this.createWriter();
		this.charstrings.write(tt,this.font,this.options);
		this.length += tt.getPosition();
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.CHARSTRINGS_INDEX;
		var value = tt.getBytes();
		_this.h[key] = value;
	}
	,createStringsIndex: function() {
		var tt = this.createWriter();
		var _g = 0;
		var _g1 = this.font.get_glyphs();
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g.get_codepoint() == 0) {
				continue;
			}
			this.strings.require(g.get_name());
		}
		tt.writeStringsIndex(this.strings.custom());
		this.length += tt.getPosition();
		var _this = this.sections;
		var key = fonthx_opentype_cff_CFF.STRING_INDEX;
		var value = tt.getBytes();
		_this.h[key] = value;
	}
	,createWriter: function() {
		return new fonthx_opentype_writers_TrueTypeFileWriter();
	}
	,__class__: fonthx_opentype_cff_CFF
});
var fonthx_opentype_cff_Charsets = function() { };
fonthx_opentype_cff_Charsets.__name__ = "fonthx.opentype.cff.Charsets";
fonthx_opentype_cff_Charsets.write = function(tt,f,strings) {
	var notdef = ".notdef";
	var ranges = [];
	var first = -1;
	var end = 0;
	var _g = 0;
	var _g1 = f.get_glyphs();
	while(_g < _g1.length) {
		var g = _g1[_g];
		++_g;
		if(g.get_name() == notdef) {
			continue;
		}
		var sid = strings.sid(g.get_name());
		if(sid != -1) {
			if(first == -1) {
				first = sid;
			} else if(sid != end + 1) {
				ranges.push(new fonthx_opentype_cff__$Charsets_SIDRange(first,end - first));
				first = sid;
			}
			end = sid;
		} else {
			console.log("src/fonthx/opentype/cff/Charsets.hx:31:","SID not found for " + g.get_name());
		}
	}
	if(end > 0) {
		ranges.push(new fonthx_opentype_cff__$Charsets_SIDRange(first,end - first));
	}
	var format = 0;
	if(ranges.length < f.get_glyphs().length * 0.9) {
		format = 1;
		var maxRange = Lambda.fold(ranges,function(r,acc) {
			if(r.length() > acc) {
				acc = r.length();
			}
			return acc;
		},0);
		if(maxRange > 255) {
			format = 2;
		}
	}
	tt.writeCard8(format);
	if(format == 0) {
		var _g = 0;
		var _g1 = f.get_glyphs();
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g.get_name() == notdef) {
				continue;
			}
			var sid = strings.sid(g.get_name());
			if(sid != -1) {
				tt.writeUINT16(sid);
			}
		}
	} else {
		var _g = 0;
		while(_g < ranges.length) {
			var r = ranges[_g];
			++_g;
			tt.writeCard16(r.first);
			if(format == 1) {
				tt.writeCard8(r.remaining);
			} else {
				tt.writeCard16(r.remaining);
			}
		}
	}
};
var fonthx_opentype_cff__$Charsets_SIDRange = function(first,remaining) {
	this.first = first;
	this.remaining = remaining;
};
fonthx_opentype_cff__$Charsets_SIDRange.__name__ = "fonthx.opentype.cff._Charsets.SIDRange";
fonthx_opentype_cff__$Charsets_SIDRange.prototype = {
	first: null
	,remaining: null
	,length: function() {
		return this.remaining;
	}
	,toString: function() {
		return "" + this.first + "…" + this.remaining;
	}
	,__class__: fonthx_opentype_cff__$Charsets_SIDRange
};
var fonthx_opentype_cff_Dictionary = function(bytes) {
	if(bytes == null) {
		this.bytes = new haxe_io_BytesBuffer();
	}
};
fonthx_opentype_cff_Dictionary.__name__ = "fonthx.opentype.cff.Dictionary";
fonthx_opentype_cff_Dictionary.prototype = {
	bytes: null
	,addInt: function(k,v) {
		fonthx_opentype_postscript_Encoder.encodeInt(this.bytes,v);
		fonthx_opentype_postscript_Encoder.encodeOperator(this.bytes,k);
	}
	,addBoolean: function(k,b) {
		this.addInt(k,b ? 1 : 0);
	}
	,addReal: function(k,f) {
		fonthx_opentype_postscript_Encoder.encodeFloat(this.bytes,f);
		fonthx_opentype_postscript_Encoder.encodeOperator(this.bytes,k);
	}
	,addIntArray: function(k,v) {
		var _g = 0;
		while(_g < v.length) {
			var i = v[_g];
			++_g;
			fonthx_opentype_postscript_Encoder.encodeInt(this.bytes,i);
		}
		fonthx_opentype_postscript_Encoder.encodeOperator(this.bytes,k);
	}
	,addByte: function(b) {
		this.bytes.addByte(b);
	}
	,addOperator: function(k) {
		fonthx_opentype_postscript_Encoder.encodeOperator(this.bytes,k);
	}
	,__class__: fonthx_opentype_cff_Dictionary
};
var fonthx_opentype_cff_Strings = function() {
	this.strings = fonthx_opentype_cff_Strings.standards.slice();
};
fonthx_opentype_cff_Strings.__name__ = "fonthx.opentype.cff.Strings";
fonthx_opentype_cff_Strings.prototype = {
	strings: null
	,has: function(s) {
		return this.strings.indexOf(s) != -1;
	}
	,add: function(s) {
		this.strings.push(s);
		return this.strings.length - 1;
	}
	,get: function(idx) {
		return this.strings[idx];
	}
	,sid: function(s) {
		return this.strings.indexOf(s);
	}
	,require: function(s) {
		if(s == null) {
			return -1;
		}
		if(!this.has(s)) {
			return this.add(s);
		}
		return this.strings.indexOf(s);
	}
	,custom: function() {
		return this.strings.slice(fonthx_opentype_cff_Strings.standards.length);
	}
	,toString: function() {
		return this.strings.toString();
	}
	,__class__: fonthx_opentype_cff_Strings
};
var fonthx_opentype_cff_charstrings_IOperation = function() { };
fonthx_opentype_cff_charstrings_IOperation.__name__ = "fonthx.opentype.cff.charstrings.IOperation";
fonthx_opentype_cff_charstrings_IOperation.__isInterface__ = true;
fonthx_opentype_cff_charstrings_IOperation.prototype = {
	get_bytes: null
	,get_lastPoint: null
	,op: null
	,toString: null
	,__class__: fonthx_opentype_cff_charstrings_IOperation
	,__properties__: {get_lastPoint:"get_lastPoint",get_bytes:"get_bytes"}
};
var fonthx_opentype_cff_charstrings_AbstractOperation = function(op,values) {
	this.op = op;
	this.values = values;
};
fonthx_opentype_cff_charstrings_AbstractOperation.__name__ = "fonthx.opentype.cff.charstrings.AbstractOperation";
fonthx_opentype_cff_charstrings_AbstractOperation.__interfaces__ = [fonthx_opentype_cff_charstrings_IOperation];
fonthx_opentype_cff_charstrings_AbstractOperation.prototype = {
	op: null
	,values: null
	,_bytes: null
	,get_bytes: function() {
		if(this._bytes != null) {
			return this._bytes;
		}
		var buffer = new haxe_io_BytesBuffer();
		if(this.values != null) {
			var _g = 0;
			var _g1 = this.values;
			while(_g < _g1.length) {
				var v = _g1[_g];
				++_g;
				this.encodeValue(buffer,v);
			}
		}
		fonthx_opentype_postscript_Encoder.encodeOperator(buffer,this.op);
		this._bytes = buffer.getBytes();
		return this._bytes;
	}
	,encodeValue: function(b,v) {
		fonthx_opentype_postscript_Encoder.encodeInt(b,v | 0);
	}
	,get_lastPoint: function() {
		if(this.values.length > 1) {
			return [this.values[this.values.length - 2],this.values[this.values.length - 1]];
		} else {
			return null;
		}
	}
	,toString: function() {
		var tmp = Std.string(this.op) + ":";
		var _this = this.values;
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			var v = _this[i];
			result[i] = v == null ? "null" : "" + v;
		}
		return tmp + result.join(",");
	}
	,__class__: fonthx_opentype_cff_charstrings_AbstractOperation
	,__properties__: {get_lastPoint:"get_lastPoint",get_bytes:"get_bytes"}
};
var fonthx_opentype_cff_charstrings_Charstring = function(width,useFixed) {
	if(useFixed == null) {
		useFixed = false;
	}
	this.width = width;
	this.useFixed = useFixed;
	this.subpaths = [];
};
fonthx_opentype_cff_charstrings_Charstring.__name__ = "fonthx.opentype.cff.charstrings.Charstring";
fonthx_opentype_cff_charstrings_Charstring.__interfaces__ = [fonthx_model_font_IContourConsumer];
fonthx_opentype_cff_charstrings_Charstring.__super__ = fonthx_model_font_AbstractContourConsumer;
fonthx_opentype_cff_charstrings_Charstring.prototype = $extend(fonthx_model_font_AbstractContourConsumer.prototype,{
	subpaths: null
	,subpath: null
	,useFixed: null
	,width: null
	,pen: null
	,start: function() {
		this.pen = null;
	}
	,startPath: function(props) {
		this.subpath = new fonthx_opentype_cff_charstrings_Subpath();
	}
	,endPath: function() {
		this.subpaths.push(this.subpath);
	}
	,moveTo: function(x,y) {
		if(!this.useFixed) {
			x = Math.round(x);
			y = Math.round(y);
		}
		if(this.pen != null) {
			var dx = x - this.pen.x;
			var dy = y - this.pen.y;
			var tmp = this.pen.x == x && this.pen.y == y;
			if(this.pen.x == x) {
				this.subpath.addOperation(this.createOperation(4,[dy]));
			} else if(this.pen.y == y) {
				this.subpath.addOperation(this.createOperation(22,[dx]));
			} else {
				this.subpath.addOperation(this.createOperation(21,[dx,dy]));
			}
		} else {
			this.subpath.addOperation(this.createOperation(21,[x,y]));
		}
		this.pen = new fonthx_model_geom_Point(x,y);
	}
	,lineTo: function(x,y) {
		if(!this.useFixed) {
			x = Math.round(x);
			y = Math.round(y);
		}
		if(this.pen != null) {
			var dx = x - this.pen.x;
			var dy = y - this.pen.y;
			if(!(this.pen.x == x && this.pen.y == y)) {
				if(this.pen.x == x) {
					this.subpath.addOperation(this.createOperation(7,[dy]));
				} else if(this.pen.y == y) {
					this.subpath.addOperation(this.createOperation(6,[dx]));
				} else {
					this.subpath.addOperation(this.createOperation(5,[dx,dy]));
				}
			}
		} else {
			this.subpath.addOperation(this.createOperation(5,[x,y]));
		}
		this.pen = new fonthx_model_geom_Point(x,y);
	}
	,cubicTo: function(x1,y1,x2,y2,x3,y3) {
		if(!this.useFixed) {
			x1 = Math.round(x1);
			y1 = Math.round(y1);
			x2 = Math.round(x2);
			y2 = Math.round(y2);
			x3 = Math.round(x3);
			y3 = Math.round(y3);
		}
		var x0 = this.pen.x;
		var y0 = this.pen.y;
		this.subpath.addOperation(this.createOperation(8,[x1 - x0,y1 - y0,x2 - x1,y2 - y1,x3 - x2,y3 - y2]));
		this.pen = new fonthx_model_geom_Point(x3,y3);
	}
	,quadTo: function(x1,y1,x2,y2) {
		if(!this.useFixed) {
			x1 = Math.round(x1);
			y1 = Math.round(y1);
			x2 = Math.round(x2);
			y2 = Math.round(y2);
		}
		var x0 = this.pen.x;
		var y0 = this.pen.y;
		this.cubicTo(x0 + 0.66666666666666663 * (x1 - x0),y0 + 0.66666666666666663 * (y1 - y0),x2 + 0.66666666666666663 * (x1 - x2),y2 + 0.66666666666666663 * (y1 - y2),x2,y2);
		this.pen = new fonthx_model_geom_Point(x2,y2);
	}
	,createOperation: function(op,values) {
		if(this.useFixed) {
			return new fonthx_opentype_cff_charstrings_FixedOperation(op,values);
		} else {
			return new fonthx_opentype_cff_charstrings_IntegerOperation(op,values);
		}
	}
	,get_bytes: function() {
		var buffer = new haxe_io_BytesBuffer();
		fonthx_opentype_postscript_Encoder.encodeInt(buffer,this.width | 0);
		var _g = 0;
		var _g1 = this.subpaths;
		while(_g < _g1.length) {
			var subpath = _g1[_g];
			++_g;
			var bytes = subpath.get_bytes();
			buffer.addBytes(bytes,0,bytes.length);
		}
		var endOp = this.createOperation(14,[]).get_bytes();
		buffer.addBytes(endOp,0,endOp.length);
		return buffer.getBytes();
	}
	,toString: function() {
		return Lambda.fold(this.subpaths,function(p,acc) {
			return acc + "," + p.toString();
		},"");
	}
	,__class__: fonthx_opentype_cff_charstrings_Charstring
	,__properties__: {get_bytes:"get_bytes"}
});
var fonthx_opentype_cff_charstrings_Charstrings = function() {
	this.charstrings = [];
	this.subrs = [];
	this.subrLookup = new haxe_ds_StringMap();
};
fonthx_opentype_cff_charstrings_Charstrings.__name__ = "fonthx.opentype.cff.charstrings.Charstrings";
fonthx_opentype_cff_charstrings_Charstrings.prototype = {
	subrs: null
	,subrLookup: null
	,charstrings: null
	,current: null
	,write: function(tt,f,options) {
		var _g = 0;
		var _g1 = f.get_glyphs();
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			var charstring = new fonthx_opentype_cff_charstrings_Charstring(g.get_advancedWidth(),options.useFixedCoordinatesInCFF);
			g.walkContours(charstring);
			this.charstrings.push(charstring);
		}
		if(options.useSubroutinesInCFF) {
			var subpathCounts_h = Object.create(null);
			var _g = 0;
			var _g1 = this.charstrings;
			while(_g < _g1.length) {
				var charstring = _g1[_g];
				++_g;
				var _g2 = 0;
				var _g3 = charstring.subpaths;
				while(_g2 < _g3.length) {
					var subpath = _g3[_g2];
					++_g2;
					var hash = subpath.getHash();
					if(Object.prototype.hasOwnProperty.call(subpathCounts_h,hash) && !Object.prototype.hasOwnProperty.call(this.subrLookup.h,hash)) {
						this.subrLookup.h[hash] = this.subrs.length;
						this.subrs.push(subpath.clone());
					} else {
						subpathCounts_h[hash] = 1;
					}
				}
			}
			var bias = 32768;
			if(this.subrs.length < 33900) {
				bias = 1131;
			}
			if(this.subrs.length < 1240) {
				bias = 107;
			}
			var subCount = 0;
			var _g = 0;
			var _g1 = this.charstrings;
			while(_g < _g1.length) {
				var charstring = _g1[_g];
				++_g;
				var _g2 = 0;
				var _g3 = charstring.subpaths;
				while(_g2 < _g3.length) {
					var subpath = _g3[_g2];
					++_g2;
					var hash = subpath.getHash();
					if(Object.prototype.hasOwnProperty.call(this.subrLookup.h,hash)) {
						++subCount;
						subpath.replaceWithGlobalSubroutine(this.subrLookup.h[hash] - bias);
					}
				}
			}
			console.log("src/fonthx/opentype/cff/charstrings/Charstrings.hx:64:","" + subCount + " subroutine calls");
		}
		var charstringBlocks = [];
		var _g = 0;
		var _g1 = this.charstrings;
		while(_g < _g1.length) {
			var charstring = _g1[_g];
			++_g;
			charstringBlocks.push(charstring.get_bytes());
		}
		tt.writeByteBlockIndex(charstringBlocks);
	}
	,__class__: fonthx_opentype_cff_charstrings_Charstrings
};
var fonthx_opentype_cff_charstrings_FixedOperation = function(op,values) {
	fonthx_opentype_cff_charstrings_AbstractOperation.call(this,op,values);
};
fonthx_opentype_cff_charstrings_FixedOperation.__name__ = "fonthx.opentype.cff.charstrings.FixedOperation";
fonthx_opentype_cff_charstrings_FixedOperation.__super__ = fonthx_opentype_cff_charstrings_AbstractOperation;
fonthx_opentype_cff_charstrings_FixedOperation.prototype = $extend(fonthx_opentype_cff_charstrings_AbstractOperation.prototype,{
	encodeValue: function(buffer,v) {
		var b = fonthx_opentype_types_Fixed.toFixed(v);
		buffer.addByte(255);
		buffer.addByte(b >>> 24 & 255);
		buffer.addByte(b >>> 16 & 255);
		buffer.addByte(b >>> 8 & 255);
		buffer.addByte(b & 255);
	}
	,__class__: fonthx_opentype_cff_charstrings_FixedOperation
});
var fonthx_opentype_cff_charstrings_IntegerOperation = function(op,values) {
	fonthx_opentype_cff_charstrings_AbstractOperation.call(this,op,values);
};
fonthx_opentype_cff_charstrings_IntegerOperation.__name__ = "fonthx.opentype.cff.charstrings.IntegerOperation";
fonthx_opentype_cff_charstrings_IntegerOperation.__super__ = fonthx_opentype_cff_charstrings_AbstractOperation;
fonthx_opentype_cff_charstrings_IntegerOperation.prototype = $extend(fonthx_opentype_cff_charstrings_AbstractOperation.prototype,{
	__class__: fonthx_opentype_cff_charstrings_IntegerOperation
});
var fonthx_opentype_cff_charstrings_Subpath = function() {
	this.ops = [];
};
fonthx_opentype_cff_charstrings_Subpath.__name__ = "fonthx.opentype.cff.charstrings.Subpath";
fonthx_opentype_cff_charstrings_Subpath.prototype = {
	ops: null
	,addOperation: function(op) {
		this.ops.push(op);
		this._bytes = null;
	}
	,_hash: null
	,getHash: function(forceRehash) {
		if(forceRehash == null) {
			forceRehash = false;
		}
		if(this._hash == null || forceRehash) {
			var buf = this.getBytes(false).getBytes();
			var len = buf.length;
			if(len % 16 != 0) {
				var paddedLen = Math.ceil(len / 16) * 16;
				var buf2 = new haxe_io_Bytes(new ArrayBuffer(paddedLen));
				buf2.fill(0,paddedLen,101);
				buf2.blit(0,buf,0,len);
				buf = buf2;
			}
			this._hash = haxe_crypto_Md5.encode(haxe_crypto_Md5.make(buf).toString());
		}
		return this._hash;
	}
	,replaceWithGlobalSubroutine: function(subrIdx) {
		var moveTo = this.ops[0];
		this.ops = [];
		this.addOperation(moveTo);
		this.addOperation(new fonthx_opentype_cff_charstrings_IntegerOperation(29,[subrIdx]));
	}
	,_bytes: null
	,get_bytes: function() {
		if(this._bytes == null) {
			this._bytes = this.getBytes().getBytes();
		}
		return this._bytes;
	}
	,clone: function() {
		var s = new fonthx_opentype_cff_charstrings_Subpath();
		var _g = 0;
		var _g1 = this.ops;
		while(_g < _g1.length) {
			var op = _g1[_g];
			++_g;
			s.addOperation(op);
		}
		return s;
	}
	,getBytes: function(withMoveTo) {
		if(withMoveTo == null) {
			withMoveTo = true;
		}
		var idx = 0;
		return Lambda.fold(this.ops,function(op,b) {
			if(idx != 0 || withMoveTo) {
				b.addBytes(op.get_bytes(),0,op.get_bytes().length);
			}
			idx += 1;
			return b;
		},new haxe_io_BytesBuffer());
	}
	,toString: function() {
		var _this = this.ops;
		var result = new Array(_this.length);
		var _g = 0;
		var _g1 = _this.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = _this[i].toString();
		}
		return result.join("|");
	}
	,__class__: fonthx_opentype_cff_charstrings_Subpath
	,__properties__: {get_bytes:"get_bytes"}
};
var fonthx_opentype_constants_MacStyle = function() { };
fonthx_opentype_constants_MacStyle.__name__ = "fonthx.opentype.constants.MacStyle";
var fonthx_opentype_constants_MacintoshEncoding = function() { };
fonthx_opentype_constants_MacintoshEncoding.__name__ = "fonthx.opentype.constants.MacintoshEncoding";
var fonthx_opentype_constants_MacintoshLanguages = function() { };
fonthx_opentype_constants_MacintoshLanguages.__name__ = "fonthx.opentype.constants.MacintoshLanguages";
var fonthx_opentype_constants_MicrosoftEncoding = function() { };
fonthx_opentype_constants_MicrosoftEncoding.__name__ = "fonthx.opentype.constants.MicrosoftEncoding";
var fonthx_opentype_constants_MicrosoftLanguages = function() { };
fonthx_opentype_constants_MicrosoftLanguages.__name__ = "fonthx.opentype.constants.MicrosoftLanguages";
var fonthx_opentype_constants_OS2Embeddable = function() { };
fonthx_opentype_constants_OS2Embeddable.__name__ = "fonthx.opentype.constants.OS2Embeddable";
var fonthx_opentype_constants_OS2FontSelectionFlags = {};
fonthx_opentype_constants_OS2FontSelectionFlags.toInt = function(this1) {
	return js_Boot.__cast(this1 , Int);
};
var fonthx_opentype_constants_OS2Weight = function() { };
fonthx_opentype_constants_OS2Weight.__name__ = "fonthx.opentype.constants.OS2Weight";
var fonthx_opentype_constants_OS2Width = function() { };
fonthx_opentype_constants_OS2Width.__name__ = "fonthx.opentype.constants.OS2Width";
var fonthx_opentype_constants_Platform = function() { };
fonthx_opentype_constants_Platform.__name__ = "fonthx.opentype.constants.Platform";
var fonthx_opentype_constants_UnicodeEncoding = function() { };
fonthx_opentype_constants_UnicodeEncoding.__name__ = "fonthx.opentype.constants.UnicodeEncoding";
var fonthx_opentype_glyph_CompositeGlyphDescription = function() {
};
fonthx_opentype_glyph_CompositeGlyphDescription.__name__ = "fonthx.opentype.glyph.CompositeGlyphDescription";
fonthx_opentype_glyph_CompositeGlyphDescription.prototype = {
	write: function(tt,glyph,font) {
		tt.markPosition();
		var bounds = glyph.getBounds();
		tt.writeSHORT(-1).writeSHORT(bounds.get_left() | 0).writeSHORT(bounds.get_top() | 0).writeSHORT(bounds.get_right() | 0).writeSHORT(bounds.get_bottom() | 0);
		var components = glyph.getComponents();
		var _g = 0;
		var _g1 = components.length;
		while(_g < _g1) {
			var idx = _g++;
			var component = components[idx];
			var flags = fonthx_opentype_glyph_CompositeGlyphDescription.ARG_1_AND_2_ARE_WORDS | fonthx_opentype_glyph_CompositeGlyphDescription.ARGS_ARE_XY_VALUES;
			if(idx < components.length - 1) {
				flags |= fonthx_opentype_glyph_CompositeGlyphDescription.MORE_COMPONENTS;
			}
			if(component.scaleX != 1.0 || component.scaleY != 1.0) {
				if(component.rotation != 0) {
					flags |= fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_A_TWO_BY_TWO;
				} else if(component.scaleX != component.scaleY) {
					flags |= fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_AN_X_AND_Y_SCALE;
				} else {
					flags |= fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_A_SCALE;
				}
			}
			tt.writeUSHORT(flags);
			var glyphIdx = font.getGlyphIndexForGlyph(component.glyph);
			tt.writeUSHORT(glyphIdx);
			tt.writeUSHORT(component.offsetX | 0);
			tt.writeUSHORT(component.offsetY | 0);
			if((flags & fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_A_SCALE) != 0) {
				tt.writeF2DOT14(component.scaleX);
			}
			if((flags & fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_AN_X_AND_Y_SCALE) != 0) {
				tt.writeF2DOT14(component.scaleX);
				tt.writeF2DOT14(component.scaleY);
			}
			if((flags & fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_A_TWO_BY_TWO) != 0) {
				var a = component.rotation * Math.PI / 180;
				var sin = Math.round(Math.sin(a) * 10000) / 10000;
				var cos = Math.round(Math.cos(a) * 10000) / 10000;
				tt.writeF2DOT14(cos * component.scaleX);
				tt.writeF2DOT14(-sin * component.scaleY);
				tt.writeF2DOT14(sin * component.scaleX);
				tt.writeF2DOT14(cos * component.scaleY);
			}
		}
		tt.pad(true);
	}
	,__class__: fonthx_opentype_glyph_CompositeGlyphDescription
};
var fonthx_opentype_glyph_ContourPoint = function(x,y,flags) {
	if(flags == null) {
		flags = 1;
	}
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
	this.flags = flags;
	this.previous = null;
	this.next = null;
};
fonthx_opentype_glyph_ContourPoint.__name__ = "fonthx.opentype.glyph.ContourPoint";
fonthx_opentype_glyph_ContourPoint.copy = function(other) {
	var cpy = new fonthx_opentype_glyph_ContourPoint(other.x,other.y,other.flags);
	cpy.previous = other.previous;
	cpy.next = other.next;
	return cpy;
};
fonthx_opentype_glyph_ContourPoint.prototype = {
	x: null
	,y: null
	,flags: null
	,previous: null
	,next: null
	,getHead: function() {
		var p = this;
		while(p.previous != null) p = p.previous;
		return p;
	}
	,isShortY: function() {
		return (this.flags & fonthx_opentype_glyph_ContourPoint.Y_SHORT) == 1;
	}
	,isSameY: function() {
		if((this.flags & fonthx_opentype_glyph_ContourPoint.Y_SAME_OR_SIGN) == 1) {
			return !this.isShortY();
		} else {
			return false;
		}
	}
	,isShortX: function() {
		return (this.flags & fonthx_opentype_glyph_ContourPoint.X_SHORT) == 1;
	}
	,isSameX: function() {
		if((this.flags & fonthx_opentype_glyph_ContourPoint.X_SAME_OR_SIGN) == 1) {
			return !this.isShortX();
		} else {
			return false;
		}
	}
	,isNegatedX: function() {
		if((this.flags & fonthx_opentype_glyph_ContourPoint.X_SAME_OR_SIGN) == 0) {
			return this.isShortX();
		} else {
			return false;
		}
	}
	,isNegatedY: function() {
		if((this.flags & fonthx_opentype_glyph_ContourPoint.Y_SAME_OR_SIGN) == 0) {
			return this.isShortY();
		} else {
			return false;
		}
	}
	,isEnd: function() {
		return this.next == null;
	}
	,equals: function(other) {
		if(this.x == other.x && this.y == other.y) {
			return this.flags == other.flags;
		} else {
			return false;
		}
	}
	,toString: function() {
		return this.x + "," + this.y + " " + (this.isEnd() ? "end" : "");
	}
	,__class__: fonthx_opentype_glyph_ContourPoint
};
var fonthx_opentype_glyph_GlyphDescriptionContourConsumer = function(gDesc) {
	this.gDesc = gDesc;
};
fonthx_opentype_glyph_GlyphDescriptionContourConsumer.__name__ = "fonthx.opentype.glyph.GlyphDescriptionContourConsumer";
fonthx_opentype_glyph_GlyphDescriptionContourConsumer.__super__ = fonthx_model_font_AbstractContourConsumer;
fonthx_opentype_glyph_GlyphDescriptionContourConsumer.prototype = $extend(fonthx_model_font_AbstractContourConsumer.prototype,{
	gDesc: null
	,moveTo: function(x,y) {
		if(this.gDesc.lastPoint != null) {
			this.gDesc.closeContour();
		}
		this.gDesc.startContour();
		this.gDesc.addPoint(x | 0,y | 0,true);
	}
	,lineTo: function(x,y) {
		this.gDesc.addPoint(x | 0,y | 0,true);
	}
	,quadTo: function(x1,y1,x2,y2) {
		this.gDesc.addPoint(x1 | 0,y1 | 0,false);
		this.gDesc.addPoint(x2 | 0,y2 | 0,true);
	}
	,cubicTo: function(x1,y1,x2,y2,x3,y3) {
		var p0 = new fonthx_model_geom_Point(this.gDesc.lastPoint.x,this.gDesc.lastPoint.y);
		var p1 = new fonthx_model_geom_Point(x1,y1);
		var p2 = new fonthx_model_geom_Point(x2,y2);
		var p3 = new fonthx_model_geom_Point(x3,y3);
		var b = new fonthx_model_geom_CubicBezier(p0,p1,p2,p3);
		var quadPoints = b.toQuadratics();
		var i = 0;
		while(i < quadPoints.length) {
			this.quadTo(quadPoints[i].x,quadPoints[i].y,quadPoints[i + 1].x,quadPoints[i + 1].y);
			i += 2;
		}
	}
	,endPath: function() {
		this.gDesc.closeContour();
	}
	,__class__: fonthx_opentype_glyph_GlyphDescriptionContourConsumer
});
var fonthx_opentype_glyph_SimpleGlyphDescription = function() {
	this.simpleFlags = true;
	this.points = [];
	this.numContours = 0;
	this.lastPoint = null;
};
fonthx_opentype_glyph_SimpleGlyphDescription.__name__ = "fonthx.opentype.glyph.SimpleGlyphDescription";
fonthx_opentype_glyph_SimpleGlyphDescription.prototype = {
	points: null
	,bounds: null
	,numContours: null
	,lastPoint: null
	,firstPoint: null
	,simpleFlags: null
	,startContour: function() {
		this.lastPoint = null;
		this.firstPoint = null;
	}
	,closeContour: function() {
		if(this.lastPoint != null && this.firstPoint != null && this.points.length > 0 && this.lastPoint.equals(this.firstPoint)) {
			var extraPoint = this.points.pop();
			if(extraPoint.previous != null) {
				extraPoint.previous.next = null;
			}
		}
	}
	,addPoint: function(x,y,onCurve) {
		var p = new fonthx_opentype_glyph_ContourPoint(x,y,onCurve ? fonthx_opentype_glyph_ContourPoint.ON_CURVE : fonthx_opentype_glyph_ContourPoint.OFF_CURVE);
		if(this.lastPoint != null && this.lastPoint.equals(p)) {
			return;
		}
		p.previous = this.lastPoint;
		if(!this.simpleFlags) {
			if(p.x > -256 && p.x < 256) {
				p.flags |= fonthx_opentype_glyph_ContourPoint.X_SHORT;
				if(p.x >= 0) {
					p.flags |= fonthx_opentype_glyph_ContourPoint.X_SAME_OR_SIGN;
				}
			} else if(p.previous != null && p.x == p.previous.x) {
				p.flags |= fonthx_opentype_glyph_ContourPoint.X_SAME_OR_SIGN;
			}
			if(p.y > -256 && p.y < 256) {
				p.flags |= fonthx_opentype_glyph_ContourPoint.Y_SHORT;
				if(p.y >= 0) {
					p.flags |= fonthx_opentype_glyph_ContourPoint.Y_SAME_OR_SIGN;
				}
			} else if(p.previous != null && p.y == p.previous.y) {
				p.flags |= fonthx_opentype_glyph_ContourPoint.Y_SAME_OR_SIGN;
			}
		}
		this.points.push(p);
		if(this.lastPoint == null) {
			this.numContours++;
			this.firstPoint = p;
		} else {
			this.lastPoint.next = p;
		}
		this.lastPoint = p;
	}
	,prepareFlags: function() {
		var flags = [];
		var p;
		var currentFlag = -1;
		var repeatCount = 0;
		var lastPoint = null;
		var _g = 0;
		var _g1 = this.points;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(lastPoint == null || lastPoint.flags != p.flags) {
				if(currentFlag != -1 && repeatCount > 0) {
					currentFlag |= fonthx_opentype_glyph_ContourPoint.REPEAT;
				}
				currentFlag = p.flags;
				flags.push(currentFlag);
				if(repeatCount > 0) {
					flags.push(repeatCount);
					repeatCount = 0;
				}
			}
			if(lastPoint != null && lastPoint.flags == p.flags) {
				++repeatCount;
			}
			lastPoint = p;
		}
		if(currentFlag != -1 && repeatCount > 0) {
			currentFlag |= fonthx_opentype_glyph_ContourPoint.REPEAT;
			flags.push(repeatCount);
		}
		return flags;
	}
	,write: function(tt) {
		if(this.numContours == 0) {
			return;
		}
		tt.markPosition();
		var endPtsOfContours = [];
		this.bounds = null;
		var count = 0;
		var _g = 0;
		var _g1 = this.points;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			if(this.bounds == null) {
				this.bounds = new fonthx_model_geom_Rectangle(p.x,p.y,0,0);
			} else {
				this.bounds.add(p.x,p.y);
			}
			if(p.isEnd()) {
				endPtsOfContours.push(count);
			}
			++count;
		}
		if(this.bounds == null) {
			this.bounds = new fonthx_model_geom_Rectangle();
		}
		tt.writeSHORT(this.numContours).writeSHORT(this.bounds.get_left() | 0).writeSHORT(this.bounds.get_top() | 0).writeSHORT(this.bounds.get_right() | 0).writeSHORT(this.bounds.get_bottom() | 0);
		var _g = 0;
		while(_g < endPtsOfContours.length) {
			var endPt = endPtsOfContours[_g];
			++_g;
			tt.writeUSHORT(endPt);
		}
		tt.writeSHORT(0);
		if(this.simpleFlags) {
			var _g = 0;
			var _g1 = this.points;
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				tt.writeByte(p.flags);
			}
		} else {
			var flags = this.prepareFlags();
			var _g = 0;
			while(_g < flags.length) {
				var flag = flags[_g];
				++_g;
				tt.writeByte(flag);
			}
		}
		var x = 0;
		var last = null;
		var _g = 0;
		var _g1 = this.points;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			x = p.x - (last == null ? 0 : last.x);
			if(p.isShortX()) {
				if(p.isNegatedX()) {
					tt.writeByte(0 - x);
				} else {
					tt.writeByte(x);
				}
			} else if(!p.isSameX()) {
				tt.writeSHORT(x);
			}
			last = p;
		}
		var y = 0;
		last = null;
		var _g = 0;
		var _g1 = this.points;
		while(_g < _g1.length) {
			var p = _g1[_g];
			++_g;
			y = p.y - (last == null ? 0 : last.y);
			if(p.isShortY()) {
				if(p.isNegatedY()) {
					tt.writeByte(0 - y);
				} else {
					tt.writeByte(y);
				}
			} else if(!p.isSameY()) {
				tt.writeSHORT(y);
			}
			last = p;
		}
		tt.pad(true);
	}
	,getNumContours: function() {
		return this.numContours;
	}
	,getPoints: function() {
		return this.points;
	}
	,__class__: fonthx_opentype_glyph_SimpleGlyphDescription
};
var fonthx_opentype_io_IByteWriter = function() { };
fonthx_opentype_io_IByteWriter.__name__ = "fonthx.opentype.io.IByteWriter";
fonthx_opentype_io_IByteWriter.__isInterface__ = true;
fonthx_opentype_io_IByteWriter.prototype = {
	writeByte: null
	,writeBytes: null
	,closeAndFlush: null
	,close: null
	,flush: null
	,getBytes: null
	,__class__: fonthx_opentype_io_IByteWriter
};
var fonthx_opentype_io_ByteWriter = function(src) {
	this.buffer = new haxe_io_BytesBuffer();
	if(src != null) {
		this.buffer.add(src);
	}
	this.cursor = this.buffer.pos;
};
fonthx_opentype_io_ByteWriter.__name__ = "fonthx.opentype.io.ByteWriter";
fonthx_opentype_io_ByteWriter.__interfaces__ = [fonthx_opentype_io_IByteWriter];
fonthx_opentype_io_ByteWriter.prototype = {
	buffer: null
	,cursor: null
	,getBytes: function() {
		return this.buffer.getBytes();
	}
	,writeByte: function(c) {
		this.buffer.addByte(c);
		this.cursor++;
	}
	,writeBytes: function(s) {
		this.buffer.add(s);
		this.cursor += s.length;
		return this.cursor;
	}
	,close: function() {
	}
	,flush: function() {
	}
	,closeAndFlush: function() {
	}
	,__class__: fonthx_opentype_io_ByteWriter
};
var fonthx_opentype_options_OptionMapTools = function() { };
fonthx_opentype_options_OptionMapTools.__name__ = "fonthx.opentype.options.OptionMapTools";
fonthx_opentype_options_OptionMapTools.getBool = function(options,k,def) {
	if(def == null) {
		def = false;
	}
	if(!Object.prototype.hasOwnProperty.call(options.h,k)) {
		return def;
	}
	var v = options.h[k];
	if(v != "1") {
		return v == "true";
	} else {
		return true;
	}
};
fonthx_opentype_options_OptionMapTools.getInt = function(options,k,def) {
	if(def == null) {
		def = -1;
	}
	if(!Object.prototype.hasOwnProperty.call(options.h,k)) {
		return def;
	}
	return Std.parseInt(options.h[k]);
};
fonthx_opentype_options_OptionMapTools.getFloat = function(options,k,def) {
	if(def == null) {
		def = -1;
	}
	if(!Object.prototype.hasOwnProperty.call(options.h,k)) {
		return def;
	}
	return parseFloat(options.h[k]);
};
fonthx_opentype_options_OptionMapTools.getString = function(options,k,def) {
	if(!Object.prototype.hasOwnProperty.call(options.h,k)) {
		return def;
	}
	return options.h[k];
};
fonthx_opentype_options_OptionMapTools.merge = function(defaults,options) {
	var merged = new haxe_ds_StringMap();
	var h = defaults.h;
	var _g_h = h;
	var _g_keys = Object.keys(h);
	var _g_length = _g_keys.length;
	var _g_current = 0;
	while(_g_current < _g_length) {
		var key = _g_keys[_g_current++];
		merged.h[key] = defaults.h[key];
	}
	if(options != null) {
		var h = options.h;
		var _g1_h = h;
		var _g1_keys = Object.keys(h);
		var _g1_length = _g1_keys.length;
		var _g1_current = 0;
		while(_g1_current < _g1_length) {
			var key = _g1_keys[_g1_current++];
			merged.h[key] = options.h[key];
		}
	}
	return merged;
};
var fonthx_opentype_os2_OS2Codepage = function(bit,numCodepoints,ranges) {
	this.bit = bit;
	this.numCodepoints = numCodepoints;
	this.ranges = ranges;
};
fonthx_opentype_os2_OS2Codepage.__name__ = "fonthx.opentype.os2.OS2Codepage";
fonthx_opentype_os2_OS2Codepage.prototype = {
	bit: null
	,ranges: null
	,numCodepoints: null
	,getCoverage: function(codepoints) {
		var count = 0;
		var _g = 0;
		while(_g < codepoints.length) {
			var cp = codepoints[_g];
			++_g;
			var found = false;
			var i = 0;
			while(i < this.ranges.length) {
				if(cp >= this.ranges[i] && cp <= this.ranges[i + 1]) {
					found = true;
					break;
				}
				i += 2;
			}
			if(found) {
				++count;
			}
		}
		return count / this.numCodepoints;
	}
	,__class__: fonthx_opentype_os2_OS2Codepage
};
var fonthx_opentype_os2_OS2Codepages = function() { };
fonthx_opentype_os2_OS2Codepages.__name__ = "fonthx.opentype.os2.OS2Codepages";
fonthx_opentype_os2_OS2Codepages.getFunctionalCodepages = function(codepoints,threshold) {
	if(threshold == null) {
		threshold = 0.5;
	}
	if(fonthx_opentype_os2_OS2Codepages.codepages.length == 0) {
		fonthx_opentype_os2_OS2CompiledCodepages.init();
	}
	var functionalBits = [];
	var _g = 0;
	var _g1 = fonthx_opentype_os2_OS2Codepages.codepages;
	while(_g < _g1.length) {
		var page = _g1[_g];
		++_g;
		if(codepoints.length / page.numCodepoints < threshold) {
			continue;
		}
		if(page.getCoverage(codepoints) > threshold) {
			functionalBits.push(page.bit);
		}
	}
	return functionalBits;
};
var fonthx_opentype_os2_OS2CompiledCodepages = function() { };
fonthx_opentype_os2_OS2CompiledCodepages.__name__ = "fonthx.opentype.os2.OS2CompiledCodepages";
fonthx_opentype_os2_OS2CompiledCodepages.init = function() {
	fonthx_opentype_os2_OS2CompiledCodepages.add1252();
	fonthx_opentype_os2_OS2CompiledCodepages.add1250();
	fonthx_opentype_os2_OS2CompiledCodepages.add1251();
	fonthx_opentype_os2_OS2CompiledCodepages.add1253();
	fonthx_opentype_os2_OS2CompiledCodepages.add1254();
	fonthx_opentype_os2_OS2CompiledCodepages.add1255();
	fonthx_opentype_os2_OS2CompiledCodepages.add1256();
	fonthx_opentype_os2_OS2CompiledCodepages.add1257();
	fonthx_opentype_os2_OS2CompiledCodepages.add1258();
	fonthx_opentype_os2_OS2CompiledCodepages.add874();
	fonthx_opentype_os2_OS2CompiledCodepages.add936();
	fonthx_opentype_os2_OS2CompiledCodepages.addMACROMAN();
	fonthx_opentype_os2_OS2CompiledCodepages.add869();
	fonthx_opentype_os2_OS2CompiledCodepages.add866();
	fonthx_opentype_os2_OS2CompiledCodepages.add865();
	fonthx_opentype_os2_OS2CompiledCodepages.add864();
	fonthx_opentype_os2_OS2CompiledCodepages.add863();
	fonthx_opentype_os2_OS2CompiledCodepages.add862();
	fonthx_opentype_os2_OS2CompiledCodepages.add861();
	fonthx_opentype_os2_OS2CompiledCodepages.add860();
	fonthx_opentype_os2_OS2CompiledCodepages.add857();
	fonthx_opentype_os2_OS2CompiledCodepages.add852();
	fonthx_opentype_os2_OS2CompiledCodepages.add775();
	fonthx_opentype_os2_OS2CompiledCodepages.add850();
	fonthx_opentype_os2_OS2CompiledCodepages.add437();
};
fonthx_opentype_os2_OS2CompiledCodepages.add1252 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(0,219,[32,127,160,255,338,339,352,353,376,376,381,382,402,402,710,710,732,732,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8364,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1250 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(1,219,[32,127,160,160,164,164,166,169,171,174,176,177,180,184,187,187,193,194,196,196,199,199,201,201,203,203,205,206,211,212,214,215,218,218,220,221,223,223,225,226,228,228,231,231,233,233,235,235,237,238,243,244,246,247,250,250,252,253,258,263,268,273,280,283,313,314,317,318,321,324,327,328,336,337,340,341,344,347,350,357,366,369,377,382,711,711,728,729,731,731,733,733,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8364,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1251 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(2,223,[32,127,160,160,164,164,166,167,169,169,171,174,176,177,181,183,187,187,1025,1036,1038,1103,1105,1116,1118,1119,1168,1169,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8364,8364,8470,8470,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1253 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(3,207,[32,127,160,160,163,169,171,174,176,179,181,183,187,187,189,189,402,402,900,902,904,906,908,908,910,929,931,974,8211,8213,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8364,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1254 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(4,217,[32,127,160,207,209,220,223,239,241,252,255,255,286,287,304,305,338,339,350,353,376,376,402,402,710,710,732,732,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8364,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1255 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(5,201,[32,127,160,163,165,169,171,185,187,191,215,215,247,247,402,402,710,710,732,732,1456,1465,1467,1475,1488,1514,1520,1524,8206,8207,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8362,8362,8364,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1256 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(6,224,[32,127,160,160,162,169,171,185,187,190,215,215,224,224,226,226,231,235,238,239,244,244,247,247,249,249,251,252,338,339,402,402,710,710,1548,1548,1563,1563,1567,1567,1569,1594,1600,1618,1657,1657,1662,1662,1670,1670,1672,1672,1681,1681,1688,1688,1705,1705,1711,1711,1722,1722,1726,1726,1729,1729,1746,1746,8204,8207,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8364,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1257 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(7,212,[32,127,160,160,162,164,166,169,171,185,187,190,196,198,201,201,211,211,213,216,220,220,223,223,228,230,233,233,243,243,245,248,252,252,256,257,260,263,268,269,274,275,278,281,290,291,298,299,302,303,310,311,315,316,321,326,332,333,342,343,346,347,352,353,362,363,370,371,377,382,711,711,729,729,731,731,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8364,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add1258 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(8,215,[32,127,160,194,196,203,205,207,209,209,211,212,214,220,223,226,228,235,237,239,241,241,243,244,246,252,255,255,258,259,272,273,338,339,376,376,402,402,416,417,431,432,710,710,732,732,768,769,771,771,777,777,803,803,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8363,8364,8482,8482]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add874 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(16,193,[32,127,160,160,3585,3642,3647,3675,8211,8212,8216,8217,8220,8221,8226,8226,8230,8230,8364,8364]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add936 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(18,21888,[32,127,164,164,167,168,176,177,183,183,215,215,224,225,232,234,236,237,242,243,247,247,249,250,252,252,257,257,275,275,283,283,299,299,324,324,328,328,333,333,363,363,462,462,464,464,466,466,468,468,470,470,472,472,474,474,476,476,593,593,609,609,711,711,713,715,729,729,913,929,931,937,945,961,963,969,1025,1025,1040,1103,1105,1105,8208,8208,8211,8214,8216,8217,8220,8221,8229,8230,8240,8240,8242,8243,8245,8245,8251,8251,8364,8364,8451,8451,8453,8453,8457,8457,8470,8470,8481,8481,8544,8555,8560,8569,8592,8595,8598,8601,8712,8712,8719,8719,8721,8721,8725,8725,8730,8730,8733,8736,8739,8739,8741,8741,8743,8747,8750,8750,8756,8759,8765,8765,8776,8776,8780,8780,8786,8786,8800,8801,8804,8807,8814,8815,8853,8853,8857,8857,8869,8869,8895,8895,8978,8978,9312,9321,9332,9371,9472,9547,9552,9587,9601,9615,9619,9621,9632,9633,9650,9651,9660,9661,9670,9671,9675,9675,9678,9679,9698,9701,9733,9734,9737,9737,9792,9792,9794,9794,12288,12291,12293,12311,12317,12318,12321,12329,12353,12435,12443,12446,12449,12534,12540,12542,12549,12585,12832,12841,12849,12849,12963,12963,13198,13199,13212,13214,13217,13217,13252,13252,13262,13262,13265,13266,13269,13269,19968,40869,63788,63788,63865,63865,63893,63893,63975,63975,63985,63985,64012,64015,64017,64017,64019,64020,64024,64024,64031,64033,64035,64036,64039,64041,65072,65073,65075,65092,65097,65106,65108,65111,65113,65126,65128,65131,65281,65374,65504,65509]));
};
fonthx_opentype_os2_OS2CompiledCodepages.addMACROMAN = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(29,223,[32,126,160,163,165,165,167,172,174,177,180,184,186,187,191,207,209,214,216,220,223,239,241,252,255,255,305,305,338,339,376,376,402,402,710,711,728,733,937,937,960,960,8211,8212,8216,8218,8220,8222,8224,8226,8230,8230,8240,8240,8249,8250,8260,8260,8364,8364,8482,8482,8706,8706,8710,8710,8719,8719,8721,8721,8730,8730,8734,8734,8747,8747,8776,8776,8800,8800,8804,8805,9674,9674,63743,63743,64257,64258]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add869 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(48,215,[32,127,160,160,163,163,166,169,171,173,176,179,183,183,187,187,189,189,900,902,904,906,908,908,910,929,931,974,8213,8213,8216,8217,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9553,9556,9556,9559,9559,9562,9562,9565,9565,9568,9568,9571,9571,9574,9574,9577,9577,9580,9580,9600,9600,9604,9604,9608,9608,9617,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add866 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(49,224,[32,127,160,160,164,164,176,176,183,183,1025,1025,1028,1028,1031,1031,1038,1038,1040,1103,1105,1105,1108,1108,1111,1111,1118,1118,8470,8470,8729,8730,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add865 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(50,224,[32,127,160,161,163,164,170,172,176,178,181,181,183,183,186,186,188,189,191,191,196,199,201,201,209,209,214,214,216,216,220,220,223,226,228,239,241,244,246,252,255,255,402,402,915,915,920,920,931,931,934,934,937,937,945,945,948,949,960,960,963,964,966,966,8319,8319,8359,8359,8729,8730,8734,8734,8745,8745,8776,8776,8801,8801,8804,8805,8976,8976,8992,8993,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add864 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(51,218,[32,36,38,127,160,160,162,164,166,166,171,173,176,177,183,183,187,189,215,215,247,247,946,946,966,966,1548,1548,1563,1563,1567,1567,1600,1600,1617,1617,1632,1642,8729,8730,8734,8734,8776,8776,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9618,9618,9632,9632,65149,65149,65152,65157,65163,65163,65165,65167,65169,65169,65171,65171,65173,65173,65175,65175,65177,65177,65179,65179,65181,65181,65183,65183,65185,65185,65187,65187,65189,65189,65191,65191,65193,65193,65195,65195,65197,65197,65199,65199,65201,65201,65203,65203,65205,65205,65207,65207,65209,65209,65211,65211,65213,65213,65215,65215,65217,65217,65221,65221,65225,65233,65235,65235,65237,65237,65239,65239,65241,65241,65243,65243,65245,65245,65247,65247,65249,65249,65251,65251,65253,65253,65255,65255,65257,65257,65259,65261,65263,65267,65269,65272,65275,65276]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add863 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(52,224,[32,127,160,160,162,164,166,168,171,172,175,184,187,190,192,192,194,194,199,203,206,207,212,212,217,217,219,220,223,224,226,226,231,235,238,239,243,244,247,247,249,252,402,402,915,915,920,920,931,931,934,934,937,937,945,945,948,949,960,960,963,964,966,966,8215,8215,8319,8319,8729,8730,8734,8734,8745,8745,8776,8776,8801,8801,8804,8805,8976,8976,8992,8993,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add862 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(53,224,[32,127,160,163,165,165,170,172,176,178,181,181,183,183,186,189,191,191,209,209,223,223,225,225,237,237,241,241,243,243,247,247,250,250,402,402,915,915,920,920,931,931,934,934,937,937,945,945,948,949,960,960,963,964,966,966,1488,1514,8319,8319,8359,8359,8729,8730,8734,8734,8745,8745,8776,8776,8801,8801,8804,8805,8976,8976,8992,8993,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add861 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(54,224,[32,127,160,161,163,163,171,172,176,178,181,181,183,183,187,189,191,191,193,193,196,199,201,201,205,205,208,208,211,211,214,214,216,216,218,218,220,226,228,235,237,237,240,240,243,244,246,248,250,254,402,402,915,915,920,920,931,931,934,934,937,937,945,945,948,949,960,960,963,964,966,966,8319,8319,8359,8359,8729,8730,8734,8734,8745,8745,8776,8776,8801,8801,8804,8805,8976,8976,8992,8993,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add860 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(55,224,[32,127,160,163,170,172,176,178,181,181,183,183,186,189,191,195,199,202,204,205,209,213,217,218,220,220,223,227,231,234,236,237,241,245,247,247,249,250,252,252,915,915,920,920,931,931,934,934,937,937,945,945,948,949,960,960,963,964,966,966,8319,8319,8359,8359,8729,8730,8734,8734,8745,8745,8776,8776,8801,8801,8804,8805,8992,8993,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add857 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(56,221,[32,127,160,207,209,220,223,239,241,252,255,255,286,287,304,305,350,351,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9553,9556,9556,9559,9559,9562,9562,9565,9565,9568,9568,9571,9571,9574,9574,9577,9577,9580,9580,9600,9600,9604,9604,9608,9608,9617,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add852 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(58,224,[32,127,160,160,164,164,167,168,171,173,176,176,180,180,184,184,187,187,193,194,196,196,199,199,201,201,203,203,205,206,211,212,214,215,218,218,220,221,223,223,225,226,228,228,231,231,233,233,235,235,237,238,243,244,246,247,250,250,252,253,258,263,268,273,280,283,313,314,317,318,321,324,327,328,336,337,340,341,344,347,350,357,366,369,377,382,711,711,728,729,731,731,733,733,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9553,9556,9556,9559,9559,9562,9562,9565,9565,9568,9568,9571,9571,9574,9574,9577,9577,9580,9580,9600,9600,9604,9604,9608,9608,9617,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add775 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(59,224,[32,127,160,160,162,164,166,167,169,169,171,174,176,179,181,183,185,185,187,190,196,198,201,201,211,211,213,216,220,220,223,223,228,230,233,233,243,243,245,248,252,252,256,257,260,263,268,269,274,275,278,281,290,291,298,299,302,303,310,311,315,316,321,326,332,333,342,343,346,347,352,353,362,363,370,371,377,382,8217,8217,8220,8222,8729,8729,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9553,9556,9556,9559,9559,9562,9562,9565,9565,9568,9568,9571,9571,9574,9574,9577,9577,9580,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add850 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(62,224,[32,127,160,255,305,305,402,402,8215,8215,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9553,9556,9556,9559,9559,9562,9562,9565,9565,9568,9568,9571,9571,9574,9574,9577,9577,9580,9580,9600,9600,9604,9604,9608,9608,9617,9619,9632,9632]));
};
fonthx_opentype_os2_OS2CompiledCodepages.add437 = function() {
	fonthx_opentype_os2_OS2Codepages.codepages.push(new fonthx_opentype_os2_OS2Codepage(63,224,[32,127,160,163,165,165,170,172,176,178,181,181,183,183,186,189,191,191,196,199,201,201,209,209,214,214,220,220,223,226,228,239,241,244,246,247,249,252,255,255,402,402,915,915,920,920,931,931,934,934,937,937,945,945,948,949,960,960,963,964,966,966,8319,8319,8359,8359,8729,8730,8734,8734,8745,8745,8776,8776,8801,8801,8804,8805,8976,8976,8992,8993,9472,9472,9474,9474,9484,9484,9488,9488,9492,9492,9496,9496,9500,9500,9508,9508,9516,9516,9524,9524,9532,9532,9552,9580,9600,9600,9604,9604,9608,9608,9612,9612,9616,9619,9632,9632]));
};
var fonthx_opentype_os2_OS2Range = function(bit,name,from,to,version) {
	if(version == null) {
		version = 1;
	}
	this.bit = bit;
	this.name = name;
	this.from = from;
	this.to = to;
	this.version = version;
};
fonthx_opentype_os2_OS2Range.__name__ = "fonthx.opentype.os2.OS2Range";
fonthx_opentype_os2_OS2Range.prototype = {
	bit: null
	,name: null
	,from: null
	,to: null
	,version: null
	,__class__: fonthx_opentype_os2_OS2Range
};
var fonthx_opentype_os2_OS2RangeProviderMacro = function() { };
fonthx_opentype_os2_OS2RangeProviderMacro.__name__ = "fonthx.opentype.os2.OS2RangeProviderMacro";
var fonthx_opentype_os2_OS2Ranges = function() { };
fonthx_opentype_os2_OS2Ranges.__name__ = "fonthx.opentype.os2.OS2Ranges";
fonthx_opentype_os2_OS2Ranges.getFunctionalRanges = function(codepoints,threshold) {
	if(threshold == null) {
		threshold = 0.5;
	}
	var counts = new haxe_ds_IntMap();
	var hasSMP = false;
	var _g = 0;
	while(_g < codepoints.length) {
		var cp = codepoints[_g];
		++_g;
		var bit = fonthx_opentype_os2_OS2Ranges.getBitForCodepoint(cp);
		if(bit >= 0) {
			if(counts.h.hasOwnProperty(bit)) {
				counts.h[bit] += 1;
			} else {
				counts.h[bit] = 1;
			}
		}
		if(cp > 65535) {
			hasSMP = true;
		}
	}
	var functionalBits = [];
	var bit = counts.keys();
	while(bit.hasNext()) {
		var bit1 = bit.next();
		var range = fonthx_opentype_os2_OS2Ranges.getRangeForBit(bit1);
		var coverage = counts.h[bit1] / (range.to - range.from);
		if(coverage > threshold) {
			functionalBits.push(bit1);
		}
	}
	if(hasSMP && functionalBits.indexOf(57) == -1) {
		functionalBits.push(57);
	}
	return functionalBits;
};
fonthx_opentype_os2_OS2Ranges.getBitForCodepoint = function(codepoint) {
	var _g = 0;
	var _g1 = fonthx_opentype_os2_OS2Ranges.ranges;
	while(_g < _g1.length) {
		var range = _g1[_g];
		++_g;
		if(codepoint >= range.from && codepoint <= range.to) {
			return range.bit;
		}
	}
	return -1;
};
fonthx_opentype_os2_OS2Ranges.getRangeForBit = function(bit) {
	var _g = 0;
	var _g1 = fonthx_opentype_os2_OS2Ranges.ranges;
	while(_g < _g1.length) {
		var range = _g1[_g];
		++_g;
		if(bit == range.bit) {
			return range;
		}
	}
	return null;
};
var fonthx_opentype_postscript_Encoder = function() { };
fonthx_opentype_postscript_Encoder.__name__ = "fonthx.opentype.postscript.Encoder";
fonthx_opentype_postscript_Encoder.encodeOperator = function(bytes,op) {
	if(op > 255) {
		bytes.addByte(op >> 8);
		op &= 255;
	}
	bytes.addByte(op);
};
fonthx_opentype_postscript_Encoder.encodeInt = function(bytes,v) {
	if(v >= -107 && v <= 107) {
		bytes.addByte(v + 139);
	} else if(v >= 108 && v <= 1131) {
		v -= 108;
		bytes.addByte((v >> 8) + 247);
		bytes.addByte(v & 255);
	} else if(v >= -1131 && v <= -108) {
		v = -108 - v;
		bytes.addByte((v >> 8) + 251);
		bytes.addByte(v & 255);
	} else if(v >= -32768 && v < 32768) {
		bytes.addByte(28);
		bytes.addByte(v >> 8);
		bytes.addByte(v & 255);
	} else {
		bytes.addByte(29);
		bytes.addByte(v >> 24 & 255);
		bytes.addByte(v >> 16 & 255);
		bytes.addByte(v >> 8 & 255);
		bytes.addByte(v & 255);
	}
};
fonthx_opentype_postscript_Encoder.encodeFloat = function(bytes,f) {
	if(f == 0) {
		bytes.addByte(30);
		bytes.addByte(15);
		return;
	}
	var s = f == null ? "null" : "" + f;
	fonthx_opentype_postscript_Encoder.encodeStringAsFloat(bytes,s);
};
fonthx_opentype_postscript_Encoder.encodeStringAsFloat = function(bytes,s) {
	var s1 = StringTools.replace(s.toLowerCase(),"+","");
	var chars = s1.split("");
	var nibbles = [];
	var _g = 0;
	while(_g < chars.length) {
		var c = chars[_g];
		++_g;
		var ord = HxOverrides.cca(c,0) - 48;
		if(ord >= 0 && ord < 10) {
			nibbles.push(ord);
		} else if(c == ".") {
			nibbles.push(10);
		} else if(c == "e") {
			nibbles.push(11);
		} else if(c == "–" || c == "−" || c == "-" || c == "-") {
			if(nibbles.length > 0 && nibbles[nibbles.length - 1] == 11) {
				nibbles.pop();
				nibbles.push(12);
			} else {
				nibbles.push(14);
			}
		}
	}
	nibbles.push(15);
	if(nibbles.length % 2 != 0) {
		nibbles.push(15);
	}
	bytes.addByte(30);
	var _g1_index = 0;
	var _g1_end = nibbles.length;
	var _g1_step = 2;
	while(_g1_index < _g1_end) {
		var i = (_g1_index += _g1_step) - _g1_step;
		bytes.addByte(nibbles[i] << 4 | nibbles[i + 1]);
	}
};
fonthx_opentype_postscript_Encoder.round = function(number,precision) {
	if(precision == null) {
		precision = 2;
	}
	number *= Math.pow(10,precision);
	return Math.round(number) / Math.pow(10,precision);
};
var fonthx_opentype_svg_SVGTable = function(font) {
	this.font = font;
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.SVG);
};
fonthx_opentype_svg_SVGTable.__name__ = "fonthx.opentype.svg.SVGTable";
fonthx_opentype_svg_SVGTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_svg_SVGTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	font: null
	,write: function(tt) {
		tt.writeUINT16(0);
		tt.writeOffset32(10);
		tt.writeULONG(0);
		var skip = 1;
		var numSvgGlyphs = this.font.get_glyphs().length - 2;
		tt.writeUINT16(numSvgGlyphs);
		var offset = 2 + numSvgGlyphs * 12;
		var svgBytes = [];
		var _g = 2;
		var _g1 = this.font.get_glyphs().length;
		while(_g < _g1) {
			var idx = _g++;
			tt.writeUINT16(idx);
			tt.writeUINT16(idx);
			tt.writeOffset32(offset);
			var svgOptions = new fonthx_svg_SVGOptions();
			svgOptions.id = idx;
			svgOptions.boxSize = this.font.get_emSquare();
			var builder = new fonthx_svg_SVGBuilder();
			var svg = builder.buildGlyph(idx,this.font.get_glyphs()[idx],svgOptions);
			var bytes = haxe_io_Bytes.ofString(svg);
			offset += bytes.length;
			tt.writeULONG(bytes.length);
			svgBytes.push(bytes);
		}
		var _g = 0;
		while(_g < svgBytes.length) {
			var svg = svgBytes[_g];
			++_g;
			tt.writeBytes(svg);
		}
	}
	,__class__: fonthx_opentype_svg_SVGTable
});
var fonthx_opentype_tables_COLRTable = function(font,version) {
	if(version == null) {
		version = 0;
	}
	this.version = 0;
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.COLR);
	this.font = font;
	this.version = version;
};
fonthx_opentype_tables_COLRTable.__name__ = "fonthx.opentype.tables.COLRTable";
fonthx_opentype_tables_COLRTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_COLRTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	font: null
	,version: null
	,write: function(tt) {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.font.get_glyphs();
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(v.hasLayers()) {
				_g.push(v);
			}
		}
		var baseGlyphs = _g;
		var _g = [];
		var _g1 = 0;
		var _g2 = this.font.get_glyphs();
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(!v.hasLayers()) {
				_g.push(v);
			}
		}
		var layerGlyphs = _g;
		tt.writeUINT16(this.version).writeUINT16(baseGlyphs.length).writeOffset32(14).writeOffset32(14 + 6 * baseGlyphs.length).writeUINT16(layerGlyphs.length);
		var layerRecIdx = 0;
		var _g = 0;
		while(_g < baseGlyphs.length) {
			var g = baseGlyphs[_g];
			++_g;
			tt.writeUINT16(this.font.getGlyphIndexForGlyph(g));
			tt.writeUINT16(layerRecIdx);
			tt.writeUINT16(g.getLayers().length);
			layerRecIdx += g.getLayers().length;
		}
		var _g = 0;
		while(_g < baseGlyphs.length) {
			var g = baseGlyphs[_g];
			++_g;
			var _g1 = 0;
			var _g2 = g.getLayers();
			while(_g1 < _g2.length) {
				var l = _g2[_g1];
				++_g1;
				tt.writeUINT16(this.font.getGlyphIndexForGlyph(l));
				tt.writeUINT16(this.font.get_palette().colors.indexOf(l.color));
			}
		}
	}
	,__class__: fonthx_opentype_tables_COLRTable
});
var fonthx_opentype_tables_CPALTable = function(version) {
	if(version == null) {
		version = 0;
	}
	this.version = 0;
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.CPAL);
	this.version = version;
	this.palettes = [];
};
fonthx_opentype_tables_CPALTable.__name__ = "fonthx.opentype.tables.CPALTable";
fonthx_opentype_tables_CPALTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_CPALTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	palettes: null
	,version: null
	,write: function(tt) {
		var numPaletteEntries = 0;
		if(this.palettes.length > 0) {
			numPaletteEntries = this.palettes[0].colors.length;
		}
		console.log("src/fonthx/opentype/tables/CPALTable.hx:29:",numPaletteEntries);
		tt.writeUINT16(this.version).writeUINT16(numPaletteEntries).writeUINT16(this.palettes.length).writeUINT16(Lambda.fold(this.palettes,function(p,sum) {
			return sum + p.colors.length;
		},0)).writeOffset32(12 + this.palettes.length * 2);
		var idx = 0;
		var _g = 0;
		var _g1 = this.palettes;
		while(_g < _g1.length) {
			var palette = _g1[_g];
			++_g;
			tt.writeUINT16(idx);
			idx += numPaletteEntries;
		}
		var _g = 0;
		var _g1 = this.palettes;
		while(_g < _g1.length) {
			var palette = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = palette.colors;
			while(_g2 < _g3.length) {
				var color = _g3[_g2];
				++_g2;
				tt.writeByte(color >> 8 & 255);
				tt.writeByte(color >> 16 & 255);
				tt.writeByte(color >> 24 & 255);
				tt.writeByte(color & 255);
			}
		}
	}
	,addPalette: function(palette) {
		this.palettes.push(palette);
	}
	,__class__: fonthx_opentype_tables_CPALTable
});
var fonthx_opentype_tables_DSIGTable = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.DSIG);
};
fonthx_opentype_tables_DSIGTable.__name__ = "fonthx.opentype.tables.DSIGTable";
fonthx_opentype_tables_DSIGTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_DSIGTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	write: function(tt) {
		tt.writeULONG(1);
		tt.writeUINT16(0);
		tt.writeUINT16(0);
	}
	,__class__: fonthx_opentype_tables_DSIGTable
});
var fonthx_opentype_tables_FontHeader = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.HEAD);
	this.format = "ttf";
	this.version = "1.0";
	this.unitsPerEm = 1024;
	this.flags = 0;
	var this1 = new haxe__$Int64__$_$_$Int64(0,0);
	this.created = this1;
	var this1 = new haxe__$Int64__$_$_$Int64(0,0);
	this.modified = this1;
	this.macStyle = 0;
	this.lowestRecPPEM = 3;
	this.fontDirectionHint = 2;
	this.indexToLocFormat = 1;
};
fonthx_opentype_tables_FontHeader.__name__ = "fonthx.opentype.tables.FontHeader";
fonthx_opentype_tables_FontHeader.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_FontHeader.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	format: null
	,unitsPerEm: null
	,flags: null
	,created: null
	,modified: null
	,xMin: null
	,yMin: null
	,xMax: null
	,yMax: null
	,macStyle: null
	,lowestRecPPEM: null
	,fontDirectionHint: null
	,indexToLocFormat: null
	,version: null
	,write: function(tt) {
		tt.writeVersion(1,0).writeFixed(parseFloat(this.version)).writeULONG(0).writeULONG(1594834165).writeUSHORT(this.flags).writeUSHORT(this.unitsPerEm).writeLONGDATETIME(this.created).writeLONGDATETIME(this.modified).writeSHORT(this.xMin).writeSHORT(this.yMin).writeSHORT(this.xMax).writeSHORT(this.yMax).writeUSHORT(this.macStyle).writeUSHORT(this.lowestRecPPEM).writeSHORT(this.fontDirectionHint).writeSHORT(this.indexToLocFormat).writeSHORT(0);
	}
	,setCreated: function(secs) {
		this.created = secs;
		return this;
	}
	,setModified: function(secs) {
		this.modified = secs;
		return this;
	}
	,setVersion: function(version) {
		this.version = version;
		return this;
	}
	,setEmSquare: function(emSquare) {
		this.unitsPerEm = emSquare;
		return this;
	}
	,setBounds: function(bounds) {
		this.xMin = Math.ceil(bounds.get_left());
		this.yMin = Math.ceil(bounds.get_top());
		this.xMax = Math.floor(bounds.get_right());
		this.yMax = Math.floor(bounds.get_bottom());
		return this;
	}
	,setMacStyle: function(styleFlags) {
		this.macStyle = styleFlags;
		return this;
	}
	,setFontDirectionHint: function(hint) {
		this.fontDirectionHint = hint;
		return this;
	}
	,setLongOffsetFormat: function(value) {
		this.indexToLocFormat = value ? 1 : 0;
		return this;
	}
	,setSmallestReadablePixelSize: function(size) {
		this.lowestRecPPEM = size;
		return this;
	}
	,setFormat: function(f) {
		this.format = f;
		return this;
	}
	,__class__: fonthx_opentype_tables_FontHeader
});
var fonthx_opentype_tables_GlyphTable = function(font) {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.GLYF);
	this.font = font;
};
fonthx_opentype_tables_GlyphTable.__name__ = "fonthx.opentype.tables.GlyphTable";
fonthx_opentype_tables_GlyphTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_GlyphTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	offsets: null
	,font: null
	,write: function(tt) {
		this.offsets = [];
		var coffset = 0;
		var _g = 0;
		var _g1 = this.font.get_glyphs();
		while(_g < _g1.length) {
			var glyph = _g1[_g];
			++_g;
			if(glyph.isComposite()) {
				var cgDesc = new fonthx_opentype_glyph_CompositeGlyphDescription();
				cgDesc.write(tt,glyph,this.font);
				this.offsets.push(coffset);
				coffset = tt.getPosition() - this.offset;
			} else {
				var gDesc = new fonthx_opentype_glyph_SimpleGlyphDescription();
				var consumer = new fonthx_opentype_glyph_GlyphDescriptionContourConsumer(gDesc);
				glyph.walkContours(consumer);
				gDesc.write(tt);
				this.offsets.push(coffset);
				coffset = tt.getPosition() - this.offset;
			}
		}
		this.offsets.push(coffset);
	}
	,getOffsets: function() {
		return this.offsets;
	}
	,__class__: fonthx_opentype_tables_GlyphTable
});
var fonthx_opentype_tables_HorizontalHeaderTable = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.HHEA);
	this.ascender = 0;
	this.descender = 0;
	this.lineGap = 0;
	this.caretSlopeRise = 1;
	this.caretSlopeRun = 0;
	this.caretOffset = 0;
	this.advanceWidthMax = 0;
	this.minLeftSideBearing = 0;
	this.minRightSideBearing = 0;
	this.xMaxExtent = 0;
	this.numberOfHMetrics = 0;
};
fonthx_opentype_tables_HorizontalHeaderTable.__name__ = "fonthx.opentype.tables.HorizontalHeaderTable";
fonthx_opentype_tables_HorizontalHeaderTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_HorizontalHeaderTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	ascender: null
	,descender: null
	,lineGap: null
	,advanceWidthMax: null
	,minLeftSideBearing: null
	,minRightSideBearing: null
	,xMaxExtent: null
	,caretSlopeRise: null
	,caretSlopeRun: null
	,caretOffset: null
	,numberOfHMetrics: null
	,write: function(tt) {
		tt.writeULONG(65536).writeSHORT(this.ascender).writeSHORT(this.descender).writeSHORT(this.lineGap).writeUSHORT(this.advanceWidthMax).writeSHORT(this.minLeftSideBearing).writeSHORT(this.minRightSideBearing).writeSHORT(this.xMaxExtent).writeSHORT(this.caretSlopeRise).writeSHORT(this.caretSlopeRun).writeSHORT(this.caretOffset);
		tt.writeSHORT(0);
		tt.writeSHORT(0);
		tt.writeSHORT(0);
		tt.writeSHORT(0);
		tt.writeSHORT(0);
		tt.writeUSHORT(this.numberOfHMetrics);
	}
	,setAdvanceWidthMax: function(advanceWidthMax) {
		this.advanceWidthMax = advanceWidthMax;
		return this;
	}
	,setAscender: function(ascender) {
		this.ascender = ascender;
		return this;
	}
	,setCaretOffset: function(caretOffset) {
		this.caretOffset = caretOffset;
		return this;
	}
	,setCaretSlopeRise: function(caretSlopeRise) {
		this.caretSlopeRise = caretSlopeRise;
		return this;
	}
	,setCaretSlopeRun: function(caretSlopeRun) {
		this.caretSlopeRun = caretSlopeRun;
		return this;
	}
	,setDescender: function(descender) {
		this.descender = descender;
		return this;
	}
	,setLineGap: function(lineGap) {
		this.lineGap = lineGap;
		return this;
	}
	,setMinLeftSideBearing: function(minLeftSideBearing) {
		this.minLeftSideBearing = minLeftSideBearing;
		return this;
	}
	,setMinRightSideBearing: function(minRightSideBearing) {
		this.minRightSideBearing = minRightSideBearing;
		return this;
	}
	,setNumberOfHMetrics: function(numberOfHMetrics) {
		this.numberOfHMetrics = numberOfHMetrics;
		return this;
	}
	,setXMaxExtent: function(maxExtent) {
		this.xMaxExtent = maxExtent;
		return this;
	}
	,__class__: fonthx_opentype_tables_HorizontalHeaderTable
});
var fonthx_opentype_tables_HorizontalMetricsTable = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.HMTX);
	this.metrics = [];
};
fonthx_opentype_tables_HorizontalMetricsTable.__name__ = "fonthx.opentype.tables.HorizontalMetricsTable";
fonthx_opentype_tables_HorizontalMetricsTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_HorizontalMetricsTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	metrics: null
	,addMetric: function(advanceWidth,lsb) {
		this.metrics.push(new fonthx_opentype_tables_HorizontalMetric(advanceWidth,lsb));
	}
	,write: function(tt) {
		var _g = 0;
		var _g1 = this.metrics;
		while(_g < _g1.length) {
			var hm = _g1[_g];
			++_g;
			tt.writeUSHORT(hm.advanceWidth).writeSHORT(hm.lsb);
		}
	}
	,__class__: fonthx_opentype_tables_HorizontalMetricsTable
});
var fonthx_opentype_tables_HorizontalMetric = function(advanceWidth,lsb) {
	this.advanceWidth = advanceWidth;
	this.lsb = lsb;
};
fonthx_opentype_tables_HorizontalMetric.__name__ = "fonthx.opentype.tables.HorizontalMetric";
fonthx_opentype_tables_HorizontalMetric.prototype = {
	advanceWidth: null
	,lsb: null
	,__class__: fonthx_opentype_tables_HorizontalMetric
};
var fonthx_opentype_tables_KerningTable = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.KERN);
};
fonthx_opentype_tables_KerningTable.__name__ = "fonthx.opentype.tables.KerningTable";
fonthx_opentype_tables_KerningTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_KerningTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	pairs: null
	,write: function(tt) {
		tt.writeUSHORT(0);
		tt.writeUSHORT(1);
		var numPairs = this.pairs.length;
		tt.writeUSHORT(0);
		tt.writeUSHORT(numPairs * 6 + 14);
		tt.writeUSHORT(1);
		var maxPow2 = 1;
		var exp = 0;
		while(maxPow2 <= numPairs) {
			maxPow2 <<= 1;
			++exp;
		}
		maxPow2 >>= 1;
		--exp;
		tt.writeUSHORT(numPairs);
		tt.writeUSHORT(maxPow2 * 6);
		tt.writeUSHORT(exp);
		tt.writeUSHORT((numPairs - maxPow2) * 6);
		this.pairs.sort(function(kp1,kp2) {
			var id1 = kp1.idx1 << 8 | kp1.idx2;
			var id2 = kp2.idx1 << 8 | kp2.idx2;
			if(id2 == id1) {
				return 0;
			} else if(id2 > id1) {
				return -1;
			}
			return 1;
		});
		var _g = 0;
		var _g1 = this.pairs;
		while(_g < _g1.length) {
			var kp = _g1[_g];
			++_g;
			tt.writeUSHORT(kp.idx1);
			tt.writeUSHORT(kp.idx2);
			tt.writeSHORT(kp.x | 0);
		}
	}
	,setKerningPairs: function(pairs) {
		this.pairs = pairs;
	}
	,__class__: fonthx_opentype_tables_KerningTable
});
var fonthx_opentype_tables_LocationTable = function(glyphTable) {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.LOCA);
	this.glyphTable = glyphTable;
};
fonthx_opentype_tables_LocationTable.__name__ = "fonthx.opentype.tables.LocationTable";
fonthx_opentype_tables_LocationTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_LocationTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	glyphTable: null
	,write: function(tt) {
		var offsets = this.glyphTable.getOffsets();
		var _g = 0;
		while(_g < offsets.length) {
			var o = offsets[_g];
			++_g;
			tt.writeULONG(o);
		}
	}
	,__class__: fonthx_opentype_tables_LocationTable
});
var fonthx_opentype_tables_MaximumProfileTable = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.MAXP);
	this.version = fonthx_opentype_tables_MaximumProfileTable.TRUETYPE_OUTLINES;
	this.numGlyphs = 0;
	this.maxPoints = 0;
	this.maxContours = 0;
	this.maxCompositePoints = 0;
	this.maxCompositeContours = 0;
	this.maxZones = 2;
	this.maxTwilightPoints = 0;
	this.maxStorage = 0;
	this.maxFunctionDefs = 0;
	this.maxInstructionDefs = 0;
	this.maxStackElements = 0;
	this.maxSizeOfInstructions = 0;
	this.maxComponentElements = 0;
	this.maxComponentDepth = 0;
};
fonthx_opentype_tables_MaximumProfileTable.__name__ = "fonthx.opentype.tables.MaximumProfileTable";
fonthx_opentype_tables_MaximumProfileTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_MaximumProfileTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	version: null
	,numGlyphs: null
	,maxPoints: null
	,maxContours: null
	,maxCompositePoints: null
	,maxCompositeContours: null
	,maxZones: null
	,maxTwilightPoints: null
	,maxStorage: null
	,maxFunctionDefs: null
	,maxInstructionDefs: null
	,maxStackElements: null
	,maxSizeOfInstructions: null
	,maxComponentElements: null
	,maxComponentDepth: null
	,write: function(tt) {
		tt.writeULONG(this.version);
		tt.writeUSHORT(this.numGlyphs);
		if(this.version == fonthx_opentype_tables_MaximumProfileTable.TRUETYPE_OUTLINES) {
			tt.writeUSHORT(this.maxPoints);
			tt.writeUSHORT(this.maxContours);
			tt.writeUSHORT(this.maxCompositePoints);
			tt.writeUSHORT(this.maxCompositeContours);
			tt.writeUSHORT(this.maxZones);
			tt.writeUSHORT(this.maxTwilightPoints);
			tt.writeUSHORT(this.maxStorage);
			tt.writeUSHORT(this.maxFunctionDefs);
			tt.writeUSHORT(this.maxInstructionDefs);
			tt.writeUSHORT(this.maxStackElements);
			tt.writeUSHORT(this.maxSizeOfInstructions);
			tt.writeUSHORT(this.maxComponentElements);
			tt.writeUSHORT(this.maxComponentDepth);
		}
	}
	,setMaxComponentDepth: function(maxComponentDepth) {
		this.maxComponentDepth = maxComponentDepth;
		return this;
	}
	,setMaxComponentElements: function(maxComponentElements) {
		this.maxComponentElements = maxComponentElements;
		return this;
	}
	,setMaxCompositeContours: function(maxCompositeContours) {
		this.maxCompositeContours = maxCompositeContours;
		return this;
	}
	,setMaxCompositePoints: function(maxCompositePoints) {
		this.maxCompositePoints = maxCompositePoints;
		return this;
	}
	,setMaxContours: function(maxContours) {
		this.maxContours = maxContours;
		return this;
	}
	,setMaxFunctionDefs: function(maxFunctionDefs) {
		this.maxFunctionDefs = maxFunctionDefs;
		return this;
	}
	,setMaxInstructionDefs: function(maxInstructionDefs) {
		this.maxInstructionDefs = maxInstructionDefs;
	}
	,setMaxPoints: function(maxPoints) {
		this.maxPoints = maxPoints;
		return this;
	}
	,setMaxSizeOfInstructions: function(maxSizeOfInstructions) {
		this.maxSizeOfInstructions = maxSizeOfInstructions;
		return this;
	}
	,setMaxStackElements: function(maxStackElements) {
		this.maxStackElements = maxStackElements;
		return this;
	}
	,setMaxStorage: function(maxStorage) {
		this.maxStorage = maxStorage;
		return this;
	}
	,setMaxTwilightPoints: function(maxTwilightPoints) {
		this.maxTwilightPoints = maxTwilightPoints;
		return this;
	}
	,setMaxZones: function(maxZones) {
		this.maxZones = maxZones;
		return this;
	}
	,setNumGlyphs: function(numGlyphs) {
		this.numGlyphs = numGlyphs;
		return this;
	}
	,setVersion: function(version) {
		this.version = version;
		return this;
	}
	,__class__: fonthx_opentype_tables_MaximumProfileTable
});
var fonthx_opentype_tables_OS2Table = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.OS2);
	this.version = 3;
	this.xAvgCharWidth = 0;
	this.usWeightClass = fonthx_opentype_constants_OS2Weight.NORMAL;
	this.usWidthClass = fonthx_opentype_constants_OS2Width.NORMAL;
	this.fsType = fonthx_opentype_constants_OS2Embeddable.INSTALLABLE;
	this.ySubscriptXSize = 100;
	this.ySubscriptYSize = 100;
	this.ySubscriptXOffset = 0;
	this.ySubscriptYOffset = 100;
	this.ySuperscriptXSize = 100;
	this.ySuperscriptYSize = 100;
	this.ySuperscriptXOffset = 0;
	this.ySuperscriptYOffset = 100;
	this.yStrikeoutSize = 50;
	this.yStrikeoutPosition = 225;
	this.sFamilyClass = 0;
	this.panose = [];
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose.push(0);
	this.panose[2] = 4;
	this.ulUnicodeRange1 = 0;
	this.ulUnicodeRange2 = 0;
	this.ulUnicodeRange3 = 0;
	this.ulUnicodeRange4 = 0;
	this.achVendID = "FSTR";
	this.fsSelection = 64;
	this.usFirstCharIndex = 32;
	this.usLastCharIndex = 255;
	this.sTypoAscender = 0;
	this.sTypoDescender = 0;
	this.sTypoLineGap = 0;
	this.usWinAscent = 0;
	this.usWinDescent = 0;
	this.ulCodePageRange1 = 1;
	this.ulCodePageRange2 = 0;
	this.sxHeight = 0;
	this.sCapHeight = 0;
	this.usDefaultChar = 0;
	this.usBreakChar = 32;
	this.usMaxContext = 0;
};
fonthx_opentype_tables_OS2Table.__name__ = "fonthx.opentype.tables.OS2Table";
fonthx_opentype_tables_OS2Table.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_OS2Table.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	version: null
	,xAvgCharWidth: null
	,usWeightClass: null
	,usWidthClass: null
	,fsType: null
	,ySubscriptXSize: null
	,ySubscriptYSize: null
	,ySubscriptXOffset: null
	,ySubscriptYOffset: null
	,ySuperscriptXSize: null
	,ySuperscriptYSize: null
	,ySuperscriptXOffset: null
	,ySuperscriptYOffset: null
	,yStrikeoutSize: null
	,yStrikeoutPosition: null
	,sFamilyClass: null
	,panose: null
	,ulUnicodeRange1: null
	,ulUnicodeRange2: null
	,ulUnicodeRange3: null
	,ulUnicodeRange4: null
	,achVendID: null
	,fsSelection: null
	,usFirstCharIndex: null
	,usLastCharIndex: null
	,sTypoAscender: null
	,sTypoDescender: null
	,sTypoLineGap: null
	,usWinAscent: null
	,usWinDescent: null
	,ulCodePageRange1: null
	,ulCodePageRange2: null
	,sxHeight: null
	,sCapHeight: null
	,usDefaultChar: null
	,usBreakChar: null
	,usMaxContext: null
	,write: function(tt) {
		tt.writeUSHORT(this.version).writeSHORT(this.xAvgCharWidth).writeUSHORT(this.usWeightClass).writeUSHORT(this.usWidthClass).writeUSHORT(this.fsType).writeSHORT(this.ySubscriptXSize).writeSHORT(this.ySubscriptYSize).writeSHORT(this.ySubscriptXOffset).writeSHORT(this.ySubscriptYOffset).writeSHORT(this.ySuperscriptXSize).writeSHORT(this.ySuperscriptYSize).writeSHORT(this.ySuperscriptXOffset).writeSHORT(this.ySuperscriptYOffset).writeSHORT(this.yStrikeoutSize).writeSHORT(this.yStrikeoutPosition).writeSHORT(this.sFamilyClass);
		tt.writeByte(this.panose[0]);
		tt.writeByte(this.panose[1]);
		tt.writeByte(this.panose[2]);
		tt.writeByte(this.panose[3]);
		tt.writeByte(this.panose[4]);
		tt.writeByte(this.panose[5]);
		tt.writeByte(this.panose[6]);
		tt.writeByte(this.panose[7]);
		tt.writeByte(this.panose[8]);
		tt.writeByte(this.panose[9]);
		tt.writeULONG(this.ulUnicodeRange1).writeULONG(this.ulUnicodeRange2).writeULONG(this.ulUnicodeRange3).writeULONG(this.ulUnicodeRange4).writeTag(this.achVendID).writeUSHORT(this.fsSelection).writeUSHORT(this.usFirstCharIndex).writeUSHORT(this.usLastCharIndex).writeSHORT(this.sTypoAscender).writeSHORT(this.sTypoDescender).writeSHORT(this.sTypoLineGap).writeUSHORT(this.usWinAscent).writeUSHORT(this.usWinDescent).writeULONG(this.ulCodePageRange1).writeULONG(this.ulCodePageRange2).writeSHORT(this.sxHeight).writeSHORT(this.sCapHeight).writeUSHORT(this.usDefaultChar).writeUSHORT(this.usBreakChar).writeUSHORT(this.usMaxContext);
	}
	,setVendorID: function(vendorID) {
		this.achVendID = vendorID;
		return this;
	}
	,setFontSelectionFlags: function(flags) {
		this.fsSelection = flags;
		return this;
	}
	,setEmbedding: function(embeddingType) {
		this.fsType = embeddingType;
		return this;
	}
	,setPanoseBit: function(value,index) {
		if(index < 10) {
			this.panose[index] = value;
		}
		return this;
	}
	,setCapHeight: function(capHeight) {
		this.sCapHeight = capHeight;
		return this;
	}
	,setFamilyClass: function(familyClass) {
		this.sFamilyClass = familyClass;
		return this;
	}
	,setTypoAscender: function(typoAscender) {
		this.sTypoAscender = typoAscender;
		return this;
	}
	,setTypoDescender: function(typoDescender) {
		this.sTypoDescender = typoDescender;
		return this;
	}
	,setTypoLineGap: function(typoLineGap) {
		this.sTypoLineGap = typoLineGap;
		return this;
	}
	,setSxHeight: function(sxHeight) {
		this.sxHeight = sxHeight;
		return this;
	}
	,addCodePage: function(codepageIndex) {
		if(codepageIndex < 32) {
			this.ulCodePageRange1 |= 1 << codepageIndex;
		} else {
			this.ulCodePageRange2 |= 1 << codepageIndex - 32;
		}
		return this;
	}
	,addUnicodeRange: function(rangeIndex) {
		if(rangeIndex < 0) {
			return;
		}
		if(rangeIndex < 32) {
			this.ulUnicodeRange1 |= 1 << rangeIndex;
		} else if(rangeIndex < 64) {
			this.ulUnicodeRange2 |= 1 << rangeIndex - 32;
		} else if(rangeIndex < 96) {
			this.ulUnicodeRange3 |= 1 << rangeIndex - 64;
		} else {
			this.ulUnicodeRange4 |= 1 << rangeIndex - 96;
		}
	}
	,setBreakChar: function(codepoint) {
		this.usBreakChar = codepoint;
		return this;
	}
	,setDefaultChar: function(defaultChar) {
		this.usDefaultChar = defaultChar;
		return this;
	}
	,setFirstCharIndex: function(firstCharIndex) {
		this.usFirstCharIndex = firstCharIndex;
		return this;
	}
	,setLastCharIndex: function(lastCharIndex) {
		this.usLastCharIndex = lastCharIndex;
		return this;
	}
	,setMaxContext: function(maxContext) {
		this.usMaxContext = maxContext;
		return this;
	}
	,setWeightClass: function(weightClass) {
		this.usWeightClass = weightClass;
		return this;
	}
	,setWidthClass: function(widthClass) {
		this.usWidthClass = widthClass;
		return this;
	}
	,setWinAscent: function(winAscent) {
		this.usWinAscent = winAscent;
		return this;
	}
	,setWinDescent: function(winDescent) {
		this.usWinDescent = winDescent;
		return this;
	}
	,setVersion: function(version) {
		this.version = version;
		return this;
	}
	,setAvgCharWidth: function(avgCharWidth) {
		this.xAvgCharWidth = avgCharWidth;
		return this;
	}
	,setStrikeoutPosition: function(strikeoutPosition) {
		this.yStrikeoutPosition = strikeoutPosition;
		return this;
	}
	,setStrikeoutSize: function(strikeoutSize) {
		this.yStrikeoutSize = strikeoutSize;
		return this;
	}
	,setYSubscriptXOffset: function(subscriptXOffset) {
		this.ySubscriptXOffset = subscriptXOffset;
		return this;
	}
	,setYSubscriptXSize: function(subscriptXSize) {
		this.ySubscriptXSize = subscriptXSize;
		return this;
	}
	,setYSubscriptYOffset: function(subscriptYOffset) {
		this.ySubscriptYOffset = subscriptYOffset;
		return this;
	}
	,setYSubscriptYSize: function(subscriptYSize) {
		this.ySubscriptYSize = subscriptYSize;
		return this;
	}
	,setYSuperscriptXOffset: function(superscriptXOffset) {
		this.ySuperscriptXOffset = superscriptXOffset;
		return this;
	}
	,setYSuperscriptXSize: function(superscriptXSize) {
		this.ySuperscriptXSize = superscriptXSize;
		return this;
	}
	,setYSuperscriptYOffset: function(superscriptYOffset) {
		this.ySuperscriptYOffset = superscriptYOffset;
		return this;
	}
	,setYSuperscriptYSize: function(superscriptYSize) {
		this.ySuperscriptYSize = superscriptYSize;
		return this;
	}
	,__class__: fonthx_opentype_tables_OS2Table
});
var fonthx_opentype_tables_PostTable = function(font,version) {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.POST);
	this.font = font;
	this.version = version;
	this.names = [];
	this.standardNames = [];
};
fonthx_opentype_tables_PostTable.__name__ = "fonthx.opentype.tables.PostTable";
fonthx_opentype_tables_PostTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_PostTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	version: null
	,font: null
	,names: null
	,standardNames: null
	,write: function(tt) {
		tt.writeULONG(this.version).writeFixed(this.font.getItalicAngle()).writeUSHORT(this.font.getUnderlinePosition()).writeUSHORT(this.font.getUnderlineThickness()).writeULONG(this.font.isFixedPitch() ? 1 : 0).writeULONG(0).writeULONG(0).writeULONG(0).writeULONG(0);
		if(this.version == fonthx_opentype_tables_PostTable.VERSION_2_0) {
			tt.writeUSHORT(this.names.length + this.standardNames.length);
			var _g = 0;
			var _g1 = this.standardNames;
			while(_g < _g1.length) {
				var standardIndex = _g1[_g];
				++_g;
				tt.writeUSHORT(standardIndex);
			}
			var count = 258;
			var _g = 0;
			var _g1 = this.names;
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				tt.writeUSHORT(count++);
			}
			var _g = 0;
			var _g1 = this.names;
			while(_g < _g1.length) {
				var name = _g1[_g];
				++_g;
				tt.writePascalString(name);
			}
		}
	}
	,appendMacStandardGlyph: function(index) {
		this.standardNames.push(index);
	}
	,appendNamedGlyph: function(name) {
		this.names.push(name);
	}
	,__class__: fonthx_opentype_tables_PostTable
});
var fonthx_opentype_tables_SnftTable = function(numTables,format) {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.SFNT);
	this.numTables = numTables;
	this.format = format;
};
fonthx_opentype_tables_SnftTable.__name__ = "fonthx.opentype.tables.SnftTable";
fonthx_opentype_tables_SnftTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_SnftTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	numTables: null
	,format: null
	,write: function(tt) {
		var maxPow2 = Math.pow(2,Math.floor(Math.log(this.numTables) / Math.log(2))) | 0;
		var searchRange = maxPow2 * 16;
		var entrySelector = Math.log(maxPow2) / Math.log(2) | 0;
		var rangeShift = this.numTables * 16 - searchRange;
		if(this.format == "otf") {
			tt.writeTag("OTTO");
		} else {
			tt.writeULONG(65536);
		}
		tt.writeUSHORT(this.numTables);
		tt.writeUSHORT(searchRange);
		tt.writeUSHORT(entrySelector);
		tt.writeUSHORT(rangeShift);
	}
	,__class__: fonthx_opentype_tables_SnftTable
});
var fonthx_opentype_tables_TableDirectory = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.TDIR);
	this.entries = [];
};
fonthx_opentype_tables_TableDirectory.__name__ = "fonthx.opentype.tables.TableDirectory";
fonthx_opentype_tables_TableDirectory.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_TableDirectory.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	entries: null
	,addEntry: function(entry) {
		this.entries.push(entry);
	}
	,write: function(tt) {
		this.entries.sort(function(a,b) {
			if(b.table.tag > a.table.tag) {
				return -1;
			}
			if(b.table.tag < a.table.tag) {
				return 1;
			}
			return 0;
		});
		var _g = 0;
		var _g1 = this.entries;
		while(_g < _g1.length) {
			var entry = _g1[_g];
			++_g;
			entry.write(tt);
		}
	}
	,__class__: fonthx_opentype_tables_TableDirectory
});
var fonthx_opentype_tables_TableDirectoryEntry = function(table) {
	this.table = table;
};
fonthx_opentype_tables_TableDirectoryEntry.__name__ = "fonthx.opentype.tables.TableDirectoryEntry";
fonthx_opentype_tables_TableDirectoryEntry.prototype = {
	table: null
	,write: function(tt) {
		tt.writeTag(this.table.tag).writeULONG(this.table.checksum).writeULONG(this.table.offset).writeULONG(this.table.length);
	}
	,__class__: fonthx_opentype_tables_TableDirectoryEntry
};
var fonthx_opentype_tables_cmap_CharacterMapSubtable = function(platformID,encodingID,languageID) {
	if(languageID == null) {
		languageID = 0;
	}
	fonthx_opentype_tables_Table.call(this);
	this.unmapped = 0;
	this.platformID = platformID;
	this.encodingID = encodingID;
	this.languageID = languageID;
	this.codepoints = [];
};
fonthx_opentype_tables_cmap_CharacterMapSubtable.__name__ = "fonthx.opentype.tables.cmap.CharacterMapSubtable";
fonthx_opentype_tables_cmap_CharacterMapSubtable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_cmap_CharacterMapSubtable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	platformID: null
	,encodingID: null
	,languageID: null
	,codepoints: null
	,unmapped: null
	,calculateLength: function() {
		return this.length;
	}
	,addMapping: function(idx,codepoint) {
	}
	,addCodepoint: function(codepoint) {
		this.codepoints.push(codepoint);
	}
	,incrementUnmapped: function() {
		this.unmapped++;
	}
	,getUnmapped: function() {
		return this.unmapped;
	}
	,__class__: fonthx_opentype_tables_cmap_CharacterMapSubtable
});
var fonthx_opentype_tables_cmap_CharacterMapFormat12Subtable = function(platformID,encodingID,languageID) {
	if(languageID == null) {
		languageID = 0;
	}
	fonthx_opentype_tables_cmap_CharacterMapSubtable.call(this,platformID,encodingID,languageID);
	this.groups = [];
};
fonthx_opentype_tables_cmap_CharacterMapFormat12Subtable.__name__ = "fonthx.opentype.tables.cmap.CharacterMapFormat12Subtable";
fonthx_opentype_tables_cmap_CharacterMapFormat12Subtable.__super__ = fonthx_opentype_tables_cmap_CharacterMapSubtable;
fonthx_opentype_tables_cmap_CharacterMapFormat12Subtable.prototype = $extend(fonthx_opentype_tables_cmap_CharacterMapSubtable.prototype,{
	groups: null
	,calculateLength: function() {
		if(this.length == 0) {
			this.prepareGroups();
			this.length = 16 + this.groups.length * 12;
		}
		return this.length;
	}
	,prepareGroups: function() {
		if(this.groups.length > 0) {
			return;
		}
		var prevCode = -100;
		var currCode = 0;
		var currGroup = null;
		var _g = 0;
		var _g1 = this.codepoints.length;
		while(_g < _g1) {
			var i = _g++;
			currCode = this.codepoints[i];
			var mappable = currCode > 0;
			var consecutive = currCode == prevCode + 1;
			if(!consecutive) {
				if(currGroup != null) {
					currGroup.end = prevCode;
					this.groups.push(currGroup);
				}
				if(mappable) {
					currGroup = new fonthx_opentype_tables_cmap_Group(currCode,0,i);
				}
			}
			if(mappable) {
				prevCode = currCode;
			}
		}
		if(currGroup != null && currCode > 0) {
			currGroup.end = currCode;
			this.groups.push(currGroup);
		}
	}
	,write: function(tt) {
		this.prepareGroups();
		tt.writeUSHORT(12);
		tt.writeUSHORT(0);
		tt.writeULONG(this.calculateLength());
		tt.writeULONG(0);
		tt.writeULONG(this.groups.length);
		var _g = 0;
		var _g1 = this.groups;
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			tt.writeULONG(g.start);
			tt.writeULONG(g.end);
			tt.writeULONG(g.startId);
		}
	}
	,__class__: fonthx_opentype_tables_cmap_CharacterMapFormat12Subtable
});
var fonthx_opentype_tables_cmap_Group = function(start,end,startId) {
	this.start = start;
	this.end = end;
	this.startId = startId;
};
fonthx_opentype_tables_cmap_Group.__name__ = "fonthx.opentype.tables.cmap.Group";
fonthx_opentype_tables_cmap_Group.prototype = {
	start: null
	,end: null
	,startId: null
	,__class__: fonthx_opentype_tables_cmap_Group
};
var fonthx_opentype_tables_cmap_CharacterMapFormat4Subtable = function(platformID,encodingID,languageID) {
	fonthx_opentype_tables_cmap_CharacterMapSubtable.call(this,platformID,encodingID,languageID);
	this.segments = [];
};
fonthx_opentype_tables_cmap_CharacterMapFormat4Subtable.__name__ = "fonthx.opentype.tables.cmap.CharacterMapFormat4Subtable";
fonthx_opentype_tables_cmap_CharacterMapFormat4Subtable.__super__ = fonthx_opentype_tables_cmap_CharacterMapSubtable;
fonthx_opentype_tables_cmap_CharacterMapFormat4Subtable.prototype = $extend(fonthx_opentype_tables_cmap_CharacterMapSubtable.prototype,{
	segments: null
	,calculateLength: function() {
		if(this.length == 0) {
			this.prepareSegments();
			var numGlyphs = this.codepoints.length;
			this.length = 16 + this.segments.length * 8 + numGlyphs * 2;
		}
		return this.length;
	}
	,prepareSegments: function() {
		if(this.segments.length > 0) {
			return;
		}
		var prevCode = -100;
		var currCode = 0;
		var currSeg = null;
		var _g = 0;
		var _g1 = this.codepoints.length;
		while(_g < _g1) {
			var i = _g++;
			currCode = this.codepoints[i];
			var mappable = currCode > 0;
			var consecutive = currCode == prevCode + 1;
			if(!consecutive) {
				if(currSeg != null) {
					currSeg.end = prevCode;
					this.segments.push(currSeg);
				}
				if(mappable) {
					currSeg = new fonthx_opentype_tables_cmap_Segment(currCode,0,i - currCode);
				}
			}
			if(mappable) {
				prevCode = currCode;
			} else {
				this.incrementUnmapped();
			}
		}
		if(currSeg != null && currCode > 0) {
			currSeg.end = currCode;
			this.segments.push(currSeg);
		}
		this.segments.push(new fonthx_opentype_tables_cmap_Segment(65535,65535));
		var charsSoFar = 0;
		var _g = 0;
		var _g1 = this.segments;
		while(_g < _g1.length) {
			var seg = _g1[_g];
			++_g;
			var delta = -65535;
			if(seg.start != 65535) {
				delta = this.getUnmapped() - (seg.start - charsSoFar);
			}
			seg.idDelta = delta;
			charsSoFar += seg.end - seg.start + 1;
		}
	}
	,write: function(tt) {
		this.prepareSegments();
		var segCount = this.segments.length;
		tt.writeUSHORT(4);
		tt.writeUSHORT(this.calculateLength());
		tt.writeUSHORT(0);
		tt.writeUSHORT(segCount * 2);
		var searchRange = 2 * Math.pow(2,Math.floor(Math.log(segCount) / Math.log(2))) | 0;
		tt.writeUSHORT(searchRange);
		tt.writeUSHORT(Math.log(searchRange / 2) / Math.log(2) | 0);
		tt.writeUSHORT(2 * segCount - searchRange);
		var _g = 0;
		var _g1 = this.segments;
		while(_g < _g1.length) {
			var seg = _g1[_g];
			++_g;
			tt.writeUSHORT(seg.end);
		}
		tt.writeUSHORT(0);
		var _g = 0;
		var _g1 = this.segments;
		while(_g < _g1.length) {
			var seg = _g1[_g];
			++_g;
			tt.writeUSHORT(seg.start);
		}
		var _g = 0;
		var _g1 = this.segments;
		while(_g < _g1.length) {
			var seg = _g1[_g];
			++_g;
			tt.writeSHORT(seg.idDelta);
		}
		var _g = 0;
		var _g1 = segCount;
		while(_g < _g1) {
			var code = _g++;
			tt.writeUSHORT(0);
		}
		var numGlyphs = this.codepoints.length;
		var _g = 0;
		var _g1 = numGlyphs;
		while(_g < _g1) {
			var i = _g++;
			tt.writeUSHORT(0);
		}
	}
	,addCodepoint: function(codepoint) {
		if(codepoint <= 65535) {
			this.codepoints.push(codepoint);
		}
	}
	,__class__: fonthx_opentype_tables_cmap_CharacterMapFormat4Subtable
});
var fonthx_opentype_tables_cmap_Segment = function(start,end,idDelta) {
	if(idDelta == null) {
		idDelta = 1;
	}
	this.start = start;
	this.end = end;
	this.idDelta = idDelta;
};
fonthx_opentype_tables_cmap_Segment.__name__ = "fonthx.opentype.tables.cmap.Segment";
fonthx_opentype_tables_cmap_Segment.prototype = {
	start: null
	,end: null
	,idDelta: null
	,__class__: fonthx_opentype_tables_cmap_Segment
};
var fonthx_opentype_tables_cmap_CharacterMapTable = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.CMAP);
	this.subtables = [];
};
fonthx_opentype_tables_cmap_CharacterMapTable.__name__ = "fonthx.opentype.tables.cmap.CharacterMapTable";
fonthx_opentype_tables_cmap_CharacterMapTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_cmap_CharacterMapTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	subtables: null
	,write: function(tt) {
		tt.writeUSHORT(0);
		var numTables = this.subtables.length;
		tt.writeUSHORT(numTables);
		var subtableOffset = 4 + numTables * 8;
		var _g = 0;
		var _g1 = this.subtables;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			tt.writeUSHORT(t.platformID).writeUSHORT(t.encodingID).writeULONG(subtableOffset);
			subtableOffset += t.calculateLength();
		}
		var _g = 0;
		var _g1 = this.subtables;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			t.write(tt);
		}
	}
	,addSubtable: function(sub) {
		this.subtables.push(sub);
	}
	,getSubtables: function() {
		return this.subtables;
	}
	,__class__: fonthx_opentype_tables_cmap_CharacterMapTable
});
var fonthx_opentype_tables_naming_NamingRecord = function(platformID,encodingID,languageID,nameID,string) {
	this.platformID = platformID;
	this.encodingID = encodingID;
	this.languageID = languageID;
	this.nameID = nameID;
	this.string = string == null ? "" : string;
	this.offset = 0;
};
fonthx_opentype_tables_naming_NamingRecord.__name__ = "fonthx.opentype.tables.naming.NamingRecord";
fonthx_opentype_tables_naming_NamingRecord.prototype = {
	platformID: null
	,encodingID: null
	,languageID: null
	,nameID: null
	,offset: null
	,string: null
	,isUnicode: function() {
		return this.platformID != fonthx_opentype_constants_Platform.MACINTOSH;
	}
	,write: function(tt,offset) {
		this.offset = offset;
		tt.writeUSHORT(this.platformID).writeUSHORT(this.encodingID).writeUSHORT(this.languageID).writeUSHORT(this.nameID).writeUSHORT(this.getByteLength()).writeUSHORT(offset);
	}
	,getString: function() {
		return this.string;
	}
	,getBytes: function() {
		if(this.platformID == fonthx_opentype_constants_Platform.MACINTOSH && this.encodingID == fonthx_opentype_constants_MacintoshEncoding.ROMAN) {
			return fonthx_utils_StringEncoder.encode(this.string,"MACROMAN");
		} else {
			var bytes = new haxe_io_BytesBuffer();
			var _g = 0;
			var _g1 = this.string.length;
			while(_g < _g1) {
				var i = _g++;
				var c = HxOverrides.cca(this.string,i);
				bytes.addByte(c >>> 8 & 255);
				bytes.addByte(c & 255);
			}
			return bytes.getBytes();
		}
	}
	,getByteLength: function() {
		return this.getBytes().length;
	}
	,toString: function() {
		return this.platformID + "," + this.encodingID + "," + this.languageID + "," + this.nameID + ": " + this.string;
	}
	,__class__: fonthx_opentype_tables_naming_NamingRecord
};
var fonthx_opentype_tables_naming_NamingTable = function() {
	fonthx_opentype_tables_Table.call(this,fonthx_opentype_tables_Table.NAME);
	this.format = 0;
	this.records = [];
};
fonthx_opentype_tables_naming_NamingTable.__name__ = "fonthx.opentype.tables.naming.NamingTable";
fonthx_opentype_tables_naming_NamingTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_naming_NamingTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	records: null
	,format: null
	,addRecord: function(nameId,string,encoding) {
		if(string != null && string.length > 0) {
			this.records.push(new fonthx_opentype_tables_naming_NamingRecord(encoding.platformId,encoding.encodingId,encoding.languageId,nameId,string));
		}
	}
	,toString: function() {
		var s = "";
		var _g = 0;
		var _g1 = this.records;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			s = s + r.toString() + "\n";
		}
		return s;
	}
	,write: function(tt) {
		tt.writeUSHORT(this.format).writeUSHORT(this.records.length).writeUSHORT(this.records.length * 12 + 6);
		var offset = 0;
		var _g = 0;
		var _g1 = this.records;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			var l = r.getByteLength();
			r.write(tt,offset);
			offset += l;
		}
		var _g = 0;
		var _g1 = this.records;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			tt.writeBytes(r.getBytes());
		}
	}
	,__class__: fonthx_opentype_tables_naming_NamingTable
});
var fonthx_opentype_tables_opentype_LayoutTable = function(tag) {
	fonthx_opentype_tables_Table.call(this,tag);
	this.majorVersion = 1;
	this.minorVersion = 0;
	this.scriptList = new fonthx_opentype_tables_opentype_script_ScriptListTable();
	this.featureList = new fonthx_opentype_tables_opentype_feature_FeatureListTable();
	this.lookupList = new fonthx_opentype_tables_opentype_lookup_LookupListTable(tag);
};
fonthx_opentype_tables_opentype_LayoutTable.__name__ = "fonthx.opentype.tables.opentype.LayoutTable";
fonthx_opentype_tables_opentype_LayoutTable.__super__ = fonthx_opentype_tables_Table;
fonthx_opentype_tables_opentype_LayoutTable.prototype = $extend(fonthx_opentype_tables_Table.prototype,{
	majorVersion: null
	,minorVersion: null
	,scriptList: null
	,featureList: null
	,lookupList: null
	,setLayout: function(layout) {
		this.scriptList.setScripts(layout.scripts);
		this.featureList.setFeatures(layout.features);
		this.lookupList.setLookups(layout.lookups);
	}
	,write: function(tt) {
		var offset = 10;
		tt.writeUINT16(this.majorVersion).writeUINT16(this.minorVersion).writeOffset16(offset);
		offset += this.scriptList.get_length();
		tt.writeOffset16(offset);
		offset += this.featureList.get_length();
		tt.writeOffset16(offset);
		this.scriptList.write(tt);
		this.featureList.write(tt);
		this.lookupList.write(tt);
	}
	,__class__: fonthx_opentype_tables_opentype_LayoutTable
});
var fonthx_opentype_tables_opentype_GPOSTable = function() {
	fonthx_opentype_tables_opentype_LayoutTable.call(this,fonthx_opentype_tables_Table.GPOS);
};
fonthx_opentype_tables_opentype_GPOSTable.__name__ = "fonthx.opentype.tables.opentype.GPOSTable";
fonthx_opentype_tables_opentype_GPOSTable.__super__ = fonthx_opentype_tables_opentype_LayoutTable;
fonthx_opentype_tables_opentype_GPOSTable.prototype = $extend(fonthx_opentype_tables_opentype_LayoutTable.prototype,{
	__class__: fonthx_opentype_tables_opentype_GPOSTable
});
var fonthx_opentype_tables_opentype_GSUBTable = function() {
	fonthx_opentype_tables_opentype_LayoutTable.call(this,fonthx_opentype_tables_Table.GSUB);
};
fonthx_opentype_tables_opentype_GSUBTable.__name__ = "fonthx.opentype.tables.opentype.GSUBTable";
fonthx_opentype_tables_opentype_GSUBTable.__super__ = fonthx_opentype_tables_opentype_LayoutTable;
fonthx_opentype_tables_opentype_GSUBTable.prototype = $extend(fonthx_opentype_tables_opentype_LayoutTable.prototype,{
	__class__: fonthx_opentype_tables_opentype_GSUBTable
});
var fonthx_opentype_tables_opentype_feature_FeatureListTable = function() {
};
fonthx_opentype_tables_opentype_feature_FeatureListTable.__name__ = "fonthx.opentype.tables.opentype.feature.FeatureListTable";
fonthx_opentype_tables_opentype_feature_FeatureListTable.prototype = {
	features: null
	,setFeatures: function(features) {
		this.features = features;
	}
	,write: function(tt) {
		tt.writeSHORT(this.features.length);
		var offset = 2 + 6 * this.features.length;
		var _g = 0;
		var _g1 = this.features;
		while(_g < _g1.length) {
			var feature = _g1[_g];
			++_g;
			tt.writeTag(fonthx_model_font_features_FeatureTag.toString(feature.tag));
			tt.writeOffset16(offset);
			offset += 4 + feature.lookups.length * 2;
		}
		var _g = 0;
		var _g1 = this.features;
		while(_g < _g1.length) {
			var feature = _g1[_g];
			++_g;
			tt.writeOffset16(0);
			tt.writeUINT16(feature.lookups.length);
			var _g2 = 0;
			var _g3 = feature.lookups;
			while(_g2 < _g3.length) {
				var lookup = _g3[_g2];
				++_g2;
				tt.writeUINT16(lookup.idx);
			}
		}
	}
	,get_length: function() {
		var l = 2 + this.features.length * 6;
		var _g = 0;
		var _g1 = this.features;
		while(_g < _g1.length) {
			var feature = _g1[_g];
			++_g;
			l += 4 + feature.lookups.length * 2;
		}
		return l;
	}
	,__class__: fonthx_opentype_tables_opentype_feature_FeatureListTable
	,__properties__: {get_length:"get_length"}
};
var fonthx_opentype_tables_opentype_lookup_ICommonTable = function() { };
fonthx_opentype_tables_opentype_lookup_ICommonTable.__name__ = "fonthx.opentype.tables.opentype.lookup.ICommonTable";
fonthx_opentype_tables_opentype_lookup_ICommonTable.__isInterface__ = true;
fonthx_opentype_tables_opentype_lookup_ICommonTable.prototype = {
	get_length: null
	,write: null
	,__class__: fonthx_opentype_tables_opentype_lookup_ICommonTable
	,__properties__: {get_length:"get_length"}
};
var fonthx_opentype_tables_opentype_lookup_ILookupSubtable = function() { };
fonthx_opentype_tables_opentype_lookup_ILookupSubtable.__name__ = "fonthx.opentype.tables.opentype.lookup.ILookupSubtable";
fonthx_opentype_tables_opentype_lookup_ILookupSubtable.__isInterface__ = true;
fonthx_opentype_tables_opentype_lookup_ILookupSubtable.__interfaces__ = [fonthx_opentype_tables_opentype_lookup_ICommonTable];
fonthx_opentype_tables_opentype_lookup_ILookupSubtable.prototype = {
	offset: null
	,subLookup: null
	,canSplit: null
	,split: null
	,__class__: fonthx_opentype_tables_opentype_lookup_ILookupSubtable
};
var fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable = function(subLookup) {
	this.offset = 0;
	this.subLookup = subLookup;
};
fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.__name__ = "fonthx.opentype.tables.opentype.lookup.AbstractLookupSubtable";
fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.__interfaces__ = [fonthx_opentype_tables_opentype_lookup_ILookupSubtable];
fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.prototype = {
	offset: null
	,subLookup: null
	,write: function(tt) {
	}
	,get_length: function() {
		return 0;
	}
	,canSplit: function() {
		if(this.subLookup != null) {
			return this.subLookup.canSplit();
		} else {
			return false;
		}
	}
	,split: function() {
		return null;
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable
	,__properties__: {get_length:"get_length"}
};
var fonthx_opentype_tables_opentype_lookup_LookupListTable = function(tag) {
	this.lookupTables = [];
	this.tag = tag;
};
fonthx_opentype_tables_opentype_lookup_LookupListTable.__name__ = "fonthx.opentype.tables.opentype.lookup.LookupListTable";
fonthx_opentype_tables_opentype_lookup_LookupListTable.prototype = {
	lookups: null
	,lookupTables: null
	,tag: null
	,setLookups: function(lookups) {
		this.lookups = lookups;
		var _g = 0;
		while(_g < lookups.length) {
			var lookup = lookups[_g];
			++_g;
			this.lookupTables.push(new fonthx_opentype_tables_opentype_lookup_LookupTable(lookup));
		}
	}
	,write: function(tt) {
		tt.writeUINT16(this.lookups.length);
		var _g = 0;
		var _g1 = this.lookupTables;
		while(_g < _g1.length) {
			var lookupTable = _g1[_g];
			++_g;
			var subLookupsWithSplits = Lambda.fold(lookupTable.subtables,function(subtable,acc) {
				if(subtable.get_length() >= fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.MAX_SIZE) {
					console.log("src/fonthx/opentype/tables/opentype/lookup/LookupListTable.hx:42:","Splitting subtable of length " + subtable.get_length() + " bytes");
					if(subtable.canSplit()) {
						acc = acc.concat(subtable.split());
					} else {
						console.log("src/fonthx/opentype/tables/opentype/lookup/LookupListTable.hx:46:","Cannot split overflowing sublookup!");
					}
				} else {
					acc.push(subtable);
				}
				return acc;
			},[]);
			if(subLookupsWithSplits.length != lookupTable.subtables.length) {
				console.log("src/fonthx/opentype/tables/opentype/lookup/LookupListTable.hx:54:","Replacing " + lookupTable.subtables.length + " subtables with " + subLookupsWithSplits.length + " split subtables");
				lookupTable.subtables = subLookupsWithSplits;
			}
		}
		var packedSubtables = Lambda.fold(this.lookupTables,function(lookupTable,acc) {
			var _this = lookupTable.subtables;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = new fonthx_opentype_tables_opentype_lookup_PackedLookupSubtableItem(_this[i],lookupTable);
			}
			return acc.concat(result);
		},[]);
		packedSubtables.sort(function(a,b) {
			return a.subtable.get_length() - b.subtable.get_length();
		});
		var useExtendedTablesFrom = 65024 - (packedSubtables.length * 2 + this.lookupTables.length * 6);
		var pos = 0;
		var packedExtensionSubtables = [];
		var _g = 0;
		var _g1 = packedSubtables.length;
		while(_g < _g1) {
			var i = _g++;
			var packedSubtable = packedSubtables[i];
			var subtable = packedSubtable.subtable;
			var lookupTable = packedSubtable.lookupTable;
			pos += subtable.get_length();
			if(pos > useExtendedTablesFrom && !lookupTable.get_useExtension()) {
				var extensionSubtables = [];
				var _g2 = 0;
				var _g3 = lookupTable.subtables;
				while(_g2 < _g3.length) {
					var toExtendSubtable = _g3[_g2];
					++_g2;
					var ext = new fonthx_opentype_tables_opentype_lookup_gpos_ExtensionPositioningSubtableFormat1(toExtendSubtable,fonthx_model_font_features_lookups_LookupType.toInt(lookupTable.lookup.type));
					packedExtensionSubtables.push(new fonthx_opentype_tables_opentype_lookup_PackedLookupSubtableItem(ext,lookupTable));
					extensionSubtables.push(ext);
				}
				lookupTable.subtables = extensionSubtables;
				lookupTable.set_useExtension(true);
			}
		}
		packedSubtables = packedExtensionSubtables.concat(packedSubtables);
		var offset = 0;
		var _g = 0;
		while(_g < packedSubtables.length) {
			var packedSubtableItem = packedSubtables[_g];
			++_g;
			packedSubtableItem.subtable.offset = offset;
			offset += packedSubtableItem.subtable.get_length();
		}
		var _g = 0;
		while(_g < packedExtensionSubtables.length) {
			var packedSubtableItem = packedExtensionSubtables[_g];
			++_g;
			var ext = packedSubtableItem.subtable;
			ext.longOffset = ext.subtable.offset - ext.offset;
		}
		var offset = 2 + 2 * this.lookups.length;
		var lookupTablesBaseOffset = 0;
		var _g = 0;
		var _g1 = this.lookupTables;
		while(_g < _g1.length) {
			var lookupTable = _g1[_g];
			++_g;
			tt.writeOffset16(offset);
			offset += lookupTable.get_length();
			lookupTablesBaseOffset += lookupTable.get_length();
		}
		var _g = 0;
		var _g1 = this.lookupTables;
		while(_g < _g1.length) {
			var lookupTable = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = lookupTable.subtables;
			while(_g2 < _g3.length) {
				var subtable = _g3[_g2];
				++_g2;
				subtable.offset += lookupTablesBaseOffset;
			}
			lookupTablesBaseOffset -= lookupTable.get_length();
		}
		var _g = 0;
		var _g1 = this.lookupTables;
		while(_g < _g1.length) {
			var lookupTable = _g1[_g];
			++_g;
			lookupTable.write(tt);
		}
		var _g = 0;
		while(_g < packedSubtables.length) {
			var packedSubtable = packedSubtables[_g];
			++_g;
			var subtable = packedSubtable.subtable;
			subtable.write(tt);
		}
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_LookupListTable
};
var fonthx_opentype_tables_opentype_lookup_LookupSubtableFactory = function() { };
fonthx_opentype_tables_opentype_lookup_LookupSubtableFactory.__name__ = "fonthx.opentype.tables.opentype.lookup.LookupSubtableFactory";
fonthx_opentype_tables_opentype_lookup_LookupSubtableFactory.createSubtable = function(subLookup) {
	if(((subLookup) instanceof fonthx_model_font_features_lookups_pairadjustment_PairAdjustmentPositioningSubLookup)) {
		return new fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat1(subLookup);
	} else if(((subLookup) instanceof fonthx_model_font_features_lookups_pairadjustment_ClassPairAdjustmentPositioningSubLookup)) {
		return new fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat2(subLookup);
	} else if(((subLookup) instanceof fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup)) {
		var ssSubLookup = js_Boot.__cast(subLookup , fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup);
		if(ssSubLookup.simpleDeltaSubstitutions()) {
			return new fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat1(ssSubLookup);
		}
		return new fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat2(ssSubLookup);
	} else if(((subLookup) instanceof fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup)) {
		return new fonthx_opentype_tables_opentype_lookup_gsub_LigatureSubstitutionSubtableFormat1(subLookup);
	}
	var c = js_Boot.getClass(subLookup);
	console.log("src/fonthx/opentype/tables/opentype/lookup/LookupSubtableFactory.hx:31:","Unidentified lookup subtable " + c.__name__);
	return null;
};
var fonthx_opentype_tables_opentype_lookup_LookupTable = function(lookup) {
	this.lookup = lookup;
	this.set_useExtension(false);
	this.updateSubtables();
};
fonthx_opentype_tables_opentype_lookup_LookupTable.__name__ = "fonthx.opentype.tables.opentype.lookup.LookupTable";
fonthx_opentype_tables_opentype_lookup_LookupTable.__interfaces__ = [fonthx_opentype_tables_opentype_lookup_ICommonTable];
fonthx_opentype_tables_opentype_lookup_LookupTable.prototype = {
	lookup: null
	,subtables: null
	,useExtension: null
	,updateSubtables: function() {
		this.subtables = [];
		var _g = 0;
		var _g1 = this.lookup.subLookups;
		while(_g < _g1.length) {
			var subLookup = _g1[_g];
			++_g;
			var subtable = fonthx_opentype_tables_opentype_lookup_LookupSubtableFactory.createSubtable(subLookup);
			this.subtables.push(subtable);
		}
	}
	,write: function(tt) {
		tt.writeUINT16(this.get_useExtension() ? this.lookup.isPos ? fonthx_model_font_features_lookups_LookupType.toInt(9) : fonthx_model_font_features_lookups_LookupType.toInt(7) : fonthx_model_font_features_lookups_LookupType.toInt(this.lookup.type));
		tt.writeUINT16(this.lookup.flags);
		tt.writeUINT16(this.subtables.length);
		var _g = 0;
		var _g1 = this.subtables;
		while(_g < _g1.length) {
			var subtable = _g1[_g];
			++_g;
			console.log("src/fonthx/opentype/tables/opentype/lookup/LookupTable.hx:47:","writing offset to " + subtable.offset);
			tt.writeOffset16(subtable.offset);
		}
	}
	,get_length: function() {
		return 6 + 2 * this.subtables.length;
	}
	,set_useExtension: function(useExtension) {
		return this.useExtension = useExtension;
	}
	,get_useExtension: function() {
		return this.useExtension;
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_LookupTable
	,__properties__: {set_useExtension:"set_useExtension",get_useExtension:"get_useExtension",get_length:"get_length"}
};
var fonthx_opentype_tables_opentype_lookup_PackedLookupSubtableItem = function(subtable,lookupTable) {
	this.subtable = subtable;
	this.lookupTable = lookupTable;
};
fonthx_opentype_tables_opentype_lookup_PackedLookupSubtableItem.__name__ = "fonthx.opentype.tables.opentype.lookup.PackedLookupSubtableItem";
fonthx_opentype_tables_opentype_lookup_PackedLookupSubtableItem.prototype = {
	subtable: null
	,lookupTable: null
	,__class__: fonthx_opentype_tables_opentype_lookup_PackedLookupSubtableItem
};
var fonthx_opentype_tables_opentype_lookup_coverage_CoverageRange = function(start,end,idx) {
	if(idx == null) {
		idx = 0;
	}
	if(end == null) {
		end = -1;
	}
	if(start == null) {
		start = 0;
	}
	this.start = start;
	this.end = end;
	this.idx = idx;
};
fonthx_opentype_tables_opentype_lookup_coverage_CoverageRange.__name__ = "fonthx.opentype.tables.opentype.lookup.coverage.CoverageRange";
fonthx_opentype_tables_opentype_lookup_coverage_CoverageRange.prototype = {
	start: null
	,end: null
	,idx: null
	,__class__: fonthx_opentype_tables_opentype_lookup_coverage_CoverageRange
};
var fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper = function() { };
fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.__name__ = "fonthx.opentype.tables.opentype.lookup.coverage.CoverageTableHelper";
fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.getCoverageTable = function(indices) {
	var ranges = fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.buildRanges(indices);
	if(fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.preferRanges(ranges,indices)) {
		return new fonthx_opentype_tables_opentype_lookup_coverage_GlyphRangeCoverageTable(ranges);
	}
	return new fonthx_opentype_tables_opentype_lookup_coverage_GlyphIndexCoverageTable(indices);
};
fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.buildRanges = function(indices) {
	var prev = -2;
	var currRange = null;
	var ranges = Lambda.fold(indices,function(glyphIdx,acc) {
		if(glyphIdx != prev + 1) {
			if(currRange != null) {
				currRange.end = prev;
			}
			currRange = new fonthx_opentype_tables_opentype_lookup_coverage_CoverageRange(glyphIdx);
			acc.push(currRange);
		}
		prev = glyphIdx;
		return acc;
	},[]);
	if(ranges.length > 0 && ranges[ranges.length - 1].end == -1) {
		ranges[ranges.length - 1].end = prev;
	}
	if(ranges.length > 1) {
		var _g = 1;
		var _g1 = ranges.length;
		while(_g < _g1) {
			var i = _g++;
			var prev1 = ranges[i - 1];
			var curr = ranges[i];
			curr.idx = prev1.idx + (prev1.end - prev1.start) + 1;
		}
	}
	return ranges;
};
fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.preferRanges = function(ranges,indices) {
	return 4 + ranges.length * 6 <= 4 + indices.length * 2;
};
var fonthx_opentype_tables_opentype_lookup_coverage_GlyphIndexCoverageTable = function(indices) {
	this.indices = indices;
};
fonthx_opentype_tables_opentype_lookup_coverage_GlyphIndexCoverageTable.__name__ = "fonthx.opentype.tables.opentype.lookup.coverage.GlyphIndexCoverageTable";
fonthx_opentype_tables_opentype_lookup_coverage_GlyphIndexCoverageTable.__interfaces__ = [fonthx_opentype_tables_opentype_lookup_ICommonTable];
fonthx_opentype_tables_opentype_lookup_coverage_GlyphIndexCoverageTable.prototype = {
	indices: null
	,write: function(tt) {
		tt.writeUINT16(1);
		tt.writeUINT16(this.indices.length);
		var _g = 0;
		var _g1 = this.indices;
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			tt.writeUINT16(i);
		}
	}
	,get_length: function() {
		return 4 + this.indices.length * 2;
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_coverage_GlyphIndexCoverageTable
	,__properties__: {get_length:"get_length"}
};
var fonthx_opentype_tables_opentype_lookup_coverage_GlyphRangeCoverageTable = function(ranges) {
	this.ranges = ranges;
};
fonthx_opentype_tables_opentype_lookup_coverage_GlyphRangeCoverageTable.__name__ = "fonthx.opentype.tables.opentype.lookup.coverage.GlyphRangeCoverageTable";
fonthx_opentype_tables_opentype_lookup_coverage_GlyphRangeCoverageTable.__interfaces__ = [fonthx_opentype_tables_opentype_lookup_ICommonTable];
fonthx_opentype_tables_opentype_lookup_coverage_GlyphRangeCoverageTable.prototype = {
	ranges: null
	,write: function(tt) {
		tt.writeUINT16(2);
		tt.writeUINT16(this.ranges.length);
		var _g = 0;
		var _g1 = this.ranges;
		while(_g < _g1.length) {
			var range = _g1[_g];
			++_g;
			tt.writeUINT16(range.start);
			tt.writeUINT16(range.end);
			tt.writeUINT16(range.idx);
		}
	}
	,get_length: function() {
		return 4 + this.ranges.length * 6;
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_coverage_GlyphRangeCoverageTable
	,__properties__: {get_length:"get_length"}
};
var fonthx_opentype_tables_opentype_lookup_gpos_ExtensionPositioningSubtableFormat1 = function(subtable,lookupType) {
	this.subtable = subtable;
	this.lookupType = lookupType;
	fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.call(this);
};
fonthx_opentype_tables_opentype_lookup_gpos_ExtensionPositioningSubtableFormat1.__name__ = "fonthx.opentype.tables.opentype.lookup.gpos.ExtensionPositioningSubtableFormat1";
fonthx_opentype_tables_opentype_lookup_gpos_ExtensionPositioningSubtableFormat1.__super__ = fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable;
fonthx_opentype_tables_opentype_lookup_gpos_ExtensionPositioningSubtableFormat1.prototype = $extend(fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.prototype,{
	subtable: null
	,longOffset: null
	,lookupType: null
	,write: function(tt) {
		tt.writeUINT16(1);
		tt.writeOffset16(this.lookupType);
		tt.writeOffset32(this.longOffset);
		console.log("src/fonthx/opentype/tables/opentype/lookup/gpos/ExtensionPositioningSubtableFormat1.hx:31:","Extension Position subtable with offset " + this.longOffset);
	}
	,get_length: function() {
		return 8;
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_gpos_ExtensionPositioningSubtableFormat1
});
var fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat1 = function(subLookup) {
	this._grouped = null;
	this._coverageTable = null;
	fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.call(this,subLookup);
	this.PAPSubLookup = subLookup;
};
fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat1.__name__ = "fonthx.opentype.tables.opentype.lookup.gpos.PairAdjustmentPositioningSubtableFormat1";
fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat1.__super__ = fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable;
fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat1.prototype = $extend(fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.prototype,{
	PAPSubLookup: null
	,write: function(tt) {
		var coverageTable = this.getCoverageTable();
		var valueRecordLength = this.getValueRecordLength();
		var groupedPairs = this.getGroupedPairs();
		tt.writeUINT16(1);
		tt.writeOffset16(this.get_length() - coverageTable.get_length());
		tt.writeUINT16(this.PAPSubLookup.format1);
		tt.writeUINT16(this.PAPSubLookup.format2);
		tt.writeUINT16(groupedPairs.length);
		var offset = 10 + 2 * groupedPairs.length;
		var _g = 0;
		while(_g < groupedPairs.length) {
			var group = groupedPairs[_g];
			++_g;
			tt.writeOffset16(offset);
			offset += 2 + group.length * valueRecordLength;
			group.sort(function(a,b) {
				return a.idx2 - b.idx2;
			});
		}
		var _g = 0;
		while(_g < groupedPairs.length) {
			var group = groupedPairs[_g];
			++_g;
			tt.writeUINT16(group.length);
			var _g1 = 0;
			while(_g1 < group.length) {
				var pair = group[_g1];
				++_g1;
				tt.writeUINT16(pair.idx2);
				if(this.PAPSubLookup.hasFirstValues()) {
					tt.writeSHORT(pair.x | 0);
				}
				if(this.PAPSubLookup.hasSecondValues()) {
					tt.writeSHORT(pair.y | 0);
				}
			}
		}
		coverageTable.write(tt);
	}
	,get_length: function() {
		var valueRecordLength = this.getValueRecordLength();
		var groupedPairs = this.getGroupedPairs();
		var l = 10;
		l += groupedPairs.length * 2;
		l += groupedPairs.length * 2;
		var _g = 0;
		while(_g < groupedPairs.length) {
			var group = groupedPairs[_g];
			++_g;
			l += group.length * valueRecordLength;
		}
		l += this.getCoverageTable().get_length();
		return l;
	}
	,_coverageTable: null
	,getCoverageTable: function() {
		if(this._coverageTable != null) {
			return this._coverageTable;
		}
		var coverage = Lambda.fold(this.PAPSubLookup.get_pairs(),function(p,acc) {
			if(acc.indexOf(p.idx1) == -1) {
				acc.push(p.idx1);
			}
			return acc;
		},[]);
		coverage.sort(function(a,b) {
			return a - b;
		});
		return fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.getCoverageTable(coverage);
	}
	,_grouped: null
	,getGroupedPairs: function() {
		if(this._grouped != null) {
			return this._grouped;
		}
		var pairs = this.PAPSubLookup.get_pairs().slice();
		pairs.sort(function(a,b) {
			return a.idx1 - b.idx1;
		});
		var currentGroup = [];
		var lastPair = null;
		this._grouped = Lambda.fold(pairs,function(p,acc) {
			if(lastPair != null && p.idx1 != lastPair.idx1) {
				currentGroup = [];
				acc.push(currentGroup);
			}
			currentGroup.push(p);
			lastPair = p;
			return acc;
		},[currentGroup]);
		return this._grouped;
	}
	,getValueRecordLength: function() {
		var valueRecordLength = 2;
		if(this.PAPSubLookup.hasFirstValues()) {
			valueRecordLength += 2;
		}
		if(this.PAPSubLookup.hasSecondValues()) {
			valueRecordLength += 2;
		}
		return valueRecordLength;
	}
	,split: function() {
		var bytesPerPair = this.get_length() / this.PAPSubLookup.get_pairs().length;
		var maxPairsPerTable = 0.95 * (fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.MAX_SIZE / bytesPerPair) | 0;
		var splitLookups = this.PAPSubLookup.split(maxPairsPerTable);
		var result = new Array(splitLookups.length);
		var _g = 0;
		var _g1 = splitLookups.length;
		while(_g < _g1) {
			var i = _g++;
			var subtable = new fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat1(splitLookups[i]);
			result[i] = js_Boot.__cast(subtable , fonthx_opentype_tables_opentype_lookup_ILookupSubtable);
		}
		return result;
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat1
});
var fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat2 = function(subLookup) {
	fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.call(this,subLookup);
	this.CPASubLookup = subLookup;
};
fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat2.__name__ = "fonthx.opentype.tables.opentype.lookup.gpos.PairAdjustmentPositioningSubtableFormat2";
fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat2.__super__ = fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable;
fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat2.prototype = $extend(fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.prototype,{
	CPASubLookup: null
	,write: function(tt) {
		tt.writeUINT16(2);
		tt.writeOffset16(0);
		tt.writeUINT16(0);
		tt.writeUINT16(0);
		tt.writeUINT16(0);
	}
	,get_length: function() {
		return 0;
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_gpos_PairAdjustmentPositioningSubtableFormat2
});
var fonthx_opentype_tables_opentype_lookup_gsub_LigatureSubstitutionSubtableFormat1 = function(subLookup) {
	this._coverageTable = null;
	fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.call(this,subLookup);
	this.LSSubLookup = subLookup;
};
fonthx_opentype_tables_opentype_lookup_gsub_LigatureSubstitutionSubtableFormat1.__name__ = "fonthx.opentype.tables.opentype.lookup.gsub.LigatureSubstitutionSubtableFormat1";
fonthx_opentype_tables_opentype_lookup_gsub_LigatureSubstitutionSubtableFormat1.__super__ = fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable;
fonthx_opentype_tables_opentype_lookup_gsub_LigatureSubstitutionSubtableFormat1.prototype = $extend(fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.prototype,{
	LSSubLookup: null
	,write: function(tt) {
		var ligatureSetCount = 0;
		var ligatureSetMap = Lambda.fold(this.LSSubLookup.get_subs(),function(p,acc) {
			var leadingGlyph = p.componentGlyphIds[0];
			if(!acc.h.hasOwnProperty(leadingGlyph)) {
				var value = [];
				acc.h[leadingGlyph] = value;
				ligatureSetCount += 1;
			}
			var subArray = acc.h[leadingGlyph];
			subArray.push(p);
			return acc;
		},new haxe_ds_IntMap());
		var coverageTable = this.getCoverageTable();
		tt.writeUINT16(1);
		var covTableOffset = 6 + ligatureSetCount * 2;
		tt.writeOffset16(covTableOffset);
		tt.writeSHORT(ligatureSetCount);
		var offset = covTableOffset + coverageTable.get_length();
		var _g = [];
		var i = ligatureSetMap.keys();
		while(i.hasNext()) {
			var i1 = i.next();
			_g.push(i1);
		}
		var leadingGlyphIds = _g;
		leadingGlyphIds.sort(function(a,b) {
			return a - b;
		});
		var _g = 0;
		while(_g < leadingGlyphIds.length) {
			var i = leadingGlyphIds[_g];
			++_g;
			tt.writeOffset16(offset);
			var set = ligatureSetMap.h[i];
			offset += 2;
			var _g1 = 0;
			while(_g1 < set.length) {
				var ligaSub = set[_g1];
				++_g1;
				offset += 2;
				offset += 4 + (ligaSub.componentGlyphIds.length - 1) * 2;
			}
		}
		coverageTable.write(tt);
		var _g = 0;
		while(_g < leadingGlyphIds.length) {
			var i = leadingGlyphIds[_g];
			++_g;
			var set = ligatureSetMap.h[i];
			tt.writeUINT16(set.length);
			var offset = 2 + set.length * 2;
			var _g1 = 0;
			while(_g1 < set.length) {
				var ligaSub = set[_g1];
				++_g1;
				tt.writeUINT16(offset);
				offset += 4 + (ligaSub.componentGlyphIds.length - 1) * 2;
			}
			var _g2 = 0;
			while(_g2 < set.length) {
				var ligaSub1 = set[_g2];
				++_g2;
				tt.writeUINT16(ligaSub1.ligatureGlyphId);
				tt.writeUINT16(ligaSub1.componentGlyphIds.length);
				var _g3 = 1;
				var _g4 = ligaSub1.componentGlyphIds.length;
				while(_g3 < _g4) {
					var i1 = _g3++;
					tt.writeUINT16(ligaSub1.componentGlyphIds[i1]);
				}
			}
		}
	}
	,get_length: function() {
		return 6 + this.getCoverageTable().get_length();
	}
	,_coverageTable: null
	,getCoverageTable: function() {
		if(this._coverageTable != null) {
			return this._coverageTable;
		}
		var coverage = Lambda.fold(this.LSSubLookup.get_subs(),function(p,acc) {
			var leadingGlyph = p.componentGlyphIds[0];
			if(acc.indexOf(leadingGlyph) == -1) {
				acc.push(leadingGlyph);
			}
			return acc;
		},[]);
		coverage.sort(function(a,b) {
			return a - b;
		});
		return fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.getCoverageTable(coverage);
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_gsub_LigatureSubstitutionSubtableFormat1
});
var fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat1 = function(subLookup) {
	this._coverageTable = null;
	fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.call(this,subLookup);
	this.SSSubLookup = subLookup;
};
fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat1.__name__ = "fonthx.opentype.tables.opentype.lookup.gsub.SingleSubstitutionSubtableFormat1";
fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat1.__super__ = fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable;
fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat1.prototype = $extend(fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.prototype,{
	SSSubLookup: null
	,write: function(tt) {
		var coverageTable = this.getCoverageTable();
		tt.writeUINT16(1);
		tt.writeOffset16(6);
		tt.writeSHORT(this.SSSubLookup.get_subs()[0].getDelta());
		coverageTable.write(tt);
	}
	,get_length: function() {
		return 6 + this.getCoverageTable().get_length();
	}
	,_coverageTable: null
	,getCoverageTable: function() {
		if(this._coverageTable != null) {
			return this._coverageTable;
		}
		var coverage = Lambda.fold(this.SSSubLookup.get_subs(),function(p,acc) {
			if(acc.indexOf(p.fromId) == -1) {
				acc.push(p.fromId);
			}
			return acc;
		},[]);
		coverage.sort(function(a,b) {
			return a - b;
		});
		return fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.getCoverageTable(coverage);
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat1
});
var fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat2 = function(subLookup) {
	this._coverageTable = null;
	fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.call(this,subLookup);
	this.SSSubLookup = subLookup;
};
fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat2.__name__ = "fonthx.opentype.tables.opentype.lookup.gsub.SingleSubstitutionSubtableFormat2";
fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat2.__super__ = fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable;
fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat2.prototype = $extend(fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.prototype,{
	SSSubLookup: null
	,write: function(tt) {
		var coverageTable = this.getCoverageTable();
		tt.writeUINT16(2);
		tt.writeOffset16(6 + 2 * this.SSSubLookup.get_subs().length);
		tt.writeSHORT(this.SSSubLookup.get_subs().length);
		var _g = 0;
		var _g1 = this.SSSubLookup.get_subs();
		while(_g < _g1.length) {
			var sub = _g1[_g];
			++_g;
			tt.writeUINT16(sub.toId);
		}
		coverageTable.write(tt);
	}
	,get_length: function() {
		return 6 + 2 * this.SSSubLookup.get_subs().length + this.getCoverageTable().get_length();
	}
	,_coverageTable: null
	,getCoverageTable: function() {
		if(this._coverageTable != null) {
			return this._coverageTable;
		}
		var coverage = Lambda.fold(this.SSSubLookup.get_subs(),function(p,acc) {
			if(acc.indexOf(p.fromId) == -1) {
				acc.push(p.fromId);
			}
			return acc;
		},[]);
		coverage.sort(function(a,b) {
			return a - b;
		});
		return fonthx_opentype_tables_opentype_lookup_coverage_CoverageTableHelper.getCoverageTable(coverage);
	}
	,__class__: fonthx_opentype_tables_opentype_lookup_gsub_SingleSubstitutionSubtableFormat2
});
var fonthx_opentype_tables_opentype_script_ScriptListTable = function() {
	this.scriptTables = [];
};
fonthx_opentype_tables_opentype_script_ScriptListTable.__name__ = "fonthx.opentype.tables.opentype.script.ScriptListTable";
fonthx_opentype_tables_opentype_script_ScriptListTable.prototype = {
	scripts: null
	,scriptTables: null
	,setScripts: function(scripts) {
		this.scripts = scripts;
	}
	,initScriptTables: function() {
		if(this.scriptTables.length == 0) {
			var _g = 0;
			var _g1 = this.scripts;
			while(_g < _g1.length) {
				var script = _g1[_g];
				++_g;
				this.scriptTables.push(new fonthx_opentype_tables_opentype_script_ScriptTable(script));
			}
		}
	}
	,write: function(tt) {
		this.initScriptTables();
		tt.writeSHORT(this.scripts.length);
		var offset = this.headerToScriptTables();
		var _g = 0;
		var _g1 = this.scriptTables;
		while(_g < _g1.length) {
			var scriptTable = _g1[_g];
			++_g;
			var script = scriptTable.script;
			tt.writeTag(fonthx_model_font_features_ScriptTag.toString(script.tag)).writeOffset16(offset);
			if(script.tag != "DFLT") {
				offset += scriptTable.get_length();
			}
		}
		var _g = 0;
		var _g1 = this.scriptTables;
		while(_g < _g1.length) {
			var scriptTable = _g1[_g];
			++_g;
			scriptTable.write(tt);
		}
	}
	,get_length: function() {
		this.initScriptTables();
		var l = this.headerToScriptTables();
		var _g = 0;
		var _g1 = this.scriptTables;
		while(_g < _g1.length) {
			var scriptTable = _g1[_g];
			++_g;
			var script = scriptTable.script;
			if(script.tag == "DFLT") {
				continue;
			}
			l += scriptTable.get_length();
		}
		return l;
	}
	,headerToScriptTables: function() {
		return 2 + this.scripts.length * 6;
	}
	,__class__: fonthx_opentype_tables_opentype_script_ScriptListTable
	,__properties__: {get_length:"get_length"}
};
var fonthx_opentype_tables_opentype_script_ScriptTable = function(script) {
	this.script = script;
};
fonthx_opentype_tables_opentype_script_ScriptTable.__name__ = "fonthx.opentype.tables.opentype.script.ScriptTable";
fonthx_opentype_tables_opentype_script_ScriptTable.__interfaces__ = [fonthx_opentype_tables_opentype_lookup_ICommonTable];
fonthx_opentype_tables_opentype_script_ScriptTable.prototype = {
	script: null
	,write: function(tt) {
		if(this.script.tag == "DFLT") {
			return;
		}
		var scriptTableOffset = 4 + this.script.languages.length * 6;
		tt.writeOffset16(this.script.defaultLangSys == null ? 0 : scriptTableOffset);
		tt.writeUINT16(this.script.languages.length);
		if(this.script.defaultLangSys != null) {
			scriptTableOffset += this.getLangSysTableLength(this.script.defaultLangSys);
		}
		var _g = 0;
		var _g1 = this.script.languages;
		while(_g < _g1.length) {
			var language = _g1[_g];
			++_g;
			tt.writeTag(fonthx_model_font_features_LanguageTag.toString(language.tag));
			tt.writeOffset16(scriptTableOffset);
			scriptTableOffset += this.getLangSysTableLength(language);
		}
		var _g = 0;
		var _g1 = this.script.get_allLanguages();
		while(_g < _g1.length) {
			var language = _g1[_g];
			++_g;
			tt.writeUINT16(0);
			tt.writeUINT16(65535);
			tt.writeUINT16(language.features.length);
			var _g2 = 0;
			var _g3 = language.features;
			while(_g2 < _g3.length) {
				var feature = _g3[_g2];
				++_g2;
				tt.writeUINT16(feature.idx);
			}
		}
	}
	,get_length: function() {
		if(this.script.tag == "DFLT") {
			return 0;
		}
		var l = 4;
		l += 6 * this.script.languages.length;
		var _g = 0;
		var _g1 = this.script.get_allLanguages();
		while(_g < _g1.length) {
			var language = _g1[_g];
			++_g;
			l += this.getLangSysTableLength(language);
		}
		return l;
	}
	,getLangSysTableLength: function(language) {
		return 6 + 2 * language.features.length;
	}
	,__class__: fonthx_opentype_tables_opentype_script_ScriptTable
	,__properties__: {get_length:"get_length"}
};
var fonthx_opentype_types_Fixed = function() { };
fonthx_opentype_types_Fixed.__name__ = "fonthx.opentype.types.Fixed";
fonthx_opentype_types_Fixed.toFixed = function(f,precisionBits) {
	if(precisionBits == null) {
		precisionBits = 16;
	}
	return fonthx_opentype_types_Fixed.round(f * (1 << precisionBits));
};
fonthx_opentype_types_Fixed.round = function(f) {
	return Math.floor(f + 0.5) | 0;
};
var fonthx_opentype_utils_Utils = function() { };
fonthx_opentype_utils_Utils.__name__ = "fonthx.opentype.utils.Utils";
fonthx_opentype_utils_Utils.getMillisSince1904 = function(date) {
	var now = haxe_Int64Helper.fromFloat(date.getTime());
	var dayInMillis_high = 0;
	var dayInMillis_low = 86400000;
	var days1904To1970_high = 0;
	var days1904To1970_low = 24107;
	var mask = 65535;
	var al = days1904To1970_low & mask;
	var ah = days1904To1970_low >>> 16;
	var bl = dayInMillis_low & mask;
	var bh = dayInMillis_low >>> 16;
	var p00 = haxe_Int32._mul(al,bl);
	var p10 = haxe_Int32._mul(ah,bl);
	var p01 = haxe_Int32._mul(al,bh);
	var p11 = haxe_Int32._mul(ah,bh);
	var low = p00;
	var high = (p11 + (p01 >>> 16) | 0) + (p10 >>> 16) | 0;
	p01 <<= 16;
	low = low + p01 | 0;
	if(haxe_Int32.ucompare(low,p01) < 0) {
		var ret = high++;
		high = high | 0;
	}
	p10 <<= 16;
	low = low + p10 | 0;
	if(haxe_Int32.ucompare(low,p10) < 0) {
		var ret = high++;
		high = high | 0;
	}
	high = high + (haxe_Int32._mul(days1904To1970_low,dayInMillis_high) + haxe_Int32._mul(days1904To1970_high,dayInMillis_low) | 0) | 0;
	var millis1904To1970_high = high;
	var millis1904To1970_low = low;
	var high = now.high + millis1904To1970_high | 0;
	var low = now.low + millis1904To1970_low | 0;
	if(haxe_Int32.ucompare(low,now.low) < 0) {
		var ret = high++;
		high = high | 0;
	}
	var this1 = new haxe__$Int64__$_$_$Int64(high,low);
	now = this1;
	var this1 = new haxe__$Int64__$_$_$Int64(0,1000);
	now = haxe_Int64.divMod(now,this1).quotient;
	return now;
};
fonthx_opentype_utils_Utils.postscriptName = function(s) {
	var iter_offset = 0;
	var iter_s = s;
	var psName = "";
	while(iter_offset < iter_s.length) {
		var code = iter_s.charCodeAt(iter_offset++);
		if(code < 33 || code > 126) {
			continue;
		}
		if([91,93,40,41,123,125,60,62,47,37].indexOf(code) != -1) {
			continue;
		}
		psName += String.fromCodePoint(code);
	}
	return HxOverrides.substr(psName,0,63);
};
var fonthx_opentype_writers_ITrueTypeWriter = function() { };
fonthx_opentype_writers_ITrueTypeWriter.__name__ = "fonthx.opentype.writers.ITrueTypeWriter";
fonthx_opentype_writers_ITrueTypeWriter.__isInterface__ = true;
fonthx_opentype_writers_ITrueTypeWriter.prototype = {
	markPosition: null
	,getPosition: null
	,writeULONG: null
	,writeUSHORT: null
	,writeUINT16: null
	,writeOffset16: null
	,writeOffset32: null
	,writeSHORT: null
	,writeByte: null
	,writeTag: null
	,writeLONGDATETIME: null
	,writeByteString: null
	,writeBytes: null
	,writePascalString: null
	,writeVersion: null
	,writeFixed: null
	,writeF2DOT14: null
	,pad: null
	,writeCard8: null
	,writeCard16: null
	,writeByteBlockIndex: null
	,writeStringsIndex: null
	,getBytes: null
	,__class__: fonthx_opentype_writers_ITrueTypeWriter
};
var fonthx_opentype_writers_TrueTypeFileWriter = function() {
	this.out = new fonthx_opentype_io_ByteWriter();
	this.pos = 0;
};
fonthx_opentype_writers_TrueTypeFileWriter.__name__ = "fonthx.opentype.writers.TrueTypeFileWriter";
fonthx_opentype_writers_TrueTypeFileWriter.__interfaces__ = [fonthx_opentype_writers_ITrueTypeWriter];
fonthx_opentype_writers_TrueTypeFileWriter.prototype = {
	out: null
	,mark: null
	,pos: null
	,markPosition: function() {
		this.mark = this.pos;
	}
	,getPosition: function() {
		return this.pos;
	}
	,write: function(b) {
		this.out.writeByte(b);
		this.pos++;
	}
	,writeULONG: function(b) {
		this.write(b >>> 24 & 255);
		this.write(b >>> 16 & 255);
		this.write(b >>> 8 & 255);
		this.write(b & 255);
		return this;
	}
	,writeUSHORT: function(b) {
		this.write(b >>> 8 & 255);
		this.write(b & 255);
		return this;
	}
	,writeUINT16: function(b) {
		this.writeUSHORT(b);
		return this;
	}
	,writeOffset16: function(b) {
		this.writeUSHORT(b);
		return this;
	}
	,writeOffset32: function(b) {
		this.writeULONG(b);
		return this;
	}
	,writeSHORT: function(b) {
		return this.writeUSHORT(b);
	}
	,writeByte: function(b) {
		this.write(b);
		return this;
	}
	,writeCard8: function(b) {
		this.write(b);
		return this;
	}
	,writeCard16: function(b) {
		this.writeUINT16(b);
		return this;
	}
	,writeTag: function(s) {
		this.write(HxOverrides.cca(s,0));
		this.write(HxOverrides.cca(s,1));
		this.write(HxOverrides.cca(s,2));
		this.write(HxOverrides.cca(s,3));
		return this;
	}
	,writeLONGDATETIME: function(secs) {
		this.write(secs.high >>> 24 & 255);
		this.write(secs.high >>> 16 & 255);
		this.write(secs.high >>> 8 & 255);
		this.write(secs.high & 255);
		this.write(secs.low >>> 24 & 255);
		this.write(secs.low >>> 16 & 255);
		this.write(secs.low >>> 8 & 255);
		this.write(secs.low & 255);
		return this;
	}
	,writeByteString: function(s) {
		var _g = 0;
		var _g1 = s.length;
		while(_g < _g1) {
			var i = _g++;
			var c = HxOverrides.cca(s,i);
			this.write(c & 255);
		}
		return this;
	}
	,writeBytes: function(bytes) {
		this.out.writeBytes(bytes);
		this.pos += bytes.length;
		return this;
	}
	,writePascalString: function(name) {
		var l = name.length;
		if(l > 255) {
			name = name.substring(0,255);
		}
		this.writeByte(l);
		this.writeByteString(name);
		return this;
	}
	,writeFixed: function(f) {
		this.writeULONG(fonthx_opentype_types_Fixed.toFixed(f));
		return this;
	}
	,writeF2DOT14: function(f) {
		this.writeSHORT(fonthx_opentype_types_Fixed.toFixed(f,14));
		return this;
	}
	,writeVersion: function(major,minor) {
		this.writeUSHORT(major);
		this.writeUSHORT(minor);
		return this;
	}
	,writeByteBlockIndex: function(blocks) {
		this.writeCard16(blocks.length);
		if(blocks.length == 0) {
			return this;
		}
		var offSize = 4;
		var lastOffset = Lambda.fold(blocks,function(s,acc) {
			return acc + s.length;
		},1);
		if(lastOffset <= 255) {
			offSize = 1;
		} else if(lastOffset <= 65535) {
			offSize = 2;
		} else if(lastOffset <= 16777215) {
			offSize = 3;
		}
		this.writeByte(offSize);
		var offset = 1;
		var _g = 0;
		while(_g < blocks.length) {
			var o = blocks[_g];
			++_g;
			this.writeOffset(offset,offSize);
			offset += o.length;
		}
		this.writeOffset(offset,offSize);
		var _g = 0;
		while(_g < blocks.length) {
			var bytes = blocks[_g];
			++_g;
			this.writeBytes(bytes);
		}
		return this;
	}
	,writeStringsIndex: function(data) {
		var result = new Array(data.length);
		var _g = 0;
		var _g1 = data.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = haxe_io_Bytes.ofString(data[i]);
		}
		var blocks = result;
		return this.writeByteBlockIndex(blocks);
	}
	,writeOffset: function(offset,offSize) {
		switch(offSize) {
		case 1:
			this.writeByte(offset);
			break;
		case 2:
			this.writeUSHORT(offset);
			break;
		case 3:
			this.writeByte(offset >>> 16 & 255);
			this.writeByte(offset >>> 8 & 255);
			this.writeByte(offset & 255);
			break;
		default:
			this.writeULONG(offset);
		}
	}
	,pad: function(fromMark) {
		if(fromMark == null) {
			fromMark = false;
		}
		var missing = 4 - (fromMark ? this.pos - this.mark : this.pos) % 4;
		if(missing <= 0 || missing >= 4) {
			return;
		}
		var _g = 0;
		var _g1 = missing;
		while(_g < _g1) {
			var i = _g++;
			this.writeByte(0);
		}
	}
	,getBytes: function() {
		return this.out.getBytes();
	}
	,__class__: fonthx_opentype_writers_TrueTypeFileWriter
};
var fonthx_services_FeatureSpecParser = function() {
};
fonthx_services_FeatureSpecParser.__name__ = "fonthx.services.FeatureSpecParser";
fonthx_services_FeatureSpecParser.prototype = {
	toLayout: function(spec,font) {
		if(Object.prototype.hasOwnProperty.call(spec,"languageSystems")) {
			var langSystems = spec.languageSystems;
			var _g = 0;
			while(_g < langSystems.length) {
				var langSystem = langSystems[_g];
				++_g;
				var script = new fonthx_model_font_features_Script(langSystem.script);
				var lang = new fonthx_model_font_features_Language(langSystem.language);
			}
		}
		if(Object.prototype.hasOwnProperty.call(spec,"features")) {
			var featureSpecs = spec.features;
			var _g = 0;
			while(_g < featureSpecs.length) {
				var featureSpec = featureSpecs[_g];
				++_g;
				var feature = this.getFeature(featureSpec,font);
				if(feature.isPos) {
					font.get_gposLayout().addFeature(feature);
				} else {
					font.get_gsubLayout().addFeature(feature);
				}
			}
		}
	}
	,getFeature: function(featureSpec,font) {
		var _gthis = this;
		var isPos = Object.prototype.hasOwnProperty.call(featureSpec,"isPos");
		var feature = new fonthx_model_font_features_Feature(featureSpec.name,isPos);
		if(Object.prototype.hasOwnProperty.call(featureSpec,"lookups")) {
			var lookupSpecs = featureSpec.lookups;
			var _g = 0;
			while(_g < lookupSpecs.length) {
				var lookupSpec = lookupSpecs[_g];
				++_g;
				var type = lookupSpec.type;
				var lookup = new fonthx_model_font_features_lookups_Lookup(type,isPos);
				if(type == 1) {
					var subLookup = new fonthx_model_font_features_lookups_singlesub_SingleSubstitutionSubLookup();
					lookup.addSubLookup(subLookup);
					var rules = lookupSpec.rules;
					var _g1 = 0;
					while(_g1 < rules.length) {
						var sub = rules[_g1];
						++_g1;
						var fromGlyph = this.getGlyphId(sub[0],font);
						var toGlyph = this.getGlyphId(sub[1],font);
						if(fromGlyph != -1 && toGlyph != -1) {
							subLookup.addSubstitution(fromGlyph,toGlyph);
						}
					}
				} else if(type == 4) {
					var subLookup1 = new fonthx_model_font_features_lookups_ligasub_LigaSubstitutionSubLookup();
					lookup.addSubLookup(subLookup1);
					var rules1 = lookupSpec.rules;
					var _g2 = 0;
					while(_g2 < rules1.length) {
						var rule = rules1[_g2];
						++_g2;
						var componentGroups = rule[0];
						var ligatureId = this.getGlyphId(rule[1],font);
						var _g3 = 0;
						while(_g3 < componentGroups.length) {
							var group = componentGroups[_g3];
							++_g3;
							var result = new Array(group.length);
							var _g4 = 0;
							var _g5 = group.length;
							while(_g4 < _g5) {
								var i = _g4++;
								result[i] = _gthis.getGlyphId(group[i],font);
							}
							subLookup1.addSubstitution(ligatureId,result);
						}
					}
				}
				if(lookup.subLookups.length > 0) {
					if(feature.isPos) {
						font.get_gposLayout().addLookup(lookup);
					} else {
						console.log("src/fonthx/services/FeatureSpecParser.hx:81:","add lookup of type " + type);
						font.get_gsubLayout().addLookup(lookup);
					}
					feature.addLookup(lookup);
				}
			}
		}
		return feature;
	}
	,getGlyphId: function(id,font) {
		if(typeof(id) == "string") {
			return font.getGlyphIndexForName(id);
		}
		if(typeof(id) == "number" && ((id | 0) === id)) {
			return font.getGlyphIndexForCodepoint(id);
		}
		return -1;
	}
	,__class__: fonthx_services_FeatureSpecParser
};
var fonthx_svg_SVG = function(options) {
	this.options = options;
	this.s = new StringBuf();
};
fonthx_svg_SVG.__name__ = "fonthx.svg.SVG";
fonthx_svg_SVG.prototype = {
	options: null
	,s: null
	,open: function() {
		var id = this.options.id > -1 ? " id=\"glyph" + this.options.id + "\"" : "";
		var _this = this.s;
		var x = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + this.viewBox() + id + ">";
		_this.b += Std.string(x);
	}
	,add: function(s) {
		this.s.b += s == null ? "null" : "" + s;
	}
	,close: function() {
		this.s.b += "</svg>";
	}
	,viewBox: function() {
		if(this.options.boxSize == 0) {
			return "";
		}
		if(this.options.isGlyph) {
			return " viewBox=\"0 " + this.options.boxSize + " " + this.options.boxSize + " " + this.options.boxSize + "\"";
		}
		return " viewBox=\"0 0 " + this.options.boxSize + " " + this.options.boxSize + "\"";
	}
	,toString: function() {
		return this.s.b;
	}
	,__class__: fonthx_svg_SVG
};
var fonthx_svg_SVGBuilder = function() {
};
fonthx_svg_SVGBuilder.__name__ = "fonthx.svg.SVGBuilder";
fonthx_svg_SVGBuilder.prototype = {
	buildGlyph: function(idx,glyph,options) {
		if(options == null) {
			options = new fonthx_svg_SVGOptions();
		}
		var svg = new fonthx_svg_SVG(options);
		svg.open();
		var svgGlyph = new fonthx_svg_SVGGlyph(idx,options);
		var walkOptions = new fonthx_model_font_ContourOptions(1);
		glyph.walkContours(svgGlyph,walkOptions);
		svg.add(svgGlyph.toString());
		svg.close();
		return svg.toString();
	}
	,buildSheet: function(glyphs,options,sheetConfig) {
		if(options == null) {
			options = new fonthx_svg_SVGOptions();
		}
		if(sheetConfig == null) {
			sheetConfig = new fonthx_svg_SVGSheetConfig();
		}
		var offset = 0;
		sheetConfig.perRow = Math.ceil(Math.sqrt(glyphs.length)) | 0;
		offset = sheetConfig.gap + options.boxSize;
		var boxSize = options.boxSize;
		options.boxSize = sheetConfig.perRow * offset;
		options.isGlyph = false;
		var svg = new fonthx_svg_SVG(options);
		svg.open();
		options.boxSize = boxSize;
		var idx = 0;
		var walkOptions = new fonthx_model_font_ContourOptions(1);
		var _g = 0;
		while(_g < glyphs.length) {
			var g = glyphs[_g];
			++_g;
			++idx;
			var svgGlyph = new fonthx_svg_SVGGlyph(idx,options);
			if(idx % sheetConfig.perRow == 0) {
				options.offsetX = 0;
				options.offsetY += offset;
			} else {
				options.offsetX += offset;
			}
			g.walkContours(svgGlyph,walkOptions);
			svg.add(svgGlyph.toString());
		}
		svg.close();
		return svg.toString();
	}
	,__class__: fonthx_svg_SVGBuilder
};
var fonthx_svg_SVGGlyph = function(id,options) {
	this.currProps = null;
	this.id = id;
	this.options = options;
	this.s = new StringBuf();
};
fonthx_svg_SVGGlyph.__name__ = "fonthx.svg.SVGGlyph";
fonthx_svg_SVGGlyph.__interfaces__ = [fonthx_model_font_IContourConsumer];
fonthx_svg_SVGGlyph.__super__ = fonthx_model_font_AbstractContourConsumer;
fonthx_svg_SVGGlyph.prototype = $extend(fonthx_model_font_AbstractContourConsumer.prototype,{
	s: null
	,id: null
	,options: null
	,currProps: null
	,start: function() {
		var _this = this.s;
		var x = "<g" + this.getId() + this.offset() + ">";
		_this.b += Std.string(x);
	}
	,offset: function() {
		if(this.options.offsetX == 0 && this.options.offsetY == 0) {
			return "";
		}
		return " transform=\"translate(" + this.options.offsetX + "," + this.options.offsetY + ")\"";
	}
	,getId: function() {
		if(!this.options.idsInGlyphs) {
			return "";
		}
		return " id=\"glyph" + this.id + "\"";
	}
	,startPath: function(props) {
		if(props != null) {
			this.currProps = props;
		} else if(this.currProps == null) {
			this.currProps = new fonthx_model_font_PathProperties();
		}
		this.s.b += "<path ";
		if(props.fill != null) {
			var _this = this.s;
			var x = "fill=\"#" + StringTools.hex(props.fill >> 8 & 16777215,6) + "\" ";
			_this.b += Std.string(x);
		}
		if(props.stroke != null) {
			var _this = this.s;
			var x = "stroke=\"#" + StringTools.hex(props.stroke >> 8 & 16777215,6) + "\" ";
			_this.b += Std.string(x);
		}
		if(props.opacity != 1) {
			this.s.b += Std.string("opacity=\"" + props.opacity + "\" ");
		}
		this.s.b += "d=\"";
	}
	,moveTo: function(x,y) {
		var _this = this.s;
		var x1 = "M" + x + "," + this.m(y);
		_this.b += Std.string(x1);
	}
	,lineTo: function(x,y) {
		var _this = this.s;
		var x1 = "L" + x + "," + this.m(y);
		_this.b += Std.string(x1);
	}
	,quadTo: function(x1,y1,x2,y2) {
		var _this = this.s;
		var x = "Q" + x1 + "," + this.m(y1) + "," + x2 + "," + this.m(y2);
		_this.b += Std.string(x);
	}
	,cubicTo: function(x1,y1,x2,y2,x3,y3) {
		var _this = this.s;
		var x = "C" + x1 + "," + this.m(y1) + "," + x2 + "," + this.m(y2) + "," + x3 + "," + this.m(y3);
		_this.b += Std.string(x);
	}
	,endPath: function() {
		this.s.b += "\"/>";
	}
	,end: function() {
		this.s.b += "</g>";
	}
	,m: function(y) {
		return this.options.boxSize - y;
	}
	,toString: function() {
		return this.s.b;
	}
	,__class__: fonthx_svg_SVGGlyph
});
var fonthx_svg_SVGOptions = function() {
	this.offsetY = 0;
	this.offsetX = 0;
	this.idsInGlyphs = false;
	this.isGlyph = true;
	this.boxSize = 1000;
	this.id = -1;
};
fonthx_svg_SVGOptions.__name__ = "fonthx.svg.SVGOptions";
fonthx_svg_SVGOptions.prototype = {
	id: null
	,boxSize: null
	,isGlyph: null
	,idsInGlyphs: null
	,offsetX: null
	,offsetY: null
	,__class__: fonthx_svg_SVGOptions
};
var fonthx_svg_SVGSheetConfig = function() {
	this.perRow = 10;
	this.gap = 100;
};
fonthx_svg_SVGSheetConfig.__name__ = "fonthx.svg.SVGSheetConfig";
fonthx_svg_SVGSheetConfig.prototype = {
	gap: null
	,perRow: null
	,__class__: fonthx_svg_SVGSheetConfig
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = "haxe.IMap";
haxe_IMap.__isInterface__ = true;
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = "haxe.ds.StringMap";
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	h: null
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapValueIterator(this.h);
	}
	,__class__: haxe_ds_StringMap
};
var fonthx_utils_ExecutionTimer = function() { };
fonthx_utils_ExecutionTimer.__name__ = "fonthx.utils.ExecutionTimer";
fonthx_utils_ExecutionTimer.start = function(key) {
	var _this = fonthx_utils_ExecutionTimer._spans;
	var value = new Date().getTime();
	_this.h[key] = value;
};
fonthx_utils_ExecutionTimer.end = function(key) {
	var start = fonthx_utils_ExecutionTimer._spans.h[key];
	if(start != null) {
		console.log("src/fonthx/utils/ExecutionTimer.hx:28:","" + key + " took " + (new Date().getTime() - start) + "ms");
	}
};
var fonthx_utils_MathUtils = function() { };
fonthx_utils_MathUtils.__name__ = "fonthx.utils.MathUtils";
fonthx_utils_MathUtils.maxint = function(a,b) {
	if(a > b) {
		return a;
	} else {
		return b;
	}
};
fonthx_utils_MathUtils.minint = function(a,b) {
	if(a < b) {
		return a;
	} else {
		return b;
	}
};
var fonthx_utils_StepIterator = function(start,end,step) {
	this.index = start;
	this.end = end;
	this.step = step;
};
fonthx_utils_StepIterator.__name__ = "fonthx.utils.StepIterator";
fonthx_utils_StepIterator.prototype = {
	end: null
	,step: null
	,index: null
	,hasNext: function() {
		return this.index < this.end;
	}
	,next: function() {
		var tmp = this;
		return (tmp.index += this.step) - this.step;
	}
	,__class__: fonthx_utils_StepIterator
};
var fonthx_utils_StringEncoder = function() { };
fonthx_utils_StringEncoder.__name__ = "fonthx.utils.StringEncoder";
fonthx_utils_StringEncoder.encode = function(s,encoding) {
	var buffer = new haxe_io_BytesBuffer();
	var encodingMap = fonthx_utils_StringEncoder.getEncoding(encoding);
	var _g = 0;
	var _g1 = s.length;
	while(_g < _g1) {
		var i = _g++;
		var code = HxOverrides.cca(s,i);
		var encoded = encodingMap.h[code];
		if(encoded != null) {
			buffer.addByte(encoded);
		}
	}
	var bytes = buffer.getBytes();
	return bytes;
};
fonthx_utils_StringEncoder.getEncoding = function(encoding) {
	var encodingName = js_Boot.__cast(encoding , String);
	var encodingMap = fonthx_utils_StringEncoder.encodings.h[encodingName];
	if(encodingMap == null) {
		var text = fonthx_Assets.getText("ENC" + encodingName.toUpperCase());
		var lines = text.split("\n");
		encodingMap = new haxe_ds_IntMap();
		var _g = 0;
		while(_g < lines.length) {
			var line = lines[_g];
			++_g;
			if(line.indexOf("#") == 0 || line.length == 0) {
				continue;
			}
			var r = new EReg("\\s","g");
			var parts = r.split(line);
			if(parts.length < 2) {
				continue;
			}
			var codepoint = Std.parseInt(parts[0]);
			var unicode = Std.parseInt(parts[1]);
			encodingMap.h[unicode] = codepoint;
		}
		fonthx_utils_StringEncoder.encodings.h[encodingName] = encodingMap;
	}
	return encodingMap;
};
var format_png_Color = $hxEnums["format.png.Color"] = { __ename__:true,__constructs__:null
	,ColGrey: ($_=function(alpha) { return {_hx_index:0,alpha:alpha,__enum__:"format.png.Color",toString:$estr}; },$_._hx_name="ColGrey",$_.__params__ = ["alpha"],$_)
	,ColTrue: ($_=function(alpha) { return {_hx_index:1,alpha:alpha,__enum__:"format.png.Color",toString:$estr}; },$_._hx_name="ColTrue",$_.__params__ = ["alpha"],$_)
	,ColIndexed: {_hx_name:"ColIndexed",_hx_index:2,__enum__:"format.png.Color",toString:$estr}
};
format_png_Color.__constructs__ = [format_png_Color.ColGrey,format_png_Color.ColTrue,format_png_Color.ColIndexed];
var format_png_Chunk = $hxEnums["format.png.Chunk"] = { __ename__:true,__constructs__:null
	,CEnd: {_hx_name:"CEnd",_hx_index:0,__enum__:"format.png.Chunk",toString:$estr}
	,CHeader: ($_=function(h) { return {_hx_index:1,h:h,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CHeader",$_.__params__ = ["h"],$_)
	,CData: ($_=function(b) { return {_hx_index:2,b:b,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CData",$_.__params__ = ["b"],$_)
	,CPalette: ($_=function(b) { return {_hx_index:3,b:b,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CPalette",$_.__params__ = ["b"],$_)
	,CUnknown: ($_=function(id,data) { return {_hx_index:4,id:id,data:data,__enum__:"format.png.Chunk",toString:$estr}; },$_._hx_name="CUnknown",$_.__params__ = ["id","data"],$_)
};
format_png_Chunk.__constructs__ = [format_png_Chunk.CEnd,format_png_Chunk.CHeader,format_png_Chunk.CData,format_png_Chunk.CPalette,format_png_Chunk.CUnknown];
var format_png_Reader = function(i) {
	this.i = i;
	i.set_bigEndian(true);
	this.checkCRC = true;
};
format_png_Reader.__name__ = "format.png.Reader";
format_png_Reader.prototype = {
	i: null
	,checkCRC: null
	,read: function() {
		var b = 137;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 80;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 78;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 71;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 13;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 10;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 26;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var b = 10;
		if(this.i.readByte() != b) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var l = new haxe_ds_List();
		while(true) {
			var c = this.readChunk();
			l.add(c);
			if(c == format_png_Chunk.CEnd) {
				break;
			}
		}
		return l;
	}
	,readHeader: function(i) {
		i.set_bigEndian(true);
		var width = i.readInt32();
		var height = i.readInt32();
		var colbits = i.readByte();
		var color = i.readByte();
		var color1;
		switch(color) {
		case 0:
			color1 = format_png_Color.ColGrey(false);
			break;
		case 2:
			color1 = format_png_Color.ColTrue(false);
			break;
		case 3:
			color1 = format_png_Color.ColIndexed;
			break;
		case 4:
			color1 = format_png_Color.ColGrey(true);
			break;
		case 6:
			color1 = format_png_Color.ColTrue(true);
			break;
		default:
			throw haxe_Exception.thrown("Unknown color model " + color + ":" + colbits);
		}
		var compress = i.readByte();
		var filter = i.readByte();
		if(compress != 0 || filter != 0) {
			throw haxe_Exception.thrown("Invalid header");
		}
		var interlace = i.readByte();
		if(interlace != 0 && interlace != 1) {
			throw haxe_Exception.thrown("Invalid header");
		}
		return { width : width, height : height, colbits : colbits, color : color1, interlaced : interlace == 1};
	}
	,readChunk: function() {
		var dataLen = this.i.readInt32();
		var id = this.i.readString(4);
		var data = this.i.read(dataLen);
		var crc = this.i.readInt32();
		if(this.checkCRC) {
			var c_crc = -1;
			var tmp = (c_crc ^ HxOverrides.cca(id,0)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var tmp = (c_crc ^ HxOverrides.cca(id,1)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var tmp = (c_crc ^ HxOverrides.cca(id,2)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var tmp = (c_crc ^ HxOverrides.cca(id,3)) & 255;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
			c_crc = c_crc >>> 8 ^ tmp;
			var b = data.b.bufferValue;
			var _g = 0;
			var _g1 = data.length;
			while(_g < _g1) {
				var i = _g++;
				var tmp = (c_crc ^ b.bytes[i]) & 255;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				tmp = tmp >>> 1 ^ -(tmp & 1) & -306674912;
				c_crc = c_crc >>> 8 ^ tmp;
			}
			if((c_crc ^ -1) != crc) {
				throw haxe_Exception.thrown("CRC check failure");
			}
		}
		switch(id) {
		case "IDAT":
			return format_png_Chunk.CData(data);
		case "IEND":
			return format_png_Chunk.CEnd;
		case "IHDR":
			return format_png_Chunk.CHeader(this.readHeader(new haxe_io_BytesInput(data)));
		case "PLTE":
			return format_png_Chunk.CPalette(data);
		default:
			return format_png_Chunk.CUnknown(id,data);
		}
	}
	,__class__: format_png_Reader
};
var format_png_Tools = function() { };
format_png_Tools.__name__ = "format.png.Tools";
format_png_Tools.getHeader = function(d) {
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 1) {
			var h = c.h;
			return h;
		}
	}
	throw haxe_Exception.thrown("Header not found");
};
format_png_Tools.getPalette = function(d) {
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 3) {
			var b = c.b;
			return b;
		}
	}
	return null;
};
format_png_Tools.filter = function(data,x,y,stride,prev,p,numChannels) {
	if(numChannels == null) {
		numChannels = 4;
	}
	var b = y == 0 ? 0 : data.b[p - stride];
	var c = x == 0 || y == 0 ? 0 : data.b[p - stride - numChannels];
	var k = prev + b - c;
	var pa = k - prev;
	if(pa < 0) {
		pa = -pa;
	}
	var pb = k - b;
	if(pb < 0) {
		pb = -pb;
	}
	var pc = k - c;
	if(pc < 0) {
		pc = -pc;
	}
	if(pa <= pb && pa <= pc) {
		return prev;
	} else if(pb <= pc) {
		return b;
	} else {
		return c;
	}
};
format_png_Tools.reverseBytes = function(b) {
	var p = 0;
	var _g = 0;
	var _g1 = b.length >> 2;
	while(_g < _g1) {
		var i = _g++;
		var b1 = b.b[p];
		var g = b.b[p + 1];
		var r = b.b[p + 2];
		var a = b.b[p + 3];
		b.b[p++] = a;
		b.b[p++] = r;
		b.b[p++] = g;
		b.b[p++] = b1;
	}
};
format_png_Tools.extractGrey = function(d) {
	var h = format_png_Tools.getHeader(d);
	var grey = new haxe_io_Bytes(new ArrayBuffer(h.width * h.height));
	var data = null;
	var fullData = null;
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 2) {
			var b = c.b;
			if(fullData != null) {
				fullData.add(b);
			} else if(data == null) {
				data = b;
			} else {
				fullData = new haxe_io_BytesBuffer();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
		}
	}
	if(fullData != null) {
		data = fullData.getBytes();
	}
	if(data == null) {
		throw haxe_Exception.thrown("Data not found");
	}
	data = format_tools_Inflate.run(data);
	var r = 0;
	var w = 0;
	var _g = h.color;
	if(_g._hx_index == 0) {
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw haxe_Exception.thrown("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 2 : 1) * width + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var rinc = alpha ? 2 : 1;
		var _g = 0;
		var _g1 = h.height;
		while(_g < _g1) {
			var y = _g++;
			var f = data.b[r++];
			switch(f) {
			case 0:
				var _g2 = 0;
				var _g3 = width;
				while(_g2 < _g3) {
					var x = _g2++;
					var v = data.b[r];
					r += rinc;
					grey.b[w++] = v;
				}
				break;
			case 1:
				var cv = 0;
				var _g4 = 0;
				var _g5 = width;
				while(_g4 < _g5) {
					var x1 = _g4++;
					cv += data.b[r];
					r += rinc;
					grey.b[w++] = cv;
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : width;
				var _g6 = 0;
				var _g7 = width;
				while(_g6 < _g7) {
					var x2 = _g6++;
					var v1 = data.b[r] + grey.b[w - stride];
					r += rinc;
					grey.b[w++] = v1;
				}
				break;
			case 3:
				var cv1 = 0;
				var stride1 = y == 0 ? 0 : width;
				var _g8 = 0;
				var _g9 = width;
				while(_g8 < _g9) {
					var x3 = _g8++;
					cv1 = data.b[r] + (cv1 + grey.b[w - stride1] >> 1) & 255;
					r += rinc;
					grey.b[w++] = cv1;
				}
				break;
			case 4:
				var stride2 = width;
				var cv2 = 0;
				var _g10 = 0;
				var _g11 = width;
				while(_g10 < _g11) {
					var x4 = _g10++;
					var numChannels = 1;
					if(numChannels == null) {
						numChannels = 4;
					}
					var b = y == 0 ? 0 : grey.b[w - stride2];
					var c = x4 == 0 || y == 0 ? 0 : grey.b[w - stride2 - numChannels];
					var k = cv2 + b - c;
					var pa = k - cv2;
					if(pa < 0) {
						pa = -pa;
					}
					var pb = k - b;
					if(pb < 0) {
						pb = -pb;
					}
					var pc = k - c;
					if(pc < 0) {
						pc = -pc;
					}
					cv2 = (pa <= pb && pa <= pc ? cv2 : pb <= pc ? b : c) + data.b[r] & 255;
					r += rinc;
					grey.b[w++] = cv2;
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
		}
	} else {
		throw haxe_Exception.thrown("Unsupported color mode");
	}
	return grey;
};
format_png_Tools.extract32 = function(d,bytes,flipY) {
	var h = format_png_Tools.getHeader(d);
	var bgra = bytes == null ? new haxe_io_Bytes(new ArrayBuffer(h.width * h.height * 4)) : bytes;
	var data = null;
	var fullData = null;
	var _g_head = d.h;
	while(_g_head != null) {
		var val = _g_head.item;
		_g_head = _g_head.next;
		var c = val;
		if(c._hx_index == 2) {
			var b = c.b;
			if(fullData != null) {
				fullData.add(b);
			} else if(data == null) {
				data = b;
			} else {
				fullData = new haxe_io_BytesBuffer();
				fullData.add(data);
				fullData.add(b);
				data = null;
			}
		}
	}
	if(fullData != null) {
		data = fullData.getBytes();
	}
	if(data == null) {
		throw haxe_Exception.thrown("Data not found");
	}
	data = format_tools_Inflate.run(data);
	var r = 0;
	var w = 0;
	var lineDelta = 0;
	if(flipY) {
		lineDelta = -h.width * 8;
		w = (h.height - 1) * (h.width * 4);
	}
	var flipY1 = flipY ? -1 : 1;
	var _g = h.color;
	switch(_g._hx_index) {
	case 0:
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw haxe_Exception.thrown("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 2 : 1) * width + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var alphvaIdx = -1;
		if(!alpha) {
			var _g1_head = d.h;
			while(_g1_head != null) {
				var val = _g1_head.item;
				_g1_head = _g1_head.next;
				var t = val;
				if(t._hx_index == 4) {
					if(t.id == "tRNS") {
						var data1 = t.data;
						if(data1.length >= 2) {
							alphvaIdx = data1.b[1];
						}
						break;
					}
				}
			}
		}
		var _g1 = 0;
		var _g2 = h.height;
		while(_g1 < _g2) {
			var y = _g1++;
			var f = data.b[r++];
			switch(f) {
			case 0:
				if(alpha) {
					var _g3 = 0;
					var _g4 = width;
					while(_g3 < _g4) {
						var x = _g3++;
						var v = data.b[r++];
						bgra.b[w++] = v;
						bgra.b[w++] = v;
						bgra.b[w++] = v;
						bgra.b[w++] = data.b[r++];
					}
				} else {
					var _g5 = 0;
					var _g6 = width;
					while(_g5 < _g6) {
						var x1 = _g5++;
						var v1 = data.b[r++];
						bgra.b[w++] = v1;
						bgra.b[w++] = v1;
						bgra.b[w++] = v1;
						bgra.b[w++] = v1 == alphvaIdx ? 0 : 255;
					}
				}
				break;
			case 1:
				var cv = 0;
				var ca = 0;
				if(alpha) {
					var _g7 = 0;
					var _g8 = width;
					while(_g7 < _g8) {
						var x2 = _g7++;
						cv += data.b[r++];
						bgra.b[w++] = cv;
						bgra.b[w++] = cv;
						bgra.b[w++] = cv;
						ca += data.b[r++];
						bgra.b[w++] = ca;
					}
				} else {
					var _g9 = 0;
					var _g10 = width;
					while(_g9 < _g10) {
						var x3 = _g9++;
						cv += data.b[r++];
						bgra.b[w++] = cv;
						bgra.b[w++] = cv;
						bgra.b[w++] = cv;
						bgra.b[w++] = cv == alphvaIdx ? 0 : 255;
					}
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g11 = 0;
					var _g12 = width;
					while(_g11 < _g12) {
						var x4 = _g11++;
						var v2 = data.b[r++] + bgra.b[w - stride];
						bgra.b[w++] = v2;
						bgra.b[w++] = v2;
						bgra.b[w++] = v2;
						bgra.b[w++] = data.b[r++] + bgra.b[w - stride];
					}
				} else {
					var _g13 = 0;
					var _g14 = width;
					while(_g13 < _g14) {
						var x5 = _g13++;
						var v3 = data.b[r++] + bgra.b[w - stride];
						bgra.b[w++] = v3;
						bgra.b[w++] = v3;
						bgra.b[w++] = v3;
						bgra.b[w++] = v3 == alphvaIdx ? 0 : 255;
					}
				}
				break;
			case 3:
				var cv1 = 0;
				var ca1 = 0;
				var stride1 = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g15 = 0;
					var _g16 = width;
					while(_g15 < _g16) {
						var x6 = _g15++;
						cv1 = data.b[r++] + (cv1 + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cv1;
						bgra.b[w++] = cv1;
						bgra.b[w++] = cv1;
						ca1 = data.b[r++] + (ca1 + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = ca1;
					}
				} else {
					var _g17 = 0;
					var _g18 = width;
					while(_g17 < _g18) {
						var x7 = _g17++;
						cv1 = data.b[r++] + (cv1 + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cv1;
						bgra.b[w++] = cv1;
						bgra.b[w++] = cv1;
						bgra.b[w++] = cv1 == alphvaIdx ? 0 : 255;
					}
				}
				break;
			case 4:
				var stride2 = width * 4 * flipY1;
				var cv2 = 0;
				var ca2 = 0;
				if(alpha) {
					var _g19 = 0;
					var _g20 = width;
					while(_g19 < _g20) {
						var x8 = _g19++;
						var b = y == 0 ? 0 : bgra.b[w - stride2];
						var c = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k = cv2 + b - c;
						var pa = k - cv2;
						if(pa < 0) {
							pa = -pa;
						}
						var pb = k - b;
						if(pb < 0) {
							pb = -pb;
						}
						var pc = k - c;
						if(pc < 0) {
							pc = -pc;
						}
						var pos = r++;
						cv2 = (pa <= pb && pa <= pc ? cv2 : pb <= pc ? b : c) + data.b[pos] & 255;
						bgra.b[w++] = cv2;
						bgra.b[w++] = cv2;
						bgra.b[w++] = cv2;
						var b1 = y == 0 ? 0 : bgra.b[w - stride2];
						var c1 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k1 = ca2 + b1 - c1;
						var pa1 = k1 - ca2;
						if(pa1 < 0) {
							pa1 = -pa1;
						}
						var pb1 = k1 - b1;
						if(pb1 < 0) {
							pb1 = -pb1;
						}
						var pc1 = k1 - c1;
						if(pc1 < 0) {
							pc1 = -pc1;
						}
						var pos1 = r++;
						ca2 = (pa1 <= pb1 && pa1 <= pc1 ? ca2 : pb1 <= pc1 ? b1 : c1) + data.b[pos1] & 255;
						bgra.b[w++] = ca2;
					}
				} else {
					var _g21 = 0;
					var _g22 = width;
					while(_g21 < _g22) {
						var x9 = _g21++;
						var b2 = y == 0 ? 0 : bgra.b[w - stride2];
						var c2 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k2 = cv2 + b2 - c2;
						var pa2 = k2 - cv2;
						if(pa2 < 0) {
							pa2 = -pa2;
						}
						var pb2 = k2 - b2;
						if(pb2 < 0) {
							pb2 = -pb2;
						}
						var pc2 = k2 - c2;
						if(pc2 < 0) {
							pc2 = -pc2;
						}
						var pos2 = r++;
						cv2 = (pa2 <= pb2 && pa2 <= pc2 ? cv2 : pb2 <= pc2 ? b2 : c2) + data.b[pos2] & 255;
						bgra.b[w++] = cv2;
						bgra.b[w++] = cv2;
						bgra.b[w++] = cv2;
						bgra.b[w++] = cv2 == alphvaIdx ? 0 : 255;
					}
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
			w += lineDelta;
		}
		break;
	case 1:
		var alpha = _g.alpha;
		if(h.colbits != 8) {
			throw haxe_Exception.thrown("Unsupported color mode");
		}
		var width = h.width;
		var stride = (alpha ? 4 : 3) * width + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var alphaRed = -1;
		var alphaGreen = -1;
		var alphaBlue = -1;
		if(!alpha) {
			var _g1_head = d.h;
			while(_g1_head != null) {
				var val = _g1_head.item;
				_g1_head = _g1_head.next;
				var t = val;
				if(t._hx_index == 4) {
					if(t.id == "tRNS") {
						var data1 = t.data;
						if(data1.length >= 6) {
							alphaRed = data1.b[1];
							alphaGreen = data1.b[3];
							alphaBlue = data1.b[5];
						}
						break;
					}
				}
			}
		}
		var cr = 0;
		var cg = 0;
		var cb = 0;
		var ca = 0;
		var _g = 0;
		var _g1 = h.height;
		while(_g < _g1) {
			var y = _g++;
			var f = data.b[r++];
			switch(f) {
			case 0:
				if(alpha) {
					var _g2 = 0;
					var _g3 = width;
					while(_g2 < _g3) {
						var x = _g2++;
						bgra.b[w++] = data.b[r + 2];
						bgra.b[w++] = data.b[r + 1];
						bgra.b[w++] = data.b[r];
						bgra.b[w++] = data.b[r + 3];
						r += 4;
					}
				} else {
					var _g4 = 0;
					var _g5 = width;
					while(_g4 < _g5) {
						var x1 = _g4++;
						cb = data.b[r + 2];
						bgra.b[w++] = cb;
						cg = data.b[r + 1];
						bgra.b[w++] = cg;
						cr = data.b[r];
						bgra.b[w++] = cr;
						bgra.b[w++] = cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255;
						r += 3;
					}
				}
				break;
			case 1:
				ca = 0;
				cb = ca;
				cg = cb;
				cr = cg;
				if(alpha) {
					var _g6 = 0;
					var _g7 = width;
					while(_g6 < _g7) {
						var x2 = _g6++;
						cb += data.b[r + 2];
						bgra.b[w++] = cb;
						cg += data.b[r + 1];
						bgra.b[w++] = cg;
						cr += data.b[r];
						bgra.b[w++] = cr;
						ca += data.b[r + 3];
						bgra.b[w++] = ca;
						r += 4;
					}
				} else {
					var _g8 = 0;
					var _g9 = width;
					while(_g8 < _g9) {
						var x3 = _g8++;
						cb += data.b[r + 2];
						bgra.b[w++] = cb;
						cg += data.b[r + 1];
						bgra.b[w++] = cg;
						cr += data.b[r];
						bgra.b[w++] = cr;
						bgra.b[w++] = cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255;
						r += 3;
					}
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g10 = 0;
					var _g11 = width;
					while(_g10 < _g11) {
						var x4 = _g10++;
						bgra.b[w] = data.b[r + 2] + bgra.b[w - stride];
						++w;
						bgra.b[w] = data.b[r + 1] + bgra.b[w - stride];
						++w;
						bgra.b[w] = data.b[r] + bgra.b[w - stride];
						++w;
						bgra.b[w] = data.b[r + 3] + bgra.b[w - stride];
						++w;
						r += 4;
					}
				} else {
					var _g12 = 0;
					var _g13 = width;
					while(_g12 < _g13) {
						var x5 = _g12++;
						cb = data.b[r + 2] + bgra.b[w - stride];
						bgra.b[w] = cb;
						++w;
						cg = data.b[r + 1] + bgra.b[w - stride];
						bgra.b[w] = cg;
						++w;
						cr = data.b[r] + bgra.b[w - stride];
						bgra.b[w] = cr;
						++w;
						bgra.b[w++] = cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255;
						r += 3;
					}
				}
				break;
			case 3:
				ca = 0;
				cb = ca;
				cg = cb;
				cr = cg;
				var stride1 = y == 0 ? 0 : width * 4 * flipY1;
				if(alpha) {
					var _g14 = 0;
					var _g15 = width;
					while(_g14 < _g15) {
						var x6 = _g14++;
						cb = data.b[r + 2] + (cb + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cb;
						cg = data.b[r + 1] + (cg + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cg;
						cr = data.b[r] + (cr + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cr;
						ca = data.b[r + 3] + (ca + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = ca;
						r += 4;
					}
				} else {
					var _g16 = 0;
					var _g17 = width;
					while(_g16 < _g17) {
						var x7 = _g16++;
						cb = data.b[r + 2] + (cb + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cb;
						cg = data.b[r + 1] + (cg + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cg;
						cr = data.b[r] + (cr + bgra.b[w - stride1] >> 1) & 255;
						bgra.b[w++] = cr;
						bgra.b[w++] = cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255;
						r += 3;
					}
				}
				break;
			case 4:
				var stride2 = width * 4 * flipY1;
				ca = 0;
				cb = ca;
				cg = cb;
				cr = cg;
				if(alpha) {
					var _g18 = 0;
					var _g19 = width;
					while(_g18 < _g19) {
						var x8 = _g18++;
						var b = y == 0 ? 0 : bgra.b[w - stride2];
						var c = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k = cb + b - c;
						var pa = k - cb;
						if(pa < 0) {
							pa = -pa;
						}
						var pb = k - b;
						if(pb < 0) {
							pb = -pb;
						}
						var pc = k - c;
						if(pc < 0) {
							pc = -pc;
						}
						cb = (pa <= pb && pa <= pc ? cb : pb <= pc ? b : c) + data.b[r + 2] & 255;
						bgra.b[w++] = cb;
						var b1 = y == 0 ? 0 : bgra.b[w - stride2];
						var c1 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k1 = cg + b1 - c1;
						var pa1 = k1 - cg;
						if(pa1 < 0) {
							pa1 = -pa1;
						}
						var pb1 = k1 - b1;
						if(pb1 < 0) {
							pb1 = -pb1;
						}
						var pc1 = k1 - c1;
						if(pc1 < 0) {
							pc1 = -pc1;
						}
						cg = (pa1 <= pb1 && pa1 <= pc1 ? cg : pb1 <= pc1 ? b1 : c1) + data.b[r + 1] & 255;
						bgra.b[w++] = cg;
						var b2 = y == 0 ? 0 : bgra.b[w - stride2];
						var c2 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k2 = cr + b2 - c2;
						var pa2 = k2 - cr;
						if(pa2 < 0) {
							pa2 = -pa2;
						}
						var pb2 = k2 - b2;
						if(pb2 < 0) {
							pb2 = -pb2;
						}
						var pc2 = k2 - c2;
						if(pc2 < 0) {
							pc2 = -pc2;
						}
						cr = (pa2 <= pb2 && pa2 <= pc2 ? cr : pb2 <= pc2 ? b2 : c2) + data.b[r] & 255;
						bgra.b[w++] = cr;
						var b3 = y == 0 ? 0 : bgra.b[w - stride2];
						var c3 = x8 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k3 = ca + b3 - c3;
						var pa3 = k3 - ca;
						if(pa3 < 0) {
							pa3 = -pa3;
						}
						var pb3 = k3 - b3;
						if(pb3 < 0) {
							pb3 = -pb3;
						}
						var pc3 = k3 - c3;
						if(pc3 < 0) {
							pc3 = -pc3;
						}
						ca = (pa3 <= pb3 && pa3 <= pc3 ? ca : pb3 <= pc3 ? b3 : c3) + data.b[r + 3] & 255;
						bgra.b[w++] = ca;
						r += 4;
					}
				} else {
					var _g20 = 0;
					var _g21 = width;
					while(_g20 < _g21) {
						var x9 = _g20++;
						var b4 = y == 0 ? 0 : bgra.b[w - stride2];
						var c4 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k4 = cb + b4 - c4;
						var pa4 = k4 - cb;
						if(pa4 < 0) {
							pa4 = -pa4;
						}
						var pb4 = k4 - b4;
						if(pb4 < 0) {
							pb4 = -pb4;
						}
						var pc4 = k4 - c4;
						if(pc4 < 0) {
							pc4 = -pc4;
						}
						cb = (pa4 <= pb4 && pa4 <= pc4 ? cb : pb4 <= pc4 ? b4 : c4) + data.b[r + 2] & 255;
						bgra.b[w++] = cb;
						var b5 = y == 0 ? 0 : bgra.b[w - stride2];
						var c5 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k5 = cg + b5 - c5;
						var pa5 = k5 - cg;
						if(pa5 < 0) {
							pa5 = -pa5;
						}
						var pb5 = k5 - b5;
						if(pb5 < 0) {
							pb5 = -pb5;
						}
						var pc5 = k5 - c5;
						if(pc5 < 0) {
							pc5 = -pc5;
						}
						cg = (pa5 <= pb5 && pa5 <= pc5 ? cg : pb5 <= pc5 ? b5 : c5) + data.b[r + 1] & 255;
						bgra.b[w++] = cg;
						var b6 = y == 0 ? 0 : bgra.b[w - stride2];
						var c6 = x9 == 0 || y == 0 ? 0 : bgra.b[w - stride2 - 4];
						var k6 = cr + b6 - c6;
						var pa6 = k6 - cr;
						if(pa6 < 0) {
							pa6 = -pa6;
						}
						var pb6 = k6 - b6;
						if(pb6 < 0) {
							pb6 = -pb6;
						}
						var pc6 = k6 - c6;
						if(pc6 < 0) {
							pc6 = -pc6;
						}
						cr = (pa6 <= pb6 && pa6 <= pc6 ? cr : pb6 <= pc6 ? b6 : c6) + data.b[r] & 255;
						bgra.b[w++] = cr;
						bgra.b[w++] = cr == alphaRed && cg == alphaGreen && cb == alphaBlue ? 0 : 255;
						r += 3;
					}
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
			w += lineDelta;
		}
		break;
	case 2:
		var pal = format_png_Tools.getPalette(d);
		if(pal == null) {
			throw haxe_Exception.thrown("PNG Palette is missing");
		}
		var alpha = null;
		var _g1_head = d.h;
		while(_g1_head != null) {
			var val = _g1_head.item;
			_g1_head = _g1_head.next;
			var t = val;
			if(t._hx_index == 4) {
				if(t.id == "tRNS") {
					var data1 = t.data;
					alpha = data1;
					break;
				}
			}
		}
		if(alpha != null && alpha.length < 1 << h.colbits) {
			var alpha2 = new haxe_io_Bytes(new ArrayBuffer(1 << h.colbits));
			alpha2.blit(0,alpha,0,alpha.length);
			alpha2.fill(alpha.length,alpha2.length - alpha.length,255);
			alpha = alpha2;
		}
		var width = h.width;
		var stride = Math.ceil(width * h.colbits / 8) + 1;
		if(data.length < h.height * stride) {
			throw haxe_Exception.thrown("Not enough data");
		}
		var tmp = h.width * h.colbits;
		var rline = tmp >> 3;
		var _g = 0;
		var _g1 = h.height;
		while(_g < _g1) {
			var y = _g++;
			var f = data.b[r++];
			if(f == 0) {
				r += rline;
				continue;
			}
			switch(f) {
			case 1:
				var c = 0;
				var _g2 = 0;
				var _g3 = width;
				while(_g2 < _g3) {
					var x = _g2++;
					var v = data.b[r];
					c += v;
					data.b[r++] = c & 255;
				}
				break;
			case 2:
				var stride = y == 0 ? 0 : rline + 1;
				var _g4 = 0;
				var _g5 = width;
				while(_g4 < _g5) {
					var x1 = _g4++;
					var v1 = data.b[r];
					data.b[r] = v1 + data.b[r - stride];
					++r;
				}
				break;
			case 3:
				var c1 = 0;
				var stride1 = y == 0 ? 0 : rline + 1;
				var _g6 = 0;
				var _g7 = width;
				while(_g6 < _g7) {
					var x2 = _g6++;
					var v2 = data.b[r];
					c1 = v2 + (c1 + data.b[r - stride1] >> 1) & 255;
					data.b[r++] = c1;
				}
				break;
			case 4:
				var stride2 = rline + 1;
				var c2 = 0;
				var _g8 = 0;
				var _g9 = width;
				while(_g8 < _g9) {
					var x3 = _g8++;
					var v3 = data.b[r];
					var numChannels = 1;
					if(numChannels == null) {
						numChannels = 4;
					}
					var b = y == 0 ? 0 : data.b[r - stride2];
					var c3 = x3 == 0 || y == 0 ? 0 : data.b[r - stride2 - numChannels];
					var k = c2 + b - c3;
					var pa = k - c2;
					if(pa < 0) {
						pa = -pa;
					}
					var pb = k - b;
					if(pb < 0) {
						pb = -pb;
					}
					var pc = k - c3;
					if(pc < 0) {
						pc = -pc;
					}
					c2 = (pa <= pb && pa <= pc ? c2 : pb <= pc ? b : c3) + v3 & 255;
					data.b[r++] = c2;
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid filter " + f);
			}
		}
		var r = 0;
		if(h.colbits == 8) {
			var _g = 0;
			var _g1 = h.height;
			while(_g < _g1) {
				var y = _g++;
				++r;
				var _g2 = 0;
				var _g3 = h.width;
				while(_g2 < _g3) {
					var x = _g2++;
					var c = data.b[r++];
					bgra.b[w++] = pal.b[c * 3 + 2];
					bgra.b[w++] = pal.b[c * 3 + 1];
					bgra.b[w++] = pal.b[c * 3];
					bgra.b[w++] = alpha != null ? alpha.b[c] : 255;
				}
				w += lineDelta;
			}
		} else if(h.colbits < 8) {
			var req = h.colbits;
			var mask = (1 << req) - 1;
			var _g = 0;
			var _g1 = h.height;
			while(_g < _g1) {
				var y = _g++;
				++r;
				var bits = 0;
				var nbits = 0;
				var _g2 = 0;
				var _g3 = h.width;
				while(_g2 < _g3) {
					var x = _g2++;
					if(nbits < req) {
						bits = bits << 8 | data.b[r++];
						nbits += 8;
					}
					var c = bits >>> nbits - req & mask;
					nbits -= req;
					bgra.b[w++] = pal.b[c * 3 + 2];
					bgra.b[w++] = pal.b[c * 3 + 1];
					bgra.b[w++] = pal.b[c * 3];
					bgra.b[w++] = alpha != null ? alpha.b[c] : 255;
				}
				w += lineDelta;
			}
		} else {
			throw haxe_Exception.thrown(h.colbits + " indexed bits per pixel not supported");
		}
		break;
	}
	return bgra;
};
format_png_Tools.buildGrey = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = new haxe_io_Bytes(new ArrayBuffer(width * height + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgb.b[w++] = data.b[r++];
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColGrey(false), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgb,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.buildIndexed = function(width,height,data,palette,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = new haxe_io_Bytes(new ArrayBuffer(width * height + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgb.b[w++] = data.b[r++];
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColIndexed, interlaced : false}));
	l.add(format_png_Chunk.CPalette(palette));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgb,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.buildRGB = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgb = new haxe_io_Bytes(new ArrayBuffer(width * height * 3 + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgb.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgb.b[w++] = data.b[r + 2];
			rgb.b[w++] = data.b[r + 1];
			rgb.b[w++] = data.b[r];
			r += 3;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColTrue(false), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgb,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.build32ARGB = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgba = new haxe_io_Bytes(new ArrayBuffer(width * height * 4 + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgba.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgba.b[w++] = data.b[r + 1];
			rgba.b[w++] = data.b[r + 2];
			rgba.b[w++] = data.b[r + 3];
			rgba.b[w++] = data.b[r];
			r += 4;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColTrue(true), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgba,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
format_png_Tools.build32BGRA = function(width,height,data,level) {
	if(level == null) {
		level = 9;
	}
	var rgba = new haxe_io_Bytes(new ArrayBuffer(width * height * 4 + height));
	var w = 0;
	var r = 0;
	var _g = 0;
	var _g1 = height;
	while(_g < _g1) {
		var y = _g++;
		rgba.b[w++] = 0;
		var _g2 = 0;
		var _g3 = width;
		while(_g2 < _g3) {
			var x = _g2++;
			rgba.b[w++] = data.b[r + 2];
			rgba.b[w++] = data.b[r + 1];
			rgba.b[w++] = data.b[r];
			rgba.b[w++] = data.b[r + 3];
			r += 4;
		}
	}
	var l = new haxe_ds_List();
	l.add(format_png_Chunk.CHeader({ width : width, height : height, colbits : 8, color : format_png_Color.ColTrue(true), interlaced : false}));
	l.add(format_png_Chunk.CData(format_tools_Deflate.run(rgba,level)));
	l.add(format_png_Chunk.CEnd);
	return l;
};
var format_tools_Deflate = function() { };
format_tools_Deflate.__name__ = "format.tools.Deflate";
format_tools_Deflate.run = function(b,level) {
	if(level == null) {
		level = 9;
	}
	return haxe_zip_Compress.run(b,level);
};
var format_tools_Inflate = function() { };
format_tools_Inflate.__name__ = "format.tools.Inflate";
format_tools_Inflate.run = function(bytes) {
	return haxe_zip_Uncompress.run(bytes);
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = "haxe.Exception";
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	__skipStack: null
	,__nativeException: null
	,__previousException: null
	,unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
	,__properties__: {get_native:"get_native",get_message:"get_message"}
});
var haxe_Int32 = {};
haxe_Int32.ucompare = function(a,b) {
	if(a < 0) {
		if(b < 0) {
			return ~b - ~a | 0;
		} else {
			return 1;
		}
	}
	if(b < 0) {
		return -1;
	} else {
		return a - b | 0;
	}
};
var haxe_Int64 = {};
haxe_Int64.divMod = function(dividend,divisor) {
	if(divisor.high == 0) {
		switch(divisor.low) {
		case 0:
			throw haxe_Exception.thrown("divide by zero");
		case 1:
			var this1 = new haxe__$Int64__$_$_$Int64(dividend.high,dividend.low);
			var this2 = new haxe__$Int64__$_$_$Int64(0,0);
			return { quotient : this1, modulus : this2};
		}
	}
	var divSign = dividend.high < 0 != divisor.high < 0;
	var modulus;
	if(dividend.high < 0) {
		var high = ~dividend.high;
		var low = ~dividend.low + 1 | 0;
		if(low == 0) {
			var ret = high++;
			high = high | 0;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(high,low);
		modulus = this1;
	} else {
		var this1 = new haxe__$Int64__$_$_$Int64(dividend.high,dividend.low);
		modulus = this1;
	}
	if(divisor.high < 0) {
		var high = ~divisor.high;
		var low = ~divisor.low + 1 | 0;
		if(low == 0) {
			var ret = high++;
			high = high | 0;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(high,low);
		divisor = this1;
	}
	var this1 = new haxe__$Int64__$_$_$Int64(0,0);
	var quotient = this1;
	var this1 = new haxe__$Int64__$_$_$Int64(0,1);
	var mask = this1;
	while(!(divisor.high < 0)) {
		var v = haxe_Int32.ucompare(divisor.high,modulus.high);
		var cmp = v != 0 ? v : haxe_Int32.ucompare(divisor.low,modulus.low);
		var b = 1;
		b &= 63;
		if(b == 0) {
			var this1 = new haxe__$Int64__$_$_$Int64(divisor.high,divisor.low);
			divisor = this1;
		} else if(b < 32) {
			var this2 = new haxe__$Int64__$_$_$Int64(divisor.high << b | divisor.low >>> 32 - b,divisor.low << b);
			divisor = this2;
		} else {
			var this3 = new haxe__$Int64__$_$_$Int64(divisor.low << b - 32,0);
			divisor = this3;
		}
		var b1 = 1;
		b1 &= 63;
		if(b1 == 0) {
			var this4 = new haxe__$Int64__$_$_$Int64(mask.high,mask.low);
			mask = this4;
		} else if(b1 < 32) {
			var this5 = new haxe__$Int64__$_$_$Int64(mask.high << b1 | mask.low >>> 32 - b1,mask.low << b1);
			mask = this5;
		} else {
			var this6 = new haxe__$Int64__$_$_$Int64(mask.low << b1 - 32,0);
			mask = this6;
		}
		if(cmp >= 0) {
			break;
		}
	}
	while(true) {
		var b_high = 0;
		var b_low = 0;
		if(!(mask.high != b_high || mask.low != b_low)) {
			break;
		}
		var v = haxe_Int32.ucompare(modulus.high,divisor.high);
		if((v != 0 ? v : haxe_Int32.ucompare(modulus.low,divisor.low)) >= 0) {
			var this1 = new haxe__$Int64__$_$_$Int64(quotient.high | mask.high,quotient.low | mask.low);
			quotient = this1;
			var high = modulus.high - divisor.high | 0;
			var low = modulus.low - divisor.low | 0;
			if(haxe_Int32.ucompare(modulus.low,divisor.low) < 0) {
				var ret = high--;
				high = high | 0;
			}
			var this2 = new haxe__$Int64__$_$_$Int64(high,low);
			modulus = this2;
		}
		var b = 1;
		b &= 63;
		if(b == 0) {
			var this3 = new haxe__$Int64__$_$_$Int64(mask.high,mask.low);
			mask = this3;
		} else if(b < 32) {
			var this4 = new haxe__$Int64__$_$_$Int64(mask.high >>> b,mask.high << 32 - b | mask.low >>> b);
			mask = this4;
		} else {
			var this5 = new haxe__$Int64__$_$_$Int64(0,mask.high >>> b - 32);
			mask = this5;
		}
		var b1 = 1;
		b1 &= 63;
		if(b1 == 0) {
			var this6 = new haxe__$Int64__$_$_$Int64(divisor.high,divisor.low);
			divisor = this6;
		} else if(b1 < 32) {
			var this7 = new haxe__$Int64__$_$_$Int64(divisor.high >>> b1,divisor.high << 32 - b1 | divisor.low >>> b1);
			divisor = this7;
		} else {
			var this8 = new haxe__$Int64__$_$_$Int64(0,divisor.high >>> b1 - 32);
			divisor = this8;
		}
	}
	if(divSign) {
		var high = ~quotient.high;
		var low = ~quotient.low + 1 | 0;
		if(low == 0) {
			var ret = high++;
			high = high | 0;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(high,low);
		quotient = this1;
	}
	if(dividend.high < 0) {
		var high = ~modulus.high;
		var low = ~modulus.low + 1 | 0;
		if(low == 0) {
			var ret = high++;
			high = high | 0;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(high,low);
		modulus = this1;
	}
	return { quotient : quotient, modulus : modulus};
};
var haxe__$Int64__$_$_$Int64 = function(high,low) {
	this.high = high;
	this.low = low;
};
haxe__$Int64__$_$_$Int64.__name__ = "haxe._Int64.___Int64";
haxe__$Int64__$_$_$Int64.prototype = {
	high: null
	,low: null
	,__class__: haxe__$Int64__$_$_$Int64
};
var haxe_Int64Helper = function() { };
haxe_Int64Helper.__name__ = "haxe.Int64Helper";
haxe_Int64Helper.fromFloat = function(f) {
	if(isNaN(f) || !isFinite(f)) {
		throw haxe_Exception.thrown("Number is NaN or Infinite");
	}
	var noFractions = f - f % 1;
	if(noFractions > 9007199254740991) {
		throw haxe_Exception.thrown("Conversion overflow");
	}
	if(noFractions < -9007199254740991) {
		throw haxe_Exception.thrown("Conversion underflow");
	}
	var this1 = new haxe__$Int64__$_$_$Int64(0,0);
	var result = this1;
	var neg = noFractions < 0;
	var rest = neg ? -noFractions : noFractions;
	var i = 0;
	while(rest >= 1) {
		var curr = rest % 2;
		rest /= 2;
		if(curr >= 1) {
			var a_high = 0;
			var a_low = 1;
			var b = i;
			b &= 63;
			var b1;
			if(b == 0) {
				var this1 = new haxe__$Int64__$_$_$Int64(a_high,a_low);
				b1 = this1;
			} else if(b < 32) {
				var this2 = new haxe__$Int64__$_$_$Int64(a_high << b | a_low >>> 32 - b,a_low << b);
				b1 = this2;
			} else {
				var this3 = new haxe__$Int64__$_$_$Int64(a_low << b - 32,0);
				b1 = this3;
			}
			var high = result.high + b1.high | 0;
			var low = result.low + b1.low | 0;
			if(haxe_Int32.ucompare(low,result.low) < 0) {
				var ret = high++;
				high = high | 0;
			}
			var this4 = new haxe__$Int64__$_$_$Int64(high,low);
			result = this4;
		}
		++i;
	}
	if(neg) {
		var high = ~result.high;
		var low = ~result.low + 1 | 0;
		if(low == 0) {
			var ret = high++;
			high = high | 0;
		}
		var this1 = new haxe__$Int64__$_$_$Int64(high,low);
		result = this1;
	}
	return result;
};
var haxe_Resource = function() { };
haxe_Resource.__name__ = "haxe.Resource";
haxe_Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe_Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) {
				return x.str;
			}
			var b = haxe_crypto_Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = "haxe.ValueException";
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	value: null
	,unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_crypto_Adler32 = function() {
	this.a1 = 1;
	this.a2 = 0;
};
haxe_crypto_Adler32.__name__ = "haxe.crypto.Adler32";
haxe_crypto_Adler32.read = function(i) {
	var a = new haxe_crypto_Adler32();
	var a2a = i.readByte();
	var a2b = i.readByte();
	var a1a = i.readByte();
	var a1b = i.readByte();
	a.a1 = a1a << 8 | a1b;
	a.a2 = a2a << 8 | a2b;
	return a;
};
haxe_crypto_Adler32.prototype = {
	a1: null
	,a2: null
	,update: function(b,pos,len) {
		var a1 = this.a1;
		var a2 = this.a2;
		var _g = pos;
		var _g1 = pos + len;
		while(_g < _g1) {
			var p = _g++;
			var c = b.b[p];
			a1 = (a1 + c) % 65521;
			a2 = (a2 + a1) % 65521;
		}
		this.a1 = a1;
		this.a2 = a2;
	}
	,equals: function(a) {
		if(a.a1 == this.a1) {
			return a.a2 == this.a2;
		} else {
			return false;
		}
	}
	,__class__: haxe_crypto_Adler32
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
haxe_io_Bytes.__name__ = "haxe.io.Bytes";
haxe_io_Bytes.ofString = function(s,encoding) {
	if(encoding == haxe_io_Encoding.RawNative) {
		var buf = new Uint8Array(s.length << 1);
		var _g = 0;
		var _g1 = s.length;
		while(_g < _g1) {
			var i = _g++;
			var c = s.charCodeAt(i);
			buf[i << 1] = c & 255;
			buf[i << 1 | 1] = c >> 8;
		}
		return new haxe_io_Bytes(buf.buffer);
	}
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.prototype = {
	length: null
	,b: null
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	}
	,fill: function(pos,len,value) {
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			this.b[pos++] = value;
		}
	}
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			var debug = pos > 0;
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_crypto_Base64 = function() { };
haxe_crypto_Base64.__name__ = "haxe.crypto.Base64";
haxe_crypto_Base64.encode = function(bytes,complement) {
	if(complement == null) {
		complement = true;
	}
	var str = new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).encodeBytes(bytes).toString();
	if(complement) {
		switch(bytes.length % 3) {
		case 1:
			str += "==";
			break;
		case 2:
			str += "=";
			break;
		default:
		}
	}
	return str;
};
haxe_crypto_Base64.decode = function(str,complement) {
	if(complement == null) {
		complement = true;
	}
	if(complement) {
		while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	}
	return new haxe_crypto_BaseCode(haxe_crypto_Base64.BYTES).decodeBytes(haxe_io_Bytes.ofString(str));
};
var haxe_crypto_BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) ++nbits;
	if(nbits > 8 || len != 1 << nbits) {
		throw haxe_Exception.thrown("BaseCode : base length must be a power of two.");
	}
	this.base = base;
	this.nbits = nbits;
};
haxe_crypto_BaseCode.__name__ = "haxe.crypto.BaseCode";
haxe_crypto_BaseCode.prototype = {
	base: null
	,nbits: null
	,tbl: null
	,encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = new haxe_io_Bytes(new ArrayBuffer(size + (b.length * 8 % nbits == 0 ? 0 : 1)));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.b[pin++];
			}
			curbits -= nbits;
			out.b[pout++] = base.b[buf >> curbits & mask];
		}
		if(curbits > 0) {
			out.b[pout++] = base.b[buf << nbits - curbits & mask];
		}
		return out;
	}
	,initTable: function() {
		var tbl = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g = 0;
		var _g1 = this.base.length;
		while(_g < _g1) {
			var i = _g++;
			tbl[this.base.b[i]] = i;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) {
			this.initTable();
		}
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = new haxe_io_Bytes(new ArrayBuffer(size));
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.b[pin++]];
				if(i == -1) {
					throw haxe_Exception.thrown("BaseCode : invalid encoded char");
				}
				buf |= i;
			}
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255;
		}
		return out;
	}
	,__class__: haxe_crypto_BaseCode
};
var haxe_crypto_Md5 = function() {
};
haxe_crypto_Md5.__name__ = "haxe.crypto.Md5";
haxe_crypto_Md5.encode = function(s) {
	var m = new haxe_crypto_Md5();
	var h = m.doEncode(haxe_crypto_Md5.str2blks(s));
	return m.hex(h);
};
haxe_crypto_Md5.make = function(b) {
	var h = new haxe_crypto_Md5().doEncode(haxe_crypto_Md5.bytes2blks(b));
	var out = new haxe_io_Bytes(new ArrayBuffer(16));
	var p = 0;
	out.b[p++] = h[0] & 255;
	out.b[p++] = h[0] >> 8 & 255;
	out.b[p++] = h[0] >> 16 & 255;
	out.b[p++] = h[0] >>> 24;
	out.b[p++] = h[1] & 255;
	out.b[p++] = h[1] >> 8 & 255;
	out.b[p++] = h[1] >> 16 & 255;
	out.b[p++] = h[1] >>> 24;
	out.b[p++] = h[2] & 255;
	out.b[p++] = h[2] >> 8 & 255;
	out.b[p++] = h[2] >> 16 & 255;
	out.b[p++] = h[2] >>> 24;
	out.b[p++] = h[3] & 255;
	out.b[p++] = h[3] >> 8 & 255;
	out.b[p++] = h[3] >> 16 & 255;
	out.b[p++] = h[3] >>> 24;
	return out;
};
haxe_crypto_Md5.bytes2blks = function(b) {
	var nblk = (b.length + 8 >> 6) + 1;
	var blks = [];
	var blksSize = nblk * 16;
	var _g = 0;
	var _g1 = blksSize;
	while(_g < _g1) {
		var i = _g++;
		blks[i] = 0;
	}
	var i = 0;
	while(i < b.length) {
		blks[i >> 2] |= b.b[i] << (((b.length << 3) + i & 3) << 3);
		++i;
	}
	blks[i >> 2] |= 128 << (b.length * 8 + i) % 4 * 8;
	var l = b.length * 8;
	var k = nblk * 16 - 2;
	blks[k] = l & 255;
	blks[k] |= (l >>> 8 & 255) << 8;
	blks[k] |= (l >>> 16 & 255) << 16;
	blks[k] |= (l >>> 24 & 255) << 24;
	return blks;
};
haxe_crypto_Md5.str2blks = function(str) {
	var str1 = haxe_io_Bytes.ofString(str);
	var nblk = (str1.length + 8 >> 6) + 1;
	var blks = [];
	var blksSize = nblk * 16;
	var _g = 0;
	var _g1 = blksSize;
	while(_g < _g1) {
		var i = _g++;
		blks[i] = 0;
	}
	var i = 0;
	var max = str1.length;
	var l = max * 8;
	while(i < max) {
		blks[i >> 2] |= str1.b[i] << (l + i) % 4 * 8;
		++i;
	}
	blks[i >> 2] |= 128 << (l + i) % 4 * 8;
	var k = nblk * 16 - 2;
	blks[k] = l & 255;
	blks[k] |= (l >>> 8 & 255) << 8;
	blks[k] |= (l >>> 16 & 255) << 16;
	blks[k] |= (l >>> 24 & 255) << 24;
	return blks;
};
haxe_crypto_Md5.prototype = {
	bitOR: function(a,b) {
		var lsb = a & 1 | b & 1;
		var msb31 = a >>> 1 | b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitXOR: function(a,b) {
		var lsb = a & 1 ^ b & 1;
		var msb31 = a >>> 1 ^ b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitAND: function(a,b) {
		var lsb = a & 1 & (b & 1);
		var msb31 = a >>> 1 & b >>> 1;
		return msb31 << 1 | lsb;
	}
	,addme: function(x,y) {
		var lsw = (x & 65535) + (y & 65535);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return msw << 16 | lsw & 65535;
	}
	,hex: function(a) {
		var str = "";
		var hex_chr = "0123456789abcdef";
		var _g = 0;
		while(_g < a.length) {
			var num = a[_g];
			++_g;
			str += hex_chr.charAt(num >> 4 & 15) + hex_chr.charAt(num & 15);
			str += hex_chr.charAt(num >> 12 & 15) + hex_chr.charAt(num >> 8 & 15);
			str += hex_chr.charAt(num >> 20 & 15) + hex_chr.charAt(num >> 16 & 15);
			str += hex_chr.charAt(num >> 28 & 15) + hex_chr.charAt(num >> 24 & 15);
		}
		return str;
	}
	,rol: function(num,cnt) {
		return num << cnt | num >>> 32 - cnt;
	}
	,cmn: function(q,a,b,x,s,t) {
		return this.addme(this.rol(this.addme(this.addme(a,q),this.addme(x,t)),s),b);
	}
	,ff: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND(~b,d)),a,b,x,s,t);
	}
	,gg: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,~d)),a,b,x,s,t);
	}
	,hh: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
	}
	,ii: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(c,this.bitOR(b,~d)),a,b,x,s,t);
	}
	,doEncode: function(x) {
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		var step;
		var i = 0;
		while(i < x.length) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			step = 0;
			a = this.ff(a,b,c,d,x[i],7,-680876936);
			d = this.ff(d,a,b,c,x[i + 1],12,-389564586);
			c = this.ff(c,d,a,b,x[i + 2],17,606105819);
			b = this.ff(b,c,d,a,x[i + 3],22,-1044525330);
			a = this.ff(a,b,c,d,x[i + 4],7,-176418897);
			d = this.ff(d,a,b,c,x[i + 5],12,1200080426);
			c = this.ff(c,d,a,b,x[i + 6],17,-1473231341);
			b = this.ff(b,c,d,a,x[i + 7],22,-45705983);
			a = this.ff(a,b,c,d,x[i + 8],7,1770035416);
			d = this.ff(d,a,b,c,x[i + 9],12,-1958414417);
			c = this.ff(c,d,a,b,x[i + 10],17,-42063);
			b = this.ff(b,c,d,a,x[i + 11],22,-1990404162);
			a = this.ff(a,b,c,d,x[i + 12],7,1804603682);
			d = this.ff(d,a,b,c,x[i + 13],12,-40341101);
			c = this.ff(c,d,a,b,x[i + 14],17,-1502002290);
			b = this.ff(b,c,d,a,x[i + 15],22,1236535329);
			a = this.gg(a,b,c,d,x[i + 1],5,-165796510);
			d = this.gg(d,a,b,c,x[i + 6],9,-1069501632);
			c = this.gg(c,d,a,b,x[i + 11],14,643717713);
			b = this.gg(b,c,d,a,x[i],20,-373897302);
			a = this.gg(a,b,c,d,x[i + 5],5,-701558691);
			d = this.gg(d,a,b,c,x[i + 10],9,38016083);
			c = this.gg(c,d,a,b,x[i + 15],14,-660478335);
			b = this.gg(b,c,d,a,x[i + 4],20,-405537848);
			a = this.gg(a,b,c,d,x[i + 9],5,568446438);
			d = this.gg(d,a,b,c,x[i + 14],9,-1019803690);
			c = this.gg(c,d,a,b,x[i + 3],14,-187363961);
			b = this.gg(b,c,d,a,x[i + 8],20,1163531501);
			a = this.gg(a,b,c,d,x[i + 13],5,-1444681467);
			d = this.gg(d,a,b,c,x[i + 2],9,-51403784);
			c = this.gg(c,d,a,b,x[i + 7],14,1735328473);
			b = this.gg(b,c,d,a,x[i + 12],20,-1926607734);
			a = this.hh(a,b,c,d,x[i + 5],4,-378558);
			d = this.hh(d,a,b,c,x[i + 8],11,-2022574463);
			c = this.hh(c,d,a,b,x[i + 11],16,1839030562);
			b = this.hh(b,c,d,a,x[i + 14],23,-35309556);
			a = this.hh(a,b,c,d,x[i + 1],4,-1530992060);
			d = this.hh(d,a,b,c,x[i + 4],11,1272893353);
			c = this.hh(c,d,a,b,x[i + 7],16,-155497632);
			b = this.hh(b,c,d,a,x[i + 10],23,-1094730640);
			a = this.hh(a,b,c,d,x[i + 13],4,681279174);
			d = this.hh(d,a,b,c,x[i],11,-358537222);
			c = this.hh(c,d,a,b,x[i + 3],16,-722521979);
			b = this.hh(b,c,d,a,x[i + 6],23,76029189);
			a = this.hh(a,b,c,d,x[i + 9],4,-640364487);
			d = this.hh(d,a,b,c,x[i + 12],11,-421815835);
			c = this.hh(c,d,a,b,x[i + 15],16,530742520);
			b = this.hh(b,c,d,a,x[i + 2],23,-995338651);
			a = this.ii(a,b,c,d,x[i],6,-198630844);
			d = this.ii(d,a,b,c,x[i + 7],10,1126891415);
			c = this.ii(c,d,a,b,x[i + 14],15,-1416354905);
			b = this.ii(b,c,d,a,x[i + 5],21,-57434055);
			a = this.ii(a,b,c,d,x[i + 12],6,1700485571);
			d = this.ii(d,a,b,c,x[i + 3],10,-1894986606);
			c = this.ii(c,d,a,b,x[i + 10],15,-1051523);
			b = this.ii(b,c,d,a,x[i + 1],21,-2054922799);
			a = this.ii(a,b,c,d,x[i + 8],6,1873313359);
			d = this.ii(d,a,b,c,x[i + 15],10,-30611744);
			c = this.ii(c,d,a,b,x[i + 6],15,-1560198380);
			b = this.ii(b,c,d,a,x[i + 13],21,1309151649);
			a = this.ii(a,b,c,d,x[i + 4],6,-145523070);
			d = this.ii(d,a,b,c,x[i + 11],10,-1120210379);
			c = this.ii(c,d,a,b,x[i + 2],15,718787259);
			b = this.ii(b,c,d,a,x[i + 9],21,-343485551);
			a = this.addme(a,olda);
			b = this.addme(b,oldb);
			c = this.addme(c,oldc);
			d = this.addme(d,oldd);
			i += 16;
		}
		return [a,b,c,d];
	}
	,__class__: haxe_crypto_Md5
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = "haxe.ds.IntMap";
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	h: null
	,keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) a.push(+key);
		return new haxe_iterators_ArrayIterator(a);
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_List = function() {
	this.length = 0;
};
haxe_ds_List.__name__ = "haxe.ds.List";
haxe_ds_List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,__class__: haxe_ds_List
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
haxe_ds__$List_ListNode.__name__ = "haxe.ds._List.ListNode";
haxe_ds__$List_ListNode.prototype = {
	item: null
	,next: null
	,__class__: haxe_ds__$List_ListNode
};
var haxe_ds__$StringMap_StringMapValueIterator = function(h) {
	this.h = h;
	this.keys = Object.keys(h);
	this.length = this.keys.length;
	this.current = 0;
};
haxe_ds__$StringMap_StringMapValueIterator.__name__ = "haxe.ds._StringMap.StringMapValueIterator";
haxe_ds__$StringMap_StringMapValueIterator.prototype = {
	h: null
	,keys: null
	,length: null
	,current: null
	,hasNext: function() {
		return this.current < this.length;
	}
	,next: function() {
		return this.h[this.keys[this.current++]];
	}
	,__class__: haxe_ds__$StringMap_StringMapValueIterator
};
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
haxe_exceptions_PosException.__name__ = "haxe.exceptions.PosException";
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	posInfos: null
	,toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
	,__class__: haxe_exceptions_PosException
});
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
haxe_exceptions_NotImplementedException.__name__ = "haxe.exceptions.NotImplementedException";
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
	__class__: haxe_exceptions_NotImplementedException
});
var haxe_io_BytesBuffer = function() {
	this.pos = 0;
	this.size = 0;
};
haxe_io_BytesBuffer.__name__ = "haxe.io.BytesBuffer";
haxe_io_BytesBuffer.prototype = {
	buffer: null
	,view: null
	,u8: null
	,pos: null
	,size: null
	,addByte: function(byte) {
		if(this.pos == this.size) {
			this.grow(1);
		}
		this.view.setUint8(this.pos++,byte);
	}
	,add: function(src) {
		if(this.pos + src.length > this.size) {
			this.grow(src.length);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset,src.length);
		this.u8.set(sub,this.pos);
		this.pos += src.length;
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.pos + len > this.size) {
			this.grow(len);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset + pos,len);
		this.u8.set(sub,this.pos);
		this.pos += len;
	}
	,grow: function(delta) {
		var req = this.pos + delta;
		var nsize = this.size == 0 ? 16 : this.size;
		while(nsize < req) nsize = nsize * 3 >> 1;
		var nbuf = new ArrayBuffer(nsize);
		var nu8 = new Uint8Array(nbuf);
		if(this.size > 0) {
			nu8.set(this.u8);
		}
		this.size = nsize;
		this.buffer = nbuf;
		this.u8 = nu8;
		this.view = new DataView(this.buffer);
	}
	,getBytes: function() {
		if(this.size == 0) {
			return new haxe_io_Bytes(new ArrayBuffer(0));
		}
		var b = new haxe_io_Bytes(this.buffer);
		b.length = this.pos;
		return b;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_Input = function() { };
haxe_io_Input.__name__ = "haxe.io.Input";
haxe_io_Input.prototype = {
	bigEndian: null
	,readByte: function() {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Input.hx", lineNumber : 53, className : "haxe.io.Input", methodName : "readByte"});
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( _g ) {
			if(!((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
				throw _g;
			}
		}
		return len - k;
	}
	,close: function() {
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = new haxe_io_Bytes(new ArrayBuffer(nbytes));
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) {
			return ch2 | ch1 << 8;
		} else {
			return ch1 | ch2 << 8;
		}
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) {
			return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
		} else {
			return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
		}
	}
	,readString: function(len,encoding) {
		var b = new haxe_io_Bytes(new ArrayBuffer(len));
		this.readFullBytes(b,0,len);
		return b.getString(0,len,encoding);
	}
	,__class__: haxe_io_Input
	,__properties__: {set_bigEndian:"set_bigEndian"}
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.length - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.length) {
		throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
haxe_io_BytesInput.__name__ = "haxe.io.BytesInput";
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	b: null
	,pos: null
	,len: null
	,totlen: null
	,readByte: function() {
		if(this.len == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
});
var haxe_io_Eof = function() {
};
haxe_io_Eof.__name__ = "haxe.io.Eof";
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = "haxe.iterators.ArrayIterator";
haxe_iterators_ArrayIterator.prototype = {
	array: null
	,current: null
	,hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var haxe_zip_Compress = function() { };
haxe_zip_Compress.__name__ = "haxe.zip.Compress";
haxe_zip_Compress.run = function(s,level) {
	throw new haxe_exceptions_NotImplementedException("Not implemented for this platform",null,{ fileName : "haxe/zip/Compress.hx", lineNumber : 39, className : "haxe.zip.Compress", methodName : "run"});
};
var haxe_zip_Huffman = $hxEnums["haxe.zip.Huffman"] = { __ename__:true,__constructs__:null
	,Found: ($_=function(i) { return {_hx_index:0,i:i,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="Found",$_.__params__ = ["i"],$_)
	,NeedBit: ($_=function(left,right) { return {_hx_index:1,left:left,right:right,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="NeedBit",$_.__params__ = ["left","right"],$_)
	,NeedBits: ($_=function(n,table) { return {_hx_index:2,n:n,table:table,__enum__:"haxe.zip.Huffman",toString:$estr}; },$_._hx_name="NeedBits",$_.__params__ = ["n","table"],$_)
};
haxe_zip_Huffman.__constructs__ = [haxe_zip_Huffman.Found,haxe_zip_Huffman.NeedBit,haxe_zip_Huffman.NeedBits];
var haxe_zip_HuffTools = function() {
};
haxe_zip_HuffTools.__name__ = "haxe.zip.HuffTools";
haxe_zip_HuffTools.prototype = {
	treeDepth: function(t) {
		switch(t._hx_index) {
		case 0:
			var _g = t.i;
			return 0;
		case 1:
			var a = t.left;
			var b = t.right;
			var da = this.treeDepth(a);
			var db = this.treeDepth(b);
			return 1 + (da < db ? da : db);
		case 2:
			var _g = t.n;
			var _g = t.table;
			throw haxe_Exception.thrown("assert");
		}
	}
	,treeCompress: function(t) {
		var d = this.treeDepth(t);
		if(d == 0) {
			return t;
		}
		if(d == 1) {
			if(t._hx_index == 1) {
				var a = t.left;
				var b = t.right;
				return haxe_zip_Huffman.NeedBit(this.treeCompress(a),this.treeCompress(b));
			} else {
				throw haxe_Exception.thrown("assert");
			}
		}
		var size = 1 << d;
		var table = [];
		var _g = 0;
		var _g1 = size;
		while(_g < _g1) {
			var i = _g++;
			table.push(haxe_zip_Huffman.Found(-1));
		}
		this.treeWalk(table,0,0,d,t);
		return haxe_zip_Huffman.NeedBits(d,table);
	}
	,treeWalk: function(table,p,cd,d,t) {
		if(t._hx_index == 1) {
			var a = t.left;
			var b = t.right;
			if(d > 0) {
				this.treeWalk(table,p,cd + 1,d - 1,a);
				this.treeWalk(table,p | 1 << cd,cd + 1,d - 1,b);
			} else {
				table[p] = this.treeCompress(t);
			}
		} else {
			table[p] = this.treeCompress(t);
		}
	}
	,treeMake: function(bits,maxbits,v,len) {
		if(len > maxbits) {
			throw haxe_Exception.thrown("Invalid huffman");
		}
		var idx = v << 5 | len;
		if(bits.h.hasOwnProperty(idx)) {
			return haxe_zip_Huffman.Found(bits.h[idx]);
		}
		v <<= 1;
		++len;
		return haxe_zip_Huffman.NeedBit(this.treeMake(bits,maxbits,v,len),this.treeMake(bits,maxbits,v | 1,len));
	}
	,make: function(lengths,pos,nlengths,maxbits) {
		if(nlengths == 1) {
			return haxe_zip_Huffman.NeedBit(haxe_zip_Huffman.Found(0),haxe_zip_Huffman.Found(0));
		}
		var counts = [];
		var tmp = [];
		if(maxbits > 32) {
			throw haxe_Exception.thrown("Invalid huffman");
		}
		var _g = 0;
		var _g1 = maxbits;
		while(_g < _g1) {
			var i = _g++;
			counts.push(0);
			tmp.push(0);
		}
		var _g = 0;
		var _g1 = nlengths;
		while(_g < _g1) {
			var i = _g++;
			var p = lengths[i + pos];
			if(p >= maxbits) {
				throw haxe_Exception.thrown("Invalid huffman");
			}
			counts[p]++;
		}
		var code = 0;
		var _g = 1;
		var _g1 = maxbits - 1;
		while(_g < _g1) {
			var i = _g++;
			code = code + counts[i] << 1;
			tmp[i] = code;
		}
		var bits = new haxe_ds_IntMap();
		var _g = 0;
		var _g1 = nlengths;
		while(_g < _g1) {
			var i = _g++;
			var l = lengths[i + pos];
			if(l != 0) {
				var n = tmp[l - 1];
				tmp[l - 1] = n + 1;
				bits.h[n << 5 | l] = i;
			}
		}
		return this.treeCompress(haxe_zip_Huffman.NeedBit(this.treeMake(bits,maxbits,0,1),this.treeMake(bits,maxbits,1,1)));
	}
	,__class__: haxe_zip_HuffTools
};
var haxe_zip__$InflateImpl_Window = function(hasCrc) {
	this.buffer = new haxe_io_Bytes(new ArrayBuffer(65536));
	this.pos = 0;
	if(hasCrc) {
		this.crc = new haxe_crypto_Adler32();
	}
};
haxe_zip__$InflateImpl_Window.__name__ = "haxe.zip._InflateImpl.Window";
haxe_zip__$InflateImpl_Window.prototype = {
	buffer: null
	,pos: null
	,crc: null
	,slide: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,32768);
		}
		var b = new haxe_io_Bytes(new ArrayBuffer(65536));
		this.pos -= 32768;
		b.blit(0,this.buffer,32768,this.pos);
		this.buffer = b;
	}
	,addBytes: function(b,p,len) {
		if(this.pos + len > 65536) {
			this.slide();
		}
		this.buffer.blit(this.pos,b,p,len);
		this.pos += len;
	}
	,addByte: function(c) {
		if(this.pos == 65536) {
			this.slide();
		}
		this.buffer.b[this.pos] = c;
		this.pos++;
	}
	,getLastChar: function() {
		return this.buffer.b[this.pos - 1];
	}
	,available: function() {
		return this.pos;
	}
	,checksum: function() {
		if(this.crc != null) {
			this.crc.update(this.buffer,0,this.pos);
		}
		return this.crc;
	}
	,__class__: haxe_zip__$InflateImpl_Window
};
var haxe_zip__$InflateImpl_State = $hxEnums["haxe.zip._InflateImpl.State"] = { __ename__:true,__constructs__:null
	,Head: {_hx_name:"Head",_hx_index:0,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Block: {_hx_name:"Block",_hx_index:1,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,CData: {_hx_name:"CData",_hx_index:2,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Flat: {_hx_name:"Flat",_hx_index:3,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Crc: {_hx_name:"Crc",_hx_index:4,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Dist: {_hx_name:"Dist",_hx_index:5,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,DistOne: {_hx_name:"DistOne",_hx_index:6,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
	,Done: {_hx_name:"Done",_hx_index:7,__enum__:"haxe.zip._InflateImpl.State",toString:$estr}
};
haxe_zip__$InflateImpl_State.__constructs__ = [haxe_zip__$InflateImpl_State.Head,haxe_zip__$InflateImpl_State.Block,haxe_zip__$InflateImpl_State.CData,haxe_zip__$InflateImpl_State.Flat,haxe_zip__$InflateImpl_State.Crc,haxe_zip__$InflateImpl_State.Dist,haxe_zip__$InflateImpl_State.DistOne,haxe_zip__$InflateImpl_State.Done];
var haxe_zip_InflateImpl = function(i,header,crc) {
	if(crc == null) {
		crc = true;
	}
	if(header == null) {
		header = true;
	}
	this.isFinal = false;
	this.htools = new haxe_zip_HuffTools();
	this.huffman = this.buildFixedHuffman();
	this.huffdist = null;
	this.len = 0;
	this.dist = 0;
	this.state = header ? haxe_zip__$InflateImpl_State.Head : haxe_zip__$InflateImpl_State.Block;
	this.input = i;
	this.bits = 0;
	this.nbits = 0;
	this.needed = 0;
	this.output = null;
	this.outpos = 0;
	this.lengths = [];
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.lengths.push(-1);
	this.window = new haxe_zip__$InflateImpl_Window(crc);
};
haxe_zip_InflateImpl.__name__ = "haxe.zip.InflateImpl";
haxe_zip_InflateImpl.run = function(i,bufsize) {
	if(bufsize == null) {
		bufsize = 65536;
	}
	var buf = new haxe_io_Bytes(new ArrayBuffer(bufsize));
	var output = new haxe_io_BytesBuffer();
	var inflate = new haxe_zip_InflateImpl(i);
	while(true) {
		var len = inflate.readBytes(buf,0,bufsize);
		output.addBytes(buf,0,len);
		if(len < bufsize) {
			break;
		}
	}
	return output.getBytes();
};
haxe_zip_InflateImpl.prototype = {
	nbits: null
	,bits: null
	,state: null
	,isFinal: null
	,huffman: null
	,huffdist: null
	,htools: null
	,len: null
	,dist: null
	,needed: null
	,output: null
	,outpos: null
	,input: null
	,lengths: null
	,window: null
	,buildFixedHuffman: function() {
		if(haxe_zip_InflateImpl.FIXED_HUFFMAN != null) {
			return haxe_zip_InflateImpl.FIXED_HUFFMAN;
		}
		var a = [];
		var _g = 0;
		while(_g < 288) {
			var n = _g++;
			a.push(n <= 143 ? 8 : n <= 255 ? 9 : n <= 279 ? 7 : 8);
		}
		haxe_zip_InflateImpl.FIXED_HUFFMAN = this.htools.make(a,0,288,10);
		return haxe_zip_InflateImpl.FIXED_HUFFMAN;
	}
	,readBytes: function(b,pos,len) {
		this.needed = len;
		this.outpos = pos;
		this.output = b;
		if(len > 0) {
			while(this.inflateLoop()) {
			}
		}
		return len - this.needed;
	}
	,getBits: function(n) {
		while(this.nbits < n) {
			this.bits |= this.input.readByte() << this.nbits;
			this.nbits += 8;
		}
		var b = this.bits & (1 << n) - 1;
		this.nbits -= n;
		this.bits >>= n;
		return b;
	}
	,getBit: function() {
		if(this.nbits == 0) {
			this.nbits = 8;
			this.bits = this.input.readByte();
		}
		var b = (this.bits & 1) == 1;
		this.nbits--;
		this.bits >>= 1;
		return b;
	}
	,getRevBits: function(n) {
		if(n == 0) {
			return 0;
		} else if(this.getBit()) {
			return 1 << n - 1 | this.getRevBits(n - 1);
		} else {
			return this.getRevBits(n - 1);
		}
	}
	,resetBits: function() {
		this.bits = 0;
		this.nbits = 0;
	}
	,addBytes: function(b,p,len) {
		this.window.addBytes(b,p,len);
		this.output.blit(this.outpos,b,p,len);
		this.needed -= len;
		this.outpos += len;
	}
	,addByte: function(b) {
		this.window.addByte(b);
		this.output.b[this.outpos] = b;
		this.needed--;
		this.outpos++;
	}
	,addDistOne: function(n) {
		var c = this.window.getLastChar();
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			this.addByte(c);
		}
	}
	,addDist: function(d,len) {
		this.addBytes(this.window.buffer,this.window.pos - d,len);
	}
	,applyHuffman: function(h) {
		switch(h._hx_index) {
		case 0:
			var n = h.i;
			return n;
		case 1:
			var a = h.left;
			var b = h.right;
			return this.applyHuffman(this.getBit() ? b : a);
		case 2:
			var n = h.n;
			var tbl = h.table;
			return this.applyHuffman(tbl[this.getBits(n)]);
		}
	}
	,inflateLengths: function(a,max) {
		var i = 0;
		var prev = 0;
		while(i < max) {
			var n = this.applyHuffman(this.huffman);
			switch(n) {
			case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:
				prev = n;
				a[i] = n;
				++i;
				break;
			case 16:
				var end = i + 3 + this.getBits(2);
				if(end > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				while(i < end) {
					a[i] = prev;
					++i;
				}
				break;
			case 17:
				i += 3 + this.getBits(3);
				if(i > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				break;
			case 18:
				i += 11 + this.getBits(7);
				if(i > max) {
					throw haxe_Exception.thrown("Invalid data");
				}
				break;
			default:
				throw haxe_Exception.thrown("Invalid data");
			}
		}
	}
	,inflateLoop: function() {
		switch(this.state._hx_index) {
		case 0:
			var cmf = this.input.readByte();
			var cm = cmf & 15;
			var cinfo = cmf >> 4;
			if(cm != 8) {
				throw haxe_Exception.thrown("Invalid data");
			}
			var flg = this.input.readByte();
			var fdict = (flg & 32) != 0;
			if(((cmf << 8) + flg) % 31 != 0) {
				throw haxe_Exception.thrown("Invalid data");
			}
			if(fdict) {
				throw haxe_Exception.thrown("Unsupported dictionary");
			}
			this.state = haxe_zip__$InflateImpl_State.Block;
			return true;
		case 1:
			this.isFinal = this.getBit();
			switch(this.getBits(2)) {
			case 0:
				this.len = this.input.readUInt16();
				var nlen = this.input.readUInt16();
				if(nlen != 65535 - this.len) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.state = haxe_zip__$InflateImpl_State.Flat;
				var r = this.inflateLoop();
				this.resetBits();
				return r;
			case 1:
				this.huffman = this.buildFixedHuffman();
				this.huffdist = null;
				this.state = haxe_zip__$InflateImpl_State.CData;
				return true;
			case 2:
				var hlit = this.getBits(5) + 257;
				var hdist = this.getBits(5) + 1;
				var hclen = this.getBits(4) + 4;
				var _g = 0;
				var _g1 = hclen;
				while(_g < _g1) {
					var i = _g++;
					this.lengths[haxe_zip_InflateImpl.CODE_LENGTHS_POS[i]] = this.getBits(3);
				}
				var _g = hclen;
				var _g1 = 19;
				while(_g < _g1) {
					var i = _g++;
					this.lengths[haxe_zip_InflateImpl.CODE_LENGTHS_POS[i]] = 0;
				}
				this.huffman = this.htools.make(this.lengths,0,19,8);
				var lengths = [];
				var _g = 0;
				var _g1 = hlit + hdist;
				while(_g < _g1) {
					var i = _g++;
					lengths.push(0);
				}
				this.inflateLengths(lengths,hlit + hdist);
				this.huffdist = this.htools.make(lengths,hlit,hdist,16);
				this.huffman = this.htools.make(lengths,0,hlit,16);
				this.state = haxe_zip__$InflateImpl_State.CData;
				return true;
			default:
				throw haxe_Exception.thrown("Invalid data");
			}
			break;
		case 2:
			var n = this.applyHuffman(this.huffman);
			if(n < 256) {
				this.addByte(n);
				return this.needed > 0;
			} else if(n == 256) {
				this.state = this.isFinal ? haxe_zip__$InflateImpl_State.Crc : haxe_zip__$InflateImpl_State.Block;
				return true;
			} else {
				n -= 257;
				var extra_bits = haxe_zip_InflateImpl.LEN_EXTRA_BITS_TBL[n];
				if(extra_bits == -1) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.len = haxe_zip_InflateImpl.LEN_BASE_VAL_TBL[n] + this.getBits(extra_bits);
				var dist_code = this.huffdist == null ? this.getRevBits(5) : this.applyHuffman(this.huffdist);
				extra_bits = haxe_zip_InflateImpl.DIST_EXTRA_BITS_TBL[dist_code];
				if(extra_bits == -1) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.dist = haxe_zip_InflateImpl.DIST_BASE_VAL_TBL[dist_code] + this.getBits(extra_bits);
				if(this.dist > this.window.available()) {
					throw haxe_Exception.thrown("Invalid data");
				}
				this.state = this.dist == 1 ? haxe_zip__$InflateImpl_State.DistOne : haxe_zip__$InflateImpl_State.Dist;
				return true;
			}
			break;
		case 3:
			var rlen = this.len < this.needed ? this.len : this.needed;
			var bytes = this.input.read(rlen);
			this.len -= rlen;
			this.addBytes(bytes,0,rlen);
			if(this.len == 0) {
				this.state = this.isFinal ? haxe_zip__$InflateImpl_State.Crc : haxe_zip__$InflateImpl_State.Block;
			}
			return this.needed > 0;
		case 4:
			var calc = this.window.checksum();
			if(calc == null) {
				this.state = haxe_zip__$InflateImpl_State.Done;
				return true;
			}
			var crc = haxe_crypto_Adler32.read(this.input);
			if(!calc.equals(crc)) {
				throw haxe_Exception.thrown("Invalid CRC");
			}
			this.state = haxe_zip__$InflateImpl_State.Done;
			return true;
		case 5:
			while(this.len > 0 && this.needed > 0) {
				var rdist = this.len < this.dist ? this.len : this.dist;
				var rlen = this.needed < rdist ? this.needed : rdist;
				this.addDist(this.dist,rlen);
				this.len -= rlen;
			}
			if(this.len == 0) {
				this.state = haxe_zip__$InflateImpl_State.CData;
			}
			return this.needed > 0;
		case 6:
			var rlen = this.len < this.needed ? this.len : this.needed;
			this.addDistOne(rlen);
			this.len -= rlen;
			if(this.len == 0) {
				this.state = haxe_zip__$InflateImpl_State.CData;
			}
			return this.needed > 0;
		case 7:
			return false;
		}
	}
	,__class__: haxe_zip_InflateImpl
};
var haxe_zip_Uncompress = function() { };
haxe_zip_Uncompress.__name__ = "haxe.zip.Uncompress";
haxe_zip_Uncompress.run = function(src,bufsize) {
	return haxe_zip_InflateImpl.run(new haxe_io_BytesInput(src),bufsize);
};
var js_Boot = function() { };
js_Boot.__name__ = "js.Boot";
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = String;
String.__name__ = "String";
Array.__name__ = "Array";
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_Resource.content = [{ name : "ENCMACROMAN", data : "Iz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiMgICBGaWxlIG5hbWU6ICBST01BTi5UWFQKIwojICAgQ29udGVudHM6ICAgTWFwIChleHRlcm5hbCB2ZXJzaW9uKSBmcm9tIE1hYyBPUyBSb21hbgojICAgICAgICAgICAgICAgY2hhcmFjdGVyIHNldCB0byBVbmljb2RlIDIuMSBhbmQgbGF0ZXIuCiMKIyAgIENvcHlyaWdodDogIChjKSAxOTk0LTIwMDIsIDIwMDUgYnkgQXBwbGUgQ29tcHV0ZXIsIEluYy4sIGFsbCByaWdodHMKIyAgICAgICAgICAgICAgIHJlc2VydmVkLgojCiMgICBDb250YWN0OiAgICBjaGFyc2V0c0BhcHBsZS5jb20KIwojICAgQ2hhbmdlczoKIwojICAgICAgIGMwMiAgMjAwNS1BcHItMDUgICAgVXBkYXRlIGhlYWRlciBjb21tZW50cy4gTWF0Y2hlcyBpbnRlcm5hbCB4bWwKIyAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjMS4xPiBhbmQgVGV4dCBFbmNvZGluZyBDb252ZXJ0ZXIgMi4wLgojICAgICAgYjQsYzEgMjAwMi1EZWMtMTkgICAgVXBkYXRlIFVSTHMsIG5vdGVzLiBNYXRjaGVzIGludGVybmFsCiMgICAgICAgICAgICAgICAgICAgICAgICAgICB1dG9tPGI1Pi4KIyAgICAgICBiMDMgIDE5OTktU2VwLTIyICAgIFVwZGF0ZSBjb250YWN0IGUtbWFpbCBhZGRyZXNzLiBNYXRjaGVzCiMgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbCB1dG9tPGI0PiwgdWZybTxiMz4sIGFuZCBUZXh0CiMgICAgICAgICAgICAgICAgICAgICAgICAgICBFbmNvZGluZyBDb252ZXJ0ZXIgdmVyc2lvbiAxLjUuCiMgICAgICAgYjAyICAxOTk4LUF1Zy0xOCAgICBFbmNvZGluZyBjaGFuZ2VkIGZvciBNYWMgT1MgOC41OyBjaGFuZ2UKIyAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHBpbmcgb2YgMHhEQiBmcm9tIENVUlJFTkNZIFNJR04gdG8KIyAgICAgICAgICAgICAgICAgICAgICAgICAgIEVVUk8gU0lHTi4gTWF0Y2hlcyBpbnRlcm5hbCB1dG9tPGIzPiwKIyAgICAgICAgICAgICAgICAgICAgICAgICAgIHVmcm08YjM+LgojICAgICAgIG4wOCAgMTk5OC1GZWItMDUgICAgTWlub3IgdXBkYXRlIHRvIGhlYWRlciBjb21tZW50cwojICAgICAgIG4wNiAgMTk5Ny1EZWMtMTQgICAgQWRkIHdhcm5pbmcgYWJvdXQgZnV0dXJlIGNoYW5nZXMgdG8gMHhEQgojICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBDVVJSRU5DWSBTSUdOIHRvIEVVUk8gU0lHTi4gQ2xhcmlmeQojICAgICAgICAgICAgICAgICAgICAgICAgICAgc29tZSBoZWFkZXIgaW5mb3JtYXRpb24KIyAgICAgICBuMDQgIDE5OTctRGVjLTAxICAgIFVwZGF0ZSB0byBtYXRjaCBpbnRlcm5hbCB1dG9tPG4zPiwgdWZybTxuMjI+OgojICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlIHN0YW5kYXJkIG1hcHBpbmcgZm9yIDB4QkQgZnJvbSBVKzIxMjYKIyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGl0cyBjYW5vbmljYWwgZGVjb21wb3NpdGlvbiwgVSswM0E5LgojICAgICAgIG4wMyAgMTk5NS1BcHItMTUgICAgRmlyc3QgdmVyc2lvbiAoYWZ0ZXIgZml4aW5nIHNvbWUgdHlwb3MpLgojICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0Y2hlcyBpbnRlcm5hbCB1ZnJtPG45Pi4KIwojIFN0YW5kYXJkIGhlYWRlcjoKIyAtLS0tLS0tLS0tLS0tLS0tCiMKIyAgIEFwcGxlLCB0aGUgQXBwbGUgbG9nbywgYW5kIE1hY2ludG9zaCBhcmUgdHJhZGVtYXJrcyBvZiBBcHBsZQojICAgQ29tcHV0ZXIsIEluYy4sIHJlZ2lzdGVyZWQgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgYW5kIG90aGVyIGNvdW50cmllcy4KIyAgIFVuaWNvZGUgaXMgYSB0cmFkZW1hcmsgb2YgVW5pY29kZSBJbmMuIEZvciB0aGUgc2FrZSBvZiBicmV2aXR5LAojICAgdGhyb3VnaG91dCB0aGlzIGRvY3VtZW50LCAiTWFjaW50b3NoIiBjYW4gYmUgdXNlZCB0byByZWZlciB0bwojICAgTWFjaW50b3NoIGNvbXB1dGVycyBhbmQgIlVuaWNvZGUiIGNhbiBiZSB1c2VkIHRvIHJlZmVyIHRvIHRoZQojICAgVW5pY29kZSBzdGFuZGFyZC4KIwojICAgQXBwbGUgQ29tcHV0ZXIsIEluYy4gKCJBcHBsZSIpIG1ha2VzIG5vIHdhcnJhbnR5IG9yIHJlcHJlc2VudGF0aW9uLAojICAgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZCwgd2l0aCByZXNwZWN0IHRvIHRoaXMgZG9jdW1lbnQgYW5kIHRoZQojICAgaW5jbHVkZWQgZGF0YSwgaXRzIHF1YWxpdHksIGFjY3VyYWN5LCBvciBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXIKIyAgIHB1cnBvc2UuIEluIG5vIGV2ZW50IHdpbGwgQXBwbGUgYmUgbGlhYmxlIGZvciBkaXJlY3QsIGluZGlyZWN0LAojICAgc3BlY2lhbCwgaW5jaWRlbnRhbCwgb3IgY29uc2VxdWVudGlhbCBkYW1hZ2VzIHJlc3VsdGluZyBmcm9tIGFueQojICAgZGVmZWN0IG9yIGluYWNjdXJhY3kgaW4gdGhpcyBkb2N1bWVudCBvciB0aGUgaW5jbHVkZWQgZGF0YS4KIwojICAgVGhlc2UgbWFwcGluZyB0YWJsZXMgYW5kIGNoYXJhY3RlciBsaXN0cyBhcmUgc3ViamVjdCB0byBjaGFuZ2UuCiMgICBUaGUgbGF0ZXN0IHRhYmxlcyBzaG91bGQgYmUgYXZhaWxhYmxlIGZyb20gdGhlIGZvbGxvd2luZzoKIwojICAgPGh0dHA6Ly93d3cudW5pY29kZS5vcmcvUHVibGljL01BUFBJTkdTL1ZFTkRPUlMvQVBQTEUvPgojCiMgICBGb3IgZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCBNYWMgT1MgZW5jb2RpbmdzIGFuZCB0aGVzZSBtYXBwaW5nCiMgICB0YWJsZXMsIHNlZSB0aGUgZmlsZSAiUkVBRE1FLlRYVCIuCiMKIyBGb3JtYXQ6CiMgLS0tLS0tLQojCiMgICBUaHJlZSB0YWItc2VwYXJhdGVkIGNvbHVtbnM7CiMgICAnIycgYmVnaW5zIGEgY29tbWVudCB3aGljaCBjb250aW51ZXMgdG8gdGhlIGVuZCBvZiB0aGUgbGluZS4KIyAgICAgQ29sdW1uICMxIGlzIHRoZSBNYWMgT1MgUm9tYW4gY29kZSAoaW4gaGV4IGFzIDB4Tk4pCiMgICAgIENvbHVtbiAjMiBpcyB0aGUgY29ycmVzcG9uZGluZyBVbmljb2RlIChpbiBoZXggYXMgMHhOTk5OKQojICAgICBDb2x1bW4gIzMgaXMgYSBjb21tZW50IGNvbnRhaW5pbmcgdGhlIFVuaWNvZGUgbmFtZQojCiMgICBUaGUgZW50cmllcyBhcmUgaW4gTWFjIE9TIFJvbWFuIGNvZGUgb3JkZXIuCiMKIyAgIE9uZSBvZiB0aGVzZSBtYXBwaW5ncyByZXF1aXJlcyB0aGUgdXNlIG9mIGEgY29ycG9yYXRlIGNoYXJhY3Rlci4KIyAgIFNlZSB0aGUgZmlsZSAiQ09SUENIQVIuVFhUIiBhbmQgbm90ZXMgYmVsb3cuCiMKIyAgIENvbnRyb2wgY2hhcmFjdGVyIG1hcHBpbmdzIGFyZSBub3Qgc2hvd24gaW4gdGhpcyB0YWJsZSwgZm9sbG93aW5nCiMgICB0aGUgY29udmVudGlvbnMgb2YgdGhlIHN0YW5kYXJkIFVUQyBtYXBwaW5nIHRhYmxlcy4gSG93ZXZlciwgdGhlCiMgICBNYWMgT1MgUm9tYW4gY2hhcmFjdGVyIHNldCB1c2VzIHRoZSBzdGFuZGFyZCBjb250cm9sIGNoYXJhY3RlcnMgYXQKIyAgIDB4MDAtMHgxRiBhbmQgMHg3Ri4KIwojIE5vdGVzIG9uIE1hYyBPUyBSb21hbjoKIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiMKIyAgIFRoaXMgaXMgYSBsZWdhY3kgTWFjIE9TIGVuY29kaW5nOyBpbiB0aGUgTWFjIE9TIFggQ2FyYm9uIGFuZCBDb2NvYQojICAgZW52aXJvbm1lbnRzLCBpdCBpcyBvbmx5IHN1cHBvcnRlZCBkaXJlY3RseSBpbiBwcm9ncmFtbWluZwojICAgaW50ZXJmYWNlcyBmb3IgUXVpY2tEcmF3IFRleHQsIHRoZSBTY3JpcHQgTWFuYWdlciwgYW5kIHJlbGF0ZWQKIyAgIFRleHQgVXRpbGl0aWVzLiBGb3Igb3RoZXIgcHVycG9zZXMgaXQgaXMgc3VwcG9ydGVkIHZpYSB0cmFuc2NvZGluZwojICAgdG8gYW5kIGZyb20gVW5pY29kZS4KIwojICAgVGhpcyBjaGFyYWN0ZXIgc2V0IGlzIHVzZWQgZm9yIGF0IGxlYXN0IHRoZSBmb2xsb3dpbmcgTWFjIE9TCiMgICBsb2NhbGl6YXRpb25zOiBVLlMuLCBCcml0aXNoLCBDYW5hZGlhbiBGcmVuY2gsIEZyZW5jaCwgU3dpc3MKIyAgIEZyZW5jaCwgR2VybWFuLCBTd2lzcyBHZXJtYW4sIEl0YWxpYW4sIFN3aXNzIEl0YWxpYW4sIER1dGNoLAojICAgU3dlZGlzaCwgTm9yd2VnaWFuLCBEYW5pc2gsIEZpbm5pc2gsIFNwYW5pc2gsIENhdGFsYW4sCiMgICBQb3J0dWd1ZXNlLCBCcmF6aWxpYW4sIGFuZCB0aGUgZGVmYXVsdCBJbnRlcm5hdGlvbmFsIHN5c3RlbS4KIwojICAgVmFyaWFudHMgb2YgTWFjIE9TIFJvbWFuIGFyZSB1c2VkIGZvciBDcm9hdGlhbiwgSWNlbGFuZGljLAojICAgVHVya2lzaCwgUm9tYW5pYW4sIGFuZCBvdGhlciBlbmNvZGluZ3MuIFNlcGFyYXRlIG1hcHBpbmcgdGFibGVzCiMgICBhcmUgYXZhaWxhYmxlIGZvciB0aGVzZSBlbmNvZGluZ3MuCiMKIyAgIEJlZm9yZSBNYWMgT1MgOC41LCBjb2RlIHBvaW50IDB4REIgd2FzIENVUlJFTkNZIFNJR04sIGFuZCB3YXMKIyAgIG1hcHBlZCB0byBVKzAwQTQuIEluIE1hYyBPUyA4LjUgYW5kIGxhdGVyIHZlcnNpb25zLCBjb2RlIHBvaW50CiMgICAweERCIGlzIGNoYW5nZWQgdG8gRVVSTyBTSUdOIGFuZCBtYXBzIHRvIFUrMjBBQzsgdGhlIHN0YW5kYXJkCiMgICBBcHBsZSBmb250cyBhcmUgdXBkYXRlZCBmb3IgTWFjIE9TIDguNSB0byByZWZsZWN0IHRoaXMuIFRoZXJlIGlzCiMgICBhICJjdXJyZW5jeSBzaWduIiB2YXJpYW50IG9mIHRoZSBNYWMgT1MgUm9tYW4gZW5jb2RpbmcgdGhhdCBzdGlsbAojICAgbWFwcyAweERCIHRvIFUrMDBBNDsgdGhpcyBjYW4gYmUgdXNlZCBmb3Igb2xkZXIgZm9udHMuCiMKIyAgIEJlZm9yZSBNYWMgT1MgOC41LCB0aGUgUk9NIGJpdG1hcCB2ZXJzaW9ucyBvZiB0aGUgZm9udHMgQ2hpY2FnbywKIyAgIE5ldyBZb3JrLCBHZW5ldmEsIGFuZCBNb25hY28gZGlkIG5vdCBpbXBsZW1lbnQgdGhlIGZ1bGwgTWFjIE9TCiMgICBSb21hbiBjaGFyYWN0ZXIgc2V0OyB0aGV5IG9ubHkgc3VwcG9ydGVkIGNoYXJhY3RlciBjb2RlcyB1cCB0bwojICAgMHhEOC4gVGhlIFRydWVUeXBlIHZlcnNpb25zIG9mIHRoZXNlIGZvbnRzIGhhdmUgYWx3YXlzIGltcGxlbWVudGVkCiMgICB0aGUgZnVsbCBjaGFyYWN0ZXIgc2V0LCBhcyB3aXRoIHRoZSBiaXRtYXAgYW5kIFRydWVUeXBlIHZlcnNpb25zCiMgICBvZiB0aGUgb3RoZXIgc3RhbmRhcmQgUm9tYW4gZm9udHMuCiMKIyAgIEluIGFsbCBNYWMgT1MgZW5jb2RpbmdzLCBmb250cyBzdWNoIGFzIENoaWNhZ28gd2hpY2ggYXJlIHVzZWQKIyAgIGFzICJzeXN0ZW0iIGZvbnRzIChmb3IgbWVudXMsIGRpYWxvZ3MsIGV0Yy4pIGhhdmUgZm91ciBnbHlwaHMKIyAgIGF0IGNvZGUgcG9pbnRzIDB4MTEtMHgxNCBmb3IgdHJhbnNpZW50IHVzZSBieSB0aGUgTWVudSBNYW5hZ2VyLgojICAgVGhlc2UgZ2x5cGhzIGFyZSBub3QgaW50ZW5kZWQgYXMgY2hhcmFjdGVycyBmb3IgdXNlIGluIG5vcm1hbAojICAgdGV4dCwgYW5kIHRoZSBhc3NvY2lhdGVkIGNvZGUgcG9pbnRzIGFyZSBub3QgZ2VuZXJhbGx5CiMgICBpbnRlcnByZXRlZCBhcyBhc3NvY2lhdGVkIHdpdGggdGhlc2UgZ2x5cGhzOyB0aGV5IGFyZSB1c3VhbGx5CiMgICBpbnRlcnByZXRlZCAoaWYgYXQgYWxsKSBhcyB0aGUgY29udHJvbCBjb2RlcyBEQzEtREM0LgojCiMgVW5pY29kZSBtYXBwaW5nIGlzc3VlcyBhbmQgbm90ZXM6CiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiMKIyAgIFRoZSBmb2xsb3dpbmcgY29ycG9yYXRlIHpvbmUgVW5pY29kZSBjaGFyYWN0ZXIgaXMgdXNlZCBpbiB0aGlzCiMgICBtYXBwaW5nOgojCiMgICAgIDB4RjhGRiAgQXBwbGUgbG9nbwojCiMgICBOT1RFOiBUaGUgZ3JhcGhpYyBpbWFnZSBhc3NvY2lhdGVkIHdpdGggdGhlIEFwcGxlIGxvZ28gY2hhcmFjdGVyCiMgICBpcyBub3QgYXV0aG9yaXplZCBmb3IgdXNlIHdpdGhvdXQgcGVybWlzc2lvbiBvZiBBcHBsZSwgYW5kCiMgICB1bmF1dGhvcml6ZWQgdXNlIG1pZ2h0IGNvbnN0aXR1dGUgdHJhZGVtYXJrIGluZnJpbmdlbWVudC4KIwojIERldGFpbHMgb2YgbWFwcGluZyBjaGFuZ2VzIGluIGVhY2ggdmVyc2lvbjoKIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiMKIyAgIENoYW5nZXMgZnJvbSB2ZXJzaW9uIG4wOCB0byB2ZXJzaW9uIGIwMjoKIwojICAgLSBFbmNvZGluZyBjaGFuZ2VkIGZvciBNYWMgT1MgOC41OyBjaGFuZ2UgbWFwcGluZyBvZiAweERCIGZyb20KIyAgIENVUlJFTkNZIFNJR04gKFUrMDBBNCkgdG8gRVVSTyBTSUdOIChVKzIwQUMpLgojCiMgICBDaGFuZ2VzIGZyb20gdmVyc2lvbiBuMDMgdG8gdmVyc2lvbiBuMDQ6CiMKIyAgIC0gQ2hhbmdlIG1hcHBpbmcgb2YgMHhCRCBmcm9tIFUrMjEyNiB0byBpdHMgY2Fub25pY2FsCiMgICAgIGRlY29tcG9zaXRpb24sIFUrMDNBOS4KIwojIyMjIyMjIyMjIyMjIyMjIyMKCjB4MjAJMHgwMDIwCSMgU1BBQ0UKMHgyMQkweDAwMjEJIyBFWENMQU1BVElPTiBNQVJLCjB4MjIJMHgwMDIyCSMgUVVPVEFUSU9OIE1BUksKMHgyMwkweDAwMjMJIyBOVU1CRVIgU0lHTgoweDI0CTB4MDAyNAkjIERPTExBUiBTSUdOCjB4MjUJMHgwMDI1CSMgUEVSQ0VOVCBTSUdOCjB4MjYJMHgwMDI2CSMgQU1QRVJTQU5ECjB4MjcJMHgwMDI3CSMgQVBPU1RST1BIRQoweDI4CTB4MDAyOAkjIExFRlQgUEFSRU5USEVTSVMKMHgyOQkweDAwMjkJIyBSSUdIVCBQQVJFTlRIRVNJUwoweDJBCTB4MDAyQQkjIEFTVEVSSVNLCjB4MkIJMHgwMDJCCSMgUExVUyBTSUdOCjB4MkMJMHgwMDJDCSMgQ09NTUEKMHgyRAkweDAwMkQJIyBIWVBIRU4tTUlOVVMKMHgyRQkweDAwMkUJIyBGVUxMIFNUT1AKMHgyRgkweDAwMkYJIyBTT0xJRFVTCjB4MzAJMHgwMDMwCSMgRElHSVQgWkVSTwoweDMxCTB4MDAzMQkjIERJR0lUIE9ORQoweDMyCTB4MDAzMgkjIERJR0lUIFRXTwoweDMzCTB4MDAzMwkjIERJR0lUIFRIUkVFCjB4MzQJMHgwMDM0CSMgRElHSVQgRk9VUgoweDM1CTB4MDAzNQkjIERJR0lUIEZJVkUKMHgzNgkweDAwMzYJIyBESUdJVCBTSVgKMHgzNwkweDAwMzcJIyBESUdJVCBTRVZFTgoweDM4CTB4MDAzOAkjIERJR0lUIEVJR0hUCjB4MzkJMHgwMDM5CSMgRElHSVQgTklORQoweDNBCTB4MDAzQQkjIENPTE9OCjB4M0IJMHgwMDNCCSMgU0VNSUNPTE9OCjB4M0MJMHgwMDNDCSMgTEVTUy1USEFOIFNJR04KMHgzRAkweDAwM0QJIyBFUVVBTFMgU0lHTgoweDNFCTB4MDAzRQkjIEdSRUFURVItVEhBTiBTSUdOCjB4M0YJMHgwMDNGCSMgUVVFU1RJT04gTUFSSwoweDQwCTB4MDA0MAkjIENPTU1FUkNJQUwgQVQKMHg0MQkweDAwNDEJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBBCjB4NDIJMHgwMDQyCSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgQgoweDQzCTB4MDA0MwkjIExBVElOIENBUElUQUwgTEVUVEVSIEMKMHg0NAkweDAwNDQJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBECjB4NDUJMHgwMDQ1CSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgRQoweDQ2CTB4MDA0NgkjIExBVElOIENBUElUQUwgTEVUVEVSIEYKMHg0NwkweDAwNDcJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBHCjB4NDgJMHgwMDQ4CSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgSAoweDQ5CTB4MDA0OQkjIExBVElOIENBUElUQUwgTEVUVEVSIEkKMHg0QQkweDAwNEEJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBKCjB4NEIJMHgwMDRCCSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgSwoweDRDCTB4MDA0QwkjIExBVElOIENBUElUQUwgTEVUVEVSIEwKMHg0RAkweDAwNEQJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBNCjB4NEUJMHgwMDRFCSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgTgoweDRGCTB4MDA0RgkjIExBVElOIENBUElUQUwgTEVUVEVSIE8KMHg1MAkweDAwNTAJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBQCjB4NTEJMHgwMDUxCSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgUQoweDUyCTB4MDA1MgkjIExBVElOIENBUElUQUwgTEVUVEVSIFIKMHg1MwkweDAwNTMJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBTCjB4NTQJMHgwMDU0CSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVAoweDU1CTB4MDA1NQkjIExBVElOIENBUElUQUwgTEVUVEVSIFUKMHg1NgkweDAwNTYJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBWCjB4NTcJMHgwMDU3CSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVwoweDU4CTB4MDA1OAkjIExBVElOIENBUElUQUwgTEVUVEVSIFgKMHg1OQkweDAwNTkJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBZCjB4NUEJMHgwMDVBCSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgWgoweDVCCTB4MDA1QgkjIExFRlQgU1FVQVJFIEJSQUNLRVQKMHg1QwkweDAwNUMJIyBSRVZFUlNFIFNPTElEVVMKMHg1RAkweDAwNUQJIyBSSUdIVCBTUVVBUkUgQlJBQ0tFVAoweDVFCTB4MDA1RQkjIENJUkNVTUZMRVggQUNDRU5UCjB4NUYJMHgwMDVGCSMgTE9XIExJTkUKMHg2MAkweDAwNjAJIyBHUkFWRSBBQ0NFTlQKMHg2MQkweDAwNjEJIyBMQVRJTiBTTUFMTCBMRVRURVIgQQoweDYyCTB4MDA2MgkjIExBVElOIFNNQUxMIExFVFRFUiBCCjB4NjMJMHgwMDYzCSMgTEFUSU4gU01BTEwgTEVUVEVSIEMKMHg2NAkweDAwNjQJIyBMQVRJTiBTTUFMTCBMRVRURVIgRAoweDY1CTB4MDA2NQkjIExBVElOIFNNQUxMIExFVFRFUiBFCjB4NjYJMHgwMDY2CSMgTEFUSU4gU01BTEwgTEVUVEVSIEYKMHg2NwkweDAwNjcJIyBMQVRJTiBTTUFMTCBMRVRURVIgRwoweDY4CTB4MDA2OAkjIExBVElOIFNNQUxMIExFVFRFUiBICjB4NjkJMHgwMDY5CSMgTEFUSU4gU01BTEwgTEVUVEVSIEkKMHg2QQkweDAwNkEJIyBMQVRJTiBTTUFMTCBMRVRURVIgSgoweDZCCTB4MDA2QgkjIExBVElOIFNNQUxMIExFVFRFUiBLCjB4NkMJMHgwMDZDCSMgTEFUSU4gU01BTEwgTEVUVEVSIEwKMHg2RAkweDAwNkQJIyBMQVRJTiBTTUFMTCBMRVRURVIgTQoweDZFCTB4MDA2RQkjIExBVElOIFNNQUxMIExFVFRFUiBOCjB4NkYJMHgwMDZGCSMgTEFUSU4gU01BTEwgTEVUVEVSIE8KMHg3MAkweDAwNzAJIyBMQVRJTiBTTUFMTCBMRVRURVIgUAoweDcxCTB4MDA3MQkjIExBVElOIFNNQUxMIExFVFRFUiBRCjB4NzIJMHgwMDcyCSMgTEFUSU4gU01BTEwgTEVUVEVSIFIKMHg3MwkweDAwNzMJIyBMQVRJTiBTTUFMTCBMRVRURVIgUwoweDc0CTB4MDA3NAkjIExBVElOIFNNQUxMIExFVFRFUiBUCjB4NzUJMHgwMDc1CSMgTEFUSU4gU01BTEwgTEVUVEVSIFUKMHg3NgkweDAwNzYJIyBMQVRJTiBTTUFMTCBMRVRURVIgVgoweDc3CTB4MDA3NwkjIExBVElOIFNNQUxMIExFVFRFUiBXCjB4NzgJMHgwMDc4CSMgTEFUSU4gU01BTEwgTEVUVEVSIFgKMHg3OQkweDAwNzkJIyBMQVRJTiBTTUFMTCBMRVRURVIgWQoweDdBCTB4MDA3QQkjIExBVElOIFNNQUxMIExFVFRFUiBaCjB4N0IJMHgwMDdCCSMgTEVGVCBDVVJMWSBCUkFDS0VUCjB4N0MJMHgwMDdDCSMgVkVSVElDQUwgTElORQoweDdECTB4MDA3RAkjIFJJR0hUIENVUkxZIEJSQUNLRVQKMHg3RQkweDAwN0UJIyBUSUxERQojCjB4ODAJMHgwMEM0CSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIERJQUVSRVNJUwoweDgxCTB4MDBDNQkjIExBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBSSU5HIEFCT1ZFCjB4ODIJMHgwMEM3CSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgQyBXSVRIIENFRElMTEEKMHg4MwkweDAwQzkJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQUNVVEUKMHg4NAkweDAwRDEJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBOIFdJVEggVElMREUKMHg4NQkweDAwRDYJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggRElBRVJFU0lTCjB4ODYJMHgwMERDCSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIERJQUVSRVNJUwoweDg3CTB4MDBFMQkjIExBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQUNVVEUKMHg4OAkweDAwRTAJIyBMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIEdSQVZFCjB4ODkJMHgwMEUyCSMgTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBDSVJDVU1GTEVYCjB4OEEJMHgwMEU0CSMgTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBESUFFUkVTSVMKMHg4QgkweDAwRTMJIyBMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIFRJTERFCjB4OEMJMHgwMEU1CSMgTEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBSSU5HIEFCT1ZFCjB4OEQJMHgwMEU3CSMgTEFUSU4gU01BTEwgTEVUVEVSIEMgV0lUSCBDRURJTExBCjB4OEUJMHgwMEU5CSMgTEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBBQ1VURQoweDhGCTB4MDBFOAkjIExBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggR1JBVkUKMHg5MAkweDAwRUEJIyBMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIENJUkNVTUZMRVgKMHg5MQkweDAwRUIJIyBMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIERJQUVSRVNJUwoweDkyCTB4MDBFRAkjIExBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQUNVVEUKMHg5MwkweDAwRUMJIyBMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIEdSQVZFCjB4OTQJMHgwMEVFCSMgTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBDSVJDVU1GTEVYCjB4OTUJMHgwMEVGCSMgTEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBESUFFUkVTSVMKMHg5NgkweDAwRjEJIyBMQVRJTiBTTUFMTCBMRVRURVIgTiBXSVRIIFRJTERFCjB4OTcJMHgwMEYzCSMgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBBQ1VURQoweDk4CTB4MDBGMgkjIExBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggR1JBVkUKMHg5OQkweDAwRjQJIyBMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIENJUkNVTUZMRVgKMHg5QQkweDAwRjYJIyBMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJUwoweDlCCTB4MDBGNQkjIExBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggVElMREUKMHg5QwkweDAwRkEJIyBMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIEFDVVRFCjB4OUQJMHgwMEY5CSMgTEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBHUkFWRQoweDlFCTB4MDBGQgkjIExBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQ0lSQ1VNRkxFWAoweDlGCTB4MDBGQwkjIExBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggRElBRVJFU0lTCjB4QTAJMHgyMDIwCSMgREFHR0VSCjB4QTEJMHgwMEIwCSMgREVHUkVFIFNJR04KMHhBMgkweDAwQTIJIyBDRU5UIFNJR04KMHhBMwkweDAwQTMJIyBQT1VORCBTSUdOCjB4QTQJMHgwMEE3CSMgU0VDVElPTiBTSUdOCjB4QTUJMHgyMDIyCSMgQlVMTEVUCjB4QTYJMHgwMEI2CSMgUElMQ1JPVyBTSUdOCjB4QTcJMHgwMERGCSMgTEFUSU4gU01BTEwgTEVUVEVSIFNIQVJQIFMKMHhBOAkweDAwQUUJIyBSRUdJU1RFUkVEIFNJR04KMHhBOQkweDAwQTkJIyBDT1BZUklHSFQgU0lHTgoweEFBCTB4MjEyMgkjIFRSQURFIE1BUksgU0lHTgoweEFCCTB4MDBCNAkjIEFDVVRFIEFDQ0VOVAoweEFDCTB4MDBBOAkjIERJQUVSRVNJUwoweEFECTB4MjI2MAkjIE5PVCBFUVVBTCBUTwoweEFFCTB4MDBDNgkjIExBVElOIENBUElUQUwgTEVUVEVSIEFFCjB4QUYJMHgwMEQ4CSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIFNUUk9LRQoweEIwCTB4MjIxRQkjIElORklOSVRZCjB4QjEJMHgwMEIxCSMgUExVUy1NSU5VUyBTSUdOCjB4QjIJMHgyMjY0CSMgTEVTUy1USEFOIE9SIEVRVUFMIFRPCjB4QjMJMHgyMjY1CSMgR1JFQVRFUi1USEFOIE9SIEVRVUFMIFRPCjB4QjQJMHgwMEE1CSMgWUVOIFNJR04KMHhCNQkweDAwQjUJIyBNSUNSTyBTSUdOCjB4QjYJMHgyMjAyCSMgUEFSVElBTCBESUZGRVJFTlRJQUwKMHhCNwkweDIyMTEJIyBOLUFSWSBTVU1NQVRJT04KMHhCOAkweDIyMEYJIyBOLUFSWSBQUk9EVUNUCjB4QjkJMHgwM0MwCSMgR1JFRUsgU01BTEwgTEVUVEVSIFBJCjB4QkEJMHgyMjJCCSMgSU5URUdSQUwKMHhCQgkweDAwQUEJIyBGRU1JTklORSBPUkRJTkFMIElORElDQVRPUgoweEJDCTB4MDBCQQkjIE1BU0NVTElORSBPUkRJTkFMIElORElDQVRPUgoweEJECTB4MDNBOQkjIEdSRUVLIENBUElUQUwgTEVUVEVSIE9NRUdBCjB4QkUJMHgwMEU2CSMgTEFUSU4gU01BTEwgTEVUVEVSIEFFCjB4QkYJMHgwMEY4CSMgTEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBTVFJPS0UKMHhDMAkweDAwQkYJIyBJTlZFUlRFRCBRVUVTVElPTiBNQVJLCjB4QzEJMHgwMEExCSMgSU5WRVJURUQgRVhDTEFNQVRJT04gTUFSSwoweEMyCTB4MDBBQwkjIE5PVCBTSUdOCjB4QzMJMHgyMjFBCSMgU1FVQVJFIFJPT1QKMHhDNAkweDAxOTIJIyBMQVRJTiBTTUFMTCBMRVRURVIgRiBXSVRIIEhPT0sKMHhDNQkweDIyNDgJIyBBTE1PU1QgRVFVQUwgVE8KMHhDNgkweDIyMDYJIyBJTkNSRU1FTlQKMHhDNwkweDAwQUIJIyBMRUZULVBPSU5USU5HIERPVUJMRSBBTkdMRSBRVU9UQVRJT04gTUFSSwoweEM4CTB4MDBCQgkjIFJJR0hULVBPSU5USU5HIERPVUJMRSBBTkdMRSBRVU9UQVRJT04gTUFSSwoweEM5CTB4MjAyNgkjIEhPUklaT05UQUwgRUxMSVBTSVMKMHhDQQkweDAwQTAJIyBOTy1CUkVBSyBTUEFDRQoweENCCTB4MDBDMAkjIExBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBHUkFWRQoweENDCTB4MDBDMwkjIExBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBUSUxERQoweENECTB4MDBENQkjIExBVElOIENBUElUQUwgTEVUVEVSIE8gV0lUSCBUSUxERQoweENFCTB4MDE1MgkjIExBVElOIENBUElUQUwgTElHQVRVUkUgT0UKMHhDRgkweDAxNTMJIyBMQVRJTiBTTUFMTCBMSUdBVFVSRSBPRQoweEQwCTB4MjAxMwkjIEVOIERBU0gKMHhEMQkweDIwMTQJIyBFTSBEQVNICjB4RDIJMHgyMDFDCSMgTEVGVCBET1VCTEUgUVVPVEFUSU9OIE1BUksKMHhEMwkweDIwMUQJIyBSSUdIVCBET1VCTEUgUVVPVEFUSU9OIE1BUksKMHhENAkweDIwMTgJIyBMRUZUIFNJTkdMRSBRVU9UQVRJT04gTUFSSwoweEQ1CTB4MjAxOQkjIFJJR0hUIFNJTkdMRSBRVU9UQVRJT04gTUFSSwoweEQ2CTB4MDBGNwkjIERJVklTSU9OIFNJR04KMHhENwkweDI1Q0EJIyBMT1pFTkdFCjB4RDgJMHgwMEZGCSMgTEFUSU4gU01BTEwgTEVUVEVSIFkgV0lUSCBESUFFUkVTSVMKMHhEOQkweDAxNzgJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBZIFdJVEggRElBRVJFU0lTCjB4REEJMHgyMDQ0CSMgRlJBQ1RJT04gU0xBU0gKMHhEQgkweDIwQUMJIyBFVVJPIFNJR04KMHhEQwkweDIwMzkJIyBTSU5HTEUgTEVGVC1QT0lOVElORyBBTkdMRSBRVU9UQVRJT04gTUFSSwoweERECTB4MjAzQQkjIFNJTkdMRSBSSUdIVC1QT0lOVElORyBBTkdMRSBRVU9UQVRJT04gTUFSSwoweERFCTB4RkIwMQkjIExBVElOIFNNQUxMIExJR0FUVVJFIEZJCjB4REYJMHhGQjAyCSMgTEFUSU4gU01BTEwgTElHQVRVUkUgRkwKMHhFMAkweDIwMjEJIyBET1VCTEUgREFHR0VSCjB4RTEJMHgwMEI3CSMgTUlERExFIERPVAoweEUyCTB4MjAxQQkjIFNJTkdMRSBMT1ctOSBRVU9UQVRJT04gTUFSSwoweEUzCTB4MjAxRQkjIERPVUJMRSBMT1ctOSBRVU9UQVRJT04gTUFSSwoweEU0CTB4MjAzMAkjIFBFUiBNSUxMRSBTSUdOCjB4RTUJMHgwMEMyCSMgTEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIENJUkNVTUZMRVgKMHhFNgkweDAwQ0EJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQ0lSQ1VNRkxFWAoweEU3CTB4MDBDMQkjIExBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBBQ1VURQoweEU4CTB4MDBDQgkjIExBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBESUFFUkVTSVMKMHhFOQkweDAwQzgJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggR1JBVkUKMHhFQQkweDAwQ0QJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBJIFdJVEggQUNVVEUKMHhFQgkweDAwQ0UJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBJIFdJVEggQ0lSQ1VNRkxFWAoweEVDCTB4MDBDRgkjIExBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBESUFFUkVTSVMKMHhFRAkweDAwQ0MJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBJIFdJVEggR1JBVkUKMHhFRQkweDAwRDMJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggQUNVVEUKMHhFRgkweDAwRDQJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggQ0lSQ1VNRkxFWAoweEYwCTB4RjhGRgkjIEFwcGxlIGxvZ28KMHhGMQkweDAwRDIJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggR1JBVkUKMHhGMgkweDAwREEJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggQUNVVEUKMHhGMwkweDAwREIJIyBMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggQ0lSQ1VNRkxFWAoweEY0CTB4MDBEOQkjIExBVElOIENBUElUQUwgTEVUVEVSIFUgV0lUSCBHUkFWRQoweEY1CTB4MDEzMQkjIExBVElOIFNNQUxMIExFVFRFUiBET1RMRVNTIEkKMHhGNgkweDAyQzYJIyBNT0RJRklFUiBMRVRURVIgQ0lSQ1VNRkxFWCBBQ0NFTlQKMHhGNwkweDAyREMJIyBTTUFMTCBUSUxERQoweEY4CTB4MDBBRgkjIE1BQ1JPTgoweEY5CTB4MDJEOAkjIEJSRVZFCjB4RkEJMHgwMkQ5CSMgRE9UIEFCT1ZFCjB4RkIJMHgwMkRBCSMgUklORyBBQk9WRQoweEZDCTB4MDBCOAkjIENFRElMTEEKMHhGRAkweDAyREQJIyBET1VCTEUgQUNVVEUgQUNDRU5UCjB4RkUJMHgwMkRCCSMgT0dPTkVLCjB4RkYJMHgwMkM3CSMgQ0FST04"},{ name : "AGLFN", data : "IyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQojIENvcHlyaWdodCAyMDAyLTIwMTkgQWRvYmUgKGh0dHA6Ly93d3cuYWRvYmUuY29tLykuCiMKIyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yCiMgd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUKIyBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OgojCiMgUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZQojIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nCiMgZGlzY2xhaW1lci4KIwojIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUKIyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZwojIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscwojIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi4KIwojIE5laXRoZXIgdGhlIG5hbWUgb2YgQWRvYmUgbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzCiMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzCiMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uCiMKIyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQKIyBDT05UUklCVVRPUlMgIkFTIElTIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLAojIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GCiMgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUKIyBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUgojIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLAojIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVAojIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOwojIExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pCiMgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOCiMgQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SCiMgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUwojIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLgojIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiMgTmFtZTogICAgICAgICAgQWRvYmUgR2x5cGggTGlzdCBGb3IgTmV3IEZvbnRzCiMgVGFibGUgdmVyc2lvbjogMS43CiMgRGF0ZTogICAgICAgICAgTm92ZW1iZXIgNiwgMjAwOAojIFVSTDogICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hZG9iZS10eXBlLXRvb2xzL2FnbC1hZ2xmbgojCiMgRGVzY3JpcHRpb246CiMKIyBBR0xGTiAoQWRvYmUgR2x5cGggTGlzdCBGb3IgTmV3IEZvbnRzKSBwcm92aWRlcyBhIGxpc3Qgb2YgYmFzZSBnbHlwaAojIG5hbWVzIHRoYXQgYXJlIHJlY29tbWVuZGVkIGZvciBuZXcgZm9udHMsIHdoaWNoIGFyZSBjb21wYXRpYmxlIHdpdGgKIyB0aGUgQUdMIChBZG9iZSBHbHlwaCBMaXN0KSBTcGVjaWZpY2F0aW9uLCBhbmQgd2hpY2ggc2hvdWxkIGJlIHVzZWQKIyBhcyBkZXNjcmliZWQgaW4gU2VjdGlvbiA2IG9mIHRoYXQgZG9jdW1lbnQuIEFHTEZOIGNvbXByaXNlcyB0aGUgc2V0CiMgb2YgZ2x5cGggbmFtZXMgZnJvbSBBR0wgdGhhdCBtYXAgdmlhIHRoZSBBR0wgU3BlY2lmaWNhdGlvbiBydWxlcyB0bwojIHRoZSBzZW1hbnRpY2FsbHkgY29ycmVjdCBVViAoVW5pY29kZSBWYWx1ZSkuIEZvciBleGFtcGxlLCAiQXNtYWxsIgojIGlzIG9taXR0ZWQgYmVjYXVzZSBBR0wgbWFwcyB0aGlzIGdseXBoIG5hbWUgdG8gdGhlIFBVQSAoUHJpdmF0ZSBVc2UKIyBBcmVhKSB2YWx1ZSBVK0Y3NjEsIHJhdGhlciB0aGFuIHRvIHRoZSBVViB0aGF0IG1hcHMgZnJvbSB0aGUgZ2x5cGgKIyBuYW1lICJBLiIgQWxzbyBvbWl0dGVkIGlzICJmZmksIiBiZWNhdXNlIEFHTCBtYXBzIHRoaXMgdG8gdGhlCiMgQWxwaGFiZXRpYyBQcmVzZW50YXRpb24gRm9ybXMgdmFsdWUgVStGQjAzLCByYXRoZXIgdGhhbiBkZWNvbXBvc2luZwojIGl0IGludG8gdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiB0aHJlZSBVVnM6IFUrMDA2NiwgVSswMDY2LCBhbmQKIyBVKzAwNjkuIFRoZSBuYW1lICJhcnJvd3ZlcnRleCIgaGFzIGJlZW4gb21pdHRlZCBiZWNhdXNlIHRoaXMgZ2x5cGgKIyBub3cgaGFzIGEgcmVhbCBVViwgYW5kIEFHTCBpcyBub3cgaW5jb3JyZWN0IGluIG1hcHBpbmcgaXQgdG8gdGhlIFBVQQojIHZhbHVlIFUrRjhFNi4gSWYgeW91IGRvIG5vdCBmaW5kIGFuIGFwcHJvcHJpYXRlIG5hbWUgZm9yIHlvdXIgZ2x5cGgKIyBpbiB0aGlzIGxpc3QsIHRoZW4gcGxlYXNlIHJlZmVyIHRvIFNlY3Rpb24gNiBvZiB0aGUgQUdMCiMgU3BlY2lmaWNhdGlvbi4KIwojIEZvcm1hdDogdGhyZWUgc2VtaWNvbG9uLWRlbGltaXRlZCBmaWVsZHM6CiMgICAoMSkgU3RhbmRhcmQgVVYgb3IgQ1VTIFVWLS1mb3VyIHVwcGVyY2FzZSBoZXhhZGVjaW1hbCBkaWdpdHMKIyAgICgyKSBHbHlwaCBuYW1lLS11cHBlci9sb3dlcmNhc2UgbGV0dGVycyBhbmQgZGlnaXRzCiMgICAoMykgQ2hhcmFjdGVyIG5hbWVzOiBVbmljb2RlIGNoYXJhY3RlciBuYW1lcyBmb3Igc3RhbmRhcmQgVVZzLCBhbmQKIyAgICAgICBkZXNjcmlwdGl2ZSBuYW1lcyBmb3IgQ1VTIFVWcy0tdXBwZXJjYXNlIGxldHRlcnMsIGh5cGhlbiwgYW5kCiMgICAgICAgc3BhY2UKIwojIFRoZSByZWNvcmRzIGFyZSBzb3J0ZWQgYnkgZ2x5cGggbmFtZSBpbiBpbmNyZWFzaW5nIEFTQ0lJIG9yZGVyLAojIGVudHJpZXMgd2l0aCB0aGUgc2FtZSBnbHlwaCBuYW1lIGFyZSBzb3J0ZWQgaW4gZGVjcmVhc2luZyBwcmlvcml0eQojIG9yZGVyLCB0aGUgVVZzIGFuZCBVbmljb2RlIGNoYXJhY3RlciBuYW1lcyBhcmUgcHJvdmlkZWQgZm9yCiMgY29udmVuaWVuY2UsIGxpbmVzIHN0YXJ0aW5nIHdpdGggIiMiIGFyZSBjb21tZW50cywgYW5kIGJsYW5rIGxpbmVzCiMgc2hvdWxkIGJlIGlnbm9yZWQuCiMKIyBSZXZpc2lvbiBIaXN0b3J5OgojCiMgMS43IFs2IE5vdmVtYmVyIDIwMDhdCiMgLSBSZXZlcnRlZCB0byB0aGUgb3JpZ2luYWwgMS40IGFuZCBlYXJsaWVyIG1hcHBpbmdzIGZvciBEZWx0YSwKIyAgIE9tZWdhLCBhbmQgbXUuCiMgLSBSZW1vdmVkIG1hcHBpbmdzIGZvciAiYWZpaSIgbmFtZXMuIFRoZXNlIHNob3VsZCBub3cgYmUgYXNzaWduZWQKIyAgICJ1bmkiIG5hbWVzLgojIC0gUmVtb3ZlZCBtYXBwaW5ncyBmb3IgImNvbW1hYWNjZW50IiBuYW1lcy4gVGhlc2Ugc2hvdWxkIG5vdyBiZQojICAgYXNzaWduZWQgInVuaSIgbmFtZXMuCiMKIyAxLjYgWzMwIEphbnVhcnkgMjAwNl0KIyAtIENvbXBsZXRlZCB3b3JrIGludGVuZGVkIGluIDEuNS4KIwojIDEuNSBbMjMgTm92ZW1iZXIgMjAwNV0KIyAtIFJlbW92ZWQgZHVwbGljYXRlZCBibG9jayBhdCBlbmQgb2YgZmlsZS4KIyAtIENoYW5nZWQgbWFwcGluZ3M6CiMgICAyMjA2O0RlbHRhO0lOQ1JFTUVOVCBjaGFuZ2VkIHRvIDAzOTQ7RGVsdGE7R1JFRUsgQ0FQSVRBTCBMRVRURVIgREVMVEEKIyAgIDIxMjY7T21lZ2E7T0hNIFNJR04gY2hhbmdlZCB0byAwM0E5O09tZWdhO0dSRUVLIENBUElUQUwgTEVUVEVSIE9NRUdBCiMgICAwM0JDO211O01JQ1JPIFNJR04gY2hhbmdlZCB0byAwM0JDO211O0dSRUVLIFNNQUxMIExFVFRFUiBNVQojIC0gQ29ycmVjdGVkIHN0YXRlbWVudCBhYm92ZSBhYm91dCB3aHkgImZmaSIgaXMgb21pdHRlZC4KIwojIDEuNCBbMjQgU2VwdGVtYmVyIDIwMDNdCiMgLSBDaGFuZ2VkIHZlcnNpb24gdG8gMS40LCB0byBhdm9pZCBjb25mdXNpb24gd2l0aCB0aGUgQUdMIDEuMy4KIyAtIEZpeGVkIHNwZWxsaW5nIGVycm9ycyBpbiB0aGUgaGVhZGVyLgojIC0gRnVsbHkgcmVtb3ZlZCAiYXJyb3d2ZXJ0ZXgsIiBhcyBpdCBpcyBtYXBwZWQgb25seSB0byBhIFBVQSBVbmljb2RlCiMgICB2YWx1ZSBpbiBzb21lIGZvbnRzLgojCiMgMS4xIFsxNyBBcHJpbCAyMDAzXQojIC0gUmVuYW1lZCBbVHRdY2VkaWxsYSBiYWNrIHRvIFtUdF1jb21tYWFjY2VudC4KIwojIDEuMCBbMzEgSmFudWFyeSAyMDAzXQojIC0gT3JpZ2luYWwgdmVyc2lvbi4KIyAtIERlcml2ZWQgZnJvbSB0aGUgQUdMdjEuMiBieToKIyAgIHJlbW92aW5nIHRoZSBQVUEgYXJlYSBjb2RlczsKIyAgIHJlbW92aW5nIGR1cGxpY2F0ZSBVbmljb2RlIG1hcHBpbmdzOyBhbmQKIyAgIHJlbmFtaW5nICJ0Y29tbWFhY2NlbnQiIHRvICJ0Y2VkaWxsYSIgYW5kICJUY29tbWFhY2NlbnQiIHRvICJUY2VkaWxsYSIKIwowMDQxO0E7TEFUSU4gQ0FQSVRBTCBMRVRURVIgQQowMEM2O0FFO0xBVElOIENBUElUQUwgTEVUVEVSIEFFCjAxRkM7QUVhY3V0ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBBRSBXSVRIIEFDVVRFCjAwQzE7QWFjdXRlO0xBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBBQ1VURQowMTAyO0FicmV2ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggQlJFVkUKMDBDMjtBY2lyY3VtZmxleDtMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggQ0lSQ1VNRkxFWAowMEM0O0FkaWVyZXNpcztMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggRElBRVJFU0lTCjAwQzA7QWdyYXZlO0xBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBHUkFWRQowMzkxO0FscGhhO0dSRUVLIENBUElUQUwgTEVUVEVSIEFMUEhBCjAzODY7QWxwaGF0b25vcztHUkVFSyBDQVBJVEFMIExFVFRFUiBBTFBIQSBXSVRIIFRPTk9TCjAxMDA7QW1hY3JvbjtMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggTUFDUk9OCjAxMDQ7QW9nb25laztMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggT0dPTkVLCjAwQzU7QXJpbmc7TEFUSU4gQ0FQSVRBTCBMRVRURVIgQSBXSVRIIFJJTkcgQUJPVkUKMDFGQTtBcmluZ2FjdXRlO0xBVElOIENBUElUQUwgTEVUVEVSIEEgV0lUSCBSSU5HIEFCT1ZFIEFORCBBQ1VURQowMEMzO0F0aWxkZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBBIFdJVEggVElMREUKMDA0MjtCO0xBVElOIENBUElUQUwgTEVUVEVSIEIKMDM5MjtCZXRhO0dSRUVLIENBUElUQUwgTEVUVEVSIEJFVEEKMDA0MztDO0xBVElOIENBUElUQUwgTEVUVEVSIEMKMDEwNjtDYWN1dGU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgQyBXSVRIIEFDVVRFCjAxMEM7Q2Nhcm9uO0xBVElOIENBUElUQUwgTEVUVEVSIEMgV0lUSCBDQVJPTgowMEM3O0NjZWRpbGxhO0xBVElOIENBUElUQUwgTEVUVEVSIEMgV0lUSCBDRURJTExBCjAxMDg7Q2NpcmN1bWZsZXg7TEFUSU4gQ0FQSVRBTCBMRVRURVIgQyBXSVRIIENJUkNVTUZMRVgKMDEwQTtDZG90YWNjZW50O0xBVElOIENBUElUQUwgTEVUVEVSIEMgV0lUSCBET1QgQUJPVkUKMDNBNztDaGk7R1JFRUsgQ0FQSVRBTCBMRVRURVIgQ0hJCjAwNDQ7RDtMQVRJTiBDQVBJVEFMIExFVFRFUiBECjAxMEU7RGNhcm9uO0xBVElOIENBUElUQUwgTEVUVEVSIEQgV0lUSCBDQVJPTgowMTEwO0Rjcm9hdDtMQVRJTiBDQVBJVEFMIExFVFRFUiBEIFdJVEggU1RST0tFCjIyMDY7RGVsdGE7SU5DUkVNRU5UCjAwNDU7RTtMQVRJTiBDQVBJVEFMIExFVFRFUiBFCjAwQzk7RWFjdXRlO0xBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBBQ1VURQowMTE0O0VicmV2ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggQlJFVkUKMDExQTtFY2Fyb247TEFUSU4gQ0FQSVRBTCBMRVRURVIgRSBXSVRIIENBUk9OCjAwQ0E7RWNpcmN1bWZsZXg7TEFUSU4gQ0FQSVRBTCBMRVRURVIgRSBXSVRIIENJUkNVTUZMRVgKMDBDQjtFZGllcmVzaXM7TEFUSU4gQ0FQSVRBTCBMRVRURVIgRSBXSVRIIERJQUVSRVNJUwowMTE2O0Vkb3RhY2NlbnQ7TEFUSU4gQ0FQSVRBTCBMRVRURVIgRSBXSVRIIERPVCBBQk9WRQowMEM4O0VncmF2ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggR1JBVkUKMDExMjtFbWFjcm9uO0xBVElOIENBUElUQUwgTEVUVEVSIEUgV0lUSCBNQUNST04KMDE0QTtFbmc7TEFUSU4gQ0FQSVRBTCBMRVRURVIgRU5HCjAxMTg7RW9nb25laztMQVRJTiBDQVBJVEFMIExFVFRFUiBFIFdJVEggT0dPTkVLCjAzOTU7RXBzaWxvbjtHUkVFSyBDQVBJVEFMIExFVFRFUiBFUFNJTE9OCjAzODg7RXBzaWxvbnRvbm9zO0dSRUVLIENBUElUQUwgTEVUVEVSIEVQU0lMT04gV0lUSCBUT05PUwowMzk3O0V0YTtHUkVFSyBDQVBJVEFMIExFVFRFUiBFVEEKMDM4OTtFdGF0b25vcztHUkVFSyBDQVBJVEFMIExFVFRFUiBFVEEgV0lUSCBUT05PUwowMEQwO0V0aDtMQVRJTiBDQVBJVEFMIExFVFRFUiBFVEgKMjBBQztFdXJvO0VVUk8gU0lHTgowMDQ2O0Y7TEFUSU4gQ0FQSVRBTCBMRVRURVIgRgowMDQ3O0c7TEFUSU4gQ0FQSVRBTCBMRVRURVIgRwowMzkzO0dhbW1hO0dSRUVLIENBUElUQUwgTEVUVEVSIEdBTU1BCjAxMUU7R2JyZXZlO0xBVElOIENBUElUQUwgTEVUVEVSIEcgV0lUSCBCUkVWRQowMUU2O0djYXJvbjtMQVRJTiBDQVBJVEFMIExFVFRFUiBHIFdJVEggQ0FST04KMDExQztHY2lyY3VtZmxleDtMQVRJTiBDQVBJVEFMIExFVFRFUiBHIFdJVEggQ0lSQ1VNRkxFWAowMTIwO0dkb3RhY2NlbnQ7TEFUSU4gQ0FQSVRBTCBMRVRURVIgRyBXSVRIIERPVCBBQk9WRQowMDQ4O0g7TEFUSU4gQ0FQSVRBTCBMRVRURVIgSAoyNUNGO0gxODUzMztCTEFDSyBDSVJDTEUKMjVBQTtIMTg1NDM7QkxBQ0sgU01BTEwgU1FVQVJFCjI1QUI7SDE4NTUxO1dISVRFIFNNQUxMIFNRVUFSRQoyNUExO0gyMjA3MztXSElURSBTUVVBUkUKMDEyNjtIYmFyO0xBVElOIENBUElUQUwgTEVUVEVSIEggV0lUSCBTVFJPS0UKMDEyNDtIY2lyY3VtZmxleDtMQVRJTiBDQVBJVEFMIExFVFRFUiBIIFdJVEggQ0lSQ1VNRkxFWAowMDQ5O0k7TEFUSU4gQ0FQSVRBTCBMRVRURVIgSQowMTMyO0lKO0xBVElOIENBUElUQUwgTElHQVRVUkUgSUoKMDBDRDtJYWN1dGU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgSSBXSVRIIEFDVVRFCjAxMkM7SWJyZXZlO0xBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBCUkVWRQowMENFO0ljaXJjdW1mbGV4O0xBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBDSVJDVU1GTEVYCjAwQ0Y7SWRpZXJlc2lzO0xBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBESUFFUkVTSVMKMDEzMDtJZG90YWNjZW50O0xBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBET1QgQUJPVkUKMjExMTtJZnJha3R1cjtCTEFDSy1MRVRURVIgQ0FQSVRBTCBJCjAwQ0M7SWdyYXZlO0xBVElOIENBUElUQUwgTEVUVEVSIEkgV0lUSCBHUkFWRQowMTJBO0ltYWNyb247TEFUSU4gQ0FQSVRBTCBMRVRURVIgSSBXSVRIIE1BQ1JPTgowMTJFO0lvZ29uZWs7TEFUSU4gQ0FQSVRBTCBMRVRURVIgSSBXSVRIIE9HT05FSwowMzk5O0lvdGE7R1JFRUsgQ0FQSVRBTCBMRVRURVIgSU9UQQowM0FBO0lvdGFkaWVyZXNpcztHUkVFSyBDQVBJVEFMIExFVFRFUiBJT1RBIFdJVEggRElBTFlUSUtBCjAzOEE7SW90YXRvbm9zO0dSRUVLIENBUElUQUwgTEVUVEVSIElPVEEgV0lUSCBUT05PUwowMTI4O0l0aWxkZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBJIFdJVEggVElMREUKMDA0QTtKO0xBVElOIENBUElUQUwgTEVUVEVSIEoKMDEzNDtKY2lyY3VtZmxleDtMQVRJTiBDQVBJVEFMIExFVFRFUiBKIFdJVEggQ0lSQ1VNRkxFWAowMDRCO0s7TEFUSU4gQ0FQSVRBTCBMRVRURVIgSwowMzlBO0thcHBhO0dSRUVLIENBUElUQUwgTEVUVEVSIEtBUFBBCjAwNEM7TDtMQVRJTiBDQVBJVEFMIExFVFRFUiBMCjAxMzk7TGFjdXRlO0xBVElOIENBUElUQUwgTEVUVEVSIEwgV0lUSCBBQ1VURQowMzlCO0xhbWJkYTtHUkVFSyBDQVBJVEFMIExFVFRFUiBMQU1EQQowMTNEO0xjYXJvbjtMQVRJTiBDQVBJVEFMIExFVFRFUiBMIFdJVEggQ0FST04KMDEzRjtMZG90O0xBVElOIENBUElUQUwgTEVUVEVSIEwgV0lUSCBNSURETEUgRE9UCjAxNDE7THNsYXNoO0xBVElOIENBUElUQUwgTEVUVEVSIEwgV0lUSCBTVFJPS0UKMDA0RDtNO0xBVElOIENBUElUQUwgTEVUVEVSIE0KMDM5QztNdTtHUkVFSyBDQVBJVEFMIExFVFRFUiBNVQowMDRFO047TEFUSU4gQ0FQSVRBTCBMRVRURVIgTgowMTQzO05hY3V0ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBOIFdJVEggQUNVVEUKMDE0NztOY2Fyb247TEFUSU4gQ0FQSVRBTCBMRVRURVIgTiBXSVRIIENBUk9OCjAwRDE7TnRpbGRlO0xBVElOIENBUElUQUwgTEVUVEVSIE4gV0lUSCBUSUxERQowMzlEO051O0dSRUVLIENBUElUQUwgTEVUVEVSIE5VCjAwNEY7TztMQVRJTiBDQVBJVEFMIExFVFRFUiBPCjAxNTI7T0U7TEFUSU4gQ0FQSVRBTCBMSUdBVFVSRSBPRQowMEQzO09hY3V0ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggQUNVVEUKMDE0RTtPYnJldmU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIEJSRVZFCjAwRDQ7T2NpcmN1bWZsZXg7TEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIENJUkNVTUZMRVgKMDBENjtPZGllcmVzaXM7TEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJUwowMEQyO09ncmF2ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggR1JBVkUKMDFBMDtPaG9ybjtMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggSE9STgowMTUwO09odW5nYXJ1bWxhdXQ7TEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIERPVUJMRSBBQ1VURQowMTRDO09tYWNyb247TEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIE1BQ1JPTgoyMTI2O09tZWdhO09ITSBTSUdOCjAzOEY7T21lZ2F0b25vcztHUkVFSyBDQVBJVEFMIExFVFRFUiBPTUVHQSBXSVRIIFRPTk9TCjAzOUY7T21pY3JvbjtHUkVFSyBDQVBJVEFMIExFVFRFUiBPTUlDUk9OCjAzOEM7T21pY3JvbnRvbm9zO0dSRUVLIENBUElUQUwgTEVUVEVSIE9NSUNST04gV0lUSCBUT05PUwowMEQ4O09zbGFzaDtMQVRJTiBDQVBJVEFMIExFVFRFUiBPIFdJVEggU1RST0tFCjAxRkU7T3NsYXNoYWN1dGU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIFNUUk9LRSBBTkQgQUNVVEUKMDBENTtPdGlsZGU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgTyBXSVRIIFRJTERFCjAwNTA7UDtMQVRJTiBDQVBJVEFMIExFVFRFUiBQCjAzQTY7UGhpO0dSRUVLIENBUElUQUwgTEVUVEVSIFBISQowM0EwO1BpO0dSRUVLIENBUElUQUwgTEVUVEVSIFBJCjAzQTg7UHNpO0dSRUVLIENBUElUQUwgTEVUVEVSIFBTSQowMDUxO1E7TEFUSU4gQ0FQSVRBTCBMRVRURVIgUQowMDUyO1I7TEFUSU4gQ0FQSVRBTCBMRVRURVIgUgowMTU0O1JhY3V0ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBSIFdJVEggQUNVVEUKMDE1ODtSY2Fyb247TEFUSU4gQ0FQSVRBTCBMRVRURVIgUiBXSVRIIENBUk9OCjIxMUM7UmZyYWt0dXI7QkxBQ0stTEVUVEVSIENBUElUQUwgUgowM0ExO1JobztHUkVFSyBDQVBJVEFMIExFVFRFUiBSSE8KMDA1MztTO0xBVElOIENBUElUQUwgTEVUVEVSIFMKMjUwQztTRjAxMDAwMDtCT1ggRFJBV0lOR1MgTElHSFQgRE9XTiBBTkQgUklHSFQKMjUxNDtTRjAyMDAwMDtCT1ggRFJBV0lOR1MgTElHSFQgVVAgQU5EIFJJR0hUCjI1MTA7U0YwMzAwMDA7Qk9YIERSQVdJTkdTIExJR0hUIERPV04gQU5EIExFRlQKMjUxODtTRjA0MDAwMDtCT1ggRFJBV0lOR1MgTElHSFQgVVAgQU5EIExFRlQKMjUzQztTRjA1MDAwMDtCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIEhPUklaT05UQUwKMjUyQztTRjA2MDAwMDtCT1ggRFJBV0lOR1MgTElHSFQgRE9XTiBBTkQgSE9SSVpPTlRBTAoyNTM0O1NGMDcwMDAwO0JPWCBEUkFXSU5HUyBMSUdIVCBVUCBBTkQgSE9SSVpPTlRBTAoyNTFDO1NGMDgwMDAwO0JPWCBEUkFXSU5HUyBMSUdIVCBWRVJUSUNBTCBBTkQgUklHSFQKMjUyNDtTRjA5MDAwMDtCT1ggRFJBV0lOR1MgTElHSFQgVkVSVElDQUwgQU5EIExFRlQKMjUwMDtTRjEwMDAwMDtCT1ggRFJBV0lOR1MgTElHSFQgSE9SSVpPTlRBTAoyNTAyO1NGMTEwMDAwO0JPWCBEUkFXSU5HUyBMSUdIVCBWRVJUSUNBTAoyNTYxO1NGMTkwMDAwO0JPWCBEUkFXSU5HUyBWRVJUSUNBTCBTSU5HTEUgQU5EIExFRlQgRE9VQkxFCjI1NjI7U0YyMDAwMDA7Qk9YIERSQVdJTkdTIFZFUlRJQ0FMIERPVUJMRSBBTkQgTEVGVCBTSU5HTEUKMjU1NjtTRjIxMDAwMDtCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIExFRlQgU0lOR0xFCjI1NTU7U0YyMjAwMDA7Qk9YIERSQVdJTkdTIERPV04gU0lOR0xFIEFORCBMRUZUIERPVUJMRQoyNTYzO1NGMjMwMDAwO0JPWCBEUkFXSU5HUyBET1VCTEUgVkVSVElDQUwgQU5EIExFRlQKMjU1MTtTRjI0MDAwMDtCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMCjI1NTc7U0YyNTAwMDA7Qk9YIERSQVdJTkdTIERPVUJMRSBET1dOIEFORCBMRUZUCjI1NUQ7U0YyNjAwMDA7Qk9YIERSQVdJTkdTIERPVUJMRSBVUCBBTkQgTEVGVAoyNTVDO1NGMjcwMDAwO0JPWCBEUkFXSU5HUyBVUCBET1VCTEUgQU5EIExFRlQgU0lOR0xFCjI1NUI7U0YyODAwMDA7Qk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgTEVGVCBET1VCTEUKMjU1RTtTRjM2MDAwMDtCT1ggRFJBV0lOR1MgVkVSVElDQUwgU0lOR0xFIEFORCBSSUdIVCBET1VCTEUKMjU1RjtTRjM3MDAwMDtCT1ggRFJBV0lOR1MgVkVSVElDQUwgRE9VQkxFIEFORCBSSUdIVCBTSU5HTEUKMjU1QTtTRjM4MDAwMDtCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBSSUdIVAoyNTU0O1NGMzkwMDAwO0JPWCBEUkFXSU5HUyBET1VCTEUgRE9XTiBBTkQgUklHSFQKMjU2OTtTRjQwMDAwMDtCT1ggRFJBV0lOR1MgRE9VQkxFIFVQIEFORCBIT1JJWk9OVEFMCjI1NjY7U0Y0MTAwMDA7Qk9YIERSQVdJTkdTIERPVUJMRSBET1dOIEFORCBIT1JJWk9OVEFMCjI1NjA7U0Y0MjAwMDA7Qk9YIERSQVdJTkdTIERPVUJMRSBWRVJUSUNBTCBBTkQgUklHSFQKMjU1MDtTRjQzMDAwMDtCT1ggRFJBV0lOR1MgRE9VQkxFIEhPUklaT05UQUwKMjU2QztTRjQ0MDAwMDtCT1ggRFJBV0lOR1MgRE9VQkxFIFZFUlRJQ0FMIEFORCBIT1JJWk9OVEFMCjI1Njc7U0Y0NTAwMDA7Qk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEUKMjU2ODtTRjQ2MDAwMDtCT1ggRFJBV0lOR1MgVVAgRE9VQkxFIEFORCBIT1JJWk9OVEFMIFNJTkdMRQoyNTY0O1NGNDcwMDAwO0JPWCBEUkFXSU5HUyBET1dOIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEUKMjU2NTtTRjQ4MDAwMDtCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIEhPUklaT05UQUwgU0lOR0xFCjI1NTk7U0Y0OTAwMDA7Qk9YIERSQVdJTkdTIFVQIERPVUJMRSBBTkQgUklHSFQgU0lOR0xFCjI1NTg7U0Y1MDAwMDA7Qk9YIERSQVdJTkdTIFVQIFNJTkdMRSBBTkQgUklHSFQgRE9VQkxFCjI1NTI7U0Y1MTAwMDA7Qk9YIERSQVdJTkdTIERPV04gU0lOR0xFIEFORCBSSUdIVCBET1VCTEUKMjU1MztTRjUyMDAwMDtCT1ggRFJBV0lOR1MgRE9XTiBET1VCTEUgQU5EIFJJR0hUIFNJTkdMRQoyNTZCO1NGNTMwMDAwO0JPWCBEUkFXSU5HUyBWRVJUSUNBTCBET1VCTEUgQU5EIEhPUklaT05UQUwgU0lOR0xFCjI1NkE7U0Y1NDAwMDA7Qk9YIERSQVdJTkdTIFZFUlRJQ0FMIFNJTkdMRSBBTkQgSE9SSVpPTlRBTCBET1VCTEUKMDE1QTtTYWN1dGU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgUyBXSVRIIEFDVVRFCjAxNjA7U2Nhcm9uO0xBVElOIENBUElUQUwgTEVUVEVSIFMgV0lUSCBDQVJPTgowMTVFO1NjZWRpbGxhO0xBVElOIENBUElUQUwgTEVUVEVSIFMgV0lUSCBDRURJTExBCjAxNUM7U2NpcmN1bWZsZXg7TEFUSU4gQ0FQSVRBTCBMRVRURVIgUyBXSVRIIENJUkNVTUZMRVgKMDNBMztTaWdtYTtHUkVFSyBDQVBJVEFMIExFVFRFUiBTSUdNQQowMDU0O1Q7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVAowM0E0O1RhdTtHUkVFSyBDQVBJVEFMIExFVFRFUiBUQVUKMDE2NjtUYmFyO0xBVElOIENBUElUQUwgTEVUVEVSIFQgV0lUSCBTVFJPS0UKMDE2NDtUY2Fyb247TEFUSU4gQ0FQSVRBTCBMRVRURVIgVCBXSVRIIENBUk9OCjAzOTg7VGhldGE7R1JFRUsgQ0FQSVRBTCBMRVRURVIgVEhFVEEKMDBERTtUaG9ybjtMQVRJTiBDQVBJVEFMIExFVFRFUiBUSE9STgowMDU1O1U7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVQowMERBO1VhY3V0ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggQUNVVEUKMDE2QztVYnJldmU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIEJSRVZFCjAwREI7VWNpcmN1bWZsZXg7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIENJUkNVTUZMRVgKMDBEQztVZGllcmVzaXM7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIERJQUVSRVNJUwowMEQ5O1VncmF2ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggR1JBVkUKMDFBRjtVaG9ybjtMQVRJTiBDQVBJVEFMIExFVFRFUiBVIFdJVEggSE9STgowMTcwO1VodW5nYXJ1bWxhdXQ7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIERPVUJMRSBBQ1VURQowMTZBO1VtYWNyb247TEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIE1BQ1JPTgowMTcyO1VvZ29uZWs7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVSBXSVRIIE9HT05FSwowM0E1O1Vwc2lsb247R1JFRUsgQ0FQSVRBTCBMRVRURVIgVVBTSUxPTgowM0QyO1Vwc2lsb24xO0dSRUVLIFVQU0lMT04gV0lUSCBIT09LIFNZTUJPTAowM0FCO1Vwc2lsb25kaWVyZXNpcztHUkVFSyBDQVBJVEFMIExFVFRFUiBVUFNJTE9OIFdJVEggRElBTFlUSUtBCjAzOEU7VXBzaWxvbnRvbm9zO0dSRUVLIENBUElUQUwgTEVUVEVSIFVQU0lMT04gV0lUSCBUT05PUwowMTZFO1VyaW5nO0xBVElOIENBUElUQUwgTEVUVEVSIFUgV0lUSCBSSU5HIEFCT1ZFCjAxNjg7VXRpbGRlO0xBVElOIENBUElUQUwgTEVUVEVSIFUgV0lUSCBUSUxERQowMDU2O1Y7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVgowMDU3O1c7TEFUSU4gQ0FQSVRBTCBMRVRURVIgVwoxRTgyO1dhY3V0ZTtMQVRJTiBDQVBJVEFMIExFVFRFUiBXIFdJVEggQUNVVEUKMDE3NDtXY2lyY3VtZmxleDtMQVRJTiBDQVBJVEFMIExFVFRFUiBXIFdJVEggQ0lSQ1VNRkxFWAoxRTg0O1dkaWVyZXNpcztMQVRJTiBDQVBJVEFMIExFVFRFUiBXIFdJVEggRElBRVJFU0lTCjFFODA7V2dyYXZlO0xBVElOIENBUElUQUwgTEVUVEVSIFcgV0lUSCBHUkFWRQowMDU4O1g7TEFUSU4gQ0FQSVRBTCBMRVRURVIgWAowMzlFO1hpO0dSRUVLIENBUElUQUwgTEVUVEVSIFhJCjAwNTk7WTtMQVRJTiBDQVBJVEFMIExFVFRFUiBZCjAwREQ7WWFjdXRlO0xBVElOIENBUElUQUwgTEVUVEVSIFkgV0lUSCBBQ1VURQowMTc2O1ljaXJjdW1mbGV4O0xBVElOIENBUElUQUwgTEVUVEVSIFkgV0lUSCBDSVJDVU1GTEVYCjAxNzg7WWRpZXJlc2lzO0xBVElOIENBUElUQUwgTEVUVEVSIFkgV0lUSCBESUFFUkVTSVMKMUVGMjtZZ3JhdmU7TEFUSU4gQ0FQSVRBTCBMRVRURVIgWSBXSVRIIEdSQVZFCjAwNUE7WjtMQVRJTiBDQVBJVEFMIExFVFRFUiBaCjAxNzk7WmFjdXRlO0xBVElOIENBUElUQUwgTEVUVEVSIFogV0lUSCBBQ1VURQowMTdEO1pjYXJvbjtMQVRJTiBDQVBJVEFMIExFVFRFUiBaIFdJVEggQ0FST04KMDE3QjtaZG90YWNjZW50O0xBVElOIENBUElUQUwgTEVUVEVSIFogV0lUSCBET1QgQUJPVkUKMDM5NjtaZXRhO0dSRUVLIENBUElUQUwgTEVUVEVSIFpFVEEKMDA2MTthO0xBVElOIFNNQUxMIExFVFRFUiBBCjAwRTE7YWFjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQUNVVEUKMDEwMzthYnJldmU7TEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBCUkVWRQowMEUyO2FjaXJjdW1mbGV4O0xBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggQ0lSQ1VNRkxFWAowMEI0O2FjdXRlO0FDVVRFIEFDQ0VOVAowMzAxO2FjdXRlY29tYjtDT01CSU5JTkcgQUNVVEUgQUNDRU5UCjAwRTQ7YWRpZXJlc2lzO0xBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggRElBRVJFU0lTCjAwRTY7YWU7TEFUSU4gU01BTEwgTEVUVEVSIEFFCjAxRkQ7YWVhY3V0ZTtMQVRJTiBTTUFMTCBMRVRURVIgQUUgV0lUSCBBQ1VURQowMEUwO2FncmF2ZTtMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIEdSQVZFCjIxMzU7YWxlcGg7QUxFRiBTWU1CT0wKMDNCMTthbHBoYTtHUkVFSyBTTUFMTCBMRVRURVIgQUxQSEEKMDNBQzthbHBoYXRvbm9zO0dSRUVLIFNNQUxMIExFVFRFUiBBTFBIQSBXSVRIIFRPTk9TCjAxMDE7YW1hY3JvbjtMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIE1BQ1JPTgowMDI2O2FtcGVyc2FuZDtBTVBFUlNBTkQKMjIyMDthbmdsZTtBTkdMRQoyMzI5O2FuZ2xlbGVmdDtMRUZULVBPSU5USU5HIEFOR0xFIEJSQUNLRVQKMjMyQTthbmdsZXJpZ2h0O1JJR0hULVBPSU5USU5HIEFOR0xFIEJSQUNLRVQKMDM4Nzthbm90ZWxlaWE7R1JFRUsgQU5PIFRFTEVJQQowMTA1O2FvZ29uZWs7TEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBPR09ORUsKMjI0ODthcHByb3hlcXVhbDtBTE1PU1QgRVFVQUwgVE8KMDBFNTthcmluZztMQVRJTiBTTUFMTCBMRVRURVIgQSBXSVRIIFJJTkcgQUJPVkUKMDFGQjthcmluZ2FjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBBIFdJVEggUklORyBBQk9WRSBBTkQgQUNVVEUKMjE5NDthcnJvd2JvdGg7TEVGVCBSSUdIVCBBUlJPVwoyMUQ0O2Fycm93ZGJsYm90aDtMRUZUIFJJR0hUIERPVUJMRSBBUlJPVwoyMUQzO2Fycm93ZGJsZG93bjtET1dOV0FSRFMgRE9VQkxFIEFSUk9XCjIxRDA7YXJyb3dkYmxsZWZ0O0xFRlRXQVJEUyBET1VCTEUgQVJST1cKMjFEMjthcnJvd2RibHJpZ2h0O1JJR0hUV0FSRFMgRE9VQkxFIEFSUk9XCjIxRDE7YXJyb3dkYmx1cDtVUFdBUkRTIERPVUJMRSBBUlJPVwoyMTkzO2Fycm93ZG93bjtET1dOV0FSRFMgQVJST1cKMjE5MDthcnJvd2xlZnQ7TEVGVFdBUkRTIEFSUk9XCjIxOTI7YXJyb3dyaWdodDtSSUdIVFdBUkRTIEFSUk9XCjIxOTE7YXJyb3d1cDtVUFdBUkRTIEFSUk9XCjIxOTU7YXJyb3d1cGRuO1VQIERPV04gQVJST1cKMjFBODthcnJvd3VwZG5ic2U7VVAgRE9XTiBBUlJPVyBXSVRIIEJBU0UKMDA1RTthc2NpaWNpcmN1bTtDSVJDVU1GTEVYIEFDQ0VOVAowMDdFO2FzY2lpdGlsZGU7VElMREUKMDAyQTthc3RlcmlzaztBU1RFUklTSwoyMjE3O2FzdGVyaXNrbWF0aDtBU1RFUklTSyBPUEVSQVRPUgowMDQwO2F0O0NPTU1FUkNJQUwgQVQKMDBFMzthdGlsZGU7TEFUSU4gU01BTEwgTEVUVEVSIEEgV0lUSCBUSUxERQowMDYyO2I7TEFUSU4gU01BTEwgTEVUVEVSIEIKMDA1QztiYWNrc2xhc2g7UkVWRVJTRSBTT0xJRFVTCjAwN0M7YmFyO1ZFUlRJQ0FMIExJTkUKMDNCMjtiZXRhO0dSRUVLIFNNQUxMIExFVFRFUiBCRVRBCjI1ODg7YmxvY2s7RlVMTCBCTE9DSwowMDdCO2JyYWNlbGVmdDtMRUZUIENVUkxZIEJSQUNLRVQKMDA3RDticmFjZXJpZ2h0O1JJR0hUIENVUkxZIEJSQUNLRVQKMDA1QjticmFja2V0bGVmdDtMRUZUIFNRVUFSRSBCUkFDS0VUCjAwNUQ7YnJhY2tldHJpZ2h0O1JJR0hUIFNRVUFSRSBCUkFDS0VUCjAyRDg7YnJldmU7QlJFVkUKMDBBNjticm9rZW5iYXI7QlJPS0VOIEJBUgoyMDIyO2J1bGxldDtCVUxMRVQKMDA2MztjO0xBVElOIFNNQUxMIExFVFRFUiBDCjAxMDc7Y2FjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBDIFdJVEggQUNVVEUKMDJDNztjYXJvbjtDQVJPTgoyMUI1O2NhcnJpYWdlcmV0dXJuO0RPV05XQVJEUyBBUlJPVyBXSVRIIENPUk5FUiBMRUZUV0FSRFMKMDEwRDtjY2Fyb247TEFUSU4gU01BTEwgTEVUVEVSIEMgV0lUSCBDQVJPTgowMEU3O2NjZWRpbGxhO0xBVElOIFNNQUxMIExFVFRFUiBDIFdJVEggQ0VESUxMQQowMTA5O2NjaXJjdW1mbGV4O0xBVElOIFNNQUxMIExFVFRFUiBDIFdJVEggQ0lSQ1VNRkxFWAowMTBCO2Nkb3RhY2NlbnQ7TEFUSU4gU01BTEwgTEVUVEVSIEMgV0lUSCBET1QgQUJPVkUKMDBCODtjZWRpbGxhO0NFRElMTEEKMDBBMjtjZW50O0NFTlQgU0lHTgowM0M3O2NoaTtHUkVFSyBTTUFMTCBMRVRURVIgQ0hJCjI1Q0I7Y2lyY2xlO1dISVRFIENJUkNMRQoyMjk3O2NpcmNsZW11bHRpcGx5O0NJUkNMRUQgVElNRVMKMjI5NTtjaXJjbGVwbHVzO0NJUkNMRUQgUExVUwowMkM2O2NpcmN1bWZsZXg7TU9ESUZJRVIgTEVUVEVSIENJUkNVTUZMRVggQUNDRU5UCjI2NjM7Y2x1YjtCTEFDSyBDTFVCIFNVSVQKMDAzQTtjb2xvbjtDT0xPTgoyMEExO2NvbG9ubW9uZXRhcnk7Q09MT04gU0lHTgowMDJDO2NvbW1hO0NPTU1BCjIyNDU7Y29uZ3J1ZW50O0FQUFJPWElNQVRFTFkgRVFVQUwgVE8KMDBBOTtjb3B5cmlnaHQ7Q09QWVJJR0hUIFNJR04KMDBBNDtjdXJyZW5jeTtDVVJSRU5DWSBTSUdOCjAwNjQ7ZDtMQVRJTiBTTUFMTCBMRVRURVIgRAoyMDIwO2RhZ2dlcjtEQUdHRVIKMjAyMTtkYWdnZXJkYmw7RE9VQkxFIERBR0dFUgowMTBGO2RjYXJvbjtMQVRJTiBTTUFMTCBMRVRURVIgRCBXSVRIIENBUk9OCjAxMTE7ZGNyb2F0O0xBVElOIFNNQUxMIExFVFRFUiBEIFdJVEggU1RST0tFCjAwQjA7ZGVncmVlO0RFR1JFRSBTSUdOCjAzQjQ7ZGVsdGE7R1JFRUsgU01BTEwgTEVUVEVSIERFTFRBCjI2NjY7ZGlhbW9uZDtCTEFDSyBESUFNT05EIFNVSVQKMDBBODtkaWVyZXNpcztESUFFUkVTSVMKMDM4NTtkaWVyZXNpc3Rvbm9zO0dSRUVLIERJQUxZVElLQSBUT05PUwowMEY3O2RpdmlkZTtESVZJU0lPTiBTSUdOCjI1OTM7ZGtzaGFkZTtEQVJLIFNIQURFCjI1ODQ7ZG5ibG9jaztMT1dFUiBIQUxGIEJMT0NLCjAwMjQ7ZG9sbGFyO0RPTExBUiBTSUdOCjIwQUI7ZG9uZztET05HIFNJR04KMDJEOTtkb3RhY2NlbnQ7RE9UIEFCT1ZFCjAzMjM7ZG90YmVsb3djb21iO0NPTUJJTklORyBET1QgQkVMT1cKMDEzMTtkb3RsZXNzaTtMQVRJTiBTTUFMTCBMRVRURVIgRE9UTEVTUyBJCjIyQzU7ZG90bWF0aDtET1QgT1BFUkFUT1IKMDA2NTtlO0xBVElOIFNNQUxMIExFVFRFUiBFCjAwRTk7ZWFjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggQUNVVEUKMDExNTtlYnJldmU7TEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBCUkVWRQowMTFCO2VjYXJvbjtMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIENBUk9OCjAwRUE7ZWNpcmN1bWZsZXg7TEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBDSVJDVU1GTEVYCjAwRUI7ZWRpZXJlc2lzO0xBVElOIFNNQUxMIExFVFRFUiBFIFdJVEggRElBRVJFU0lTCjAxMTc7ZWRvdGFjY2VudDtMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIERPVCBBQk9WRQowMEU4O2VncmF2ZTtMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIEdSQVZFCjAwMzg7ZWlnaHQ7RElHSVQgRUlHSFQKMjIwODtlbGVtZW50O0VMRU1FTlQgT0YKMjAyNjtlbGxpcHNpcztIT1JJWk9OVEFMIEVMTElQU0lTCjAxMTM7ZW1hY3JvbjtMQVRJTiBTTUFMTCBMRVRURVIgRSBXSVRIIE1BQ1JPTgoyMDE0O2VtZGFzaDtFTSBEQVNICjIyMDU7ZW1wdHlzZXQ7RU1QVFkgU0VUCjIwMTM7ZW5kYXNoO0VOIERBU0gKMDE0Qjtlbmc7TEFUSU4gU01BTEwgTEVUVEVSIEVORwowMTE5O2VvZ29uZWs7TEFUSU4gU01BTEwgTEVUVEVSIEUgV0lUSCBPR09ORUsKMDNCNTtlcHNpbG9uO0dSRUVLIFNNQUxMIExFVFRFUiBFUFNJTE9OCjAzQUQ7ZXBzaWxvbnRvbm9zO0dSRUVLIFNNQUxMIExFVFRFUiBFUFNJTE9OIFdJVEggVE9OT1MKMDAzRDtlcXVhbDtFUVVBTFMgU0lHTgoyMjYxO2VxdWl2YWxlbmNlO0lERU5USUNBTCBUTwoyMTJFO2VzdGltYXRlZDtFU1RJTUFURUQgU1lNQk9MCjAzQjc7ZXRhO0dSRUVLIFNNQUxMIExFVFRFUiBFVEEKMDNBRTtldGF0b25vcztHUkVFSyBTTUFMTCBMRVRURVIgRVRBIFdJVEggVE9OT1MKMDBGMDtldGg7TEFUSU4gU01BTEwgTEVUVEVSIEVUSAowMDIxO2V4Y2xhbTtFWENMQU1BVElPTiBNQVJLCjIwM0M7ZXhjbGFtZGJsO0RPVUJMRSBFWENMQU1BVElPTiBNQVJLCjAwQTE7ZXhjbGFtZG93bjtJTlZFUlRFRCBFWENMQU1BVElPTiBNQVJLCjIyMDM7ZXhpc3RlbnRpYWw7VEhFUkUgRVhJU1RTCjAwNjY7ZjtMQVRJTiBTTUFMTCBMRVRURVIgRgoyNjQwO2ZlbWFsZTtGRU1BTEUgU0lHTgoyMDEyO2ZpZ3VyZWRhc2g7RklHVVJFIERBU0gKMjVBMDtmaWxsZWRib3g7QkxBQ0sgU1FVQVJFCjI1QUM7ZmlsbGVkcmVjdDtCTEFDSyBSRUNUQU5HTEUKMDAzNTtmaXZlO0RJR0lUIEZJVkUKMjE1RDtmaXZlZWlnaHRocztWVUxHQVIgRlJBQ1RJT04gRklWRSBFSUdIVEhTCjAxOTI7ZmxvcmluO0xBVElOIFNNQUxMIExFVFRFUiBGIFdJVEggSE9PSwowMDM0O2ZvdXI7RElHSVQgRk9VUgoyMDQ0O2ZyYWN0aW9uO0ZSQUNUSU9OIFNMQVNICjIwQTM7ZnJhbmM7RlJFTkNIIEZSQU5DIFNJR04KMDA2NztnO0xBVElOIFNNQUxMIExFVFRFUiBHCjAzQjM7Z2FtbWE7R1JFRUsgU01BTEwgTEVUVEVSIEdBTU1BCjAxMUY7Z2JyZXZlO0xBVElOIFNNQUxMIExFVFRFUiBHIFdJVEggQlJFVkUKMDFFNztnY2Fyb247TEFUSU4gU01BTEwgTEVUVEVSIEcgV0lUSCBDQVJPTgowMTFEO2djaXJjdW1mbGV4O0xBVElOIFNNQUxMIExFVFRFUiBHIFdJVEggQ0lSQ1VNRkxFWAowMTIxO2dkb3RhY2NlbnQ7TEFUSU4gU01BTEwgTEVUVEVSIEcgV0lUSCBET1QgQUJPVkUKMDBERjtnZXJtYW5kYmxzO0xBVElOIFNNQUxMIExFVFRFUiBTSEFSUCBTCjIyMDc7Z3JhZGllbnQ7TkFCTEEKMDA2MDtncmF2ZTtHUkFWRSBBQ0NFTlQKMDMwMDtncmF2ZWNvbWI7Q09NQklOSU5HIEdSQVZFIEFDQ0VOVAowMDNFO2dyZWF0ZXI7R1JFQVRFUi1USEFOIFNJR04KMjI2NTtncmVhdGVyZXF1YWw7R1JFQVRFUi1USEFOIE9SIEVRVUFMIFRPCjAwQUI7Z3VpbGxlbW90bGVmdDtMRUZULVBPSU5USU5HIERPVUJMRSBBTkdMRSBRVU9UQVRJT04gTUFSSwowMEJCO2d1aWxsZW1vdHJpZ2h0O1JJR0hULVBPSU5USU5HIERPVUJMRSBBTkdMRSBRVU9UQVRJT04gTUFSSwoyMDM5O2d1aWxzaW5nbGxlZnQ7U0lOR0xFIExFRlQtUE9JTlRJTkcgQU5HTEUgUVVPVEFUSU9OIE1BUksKMjAzQTtndWlsc2luZ2xyaWdodDtTSU5HTEUgUklHSFQtUE9JTlRJTkcgQU5HTEUgUVVPVEFUSU9OIE1BUksKMDA2ODtoO0xBVElOIFNNQUxMIExFVFRFUiBICjAxMjc7aGJhcjtMQVRJTiBTTUFMTCBMRVRURVIgSCBXSVRIIFNUUk9LRQowMTI1O2hjaXJjdW1mbGV4O0xBVElOIFNNQUxMIExFVFRFUiBIIFdJVEggQ0lSQ1VNRkxFWAoyNjY1O2hlYXJ0O0JMQUNLIEhFQVJUIFNVSVQKMDMwOTtob29rYWJvdmVjb21iO0NPTUJJTklORyBIT09LIEFCT1ZFCjIzMDI7aG91c2U7SE9VU0UKMDJERDtodW5nYXJ1bWxhdXQ7RE9VQkxFIEFDVVRFIEFDQ0VOVAowMDJEO2h5cGhlbjtIWVBIRU4tTUlOVVMKMDA2OTtpO0xBVElOIFNNQUxMIExFVFRFUiBJCjAwRUQ7aWFjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQUNVVEUKMDEyRDtpYnJldmU7TEFUSU4gU01BTEwgTEVUVEVSIEkgV0lUSCBCUkVWRQowMEVFO2ljaXJjdW1mbGV4O0xBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggQ0lSQ1VNRkxFWAowMEVGO2lkaWVyZXNpcztMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIERJQUVSRVNJUwowMEVDO2lncmF2ZTtMQVRJTiBTTUFMTCBMRVRURVIgSSBXSVRIIEdSQVZFCjAxMzM7aWo7TEFUSU4gU01BTEwgTElHQVRVUkUgSUoKMDEyQjtpbWFjcm9uO0xBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggTUFDUk9OCjIyMUU7aW5maW5pdHk7SU5GSU5JVFkKMjIyQjtpbnRlZ3JhbDtJTlRFR1JBTAoyMzIxO2ludGVncmFsYnQ7Qk9UVE9NIEhBTEYgSU5URUdSQUwKMjMyMDtpbnRlZ3JhbHRwO1RPUCBIQUxGIElOVEVHUkFMCjIyMjk7aW50ZXJzZWN0aW9uO0lOVEVSU0VDVElPTgoyNUQ4O2ludmJ1bGxldDtJTlZFUlNFIEJVTExFVAoyNUQ5O2ludmNpcmNsZTtJTlZFUlNFIFdISVRFIENJUkNMRQoyNjNCO2ludnNtaWxlZmFjZTtCTEFDSyBTTUlMSU5HIEZBQ0UKMDEyRjtpb2dvbmVrO0xBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggT0dPTkVLCjAzQjk7aW90YTtHUkVFSyBTTUFMTCBMRVRURVIgSU9UQQowM0NBO2lvdGFkaWVyZXNpcztHUkVFSyBTTUFMTCBMRVRURVIgSU9UQSBXSVRIIERJQUxZVElLQQowMzkwO2lvdGFkaWVyZXNpc3Rvbm9zO0dSRUVLIFNNQUxMIExFVFRFUiBJT1RBIFdJVEggRElBTFlUSUtBIEFORCBUT05PUwowM0FGO2lvdGF0b25vcztHUkVFSyBTTUFMTCBMRVRURVIgSU9UQSBXSVRIIFRPTk9TCjAxMjk7aXRpbGRlO0xBVElOIFNNQUxMIExFVFRFUiBJIFdJVEggVElMREUKMDA2QTtqO0xBVElOIFNNQUxMIExFVFRFUiBKCjAxMzU7amNpcmN1bWZsZXg7TEFUSU4gU01BTEwgTEVUVEVSIEogV0lUSCBDSVJDVU1GTEVYCjAwNkI7aztMQVRJTiBTTUFMTCBMRVRURVIgSwowM0JBO2thcHBhO0dSRUVLIFNNQUxMIExFVFRFUiBLQVBQQQowMTM4O2tncmVlbmxhbmRpYztMQVRJTiBTTUFMTCBMRVRURVIgS1JBCjAwNkM7bDtMQVRJTiBTTUFMTCBMRVRURVIgTAowMTNBO2xhY3V0ZTtMQVRJTiBTTUFMTCBMRVRURVIgTCBXSVRIIEFDVVRFCjAzQkI7bGFtYmRhO0dSRUVLIFNNQUxMIExFVFRFUiBMQU1EQQowMTNFO2xjYXJvbjtMQVRJTiBTTUFMTCBMRVRURVIgTCBXSVRIIENBUk9OCjAxNDA7bGRvdDtMQVRJTiBTTUFMTCBMRVRURVIgTCBXSVRIIE1JRERMRSBET1QKMDAzQztsZXNzO0xFU1MtVEhBTiBTSUdOCjIyNjQ7bGVzc2VxdWFsO0xFU1MtVEhBTiBPUiBFUVVBTCBUTwoyNThDO2xmYmxvY2s7TEVGVCBIQUxGIEJMT0NLCjIwQTQ7bGlyYTtMSVJBIFNJR04KMjIyNztsb2dpY2FsYW5kO0xPR0lDQUwgQU5ECjAwQUM7bG9naWNhbG5vdDtOT1QgU0lHTgoyMjI4O2xvZ2ljYWxvcjtMT0dJQ0FMIE9SCjAxN0Y7bG9uZ3M7TEFUSU4gU01BTEwgTEVUVEVSIExPTkcgUwoyNUNBO2xvemVuZ2U7TE9aRU5HRQowMTQyO2xzbGFzaDtMQVRJTiBTTUFMTCBMRVRURVIgTCBXSVRIIFNUUk9LRQoyNTkxO2x0c2hhZGU7TElHSFQgU0hBREUKMDA2RDttO0xBVElOIFNNQUxMIExFVFRFUiBNCjAwQUY7bWFjcm9uO01BQ1JPTgoyNjQyO21hbGU7TUFMRSBTSUdOCjIyMTI7bWludXM7TUlOVVMgU0lHTgoyMDMyO21pbnV0ZTtQUklNRQowMEI1O211O01JQ1JPIFNJR04KMDBENzttdWx0aXBseTtNVUxUSVBMSUNBVElPTiBTSUdOCjI2NkE7bXVzaWNhbG5vdGU7RUlHSFRIIE5PVEUKMjY2QjttdXNpY2Fsbm90ZWRibDtCRUFNRUQgRUlHSFRIIE5PVEVTCjAwNkU7bjtMQVRJTiBTTUFMTCBMRVRURVIgTgowMTQ0O25hY3V0ZTtMQVRJTiBTTUFMTCBMRVRURVIgTiBXSVRIIEFDVVRFCjAxNDk7bmFwb3N0cm9waGU7TEFUSU4gU01BTEwgTEVUVEVSIE4gUFJFQ0VERUQgQlkgQVBPU1RST1BIRQowMTQ4O25jYXJvbjtMQVRJTiBTTUFMTCBMRVRURVIgTiBXSVRIIENBUk9OCjAwMzk7bmluZTtESUdJVCBOSU5FCjIyMDk7bm90ZWxlbWVudDtOT1QgQU4gRUxFTUVOVCBPRgoyMjYwO25vdGVxdWFsO05PVCBFUVVBTCBUTwoyMjg0O25vdHN1YnNldDtOT1QgQSBTVUJTRVQgT0YKMDBGMTtudGlsZGU7TEFUSU4gU01BTEwgTEVUVEVSIE4gV0lUSCBUSUxERQowM0JEO251O0dSRUVLIFNNQUxMIExFVFRFUiBOVQowMDIzO251bWJlcnNpZ247TlVNQkVSIFNJR04KMDA2RjtvO0xBVElOIFNNQUxMIExFVFRFUiBPCjAwRjM7b2FjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggQUNVVEUKMDE0RjtvYnJldmU7TEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBCUkVWRQowMEY0O29jaXJjdW1mbGV4O0xBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggQ0lSQ1VNRkxFWAowMEY2O29kaWVyZXNpcztMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIERJQUVSRVNJUwowMTUzO29lO0xBVElOIFNNQUxMIExJR0FUVVJFIE9FCjAyREI7b2dvbmVrO09HT05FSwowMEYyO29ncmF2ZTtMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIEdSQVZFCjAxQTE7b2hvcm47TEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBIT1JOCjAxNTE7b2h1bmdhcnVtbGF1dDtMQVRJTiBTTUFMTCBMRVRURVIgTyBXSVRIIERPVUJMRSBBQ1VURQowMTREO29tYWNyb247TEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBNQUNST04KMDNDOTtvbWVnYTtHUkVFSyBTTUFMTCBMRVRURVIgT01FR0EKMDNENjtvbWVnYTE7R1JFRUsgUEkgU1lNQk9MCjAzQ0U7b21lZ2F0b25vcztHUkVFSyBTTUFMTCBMRVRURVIgT01FR0EgV0lUSCBUT05PUwowM0JGO29taWNyb247R1JFRUsgU01BTEwgTEVUVEVSIE9NSUNST04KMDNDQztvbWljcm9udG9ub3M7R1JFRUsgU01BTEwgTEVUVEVSIE9NSUNST04gV0lUSCBUT05PUwowMDMxO29uZTtESUdJVCBPTkUKMjAyNDtvbmVkb3RlbmxlYWRlcjtPTkUgRE9UIExFQURFUgoyMTVCO29uZWVpZ2h0aDtWVUxHQVIgRlJBQ1RJT04gT05FIEVJR0hUSAowMEJEO29uZWhhbGY7VlVMR0FSIEZSQUNUSU9OIE9ORSBIQUxGCjAwQkM7b25lcXVhcnRlcjtWVUxHQVIgRlJBQ1RJT04gT05FIFFVQVJURVIKMjE1MztvbmV0aGlyZDtWVUxHQVIgRlJBQ1RJT04gT05FIFRISVJECjI1RTY7b3BlbmJ1bGxldDtXSElURSBCVUxMRVQKMDBBQTtvcmRmZW1pbmluZTtGRU1JTklORSBPUkRJTkFMIElORElDQVRPUgowMEJBO29yZG1hc2N1bGluZTtNQVNDVUxJTkUgT1JESU5BTCBJTkRJQ0FUT1IKMjIxRjtvcnRob2dvbmFsO1JJR0hUIEFOR0xFCjAwRjg7b3NsYXNoO0xBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggU1RST0tFCjAxRkY7b3NsYXNoYWN1dGU7TEFUSU4gU01BTEwgTEVUVEVSIE8gV0lUSCBTVFJPS0UgQU5EIEFDVVRFCjAwRjU7b3RpbGRlO0xBVElOIFNNQUxMIExFVFRFUiBPIFdJVEggVElMREUKMDA3MDtwO0xBVElOIFNNQUxMIExFVFRFUiBQCjAwQjY7cGFyYWdyYXBoO1BJTENST1cgU0lHTgowMDI4O3BhcmVubGVmdDtMRUZUIFBBUkVOVEhFU0lTCjAwMjk7cGFyZW5yaWdodDtSSUdIVCBQQVJFTlRIRVNJUwoyMjAyO3BhcnRpYWxkaWZmO1BBUlRJQUwgRElGRkVSRU5USUFMCjAwMjU7cGVyY2VudDtQRVJDRU5UIFNJR04KMDAyRTtwZXJpb2Q7RlVMTCBTVE9QCjAwQjc7cGVyaW9kY2VudGVyZWQ7TUlERExFIERPVAoyMkE1O3BlcnBlbmRpY3VsYXI7VVAgVEFDSwoyMDMwO3BlcnRob3VzYW5kO1BFUiBNSUxMRSBTSUdOCjIwQTc7cGVzZXRhO1BFU0VUQSBTSUdOCjAzQzY7cGhpO0dSRUVLIFNNQUxMIExFVFRFUiBQSEkKMDNENTtwaGkxO0dSRUVLIFBISSBTWU1CT0wKMDNDMDtwaTtHUkVFSyBTTUFMTCBMRVRURVIgUEkKMDAyQjtwbHVzO1BMVVMgU0lHTgowMEIxO3BsdXNtaW51cztQTFVTLU1JTlVTIFNJR04KMjExRTtwcmVzY3JpcHRpb247UFJFU0NSSVBUSU9OIFRBS0UKMjIwRjtwcm9kdWN0O04tQVJZIFBST0RVQ1QKMjI4Mjtwcm9wZXJzdWJzZXQ7U1VCU0VUIE9GCjIyODM7cHJvcGVyc3VwZXJzZXQ7U1VQRVJTRVQgT0YKMjIxRDtwcm9wb3J0aW9uYWw7UFJPUE9SVElPTkFMIFRPCjAzQzg7cHNpO0dSRUVLIFNNQUxMIExFVFRFUiBQU0kKMDA3MTtxO0xBVElOIFNNQUxMIExFVFRFUiBRCjAwM0Y7cXVlc3Rpb247UVVFU1RJT04gTUFSSwowMEJGO3F1ZXN0aW9uZG93bjtJTlZFUlRFRCBRVUVTVElPTiBNQVJLCjAwMjI7cXVvdGVkYmw7UVVPVEFUSU9OIE1BUksKMjAxRTtxdW90ZWRibGJhc2U7RE9VQkxFIExPVy05IFFVT1RBVElPTiBNQVJLCjIwMUM7cXVvdGVkYmxsZWZ0O0xFRlQgRE9VQkxFIFFVT1RBVElPTiBNQVJLCjIwMUQ7cXVvdGVkYmxyaWdodDtSSUdIVCBET1VCTEUgUVVPVEFUSU9OIE1BUksKMjAxODtxdW90ZWxlZnQ7TEVGVCBTSU5HTEUgUVVPVEFUSU9OIE1BUksKMjAxQjtxdW90ZXJldmVyc2VkO1NJTkdMRSBISUdILVJFVkVSU0VELTkgUVVPVEFUSU9OIE1BUksKMjAxOTtxdW90ZXJpZ2h0O1JJR0hUIFNJTkdMRSBRVU9UQVRJT04gTUFSSwoyMDFBO3F1b3Rlc2luZ2xiYXNlO1NJTkdMRSBMT1ctOSBRVU9UQVRJT04gTUFSSwowMDI3O3F1b3Rlc2luZ2xlO0FQT1NUUk9QSEUKMDA3MjtyO0xBVElOIFNNQUxMIExFVFRFUiBSCjAxNTU7cmFjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBSIFdJVEggQUNVVEUKMjIxQTtyYWRpY2FsO1NRVUFSRSBST09UCjAxNTk7cmNhcm9uO0xBVElOIFNNQUxMIExFVFRFUiBSIFdJVEggQ0FST04KMjI4NjtyZWZsZXhzdWJzZXQ7U1VCU0VUIE9GIE9SIEVRVUFMIFRPCjIyODc7cmVmbGV4c3VwZXJzZXQ7U1VQRVJTRVQgT0YgT1IgRVFVQUwgVE8KMDBBRTtyZWdpc3RlcmVkO1JFR0lTVEVSRUQgU0lHTgoyMzEwO3JldmxvZ2ljYWxub3Q7UkVWRVJTRUQgTk9UIFNJR04KMDNDMTtyaG87R1JFRUsgU01BTEwgTEVUVEVSIFJITwowMkRBO3Jpbmc7UklORyBBQk9WRQoyNTkwO3J0YmxvY2s7UklHSFQgSEFMRiBCTE9DSwowMDczO3M7TEFUSU4gU01BTEwgTEVUVEVSIFMKMDE1QjtzYWN1dGU7TEFUSU4gU01BTEwgTEVUVEVSIFMgV0lUSCBBQ1VURQowMTYxO3NjYXJvbjtMQVRJTiBTTUFMTCBMRVRURVIgUyBXSVRIIENBUk9OCjAxNUY7c2NlZGlsbGE7TEFUSU4gU01BTEwgTEVUVEVSIFMgV0lUSCBDRURJTExBCjAxNUQ7c2NpcmN1bWZsZXg7TEFUSU4gU01BTEwgTEVUVEVSIFMgV0lUSCBDSVJDVU1GTEVYCjIwMzM7c2Vjb25kO0RPVUJMRSBQUklNRQowMEE3O3NlY3Rpb247U0VDVElPTiBTSUdOCjAwM0I7c2VtaWNvbG9uO1NFTUlDT0xPTgowMDM3O3NldmVuO0RJR0lUIFNFVkVOCjIxNUU7c2V2ZW5laWdodGhzO1ZVTEdBUiBGUkFDVElPTiBTRVZFTiBFSUdIVEhTCjI1OTI7c2hhZGU7TUVESVVNIFNIQURFCjAzQzM7c2lnbWE7R1JFRUsgU01BTEwgTEVUVEVSIFNJR01BCjAzQzI7c2lnbWExO0dSRUVLIFNNQUxMIExFVFRFUiBGSU5BTCBTSUdNQQoyMjNDO3NpbWlsYXI7VElMREUgT1BFUkFUT1IKMDAzNjtzaXg7RElHSVQgU0lYCjAwMkY7c2xhc2g7U09MSURVUwoyNjNBO3NtaWxlZmFjZTtXSElURSBTTUlMSU5HIEZBQ0UKMDAyMDtzcGFjZTtTUEFDRQoyNjYwO3NwYWRlO0JMQUNLIFNQQURFIFNVSVQKMDBBMztzdGVybGluZztQT1VORCBTSUdOCjIyMEI7c3VjaHRoYXQ7Q09OVEFJTlMgQVMgTUVNQkVSCjIyMTE7c3VtbWF0aW9uO04tQVJZIFNVTU1BVElPTgoyNjNDO3N1bjtXSElURSBTVU4gV0lUSCBSQVlTCjAwNzQ7dDtMQVRJTiBTTUFMTCBMRVRURVIgVAowM0M0O3RhdTtHUkVFSyBTTUFMTCBMRVRURVIgVEFVCjAxNjc7dGJhcjtMQVRJTiBTTUFMTCBMRVRURVIgVCBXSVRIIFNUUk9LRQowMTY1O3RjYXJvbjtMQVRJTiBTTUFMTCBMRVRURVIgVCBXSVRIIENBUk9OCjIyMzQ7dGhlcmVmb3JlO1RIRVJFRk9SRQowM0I4O3RoZXRhO0dSRUVLIFNNQUxMIExFVFRFUiBUSEVUQQowM0QxO3RoZXRhMTtHUkVFSyBUSEVUQSBTWU1CT0wKMDBGRTt0aG9ybjtMQVRJTiBTTUFMTCBMRVRURVIgVEhPUk4KMDAzMzt0aHJlZTtESUdJVCBUSFJFRQoyMTVDO3RocmVlZWlnaHRocztWVUxHQVIgRlJBQ1RJT04gVEhSRUUgRUlHSFRIUwowMEJFO3RocmVlcXVhcnRlcnM7VlVMR0FSIEZSQUNUSU9OIFRIUkVFIFFVQVJURVJTCjAyREM7dGlsZGU7U01BTEwgVElMREUKMDMwMzt0aWxkZWNvbWI7Q09NQklOSU5HIFRJTERFCjAzODQ7dG9ub3M7R1JFRUsgVE9OT1MKMjEyMjt0cmFkZW1hcms7VFJBREUgTUFSSyBTSUdOCjI1QkM7dHJpYWdkbjtCTEFDSyBET1dOLVBPSU5USU5HIFRSSUFOR0xFCjI1QzQ7dHJpYWdsZjtCTEFDSyBMRUZULVBPSU5USU5HIFBPSU5URVIKMjVCQTt0cmlhZ3J0O0JMQUNLIFJJR0hULVBPSU5USU5HIFBPSU5URVIKMjVCMjt0cmlhZ3VwO0JMQUNLIFVQLVBPSU5USU5HIFRSSUFOR0xFCjAwMzI7dHdvO0RJR0lUIFRXTwoyMDI1O3R3b2RvdGVubGVhZGVyO1RXTyBET1QgTEVBREVSCjIxNTQ7dHdvdGhpcmRzO1ZVTEdBUiBGUkFDVElPTiBUV08gVEhJUkRTCjAwNzU7dTtMQVRJTiBTTUFMTCBMRVRURVIgVQowMEZBO3VhY3V0ZTtMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIEFDVVRFCjAxNkQ7dWJyZXZlO0xBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggQlJFVkUKMDBGQjt1Y2lyY3VtZmxleDtMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIENJUkNVTUZMRVgKMDBGQzt1ZGllcmVzaXM7TEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBESUFFUkVTSVMKMDBGOTt1Z3JhdmU7TEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBHUkFWRQowMUIwO3Vob3JuO0xBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggSE9STgowMTcxO3VodW5nYXJ1bWxhdXQ7TEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBET1VCTEUgQUNVVEUKMDE2Qjt1bWFjcm9uO0xBVElOIFNNQUxMIExFVFRFUiBVIFdJVEggTUFDUk9OCjAwNUY7dW5kZXJzY29yZTtMT1cgTElORQoyMDE3O3VuZGVyc2NvcmVkYmw7RE9VQkxFIExPVyBMSU5FCjIyMkE7dW5pb247VU5JT04KMjIwMDt1bml2ZXJzYWw7Rk9SIEFMTAowMTczO3VvZ29uZWs7TEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBPR09ORUsKMjU4MDt1cGJsb2NrO1VQUEVSIEhBTEYgQkxPQ0sKMDNDNTt1cHNpbG9uO0dSRUVLIFNNQUxMIExFVFRFUiBVUFNJTE9OCjAzQ0I7dXBzaWxvbmRpZXJlc2lzO0dSRUVLIFNNQUxMIExFVFRFUiBVUFNJTE9OIFdJVEggRElBTFlUSUtBCjAzQjA7dXBzaWxvbmRpZXJlc2lzdG9ub3M7R1JFRUsgU01BTEwgTEVUVEVSIFVQU0lMT04gV0lUSCBESUFMWVRJS0EgQU5EIFRPTk9TCjAzQ0Q7dXBzaWxvbnRvbm9zO0dSRUVLIFNNQUxMIExFVFRFUiBVUFNJTE9OIFdJVEggVE9OT1MKMDE2Rjt1cmluZztMQVRJTiBTTUFMTCBMRVRURVIgVSBXSVRIIFJJTkcgQUJPVkUKMDE2OTt1dGlsZGU7TEFUSU4gU01BTEwgTEVUVEVSIFUgV0lUSCBUSUxERQowMDc2O3Y7TEFUSU4gU01BTEwgTEVUVEVSIFYKMDA3Nzt3O0xBVElOIFNNQUxMIExFVFRFUiBXCjFFODM7d2FjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBXIFdJVEggQUNVVEUKMDE3NTt3Y2lyY3VtZmxleDtMQVRJTiBTTUFMTCBMRVRURVIgVyBXSVRIIENJUkNVTUZMRVgKMUU4NTt3ZGllcmVzaXM7TEFUSU4gU01BTEwgTEVUVEVSIFcgV0lUSCBESUFFUkVTSVMKMjExODt3ZWllcnN0cmFzcztTQ1JJUFQgQ0FQSVRBTCBQCjFFODE7d2dyYXZlO0xBVElOIFNNQUxMIExFVFRFUiBXIFdJVEggR1JBVkUKMDA3ODt4O0xBVElOIFNNQUxMIExFVFRFUiBYCjAzQkU7eGk7R1JFRUsgU01BTEwgTEVUVEVSIFhJCjAwNzk7eTtMQVRJTiBTTUFMTCBMRVRURVIgWQowMEZEO3lhY3V0ZTtMQVRJTiBTTUFMTCBMRVRURVIgWSBXSVRIIEFDVVRFCjAxNzc7eWNpcmN1bWZsZXg7TEFUSU4gU01BTEwgTEVUVEVSIFkgV0lUSCBDSVJDVU1GTEVYCjAwRkY7eWRpZXJlc2lzO0xBVElOIFNNQUxMIExFVFRFUiBZIFdJVEggRElBRVJFU0lTCjAwQTU7eWVuO1lFTiBTSUdOCjFFRjM7eWdyYXZlO0xBVElOIFNNQUxMIExFVFRFUiBZIFdJVEggR1JBVkUKMDA3QTt6O0xBVElOIFNNQUxMIExFVFRFUiBaCjAxN0E7emFjdXRlO0xBVElOIFNNQUxMIExFVFRFUiBaIFdJVEggQUNVVEUKMDE3RTt6Y2Fyb247TEFUSU4gU01BTEwgTEVUVEVSIFogV0lUSCBDQVJPTgowMTdDO3pkb3RhY2NlbnQ7TEFUSU4gU01BTEwgTEVUVEVSIFogV0lUSCBET1QgQUJPVkUKMDAzMDt6ZXJvO0RJR0lUIFpFUk8KMDNCNjt6ZXRhO0dSRUVLIFNNQUxMIExFVFRFUiBaRVRBCiMgRU5ECg"}];
js_Boot.__toStr = ({ }).toString;
fonthx_model_color_RGBAColor.BLACK = 255;
fonthx_model_color_RGBAColor.WHITE = -1;
fonthx_model_font_ContourOptions.LAYERED_CONTOURS = 1;
fonthx_model_font_ContourOptions.FLAT_CONTOURS = 2;
fonthx_model_font_features_FeatureTag.FEAT_AALT = "aalt";
fonthx_model_font_features_FeatureTag.FEAT_ABVF = "abvf";
fonthx_model_font_features_FeatureTag.FEAT_ABVM = "abvm";
fonthx_model_font_features_FeatureTag.FEAT_ABVS = "abvs";
fonthx_model_font_features_FeatureTag.FEAT_AFRC = "afrc";
fonthx_model_font_features_FeatureTag.FEAT_AKHN = "akhn";
fonthx_model_font_features_FeatureTag.FEAT_BLWF = "blwf";
fonthx_model_font_features_FeatureTag.FEAT_BLWM = "blwm";
fonthx_model_font_features_FeatureTag.FEAT_BLWS = "blws";
fonthx_model_font_features_FeatureTag.FEAT_CALT = "calt";
fonthx_model_font_features_FeatureTag.FEAT_CASE = "case";
fonthx_model_font_features_FeatureTag.FEAT_CCMP = "ccmp";
fonthx_model_font_features_FeatureTag.FEAT_CFAR = "cfar";
fonthx_model_font_features_FeatureTag.FEAT_CJCT = "cjct";
fonthx_model_font_features_FeatureTag.FEAT_CLIG = "clig";
fonthx_model_font_features_FeatureTag.FEAT_CPCT = "cpct";
fonthx_model_font_features_FeatureTag.FEAT_CPSP = "cpsp";
fonthx_model_font_features_FeatureTag.FEAT_CSWH = "cswh";
fonthx_model_font_features_FeatureTag.FEAT_CURS = "curs";
fonthx_model_font_features_FeatureTag.FEAT_C2PC = "c2pc";
fonthx_model_font_features_FeatureTag.FEAT_C2SC = "c2sc";
fonthx_model_font_features_FeatureTag.FEAT_DIST = "dist";
fonthx_model_font_features_FeatureTag.FEAT_DLIG = "dlig";
fonthx_model_font_features_FeatureTag.FEAT_DNOM = "dnom";
fonthx_model_font_features_FeatureTag.FEAT_DTLS = "dtls";
fonthx_model_font_features_FeatureTag.FEAT_EXPT = "expt";
fonthx_model_font_features_FeatureTag.FEAT_FALT = "falt";
fonthx_model_font_features_FeatureTag.FEAT_FIN2 = "fin2";
fonthx_model_font_features_FeatureTag.FEAT_FIN3 = "fin3";
fonthx_model_font_features_FeatureTag.FEAT_FINA = "fina";
fonthx_model_font_features_FeatureTag.FEAT_FLAC = "flac";
fonthx_model_font_features_FeatureTag.FEAT_FRAC = "frac";
fonthx_model_font_features_FeatureTag.FEAT_FWID = "fwid";
fonthx_model_font_features_FeatureTag.FEAT_HALF = "half";
fonthx_model_font_features_FeatureTag.FEAT_HALN = "haln";
fonthx_model_font_features_FeatureTag.FEAT_HALT = "halt";
fonthx_model_font_features_FeatureTag.FEAT_HIST = "hist";
fonthx_model_font_features_FeatureTag.FEAT_HKNA = "hkna";
fonthx_model_font_features_FeatureTag.FEAT_HLIG = "hlig";
fonthx_model_font_features_FeatureTag.FEAT_HNGL = "hngl";
fonthx_model_font_features_FeatureTag.FEAT_HOJO = "hojo";
fonthx_model_font_features_FeatureTag.FEAT_HWID = "hwid";
fonthx_model_font_features_FeatureTag.FEAT_INIT = "init";
fonthx_model_font_features_FeatureTag.FEAT_ISOL = "isol";
fonthx_model_font_features_FeatureTag.FEAT_ITAL = "ital";
fonthx_model_font_features_FeatureTag.FEAT_JALT = "jalt";
fonthx_model_font_features_FeatureTag.FEAT_JP78 = "jp78";
fonthx_model_font_features_FeatureTag.FEAT_JP83 = "jp83";
fonthx_model_font_features_FeatureTag.FEAT_JP90 = "jp90";
fonthx_model_font_features_FeatureTag.FEAT_JP04 = "jp04";
fonthx_model_font_features_FeatureTag.FEAT_KERN = "kern";
fonthx_model_font_features_FeatureTag.FEAT_LFBD = "lfbd";
fonthx_model_font_features_FeatureTag.FEAT_LIGA = "liga";
fonthx_model_font_features_FeatureTag.FEAT_LJMO = "ljmo";
fonthx_model_font_features_FeatureTag.FEAT_LNUM = "lnum";
fonthx_model_font_features_FeatureTag.FEAT_LOCL = "locl";
fonthx_model_font_features_FeatureTag.FEAT_LTRA = "ltra";
fonthx_model_font_features_FeatureTag.FEAT_LTRM = "ltrm";
fonthx_model_font_features_FeatureTag.FEAT_MARK = "mark";
fonthx_model_font_features_FeatureTag.FEAT_MED2 = "med2";
fonthx_model_font_features_FeatureTag.FEAT_MEDI = "medi";
fonthx_model_font_features_FeatureTag.FEAT_MGRK = "mgrk";
fonthx_model_font_features_FeatureTag.FEAT_MKMK = "mkmk";
fonthx_model_font_features_FeatureTag.FEAT_MSET = "mset";
fonthx_model_font_features_FeatureTag.FEAT_NALT = "nalt";
fonthx_model_font_features_FeatureTag.FEAT_NLCK = "nlck";
fonthx_model_font_features_FeatureTag.FEAT_NUKT = "nukt";
fonthx_model_font_features_FeatureTag.FEAT_NUMR = "numr";
fonthx_model_font_features_FeatureTag.FEAT_ONUM = "onum";
fonthx_model_font_features_FeatureTag.FEAT_OPBD = "opbd";
fonthx_model_font_features_FeatureTag.FEAT_ORDN = "ordn";
fonthx_model_font_features_FeatureTag.FEAT_ORNM = "ornm";
fonthx_model_font_features_FeatureTag.FEAT_PALT = "palt";
fonthx_model_font_features_FeatureTag.FEAT_PCAP = "pcap";
fonthx_model_font_features_FeatureTag.FEAT_PKNA = "pkna";
fonthx_model_font_features_FeatureTag.FEAT_PNUM = "pnum";
fonthx_model_font_features_FeatureTag.FEAT_PREF = "pref";
fonthx_model_font_features_FeatureTag.FEAT_PRES = "pres";
fonthx_model_font_features_FeatureTag.FEAT_PSTF = "pstf";
fonthx_model_font_features_FeatureTag.FEAT_PSTS = "psts";
fonthx_model_font_features_FeatureTag.FEAT_PWID = "pwid";
fonthx_model_font_features_FeatureTag.FEAT_QWID = "qwid";
fonthx_model_font_features_FeatureTag.FEAT_RAND = "rand";
fonthx_model_font_features_FeatureTag.FEAT_RCLT = "rclt";
fonthx_model_font_features_FeatureTag.FEAT_RKRF = "rkrf";
fonthx_model_font_features_FeatureTag.FEAT_RLIG = "rlig";
fonthx_model_font_features_FeatureTag.FEAT_RPHF = "rphf";
fonthx_model_font_features_FeatureTag.FEAT_RTBD = "rtbd";
fonthx_model_font_features_FeatureTag.FEAT_RTLA = "rtla";
fonthx_model_font_features_FeatureTag.FEAT_RTLM = "rtlm";
fonthx_model_font_features_FeatureTag.FEAT_RUBY = "ruby";
fonthx_model_font_features_FeatureTag.FEAT_RVRN = "rvrn";
fonthx_model_font_features_FeatureTag.FEAT_SALT = "salt";
fonthx_model_font_features_FeatureTag.FEAT_SINF = "sinf";
fonthx_model_font_features_FeatureTag.FEAT_SIZE = "size";
fonthx_model_font_features_FeatureTag.FEAT_SMCP = "smcp";
fonthx_model_font_features_FeatureTag.FEAT_SMPL = "smpl";
fonthx_model_font_features_FeatureTag.FEAT_SS01 = "ss01";
fonthx_model_font_features_FeatureTag.FEAT_SS02 = "ss02";
fonthx_model_font_features_FeatureTag.FEAT_SS03 = "ss03";
fonthx_model_font_features_FeatureTag.FEAT_SS04 = "ss04";
fonthx_model_font_features_FeatureTag.FEAT_SS05 = "ss05";
fonthx_model_font_features_FeatureTag.FEAT_SS06 = "ss06";
fonthx_model_font_features_FeatureTag.FEAT_SS07 = "ss07";
fonthx_model_font_features_FeatureTag.FEAT_SS08 = "ss08";
fonthx_model_font_features_FeatureTag.FEAT_SS09 = "ss09";
fonthx_model_font_features_FeatureTag.FEAT_SS10 = "ss10";
fonthx_model_font_features_FeatureTag.FEAT_SS11 = "ss11";
fonthx_model_font_features_FeatureTag.FEAT_SS12 = "ss12";
fonthx_model_font_features_FeatureTag.FEAT_SS13 = "ss13";
fonthx_model_font_features_FeatureTag.FEAT_SS14 = "ss14";
fonthx_model_font_features_FeatureTag.FEAT_SS15 = "ss15";
fonthx_model_font_features_FeatureTag.FEAT_SS16 = "ss16";
fonthx_model_font_features_FeatureTag.FEAT_SS17 = "ss17";
fonthx_model_font_features_FeatureTag.FEAT_SS18 = "ss18";
fonthx_model_font_features_FeatureTag.FEAT_SS19 = "ss19";
fonthx_model_font_features_FeatureTag.FEAT_SS20 = "ss20";
fonthx_model_font_features_FeatureTag.FEAT_SSTY = "ssty";
fonthx_model_font_features_FeatureTag.FEAT_STCH = "stch";
fonthx_model_font_features_FeatureTag.FEAT_SUBS = "subs";
fonthx_model_font_features_FeatureTag.FEAT_SUPS = "sups";
fonthx_model_font_features_FeatureTag.FEAT_SWSH = "swsh";
fonthx_model_font_features_FeatureTag.FEAT_TITL = "titl";
fonthx_model_font_features_FeatureTag.FEAT_TJMO = "tjmo";
fonthx_model_font_features_FeatureTag.FEAT_TNAM = "tnam";
fonthx_model_font_features_FeatureTag.FEAT_TNUM = "tnum";
fonthx_model_font_features_FeatureTag.FEAT_TRAD = "trad";
fonthx_model_font_features_FeatureTag.FEAT_TWID = "twid";
fonthx_model_font_features_FeatureTag.FEAT_UNIC = "unic";
fonthx_model_font_features_FeatureTag.FEAT_VALT = "valt";
fonthx_model_font_features_FeatureTag.FEAT_VATU = "vatu";
fonthx_model_font_features_FeatureTag.FEAT_VERT = "vert";
fonthx_model_font_features_FeatureTag.FEAT_VHAL = "vhal";
fonthx_model_font_features_FeatureTag.FEAT_VJMO = "vjmo";
fonthx_model_font_features_FeatureTag.FEAT_VKNA = "vkna";
fonthx_model_font_features_FeatureTag.FEAT_VKRN = "vkrn";
fonthx_model_font_features_FeatureTag.FEAT_VPAL = "vpal";
fonthx_model_font_features_FeatureTag.FEAT_VRT2 = "vrt2";
fonthx_model_font_features_FeatureTag.FEAT_VRTR = "vrtr";
fonthx_model_font_features_FeatureTag.FEAT_ZERO = "zero";
fonthx_model_font_features_LanguageTag.DEFAULT = "DFLT";
fonthx_model_font_features_LanguageTag.ABAZA = "ABA ";
fonthx_model_font_features_LanguageTag.ABKHAZIAN = "ABK ";
fonthx_model_font_features_LanguageTag.ACHOLI = "ACH ";
fonthx_model_font_features_LanguageTag.ACHI = "ACR ";
fonthx_model_font_features_LanguageTag.ADYGHE = "ADY ";
fonthx_model_font_features_LanguageTag.AFRIKAANS = "AFK ";
fonthx_model_font_features_LanguageTag.AFAR = "AFR ";
fonthx_model_font_features_LanguageTag.AGAW = "AGW ";
fonthx_model_font_features_LanguageTag.AITON = "AIO ";
fonthx_model_font_features_LanguageTag.AKAN = "AKA ";
fonthx_model_font_features_LanguageTag.ALSATIAN = "ALS ";
fonthx_model_font_features_LanguageTag.ALTAI = "ALT ";
fonthx_model_font_features_LanguageTag.AMHARIC = "AMH ";
fonthx_model_font_features_LanguageTag.ANGLOSAXON = "ANG ";
fonthx_model_font_features_LanguageTag.ARABIC = "ARA ";
fonthx_model_font_features_LanguageTag.ARAGONESE = "ARG ";
fonthx_model_font_features_LanguageTag.AARI = "ARI ";
fonthx_model_font_features_LanguageTag.RAKHINE = "ARK ";
fonthx_model_font_features_LanguageTag.ASSAMESE = "ASM ";
fonthx_model_font_features_LanguageTag.ASTURIAN = "AST ";
fonthx_model_font_features_LanguageTag.ATHAPASKAN = "ATH ";
fonthx_model_font_features_LanguageTag.AVAR = "AVR ";
fonthx_model_font_features_LanguageTag.AWADHI = "AWA ";
fonthx_model_font_features_LanguageTag.AYMARA = "AYM ";
fonthx_model_font_features_LanguageTag.TORKI = "AZB ";
fonthx_model_font_features_LanguageTag.AZERBAIJANI = "AZE ";
fonthx_model_font_features_LanguageTag.BADAGA = "BAD ";
fonthx_model_font_features_LanguageTag.BAGHELKHANDI = "BAG ";
fonthx_model_font_features_LanguageTag.BALKAR = "BAL ";
fonthx_model_font_features_LanguageTag.BALINESE = "BAN ";
fonthx_model_font_features_LanguageTag.BAVARIAN = "BAR ";
fonthx_model_font_features_LanguageTag.BAULE = "BAU ";
fonthx_model_font_features_LanguageTag.BATAKTOBA = "BBC ";
fonthx_model_font_features_LanguageTag.BERBER = "BBR ";
fonthx_model_font_features_LanguageTag.BENCH = "BCH ";
fonthx_model_font_features_LanguageTag.BIBLESCREE = "BCR ";
fonthx_model_font_features_LanguageTag.BANDJALANG = "BDY ";
fonthx_model_font_features_LanguageTag.BELARUSSIAN = "BEL ";
fonthx_model_font_features_LanguageTag.BEMBA = "BEM ";
fonthx_model_font_features_LanguageTag.BENGALI = "BEN ";
fonthx_model_font_features_LanguageTag.HARYANVI = "BGC ";
fonthx_model_font_features_LanguageTag.BAGRI = "BGQ ";
fonthx_model_font_features_LanguageTag.BULGARIAN = "BGR ";
fonthx_model_font_features_LanguageTag.BHILI = "BHI ";
fonthx_model_font_features_LanguageTag.BHOJPURI = "BHO ";
fonthx_model_font_features_LanguageTag.BIKOL = "BIK ";
fonthx_model_font_features_LanguageTag.BILEN = "BIL ";
fonthx_model_font_features_LanguageTag.BISLAMA = "BIS ";
fonthx_model_font_features_LanguageTag.KANAUJI = "BJJ ";
fonthx_model_font_features_LanguageTag.BLACKFOOT = "BKF ";
fonthx_model_font_features_LanguageTag.BALUCHI = "BLI ";
fonthx_model_font_features_LanguageTag.PAOKAREN = "BLK ";
fonthx_model_font_features_LanguageTag.BALANTE = "BLN ";
fonthx_model_font_features_LanguageTag.BALTI = "BLT ";
fonthx_model_font_features_LanguageTag.BAMBARA = "BMB ";
fonthx_model_font_features_LanguageTag.BAMILEKE = "BML ";
fonthx_model_font_features_LanguageTag.BOSNIAN = "BOS ";
fonthx_model_font_features_LanguageTag.BISHNUPRIYAMANIPURI = "BPY ";
fonthx_model_font_features_LanguageTag.BRETON = "BRE ";
fonthx_model_font_features_LanguageTag.BRAHUI = "BRH ";
fonthx_model_font_features_LanguageTag.BRAJBHASHA = "BRI ";
fonthx_model_font_features_LanguageTag.BURMESE = "BRM ";
fonthx_model_font_features_LanguageTag.BODO = "BRX ";
fonthx_model_font_features_LanguageTag.BASHKIR = "BSH ";
fonthx_model_font_features_LanguageTag.BURUSHASKI = "BSK ";
fonthx_model_font_features_LanguageTag.BETI = "BTI ";
fonthx_model_font_features_LanguageTag.BATAKSIMALUNGUN = "BTS ";
fonthx_model_font_features_LanguageTag.BUGIS = "BUG ";
fonthx_model_font_features_LanguageTag.MEDUMBA = "BYV ";
fonthx_model_font_features_LanguageTag.KAQCHIKEL = "CAK ";
fonthx_model_font_features_LanguageTag.CATALAN = "CAT ";
fonthx_model_font_features_LanguageTag.ZAMBOANGACHAVACANO = "CBK ";
fonthx_model_font_features_LanguageTag.CEBUANO = "CEB ";
fonthx_model_font_features_LanguageTag.CHECHEN = "CHE ";
fonthx_model_font_features_LanguageTag.CHAHAGURAGE = "CHG ";
fonthx_model_font_features_LanguageTag.CHATTISGARHI = "CHH ";
fonthx_model_font_features_LanguageTag.CHICHEWA = "CHI ";
fonthx_model_font_features_LanguageTag.CHUKCHI = "CHK ";
fonthx_model_font_features_LanguageTag.CHOCTAW = "CHO ";
fonthx_model_font_features_LanguageTag.CHIPEWYAN = "CHP ";
fonthx_model_font_features_LanguageTag.CHEROKEE = "CHR ";
fonthx_model_font_features_LanguageTag.CHAMORRO = "CHA ";
fonthx_model_font_features_LanguageTag.CHUVASH = "CHU ";
fonthx_model_font_features_LanguageTag.CHEYENNE = "CHY ";
fonthx_model_font_features_LanguageTag.CHIGA = "CGG ";
fonthx_model_font_features_LanguageTag.WESTERNCHAM = "CJA ";
fonthx_model_font_features_LanguageTag.EASTERNCHAM = "CJM ";
fonthx_model_font_features_LanguageTag.COMORIAN = "CMR ";
fonthx_model_font_features_LanguageTag.COPTIC = "COP ";
fonthx_model_font_features_LanguageTag.CORNISH = "COR ";
fonthx_model_font_features_LanguageTag.CORSICAN = "COS ";
fonthx_model_font_features_LanguageTag.CREOLES = "CPP ";
fonthx_model_font_features_LanguageTag.CREE = "CRE ";
fonthx_model_font_features_LanguageTag.CARRIER = "CRR ";
fonthx_model_font_features_LanguageTag.CRIMEANTATAR = "CRT ";
fonthx_model_font_features_LanguageTag.KASHUBIAN = "CSB ";
fonthx_model_font_features_LanguageTag.CHURCHSLAVONIC = "CSL ";
fonthx_model_font_features_LanguageTag.CZECH = "CSY ";
fonthx_model_font_features_LanguageTag.CHITTAGONIAN = "CTG ";
fonthx_model_font_features_LanguageTag.SANBLASKUNA = "CUK ";
fonthx_model_font_features_LanguageTag.DANISH = "DAN ";
fonthx_model_font_features_LanguageTag.DARGWA = "DAR ";
fonthx_model_font_features_LanguageTag.DAYI = "DAX ";
fonthx_model_font_features_LanguageTag.WOODSCREE = "DCR ";
fonthx_model_font_features_LanguageTag.GERMAN = "DEU ";
fonthx_model_font_features_LanguageTag.DOGRI = "DGO ";
fonthx_model_font_features_LanguageTag.DOGRI2 = "DGR ";
fonthx_model_font_features_LanguageTag.DHANGU = "DHG ";
fonthx_model_font_features_LanguageTag.DIVEHI = "DHV ";
fonthx_model_font_features_LanguageTag.DIMLI = "DIQ ";
fonthx_model_font_features_LanguageTag.ZARMA = "DJR ";
fonthx_model_font_features_LanguageTag.DANGME = "DNG ";
fonthx_model_font_features_LanguageTag.DAN = "DNJ ";
fonthx_model_font_features_LanguageTag.DINKA = "DNK ";
fonthx_model_font_features_LanguageTag.DARI = "DRI ";
fonthx_model_font_features_LanguageTag.DHUWAL = "DUJ ";
fonthx_model_font_features_LanguageTag.DUNGAN = "DUN ";
fonthx_model_font_features_LanguageTag.DZONGKHA = "DZN ";
fonthx_model_font_features_LanguageTag.EBIRA = "EBI ";
fonthx_model_font_features_LanguageTag.EASTERNCREE = "ECR ";
fonthx_model_font_features_LanguageTag.EDO = "EDO ";
fonthx_model_font_features_LanguageTag.EFIK = "EFI ";
fonthx_model_font_features_LanguageTag.GREEK = "ELL ";
fonthx_model_font_features_LanguageTag.EASTERNMANINKAKAN = "EMK ";
fonthx_model_font_features_LanguageTag.ENGLISH = "ENG ";
fonthx_model_font_features_LanguageTag.ERZYA = "ERZ ";
fonthx_model_font_features_LanguageTag.SPANISH = "ESP ";
fonthx_model_font_features_LanguageTag.CENTRALYUPIK = "ESU ";
fonthx_model_font_features_LanguageTag.ESTONIAN = "ETI ";
fonthx_model_font_features_LanguageTag.BASQUE = "EUQ ";
fonthx_model_font_features_LanguageTag.EVENKI = "EVK ";
fonthx_model_font_features_LanguageTag.EVEN = "EVN ";
fonthx_model_font_features_LanguageTag.EWE = "EWE ";
fonthx_model_font_features_LanguageTag.FRENCHANTILLEAN = "FAN ";
fonthx_model_font_features_LanguageTag.PERSIAN = "FAR ";
fonthx_model_font_features_LanguageTag.FANTI = "FAT ";
fonthx_model_font_features_LanguageTag.FINNISH = "FIN ";
fonthx_model_font_features_LanguageTag.FIJIAN = "FJI ";
fonthx_model_font_features_LanguageTag.FLEMISH = "FLE ";
fonthx_model_font_features_LanguageTag.FEFE = "FMP ";
fonthx_model_font_features_LanguageTag.FORESTNENETS = "FNE ";
fonthx_model_font_features_LanguageTag.FON = "FON ";
fonthx_model_font_features_LanguageTag.FAROESE = "FOS ";
fonthx_model_font_features_LanguageTag.FRENCH = "FRA ";
fonthx_model_font_features_LanguageTag.CAJUNFRENCH = "FRC ";
fonthx_model_font_features_LanguageTag.FRISIAN = "FRI ";
fonthx_model_font_features_LanguageTag.FRIULIAN = "FRL ";
fonthx_model_font_features_LanguageTag.ARPITAN = "FRP ";
fonthx_model_font_features_LanguageTag.FUTA = "FTA ";
fonthx_model_font_features_LanguageTag.FULAH = "FUL ";
fonthx_model_font_features_LanguageTag.NIGERIANFULFULDE = "FUV ";
fonthx_model_font_features_LanguageTag.GA = "GAD ";
fonthx_model_font_features_LanguageTag.SCOTTISHGAELI = "GAE ";
fonthx_model_font_features_LanguageTag.GAGAUZ = "GAG ";
fonthx_model_font_features_LanguageTag.GALICIAN = "GAL ";
fonthx_model_font_features_LanguageTag.GARSHUNI = "GAR ";
fonthx_model_font_features_LanguageTag.GARHWALI = "GAW ";
fonthx_model_font_features_LanguageTag.GEEZ = "GEZ ";
fonthx_model_font_features_LanguageTag.GITHABUL = "GIH ";
fonthx_model_font_features_LanguageTag.GILYAK = "GIL ";
fonthx_model_font_features_LanguageTag.KPELLEGUINEA = "GKP ";
fonthx_model_font_features_LanguageTag.GILAKI = "GLK ";
fonthx_model_font_features_LanguageTag.GUMUZ = "GMZ ";
fonthx_model_font_features_LanguageTag.GUMATJ = "GNN ";
fonthx_model_font_features_LanguageTag.GOGO = "GOG ";
fonthx_model_font_features_LanguageTag.GONDI = "GON ";
fonthx_model_font_features_LanguageTag.GREENLANDIC = "GRN ";
fonthx_model_font_features_LanguageTag.GARO = "GRO ";
fonthx_model_font_features_LanguageTag.GUARANI = "GUA ";
fonthx_model_font_features_LanguageTag.WAYUU = "GUC ";
fonthx_model_font_features_LanguageTag.GUPAPUYNGU = "GUF ";
fonthx_model_font_features_LanguageTag.GUJARATI = "GUJ ";
fonthx_model_font_features_LanguageTag.GUSII = "GUZ ";
fonthx_model_font_features_LanguageTag.HAITIAN = "HAI ";
fonthx_model_font_features_LanguageTag.HALAM = "HAL ";
fonthx_model_font_features_LanguageTag.HARAUTI = "HAR ";
fonthx_model_font_features_LanguageTag.HAUSA = "HAU ";
fonthx_model_font_features_LanguageTag.HAWAIIAN = "HAW ";
fonthx_model_font_features_LanguageTag.HAYA = "HAY ";
fonthx_model_font_features_LanguageTag.HAZARAGI = "HAZ ";
fonthx_model_font_features_LanguageTag.HAMMERBANNA = "HBN ";
fonthx_model_font_features_LanguageTag.HERERO = "HER ";
fonthx_model_font_features_LanguageTag.HILIGAYNON = "HIL ";
fonthx_model_font_features_LanguageTag.HINDI = "HIN ";
fonthx_model_font_features_LanguageTag.HIGHMARI = "HMA ";
fonthx_model_font_features_LanguageTag.HMONG = "HMN ";
fonthx_model_font_features_LanguageTag.HIRIMOTU = "HMO ";
fonthx_model_font_features_LanguageTag.HINDKO = "HND ";
fonthx_model_font_features_LanguageTag.HARARI = "HRI ";
fonthx_model_font_features_LanguageTag.CROATIAN = "HRV ";
fonthx_model_font_features_LanguageTag.HUNGARIAN = "HUN ";
fonthx_model_font_features_LanguageTag.ARMENIAN = "HYE ";
fonthx_model_font_features_LanguageTag.IBAN = "IBA ";
fonthx_model_font_features_LanguageTag.IBIBIO = "IBB ";
fonthx_model_font_features_LanguageTag.IGBO = "IBO ";
fonthx_model_font_features_LanguageTag.IJOLANGUAGES = "IJO ";
fonthx_model_font_features_LanguageTag.IDO = "IDO ";
fonthx_model_font_features_LanguageTag.INTERLINGUE = "ILE ";
fonthx_model_font_features_LanguageTag.ILOKANO = "ILO ";
fonthx_model_font_features_LanguageTag.INTERLINGUA = "INA ";
fonthx_model_font_features_LanguageTag.INDONESIAN = "IND ";
fonthx_model_font_features_LanguageTag.INGUSH = "ING ";
fonthx_model_font_features_LanguageTag.INUKTITUT = "INU ";
fonthx_model_font_features_LanguageTag.INUPIAT = "IPK ";
fonthx_model_font_features_LanguageTag.IRISH = "IRI ";
fonthx_model_font_features_LanguageTag.IRISHTRADITIONAL = "IRT ";
fonthx_model_font_features_LanguageTag.ICELANDIC = "ISL ";
fonthx_model_font_features_LanguageTag.INARISAMI = "ISM ";
fonthx_model_font_features_LanguageTag.ITALIAN = "ITA ";
fonthx_model_font_features_LanguageTag.HEBREW = "IWR ";
fonthx_model_font_features_LanguageTag.JAMAICANCREOLE = "JAM ";
fonthx_model_font_features_LanguageTag.JAPANESE = "JAN ";
fonthx_model_font_features_LanguageTag.JAVANESE = "JAV ";
fonthx_model_font_features_LanguageTag.LOJBAN = "JBO ";
fonthx_model_font_features_LanguageTag.KRYMCHAK = "JCT ";
fonthx_model_font_features_LanguageTag.YIDDISH = "JII ";
fonthx_model_font_features_LanguageTag.LADINO = "JUD ";
fonthx_model_font_features_LanguageTag.JULA = "JUL ";
fonthx_model_font_features_LanguageTag.KABARDIAN = "KAB ";
fonthx_model_font_features_LanguageTag.KACHCHI = "KAC ";
fonthx_model_font_features_LanguageTag.KALENJIN = "KAL ";
fonthx_model_font_features_LanguageTag.KANNADA = "KAN ";
fonthx_model_font_features_LanguageTag.KARACHAY = "KAR ";
fonthx_model_font_features_LanguageTag.GEORGIAN = "KAT ";
fonthx_model_font_features_LanguageTag.KAZAKH = "KAZ ";
fonthx_model_font_features_LanguageTag.MAKONDE = "KDE ";
fonthx_model_font_features_LanguageTag.KABUVERDIANUCRIOULO = "KEA ";
fonthx_model_font_features_LanguageTag.KEBENA = "KEB ";
fonthx_model_font_features_LanguageTag.KEKCHI = "KEK ";
fonthx_model_font_features_LanguageTag.KHUTSURIGEORGIAN = "KGE ";
fonthx_model_font_features_LanguageTag.KHAKASS = "KHA ";
fonthx_model_font_features_LanguageTag.KHANTYKAZIM = "KHK ";
fonthx_model_font_features_LanguageTag.KHMER = "KHM ";
fonthx_model_font_features_LanguageTag.KHANTYSHURISHKAR = "KHS ";
fonthx_model_font_features_LanguageTag.KHAMTISHAN = "KHT ";
fonthx_model_font_features_LanguageTag.KHANTYVAKHI = "KHV ";
fonthx_model_font_features_LanguageTag.KHOWAR = "KHW ";
fonthx_model_font_features_LanguageTag.KIKUYUGIKUYU = "KIK ";
fonthx_model_font_features_LanguageTag.KIRGHIZKYRGYZ = "KIR ";
fonthx_model_font_features_LanguageTag.KISII = "KIS ";
fonthx_model_font_features_LanguageTag.KIRMANJKI = "KIU ";
fonthx_model_font_features_LanguageTag.SOUTHERNKIWAI = "KJD ";
fonthx_model_font_features_LanguageTag.EASTERNPWOKAREN = "KJP ";
fonthx_model_font_features_LanguageTag.BUMTHANGKHA = "KJZ ";
fonthx_model_font_features_LanguageTag.KOKNI = "KKN ";
fonthx_model_font_features_LanguageTag.KALMYK = "KLM ";
fonthx_model_font_features_LanguageTag.KAMBA = "KMB ";
fonthx_model_font_features_LanguageTag.KUMAONI = "KMN ";
fonthx_model_font_features_LanguageTag.KOMO = "KMO ";
fonthx_model_font_features_LanguageTag.KOMSO = "KMS ";
fonthx_model_font_features_LanguageTag.KHORASANITURKIC = "KMZ ";
fonthx_model_font_features_LanguageTag.KANURI = "KNR ";
fonthx_model_font_features_LanguageTag.KODAGU = "KOD ";
fonthx_model_font_features_LanguageTag.KOREANOLDHANGUL = "KOH ";
fonthx_model_font_features_LanguageTag.KONKANI = "KOK ";
fonthx_model_font_features_LanguageTag.KIKONGO = "KON ";
fonthx_model_font_features_LanguageTag.KOMI = "KOM ";
fonthx_model_font_features_LanguageTag.KOMIPERMYAK = "KOP ";
fonthx_model_font_features_LanguageTag.KOREAN = "KOR ";
fonthx_model_font_features_LanguageTag.KOSRAEAN = "KOS ";
fonthx_model_font_features_LanguageTag.KOMIZYRIAN = "KOZ ";
fonthx_model_font_features_LanguageTag.KPELLE = "KPL ";
fonthx_model_font_features_LanguageTag.KRIO = "KRI ";
fonthx_model_font_features_LanguageTag.KARAKALPAK = "KRK ";
fonthx_model_font_features_LanguageTag.KARELIAN = "KRL ";
fonthx_model_font_features_LanguageTag.KARAIM = "KRM ";
fonthx_model_font_features_LanguageTag.KAREN = "KRN ";
fonthx_model_font_features_LanguageTag.KOORETE = "KRT ";
fonthx_model_font_features_LanguageTag.KASHMIRI = "KSH ";
fonthx_model_font_features_LanguageTag.KHASI = "KSI ";
fonthx_model_font_features_LanguageTag.KILDINSAMI = "KSM ";
fonthx_model_font_features_LanguageTag.SGAWKAREN = "KSW ";
fonthx_model_font_features_LanguageTag.KUANYAMA = "KUA ";
fonthx_model_font_features_LanguageTag.KUI = "KUI ";
fonthx_model_font_features_LanguageTag.KULVI = "KUL ";
fonthx_model_font_features_LanguageTag.KUMYK = "KUM ";
fonthx_model_font_features_LanguageTag.KURDISH = "KUR ";
fonthx_model_font_features_LanguageTag.KURUKH = "KUU ";
fonthx_model_font_features_LanguageTag.KUY = "KUY ";
fonthx_model_font_features_LanguageTag.KORYAK = "KYK ";
fonthx_model_font_features_LanguageTag.WESTERNKAYAH = "KYU ";
fonthx_model_font_features_LanguageTag.LADIN = "LAD ";
fonthx_model_font_features_LanguageTag.LAHULI = "LAH ";
fonthx_model_font_features_LanguageTag.LAK = "LAK ";
fonthx_model_font_features_LanguageTag.LAMBANI = "LAM ";
fonthx_model_font_features_LanguageTag.LAO = "LAO ";
fonthx_model_font_features_LanguageTag.LATIN = "LAT ";
fonthx_model_font_features_LanguageTag.LAZ = "LAZ ";
fonthx_model_font_features_LanguageTag.LCREE = "LCR ";
fonthx_model_font_features_LanguageTag.LADAKHI = "LDK ";
fonthx_model_font_features_LanguageTag.LEZGI = "LEZ ";
fonthx_model_font_features_LanguageTag.LIGURIAN = "LIJ ";
fonthx_model_font_features_LanguageTag.LIMBURGISH = "LIM ";
fonthx_model_font_features_LanguageTag.LINGALA = "LIN ";
fonthx_model_font_features_LanguageTag.LISU = "LIS ";
fonthx_model_font_features_LanguageTag.LAMPUNG = "LJP ";
fonthx_model_font_features_LanguageTag.LAKI = "LKI ";
fonthx_model_font_features_LanguageTag.LOWMARI = "LMA ";
fonthx_model_font_features_LanguageTag.LIMBU = "LMB ";
fonthx_model_font_features_LanguageTag.LOMBARD = "LMO ";
fonthx_model_font_features_LanguageTag.LOMWE = "LMW ";
fonthx_model_font_features_LanguageTag.LOMA = "LOM ";
fonthx_model_font_features_LanguageTag.LURI = "LRC ";
fonthx_model_font_features_LanguageTag.LOWERSORBIAN = "LSB ";
fonthx_model_font_features_LanguageTag.LULESAMI = "LSM ";
fonthx_model_font_features_LanguageTag.LITHUANIAN = "LTH ";
fonthx_model_font_features_LanguageTag.LUXEMBOURGISH = "LTZ ";
fonthx_model_font_features_LanguageTag.LUBALULUA = "LUA ";
fonthx_model_font_features_LanguageTag.LUBAKATANGA = "LUB ";
fonthx_model_font_features_LanguageTag.GANDA = "LUG ";
fonthx_model_font_features_LanguageTag.LUYIA = "LUH ";
fonthx_model_font_features_LanguageTag.LUO = "LUO ";
fonthx_model_font_features_LanguageTag.LATVIAN = "LVI ";
fonthx_model_font_features_LanguageTag.MADURA = "MAD ";
fonthx_model_font_features_LanguageTag.MAGAHI = "MAG ";
fonthx_model_font_features_LanguageTag.MARSHALLESE = "MAH ";
fonthx_model_font_features_LanguageTag.MAJANG = "MAJ ";
fonthx_model_font_features_LanguageTag.MAKHUWA = "MAK ";
fonthx_model_font_features_LanguageTag.MALAYALAM = "MAL ";
fonthx_model_font_features_LanguageTag.MAM = "MAM ";
fonthx_model_font_features_LanguageTag.MANSI = "MAN ";
fonthx_model_font_features_LanguageTag.MAPUDUNGUN = "MAP ";
fonthx_model_font_features_LanguageTag.MARATHI = "MAR ";
fonthx_model_font_features_LanguageTag.MARWARI = "MAW ";
fonthx_model_font_features_LanguageTag.MBUNDU = "MBN ";
fonthx_model_font_features_LanguageTag.MBO = "MBO ";
fonthx_model_font_features_LanguageTag.MANCHU = "MCH ";
fonthx_model_font_features_LanguageTag.MOOSECREE = "MCR ";
fonthx_model_font_features_LanguageTag.MENDE = "MDE ";
fonthx_model_font_features_LanguageTag.MANDAR = "MDR ";
fonthx_model_font_features_LanguageTag.MEEN = "MEN ";
fonthx_model_font_features_LanguageTag.MERU = "MER ";
fonthx_model_font_features_LanguageTag.PATTANIMALAY = "MFA ";
fonthx_model_font_features_LanguageTag.MORISYEN = "MFE ";
fonthx_model_font_features_LanguageTag.MINANGKABAU = "MIN ";
fonthx_model_font_features_LanguageTag.MIZO = "MIZ ";
fonthx_model_font_features_LanguageTag.MACEDONIAN = "MKD ";
fonthx_model_font_features_LanguageTag.MAKASAR = "MKR ";
fonthx_model_font_features_LanguageTag.KITUBA = "MKW ";
fonthx_model_font_features_LanguageTag.MALE = "MLE ";
fonthx_model_font_features_LanguageTag.MALAGASY = "MLG ";
fonthx_model_font_features_LanguageTag.MALINKE = "MLN ";
fonthx_model_font_features_LanguageTag.MALAYALAMREFORMED = "MLR ";
fonthx_model_font_features_LanguageTag.MALAY = "MLY ";
fonthx_model_font_features_LanguageTag.MANDINKA = "MND ";
fonthx_model_font_features_LanguageTag.MONGOLIAN = "MNG ";
fonthx_model_font_features_LanguageTag.MANIPURI = "MNI ";
fonthx_model_font_features_LanguageTag.MANINKA = "MNK ";
fonthx_model_font_features_LanguageTag.MANX = "MNX ";
fonthx_model_font_features_LanguageTag.MOHAWK = "MOH ";
fonthx_model_font_features_LanguageTag.MOKSHA = "MOK ";
fonthx_model_font_features_LanguageTag.MOLDAVIAN = "MOL ";
fonthx_model_font_features_LanguageTag.MON = "MON ";
fonthx_model_font_features_LanguageTag.MOROCCAN = "MOR ";
fonthx_model_font_features_LanguageTag.MOSSI = "MOS ";
fonthx_model_font_features_LanguageTag.MAORI = "MRI ";
fonthx_model_font_features_LanguageTag.MAITHILI = "MTH ";
fonthx_model_font_features_LanguageTag.MALTESE = "MTS ";
fonthx_model_font_features_LanguageTag.MUNDARI = "MUN ";
fonthx_model_font_features_LanguageTag.MUSCOGEE = "MUS ";
fonthx_model_font_features_LanguageTag.MIRANDESE = "MWL ";
fonthx_model_font_features_LanguageTag.HMONGDAW = "MWW ";
fonthx_model_font_features_LanguageTag.MAYAN = "MYN ";
fonthx_model_font_features_LanguageTag.MAZANDERANI = "MZN ";
fonthx_model_font_features_LanguageTag.NAGAASSAMESE = "NAG ";
fonthx_model_font_features_LanguageTag.NAHUATL = "NAH ";
fonthx_model_font_features_LanguageTag.NANAI = "NAN ";
fonthx_model_font_features_LanguageTag.NEAPOLITAN = "NAP ";
fonthx_model_font_features_LanguageTag.NASKAPI = "NAS ";
fonthx_model_font_features_LanguageTag.NAURUAN = "NAU ";
fonthx_model_font_features_LanguageTag.NAVAJO = "NAV ";
fonthx_model_font_features_LanguageTag.NCREE = "NCR ";
fonthx_model_font_features_LanguageTag.NDEBELE = "NDB ";
fonthx_model_font_features_LanguageTag.NDAU = "NDC ";
fonthx_model_font_features_LanguageTag.NDONGA = "NDG ";
fonthx_model_font_features_LanguageTag.LOSAXON = "NDS ";
fonthx_model_font_features_LanguageTag.NEPALI = "NEP ";
fonthx_model_font_features_LanguageTag.NEWARI = "NEW ";
fonthx_model_font_features_LanguageTag.NGBAKA = "NGA ";
fonthx_model_font_features_LanguageTag.NAGARI = "NGR ";
fonthx_model_font_features_LanguageTag.NORWAYHOUSECREE = "NHC ";
fonthx_model_font_features_LanguageTag.NISI = "NIS ";
fonthx_model_font_features_LanguageTag.NIUEAN = "NIU ";
fonthx_model_font_features_LanguageTag.NYANKOLE = "NKL ";
fonthx_model_font_features_LanguageTag.NKO = "NKO ";
fonthx_model_font_features_LanguageTag.DUTCH = "NLD ";
fonthx_model_font_features_LanguageTag.NIMADI = "NOE ";
fonthx_model_font_features_LanguageTag.NOGAI = "NOG ";
fonthx_model_font_features_LanguageTag.NORWEGIAN = "NOR ";
fonthx_model_font_features_LanguageTag.NOVIAL = "NOV ";
fonthx_model_font_features_LanguageTag.NORTHERNSAMI = "NSM ";
fonthx_model_font_features_LanguageTag.SOTHONORTHERN = "NSO ";
fonthx_model_font_features_LanguageTag.NORTHERNTAI = "NTA ";
fonthx_model_font_features_LanguageTag.ESPERANTO = "NTO ";
fonthx_model_font_features_LanguageTag.NYAMWEZI = "NYM ";
fonthx_model_font_features_LanguageTag.NORWEGIANNYNORSK = "NYN ";
fonthx_model_font_features_LanguageTag.MBEMBETIGON = "NZA ";
fonthx_model_font_features_LanguageTag.OCCITAN = "OCI ";
fonthx_model_font_features_LanguageTag.OJICREE = "OCR ";
fonthx_model_font_features_LanguageTag.OJIBWAY = "OJB ";
fonthx_model_font_features_LanguageTag.ODIA = "ORI ";
fonthx_model_font_features_LanguageTag.OROMO = "ORO ";
fonthx_model_font_features_LanguageTag.OSSETIAN = "OSS ";
fonthx_model_font_features_LanguageTag.PALESTINIANARAMAIC = "PAA ";
fonthx_model_font_features_LanguageTag.PANGASINAN = "PAG ";
fonthx_model_font_features_LanguageTag.PALI = "PAL ";
fonthx_model_font_features_LanguageTag.PAMPANGAN = "PAM ";
fonthx_model_font_features_LanguageTag.PUNJABI = "PAN ";
fonthx_model_font_features_LanguageTag.PALPA = "PAP ";
fonthx_model_font_features_LanguageTag.PASHTO = "PAS ";
fonthx_model_font_features_LanguageTag.PALAUAN = "PAU ";
fonthx_model_font_features_LanguageTag.BOUYEI = "PCC ";
fonthx_model_font_features_LanguageTag.PICARD = "PCD ";
fonthx_model_font_features_LanguageTag.PENNSYLVANIAGERMAN = "PDC ";
fonthx_model_font_features_LanguageTag.POLYTONICGREEK = "PGR ";
fonthx_model_font_features_LanguageTag.PHAKE = "PHK ";
fonthx_model_font_features_LanguageTag.NORFOLK = "PIH ";
fonthx_model_font_features_LanguageTag.FILIPINO = "PIL ";
fonthx_model_font_features_LanguageTag.PALAUNG = "PLG ";
fonthx_model_font_features_LanguageTag.POLISH = "PLK ";
fonthx_model_font_features_LanguageTag.PIEMONTESE = "PMS ";
fonthx_model_font_features_LanguageTag.WESTERNPANJABI = "PNB ";
fonthx_model_font_features_LanguageTag.POCOMCHI = "POH ";
fonthx_model_font_features_LanguageTag.POHNPEIAN = "PON ";
fonthx_model_font_features_LanguageTag.PROVENCAL = "PRO ";
fonthx_model_font_features_LanguageTag.PORTUGUESE = "PTG ";
fonthx_model_font_features_LanguageTag.WESTERNPWOKAREN = "PWO ";
fonthx_model_font_features_LanguageTag.CHIN = "QIN ";
fonthx_model_font_features_LanguageTag.KICHE = "QUC ";
fonthx_model_font_features_LanguageTag.QUECHUABOLIVIA = "QUH ";
fonthx_model_font_features_LanguageTag.QUECHUA = "QUZ ";
fonthx_model_font_features_LanguageTag.QUECHUAECUADOR = "QVI ";
fonthx_model_font_features_LanguageTag.QUECHUAPERU = "QWH ";
fonthx_model_font_features_LanguageTag.RAJASTHANI = "RAJ ";
fonthx_model_font_features_LanguageTag.RAROTONGAN = "RAR ";
fonthx_model_font_features_LanguageTag.RUSSIANBURIAT = "RBU ";
fonthx_model_font_features_LanguageTag.RCREE = "RCR ";
fonthx_model_font_features_LanguageTag.REJANG = "REJ ";
fonthx_model_font_features_LanguageTag.RIANG = "RIA ";
fonthx_model_font_features_LanguageTag.TARIFIT = "RIF ";
fonthx_model_font_features_LanguageTag.RITARUNGO = "RIT ";
fonthx_model_font_features_LanguageTag.ARAKWAL = "RKW ";
fonthx_model_font_features_LanguageTag.ROMANSH = "RMS ";
fonthx_model_font_features_LanguageTag.VLAXROMANI = "RMY ";
fonthx_model_font_features_LanguageTag.ROMANIAN = "ROM ";
fonthx_model_font_features_LanguageTag.ROMANY = "ROY ";
fonthx_model_font_features_LanguageTag.RUSYN = "RSY ";
fonthx_model_font_features_LanguageTag.ROTUMAN = "RTM ";
fonthx_model_font_features_LanguageTag.KINYARWANDA = "RUA ";
fonthx_model_font_features_LanguageTag.RUNDI = "RUN ";
fonthx_model_font_features_LanguageTag.AROMANIAN = "RUP ";
fonthx_model_font_features_LanguageTag.RUSSIAN = "RUS ";
fonthx_model_font_features_LanguageTag.SADRI = "SAD ";
fonthx_model_font_features_LanguageTag.SANSKRIT = "SAN ";
fonthx_model_font_features_LanguageTag.SASAK = "SAS ";
fonthx_model_font_features_LanguageTag.SANTALI = "SAT ";
fonthx_model_font_features_LanguageTag.SAYISI = "SAY ";
fonthx_model_font_features_LanguageTag.SICILIAN = "SCN ";
fonthx_model_font_features_LanguageTag.SCOTS = "SCO ";
fonthx_model_font_features_LanguageTag.SEKOTA = "SEK ";
fonthx_model_font_features_LanguageTag.SELKUP = "SEL ";
fonthx_model_font_features_LanguageTag.OLDIRISH = "SGA ";
fonthx_model_font_features_LanguageTag.SANGO = "SGO ";
fonthx_model_font_features_LanguageTag.SAMOGITIAN = "SGS ";
fonthx_model_font_features_LanguageTag.TACHELHIT = "SHI ";
fonthx_model_font_features_LanguageTag.SHAN = "SHN ";
fonthx_model_font_features_LanguageTag.SIBE = "SIB ";
fonthx_model_font_features_LanguageTag.SIDAMO = "SID ";
fonthx_model_font_features_LanguageTag.SILTEGURAGE = "SIG ";
fonthx_model_font_features_LanguageTag.SKOLTSAMI = "SKS ";
fonthx_model_font_features_LanguageTag.SLOVAK = "SKY ";
fonthx_model_font_features_LanguageTag.NORTHSLAVEY = "SCS ";
fonthx_model_font_features_LanguageTag.SLAVEY = "SLA ";
fonthx_model_font_features_LanguageTag.SLOVENIAN = "SLV ";
fonthx_model_font_features_LanguageTag.SOMALI = "SML ";
fonthx_model_font_features_LanguageTag.SAMOAN = "SMO ";
fonthx_model_font_features_LanguageTag.SENA = "SNA ";
fonthx_model_font_features_LanguageTag.SINDHI = "SND ";
fonthx_model_font_features_LanguageTag.SINHALASINHALESE = "SNH ";
fonthx_model_font_features_LanguageTag.SONINKE = "SNK ";
fonthx_model_font_features_LanguageTag.SODOGURAGE = "SOG ";
fonthx_model_font_features_LanguageTag.SONGE = "SOP ";
fonthx_model_font_features_LanguageTag.SOTHOSOUTHERN = "SOT ";
fonthx_model_font_features_LanguageTag.ALBANIAN = "SQI ";
fonthx_model_font_features_LanguageTag.SERBIAN = "SRB ";
fonthx_model_font_features_LanguageTag.SARDINIAN = "SRD ";
fonthx_model_font_features_LanguageTag.SARAIKI = "SRK ";
fonthx_model_font_features_LanguageTag.SERER = "SRR ";
fonthx_model_font_features_LanguageTag.SOUTHSLAVEY = "SSL ";
fonthx_model_font_features_LanguageTag.SOUTHERNSAMI = "SSM ";
fonthx_model_font_features_LanguageTag.SATERLANDFRISIAN = "STQ ";
fonthx_model_font_features_LanguageTag.SUKUMA = "SUK ";
fonthx_model_font_features_LanguageTag.SUNDANESE = "SUN ";
fonthx_model_font_features_LanguageTag.SURI = "SUR ";
fonthx_model_font_features_LanguageTag.SVAN = "SVA ";
fonthx_model_font_features_LanguageTag.SWEDISH = "SVE ";
fonthx_model_font_features_LanguageTag.SWADAYAARAMAIC = "SWA ";
fonthx_model_font_features_LanguageTag.SWAHILI = "SWK ";
fonthx_model_font_features_LanguageTag.SWATI = "SWZ ";
fonthx_model_font_features_LanguageTag.SUTU = "SXT ";
fonthx_model_font_features_LanguageTag.UPPERSAXON = "SXU ";
fonthx_model_font_features_LanguageTag.SYLHETI = "SYL ";
fonthx_model_font_features_LanguageTag.SYRIAC = "SYR ";
fonthx_model_font_features_LanguageTag.SYRIACESTRANGELA = "Syre";
fonthx_model_font_features_LanguageTag.SYRIACWESTERN = "Syrj";
fonthx_model_font_features_LanguageTag.SYRIACEASTERN = "Syrn";
fonthx_model_font_features_LanguageTag.SILESIAN = "SZL ";
fonthx_model_font_features_LanguageTag.TABASARAN = "TAB ";
fonthx_model_font_features_LanguageTag.TAJIKI = "TAJ ";
fonthx_model_font_features_LanguageTag.TAMIL = "TAM ";
fonthx_model_font_features_LanguageTag.TATAR = "TAT ";
fonthx_model_font_features_LanguageTag.THCREE = "TCR ";
fonthx_model_font_features_LanguageTag.DEHONDAI = "TDD ";
fonthx_model_font_features_LanguageTag.TELUGU = "TEL ";
fonthx_model_font_features_LanguageTag.TETUM = "TET ";
fonthx_model_font_features_LanguageTag.TAGALOG = "TGL ";
fonthx_model_font_features_LanguageTag.TONGAN = "TGN ";
fonthx_model_font_features_LanguageTag.TIGRE = "TGR ";
fonthx_model_font_features_LanguageTag.TIGRINYA = "TGY ";
fonthx_model_font_features_LanguageTag.THAI = "THA ";
fonthx_model_font_features_LanguageTag.TAHITIAN = "THT ";
fonthx_model_font_features_LanguageTag.TIBETAN = "TIB ";
fonthx_model_font_features_LanguageTag.TIV = "TIV ";
fonthx_model_font_features_LanguageTag.TURKMEN = "TKM ";
fonthx_model_font_features_LanguageTag.TAMASHEK = "TMH ";
fonthx_model_font_features_LanguageTag.TEMNE = "TMN ";
fonthx_model_font_features_LanguageTag.TSWANA = "TNA ";
fonthx_model_font_features_LanguageTag.TUNDRANENETS = "TNE ";
fonthx_model_font_features_LanguageTag.TONGA = "TNG ";
fonthx_model_font_features_LanguageTag.TODO = "TOD ";
fonthx_model_font_features_LanguageTag.TOKPISIN = "TPI ";
fonthx_model_font_features_LanguageTag.TURKISH = "TRK ";
fonthx_model_font_features_LanguageTag.TSONGA = "TSG ";
fonthx_model_font_features_LanguageTag.TSHANGLA = "TSJ ";
fonthx_model_font_features_LanguageTag.TUROYOARAMAIC = "TUA ";
fonthx_model_font_features_LanguageTag.TULU = "TUM ";
fonthx_model_font_features_LanguageTag.TUMBUKA = "TUL ";
fonthx_model_font_features_LanguageTag.TUVIN = "TUV ";
fonthx_model_font_features_LanguageTag.TUVALU = "TVL ";
fonthx_model_font_features_LanguageTag.TWI = "TWI ";
fonthx_model_font_features_LanguageTag.TAY = "TYZ ";
fonthx_model_font_features_LanguageTag.TAMAZIGHT = "TZM ";
fonthx_model_font_features_LanguageTag.TZOTZIL = "TZO ";
fonthx_model_font_features_LanguageTag.UDMURT = "UDM ";
fonthx_model_font_features_LanguageTag.UKRAINIAN = "UKR ";
fonthx_model_font_features_LanguageTag.UMBUNDU = "UMB ";
fonthx_model_font_features_LanguageTag.URDU = "URD ";
fonthx_model_font_features_LanguageTag.UPPERSORBIAN = "USB ";
fonthx_model_font_features_LanguageTag.UYGHUR = "UYG ";
fonthx_model_font_features_LanguageTag.UZBEK = "UZB ";
fonthx_model_font_features_LanguageTag.VENETIAN = "VEC ";
fonthx_model_font_features_LanguageTag.VENDA = "VEN ";
fonthx_model_font_features_LanguageTag.VIETNAMESE = "VIT ";
fonthx_model_font_features_LanguageTag.VOLAPUEK = "VOL ";
fonthx_model_font_features_LanguageTag.VOERO = "VRO ";
fonthx_model_font_features_LanguageTag.WAGDI = "WAG ";
fonthx_model_font_features_LanguageTag.WARAYWARAY = "WAR ";
fonthx_model_font_features_LanguageTag.WESTCREE = "WCR ";
fonthx_model_font_features_LanguageTag.WELSH = "WEL ";
fonthx_model_font_features_LanguageTag.WALLOON = "WLN ";
fonthx_model_font_features_LanguageTag.WOLOF = "WLF ";
fonthx_model_font_features_LanguageTag.MEWATI = "WTM ";
fonthx_model_font_features_LanguageTag.LUE = "XBD ";
fonthx_model_font_features_LanguageTag.KHENGKHA = "XKF ";
fonthx_model_font_features_LanguageTag.XHOSA = "XHS ";
fonthx_model_font_features_LanguageTag.MINJANGBAL = "XJB ";
fonthx_model_font_features_LanguageTag.SOGA = "XOG ";
fonthx_model_font_features_LanguageTag.KPELLELIBERIA = "XPE ";
fonthx_model_font_features_LanguageTag.SAKHA = "YAK ";
fonthx_model_font_features_LanguageTag.YAO = "YAO ";
fonthx_model_font_features_LanguageTag.YAPESE = "YAP ";
fonthx_model_font_features_LanguageTag.YORUBA = "YBA ";
fonthx_model_font_features_LanguageTag.YCREE = "YCR ";
fonthx_model_font_features_LanguageTag.YICLASSIC = "YIC ";
fonthx_model_font_features_LanguageTag.YIMODERN = "YIM ";
fonthx_model_font_features_LanguageTag.ZEALANDIC = "ZEA ";
fonthx_model_font_features_LanguageTag.STANDARDMOROCCANTAMAZIGHT = "ZGH ";
fonthx_model_font_features_LanguageTag.ZHUANG = "ZHA ";
fonthx_model_font_features_LanguageTag.CHINESEHONGKONGSAR = "ZHH ";
fonthx_model_font_features_LanguageTag.CHINESEPHONETIC = "ZHP ";
fonthx_model_font_features_LanguageTag.CHINESESIMPLIFIED = "ZHS ";
fonthx_model_font_features_LanguageTag.CHINESETRADITIONAL = "ZHT ";
fonthx_model_font_features_LanguageTag.ZANDE = "ZND ";
fonthx_model_font_features_LanguageTag.ZULU = "ZUL ";
fonthx_model_font_features_LanguageTag.ZAZAKI = "ZZA ";
fonthx_model_font_features_ScriptTag.LATIN = "latn";
fonthx_model_font_features_ScriptTag.ADLAM = "adlm";
fonthx_model_font_features_ScriptTag.AHOM = "ahom";
fonthx_model_font_features_ScriptTag.ANATOLIANHIEROGLYPHS = "hluw";
fonthx_model_font_features_ScriptTag.ARABIC = "arab";
fonthx_model_font_features_ScriptTag.ARMENIAN = "armn";
fonthx_model_font_features_ScriptTag.AVESTAN = "avst";
fonthx_model_font_features_ScriptTag.BALINESE = "bali";
fonthx_model_font_features_ScriptTag.BAMUM = "bamu";
fonthx_model_font_features_ScriptTag.BASSAVAH = "bass";
fonthx_model_font_features_ScriptTag.BATAK = "batk";
fonthx_model_font_features_ScriptTag.BENGALI = "beng";
fonthx_model_font_features_ScriptTag.BENGALI2 = "bng2";
fonthx_model_font_features_ScriptTag.BHAIKSUKI = "bhks";
fonthx_model_font_features_ScriptTag.BOPOMOFO = "bopo";
fonthx_model_font_features_ScriptTag.BRAHMI = "brah";
fonthx_model_font_features_ScriptTag.BRAILLE = "brai";
fonthx_model_font_features_ScriptTag.BUGINESE = "bugi";
fonthx_model_font_features_ScriptTag.BUHID = "buhd";
fonthx_model_font_features_ScriptTag.BYZANTINEMUSIC = "byzm";
fonthx_model_font_features_ScriptTag.CANADIANSYLLABICS = "cans";
fonthx_model_font_features_ScriptTag.CARIAN = "cari";
fonthx_model_font_features_ScriptTag.CAUCASIANALBANIAN = "aghb";
fonthx_model_font_features_ScriptTag.CHAKMA = "cakm";
fonthx_model_font_features_ScriptTag.CHAM = "cham";
fonthx_model_font_features_ScriptTag.CHEROKEE = "cher";
fonthx_model_font_features_ScriptTag.CJKIDEOGRAPHIC = "hani";
fonthx_model_font_features_ScriptTag.COPTIC = "copt";
fonthx_model_font_features_ScriptTag.CYPRIOTSYLLABARY = "cprt";
fonthx_model_font_features_ScriptTag.CYRILLIC = "cyrl";
fonthx_model_font_features_ScriptTag.DEFAULT = "DFLT";
fonthx_model_font_features_ScriptTag.DESERET = "dsrt";
fonthx_model_font_features_ScriptTag.DEVANAGARI = "deva";
fonthx_model_font_features_ScriptTag.DEVANAGARI2 = "dev2";
fonthx_model_font_features_ScriptTag.DOGRA = "dogr";
fonthx_model_font_features_ScriptTag.DUPLOYAN = "dupl";
fonthx_model_font_features_ScriptTag.EGYPTIANHIEROGLYPHS = "egyp";
fonthx_model_font_features_ScriptTag.ELBASAN = "elba";
fonthx_model_font_features_ScriptTag.ETHIOPIC = "ethi";
fonthx_model_font_features_ScriptTag.GEORGIAN = "geor";
fonthx_model_font_features_ScriptTag.GLAGOLITIC = "glag";
fonthx_model_font_features_ScriptTag.GOTHIC = "goth";
fonthx_model_font_features_ScriptTag.GRANTHA = "gran";
fonthx_model_font_features_ScriptTag.GREEK = "grek";
fonthx_model_font_features_ScriptTag.GUJARATI = "gujr";
fonthx_model_font_features_ScriptTag.GUJARATI2 = "gjr2";
fonthx_model_font_features_ScriptTag.GUNJALAGONDI = "gong";
fonthx_model_font_features_ScriptTag.GURMUKHI = "guru";
fonthx_model_font_features_ScriptTag.GURMUKHI2 = "gur2";
fonthx_model_font_features_ScriptTag.HANGUL = "hang";
fonthx_model_font_features_ScriptTag.HANGULJAMO = "jamo";
fonthx_model_font_features_ScriptTag.HANIFIROHINGYA = "rohg";
fonthx_model_font_features_ScriptTag.HANUNOO = "hano";
fonthx_model_font_features_ScriptTag.HATRAN = "hatr";
fonthx_model_font_features_ScriptTag.HEBREW = "hebr";
fonthx_model_font_features_ScriptTag.HIRAGANA = "kana";
fonthx_model_font_features_ScriptTag.IMPERIALARAMAIC = "armi";
fonthx_model_font_features_ScriptTag.INSCRIPTIONALPAHLAVI = "phli";
fonthx_model_font_features_ScriptTag.INSCRIPTIONALPARTHIAN = "prti";
fonthx_model_font_features_ScriptTag.JAVANESE = "java";
fonthx_model_font_features_ScriptTag.KAITHI = "kthi";
fonthx_model_font_features_ScriptTag.KANNADA = "knda";
fonthx_model_font_features_ScriptTag.KANNADA2 = "knd2";
fonthx_model_font_features_ScriptTag.KATAKANA = "kana";
fonthx_model_font_features_ScriptTag.KAYAHLI = "kali";
fonthx_model_font_features_ScriptTag.KHAROSTHI = "khar";
fonthx_model_font_features_ScriptTag.KHMER = "khmr";
fonthx_model_font_features_ScriptTag.KHOJKI = "khoj";
fonthx_model_font_features_ScriptTag.KHUDAWADI = "sind";
fonthx_model_font_features_ScriptTag.LAO = "lao ";
fonthx_model_font_features_ScriptTag.LEPCHA = "lepc";
fonthx_model_font_features_ScriptTag.LIMBU = "limb";
fonthx_model_font_features_ScriptTag.LINEARA = "lina";
fonthx_model_font_features_ScriptTag.LINEARB = "linb";
fonthx_model_font_features_ScriptTag.LISUFRASER = "lisu";
fonthx_model_font_features_ScriptTag.LYCIAN = "lyci";
fonthx_model_font_features_ScriptTag.LYDIAN = "lydi";
fonthx_model_font_features_ScriptTag.MAHAJANI = "mahj";
fonthx_model_font_features_ScriptTag.MAKASAR = "maka";
fonthx_model_font_features_ScriptTag.MALAYALAM = "mlym";
fonthx_model_font_features_ScriptTag.MALAYALAM2 = "mlm2";
fonthx_model_font_features_ScriptTag.MANDAICMANDAEAN = "mand";
fonthx_model_font_features_ScriptTag.MANICHAEAN = "mani";
fonthx_model_font_features_ScriptTag.MARCHEN = "marc";
fonthx_model_font_features_ScriptTag.MASARAMGONDI = "gonm";
fonthx_model_font_features_ScriptTag.MATHEMATICALALPHANUMERICSYMBOLS = "math";
fonthx_model_font_features_ScriptTag.MEDEFAIDRINX = "medf";
fonthx_model_font_features_ScriptTag.MEITEIMAYEK = "mtei";
fonthx_model_font_features_ScriptTag.MENDEKIKAKUI = "mend";
fonthx_model_font_features_ScriptTag.MEROITICCURSIVE = "merc";
fonthx_model_font_features_ScriptTag.MEROITICHIEROGLYPHS = "mero";
fonthx_model_font_features_ScriptTag.MIAO = "plrd";
fonthx_model_font_features_ScriptTag.MODI = "modi";
fonthx_model_font_features_ScriptTag.MONGOLIAN = "mong";
fonthx_model_font_features_ScriptTag.MRO = "mroo";
fonthx_model_font_features_ScriptTag.MULTANI = "mult";
fonthx_model_font_features_ScriptTag.MUSICALSYMBOLS = "musc";
fonthx_model_font_features_ScriptTag.MYANMAR = "mymr";
fonthx_model_font_features_ScriptTag.MYANMAR2 = "mym2";
fonthx_model_font_features_ScriptTag.NABATAEAN = "nbat";
fonthx_model_font_features_ScriptTag.NEWA = "newa";
fonthx_model_font_features_ScriptTag.NEWTAILUE = "talu";
fonthx_model_font_features_ScriptTag.NKO = "nko ";
fonthx_model_font_features_ScriptTag.NUESHU = "nshu";
fonthx_model_font_features_ScriptTag.ODIA = "orya";
fonthx_model_font_features_ScriptTag.ODIA2 = "ory2";
fonthx_model_font_features_ScriptTag.OGHAM = "ogam";
fonthx_model_font_features_ScriptTag.OLCHIKI = "olck";
fonthx_model_font_features_ScriptTag.OLDITALIC = "ital";
fonthx_model_font_features_ScriptTag.OLDHUNGARIAN = "hung";
fonthx_model_font_features_ScriptTag.OLDNORTHARABIAN = "narb";
fonthx_model_font_features_ScriptTag.OLDPERMIC = "perm";
fonthx_model_font_features_ScriptTag.OLDPERSIANCUNEIFORM = "xpeo";
fonthx_model_font_features_ScriptTag.OLDSOGDIAN = "sogo";
fonthx_model_font_features_ScriptTag.OLDSOUTHARABIAN = "sarb";
fonthx_model_font_features_ScriptTag.OLDTURKICORKHONRUNIC = "orkh";
fonthx_model_font_features_ScriptTag.OSAGE = "osge";
fonthx_model_font_features_ScriptTag.OSMANYA = "osma";
fonthx_model_font_features_ScriptTag.PAHAWHHMONG = "hmng";
fonthx_model_font_features_ScriptTag.PALMYRENE = "palm";
fonthx_model_font_features_ScriptTag.PAUCINHAU = "pauc";
fonthx_model_font_features_ScriptTag.PHAGSPA = "phag";
fonthx_model_font_features_ScriptTag.PHOENICIAN = "phnx";
fonthx_model_font_features_ScriptTag.PSALTEPAHLAVI = "phlp";
fonthx_model_font_features_ScriptTag.REJANG = "rjng";
fonthx_model_font_features_ScriptTag.RUNIC = "runr";
fonthx_model_font_features_ScriptTag.SAMARITAN = "samr";
fonthx_model_font_features_ScriptTag.SAURASHTRA = "saur";
fonthx_model_font_features_ScriptTag.SHARADA = "shrd";
fonthx_model_font_features_ScriptTag.SHAVIAN = "shaw";
fonthx_model_font_features_ScriptTag.SIDDHAM = "sidd";
fonthx_model_font_features_ScriptTag.SIGNWRITING = "sgnw";
fonthx_model_font_features_ScriptTag.SINHALA = "sinh";
fonthx_model_font_features_ScriptTag.SOGDIAN = "sogd";
fonthx_model_font_features_ScriptTag.SORASOMPENG = "sora";
fonthx_model_font_features_ScriptTag.SOYOMBO = "soyo";
fonthx_model_font_features_ScriptTag.SUMEROAKKADIANCUNEIFORM = "xsux";
fonthx_model_font_features_ScriptTag.SUNDANESE = "sund";
fonthx_model_font_features_ScriptTag.SYLOTINAGRI = "sylo";
fonthx_model_font_features_ScriptTag.SYRIAC = "syrc";
fonthx_model_font_features_ScriptTag.TAGALOG = "tglg";
fonthx_model_font_features_ScriptTag.TAGBANWA = "tagb";
fonthx_model_font_features_ScriptTag.TAILE = "tale";
fonthx_model_font_features_ScriptTag.TAITHAM = "lana";
fonthx_model_font_features_ScriptTag.TAIVIET = "tavt";
fonthx_model_font_features_ScriptTag.TAKRI = "takr";
fonthx_model_font_features_ScriptTag.TAMIL = "taml";
fonthx_model_font_features_ScriptTag.TAMIL2 = "tml2";
fonthx_model_font_features_ScriptTag.TANGUT = "tang";
fonthx_model_font_features_ScriptTag.TELUGU = "telu";
fonthx_model_font_features_ScriptTag.TELUGU2 = "tel2";
fonthx_model_font_features_ScriptTag.THAANA = "thaa";
fonthx_model_font_features_ScriptTag.THAI = "thai";
fonthx_model_font_features_ScriptTag.TIBETAN = "tibt";
fonthx_model_font_features_ScriptTag.TIFINAGH = "tfng";
fonthx_model_font_features_ScriptTag.TIRHUTA = "tirh";
fonthx_model_font_features_ScriptTag.UGARITICCUNEIFORM = "ugar";
fonthx_model_font_features_ScriptTag.VAI = "vai ";
fonthx_model_font_features_ScriptTag.WARANGCITI = "wara";
fonthx_model_font_features_ScriptTag.YI = "yi ";
fonthx_model_font_features_ScriptTag.ZANABAZARSQUARE = "zanb";
fonthx_model_font_features_lookups_LookupType.UNDEFINED = 0;
fonthx_model_font_features_lookups_LookupType.GPOS_SINGLE_ADJUSTMENT = 1;
fonthx_model_font_features_lookups_LookupType.GPOS_PAIR_ADJUSTMENT = 2;
fonthx_model_font_features_lookups_LookupType.GPOS_CURSIVE_ATTACHMENT = 3;
fonthx_model_font_features_lookups_LookupType.GPOS_MARKTOBASE_ATTACHMENT = 4;
fonthx_model_font_features_lookups_LookupType.GPOS_MARKTOLIGATURE_ATTACHMENT = 5;
fonthx_model_font_features_lookups_LookupType.GPOS_MARKTOMARK_ATTACHMENT = 6;
fonthx_model_font_features_lookups_LookupType.GPOS_CONTEXT_POSITIONING = 7;
fonthx_model_font_features_lookups_LookupType.GPOS_CHAINED_CONTEXT_POSITIONING = 8;
fonthx_model_font_features_lookups_LookupType.GPOS_EXTENSION_POSITIONING = 9;
fonthx_model_font_features_lookups_LookupType.GSUB_SINGLE = 1;
fonthx_model_font_features_lookups_LookupType.GSUB_MULTIPLE = 2;
fonthx_model_font_features_lookups_LookupType.GSUB_ALTERNATE = 3;
fonthx_model_font_features_lookups_LookupType.GSUB_LIGATURE = 4;
fonthx_model_font_features_lookups_LookupType.GSUB_CONTEXT = 5;
fonthx_model_font_features_lookups_LookupType.GSUB_CHAINING_CONTEXT = 6;
fonthx_model_font_features_lookups_LookupType.GSUB_EXTENSION_SUBSTITUTION = 7;
fonthx_model_font_features_lookups_LookupType.GSUB_REVERSE_CHAINING_CONTEXT_SINGLE = 8;
fonthx_model_geom_CubicBezier.recursionTolerance = 1;
fonthx_model_geom_CubicBezier.maxDistance = 1;
fonthx_model_geom_Point.ON = 0;
fonthx_model_geom_Point.OFF = 1;
fonthx_opentype_tables_Table.SFNT = "sfnt";
fonthx_opentype_tables_Table.TDIR = "tdir";
fonthx_opentype_tables_Table.CMAP = "cmap";
fonthx_opentype_tables_Table.HEAD = "head";
fonthx_opentype_tables_Table.HHEA = "hhea";
fonthx_opentype_tables_Table.HMTX = "hmtx";
fonthx_opentype_tables_Table.MAXP = "maxp";
fonthx_opentype_tables_Table.NAME = "name";
fonthx_opentype_tables_Table.OS2 = "OS/2";
fonthx_opentype_tables_Table.POST = "post";
fonthx_opentype_tables_Table.GLYF = "glyf";
fonthx_opentype_tables_Table.LOCA = "loca";
fonthx_opentype_tables_Table.CFF = "CFF ";
fonthx_opentype_tables_Table.SVG = "SVG ";
fonthx_opentype_tables_Table.COLR = "COLR";
fonthx_opentype_tables_Table.CPAL = "CPAL";
fonthx_opentype_tables_Table.KERN = "kern";
fonthx_opentype_tables_Table.GPOS = "GPOS";
fonthx_opentype_tables_Table.GSUB = "GSUB";
fonthx_opentype_tables_Table.DSIG = "DSIG";
fonthx_opentype_tables_Table.compileOrder = [fonthx_opentype_tables_Table.HEAD,fonthx_opentype_tables_Table.HHEA,fonthx_opentype_tables_Table.MAXP,fonthx_opentype_tables_Table.OS2,fonthx_opentype_tables_Table.HMTX,fonthx_opentype_tables_Table.CMAP,fonthx_opentype_tables_Table.GLYF,fonthx_opentype_tables_Table.LOCA,fonthx_opentype_tables_Table.CFF,fonthx_opentype_tables_Table.KERN,fonthx_opentype_tables_Table.NAME,fonthx_opentype_tables_Table.POST,fonthx_opentype_tables_Table.GPOS,fonthx_opentype_tables_Table.GSUB,fonthx_opentype_tables_Table.SVG,fonthx_opentype_tables_Table.DSIG,fonthx_opentype_tables_Table.CPAL,fonthx_opentype_tables_Table.COLR];
fonthx_opentype_tables_Table.optimalOrder = [fonthx_opentype_tables_Table.HEAD,fonthx_opentype_tables_Table.HHEA,fonthx_opentype_tables_Table.MAXP,fonthx_opentype_tables_Table.OS2,fonthx_opentype_tables_Table.HMTX,fonthx_opentype_tables_Table.CMAP,fonthx_opentype_tables_Table.LOCA,fonthx_opentype_tables_Table.GLYF,fonthx_opentype_tables_Table.CFF,fonthx_opentype_tables_Table.KERN,fonthx_opentype_tables_Table.NAME,fonthx_opentype_tables_Table.POST,fonthx_opentype_tables_Table.GPOS,fonthx_opentype_tables_Table.GSUB,fonthx_opentype_tables_Table.SVG,fonthx_opentype_tables_Table.DSIG,fonthx_opentype_tables_Table.CPAL,fonthx_opentype_tables_Table.COLR];
fonthx_opentype_cff_CFF.HEADER = "header";
fonthx_opentype_cff_CFF.NAME_INDEX = "name_index";
fonthx_opentype_cff_CFF.TOP_DICT_INDEX = "top_dict_index";
fonthx_opentype_cff_CFF.STRING_INDEX = "string_index";
fonthx_opentype_cff_CFF.GLOBAL_SUBR_INDEX = "global_subr_index";
fonthx_opentype_cff_CFF.CHARSETS = "charsets";
fonthx_opentype_cff_CFF.CHARSTRINGS_INDEX = "charstrings_index";
fonthx_opentype_cff_CFF.PRIVATE_DICT = "private_dict";
fonthx_opentype_cff_Strings.standards = [".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"];
fonthx_opentype_constants_MacStyle.REGULAR = 0;
fonthx_opentype_constants_MacStyle.BOLD = 1;
fonthx_opentype_constants_MacStyle.ITALIC = 2;
fonthx_opentype_constants_MacStyle.OUTLINE = 4;
fonthx_opentype_constants_MacStyle.SHADOW = 8;
fonthx_opentype_constants_MacStyle.CONDENSED = 16;
fonthx_opentype_constants_MacStyle.EXTENDED = 32;
fonthx_opentype_constants_MacintoshEncoding.ROMAN = 0;
fonthx_opentype_constants_MacintoshEncoding.JAPANESE = 1;
fonthx_opentype_constants_MacintoshEncoding.CHINESE = 2;
fonthx_opentype_constants_MacintoshEncoding.KOREAN = 3;
fonthx_opentype_constants_MacintoshEncoding.ARABIC = 4;
fonthx_opentype_constants_MacintoshEncoding.HEBREW = 5;
fonthx_opentype_constants_MacintoshEncoding.GREEK = 6;
fonthx_opentype_constants_MacintoshEncoding.RUSSIAN = 7;
fonthx_opentype_constants_MacintoshEncoding.RSYMBOL = 8;
fonthx_opentype_constants_MacintoshEncoding.DEVANAGARI = 9;
fonthx_opentype_constants_MacintoshEncoding.GURMUKHI = 10;
fonthx_opentype_constants_MacintoshEncoding.GUJARATI = 11;
fonthx_opentype_constants_MacintoshEncoding.ORIYA = 12;
fonthx_opentype_constants_MacintoshEncoding.BENGALI = 13;
fonthx_opentype_constants_MacintoshEncoding.TAMIL = 14;
fonthx_opentype_constants_MacintoshEncoding.TELUGU = 15;
fonthx_opentype_constants_MacintoshEncoding.KANNADA = 16;
fonthx_opentype_constants_MacintoshEncoding.MALAYALAM = 17;
fonthx_opentype_constants_MacintoshEncoding.SINHALESE = 18;
fonthx_opentype_constants_MacintoshEncoding.BURMESE = 19;
fonthx_opentype_constants_MacintoshEncoding.KHMER = 20;
fonthx_opentype_constants_MacintoshEncoding.THAI = 21;
fonthx_opentype_constants_MacintoshEncoding.LAOTIAN = 22;
fonthx_opentype_constants_MacintoshEncoding.GEORGIAN = 23;
fonthx_opentype_constants_MacintoshEncoding.ARMENIAN = 24;
fonthx_opentype_constants_MacintoshEncoding.CHINESE_SIMPLE = 25;
fonthx_opentype_constants_MacintoshEncoding.TIBETAN = 26;
fonthx_opentype_constants_MacintoshEncoding.MONGOLIAN = 27;
fonthx_opentype_constants_MacintoshEncoding.GEEZ = 28;
fonthx_opentype_constants_MacintoshEncoding.SLAVIC = 29;
fonthx_opentype_constants_MacintoshEncoding.VIETNAMESE = 30;
fonthx_opentype_constants_MacintoshEncoding.SINDHI = 31;
fonthx_opentype_constants_MacintoshEncoding.UNINTERPRETED = 32;
fonthx_opentype_constants_MacintoshLanguages.ENGLISH = 0;
fonthx_opentype_constants_MicrosoftEncoding.SYMBOL = 0;
fonthx_opentype_constants_MicrosoftEncoding.UNICODE_BMP_ONLY = 1;
fonthx_opentype_constants_MicrosoftEncoding.SHIFTJIS = 2;
fonthx_opentype_constants_MicrosoftEncoding.PRC = 3;
fonthx_opentype_constants_MicrosoftEncoding.BIG5 = 4;
fonthx_opentype_constants_MicrosoftEncoding.WANSUNG = 5;
fonthx_opentype_constants_MicrosoftEncoding.JOHAB = 6;
fonthx_opentype_constants_MicrosoftEncoding.UNICODE = 10;
fonthx_opentype_constants_MicrosoftLanguages.ENU = 1033;
fonthx_opentype_constants_OS2Embeddable.INSTALLABLE = 0;
fonthx_opentype_constants_OS2Embeddable.RESTRICTED_LICENSE = 2;
fonthx_opentype_constants_OS2Embeddable.PREVIEW_AND_PRINT = 4;
fonthx_opentype_constants_OS2Embeddable.EDITABLE = 8;
fonthx_opentype_constants_OS2Embeddable.NO_SUBSET = 256;
fonthx_opentype_constants_OS2Embeddable.BITMAP_ONLY = 512;
fonthx_opentype_constants_OS2FontSelectionFlags.ITALIC = 1;
fonthx_opentype_constants_OS2FontSelectionFlags.UNDERSCORE = 2;
fonthx_opentype_constants_OS2FontSelectionFlags.NEGATIVE = 4;
fonthx_opentype_constants_OS2FontSelectionFlags.OUTLINED = 8;
fonthx_opentype_constants_OS2FontSelectionFlags.STRIKEOUT = 16;
fonthx_opentype_constants_OS2FontSelectionFlags.BOLD = 32;
fonthx_opentype_constants_OS2FontSelectionFlags.REGULAR = 64;
fonthx_opentype_constants_OS2Weight.THIN = 100;
fonthx_opentype_constants_OS2Weight.EXTRALIGHT = 200;
fonthx_opentype_constants_OS2Weight.LIGHT = 300;
fonthx_opentype_constants_OS2Weight.NORMAL = 400;
fonthx_opentype_constants_OS2Weight.MEDIUM = 500;
fonthx_opentype_constants_OS2Weight.SEMIBOLD = 600;
fonthx_opentype_constants_OS2Weight.BOLD = 700;
fonthx_opentype_constants_OS2Weight.EXTRABOLD = 800;
fonthx_opentype_constants_OS2Weight.BLACK = 900;
fonthx_opentype_constants_OS2Width.ULTRA_CONDENSED = 1;
fonthx_opentype_constants_OS2Width.EXTRA_CONDENSED = 2;
fonthx_opentype_constants_OS2Width.CONDENSED = 3;
fonthx_opentype_constants_OS2Width.SEMI_CONDENSED = 4;
fonthx_opentype_constants_OS2Width.NORMAL = 5;
fonthx_opentype_constants_OS2Width.SEMI_EXPANDED = 6;
fonthx_opentype_constants_OS2Width.EXPANDED = 7;
fonthx_opentype_constants_OS2Width.EXTRA_EXPANDED = 8;
fonthx_opentype_constants_OS2Width.ULTRA_EXPANDED = 9;
fonthx_opentype_constants_Platform.UNICODE = 0;
fonthx_opentype_constants_Platform.MACINTOSH = 1;
fonthx_opentype_constants_Platform.ISO = 2;
fonthx_opentype_constants_Platform.MICROSOFT = 3;
fonthx_opentype_constants_Platform.CUSTOM = 4;
fonthx_opentype_constants_UnicodeEncoding.UNICODE_1_0 = 0;
fonthx_opentype_constants_UnicodeEncoding.UNICODE_1_1 = 1;
fonthx_opentype_constants_UnicodeEncoding.ISO_10646 = 2;
fonthx_opentype_constants_UnicodeEncoding.UNICODE2_BMP = 3;
fonthx_opentype_constants_UnicodeEncoding.UNICODE2_FULL = 4;
fonthx_opentype_glyph_CompositeGlyphDescription.ARG_1_AND_2_ARE_WORDS = 1;
fonthx_opentype_glyph_CompositeGlyphDescription.ARGS_ARE_XY_VALUES = 2;
fonthx_opentype_glyph_CompositeGlyphDescription.ROUND_XY_TO_GRID = 4;
fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_A_SCALE = 8;
fonthx_opentype_glyph_CompositeGlyphDescription.MORE_COMPONENTS = 32;
fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_AN_X_AND_Y_SCALE = 64;
fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_A_TWO_BY_TWO = 128;
fonthx_opentype_glyph_CompositeGlyphDescription.WE_HAVE_INSTRUCTIONS = 256;
fonthx_opentype_glyph_CompositeGlyphDescription.USE_MY_METRICS = 512;
fonthx_opentype_glyph_CompositeGlyphDescription.OVERLAP_COMPOUND = 1024;
fonthx_opentype_glyph_CompositeGlyphDescription.SCALED_COMPONENT_OFFSET = 2048;
fonthx_opentype_glyph_CompositeGlyphDescription.UNSCALED_COMPONENT_OFFSET = 4096;
fonthx_opentype_glyph_ContourPoint.OFF_CURVE = 0;
fonthx_opentype_glyph_ContourPoint.ON_CURVE = 1;
fonthx_opentype_glyph_ContourPoint.X_SHORT = 2;
fonthx_opentype_glyph_ContourPoint.Y_SHORT = 4;
fonthx_opentype_glyph_ContourPoint.REPEAT = 8;
fonthx_opentype_glyph_ContourPoint.X_SAME_OR_SIGN = 16;
fonthx_opentype_glyph_ContourPoint.Y_SAME_OR_SIGN = 32;
fonthx_opentype_os2_OS2Codepages.codepages = [];
fonthx_opentype_os2_OS2Ranges.ranges = [new fonthx_opentype_os2_OS2Range(0,"Basic Latin",0,127,1),new fonthx_opentype_os2_OS2Range(1,"Latin-1 Supplement",128,255,1),new fonthx_opentype_os2_OS2Range(2,"Latin Extended-A",256,383,1),new fonthx_opentype_os2_OS2Range(3,"Latin Extended-B",384,591,1),new fonthx_opentype_os2_OS2Range(4,"IPA Extensions",592,687,1),new fonthx_opentype_os2_OS2Range(4,"Phonetic Extensions",7424,7551,4),new fonthx_opentype_os2_OS2Range(4,"Phonetic Extensions Supplement",7552,7615,4),new fonthx_opentype_os2_OS2Range(5,"Spacing Modifier Letters",688,767,1),new fonthx_opentype_os2_OS2Range(5,"Modifier Tone Letters",42752,42783,4),new fonthx_opentype_os2_OS2Range(6,"Combining Diacritical Marks",768,879,1),new fonthx_opentype_os2_OS2Range(6,"Combining Diacritical Marks Supplement",7616,7679,4),new fonthx_opentype_os2_OS2Range(7,"Greek and Coptic",880,1023,1),new fonthx_opentype_os2_OS2Range(8,"Coptic",11392,11519,4),new fonthx_opentype_os2_OS2Range(9,"Cyrillic",1024,1279,1),new fonthx_opentype_os2_OS2Range(9,"Cyrillic Supplement",1280,1327,3),new fonthx_opentype_os2_OS2Range(9,"Cyrillic Extended-A",11744,11775,4),new fonthx_opentype_os2_OS2Range(9,"Cyrillic Extended-B",42560,42655,4),new fonthx_opentype_os2_OS2Range(10,"Armenian",1328,1423,1),new fonthx_opentype_os2_OS2Range(11,"Hebrew",1424,1535,1),new fonthx_opentype_os2_OS2Range(12,"Vai",42240,42559,4),new fonthx_opentype_os2_OS2Range(13,"Arabic",1536,1791,1),new fonthx_opentype_os2_OS2Range(13,"Arabic Supplement",1872,1919,4),new fonthx_opentype_os2_OS2Range(14,"NKo",1984,2047,4),new fonthx_opentype_os2_OS2Range(15,"Devanagari",2304,2431,1),new fonthx_opentype_os2_OS2Range(16,"Bengali",2432,2559,1),new fonthx_opentype_os2_OS2Range(17,"Gurmukhi",2560,2687,1),new fonthx_opentype_os2_OS2Range(18,"Gujarati",2688,2815,1),new fonthx_opentype_os2_OS2Range(19,"Oriya",2816,2943,1),new fonthx_opentype_os2_OS2Range(20,"Tamil",2944,3071,1),new fonthx_opentype_os2_OS2Range(21,"Telugu",3072,3199,1),new fonthx_opentype_os2_OS2Range(22,"Kannada",3200,3327,1),new fonthx_opentype_os2_OS2Range(23,"Malayalam",3328,3455,1),new fonthx_opentype_os2_OS2Range(24,"Thai",3584,3711,1),new fonthx_opentype_os2_OS2Range(25,"Lao",3712,3839,1),new fonthx_opentype_os2_OS2Range(26,"Georgian",4256,4351,1),new fonthx_opentype_os2_OS2Range(26,"Georgian Supplement",11520,11567,4),new fonthx_opentype_os2_OS2Range(27,"Balinese",6912,7039,4),new fonthx_opentype_os2_OS2Range(28,"Hangul Jamo",4352,4607,1),new fonthx_opentype_os2_OS2Range(29,"Latin Extended Additional",7680,7935,1),new fonthx_opentype_os2_OS2Range(29,"Latin Extended-C",11360,11391,4),new fonthx_opentype_os2_OS2Range(29,"Latin Extended-D",42784,43007,4),new fonthx_opentype_os2_OS2Range(30,"Greek Extended",7936,8191,1),new fonthx_opentype_os2_OS2Range(31,"General Punctuation",8192,8303,1),new fonthx_opentype_os2_OS2Range(31,"Supplemental Punctuation",11776,11903,4),new fonthx_opentype_os2_OS2Range(32,"Superscripts And Subscripts",8304,8351,1),new fonthx_opentype_os2_OS2Range(33,"Currency Symbols",8352,8399,1),new fonthx_opentype_os2_OS2Range(34,"Combining Diacritical Marks For Symbols",8400,8447,1),new fonthx_opentype_os2_OS2Range(35,"Letterlike Symbols",8448,8527,1),new fonthx_opentype_os2_OS2Range(36,"Number Forms",8528,8591,1),new fonthx_opentype_os2_OS2Range(37,"Arrows",8592,8703,1),new fonthx_opentype_os2_OS2Range(37,"Supplemental Arrows-A",10224,10239,3),new fonthx_opentype_os2_OS2Range(37,"Supplemental Arrows-B",10496,10623,3),new fonthx_opentype_os2_OS2Range(37,"Miscellaneous Symbols and Arrows",11008,11263,4),new fonthx_opentype_os2_OS2Range(38,"Mathematical Operators",8704,8959,1),new fonthx_opentype_os2_OS2Range(38,"Supplemental Mathematical Operators",10752,11007,3),new fonthx_opentype_os2_OS2Range(38,"Miscellaneous Mathematical Symbols-A",10176,10223,3),new fonthx_opentype_os2_OS2Range(38,"Miscellaneous Mathematical Symbols-B",10624,10751,3),new fonthx_opentype_os2_OS2Range(39,"Miscellaneous Technical",8960,9215,1),new fonthx_opentype_os2_OS2Range(40,"Control Pictures",9216,9279,1),new fonthx_opentype_os2_OS2Range(41,"Optical Character Recognition",9280,9311,1),new fonthx_opentype_os2_OS2Range(42,"Enclosed Alphanumerics",9312,9471,1),new fonthx_opentype_os2_OS2Range(43,"Box Drawing",9472,9599,1),new fonthx_opentype_os2_OS2Range(44,"Block Elements",9600,9631,1),new fonthx_opentype_os2_OS2Range(45,"Geometric Shapes",9632,9727,1),new fonthx_opentype_os2_OS2Range(46,"Miscellaneous Symbols",9728,9983,1),new fonthx_opentype_os2_OS2Range(47,"Dingbats",9984,10175,1),new fonthx_opentype_os2_OS2Range(48,"CJK Symbols And Punctuation",12288,12351,1),new fonthx_opentype_os2_OS2Range(49,"Hiragana",12352,12447,1),new fonthx_opentype_os2_OS2Range(50,"Katakana",12448,12543,1),new fonthx_opentype_os2_OS2Range(50,"Katakana Phonetic Extensions",12784,12799,3),new fonthx_opentype_os2_OS2Range(51,"Bopomofo",12544,12591,1),new fonthx_opentype_os2_OS2Range(51,"Bopomofo Extended",12704,12735,2),new fonthx_opentype_os2_OS2Range(52,"Hangul Compatibility Jamo",12592,12687,1),new fonthx_opentype_os2_OS2Range(53,"Phags-pa",43072,43135,4),new fonthx_opentype_os2_OS2Range(54,"Enclosed CJK Letters And Months",12800,13055,1),new fonthx_opentype_os2_OS2Range(55,"CJK Compatibility",13056,13311,1),new fonthx_opentype_os2_OS2Range(56,"Hangul Syllables",44032,55215,1),new fonthx_opentype_os2_OS2Range(57,"Non-Plane 0",65536,1114111,2),new fonthx_opentype_os2_OS2Range(58,"Phoenician",67840,67871,4),new fonthx_opentype_os2_OS2Range(59,"CJK Unified Ideographs",19968,40959,1),new fonthx_opentype_os2_OS2Range(59,"CJK Radicals Supplement",11904,12031,2),new fonthx_opentype_os2_OS2Range(59,"Kangxi Radicals",12032,12255,2),new fonthx_opentype_os2_OS2Range(59,"Ideographic Description Characters",12272,12287,2),new fonthx_opentype_os2_OS2Range(59,"CJK Unified Ideographs Extension A",13312,19903,2),new fonthx_opentype_os2_OS2Range(59,"CJK Unified Ideographs Extension B",131072,173791,3),new fonthx_opentype_os2_OS2Range(59,"Kanbun",12688,12703,3),new fonthx_opentype_os2_OS2Range(60,"Private Use Area (plane 0)",57344,63743,1),new fonthx_opentype_os2_OS2Range(61,"CJK Strokes",12736,12783,4),new fonthx_opentype_os2_OS2Range(61,"CJK Compatibility Ideographs",63744,64255,1),new fonthx_opentype_os2_OS2Range(61,"CJK Compatibility Ideographs Supplement",194560,195103,3),new fonthx_opentype_os2_OS2Range(62,"Alphabetic Presentation Forms",64256,64335,1),new fonthx_opentype_os2_OS2Range(63,"Arabic Presentation Forms-A",64336,65023,1),new fonthx_opentype_os2_OS2Range(64,"Combining Half Marks",65056,65071,1),new fonthx_opentype_os2_OS2Range(65,"Vertical Forms",65040,65055,4),new fonthx_opentype_os2_OS2Range(65,"CJK Compatibility Forms",65072,65103,1),new fonthx_opentype_os2_OS2Range(66,"Small Form Variants",65104,65135,1),new fonthx_opentype_os2_OS2Range(67,"Arabic Presentation Forms-B",65136,65279,1),new fonthx_opentype_os2_OS2Range(68,"Halfwidth And Fullwidth Forms",65280,65519,1),new fonthx_opentype_os2_OS2Range(69,"Specials",65520,65535,1),new fonthx_opentype_os2_OS2Range(70,"Tibetan",3840,4095,2),new fonthx_opentype_os2_OS2Range(71,"Syriac",1792,1871,2),new fonthx_opentype_os2_OS2Range(72,"Thaana",1920,1983,2),new fonthx_opentype_os2_OS2Range(73,"Sinhala",3456,3583,2),new fonthx_opentype_os2_OS2Range(74,"Myanmar",4096,4255,2),new fonthx_opentype_os2_OS2Range(75,"Ethiopic",4608,4991,2),new fonthx_opentype_os2_OS2Range(75,"Ethiopic Supplement",4992,5023,4),new fonthx_opentype_os2_OS2Range(75,"Ethiopic Extended",11648,11743,4),new fonthx_opentype_os2_OS2Range(76,"Cherokee",5024,5119,2),new fonthx_opentype_os2_OS2Range(77,"Unified Canadian Aboriginal Syllabics",5120,5759,2),new fonthx_opentype_os2_OS2Range(78,"Ogham",5760,5791,2),new fonthx_opentype_os2_OS2Range(79,"Runic",5792,5887,2),new fonthx_opentype_os2_OS2Range(80,"Khmer",6016,6143,2),new fonthx_opentype_os2_OS2Range(80,"Khmer Symbols",6624,6655,4),new fonthx_opentype_os2_OS2Range(81,"Mongolian",6144,6319,2),new fonthx_opentype_os2_OS2Range(82,"Braille Patterns",10240,10495,2),new fonthx_opentype_os2_OS2Range(83,"Yi Syllables",40960,42127,2),new fonthx_opentype_os2_OS2Range(83,"Yi Radicals",42128,42191,2),new fonthx_opentype_os2_OS2Range(84,"Tagalog",5888,5919,3),new fonthx_opentype_os2_OS2Range(84,"Hanunoo",5920,5951,3),new fonthx_opentype_os2_OS2Range(84,"Buhid",5952,5983,3),new fonthx_opentype_os2_OS2Range(84,"Tagbanwa",5984,6015,3),new fonthx_opentype_os2_OS2Range(85,"Old Italic",66304,66351,3),new fonthx_opentype_os2_OS2Range(86,"Gothic",66352,66383,3),new fonthx_opentype_os2_OS2Range(87,"Deseret",66560,66639,3),new fonthx_opentype_os2_OS2Range(88,"Byzantine Musical Symbols",118784,119039,3),new fonthx_opentype_os2_OS2Range(88,"Musical Symbols",119040,119295,3),new fonthx_opentype_os2_OS2Range(88,"Ancient Greek Musical Notation",119296,119375,4),new fonthx_opentype_os2_OS2Range(89,"Mathematical Alphanumeric Symbols",119808,120831,3),new fonthx_opentype_os2_OS2Range(90,"Private Use (plane 15)",983040,1048573,3),new fonthx_opentype_os2_OS2Range(90,"Private Use (plane 16)",1048576,1114109,3),new fonthx_opentype_os2_OS2Range(91,"Variation Selectors",65024,65039,3),new fonthx_opentype_os2_OS2Range(91,"Variation Selectors Supplement",917760,917999,3),new fonthx_opentype_os2_OS2Range(92,"Tags",917504,917631,3),new fonthx_opentype_os2_OS2Range(93,"Limbu",6400,6479,4),new fonthx_opentype_os2_OS2Range(94,"Tai Le",6480,6527,4),new fonthx_opentype_os2_OS2Range(95,"New Tai Lue",6528,6623,4),new fonthx_opentype_os2_OS2Range(96,"Buginese",6656,6687,4),new fonthx_opentype_os2_OS2Range(97,"Glagolitic",11264,11359,4),new fonthx_opentype_os2_OS2Range(98,"Tifinagh",11568,11647,4),new fonthx_opentype_os2_OS2Range(99,"Yijing Hexagram Symbols",19904,19967,4),new fonthx_opentype_os2_OS2Range(100,"Syloti Nagri",43008,43055,4),new fonthx_opentype_os2_OS2Range(101,"Linear B Syllabary",65536,65663,4),new fonthx_opentype_os2_OS2Range(101,"Linear B Ideograms",65664,65791,4),new fonthx_opentype_os2_OS2Range(101,"Aegean Numbers",65792,65855,4),new fonthx_opentype_os2_OS2Range(102,"Ancient Greek Numbers",65856,65935,4),new fonthx_opentype_os2_OS2Range(103,"Ugaritic",66432,66463,4),new fonthx_opentype_os2_OS2Range(104,"Old Persian",66464,66527,4),new fonthx_opentype_os2_OS2Range(105,"Shavian",66640,66687,4),new fonthx_opentype_os2_OS2Range(106,"Osmanya",66688,66735,4),new fonthx_opentype_os2_OS2Range(107,"Cypriot Syllabary",67584,67647,4),new fonthx_opentype_os2_OS2Range(108,"Kharoshthi",68096,68191,4),new fonthx_opentype_os2_OS2Range(109,"Tai Xuan Jing Symbols",119552,119647,4),new fonthx_opentype_os2_OS2Range(110,"Cuneiform",73728,74751,4),new fonthx_opentype_os2_OS2Range(110,"Cuneiform Numbers and Punctuation",74752,74879,4),new fonthx_opentype_os2_OS2Range(111,"Counting Rod Numerals",119648,119679,4),new fonthx_opentype_os2_OS2Range(112,"Sundanese",7040,7103,4),new fonthx_opentype_os2_OS2Range(113,"Lepcha",7168,7247,4),new fonthx_opentype_os2_OS2Range(114,"Ol Chiki",7248,7295,4),new fonthx_opentype_os2_OS2Range(115,"Saurashtra",43136,43231,4),new fonthx_opentype_os2_OS2Range(116,"Kayah Li",43264,43311,4),new fonthx_opentype_os2_OS2Range(117,"Rejang",43312,43359,4),new fonthx_opentype_os2_OS2Range(118,"Cham",43520,43615,4),new fonthx_opentype_os2_OS2Range(119,"Ancient Symbols",65936,65999,4),new fonthx_opentype_os2_OS2Range(120,"Phaistos Disc",66000,66047,4),new fonthx_opentype_os2_OS2Range(121,"Carian",66208,66271,4),new fonthx_opentype_os2_OS2Range(121,"Lycian",66176,66207,4),new fonthx_opentype_os2_OS2Range(121,"Lydian",67872,67903,4),new fonthx_opentype_os2_OS2Range(122,"Domino Tiles",127024,127135,4),new fonthx_opentype_os2_OS2Range(122,"Mahjong Tiles",126976,127023,4)];
fonthx_opentype_tables_MaximumProfileTable.TRUETYPE_OUTLINES = 65536;
fonthx_opentype_tables_MaximumProfileTable.CFF_OUTLINES = 20480;
fonthx_opentype_tables_PostTable.VERSION_1_0 = 65536;
fonthx_opentype_tables_PostTable.VERSION_2_0 = 131072;
fonthx_opentype_tables_PostTable.VERSION_2_5 = 151552;
fonthx_opentype_tables_PostTable.VERSION_3_0 = 196608;
fonthx_opentype_tables_naming_NamingRecord.COPYRIGHT = 0;
fonthx_opentype_tables_naming_NamingRecord.FONT_FAMILY = 1;
fonthx_opentype_tables_naming_NamingRecord.FONT_SUBFAMILY = 2;
fonthx_opentype_tables_naming_NamingRecord.UNIQUE_NAME = 3;
fonthx_opentype_tables_naming_NamingRecord.FULLNAME = 4;
fonthx_opentype_tables_naming_NamingRecord.VERSION = 5;
fonthx_opentype_tables_naming_NamingRecord.PS_NAME = 6;
fonthx_opentype_tables_naming_NamingRecord.TRADEMARK_NOTICE = 7;
fonthx_opentype_tables_naming_NamingRecord.MANUFACTURER = 8;
fonthx_opentype_tables_naming_NamingRecord.DESIGNER = 9;
fonthx_opentype_tables_naming_NamingRecord.DESCRIPTION = 10;
fonthx_opentype_tables_naming_NamingRecord.VENDOR_URL = 11;
fonthx_opentype_tables_naming_NamingRecord.DESIGNER_URL = 12;
fonthx_opentype_tables_naming_NamingRecord.LICENSE = 13;
fonthx_opentype_tables_naming_NamingRecord.LICENSE_URL = 14;
fonthx_opentype_tables_naming_NamingRecord.PREFERRED_FAMILY = 16;
fonthx_opentype_tables_naming_NamingRecord.PREFERRED_SUBFAMILY = 17;
fonthx_opentype_tables_naming_NamingRecord.COMPATIBLE_FULL = 18;
fonthx_opentype_tables_naming_NamingRecord.SAMPLE_TEXT = 19;
fonthx_opentype_tables_opentype_lookup_AbstractLookupSubtable.MAX_SIZE = 65536;
fonthx_utils_ExecutionTimer._spans = new haxe_ds_StringMap();
fonthx_utils_MathUtils.MAX_INT = 2147483647;
fonthx_utils_MathUtils.MIN_INT = -2147483648;
fonthx_utils_StringEncoder.encodings = new haxe_ds_StringMap();
haxe_Int32._mul = Math.imul != null ? Math.imul : function(a,b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
};
haxe_crypto_Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe_crypto_Base64.BYTES = haxe_io_Bytes.ofString(haxe_crypto_Base64.CHARS);
haxe_zip_InflateImpl.LEN_EXTRA_BITS_TBL = [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,-1,-1];
haxe_zip_InflateImpl.LEN_BASE_VAL_TBL = [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];
haxe_zip_InflateImpl.DIST_EXTRA_BITS_TBL = [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,-1,-1];
haxe_zip_InflateImpl.DIST_BASE_VAL_TBL = [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];
haxe_zip_InflateImpl.CODE_LENGTHS_POS = [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
fonthx_examples_pixelfonter_PixelFonterBrowserApp.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=PixelFonterBrowserApp.js.map