var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var dtsgen = require('dts-generator');

var proj = ts.createProject('./tsconfig.json', { typescript: require('typescript'), declaration: true });

var buildDir = '_build/';

function errorHandler(err) {
    console.error(err.message);
    process.exit(1);
}

gulp.task('clean', function (done) {
    return del([buildDir, '_def'], done);
});

gulp.task('compile', ['clean'], function () {
    var tsResult = gulp.src(['./api/**/*.ts'], { base: './api'}).pipe(ts(proj));     
        
    return tsResult.js.pipe(gulp.dest(buildDir));
});

// builds the whole api and drops definition files (.d.ts files) in place

// gulp.task('compile', ['clean'], function () {
//     return tsResult = gulp.src(['api/**/*.ts'])
//         .pipe(typescript({ removeComments: true, outDir: 'api' }))
//         .pipe(gulp.dest('api'))
//         .on('error', function (err) { console.error(err.message);process.exit(1) });
// });


gulp.task('publishDefinitions', ['compile'], function () {
    return dtsgen.default({
        name: 'vso-node-api',
        module: "commonjs",
        main: 'WebApi',
        target: "es5",
        baseDir: 'api',
        files: [ 'WebApi.ts' ],
        externs: ['../typings/main.d.ts'],
        out: '_def/vso-node-api.d.ts'
    });
});

gulp.task('copy', ['compile'], function () {
    return gulp.src(['package.json', 'LICENSE', 'README.md'])
        .pipe(gulp.dest(buildDir));
});

gulp.task('publish', ['copy', 'publishDefinitions']);

gulp.task('default', ['publish']);