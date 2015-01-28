var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

// var del, gulp, rjs, gutil, clean, jshint, karma, integrationTestLocations, unitTestLocations;
//
// gulp = require('gulp');
// gutil = require('gulp-util');
// clean = require('gulp-clean');
// jshint = require('gulp-jshint');
//
// del = require('del');
// rjs = require('requirejs');
// karma = require('karma').server;
//
// gulp.task('clean', ['clean-reports']);
//
// gulp.task('clean-reports', function(done) {
//   del(['./reports'], done);
// });
//
// gulp.task('requirejs', function() {
//   rjs.optimize({
//     // All paths will be relative to this baseUrl.
//     baseUrl: 'src',
//     // Tells r.js that you want everything in one file.
//     out: 'dist/encoding.js',
//     // Set paths for modules (shortcut alias for "include").
//     paths: {
//       almond: '../bower_components/almond/almond'
//     },
//     // Include "almond" and "encoding" into the final file
//     // specified in "out" property.
//     include: ['almond', 'encoding'],
//     // Wrapper for AMD, CommonJS and Browser compatibility.
//     wrap: {
//       startFile: 'src/_start.js',
//       endFile: 'src/_end.js'
//     },
//     // Minify the file.
//     optimize: 'uglify',
//     // Strip comments.
//     preserveLicenseComments: false,
//     // Add source maps for the original modules.
//     generateSourceMaps: true
//   });
// });
//
// // define Karma tests:
// integrationTestLocations = ['test/spec/integration/*.js', 'src/_*.js'];
//
// unitTestLocations = ['test/spec/unit/*.js', 'src/_*.js'];
//
// gulp.task('karma', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true,
//     exclude: integrationTestLocations
//   }, done);
// });
//
// gulp.task('karma:all', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true
//   }, done);
// });
//
// gulp.task('karma:integration', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true,
//     exclude:unitTestLocations
//   }, done);
// });
//
// gulp.task('karma:allBrowsers', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true,
//     browsers: ['PhantomJS', 'Chrome', 'ChromeCanary', 'Firefox', 'Opera', 'IE']
//   }, done);
// });
//
// gulp.task('karma:debugUnitTests', function(done){
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: false,
//     browsers: ['Chrome'],
//     flags: ['--debug'],
//     preprocessors: {},
//     exclude: integrationTestLocations
//   }, done);
// });
//
// gulp.task('karma:debugIntegrationTests', function(done){
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: false,
//     browsers: ['Chrome'],
//     flags: ['--debug'],
//     preprocessors: {},
//     exclude: unitTestLocations
//   }, done);
// });
//
// gulp.task('karma:debugAll', function(done){
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: false,
//     browsers: ['Chrome'],
//     flags: ['--debug'],
//     preprocessors: {}
//   }, done);
// });
//
//
// gulp.task('karma:watch', function(done) {
//   karma.start({
//     configFile: __dirname + '/karma.conf.js',
//     exclude: integrationTestLocations
//   }, done);
// });
//
// gulp.task('lint', function() {
//   return gulp.src(['src/**/*.js', '!src/_*.js'])
//   .pipe(jshint())
//   .pipe(jshint.reporter('default'));
// });
//
// gulp.task('tdd', ['lint'], function() {
//   return gulp.watch([
//     '**/*.js', '**/*.html'
//   ], [
//     'lint', 'karma'
//   ]);
// });
//
// gulp.task('watch', ['clean', 'lint', 'karma', 'requirejs'], function() {
//   gulp.watch(['src/**/*.js', '!src/_*.js'], ['lint', 'karma','requirejs']);
// });
//
// gulp.task('default', ['clean', 'karma', 'lint', 'requirejs', 'watch']);
