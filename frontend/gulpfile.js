var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    hbsfy = require('hbsfy'),
    path = require('path'),
    config = require('./config'),
    fs = require('fs');

gulp.task('build', function() {
    var b = browserify();
    b.add(config.appPath);
    b.transform(hbsfy);
    var controllerFile = config.app + '_controller.js';
    var controllerPath = path.join(__dirname, '', 'controllers/' + controllerFile);
    if (fs.existsSync(controllerPath)) {
        b.require(controllerPath, {expose: 'controllers/' + controllerFile.replace('.js', '')});
    }
    return b.bundle()
        .pipe(source(config.appFile))
        .pipe(gulp.dest(config.devPath));
});
gulp.task('watch', ['build'], function() {
    gulp.watch('**/**/*.*', {interval: 500}, ['build']);
});