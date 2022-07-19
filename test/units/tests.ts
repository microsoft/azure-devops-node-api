import assert = require('assert');
import fs = require('fs');
import nock = require('nock');
import os = require('os');
import vsom = require('../../_build/VsoClient');
import WebApi = require('../../_build/WebApi');
import * as rm from 'typed-rest-client/RestClient';
import { ApiResourceLocation } from '../../_build/interfaces/common/VsoBaseInterfaces';
import semver = require('semver');

describe('VSOClient Units', function () {
    let rest: rm.RestClient;
    let vsoClient: vsom.VsoClient
    const baseUrl: string = 'https://dev.azure.com/';

    before(() => {
        const userAgent: string = "testAgent";
        rest = new rm.RestClient(userAgent, null, []);
        vsoClient = new vsom.VsoClient(baseUrl, rest);
    });

    after(() => {
    });

    afterEach(() => {
        nock.cleanAll();
        vsoClient = new vsom.VsoClient(baseUrl, rest);
    });

    it('constructs', () => {
        //Arrange
        this.timeout(1000);
        const userAgent: string = "testAgent";
        const rest: rm.RestClient = new rm.RestClient(userAgent, null, []);

        //Act
        const vso: vsom.VsoClient = new vsom.VsoClient('https://microsoft.com', rest);

        //Assert
        assert(vso, 'VsoClient should not be null');
    });

    it('gets versioning data where the max version and released version are identical', async () => {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('1', 'testArea', 'testLocation', {'testKey': 'testValue'}, null);

        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    });

    it('gets versioning data where ther requested version is greater than the max version', async () => {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea2', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '2', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('3', 'testArea2', 'testLocation', {'testKey': 'testValue'}, null);

        //Assert
        assert(res.apiVersion === '2-preview.1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    });

    it('gets versioning data where ther requested version is less than the max version', async () => {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea3', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '2', releasedVersion: '2', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('1', 'testArea3', 'testLocation', {'testKey': 'testValue'}, null);

        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    });

    it('gets versioning data with simple query params', async () => {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea4', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea4', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const queryParams = {status: 2};
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('1', 'testArea4', 'testLocation', {'testKey': 'testValue'}, queryParams);

        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate?status=2');
    });

    it('gets versioning data with nested query params', async () => {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea5', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea5', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const queryParams = {status: {innerstatus: 2}};
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('1', 'testArea5', 'testLocation', {'testKey': 'testValue'}, queryParams);

        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate?status.innerstatus=2');
    });

    it('gets versioning data with complex nested query params', async () => {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea5', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea5', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const queryParams = {status: {innerstatus: 2}, version: '1', nestedObject: {nestedField: 'value', innerNestedObject: {key: 'val2'}}};
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('1', 'testArea5', 'testLocation', {'testKey': 'testValue'}, queryParams);

        //Assert
        assert.equal(res.apiVersion, '1');
        assert.equal(res.requestUrl, 'https://dev.azure.com/testTemplate?status.innerstatus=2&version=1&nestedObject.nestedField=value&nestedObject.innerNestedObject.key=val2');
    });

    it('gets versioning datafor dates', async () => {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea5', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea5', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const queryParams = {min: new Date(Date.UTC(208, 9, 19))};
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('1', 'testArea5', 'testLocation', {'testKey': 'testValue'}, queryParams);

        //Assert
        assert.equal(res.apiVersion, '1');
        //Use different strings for Node 6 and 8, because of a varied response string
        var expectedURL = semver.lt(process.versions.node, '8.0.0') ? 'https://dev.azure.com/testTemplate?min=Wed%2C%2019%20Oct%20%20208%2000%3A00%3A00%20GMT' : 'https://dev.azure.com/testTemplate?min=Wed%2C%2019%20Oct%200208%2000%3A00%3A00%20GMT';
        assert.equal(res.requestUrl, expectedURL);
    });

    it('gets versioning data after an initialization promise', async () => {
        //Arrange
        nock('https://newbase.com/_apis/testArea6', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea6', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        vsoClient._setInitializationPromise(new Promise(resolve => {
            vsoClient.baseUrl = 'https://newbase.com';
            resolve();
        }));
        const res: vsom.ClientVersioningData = await vsoClient.getVersioningData('1', 'testArea6', 'testLocation', {'testKey': 'testValue'}, null);

        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://newbase.com/testTemplate');
    });

    it('gets the location', async () => {
        nock('https://dev.azure.com/_apis/testArea7', {
            //Arrange
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea7', resourceName: 'testName', resourceVersion: '1'}]
        });

        //Act
        const res: ApiResourceLocation = await vsoClient.beginGetLocation('testArea7', 'testLocation');

        //Assert
        assert(res.id === "testLocation");
    });
});

describe('WebApi Units', function () {
    const osName: string = os.platform();
    const osVersion: string = os.release();
    const nodeApiName: string = 'azure-devops-node-api';
    const nodeApiVersion: string = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

    it('sets the user agent correctly when request settings are specified', async () => {
        const myWebApi: WebApi.WebApi = new WebApi.WebApi('https://microsoft.com', WebApi.getBasicHandler('user', 'password'),
                                                          undefined, {productName: 'name', productVersion: '1.2.3'});
        const userAgent: string = `name/1.2.3 (${nodeApiName} ${nodeApiVersion}; ${osName} ${osVersion})`;
        assert.equal(userAgent, myWebApi.rest.client.userAgent, 'User agent should be: ' + userAgent);
    });

    it('sets the user agent correctly when request settings are not specified', async () => {
        const myWebApi: WebApi.WebApi = new WebApi.WebApi('https://microsoft.com', WebApi.getBasicHandler('user', 'password'), undefined);
        const userAgent: string = `${nodeApiName}/${nodeApiVersion} (${osName} ${osVersion})`;
        assert.equal(userAgent, myWebApi.rest.client.userAgent, 'User agent should be: ' + userAgent);
    });

    it('connects to the server with the correct user agent when request settings are specified', async () => {
        const myWebApi: WebApi.WebApi = new WebApi.WebApi('https://dev.azure.com/', WebApi.getBasicHandler('user', 'password'),
                                                          undefined, {productName: 'name', productVersion: '1.2.3'});
        const userAgent: string = `name/1.2.3 (${nodeApiName} ${nodeApiVersion}; ${osName} ${osVersion})`;
        nock('https://dev.azure.com/_apis/testArea', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': userAgent
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
        });

        // Act
        const res: vsom.ClientVersioningData = await myWebApi.vsoClient.getVersioningData('1', 'testArea', 'testLocation', {'testKey': 'testValue'}, null);

        // Assert
        assert.equal(res.apiVersion, '1');
        assert.equal(res.requestUrl, 'https://dev.azure.com/testTemplate');

    });

    it('connects to the server with the correct user agent when request settings are not specified', async () => {
        // Arrange
        const myWebApi: WebApi.WebApi = new WebApi.WebApi('https://dev.azure.com/', WebApi.getBasicHandler('user', 'password'), null);
        const userAgent: string = `${nodeApiName}/${nodeApiVersion} (${osName} ${osVersion})`;
        nock('https://dev.azure.com/_apis/testArea', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': userAgent
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
        });

        // Act
        const res: vsom.ClientVersioningData = await myWebApi.vsoClient.getVersioningData('1', 'testArea', 'testLocation', {'testKey': 'testValue'}, null);

        // Assert
        assert.equal(res.apiVersion, '1');
        assert.equal(res.requestUrl, 'https://dev.azure.com/testTemplate');
    });

    it('supports no_proxy environment variable', async() => {
        const myWebApi: WebApi.WebApi = new WebApi.WebApi('https://dev.azure.com/', WebApi.getBasicHandler('user', 'password'), null);
        process.env.no_proxy='dev.azure.com,my-tfs-instance.host'
        assert.equal(myWebApi.isNoProxyHost('https://dev.azure.com/myproject'), true);
        assert.equal(myWebApi.isNoProxyHost('https://my-tfs-instance.host/myproject'), true);
        assert.equal(myWebApi.isNoProxyHost('https://my-other-tfs-instance.host/myproject'), false);
    });
});

