const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const deploy = require('gulp-gh-pages');

function browsersync() {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
    online: false
  });
}

function scripts() {
  return src([
    'src/scripts/main.js'
  ])

  .pipe(concat('main.min.js'))
  .pipe(dest('src/scripts/'))

  .pipe(browserSync.stream())
}

function styles() {
  return src([
    'src/styles/main.scss'
  ])

  .pipe(sass())
  .pipe(concat('main.min.css'))
  .pipe(dest('src/css/'))

  .pipe(browserSync.stream())
}

function images() {
  return src('src/images/src/**/*')

  .pipe(newer('src/images/dest/'))
  .pipe(imagemin())
  .pipe(dest('src/images/dest/'))
}

function cleanimg() {
  return del('src/images/src/**/*', { force: true })
}

function cleandist() {
  return del('dist/**/*', { force: true })
}

function buildcopy() {
  return src([
    'src/css/**/*.min.css',
    'src/scripts/**/*.min.js',
    'src/images/dest/**/*',
    'src/**/*.html',
  ], { base: 'src' })

  .pipe(dest('dist'))
}

function startWatch() {
  watch('src/styles/**/*', styles);
  watch(['src/**/*.js', '!src/**/*.min.js'], scripts);
  watch('src/**/*.html').on('change', browserSync.reload);
  watch('src/images/src/**/*', images);
}

function pages() {
  return src('./dist/**/*')

  .pipe(deploy())
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.pages = pages;

exports.build = series(cleandist, styles, scripts, images, buildcopy);
exports.default = parallel(scripts, styles, browsersync, startWatch);
