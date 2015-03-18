/* Notes:
/*
/* FOR LIVERELOAD AND CROSS-DEVICE TEST
/* with browserSync, you don't need any livereload plugin such as gulp-livereload, gulp-server-livereload
/*
/* FOR LOAD PLUGINS AUTOMATICALLY(gulp-load-plugins or gulp-mux)
/* if there is too many tasks you can use gulp-load-plugins to automatically load any gulp plugins in your package.json
/* then var plugins = require('gulp-load-plugins')();
/* You can then use the plugins just like you would if you'd manually required them, but referring to them as plugins.name(),

// npm install browser-sync gulp --save-dev
// npm install gulp-load-plugins --save-dev

// add othen plugins if you need that
// for example: bower-main
// http://browsersync.io
// https://www.npmjs.com/search?q=gulp
// http://gulpjs.com/plugins/

*/
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var plugins     = require('gulp-load-plugins')();


gulp.task('build', function() {

  gulp.src('app/*')
    .pipe(gulp.dest('www'));

});

gulp.task('browser-sync', function() {

  browserSync({
    server: {
        baseDir: "./www"
    }
  });

  gulp.watch("./www/*.html").on('change', reload);

});

gulp.task('serve', ['browser-sync'], function() {
  console.log('serving .........' )
});

gulp.task('dev', ['build', 'serve'],  function() {
  console.log('this is task dev, depends on build and serve');
});
