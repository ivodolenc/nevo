const gulp = require('gulp')
const sass = require('gulp-dart-sass')
const fibers = require('fibers')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create()

const config = {
  src: {
    scss: './scss/**/*.scss'
  },
  dist: {
    css: './css/'
  },
  watch: {
    scss: './scss/**/*.scss',
    html: './*.html'
  }
}

function styles() {
  return gulp
    .src(config.src.scss)
    .pipe(sass({ fiber: fibers }).on('error', sass.logError))
    .pipe(gulp.dest(config.dist.css))
    .pipe(browserSync.stream())
}

function development() {
  browserSync.init({
    server: './',
    port: '7777'
  })

  gulp.watch(config.watch.scss, styles)
  gulp.watch(config.watch.html).on('change', browserSync.reload)
}

function production() {
  return gulp
    .src(config.src.scss)
    .pipe(sass({ fiber: fibers }).on('error', sass.logError))
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: [
            '> 1%',
            'not edge <= 18',
            'not ie 11',
            'not op_mini all'
          ]
        }),
        cssnano()
      ])
    )
    .pipe(
      rename({
        extname: '.min.css'
      })
    )
    .pipe(gulp.dest(config.dist.css))
}

exports.styles = styles
exports.development = development
exports.production = production
