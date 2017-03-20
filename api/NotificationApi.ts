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
import NotificationInterfaces = require("./interfaces/NotificationInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface INotificationApi extends basem.ClientApiBase {
    performBatchNotificationOperations(operation: NotificationInterfaces.BatchNotificationOperation): Promise<void>;
    publishEvent(notificationEvent: VSSInterfaces.VssNotificationEvent): Promise<VSSInterfaces.VssNotificationEvent>;
    getEventType(eventType: string): Promise<NotificationInterfaces.NotificationEventType>;
    listEventTypes(publisherId?: string): Promise<NotificationInterfaces.NotificationEventType[]>;
    querySubscriptions(subscriptionQuery: NotificationInterfaces.SubscriptionQuery): Promise<NotificationInterfaces.NotificationSubscription[]>;
    createSubscription(createParameters: NotificationInterfaces.NotificationSubscriptionCreateParameters): Promise<NotificationInterfaces.NotificationSubscription>;
    deleteSubscription(subscriptionId: string): Promise<void>;
    getSubscription(subscriptionId: string, queryFlags?: NotificationInterfaces.SubscriptionQueryFlags): Promise<NotificationInterfaces.NotificationSubscription>;
    listSubscriptions(subscriber?: string, queryFlags?: NotificationInterfaces.SubscriptionQueryFlags): Promise<NotificationInterfaces.NotificationSubscription[]>;
    updateSubscription(updateParameters: NotificationInterfaces.NotificationSubscriptionUpdateParameters, subscriptionId: string): Promise<NotificationInterfaces.NotificationSubscription>;
    getSubscriptionTemplates(): Promise<NotificationInterfaces.NotificationSubscriptionTemplate[]>;
    updateSubscriptionUserSettings(userSettings: NotificationInterfaces.SubscriptionUserSettings, subscriptionId: string, userId: string): Promise<NotificationInterfaces.SubscriptionUserSettings>;
}

export class NotificationApi extends basem.ClientApiBase implements INotificationApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Notification-api');
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
                    "3.2-preview.1",
                    "notification",
                    "8f3c6ab2-5bae-4537-b16e-f84e0955599e",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * Publish an event.
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
                    "3.2-preview.1",
                    "notification",
                    "14c57b7a-c0e6-4555-9f51-e067188fdd8e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.VssNotificationEvent>;
                res = await this.rest.create<VSSInterfaces.VssNotificationEvent>(url, notificationEvent, options);

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
    * Get a specific event type.
    * 
    * @param {string} eventType
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
                    "3.2-preview.1",
                    "notification",
                    "cc84fb5f-6247-4c7a-aeae-e5a3c3fddb21",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationEventType>;
                res = await this.rest.get<NotificationInterfaces.NotificationEventType>(url, options);

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
                    "3.2-preview.1",
                    "notification",
                    "cc84fb5f-6247-4c7a-aeae-e5a3c3fddb21",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<NotificationInterfaces.NotificationEventType[]>;
                res = await this.rest.get<NotificationInterfaces.NotificationEventType[]>(url, options);

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
                    "3.2-preview.1",
                    "notification",
                    "6864db85-08c0-4006-8e8e-cc1bebe31675",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
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
                    "3.2-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
    * Get a list of subscriptions. If no subscriber is specified, subscriptions for the calling user are returned.
    * 
    * @param {string} subscriber
    * @param {NotificationInterfaces.SubscriptionQueryFlags} queryFlags
    */
    public async listSubscriptions(
        subscriber?: string,
        queryFlags?: NotificationInterfaces.SubscriptionQueryFlags
        ): Promise<NotificationInterfaces.NotificationSubscription[]> {

        return new Promise<NotificationInterfaces.NotificationSubscription[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                subscriber: subscriber,
                queryFlags: queryFlags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl;
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
    */
    public async getSubscriptionTemplates(
        ): Promise<NotificationInterfaces.NotificationSubscriptionTemplate[]> {

        return new Promise<NotificationInterfaces.NotificationSubscriptionTemplate[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "notification",
                    "fa5d24ba-7484-4f3d-888d-4ec6b1974082",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * Update the specified users' settings for the specified subscription. User settings can only be applied to shared subscriptions, like team subscriptions or default subscriptions. This API is typically used to opt in or out of a shared subscription.
    * 
    * @param {NotificationInterfaces.SubscriptionUserSettings} userSettings
    * @param {string} subscriptionId
    * @param {string} userId - ID of the user or "me" to indicate the calling user
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
                    "3.2-preview.1",
                    "notification",
                    "ed5a3dff-aeb5-41b1-b4f7-89e66e58b62e",
                    routeValues);

                let url: string = verData.requestUrl;
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
