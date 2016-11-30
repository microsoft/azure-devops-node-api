import * as cm from './common';
import * as httpm from 'vso-node-api/HttpClient';
import * as restm from 'vso-node-api/RestClient';

let httpc: httpm.HttpClient = new httpm.HttpClient('vsts-node-api');
let restc: restm.RestClient = new restm.RestClient('vsts-http');

function outputHttpResponse(res: httpm.IHttpClientResponse) {
    console.log('statusCode:' + res.statusCode);

    if (res && res.contents) {
        let obj = JSON.parse(res.contents.toString());
        console.log('response from ' + obj.url);
        if (obj.data) {
            console.log('data:', obj.data);
        }
    }    
}

function outputRestResponse(res: restm.IRestClientResponse) {
    console.log('statusCode:' + res.statusCode);

    if (res && res.result) {
        console.log('response from ' + res.result.url);
        if (res.result.data) {
            console.log('data:', res.result.data);
        }
    }    
}

export async function run() {
    let httpRes: httpm.IHttpClientResponse;
    let restRes: restm.IRestClientResponse;
    try {
        //--------------------------------------
        // HttpClient
        //--------------------------------------

        // GET request
        cm.heading('get request');
        httpRes = await httpc.get('https://httpbin.org/get');
        outputHttpResponse(httpRes);

        // DELETE request
        cm.heading('delete request');
        httpRes = await httpc.del('https://httpbin.org/delete');
        outputHttpResponse(httpRes);

        let b: string = 'Hello World!';

        // POST request
        cm.heading('post request');
        httpRes = await httpc.post('https://httpbin.org/post', b);
        outputHttpResponse(httpRes);        

        // PATCH request
        cm.heading('patch request');
        httpRes = await httpc.patch('https://httpbin.org/patch', b);
        outputHttpResponse(httpRes);

        // GET not found
        cm.heading('get not found');
        httpRes = await httpc.get('https://httpbin.org/status/404');
        outputHttpResponse(httpRes);

        //--------------------------------------
        // RestClient
        //--------------------------------------
        cm.heading('get rest obj');
        restRes = await restc.get('https://httpbin.org/get', '1.0-preview');
        outputRestResponse(restRes);

        let obj: any = { message: "Hello World!" };

        cm.heading('create rest obj');
        restRes = await restc.create('https://httpbin.org/post', '1.0-preview', obj);
        outputRestResponse(restRes);

        cm.heading('update rest obj');
        restRes = await restc.update('https://httpbin.org/patch', '1.0-preview', obj);
        outputRestResponse(restRes);                
    }
    catch (err) {
        console.error('Failed: ' + err.message);
    }
}