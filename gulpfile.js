var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');
var typescript = require('gulp-tsc');
var gzip = require('gulp-gzip');
var merge = require('merge2');

var buildRoot = path.join(__dirname, '_build');
var testRoot = path.join(__dirname, '_test');
var definitionRoot = path.join(__dirname, '_def');
var buildPath = path.join(buildRoot, 'nodeapi');
var apiPath = path.join(buildPath, 'api');
var testPath = path.join(testRoot, 'test');

// grunt is 0, task is 1
var mopts = {
  boolean: 'ci',
  string: 'suite',
  default: { ci: false, suite: '*' }
};

// builds the whole api and drops definition files (.d.ts files) in place
gulp.task('buildPrep', ['clean'], function () { 
	var tsResult = gulp.src(['src/**/*.ts'])
		.pipe(typescript({ declaration: true }))
		.on('error', function (err) { process.exit(1) });
	
	return merge([
		tsResult.pipe(gulp.dest(buildPath)),
		gulp.src(['package.json']).pipe(gulp.dest(buildPath)),
	]);	
});

// copies the definition files to their own _def directory
gulp.task('copyDefinitions', ['buildPrep'], function () {
    return gulp.src([path.join(apiPath, '**/*.d.ts')])
        .pipe(gulp.dest(definitionRoot))
        .on('error', function (err) { process.exit(1) });
});

// sends built js files to _build and definition (.d.ts) files to _def
gulp.task('build', ['copyDefinitions'], function () {
    return del(path.join(buildPath, '**/*.d.ts'));
});

gulp.task('testPrep', function () {
	var buildSrc = gulp.src([path.join(buildPath, '**')]);
	var testSrcPaths = ['src/test/**'];
	
	return merge([
		buildSrc.pipe(gulp.dest(testRoot)),
		gulp.src(testSrcPaths, { base: 'src/test' })
			.pipe(gulp.dest(testPath))
	]);
});

gulp.task('test', ['testPrep'], function () {
	var suitePath = path.join(testPath, '*.js');

	return gulp.src([suitePath])
		.pipe(mocha({ reporter: 'spec', ui: 'bdd' }));
});

gulp.task('clean', function (done) {
    del([buildRoot, testRoot, definitionRoot], done);
});

gulp.task('default', ['build']);