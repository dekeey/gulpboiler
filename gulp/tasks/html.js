var gulp  = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');
reload = browserSync.reload;

gulp.task('html', function () {
    gulp.src(config.src.root+'*.html')
        .pipe(gulp.dest(config.dest.root))
        .pipe(reload({stream: true}));
});

gulp.task('html:watch', function() {
    gulp.watch([
    	config.src.root+'*.html'
		], ['html']);
});