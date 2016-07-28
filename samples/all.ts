import * as vm from 'vso-node-api';
import * as cm from './common';

// do first just to ensure variables set
// export API_URL=https://bryanmac.visualstudio.com/DefaultCollection
// export export API_TOKEN=<yourAllScopesApiToken>
// export API_PROJECT=test

let vsts: vm.WebApi = cm.getWebApi();

import build = require('./build');
build.run();

