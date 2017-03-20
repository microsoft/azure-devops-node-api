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
import ServiceHooksInterfaces = require("./interfaces/ServiceHooksInterfaces");

export interface IServiceHooksApi extends basem.ClientApiBase {
    getConsumerAction(consumerId: string, consumerActionId: string): Promise<ServiceHooksInterfaces.ConsumerAction>;
    getConsumerActions(consumerId: string): Promise<ServiceHooksInterfaces.ConsumerAction[]>;
    getConsumer(consumerId: string): Promise<ServiceHooksInterfaces.Consumer>;
    getConsumers(): Promise<ServiceHooksInterfaces.Consumer[]>;
    createEvents(eventsRequestData: ServiceHooksInterfaces.PublishEventsRequestData): Promise<void>;
    queryInputValues(inputValuesQuery: ServiceHooksInterfaces.SubscriptionInputValuesQuery): Promise<ServiceHooksInterfaces.SubscriptionInputValuesQuery>;
    getNotification(subscriptionId: string, notificationId: number): Promise<ServiceHooksInterfaces.Notification>;
    getNotifications(subscriptionId: string, maxResults?: number, status?: ServiceHooksInterfaces.NotificationStatus, result?: ServiceHooksInterfaces.NotificationResult): Promise<ServiceHooksInterfaces.Notification[]>;
    queryNotifications(query: ServiceHooksInterfaces.NotificationsQuery): Promise<ServiceHooksInterfaces.NotificationsQuery>;
    createSubscription(subscription: ServiceHooksInterfaces.Subscription): Promise<ServiceHooksInterfaces.Subscription>;
    deleteSubscription(subscriptionId: string): Promise<void>;
    getSubscription(subscriptionId: string): Promise<ServiceHooksInterfaces.Subscription>;
    listSubscriptions(publisherId?: string, eventType?: string, consumerId?: string, consumerActionId?: string): Promise<ServiceHooksInterfaces.Subscription[]>;
    replaceSubscription(subscription: ServiceHooksInterfaces.Subscription): Promise<ServiceHooksInterfaces.Subscription>;
    querySubscriptions(query: ServiceHooksInterfaces.SubscriptionsQuery): Promise<ServiceHooksInterfaces.SubscriptionsQuery>;
    createTestNotification(testNotification: ServiceHooksInterfaces.Notification): Promise<ServiceHooksInterfaces.Notification>;
}

