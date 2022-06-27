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
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import NotificationInterfaces = require("./interfaces/NotificationInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface INotificationApi extends basem.ClientApiBase {
    performBatchNotificationOperations(operation: NotificationInterfaces.BatchNotificationOperation): Promise<void>;
    listLogs(source: string, entryId?: string, startTime?: Date, endTime?: Date): Promise<NotificationInterfaces.INotificationDiagnosticLog[]>;
    getSubscriptionDiagnostics(subscriptionId: string): Promise<NotificationInterfaces.SubscriptionDiagnostics>;
    updateSubscriptionDiagnostics(updateParameters: NotificationInterfaces.UpdateSubscripitonDiagnosticsParameters, subscriptionId: string): Promise<NotificationInterfaces.SubscriptionDiagnostics>;
    publishEvent(notificationEvent: VSSInterfaces.VssNotificationEvent): Promise<VSSInterfaces.VssNotificationEvent>;
    transformEvent(transformRequest: NotificationInterfaces.EventTransformRequest): Promise<NotificationInterfaces.EventTransformResult>;
    queryEventTypes(inputValuesQuery: NotificationInterfaces.FieldValuesQuery, eventType: string): Promise<NotificationInterfaces.NotificationEventField[]>;
    getEventType(eventType: string): Promise<NotificationInterfaces.NotificationEventType>;
    listEventTypes(publisherId?: string): Promise<NotificationInterfaces.NotificationEventType[]>;
    getNotificationReasons(notificationId: number): Promise<NotificationInterfaces.NotificationReason>;
    listNotificationReasons(notificationIds?: number): Promise<NotificationInterfaces.NotificationReason[]>;
    getSettings(): Promise<NotificationInterfaces.NotificationAdminSettings>;
    updateSettings(updateParameters: NotificationInterfaces.NotificationAdminSettingsUpdateParameters): Promise<NotificationInterfaces.NotificationAdminSettings>;
    getSubscriber(subscriberId: string): Promise<NotificationInterfaces.NotificationSubscriber>;
    updateSubscriber(updateParameters: NotificationInterfaces.NotificationSubscriberUpdateParameters, subscriberId: string): Promise<NotificationInterfaces.NotificationSubscriber>;
    querySubscriptions(subscriptionQuery: NotificationInterfaces.SubscriptionQuery): Promise<NotificationInterfaces.NotificationSubscription[]>;
    createSubscription(createParameters: NotificationInterfaces.NotificationSubscriptionCreateParameters): Promise<NotificationInterfaces.NotificationSubscription>;
    deleteSubscription(subscriptionId: string): Promise<void>;
    getSubscription(subscriptionId: string, queryFlags?: NotificationInterfaces.SubscriptionQueryFlags): Promise<NotificationInterfaces.NotificationSubscription>;
    listSubscriptions(targetId?: string, ids?: string[], queryFlags?: NotificationInterfaces.SubscriptionQueryFlags): Promise<NotificationInterfaces.NotificationSubscription[]>;
    updateSubscription(updateParameters: NotificationInterfaces.NotificationSubscriptionUpdateParameters, subscriptionId: string): Promise<NotificationInterfaces.NotificationSubscription>;
    getSubscriptionTemplates(): Promise<NotificationInterfaces.NotificationSubscriptionTemplate[]>;
    publishTokenEvent(notificationEvent: VSSInterfaces.VssNotificationEvent): Promise<VSSInterfaces.VssNotificationEvent>;
    updateSubscriptionUserSettings(userSettings: NotificationInterfaces.SubscriptionUserSettings, subscriptionId: string, userId: string): Promise<NotificationInterfaces.SubscriptionUserSettings>;
}

