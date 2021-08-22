const gulp = require('gulp');
require('./build/gulp/pixelfonter');
require('./build/gulp/specs');
require('./build/gulp/doc');

gulp.task("default", gulp.series(["pixelfonter-watch"]));


