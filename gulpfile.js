const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')

let input = ['./dev/styles/*.scss', 'dev/styles/partials/*.scss']
let output = './public/styles'

let sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(output))
})

gulp.task('default', ['sass'])
