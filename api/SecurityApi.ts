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
import SecurityInterfaces = require("./interfaces/SecurityInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ISecurityApi extends basem.ClientApiBase {
    removeAccessControlEntries(securityNamespaceId: string, token?: string, descriptors?: string): Promise<boolean>;
    setAccessControlEntries(container: any, securityNamespaceId: string): Promise<SecurityInterfaces.AccessControlEntry[]>;
    queryAccessControlLists(securityNamespaceId: string, token?: string, descriptors?: string, includeExtendedInfo?: boolean, recurse?: boolean): Promise<SecurityInterfaces.AccessControlList[]>;
    removeAccessControlLists(securityNamespaceId: string, tokens?: string, recurse?: boolean): Promise<boolean>;
    setAccessControlLists(accessControlLists: VSSInterfaces.VssJsonCollectionWrapperV<SecurityInterfaces.AccessControlListsCollection>, securityNamespaceId: string): Promise<void>;
    hasPermissionsBatch(evalBatch: SecurityInterfaces.PermissionEvaluationBatch): Promise<SecurityInterfaces.PermissionEvaluationBatch>;
    hasPermissions(securityNamespaceId: string, permissions?: number, tokens?: string, alwaysAllowAdministrators?: boolean, delimiter?: string): Promise<boolean[]>;
    removePermission(securityNamespaceId: string, permissions?: number, token?: string, descriptor?: string): Promise<SecurityInterfaces.AccessControlEntry>;
    querySecurityNamespaces(securityNamespaceId: string, localOnly?: boolean): Promise<SecurityInterfaces.SecurityNamespaceDescription[]>;
    setInheritFlag(container: any, securityNamespaceId: string): Promise<void>;
}

