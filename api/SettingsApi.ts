/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

import * as restm from 'typed-rest-client/RestClient';
import * as httpm from 'typed-rest-client/HttpClient';
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');

export interface ISettingsApi extends basem.ClientApiBase {
    getEntries(userScope: string, key?: string): Promise<{ [key: string] : any; }>;
    removeEntries(userScope: string, key: string): Promise<void>;
    setEntries(entries: { [key: string] : any; }, userScope: string): Promise<void>;
    getEntriesForScope(userScope: string, scopeName: string, scopeValue: string, key?: string): Promise<{ [key: string] : any; }>;
    removeEntriesForScope(userScope: string, scopeName: string, scopeValue: string, key: string): Promise<void>;
    setEntriesForScope(entries: { [key: string] : any; }, userScope: string, scopeName: string, scopeValue: string): Promise<void>;
}

export class SettingsApi extends basem.ClientApiBase implements ISettingsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Settings-api');
    }

    /**
    * Get all setting entries for the given user/all-users scope
    * 
    * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
    * @param {string} key - Optional key under which to filter all the entries
    */
    public async getEntries(
        userScope: string,
        key?: string
        ): Promise<{ [key: string] : any; }> {

        return new Promise<{ [key: string] : any; }>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope,
                key: key
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Settings",
                    "cd006711-163d-4cd4-a597-b05bad2556ff",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : any; }>;
                res = await this.rest.get<{ [key: string] : any; }>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Remove the entry or entries under the specified path
    * 
    * @param {string} userScope - User-Scope at which to remove the value. Should be "me" for the current user or "host" for all users.
    * @param {string} key - Root key of the entry or entries to remove
    */
    public async removeEntries(
        userScope: string,
        key: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope,
                key: key
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Settings",
                    "cd006711-163d-4cd4-a597-b05bad2556ff",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Set the specified setting entry values for the given user/all-users scope
    * 
    * @param {{ [key: string] : any; }} entries - The entries to set
    * @param {string} userScope - User-Scope at which to set the values. Should be "me" for the current user or "host" for all users.
    */
    public async setEntries(
        entries: { [key: string] : any; },
        userScope: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Settings",
                    "cd006711-163d-4cd4-a597-b05bad2556ff",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, entries, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get all setting entries for the given named scope
    * 
    * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
    * @param {string} scopeName - Scope at which to get the setting for (e.g. "project" or "team")
    * @param {string} scopeValue - Value of the scope (e.g. the project or team id)
    * @param {string} key - Optional key under which to filter all the entries
    */
    public async getEntriesForScope(
        userScope: string,
        scopeName: string,
        scopeValue: string,
        key?: string
        ): Promise<{ [key: string] : any; }> {

        return new Promise<{ [key: string] : any; }>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope,
                scopeName: scopeName,
                scopeValue: scopeValue,
                key: key
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Settings",
                    "4cbaafaf-e8af-4570-98d1-79ee99c56327",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : any; }>;
                res = await this.rest.get<{ [key: string] : any; }>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Remove the entry or entries under the specified path
    * 
    * @param {string} userScope - User-Scope at which to remove the value. Should be "me" for the current user or "host" for all users.
    * @param {string} scopeName - Scope at which to get the setting for (e.g. "project" or "team")
    * @param {string} scopeValue - Value of the scope (e.g. the project or team id)
    * @param {string} key - Root key of the entry or entries to remove
    */
    public async removeEntriesForScope(
        userScope: string,
        scopeName: string,
        scopeValue: string,
        key: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope,
                scopeName: scopeName,
                scopeValue: scopeValue,
                key: key
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Settings",
                    "4cbaafaf-e8af-4570-98d1-79ee99c56327",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Set the specified entries for the given named scope
    * 
    * @param {{ [key: string] : any; }} entries - The entries to set
    * @param {string} userScope - User-Scope at which to set the values. Should be "me" for the current user or "host" for all users.
    * @param {string} scopeName - Scope at which to set the settings on (e.g. "project" or "team")
    * @param {string} scopeValue - Value of the scope (e.g. the project or team id)
    */
    public async setEntriesForScope(
        entries: { [key: string] : any; },
        userScope: string,
        scopeName: string,
        scopeValue: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope,
                scopeName: scopeName,
                scopeValue: scopeValue
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Settings",
                    "4cbaafaf-e8af-4570-98d1-79ee99c56327",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, entries, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
