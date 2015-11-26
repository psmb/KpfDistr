var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify')
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');
var dedupe = require('gulp-dedupe');

gulp.task('build-css', function() {
  return gulp.src(['css/*.css', 'fonts/**/*.css'])
    .pipe(dedupe())
    .pipe(minifyCss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('Built'));
});

gulp.task('build-js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('Built'));
});

gulp.task('copy-fonts', function() {
  return gulp.src('fonts/**/*.{ttf,woff,eot,svg}')
    .pipe(flatten())
    .pipe(gulp.dest('Built'));
});

gulp.task('default', ['build-css', 'build-js', 'copy-fonts']);
