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
import DashboardInterfaces = require("./interfaces/DashboardInterfaces");
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");

export interface IDashboardApi extends basem.ClientApiBase {
    createDashboard(dashboard: DashboardInterfaces.Dashboard, teamContext: TfsCoreInterfaces.TeamContext): Promise<DashboardInterfaces.Dashboard>;
    deleteDashboard(teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string): Promise<void>;
    getDashboard(teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string): Promise<DashboardInterfaces.Dashboard>;
    getDashboards(teamContext: TfsCoreInterfaces.TeamContext): Promise<DashboardInterfaces.DashboardGroup>;
    replaceDashboard(dashboard: DashboardInterfaces.Dashboard, teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string): Promise<DashboardInterfaces.Dashboard>;
    replaceDashboards(group: DashboardInterfaces.DashboardGroup, teamContext: TfsCoreInterfaces.TeamContext): Promise<DashboardInterfaces.DashboardGroup>;
    createWidget(widget: DashboardInterfaces.Widget, teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string): Promise<DashboardInterfaces.Widget>;
    deleteWidget(teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string, widgetId: string): Promise<DashboardInterfaces.Dashboard>;
    getWidget(teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string, widgetId: string): Promise<DashboardInterfaces.Widget>;
    replaceWidget(widget: DashboardInterfaces.Widget, teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string, widgetId: string): Promise<DashboardInterfaces.Widget>;
    updateWidget(widget: DashboardInterfaces.Widget, teamContext: TfsCoreInterfaces.TeamContext, dashboardId: string, widgetId: string): Promise<DashboardInterfaces.Widget>;
    getWidgetMetadata(contributionId: string): Promise<DashboardInterfaces.WidgetMetadataResponse>;
    getWidgetTypes(scope: DashboardInterfaces.WidgetScope): Promise<DashboardInterfaces.WidgetTypesResponse>;
}

