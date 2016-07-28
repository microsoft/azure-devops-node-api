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

export function getWebApi(): vm.WebApi {
    let serverUrl = getEnv('API_URL');
    let token = getEnv('API_TOKEN');
    let authHandler = vm.getPersonalAccessTokenHandler(token);

    let vsts: vm.WebApi = new vm.WebApi(serverUrl, authHandler);
    return vsts;
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


