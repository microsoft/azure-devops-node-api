require('shelljs/make');
var path = require('path');
var fs = require('fs');
var semver = require('semver');

var rp = function(relPath) {
    return path.join(__dirname, relPath);
}

var buildPath = path.join(__dirname, '_build');

var run = function(cl) {
    console.log('> ' + cl);
    var rc = exec(cl).code;
    if (rc !== 0) {
        echo('Exec failed with rc ' + rc);
        exit(rc);
    }
}

target.clean = function() {
    rm('-Rf', buildPath);
};

target.build = function() {
    target.clean();

    run('tsc --outDir ' + buildPath);

    cp('-Rf', rp('api/opensource'), buildPath);
    
    cp(rp('LICENSE'), buildPath);
    cp(rp('package.json'), buildPath);
    cp(rp('package-lock.json'), buildPath);
    cp(rp('ThirdPartyNotice.txt'), buildPath);
    cp(rp('README.md'), buildPath);
    
    // just a bootstrap file to avoid /// in final js and .d.ts file
    rm(path.join(buildPath, 'index.*'));
}


target.units = function() {
    target.build();
    var nodeVer = process.versions.node;
    
    //check for node version, since installation strategy is different for node versions less than 8
    if(semver.lt(nodeVer,'8.0.0')){
        pushd('_build');
    }
    else{
        pushd('test');
    }
    run('npm install ../_build');
    popd();

    console.log("-------Unit Tests-------");
    run('tsc -p ./test/units');
    run('mocha test/units');
}

target.test = function() {
    target.units();
}

target.samples = function() {
    target.build();

    var modPath = path.join(__dirname, 'samples', 'node_modules');
    rm('-Rf', modPath);
    mkdir('-p', modPath);
    pushd('samples');
    run('npm install ../_build');
    popd();
    run('tsc -p samples');

    pushd('samples');
    if (process.argv[3]) {
        run('node run.js ' + process.argv[3]);
    }
    else {
        run('node run.js');
    }
    popd();
    console.log('done');
}
