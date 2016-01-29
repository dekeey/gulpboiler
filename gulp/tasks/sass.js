var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var config = require('../config');

gulp.task('sass', function() {

    return sass(config.src.sass+'*.sass',{style:'expanded'})
    .on('error', sass.logError)
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('sass:watch', function() {
    gulp.watch(config.src.sass + '/**/*', ['sass']);
});