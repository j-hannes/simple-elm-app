var del = require('del')
var gulp = require('gulp')
var elm = require('gulp-elm')

gulp.task('clean', function(callback) {
  del(['public'], callback)
})

gulp.task('html', function() {
  gulp
    .src('./src/html/index.html')
    .pipe(gulp.dest('./public/'))
})

gulp.task('elm', function() {
  gulp
    .src('src/elm/app.elm')
    .pipe(elm())
    .pipe(gulp.dest('public'))
})