describe('Auth Handlers Units', function () {
    it('cross origin authenthication should be allowed by default in BasicCredentialHandler', () => {
        const basicAuthHandler = WebApi.getBasicHandler('user', 'password');
        assert(basicAuthHandler['allowCrossOriginAuthentication'] === true);
    });

    it('cross origin authenthication should be allowed by default in BearerCredentialHandler', () => {
        const bearerAuthHandler = WebApi.getBearerHandler('0000000000000000000000000000000000000000');
        assert(bearerAuthHandler['allowCrossOriginAuthentication'] === true);
    });

    it('cross origin authenthication should be allowed by default in PersonalAccessTokenCredentialHandler', () => {
        const personalAccessTokenAuthHandler = WebApi.getPersonalAccessTokenHandler('0000000000000000000000000000000000000000');
        assert(personalAccessTokenAuthHandler['allowCrossOriginAuthentication']  === true);
    });

    it('cross origin authenthication could be disabled in BasicCredentialHandler', () => {
        const basicAuthHandler = WebApi.getBasicHandler('user', 'password', false);  
        assert(basicAuthHandler['allowCrossOriginAuthentication'] === false);
    });

    it('cross origin authenthication could be disabled in BearerCredentialHandler', () => {
        const bearerAuthHandler = WebApi.getBearerHandler('0000000000000000000000000000000000000000', false);
        assert(bearerAuthHandler['allowCrossOriginAuthentication'] === false);
    });

    it('cross origin authenthication could be disabled in PersonalAccessTokenCredentialHandler', () => {
        const personalAccessTokenAuthHandler = WebApi.getPersonalAccessTokenHandler('0000000000000000000000000000000000000000', false);
        assert(personalAccessTokenAuthHandler['allowCrossOriginAuthentication'] === false);
    });
});
