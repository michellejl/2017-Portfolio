const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

// Styles Variables
let input = ['./dev/styles/*.scss', 'dev/styles/partials/*.scss']
let output = './public/styles'
let sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('styles', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(output))
})

// Optional task for using Sass Docs
/*
const sassdoc = require('sassdoc')
gulp.task('sassdoc', function () {
  return gulp
    .src(input)
    .pipe(sassdoc())
    .resume()
})
*/

gulp.task('watch', function () {
  return gulp
  // Watch the input folder for change, and run `sass` task when something happens
    .watch(input, ['styles'])
    // When there is a change, log a message in the console
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
    })
})

// Default Gulp Task
gulp.task('default', ['styles', 'watch'])