export class SecurityApi extends basem.ClientApiBase implements ISecurityApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Security-api');
    }

    /**
    * @param {string} securityNamespaceId
    * @param {string} token
    * @param {string} descriptors
    */
    public async removeAccessControlEntries(
        securityNamespaceId: string,
        token?: string,
        descriptors?: string
        ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId
            };

            let queryValues: any = {
                token: token,
                descriptors: descriptors,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "ac08c8ff-4323-4b08-af90-bcd018d380ce",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.del<boolean>(url, options);

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
    * @param {any} container
    * @param {string} securityNamespaceId
    */
    public async setAccessControlEntries(
        container: any,
        securityNamespaceId: string
        ): Promise<SecurityInterfaces.AccessControlEntry[]> {

        return new Promise<SecurityInterfaces.AccessControlEntry[]>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "ac08c8ff-4323-4b08-af90-bcd018d380ce",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<SecurityInterfaces.AccessControlEntry[]>;
                res = await this.rest.create<SecurityInterfaces.AccessControlEntry[]>(url, container, options);

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
    * @param {string} securityNamespaceId
    * @param {string} token
    * @param {string} descriptors
    * @param {boolean} includeExtendedInfo
    * @param {boolean} recurse
    */
    public async queryAccessControlLists(
        securityNamespaceId: string,
        token?: string,
        descriptors?: string,
        includeExtendedInfo?: boolean,
        recurse?: boolean
        ): Promise<SecurityInterfaces.AccessControlList[]> {

        return new Promise<SecurityInterfaces.AccessControlList[]>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId
            };

            let queryValues: any = {
                token: token,
                descriptors: descriptors,
                includeExtendedInfo: includeExtendedInfo,
                recurse: recurse,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "18a2ad18-7571-46ae-bec7-0c7da1495885",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<SecurityInterfaces.AccessControlList[]>;
                res = await this.rest.get<SecurityInterfaces.AccessControlList[]>(url, options);

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
    * @param {string} securityNamespaceId
    * @param {string} tokens
    * @param {boolean} recurse
    */
    public async removeAccessControlLists(
        securityNamespaceId: string,
        tokens?: string,
        recurse?: boolean
        ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId
            };

            let queryValues: any = {
                tokens: tokens,
                recurse: recurse,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "18a2ad18-7571-46ae-bec7-0c7da1495885",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.del<boolean>(url, options);

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
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<SecurityInterfaces.AccessControlListsCollection>} accessControlLists
    * @param {string} securityNamespaceId
    */
    public async setAccessControlLists(
        accessControlLists: VSSInterfaces.VssJsonCollectionWrapperV<SecurityInterfaces.AccessControlListsCollection>,
        securityNamespaceId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "18a2ad18-7571-46ae-bec7-0c7da1495885",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, accessControlLists, options);

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
    * Perform a batch of "has permission" checks. This methods does not aggregate the results nor does it shortcircut if one of the permissions evaluates to false.
    * 
    * @param {SecurityInterfaces.PermissionEvaluationBatch} evalBatch
    */
    public async hasPermissionsBatch(
        evalBatch: SecurityInterfaces.PermissionEvaluationBatch
        ): Promise<SecurityInterfaces.PermissionEvaluationBatch> {

        return new Promise<SecurityInterfaces.PermissionEvaluationBatch>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "cf1faa59-1b63-4448-bf04-13d981a46f5d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<SecurityInterfaces.PermissionEvaluationBatch>;
                res = await this.rest.create<SecurityInterfaces.PermissionEvaluationBatch>(url, evalBatch, options);

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
    * @param {string} securityNamespaceId
    * @param {number} permissions
    * @param {string} tokens
    * @param {boolean} alwaysAllowAdministrators
    * @param {string} delimiter
    */
    public async hasPermissions(
        securityNamespaceId: string,
        permissions?: number,
        tokens?: string,
        alwaysAllowAdministrators?: boolean,
        delimiter?: string
        ): Promise<boolean[]> {

        return new Promise<boolean[]>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId,
                permissions: permissions
            };

            let queryValues: any = {
                tokens: tokens,
                alwaysAllowAdministrators: alwaysAllowAdministrators,
                delimiter: delimiter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Security",
                    "dd3b8bd6-c7fc-4cbd-929a-933d9c011c9d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<boolean[]>;
                res = await this.rest.get<boolean[]>(url, options);

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
    * @param {string} securityNamespaceId
    * @param {number} permissions
    * @param {string} token
    * @param {string} descriptor
    */
    public async removePermission(
        securityNamespaceId: string,
        permissions?: number,
        token?: string,
        descriptor?: string
        ): Promise<SecurityInterfaces.AccessControlEntry> {

        return new Promise<SecurityInterfaces.AccessControlEntry>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId,
                permissions: permissions
            };

            let queryValues: any = {
                token: token,
                descriptor: descriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Security",
                    "dd3b8bd6-c7fc-4cbd-929a-933d9c011c9d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<SecurityInterfaces.AccessControlEntry>;
                res = await this.rest.del<SecurityInterfaces.AccessControlEntry>(url, options);

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
    * @param {string} securityNamespaceId
    * @param {boolean} localOnly
    */
    public async querySecurityNamespaces(
        securityNamespaceId: string,
        localOnly?: boolean
        ): Promise<SecurityInterfaces.SecurityNamespaceDescription[]> {

        return new Promise<SecurityInterfaces.SecurityNamespaceDescription[]>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId
            };

            let queryValues: any = {
                localOnly: localOnly,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "ce7b9f95-fde9-4be8-a86d-83b366f0b87a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<SecurityInterfaces.SecurityNamespaceDescription[]>;
                res = await this.rest.get<SecurityInterfaces.SecurityNamespaceDescription[]>(url, options);

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
    * @param {any} container
    * @param {string} securityNamespaceId
    */
    public async setInheritFlag(
        container: any,
        securityNamespaceId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                securityNamespaceId: securityNamespaceId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Security",
                    "ce7b9f95-fde9-4be8-a86d-83b366f0b87a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, container, options);

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
