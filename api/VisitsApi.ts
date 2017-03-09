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
import VisitsInterfaces = require("./interfaces/VisitsInterfaces");

export interface IVisitsApi extends basem.ClientApiBase {
    getStats(stats: VisitsInterfaces.ArtifactStats[], includeUpdatesSinceLastVisit?: boolean): Promise<VisitsInterfaces.ArtifactStats[]>;
    updateLastVisit(visit: VisitsInterfaces.ArtifactVisit): Promise<VisitsInterfaces.ArtifactVisit>;
    getVisits(visits: VisitsInterfaces.ArtifactVisit[]): Promise<VisitsInterfaces.ArtifactVisit[]>;
}

export class VisitsApi extends basem.ClientApiBase implements IVisitsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Visits-api');
    }

    /**
    * Get last visit dates POST /_apis/visits/artifactStatsBatch
    * 
    * @param {VisitsInterfaces.ArtifactStats[]} stats
    * @param {boolean} includeUpdatesSinceLastVisit
    */
    public async getStats(
        stats: VisitsInterfaces.ArtifactStats[],
        includeUpdatesSinceLastVisit?: boolean
        ): Promise<VisitsInterfaces.ArtifactStats[]> {

        return new Promise<VisitsInterfaces.ArtifactStats[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeUpdatesSinceLastVisit: includeUpdatesSinceLastVisit,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "visits",
                    "2d358c96-88cc-42ba-9b5d-a2cb26c64972",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VisitsInterfaces.ArtifactStats[]>;
                res = await this.rest.create<VisitsInterfaces.ArtifactStats[]>(url, stats, options);

                let ret = this.formatResponse(res.result,
                                              VisitsInterfaces.TypeInfo.ArtifactStats,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update or create a last visit date PUT /_apis/visits/artifactVisits
    * 
    * @param {VisitsInterfaces.ArtifactVisit} visit
    */
    public async updateLastVisit(
        visit: VisitsInterfaces.ArtifactVisit
        ): Promise<VisitsInterfaces.ArtifactVisit> {

        return new Promise<VisitsInterfaces.ArtifactVisit>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "visits",
                    "c4bc78ab-8d09-4b62-98f2-efb1affe50f8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VisitsInterfaces.ArtifactVisit>;
                res = await this.rest.replace<VisitsInterfaces.ArtifactVisit>(url, visit, options);

                let ret = this.formatResponse(res.result,
                                              VisitsInterfaces.TypeInfo.ArtifactVisit,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get last visit dates POST /_apis/visits/artifactVisitsBatch
    * 
    * @param {VisitsInterfaces.ArtifactVisit[]} visits
    */
    public async getVisits(
        visits: VisitsInterfaces.ArtifactVisit[]
        ): Promise<VisitsInterfaces.ArtifactVisit[]> {

        return new Promise<VisitsInterfaces.ArtifactVisit[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "visits",
                    "d1786677-7a19-445b-9a7a-25728f48d149",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VisitsInterfaces.ArtifactVisit[]>;
                res = await this.rest.create<VisitsInterfaces.ArtifactVisit[]>(url, visits, options);

                let ret = this.formatResponse(res.result,
                                              VisitsInterfaces.TypeInfo.ArtifactVisit,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
