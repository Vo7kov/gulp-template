const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const ghPages = require('gulp-gh-pages');

function browsersync() {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
    online: false,
  });
}

function scripts() {
  return src([
    'src/scripts/main.js',
  ])

  .pipe(concat('main.min.js'))
  .pipe(dest('src/scripts/'))

  .pipe(browserSync.stream())
}

function styles() {
  return src([
    'src/styles/main.scss',
  ])

  .pipe(sass())
  .pipe(concat('main.min.css'))
  // eslint-disable-next-line max-len
  .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
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

  .pipe(dest('dist'));
}

function pages() {
  return src('./dist/**/*')

  .pipe(ghPages())
}

function startWatch() {
  watch('src/styles/**/*', styles);
  watch(['src/**/*.js', '!src/**/*.min.js'], scripts);
  watch('src/**/*.html').on('change', browserSync.reload);
  watch('src/images/src/**/*', images);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;
exports.cleandist = cleandist;

exports.pages = pages;

exports.build = series(cleandist, styles, scripts, images, buildcopy);
exports.default = parallel(scripts, styles, browsersync, startWatch);
