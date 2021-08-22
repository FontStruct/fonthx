var gulp = require('gulp');
var haxe = require('./shared').haxe;
var exec = require('child_process').exec;

gulp.task("doc-compile", gulp.series(function(cb) {
	return haxe('build/doc/doc.hxml', cb);
}));

gulp.task("doc-gen", gulp.series(['doc-compile'], function(cb) {
	return exec('haxelib run dox -i dist/doc/doc.xml -o dist/doc --include fonthx');
}));

gulp.task("doc", gulp.series(['doc-gen']));

