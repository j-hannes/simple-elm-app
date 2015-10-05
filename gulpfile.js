var del = require('del')
var gulp = require('gulp')
var elm = require('gulp-elm')
var connect = require('gulp-connect')

gulp.task('clean', function(callback) {
  del(['public'], callback)
})

gulp.task('html', function() {
  gulp
    .src('src/html/index.html')
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())
})

gulp.task('elm', function() {
  gulp
    .src('src/elm/app.elm')
    .pipe(elm())
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())
})

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  })
})

gulp.task('watch', function() {
  gulp.watch('src/elm/app.elm', ['elm'])
  gulp.watch('src/html/index.html', ['html'])
})

gulp.task('build', ['clean', 'html', 'elm'])
gulp.task('dev', ['build', 'connect', 'watch'])
