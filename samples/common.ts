import * as vm from 'vso-node-api';
import * as lim from 'vso-node-api/interfaces/LocationsInterfaces';

function getEnv(name: string): string {
    let val = process.env[name];
    if (!val) {
        console.error(name + ' env var not set');
        process.exit(1);
    }
    return val;
}

function getAuthenticationHandler(): vm.IRequestHandler {
    // PAT
    // const token = getEnv('API_TOKEN');
    // return vm.getPersonalAccessTokenHandler(token);

    // Basic
    // const username = getEnv('API_USERNAME');
    // const password = getEnv('API_PASSWORD');
    // return vm.getBasicHandler(username, password);

    // Bearer
    // const bearerToken = getEnv('API_BEARER_TOKEN');
    // return vm.getBearerHandler(bearerToken);

    // NTLM
    // const username = getEnv('API_USERNAME');
    // const password = getEnv('API_PASSWORD');

    var username = "stfrance";
    var password = process.env["PW"];
    var workstation = "STEPHENMICHAELF";
    var domain = "NORTHAMERICA";
    //var url = "http://stephenmichaelf:8080/tfs/DefaultCollection/_projects?_a=new";

    return vm.getNtlmHandler(username, password, workstation, domain);
}

export async function getApi(serverUrl: string): Promise<vm.WebApi> {
    return new Promise<vm.WebApi>(async (resolve, reject) => {
        try {
            const token = getEnv('API_TOKEN');
            const authHandler: vm.IRequestHandler = getAuthenticationHandler();
            let option = undefined;

            // The following sample is for testing proxy
            // option = {
            //     proxy: {
            //         proxyUrl: "http://127.0.0.1:8888"
            //         // proxyUsername: "1",
            //         // proxyPassword: "1",
            //         // proxyBypassHosts: [
            //         //     "github\.com"
            //         // ],
            //     },
            //     ignoreSslError: true
            // };

            // The following sample is for testing cert
            // option = {
            //     cert: {
            //         caFile: "E:\\certutil\\doctest\\ca2.pem",
            //         certFile: "E:\\certutil\\doctest\\client-cert2.pem",
            //         keyFile: "E:\\certutil\\doctest\\client-cert-key2.pem",
            //         passphrase: "test123",
            //     },
            // };

            console.log("1");
            const vsts: vm.WebApi = new vm.WebApi(serverUrl, authHandler, option);
            console.log("1.5");
            const connData: lim.ConnectionData = await vsts.connect();
            console.log("2");
            console.log('Hello ' + connData.authenticatedUser.providerDisplayName);
            console.log("3");
            resolve(vsts);
        }
        catch (err) {
            console.log('error: ' + JSON.stringify(err));
            reject(err);
        }
    });
}

export async function getWebApi(): Promise<vm.WebApi> {
    const serverUrl: string = getEnv('API_URL');
    return await this.getApi(serverUrl);
}

export function getProject(): string {
    return getEnv('API_PROJECT');
}

export function banner(title: string): void {
    console.log('=======================================');
    console.log('\t' + title);
    console.log('=======================================');
}

export function heading(title: string): void {
    console.log();
    console.log('> ' + title);
}


