"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const nock = require("nock");
const os = require("os");
const vsom = require("../../_build/VsoClient");
const WebApi = require("../../_build/WebApi");
const rm = require("../../_build/node_modules/typed-rest-client/RestClient");
describe('VSOClient Units', function () {
    let rest;
    let vsoClient;
    const baseUrl = 'https://dev.azure.com/';
    before(() => {
        const userAgent = "testAgent";
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
        const userAgent = "testAgent";
        const rest = new rm.RestClient(userAgent, null, []);
        //Act
        const vso = new vsom.VsoClient('https://microsoft.com', rest);
        //Assert
        assert(vso, 'VsoClient should not be null');
    });
    it('gets versioning data where the max version and released version are identical', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const res = yield vsoClient.getVersioningData('1', 'testArea', 'testLocation', { 'testKey': 'testValue' }, null);
        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    }));
    it('gets versioning data where ther requested version is greater than the max version', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea2', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '2', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const res = yield vsoClient.getVersioningData('3', 'testArea2', 'testLocation', { 'testKey': 'testValue' }, null);
        //Assert
        assert(res.apiVersion === '2-preview.1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    }));
    it('gets versioning data where ther requested version is less than the max version', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea3', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '2', releasedVersion: '2', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const res = yield vsoClient.getVersioningData('1', 'testArea3', 'testLocation', { 'testKey': 'testValue' }, null);
        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    }));
    it('gets versioning data with simple query params', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea4', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea4', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const queryParams = { status: 2 };
        const res = yield vsoClient.getVersioningData('1', 'testArea4', 'testLocation', { 'testKey': 'testValue' }, queryParams);
        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate?status=2');
    }));
    it('gets versioning data with nested query params', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea5', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea5', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const queryParams = { status: { innerstatus: 2 } };
        const res = yield vsoClient.getVersioningData('1', 'testArea5', 'testLocation', { 'testKey': 'testValue' }, queryParams);
        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate?status.innerstatus=2');
    }));
    it('gets versioning data with complex nested query params', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea5', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea5', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const queryParams = { status: { innerstatus: 2 }, version: '1', nestedObject: { nestedField: 'value', innerNestedObject: { key: 'val2' } } };
        const res = yield vsoClient.getVersioningData('1', 'testArea5', 'testLocation', { 'testKey': 'testValue' }, queryParams);
        //Assert
        assert.equal(res.apiVersion, '1');
        assert.equal(res.requestUrl, 'https://dev.azure.com/testTemplate?status.innerstatus=2&version=1&nestedObject.nestedField=value&nestedObject.innerNestedObject.key=val2');
    }));
    it('gets versioning datafor dates', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://dev.azure.com/_apis/testArea5', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea5', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const queryParams = { min: new Date(Date.UTC(208, 9, 19)) };
        const res = yield vsoClient.getVersioningData('1', 'testArea5', 'testLocation', { 'testKey': 'testValue' }, queryParams);
        //Assert
        assert.equal(res.apiVersion, '1');
        assert.equal(res.requestUrl, 'https://dev.azure.com/testTemplate?min=Wed%2C%2019%20Oct%200208%2000%3A00%3A00%20GMT');
    }));
    it('gets versioning data after an initialization promise', () => __awaiter(this, void 0, void 0, function* () {
        //Arrange
        nock('https://newbase.com/_apis/testArea6', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea6', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        vsoClient._setInitializationPromise(new Promise(resolve => {
            vsoClient.baseUrl = 'https://newbase.com';
            resolve();
        }));
        const res = yield vsoClient.getVersioningData('1', 'testArea6', 'testLocation', { 'testKey': 'testValue' }, null);
        //Assert
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://newbase.com/testTemplate');
    }));
    it('gets the location', () => __awaiter(this, void 0, void 0, function* () {
        nock('https://dev.azure.com/_apis/testArea7', {
            //Arrange
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea7', resourceName: 'testName', resourceVersion: '1' }]
        });
        //Act
        const res = yield vsoClient.beginGetLocation('testArea7', 'testLocation');
        //Assert
        assert(res.id === "testLocation");
    }));
});
describe('WebApi Units', function () {
    const osName = os.platform();
    const osVersion = os.release();
    const nodeApiName = 'azure-devops-node-api';
    const nodeApiVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;
    it('sets the user agent correctly when request settings are specified', () => __awaiter(this, void 0, void 0, function* () {
        const myWebApi = new WebApi.WebApi('https://microsoft.com', WebApi.getBasicHandler('user', 'password'), undefined, { productName: 'name', productVersion: '1.2.3' });
        const userAgent = `name/1.2.3 (${nodeApiName} ${nodeApiVersion}; ${osName} ${osVersion})`;
        assert.equal(userAgent, myWebApi.rest.client.userAgent, 'User agent should be: ' + userAgent);
    }));
    it('sets the user agent correctly when request settings are not specified', () => __awaiter(this, void 0, void 0, function* () {
        const myWebApi = new WebApi.WebApi('https://microsoft.com', WebApi.getBasicHandler('user', 'password'), undefined);
        const userAgent = `${nodeApiName}/${nodeApiVersion} (${osName} ${osVersion})`;
        assert.equal(userAgent, myWebApi.rest.client.userAgent, 'User agent should be: ' + userAgent);
    }));
    it('connects to the server with the correct user agent when request settings are specified', () => __awaiter(this, void 0, void 0, function* () {
        const myWebApi = new WebApi.WebApi('https://dev.azure.com/', WebApi.getBasicHandler('user', 'password'), undefined, { productName: 'name', productVersion: '1.2.3' });
        const userAgent = `name/1.2.3 (${nodeApiName} ${nodeApiVersion}; ${osName} ${osVersion})`;
        nock('https://dev.azure.com/_apis/testArea', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': userAgent
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1' }]
        });
        // Act
        const res = yield myWebApi.vsoClient.getVersioningData('1', 'testArea', 'testLocation', { 'testKey': 'testValue' }, null);
        // Assert
        assert.equal(res.apiVersion, '1');
        assert.equal(res.requestUrl, 'https://dev.azure.com/testTemplate');
    }));
    it('connects to the server with the correct user agent when request settings are not specified', () => __awaiter(this, void 0, void 0, function* () {
        // Arrange
        const myWebApi = new WebApi.WebApi('https://dev.azure.com/', WebApi.getBasicHandler('user', 'password'), null);
        const userAgent = `${nodeApiName}/${nodeApiVersion} (${osName} ${osVersion})`;
        nock('https://dev.azure.com/_apis/testArea', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': userAgent
            }
        })
            .options('')
            .reply(200, {
            value: [{ id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1' }]
        });
        // Act
        const res = yield myWebApi.vsoClient.getVersioningData('1', 'testArea', 'testLocation', { 'testKey': 'testValue' }, null);
        // Assert
        assert.equal(res.apiVersion, '1');
        assert.equal(res.requestUrl, 'https://dev.azure.com/testTemplate');
    }));
    it('supports no_proxy environment variable', () => __awaiter(this, void 0, void 0, function* () {
        const myWebApi = new WebApi.WebApi('https://dev.azure.com/', WebApi.getBasicHandler('user', 'password'), null);
        process.env.no_proxy = 'dev.azure.com,my-tfs-instance.host';
        assert.equal(myWebApi.isNoProxyHost('https://dev.azure.com/myproject'), true);
        assert.equal(myWebApi.isNoProxyHost('https://my-tfs-instance.host/myproject'), true);
        assert.equal(myWebApi.isNoProxyHost('https://my-other-tfs-instance.host/myproject'), false);
    }));
});
