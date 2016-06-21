# Visual Studio Team Services Client for Node.js

Integrate with Visual Studio Team Services from your Node.js apps.

## Get started

### Install the library
```
npm install vso-node-api
```

### Create a connection
```javascript
var vsts = require('vso-node-api');

var collectionUrl = "https://fabrikam.visualstudio.com/defaultcollection";
var creds = vsts.getBasicHandler("myaltusername", "myaltpassword");
 
var connection = new vsts.WebApi(collectionUrl, creds);    
```

#### Auth options:

* For general development and testing, a [personal access token](https://www.visualstudio.com/en-us/get-started/setup/use-personal-access-tokens-to-authenticate) is recommended.
  ```javascript
  vsts.getBasicHandler(token, "");
  ```

* For production, [OAuth access token](https://www.visualstudio.com/en-us/integrate/get-started/auth/oauth) are recommended.
  ```javascript
  vsts.getBearerHandler(token);
  ```

### Get an instance of a client

The library provides both promise-based and callback style APIs. Your choice.

```javascript
// Promise style Git client
var gitApi = connection.getQGitApi();

// Callback style Git client
var gitApi = connection.getGitApi();
```

#### Available clients

* Build
* Core
* FileContainer
* Gallery
* Git
* Release
* TaskAgent
* Task
* Test
* Tfvc
* Web
* WorkItemTracking

### Use the client

#### Promise style (recommended)
 
```javascript
var gitApi = connection.getQGitApi();

var projectName = "MyProject";
var repoName = "MyRepo";

// Get latest pull requests from the repo
gitApi.getPullRequests(repoName, {}, projectName).then(function(pullRequests) {    
    pullRequests.forEach(function(pullRequest) {
        // Display each pull request
        console.log(pullRequest.pullRequestId + ": "+ pullRequest.title);             
    });              
}, function(error) {
    console.log(error);
});
```

#### Callback style

```javascript
// Get latest pull requests from the repo
gitApi.getPullRequests(repoName, {}, projectName, null, null, null, function(error, status, pullRequests) {
    if (error) {
        console.log(error); 
    } else {       
        pullRequests.forEach(function(pullRequest) {
            // Display each pull request
            console.log(pullRequest.pullRequestId + ": "+ pullRequest.title);             
        }); 
    }
});
```

## APIs

To see what APIs are available, see the appropriate client interface. For example, [GitApi.ts](https://github.com/Microsoft/vsts-node-api/blob/master/api/GitApi.ts)

## Contributing

To contribute to this repository, see the [contribution guide](./CONTRIBUTING.md)

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
