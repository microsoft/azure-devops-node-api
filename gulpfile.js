var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');
var gts = require('gulp-typescript');
var typescript = require('typescript');
var dtsgen = require('dts-generator');

var srcDir = path.join(__dirname, 'api');

var proj = gts.createProject('./tsconfig.json', { typescript: typescript });
var ts = gts(proj);

function errorHandler(err) {
    console.error(err.message);
    process.exit(1);
}

gulp.task('clean', function (done) {
    return del(['_build', '_def'], done);
});

gulp.task('compile', ['clean'], function () {
    return gulp.src(['./api/**/*.ts'], { base: './api'})
        .pipe(ts)
        .pipe(gulp.dest('api'))
        .on('error', errorHandler)
});

// builds the whole api and drops definition files (.d.ts files) in place

// gulp.task('compile', ['clean'], function () {
//     return tsResult = gulp.src(['api/**/*.ts'])
//         .pipe(typescript({ removeComments: true, outDir: 'api' }))
//         .pipe(gulp.dest('api'))
//         .on('error', function (err) { console.error(err.message);process.exit(1) });
// });


gulp.task('publishBuild', ['compile'], function () {
    return gulp.src(['api/**/*.js', 'api/**/opensource/**'])
        .pipe(gulp.dest('_build'));
});

gulp.task('publishDefinitions', ['compile'], function () {
    return dtsgen.generate({
        name: 'vso-node-api',
        baseDir: 'api',
        files: [ 'WebApi.ts' ],
        externs: ['../node/node.d.ts', '../q/Q.d.ts'],
        out: '_def/vso-node-api.d.ts'
    });
});

gulp.task('copy', ['compile'], function () {
    return gulp.src(['package.json', 'LICENSE', 'README.md'])
        .pipe(gulp.dest('_build'));
});

gulp.task('postPublish', ['publishDefinitions', 'publishBuild', 'copy'], function () {

    return del(['api/**/*.js', '!api/opensource/**/*.js']);
    //done();
});

gulp.task('publish', ['postPublish']);

gulp.task('default', ['publish']);