/// <reference path="typings/index.d.ts" />

import * as vm from 'vso-node-api';

function getEnv(name: string): string {
    let val = process.env[name];
    if (!val) {
        console.error(name + ' env var not set');
        process.exit(1);
    } 
    return val;
}

export async function getWebApi(): Promise<vm.WebApi> {
    return new Promise<vm.WebApi>(async (resolve, reject) => {
        try {
            let serverUrl = getEnv('API_URL');
            let token = getEnv('API_TOKEN');
            let authHandler = vm.getPersonalAccessTokenHandler(token);

            let vsts: vm.WebApi = new vm.WebApi(serverUrl, authHandler);
            let connData = await vsts.connect();
            console.log('Hello ' + connData.authorizedUser.customDisplayName);
            resolve(vsts);
        }
        catch (err) {
            reject(err);
        }
    });    
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