export class DashboardApi extends basem.ClientApiBase implements IDashboardApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Dashboard-api', options);
    }

    /**
     * Create the supplied dashboard.
     * 
     * @param {DashboardInterfaces.Dashboard} dashboard - The initial state of the dashboard
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async createDashboard(
        dashboard: DashboardInterfaces.Dashboard,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<DashboardInterfaces.Dashboard> {

        return new Promise<DashboardInterfaces.Dashboard>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "454b3e51-2e6e-48d4-ad81-978154089351",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Dashboard>;
                res = await this.rest.create<DashboardInterfaces.Dashboard>(url, dashboard, options);

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
     * Delete a dashboard given its ID. This also deletes the widgets associated with this dashboard.
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard to delete.
     */
    public async deleteDashboard(
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "454b3e51-2e6e-48d4-ad81-978154089351",
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
     * Get a dashboard by its ID.
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId
     */
    public async getDashboard(
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string
        ): Promise<DashboardInterfaces.Dashboard> {

        return new Promise<DashboardInterfaces.Dashboard>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "454b3e51-2e6e-48d4-ad81-978154089351",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Dashboard>;
                res = await this.rest.get<DashboardInterfaces.Dashboard>(url, options);

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
     * Get a list of dashboards.
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async getDashboards(
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<DashboardInterfaces.DashboardGroup> {

        return new Promise<DashboardInterfaces.DashboardGroup>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "454b3e51-2e6e-48d4-ad81-978154089351",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.DashboardGroup>;
                res = await this.rest.get<DashboardInterfaces.DashboardGroup>(url, options);

                let ret = this.formatResponse(res.result,
                                              DashboardInterfaces.TypeInfo.DashboardGroup,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Replace configuration for the specified dashboard.
     * 
     * @param {DashboardInterfaces.Dashboard} dashboard - The Configuration of the dashboard to replace.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard to replace.
     */
    public async replaceDashboard(
        dashboard: DashboardInterfaces.Dashboard,
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string
        ): Promise<DashboardInterfaces.Dashboard> {

        return new Promise<DashboardInterfaces.Dashboard>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "454b3e51-2e6e-48d4-ad81-978154089351",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Dashboard>;
                res = await this.rest.replace<DashboardInterfaces.Dashboard>(url, dashboard, options);

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
     * Update the name and position of dashboards in the supplied group, and remove omitted dashboards. Does not modify dashboard content.
     * 
     * @param {DashboardInterfaces.DashboardGroup} group
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async replaceDashboards(
        group: DashboardInterfaces.DashboardGroup,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<DashboardInterfaces.DashboardGroup> {

        return new Promise<DashboardInterfaces.DashboardGroup>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "454b3e51-2e6e-48d4-ad81-978154089351",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.DashboardGroup>;
                res = await this.rest.replace<DashboardInterfaces.DashboardGroup>(url, group, options);

                let ret = this.formatResponse(res.result,
                                              DashboardInterfaces.TypeInfo.DashboardGroup,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a widget on the specified dashboard.
     * 
     * @param {DashboardInterfaces.Widget} widget - State of the widget to add
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of dashboard the widget will be added to.
     */
    public async createWidget(
        widget: DashboardInterfaces.Widget,
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string
        ): Promise<DashboardInterfaces.Widget> {

        return new Promise<DashboardInterfaces.Widget>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "bdcff53a-8355-4172-a00a-40497ea23afc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Widget>;
                res = await this.rest.create<DashboardInterfaces.Widget>(url, widget, options);

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
     * Delete the specified widget.
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to update.
     */
    public async deleteWidget(
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string,
        widgetId: string
        ): Promise<DashboardInterfaces.Dashboard> {

        return new Promise<DashboardInterfaces.Dashboard>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId,
                widgetId: widgetId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "bdcff53a-8355-4172-a00a-40497ea23afc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Dashboard>;
                res = await this.rest.del<DashboardInterfaces.Dashboard>(url, options);

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
     * Get the current state of the specified widget.
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to read.
     */
    public async getWidget(
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string,
        widgetId: string
        ): Promise<DashboardInterfaces.Widget> {

        return new Promise<DashboardInterfaces.Widget>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId,
                widgetId: widgetId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "bdcff53a-8355-4172-a00a-40497ea23afc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Widget>;
                res = await this.rest.get<DashboardInterfaces.Widget>(url, options);

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
     * Override the  state of the specified widget.
     * 
     * @param {DashboardInterfaces.Widget} widget - State to be written for the widget.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to update.
     */
    public async replaceWidget(
        widget: DashboardInterfaces.Widget,
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string,
        widgetId: string
        ): Promise<DashboardInterfaces.Widget> {

        return new Promise<DashboardInterfaces.Widget>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId,
                widgetId: widgetId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "bdcff53a-8355-4172-a00a-40497ea23afc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Widget>;
                res = await this.rest.replace<DashboardInterfaces.Widget>(url, widget, options);

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
     * Perform a partial update of the specified widget.
     * 
     * @param {DashboardInterfaces.Widget} widget - Description of the widget changes to apply. All non-null fields will be replaced.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} dashboardId - ID of the dashboard containing the widget.
     * @param {string} widgetId - ID of the widget to update.
     */
    public async updateWidget(
        widget: DashboardInterfaces.Widget,
        teamContext: TfsCoreInterfaces.TeamContext,
        dashboardId: string,
        widgetId: string
        ): Promise<DashboardInterfaces.Widget> {

        return new Promise<DashboardInterfaces.Widget>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                dashboardId: dashboardId,
                widgetId: widgetId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "Dashboard",
                    "bdcff53a-8355-4172-a00a-40497ea23afc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.Widget>;
                res = await this.rest.update<DashboardInterfaces.Widget>(url, widget, options);

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
     * Get the widget metadata satisfying the specified contribution ID.
     * 
     * @param {string} contributionId - The ID of Contribution for the Widget
     */
    public async getWidgetMetadata(
        contributionId: string
        ): Promise<DashboardInterfaces.WidgetMetadataResponse> {

        return new Promise<DashboardInterfaces.WidgetMetadataResponse>(async (resolve, reject) => {
            let routeValues: any = {
                contributionId: contributionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "Dashboard",
                    "6b3628d3-e96f-4fc7-b176-50240b03b515",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.WidgetMetadataResponse>;
                res = await this.rest.get<DashboardInterfaces.WidgetMetadataResponse>(url, options);

                let ret = this.formatResponse(res.result,
                                              DashboardInterfaces.TypeInfo.WidgetMetadataResponse,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all available widget metadata in alphabetical order.
     * 
     * @param {DashboardInterfaces.WidgetScope} scope
     */
    public async getWidgetTypes(
        scope: DashboardInterfaces.WidgetScope
        ): Promise<DashboardInterfaces.WidgetTypesResponse> {

        return new Promise<DashboardInterfaces.WidgetTypesResponse>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                '$scope': scope,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "Dashboard",
                    "6b3628d3-e96f-4fc7-b176-50240b03b515",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<DashboardInterfaces.WidgetTypesResponse>;
                res = await this.rest.get<DashboardInterfaces.WidgetTypesResponse>(url, options);

                let ret = this.formatResponse(res.result,
                                              DashboardInterfaces.TypeInfo.WidgetTypesResponse,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
