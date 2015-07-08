var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var merge = require('merge2');
var minimist = require('minimist');

var buildRoot = path.join(__dirname, '_build');
var tarRoot = path.join(__dirname, '_tar');
var packageRoot = path.join(__dirname, '_package');
var testRoot = path.join(__dirname, '_test');
var buildPath = path.join(buildRoot, 'nodeapi');
var packagePath = path.join(packageRoot, 'nodeapi');
var binPath = path.join(buildPath, 'bin');
var apiPath = path.join(buildPath, 'api');

// grunt is 0, task is 1
var mopts = {
  boolean: 'ci',
  string: 'suite',
  default: { ci: false, suite: '*' }
};

var options = minimist(process.argv.slice(2), mopts);


var tsProject = ts.createProject({
	declartionFiles:false,
	noExternalResolve: true,
	module: 'commonjs'
});


gulp.task('build', ['clean'], function () { 
	var tsResult = gulp.src(['src/**/*.ts'])
		.pipe(ts(tsProject))
		.on('error', function (err) { process.exit(1) });
	
	return merge([
		tsResult.js.pipe(gulp.dest(buildPath), null, ts.reporter.fullReporter(true)),
		gulp.src(['package.json']).pipe(gulp.dest(buildPath)),
		gulp.src(['src/bin/install.js']).pipe(gulp.dest(binPath))
	]);	
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
	if (options.suite !== '*') {
		suitePath = path.join(testPath, options.suite + '.js');
	}

	return gulp.src([suitePath])
		.pipe(mocha({ reporter: 'spec', ui: 'bdd', useColors: !options.ci }));
});

gulp.task('package', ['build'], function () {
	return gulp.src([path.join(buildPath, '**'), 'README.md'])
		.pipe(gulp.dest(packagePath));
});

gulp.task('tar', ['package'], function () {
	return gulp.src(path.join(packagePath, '**'))
        .pipe(tar('vsoxplat.tar'))
        .pipe(gzip())
        .pipe(gulp.dest(tarRoot));
});

gulp.task('clean', function (done) {
	del([buildRoot, tarRoot, packageRoot, testRoot], done);
});

gulp.task('default', ['tar']);