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
import MavenInterfaces = require("./interfaces/MavenInterfaces");

export interface IMavenApi extends basem.ClientApiBase {
    packageInfo(feed: string, groupId: string, artifactId: string, version?: string, fileName?: string): Promise<MavenInterfaces.MavenPackage>;
    pomInfo(feed: string, groupId: string, artifactId: string, version: string): Promise<MavenInterfaces.MavenPomMetadata>;
}

export class MavenApi extends basem.ClientApiBase implements IMavenApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Maven-api');
    }

    /**
    * @param {string} feed
    * @param {string} groupId
    * @param {string} artifactId
    * @param {string} version
    * @param {string} fileName
    */
    public async packageInfo(
        feed: string,
        groupId: string,
        artifactId: string,
        version?: string,
        fileName?: string
        ): Promise<MavenInterfaces.MavenPackage> {

        return new Promise<MavenInterfaces.MavenPackage>(async (resolve, reject) => {
            let routeValues: any = {
                feed: feed,
                groupId: groupId,
                artifactId: artifactId,
                version: version,
                fileName: fileName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "maven",
                    "e6d2830e-bac3-431b-ad07-d12c0605b02a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MavenInterfaces.MavenPackage>;
                res = await this.rest.get<MavenInterfaces.MavenPackage>(url, options);

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
    * @param {string} feed
    * @param {string} groupId
    * @param {string} artifactId
    * @param {string} version
    */
    public async pomInfo(
        feed: string,
        groupId: string,
        artifactId: string,
        version: string
        ): Promise<MavenInterfaces.MavenPomMetadata> {

        return new Promise<MavenInterfaces.MavenPomMetadata>(async (resolve, reject) => {
            let routeValues: any = {
                feed: feed,
                groupId: groupId,
                artifactId: artifactId,
                version: version
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "maven",
                    "03cb6da7-7750-4452-8eb3-569d0ec7c04b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MavenInterfaces.MavenPomMetadata>;
                res = await this.rest.get<MavenInterfaces.MavenPomMetadata>(url, options);

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
