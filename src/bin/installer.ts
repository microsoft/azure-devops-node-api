// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

var shell = require('shelljs');
var path = require('path');

var installDir = path.join(__dirname, '..');
var apiDir = path.join(installDir, 'nodeapi');
var targetDir = process.cwd();

console.log('Installing api to ' + targetDir);

var agentTarget = path.join(targetDir, 'nodeapi');

// 
// migrate 0.2.4 env.agent up one level out of agent bin
var pushConfigUp = function(file) {
	var srcPath = path.join(agentTarget, file);
	if (shell.test('-f', srcPath)) {
		shell.cp(srcPath, path.join(targetDir, file));
	}	
}

// ensure clean in case update
if (shell.test('-d', agentTarget)) {
	console.log('updating api.  removing old code.')
	shell.rm('-rf', agentTarget);
}

var modsTarget = path.join(targetDir, 'node_modules');
if (shell.test('-d', modsTarget)) {
	console.log('updating node modules.  removing old modules.')
	shell.rm('-rf', modsTarget);
}

var pkgTarget = path.join(targetDir, 'package.json');
if (shell.test('-f', pkgTarget)) {
	console.log('updating agent.  removing old package.json')
	shell.rm('-f', pkgTarget);
}

// copy new bits
console.log('Copying: ', apiDir, targetDir);
shell.cp('-R', apiDir, targetDir);

var modsDir = path.join(installDir, 'node_modules');
var targetAgent = path.join(targetDir, 'agent');
console.log('Copying: ', modsDir, targetDir);
shell.cp('-R', modsDir, targetDir);
shell.cp(path.join(installDir, 'package.json'), targetDir);

console.log('Done.');