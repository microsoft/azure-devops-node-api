var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');
var typescript = require('gulp-tsc');

var srcDir = path.join(__dirname, 'api');

gulp.task('clean', function (done) {
    return del(['_build', '_def'], done);
});

// builds the whole api and drops definition files (.d.ts files) in place
gulp.task('compile', ['clean'], function () {
    return tsResult = gulp.src(['api/**/*.ts'])
        .pipe(typescript({ declaration: true, removeComments: true, outDir: 'api' }))
        .pipe(gulp.dest('api'))
        .on('error', function (err) { console.error(err.message);process.exit(1) });
});

gulp.task('publishBuild', ['compile'], function () {
    return gulp.src(['api/**/*.js'])
        .pipe(gulp.dest('_build'));
});

gulp.task('publishDefinitions', ['compile'], function () {
    return gulp.src(['api/**/*.d.ts'])
        .pipe(gulp.dest('_def'));
});

gulp.task('copy', ['compile'], function () {
    return gulp.src(['package.json', 'README.md'])
        .pipe(gulp.dest('_build'));
});

gulp.task('postPublish', ['publishDefinitions', 'publishBuild', 'copy'], function () {

    return del(['api/**/*.js', 'api/*.d.ts', 'api/handlers/**/*.d.ts', 'api/interfaces/**/*.d.ts']);
    //done();
});

gulp.task('publish', ['postPublish']);

gulp.task('default', ['publish']);