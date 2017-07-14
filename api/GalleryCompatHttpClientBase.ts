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
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IGalleryCompatHttpClientBase extends basem.ClientApiBase {
    createExtensionJson(extensionPackage: GalleryInterfaces.ExtensionPackage): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionByIdJson(extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string): Promise<GalleryInterfaces.PublishedExtension>;
    createExtensionWithPublisherJson(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionJson(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string): Promise<GalleryInterfaces.PublishedExtension>;
}

export class GalleryCompatHttpClientBase extends basem.ClientApiBase implements IGalleryCompatHttpClientBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent?: string, options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, userAgent, options);
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    */
    public createExtensionJson(
        extensionPackage: GalleryInterfaces.ExtensionPackage
    ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.create<GalleryInterfaces.PublishedExtension>(url, extensionPackage, options);

                let ret = this.formatResponse(res.result,
                    GalleryInterfaces.TypeInfo.PublishedExtension,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    * @param {string} extensionId
    */
    public updateExtensionByIdJson(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        extensionId: string
    ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.replace<GalleryInterfaces.PublishedExtension>(url, extensionPackage, options);

                let ret = this.formatResponse(res.result,
                    GalleryInterfaces.TypeInfo.PublishedExtension,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    * @param {string} publisherName
    */
    public createExtensionWithPublisherJson(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string
    ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.create<GalleryInterfaces.PublishedExtension>(url, extensionPackage, options);

                let ret = this.formatResponse(res.result,
                    GalleryInterfaces.TypeInfo.PublishedExtension,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    * @param {string} publisherName
    * @param {string} extensionName
    */
    public updateExtensionJson(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string,
        extensionName: string
    ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.replace<GalleryInterfaces.PublishedExtension>(url, extensionPackage, options);

                let ret = this.formatResponse(res.result,
                    GalleryInterfaces.TypeInfo.PublishedExtension,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }
}
