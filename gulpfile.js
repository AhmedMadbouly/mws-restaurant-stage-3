const   gulp = require('gulp'),
        exec = require('gulp-exec');

gulp.task('server', cb => {
    exec('node server.js', (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('serve', ['server']);
gulp.task('default', ['server']);