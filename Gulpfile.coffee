browserSync = require('browser-sync').create()
gulp = require 'gulp'
browserify = require 'browserify' # bundles
source = require 'vinyl-source-stream' # use conventional text streams with gulp
concat = require 'gulp-concat'
lint = require 'gulp-eslint' # Lint JS files, including JSX

config =
  port: 3000
  devBaseUrl: 'http:localhost'
  paths:
    html: './src/**/*.html'
    js: './src/**/*.js'
    images: './src/images/*'
    dist: './dist'
    mainJs: './src/main.js'
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css'
      'src/assets/stylesheets/*.css'
    ]

gulp.task '1:html', ->
  gulp.src config.paths.html
    .pipe gulp.dest config.paths.dist
    .pipe browserSync.stream()

gulp.task '2:js', ->
  browserify config.paths.mainJs
    .transform "babelify", presets: [
      "es2015"
      "react"
    ]
    .bundle()
    .on 'error', console.error.bind(console)
    .pipe source 'bundle.js'
    .pipe gulp.dest config.paths.dist + '/scripts'
    .pipe browserSync.stream()

gulp.task '3:css', ->
  gulp.src config.paths.css
    .pipe concat 'bundle.css'
    .pipe gulp.dest config.paths.dist + '/css'
    .pipe browserSync.stream()

gulp.task '4:images', ->
  gulp.src config.paths.images
    .pipe gulp.dest config.paths.dist + '/images'
    .pipe browserSync.stream()

gulp.task '5:lint', ->
  gulp.src config.paths.js
    .pipe lint configFile: 'eslint.config.json'
    .pipe lint.format()

gulp.task '6:connect', ->
  browserSync.init
    server:
      baseDir: './dist'
    reloadDelay: 1500

gulp.task '7:watch', ->
  gulp.watch config.paths.html, ['1:html']
  gulp.watch config.paths.js, ['2:js', '5:lint']
  gulp.watch config.paths.css, ['3:css']

gulp.task 'default', ['1:html', '2:js', '3:css', '4:images', '5:lint', '6:connect', '7:watch']
