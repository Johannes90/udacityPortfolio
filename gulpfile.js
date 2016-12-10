var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    del = require('del'),
    runSequence = require('run-sequence'),
    responsive = require('gulp-responsive');


gulp.task('default', function (callback) {
  runSequence('clean:dist',
    ['useref', 'images', 'fonts'],
    callback
  )
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('app/*.js', uglify()))
        .pipe(gulpif('app/*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});


gulp.task('images', function(){
return gulp.src('app/img/*.+(png|jpg)')
.pipe(responsive({
  'stadshuset.jpg': [{
        width: 1920
      },{
        width: 1920 * 2,
        rename: 'stadshuset@2x.jpg'
      }],
  'desk.jpg': [{
        width: 640
    },{
        width: 640 * 2,
        rename: 'desk@2x.jpg'
    }],
  'portfolio1.jpg': [{
        width: 480
    },{
        width: 480 * 2,
        rename: 'portfolio1@2x.jpg'
  }],
  'portfolio2.jpg': [{
        width: 480
    },{
        width: 480 * 2,
        rename: 'portfolio2@2x.jpg'
  }],
  'portfolio3.jpg': [{
        width: 480
    },{
        width: 480 * 2,
        rename: 'portfolio3@2x.jpg'
  }]
}))
.pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});