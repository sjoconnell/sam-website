const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const babel = require('gulp-babel')
const pump = require('pump')

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('minifyjs', function(cb) {
  pump([
      gulp.src('app/js/**/*.js'),
      babel({
        presets: ['es2015']
      }),
      uglify(),
      gulp.dest('dist/js')
    ],
    cb
  )
})

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('app/css/**/*.css', browserSync.reload)
  gulp.watch('./*.html', browserSync.reload)
  gulp.watch('app/js/**/*.js', browserSync.reload)
  // other watchers
})