export class ServiceHooksApi extends basem.ClientApiBase implements IServiceHooksApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-ServiceHooks-api');
    }

    /**
    * @param {string} consumerId
    * @param {string} consumerActionId
    */
    public async getConsumerAction(
        consumerId: string,
        consumerActionId: string
        ): Promise<ServiceHooksInterfaces.ConsumerAction> {

        return new Promise<ServiceHooksInterfaces.ConsumerAction>(async (resolve, reject) => {
            let routeValues: any = {
                consumerId: consumerId,
                consumerActionId: consumerActionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "6a1f0102-a266-4ca8-bfe9-f126df266a37",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.ConsumerAction>;
                res = await this.rest.get<ServiceHooksInterfaces.ConsumerAction>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.ConsumerAction,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} consumerId
    */
    public async getConsumerActions(
        consumerId: string
        ): Promise<ServiceHooksInterfaces.ConsumerAction[]> {

        return new Promise<ServiceHooksInterfaces.ConsumerAction[]>(async (resolve, reject) => {
            let routeValues: any = {
                consumerId: consumerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "6a1f0102-a266-4ca8-bfe9-f126df266a37",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.ConsumerAction[]>;
                res = await this.rest.get<ServiceHooksInterfaces.ConsumerAction[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.ConsumerAction,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} consumerId
    */
    public async getConsumer(
        consumerId: string
        ): Promise<ServiceHooksInterfaces.Consumer> {

        return new Promise<ServiceHooksInterfaces.Consumer>(async (resolve, reject) => {
            let routeValues: any = {
                consumerId: consumerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "5f431332-1a18-43d9-ba45-109ec52c71c7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Consumer>;
                res = await this.rest.get<ServiceHooksInterfaces.Consumer>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Consumer,
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
    public async getConsumers(
        ): Promise<ServiceHooksInterfaces.Consumer[]> {

        return new Promise<ServiceHooksInterfaces.Consumer[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "5f431332-1a18-43d9-ba45-109ec52c71c7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Consumer[]>;
                res = await this.rest.get<ServiceHooksInterfaces.Consumer[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Consumer,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {ServiceHooksInterfaces.PublishEventsRequestData} eventsRequestData
    */
    public async createEvents(
        eventsRequestData: ServiceHooksInterfaces.PublishEventsRequestData
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "46f7c4d2-97a1-48e6-85f3-5083742752fd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, eventsRequestData, options);

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
    * @param {ServiceHooksInterfaces.SubscriptionInputValuesQuery} inputValuesQuery
    */
    public async queryInputValues(
        inputValuesQuery: ServiceHooksInterfaces.SubscriptionInputValuesQuery
        ): Promise<ServiceHooksInterfaces.SubscriptionInputValuesQuery> {

        return new Promise<ServiceHooksInterfaces.SubscriptionInputValuesQuery>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "95784519-7b74-4625-8888-49b294fe46b3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.SubscriptionInputValuesQuery>;
                res = await this.rest.create<ServiceHooksInterfaces.SubscriptionInputValuesQuery>(url, inputValuesQuery, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.SubscriptionInputValuesQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} subscriptionId
    * @param {number} notificationId
    */
    public async getNotification(
        subscriptionId: string,
        notificationId: number
        ): Promise<ServiceHooksInterfaces.Notification> {

        return new Promise<ServiceHooksInterfaces.Notification>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId,
                notificationId: notificationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "a8dbbb75-c3cf-4d7b-a61d-c95f5a97ca55",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Notification>;
                res = await this.rest.get<ServiceHooksInterfaces.Notification>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Notification,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} subscriptionId
    * @param {number} maxResults
    * @param {ServiceHooksInterfaces.NotificationStatus} status
    * @param {ServiceHooksInterfaces.NotificationResult} result
    */
    public async getNotifications(
        subscriptionId: string,
        maxResults?: number,
        status?: ServiceHooksInterfaces.NotificationStatus,
        result?: ServiceHooksInterfaces.NotificationResult
        ): Promise<ServiceHooksInterfaces.Notification[]> {

        return new Promise<ServiceHooksInterfaces.Notification[]>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            let queryValues: any = {
                maxResults: maxResults,
                status: status,
                result: result,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "a8dbbb75-c3cf-4d7b-a61d-c95f5a97ca55",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Notification[]>;
                res = await this.rest.get<ServiceHooksInterfaces.Notification[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Notification,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {ServiceHooksInterfaces.NotificationsQuery} query
    */
    public async queryNotifications(
        query: ServiceHooksInterfaces.NotificationsQuery
        ): Promise<ServiceHooksInterfaces.NotificationsQuery> {

        return new Promise<ServiceHooksInterfaces.NotificationsQuery>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "e5e555f6-94ad-475b-ac98-7f011b48dcd5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.NotificationsQuery>;
                res = await this.rest.create<ServiceHooksInterfaces.NotificationsQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.NotificationsQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {ServiceHooksInterfaces.Subscription} subscription
    */
    public async createSubscription(
        subscription: ServiceHooksInterfaces.Subscription
        ): Promise<ServiceHooksInterfaces.Subscription> {

        return new Promise<ServiceHooksInterfaces.Subscription>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "4431ee3f-13e3-4b41-b62e-47289e90d3dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Subscription>;
                res = await this.rest.create<ServiceHooksInterfaces.Subscription>(url, subscription, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Subscription,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
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
                    "hookssvc",
                    "4431ee3f-13e3-4b41-b62e-47289e90d3dc",
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
    * @param {string} subscriptionId
    */
    public async getSubscription(
        subscriptionId: string
        ): Promise<ServiceHooksInterfaces.Subscription> {

        return new Promise<ServiceHooksInterfaces.Subscription>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "4431ee3f-13e3-4b41-b62e-47289e90d3dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Subscription>;
                res = await this.rest.get<ServiceHooksInterfaces.Subscription>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Subscription,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} publisherId
    * @param {string} eventType
    * @param {string} consumerId
    * @param {string} consumerActionId
    */
    public async listSubscriptions(
        publisherId?: string,
        eventType?: string,
        consumerId?: string,
        consumerActionId?: string
        ): Promise<ServiceHooksInterfaces.Subscription[]> {

        return new Promise<ServiceHooksInterfaces.Subscription[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                publisherId: publisherId,
                eventType: eventType,
                consumerId: consumerId,
                consumerActionId: consumerActionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "4431ee3f-13e3-4b41-b62e-47289e90d3dc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Subscription[]>;
                res = await this.rest.get<ServiceHooksInterfaces.Subscription[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Subscription,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {ServiceHooksInterfaces.Subscription} subscription
    */
    public async replaceSubscription(
        subscription: ServiceHooksInterfaces.Subscription
        ): Promise<ServiceHooksInterfaces.Subscription> {

        return new Promise<ServiceHooksInterfaces.Subscription>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "4431ee3f-13e3-4b41-b62e-47289e90d3dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Subscription>;
                res = await this.rest.replace<ServiceHooksInterfaces.Subscription>(url, subscription, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Subscription,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {ServiceHooksInterfaces.SubscriptionsQuery} query
    */
    public async querySubscriptions(
        query: ServiceHooksInterfaces.SubscriptionsQuery
        ): Promise<ServiceHooksInterfaces.SubscriptionsQuery> {

        return new Promise<ServiceHooksInterfaces.SubscriptionsQuery>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "d4a77d7b-9be6-4060-b53d-1211f34de619",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.SubscriptionsQuery>;
                res = await this.rest.create<ServiceHooksInterfaces.SubscriptionsQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.SubscriptionsQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {ServiceHooksInterfaces.Notification} testNotification
    */
    public async createTestNotification(
        testNotification: ServiceHooksInterfaces.Notification
        ): Promise<ServiceHooksInterfaces.Notification> {

        return new Promise<ServiceHooksInterfaces.Notification>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "hookssvc",
                    "b906cedb-0a8e-4e3c-b1b1-2f3d680f035e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Notification>;
                res = await this.rest.create<ServiceHooksInterfaces.Notification>(url, testNotification, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Notification,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
