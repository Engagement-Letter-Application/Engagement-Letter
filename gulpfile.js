const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('mocha');
const webpack = require('webpack-stream');
// const maps = require('gulp-sourcemaps');

var appFiles = ['*.js', './lib/**/*.js', './routes/**/*.js', './models/**/*.js'];
var testFiles = [
  './test/back_end/server_test.js', './test/back_end/test_setup.js',
  './test/back_end/test_teardown.js',
];

gulp.task('test:mocha', () => {
  return gulp.src(testFiles)
  .pipe(mocha());
});

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
    .pipe(webpack({
      devtool: 'source-map',
      output: {
        filename: 'bundle.js',
      },
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', ['webpack:dev'], () => {
  gulp.src(['app/**/*.html'])
   .pipe(gulp.dest('./build'));
});

gulp.task('lint:testFiles', () => {
  return gulp.src(testFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:appFiles', () => {
  return gulp.src(appFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);
gulp.task('test', ['test:mocha']);
gulp.task('lint', ['lint:testFiles', 'lint:appFiles']);

gulp.task('default', ['test']);
