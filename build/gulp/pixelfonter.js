const gulp = require('gulp');
const parameterized = require('gulp-parameterized');
const livereload = require('gulp-livereload');
const haxe = require('./shared').haxe;
const exec = require('child_process').exec;
const c = require('./config');

const runPixelFonter = function(executable, params) {
	params = Object.assign({
		i: 'build/examples/pixelfonter/pixel-font-5x5.png',
		c: '65-91',
		o: 'tmp/pixelfont.ttf'
	}, params);
	const args = Object.keys(params).map((k) => `-${k} ${params[k]}`).join(' ');
	const cmd = `${executable} ${args}`;
	exec(cmd);
};

gulp.task("pixelfonter-java", parameterized(function(cb, params) {
	return haxe('build/examples/pixelfonter/pixelfonter-java.hxml', function() {
		runPixelFonter(`java -jar dist/examples/pixelfonter/java/PixelFonterApp${c.isDev? '-Debug' : ''}.jar`, params);
		cb();
	});
}));

gulp.task("pixelfonter-node", parameterized(function(cb, params) {
	return haxe('build/examples/pixelfonter/pixelfonter-node.hxml', function() {
		runPixelFonter(`node dist/examples/pixelfonter/node/PixelFonterApp.js`, params);
		cb();
	});	
}));

gulp.task("pixelfonter-cpp", parameterized(function(cb, params) {
	return haxe('build/examples/pixelfonter/pixelfonter-cpp.hxml', function() {
		runPixelFonter(`mono dist/examples/pixelfonter/cpp/PixelFonterApp${c.isDev? '-Debug' : ''}`, params);
		cb();
	});
}));

gulp.task("pixelfonter-cs", parameterized(function(cb, params) {
	return haxe('build/examples/pixelfonter/pixelfonter-cs.hxml', function() {
		runPixelFonter(`mono dist/examples/pixelfonter/cs/bin/PixelFonterApp${c.isDev? '-Debug' : ''}.exe`, params);
		cb();
	});
}));

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
