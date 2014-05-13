'use strict';

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  watch = require('gulp-watch'),
  jshint = require('gulp-jshint');

//register nodemon task
gulp.task('nodemon', function () {
  nodemon({ script: './bin/www', env: { 'NODE_ENV': 'development' }})
    .on('restart');
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.src(['*.js','routes/*.js', 'public/*.js'], { read: true })
        .pipe(watch({ emit: 'all' }))
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//lint js files
gulp.task('lint', function() {
    gulp.src(['*.js','routes/*.js', 'public/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint','nodemon', 'watch']);