var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', [
    'sass:watch',
    'html:watch']);


gulp.task('default', ['server', 'watch'], function() {});