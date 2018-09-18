var gulp = require('gulp');
var livereload = require('gulp-livereload');
var haxe = require('./shared').haxe;

gulp.task("pixelfonter-java", function(cb) {
	return haxe('build/examples/pixelfonter/pixelfonter-java.hxml', cb);
});

gulp.task("pixelfonter-node", function(cb) {
	return haxe('build/examples/pixelfonter/pixelfonter-node.hxml', cb);
});

gulp.task("pixelfonter-cpp", function(cb) {
	return haxe('build/examples/pixelfonter/pixelfonter-cpp.hxml', cb);
});

gulp.task("pixelfonter-js", function(cb) {
	return haxe('build/examples/pixelfonter/pixelfonter-js.hxml', function() {
		livereload.reload();
		cb();
	});
});

gulp.task("pixelfonter-wasm", function(cb) {
	return haxe('build/examples/pixelfonter/pixelfonter-wasm.hxml', function() {
		livereload.reload();
		cb();
	});
});

gulp.task("pixelfonter-js-watch", function() {
	livereload.listen();
	gulp.watch(["src/**/*.hx", "build/examples/pixelfonter/**/*.*"], ["pixelfonter-js"]);
});

gulp.task("pixelfonter-cpp-watch", function() {
	gulp.watch(["src/**/*.hx"], ["pixelfonter-cpp"]);
});

gulp.task("pixelfonter-java-watch", function() {
	gulp.watch(["src/**/*.hx"], ["pixelfonter-java"]);
});

gulp.task("pixelfonter-wasm-watch", function() {
	livereload.listen();
	gulp.watch(["src/**/*.hx"], ["pixelfonter-wasm"]);
});

gulp.task("pixelfonter-watch", function() {
	gulp.watch(["src/**/*.hx"], ["pixelfonter-node"]);
});
