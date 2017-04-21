const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello Sam')
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('app/css/**/*.css', browserSync.reload)
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch('app/js/**/*.js', browserSync.reload)
  // other watchers
})

