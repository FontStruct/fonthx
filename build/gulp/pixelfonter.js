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
	return haxe('build/examples/pixelfonter/pixelfonter-java.hxml', () => {
		runPixelFonter(`java -jar dist/examples/pixelfonter/java/PixelFonterApp${c.isDev? '-Debug' : ''}.jar`, params);
		cb();
	});
}));

gulp.task("pixelfonter-node", parameterized(function(cb, params) {
	return haxe('build/examples/pixelfonter/pixelfonter-node.hxml', () =>  {
		runPixelFonter(`node dist/examples/pixelfonter/node/PixelFonterApp.js`, params);
		cb();
	});	
}));

gulp.task("pixelfonter-cpp", parameterized(function(cb, params) {
	return haxe('build/examples/pixelfonter/pixelfonter-cpp.hxml', () =>  {
		runPixelFonter(`mono dist/examples/pixelfonter/cpp/PixelFonterApp${c.isDev? '-Debug' : ''}`, params);
		cb();
	});
}));

gulp.task("pixelfonter-cs", parameterized(function(cb, params) {
	return haxe('build/examples/pixelfonter/pixelfonter-cs.hxml', () =>  {
		runPixelFonter(`mono dist/examples/pixelfonter/cs/bin/PixelFonterApp${c.isDev? '-Debug' : ''}.exe`, params);
		cb();
	});
}));

gulp.task("pixelfonter-cpp-watch", () => {
	gulp.watch(["src/**/*.hx"], gulp.series(["pixelfonter-cpp"]));
});

gulp.task("pixelfonter-java-watch",() => {
	gulp.watch(["src/**/*.hx"], gulp.series(["pixelfonter-java"]));
});

gulp.task("pixelfonter-wasm-watch", () => {
	livereload.listen();
	gulp.watch(["src/**/*.hx"], gulp.series(["pixelfonter-wasm"]));
});

gulp.task("pixelfonter-watch", done => {
	gulp.watch(["src/**/*.hx"], gulp.series(["pixelfonter-node"]));
	done();
});

gulp.task("pixelfonter-js", done => {
  return haxe('build/examples/pixelfonter/pixelfonter-js.hxml', () => {
    livereload.reload();
    done();
  });
});

gulp.task("pixelfonter-wasm", done => {
  return haxe('build/examples/pixelfonter/pixelfonter-wasm.hxml', () => {
    livereload.reload();
    done();
  });
});

gulp.task("pixelfonter-js-watch", () => {
  livereload.listen();
  gulp.watch(["src/**/*.hx", "build/examples/pixelfonter/**/*.*"], gulp.series(["pixelfonter-js"]));
});
