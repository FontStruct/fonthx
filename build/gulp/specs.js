var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task("specs", gulp.series(function(cb) {
	exec('haxe build/spec/specs.hxml', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
}));

gulp.task("specs-watch", gulp.series(function() {
	gulp.watch(["src/**/*.hx", "spec/**/*.hx"], gulp.series(["specs"]));
}));

