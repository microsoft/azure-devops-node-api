import assert = require('assert');
import nock = require('nock');
import vsom = require('../../api/VsoClient');
import * as rm from 'typed-rest-client/RestClient';
import { resolve } from 'path';
describe('VSOClient Units', function () {
    let rest: rm.RestClient;
    let vsoClient: vsom.VsoClient
    const baseUrl = 'https://dev.azure.com/';
    before(() => {
        const userAgent = "testAgent";
        const handlers = [];
        const options = null;
        rest = new rm.RestClient(userAgent, null, handlers, options);
        vsoClient = new vsom.VsoClient(baseUrl, rest);
    });

    after(() => {
    });

    afterEach(() => {
        nock.cleanAll();
        vsoClient = new vsom.VsoClient(baseUrl, rest);
    });

    it('constructs', () => {
        this.timeout(1000);
        const baseUrl = 'https://dev.azure.com/';
        const userAgent = "testAgent";
        const handlers = [];
        const options = null;
        const rest = new rm.RestClient(userAgent, null, handlers, options);
        const vso: vsom.VsoClient = new vsom.VsoClient('https://microsoft.com', rest);
        assert(vso, 'VsoClient should not be null');
    });

    it('gets versioning data where the max version and released version are identical', async () => {
        nock('https://dev.azure.com/_apis/testArea', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
               });
        const res = await vsoClient.getVersioningData('1', 'testArea', 'testLocation', {'testKey': 'testValue'}, null);
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    });

    it('gets versioning data where ther requested version is greater than the max version', async () => {
        nock('https://dev.azure.com/_apis/testArea2', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '2', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
               });
        const res = await vsoClient.getVersioningData('3', 'testArea2', 'testLocation', {'testKey': 'testValue'}, null);
        assert(res.apiVersion === '2-preview.1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    });

    it('gets versioning data where ther requested version is less than the max version', async () => {
        nock('https://dev.azure.com/_apis/testArea3', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '2', releasedVersion: '2', routeTemplate: 'testTemplate', area: 'testArea', resourceName: 'testName', resourceVersion: '1'}]
               });
        const res = await vsoClient.getVersioningData('1', 'testArea3', 'testLocation', {'testKey': 'testValue'}, null);
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate');
    });

    it('gets versioning data with simple query params', async () => {
        nock('https://dev.azure.com/_apis/testArea4', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea4', resourceName: 'testName', resourceVersion: '1'}]
               });
        const queryParams = {status: 2};
        const res = await vsoClient.getVersioningData('1', 'testArea4', 'testLocation', {'testKey': 'testValue'}, queryParams);
        assert(res.apiVersion === '1');
        console.log(res.requestUrl);
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate?status=2');
    });

    it('gets versioning data with nested query params', async () => {
        nock('https://dev.azure.com/_apis/testArea5', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea5', resourceName: 'testName', resourceVersion: '1'}]
               });
        const queryParams = {status: {innerstatus: 2}};
        const res = await vsoClient.getVersioningData('1', 'testArea5', 'testLocation', {'testKey': 'testValue'}, queryParams);
        assert(res.apiVersion === '1');
        console.log(res.requestUrl);
        assert(res.requestUrl === 'https://dev.azure.com/testTemplate?innerstatus=2');
    });

    it('gets versioning data after an initialization promise', async () => {
        nock('https://newbase.com/_apis/testArea6', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea6', resourceName: 'testName', resourceVersion: '1'}]
               });
        vsoClient._setInitializationPromise(new Promise(() => {
            vsoClient.baseUrl = 'https://newbase.com';
            resolve();
        }));
        vsoClient._setInitializationPromise(Promise.resolve());
        const res = await vsoClient.getVersioningData('1', 'testArea6', 'testLocation', {'testKey': 'testValue'}, null);
        assert(res.apiVersion === '1');
        assert(res.requestUrl === 'https://newbase.com/testTemplate');

        vsoClient = new vsom.VsoClient(baseUrl, rest);
    });

    it('gets the location', async () => {
        nock('https://dev.azure.com/_apis/testArea7', {
            reqheaders: {
                'accept': 'application/json',
                'user-agent': 'testAgent'
            }})
            .options('')
            .reply(200, {
                value: [{id: 'testLocation', maxVersion: '1', releasedVersion: '1', routeTemplate: 'testTemplate', area: 'testArea7', resourceName: 'testName', resourceVersion: '1'}]
               });
        const res = await vsoClient.beginGetLocation('testArea7', 'testLocation');
        assert(res.id === "testLocation");
    });
});