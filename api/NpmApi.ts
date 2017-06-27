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
import NpmInterfaces = require("./interfaces/NpmInterfaces");

export interface INpmApi extends basem.ClientApiBase {
    getContentScopedPackage(feedId: string, packageScope: string, unscopedPackageName: string, packageVersion: string): Promise<NodeJS.ReadableStream>;
    getContentUnscopedPackage(feedId: string, packageName: string, packageVersion: string): Promise<NodeJS.ReadableStream>;
    getReadmeScopedPackage(feedId: string, packageScope: string, unscopedPackageName: string, packageVersion: string): Promise<NodeJS.ReadableStream>;
    getReadmeUnscopedPackage(feedId: string, packageName: string, packageVersion: string): Promise<NodeJS.ReadableStream>;
    getScopedPackageInfo(feedId: string, packageScope: string, unscopedPackageName: string, packageVersion: string): Promise<NpmInterfaces.Package>;
    unpublishScopedPackage(feedId: string, packageScope: string, unscopedPackageName: string, packageVersion: string): Promise<NpmInterfaces.Package>;
    updateScopedPackage(packageVersionDetails: NpmInterfaces.PackageVersionDetails, feedId: string, packageScope: string, unscopedPackageName: string, packageVersion: string): Promise<NpmInterfaces.Package>;
    getPackageInfo(feedId: string, packageName: string, packageVersion: string): Promise<NpmInterfaces.Package>;
    unpublishPackage(feedId: string, packageName: string, packageVersion: string): Promise<NpmInterfaces.Package>;
    updatePackage(packageVersionDetails: NpmInterfaces.PackageVersionDetails, feedId: string, packageName: string, packageVersion: string): Promise<NpmInterfaces.Package>;
}

export class NpmApi extends basem.ClientApiBase implements INpmApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Npm-api');
    }

    /**
     * @param {string} feedId
     * @param {string} packageScope
     * @param {string} unscopedPackageName
     * @param {string} packageVersion
     */
    public async getContentScopedPackage(
        feedId: string,
        packageScope: string,
        unscopedPackageName: string,
        packageVersion: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageScope: packageScope,
                unscopedPackageName: unscopedPackageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "09a4eafd-123a-495c-979c-0eda7bdb9a14",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageName
     * @param {string} packageVersion
     */
    public async getContentUnscopedPackage(
        feedId: string,
        packageName: string,
        packageVersion: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageName: packageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "75caa482-cb1e-47cd-9f2c-c048a4b7a43e",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageScope
     * @param {string} unscopedPackageName
     * @param {string} packageVersion
     */
    public async getReadmeScopedPackage(
        feedId: string,
        packageScope: string,
        unscopedPackageName: string,
        packageVersion: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageScope: packageScope,
                unscopedPackageName: unscopedPackageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "6d4db777-7e4a-43b2-afad-779a1d197301",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageName
     * @param {string} packageVersion
     */
    public async getReadmeUnscopedPackage(
        feedId: string,
        packageName: string,
        packageVersion: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageName: packageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "1099a396-b310-41d4-a4b6-33d134ce3fcf",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageScope
     * @param {string} unscopedPackageName
     * @param {string} packageVersion
     */
    public async getScopedPackageInfo(
        feedId: string,
        packageScope: string,
        unscopedPackageName: string,
        packageVersion: string
        ): Promise<NpmInterfaces.Package> {

        return new Promise<NpmInterfaces.Package>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageScope: packageScope,
                unscopedPackageName: unscopedPackageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "e93d9ec3-4022-401e-96b0-83ea5d911e09",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NpmInterfaces.Package>;
                res = await this.rest.get<NpmInterfaces.Package>(url, options);

                let ret = this.formatResponse(res.result,
                                              NpmInterfaces.TypeInfo.Package,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageScope
     * @param {string} unscopedPackageName
     * @param {string} packageVersion
     */
    public async unpublishScopedPackage(
        feedId: string,
        packageScope: string,
        unscopedPackageName: string,
        packageVersion: string
        ): Promise<NpmInterfaces.Package> {

        return new Promise<NpmInterfaces.Package>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageScope: packageScope,
                unscopedPackageName: unscopedPackageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "e93d9ec3-4022-401e-96b0-83ea5d911e09",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NpmInterfaces.Package>;
                res = await this.rest.del<NpmInterfaces.Package>(url, options);

                let ret = this.formatResponse(res.result,
                                              NpmInterfaces.TypeInfo.Package,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NpmInterfaces.PackageVersionDetails} packageVersionDetails
     * @param {string} feedId
     * @param {string} packageScope
     * @param {string} unscopedPackageName
     * @param {string} packageVersion
     */
    public async updateScopedPackage(
        packageVersionDetails: NpmInterfaces.PackageVersionDetails,
        feedId: string,
        packageScope: string,
        unscopedPackageName: string,
        packageVersion: string
        ): Promise<NpmInterfaces.Package> {

        return new Promise<NpmInterfaces.Package>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageScope: packageScope,
                unscopedPackageName: unscopedPackageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "e93d9ec3-4022-401e-96b0-83ea5d911e09",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NpmInterfaces.Package>;
                res = await this.rest.update<NpmInterfaces.Package>(url, packageVersionDetails, options);

                let ret = this.formatResponse(res.result,
                                              NpmInterfaces.TypeInfo.Package,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageName
     * @param {string} packageVersion
     */
    public async getPackageInfo(
        feedId: string,
        packageName: string,
        packageVersion: string
        ): Promise<NpmInterfaces.Package> {

        return new Promise<NpmInterfaces.Package>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageName: packageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "ed579d62-67c9-4271-be66-9b029af5bcf9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NpmInterfaces.Package>;
                res = await this.rest.get<NpmInterfaces.Package>(url, options);

                let ret = this.formatResponse(res.result,
                                              NpmInterfaces.TypeInfo.Package,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageName
     * @param {string} packageVersion
     */
    public async unpublishPackage(
        feedId: string,
        packageName: string,
        packageVersion: string
        ): Promise<NpmInterfaces.Package> {

        return new Promise<NpmInterfaces.Package>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageName: packageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "ed579d62-67c9-4271-be66-9b029af5bcf9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NpmInterfaces.Package>;
                res = await this.rest.del<NpmInterfaces.Package>(url, options);

                let ret = this.formatResponse(res.result,
                                              NpmInterfaces.TypeInfo.Package,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NpmInterfaces.PackageVersionDetails} packageVersionDetails
     * @param {string} feedId
     * @param {string} packageName
     * @param {string} packageVersion
     */
    public async updatePackage(
        packageVersionDetails: NpmInterfaces.PackageVersionDetails,
        feedId: string,
        packageName: string,
        packageVersion: string
        ): Promise<NpmInterfaces.Package> {

        return new Promise<NpmInterfaces.Package>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageName: packageName,
                packageVersion: packageVersion
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "npm",
                    "ed579d62-67c9-4271-be66-9b029af5bcf9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NpmInterfaces.Package>;
                res = await this.rest.update<NpmInterfaces.Package>(url, packageVersionDetails, options);

                let ret = this.formatResponse(res.result,
                                              NpmInterfaces.TypeInfo.Package,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