export class NotificationApi extends basem.ClientApiBase implements INotificationApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Notification-api', options);
    }

    /**
     * @param {NotificationInterfaces.BatchNotificationOperation} operation
     */
    public async performBatchNotificationOperations(
        operation: NotificationInterfaces.BatchNotificationOperation
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "8f3c6ab2-5bae-4537-b16e-f84e0955599e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, operation, options);

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
     * Get a list of diagnostic logs for this service.
     * 
     * @param {string} source - ID specifying which type of logs to check diagnostics for.
     * @param {string} entryId - The ID of the specific log to query for.
     * @param {Date} startTime - Start time for the time range to query in.
     * @param {Date} endTime - End time for the time range to query in.
     */
    public async listLogs(
        source: string,
        entryId?: string,
        startTime?: Date,
        endTime?: Date
        ): Promise<NotificationInterfaces.INotificationDiagnosticLog[]> {

        return new Promise<NotificationInterfaces.INotificationDiagnosticLog[]>(async (resolve, reject) => {
            let routeValues: any = {
                source: source,
                entryId: entryId
            };

            let queryValues: any = {
                startTime: startTime,
                endTime: endTime,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "991842f3-eb16-4aea-ac81-81353ef2b75c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.INotificationDiagnosticLog[]>;
                res = await this.rest.get<NotificationInterfaces.INotificationDiagnosticLog[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.INotificationDiagnosticLog,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the diagnostics settings for a subscription.
     * 
     * @param {string} subscriptionId - The id of the notifications subscription.
     */
    public async getSubscriptionDiagnostics(
        subscriptionId: string
        ): Promise<NotificationInterfaces.SubscriptionDiagnostics> {

        return new Promise<NotificationInterfaces.SubscriptionDiagnostics>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "20f1929d-4be7-4c2e-a74e-d47640ff3418",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.SubscriptionDiagnostics>;
                res = await this.rest.get<NotificationInterfaces.SubscriptionDiagnostics>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.SubscriptionDiagnostics,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the diagnostics settings for a subscription.
     * 
     * @param {NotificationInterfaces.UpdateSubscripitonDiagnosticsParameters} updateParameters
     * @param {string} subscriptionId - The id of the notifications subscription.
     */
    public async updateSubscriptionDiagnostics(
        updateParameters: NotificationInterfaces.UpdateSubscripitonDiagnosticsParameters,
        subscriptionId: string
        ): Promise<NotificationInterfaces.SubscriptionDiagnostics> {

        return new Promise<NotificationInterfaces.SubscriptionDiagnostics>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "20f1929d-4be7-4c2e-a74e-d47640ff3418",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.SubscriptionDiagnostics>;
                res = await this.rest.replace<NotificationInterfaces.SubscriptionDiagnostics>(url, updateParameters, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.SubscriptionDiagnostics,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Publish an event. This request must be directed to the service "extmgmt".
     * 
     * @param {VSSInterfaces.VssNotificationEvent} notificationEvent
     */
    public async publishEvent(
        notificationEvent: VSSInterfaces.VssNotificationEvent
        ): Promise<VSSInterfaces.VssNotificationEvent> {

        return new Promise<VSSInterfaces.VssNotificationEvent>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "14c57b7a-c0e6-4555-9f51-e067188fdd8e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.VssNotificationEvent>;
                res = await this.rest.create<VSSInterfaces.VssNotificationEvent>(url, notificationEvent, options);

                let ret = this.formatResponse(res.result,
                                              VSSInterfaces.TypeInfo.VssNotificationEvent,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Tranform a notification event.
     * 
     * @param {NotificationInterfaces.EventTransformRequest} transformRequest - Object to be transformed.
     */
    public async transformEvent(
        transformRequest: NotificationInterfaces.EventTransformRequest
        ): Promise<NotificationInterfaces.EventTransformResult> {

        return new Promise<NotificationInterfaces.EventTransformResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "9463a800-1b44-450e-9083-f948ea174b45",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.EventTransformResult>;
                res = await this.rest.create<NotificationInterfaces.EventTransformResult>(url, transformRequest, options);

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
     * @param {NotificationInterfaces.FieldValuesQuery} inputValuesQuery
     * @param {string} eventType
     */
    public async queryEventTypes(
        inputValuesQuery: NotificationInterfaces.FieldValuesQuery,
        eventType: string
        ): Promise<NotificationInterfaces.NotificationEventField[]> {

        return new Promise<NotificationInterfaces.NotificationEventField[]>(async (resolve, reject) => {
            let routeValues: any = {
                eventType: eventType
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "b5bbdd21-c178-4398-b6db-0166d910028a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationEventField[]>;
                res = await this.rest.create<NotificationInterfaces.NotificationEventField[]>(url, inputValuesQuery, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationEventField,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a specific event type.
     * 
     * @param {string} eventType - The ID of the event type.
     */
    public async getEventType(
        eventType: string
        ): Promise<NotificationInterfaces.NotificationEventType> {

        return new Promise<NotificationInterfaces.NotificationEventType>(async (resolve, reject) => {
            let routeValues: any = {
                eventType: eventType
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "cc84fb5f-6247-4c7a-aeae-e5a3c3fddb21",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationEventType>;
                res = await this.rest.get<NotificationInterfaces.NotificationEventType>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationEventType,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * List available event types for this service. Optionally filter by only event types for the specified publisher.
     * 
     * @param {string} publisherId - Limit to event types for this publisher
     */
    public async listEventTypes(
        publisherId?: string
        ): Promise<NotificationInterfaces.NotificationEventType[]> {

        return new Promise<NotificationInterfaces.NotificationEventType[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                publisherId: publisherId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "cc84fb5f-6247-4c7a-aeae-e5a3c3fddb21",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationEventType[]>;
                res = await this.rest.get<NotificationInterfaces.NotificationEventType[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationEventType,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {number} notificationId
     */
    public async getNotificationReasons(
        notificationId: number
        ): Promise<NotificationInterfaces.NotificationReason> {

        return new Promise<NotificationInterfaces.NotificationReason>(async (resolve, reject) => {
            let routeValues: any = {
                notificationId: notificationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "19824fa9-1c76-40e6-9cce-cf0b9ca1cb60",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationReason>;
                res = await this.rest.get<NotificationInterfaces.NotificationReason>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationReason,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {number} notificationIds
     */
    public async listNotificationReasons(
        notificationIds?: number
        ): Promise<NotificationInterfaces.NotificationReason[]> {

        return new Promise<NotificationInterfaces.NotificationReason[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                notificationIds: notificationIds,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "19824fa9-1c76-40e6-9cce-cf0b9ca1cb60",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationReason[]>;
                res = await this.rest.get<NotificationInterfaces.NotificationReason[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationReason,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     */
    public async getSettings(
        ): Promise<NotificationInterfaces.NotificationAdminSettings> {

        return new Promise<NotificationInterfaces.NotificationAdminSettings>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "cbe076d8-2803-45ff-8d8d-44653686ea2a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationAdminSettings>;
                res = await this.rest.get<NotificationInterfaces.NotificationAdminSettings>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationAdminSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NotificationInterfaces.NotificationAdminSettingsUpdateParameters} updateParameters
     */
    public async updateSettings(
        updateParameters: NotificationInterfaces.NotificationAdminSettingsUpdateParameters
        ): Promise<NotificationInterfaces.NotificationAdminSettings> {

        return new Promise<NotificationInterfaces.NotificationAdminSettings>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "cbe076d8-2803-45ff-8d8d-44653686ea2a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationAdminSettings>;
                res = await this.rest.update<NotificationInterfaces.NotificationAdminSettings>(url, updateParameters, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationAdminSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get delivery preferences of a notifications subscriber.
     * 
     * @param {string} subscriberId - ID of the user or group.
     */
    public async getSubscriber(
        subscriberId: string
        ): Promise<NotificationInterfaces.NotificationSubscriber> {

        return new Promise<NotificationInterfaces.NotificationSubscriber>(async (resolve, reject) => {
            let routeValues: any = {
                subscriberId: subscriberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "4d5caff1-25ba-430b-b808-7a1f352cc197",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscriber>;
                res = await this.rest.get<NotificationInterfaces.NotificationSubscriber>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscriber,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update delivery preferences of a notifications subscriber.
     * 
     * @param {NotificationInterfaces.NotificationSubscriberUpdateParameters} updateParameters
     * @param {string} subscriberId - ID of the user or group.
     */
    public async updateSubscriber(
        updateParameters: NotificationInterfaces.NotificationSubscriberUpdateParameters,
        subscriberId: string
        ): Promise<NotificationInterfaces.NotificationSubscriber> {

        return new Promise<NotificationInterfaces.NotificationSubscriber>(async (resolve, reject) => {
            let routeValues: any = {
                subscriberId: subscriberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "4d5caff1-25ba-430b-b808-7a1f352cc197",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscriber>;
                res = await this.rest.update<NotificationInterfaces.NotificationSubscriber>(url, updateParameters, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscriber,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Query for subscriptions. A subscription is returned if it matches one or more of the specified conditions.
     * 
     * @param {NotificationInterfaces.SubscriptionQuery} subscriptionQuery
     */
    public async querySubscriptions(
        subscriptionQuery: NotificationInterfaces.SubscriptionQuery
        ): Promise<NotificationInterfaces.NotificationSubscription[]> {

        return new Promise<NotificationInterfaces.NotificationSubscription[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "6864db85-08c0-4006-8e8e-cc1bebe31675",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscription[]>;
                res = await this.rest.create<NotificationInterfaces.NotificationSubscription[]>(url, subscriptionQuery, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscription,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a new subscription.
     * 
     * @param {NotificationInterfaces.NotificationSubscriptionCreateParameters} createParameters
     */
    public async createSubscription(
        createParameters: NotificationInterfaces.NotificationSubscriptionCreateParameters
        ): Promise<NotificationInterfaces.NotificationSubscription> {

        return new Promise<NotificationInterfaces.NotificationSubscription>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscription>;
                res = await this.rest.create<NotificationInterfaces.NotificationSubscription>(url, createParameters, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscription,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a subscription.
     * 
     * @param {string} subscriptionId
     */
    public async deleteSubscription(
        subscriptionId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get a notification subscription by its ID.
     * 
     * @param {string} subscriptionId
     * @param {NotificationInterfaces.SubscriptionQueryFlags} queryFlags
     */
    public async getSubscription(
        subscriptionId: string,
        queryFlags?: NotificationInterfaces.SubscriptionQueryFlags
        ): Promise<NotificationInterfaces.NotificationSubscription> {

        return new Promise<NotificationInterfaces.NotificationSubscription>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            let queryValues: any = {
                queryFlags: queryFlags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscription>;
                res = await this.rest.get<NotificationInterfaces.NotificationSubscription>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscription,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of notification subscriptions, either by subscription IDs or by all subscriptions for a given user or group.
     * 
     * @param {string} targetId - User or Group ID
     * @param {string[]} ids - List of subscription IDs
     * @param {NotificationInterfaces.SubscriptionQueryFlags} queryFlags
     */
    public async listSubscriptions(
        targetId?: string,
        ids?: string[],
        queryFlags?: NotificationInterfaces.SubscriptionQueryFlags
        ): Promise<NotificationInterfaces.NotificationSubscription[]> {

        return new Promise<NotificationInterfaces.NotificationSubscription[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                targetId: targetId,
                ids: ids && ids.join(","),
                queryFlags: queryFlags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscription[]>;
                res = await this.rest.get<NotificationInterfaces.NotificationSubscription[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscription,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update an existing subscription. Depending on the type of subscription and permissions, the caller can update the description, filter settings, channel (delivery) settings and more.
     * 
     * @param {NotificationInterfaces.NotificationSubscriptionUpdateParameters} updateParameters
     * @param {string} subscriptionId
     */
    public async updateSubscription(
        updateParameters: NotificationInterfaces.NotificationSubscriptionUpdateParameters,
        subscriptionId: string
        ): Promise<NotificationInterfaces.NotificationSubscription> {

        return new Promise<NotificationInterfaces.NotificationSubscription>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscription>;
                res = await this.rest.update<NotificationInterfaces.NotificationSubscription>(url, updateParameters, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscription,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get available subscription templates.
     * 
     */
    public async getSubscriptionTemplates(
        ): Promise<NotificationInterfaces.NotificationSubscriptionTemplate[]> {

        return new Promise<NotificationInterfaces.NotificationSubscriptionTemplate[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "fa5d24ba-7484-4f3d-888d-4ec6b1974082",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationSubscriptionTemplate[]>;
                res = await this.rest.get<NotificationInterfaces.NotificationSubscriptionTemplate[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              NotificationInterfaces.TypeInfo.NotificationSubscriptionTemplate,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Publish an event. This request is only for the Token service since it's a deploy only service.
     * 
     * @param {VSSInterfaces.VssNotificationEvent} notificationEvent
     */
    public async publishTokenEvent(
        notificationEvent: VSSInterfaces.VssNotificationEvent
        ): Promise<VSSInterfaces.VssNotificationEvent> {

        return new Promise<VSSInterfaces.VssNotificationEvent>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "31dc86a2-67e8-4452-99a4-2b301ba28291",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.VssNotificationEvent>;
                res = await this.rest.create<VSSInterfaces.VssNotificationEvent>(url, notificationEvent, options);

                let ret = this.formatResponse(res.result,
                                              VSSInterfaces.TypeInfo.VssNotificationEvent,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the specified user's settings for the specified subscription. This API is typically used to opt in or out of a shared subscription. User settings can only be applied to shared subscriptions, like team subscriptions or default subscriptions.
     * 
     * @param {NotificationInterfaces.SubscriptionUserSettings} userSettings
     * @param {string} subscriptionId
     * @param {string} userId - ID of the user
     */
    public async updateSubscriptionUserSettings(
        userSettings: NotificationInterfaces.SubscriptionUserSettings,
        subscriptionId: string,
        userId: string
        ): Promise<NotificationInterfaces.SubscriptionUserSettings> {

        return new Promise<NotificationInterfaces.SubscriptionUserSettings>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId,
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "notification",
                    "ed5a3dff-aeb5-41b1-b4f7-89e66e58b62e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.SubscriptionUserSettings>;
                res = await this.rest.replace<NotificationInterfaces.SubscriptionUserSettings>(url, userSettings, options);

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
