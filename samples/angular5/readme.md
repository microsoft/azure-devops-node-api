# Angular5 and vsts-node-api
This example is to show how to use vsts-node-api npm package with angular5. The sample code will touch base on three main areas
* Retrieving projects in a specified collection Url
* Retrieving repositories in a selected project
* Some pull request statistics in selected repo

The sample does not use any ui frameworks and presented as simple html on purpose. 

What do you need:
* Angular: Create a new angular project --> [angular/angular-cli](https://github.com/angular/angular-cli)
* vsts-node-api: Install `npm install vso-node-api --save`
* PersonalAccessToken for your account on TFS --> [Authenticating with personal access tokens](https://docs.microsoft.com/en-us/vsts/integrate/get-started/authentication/pats?view=vsts)
* After you have created an angular project and installed the vsts-node-api. You are ready to use the sample code. Update the following files `app.component.ts`, `app.component.html`, and `app.modules.ts` with the files from the angular5 sample folder