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
import VssfSdkSampleInterfaces = require("./interfaces/VssfSdkSampleInterfaces");

export interface IVssfSdkSampleApi extends basem.ClientApiBase {
    createNote(note: VssfSdkSampleInterfaces.Note): Promise<VssfSdkSampleInterfaces.Note>;
    deleteNote(noteId: number): Promise<void>;
    getNote(noteId: number): Promise<VssfSdkSampleInterfaces.Note>;
    getNotes(): Promise<VssfSdkSampleInterfaces.Note[]>;
    updateNote(note: VssfSdkSampleInterfaces.Note, noteId: number): Promise<VssfSdkSampleInterfaces.Note>;
}

export class VssfSdkSampleApi extends basem.ClientApiBase implements IVssfSdkSampleApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-VssfSdkSample-api');
    }

    /**
    * @param {VssfSdkSampleInterfaces.Note} note
    */
    public async createNote(
        note: VssfSdkSampleInterfaces.Note
        ): Promise<VssfSdkSampleInterfaces.Note> {

        return new Promise<VssfSdkSampleInterfaces.Note>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Notes",
                    "d56223df-8ccd-45c9-89b4-eddf69240000",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VssfSdkSampleInterfaces.Note>;
                res = await this.rest.create<VssfSdkSampleInterfaces.Note>(url, note, options);

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
    * @param {number} noteId
    */
    public async deleteNote(
        noteId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                noteId: noteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Notes",
                    "d56223df-8ccd-45c9-89b4-eddf69240000",
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
    * @param {number} noteId
    */
    public async getNote(
        noteId: number
        ): Promise<VssfSdkSampleInterfaces.Note> {

        return new Promise<VssfSdkSampleInterfaces.Note>(async (resolve, reject) => {
            let routeValues: any = {
                noteId: noteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Notes",
                    "d56223df-8ccd-45c9-89b4-eddf69240000",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VssfSdkSampleInterfaces.Note>;
                res = await this.rest.get<VssfSdkSampleInterfaces.Note>(url, options);

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
    */
    public async getNotes(
        ): Promise<VssfSdkSampleInterfaces.Note[]> {

        return new Promise<VssfSdkSampleInterfaces.Note[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Notes",
                    "d56223df-8ccd-45c9-89b4-eddf69240000",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VssfSdkSampleInterfaces.Note[]>;
                res = await this.rest.get<VssfSdkSampleInterfaces.Note[]>(url, options);

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
    * @param {VssfSdkSampleInterfaces.Note} note
    * @param {number} noteId
    */
    public async updateNote(
        note: VssfSdkSampleInterfaces.Note,
        noteId: number
        ): Promise<VssfSdkSampleInterfaces.Note> {

        return new Promise<VssfSdkSampleInterfaces.Note>(async (resolve, reject) => {
            let routeValues: any = {
                noteId: noteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Notes",
                    "d56223df-8ccd-45c9-89b4-eddf69240000",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VssfSdkSampleInterfaces.Note>;
                res = await this.rest.replace<VssfSdkSampleInterfaces.Note>(url, note, options);

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
