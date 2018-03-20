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
import FormInputInterfaces = require("./interfaces/common/FormInputInterfaces");
import ServiceHooksInterfaces = require("./interfaces/ServiceHooksInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IServiceHooksApi extends basem.ClientApiBase {
    getConsumerAction(consumerId: string, consumerActionId: string, publisherId?: string): Promise<ServiceHooksInterfaces.ConsumerAction>;
    listConsumerActions(consumerId: string, publisherId?: string): Promise<ServiceHooksInterfaces.ConsumerAction[]>;
    getConsumer(consumerId: string, publisherId?: string): Promise<ServiceHooksInterfaces.Consumer>;
    listConsumers(publisherId?: string): Promise<ServiceHooksInterfaces.Consumer[]>;
    getSubscriptionDiagnostics(subscriptionId: string): Promise<VSSInterfaces.SubscriptionDiagnostics>;
    updateSubscriptionDiagnostics(updateParameters: VSSInterfaces.UpdateSubscripitonDiagnosticsParameters, subscriptionId: string): Promise<VSSInterfaces.SubscriptionDiagnostics>;
    getEventType(publisherId: string, eventTypeId: string): Promise<ServiceHooksInterfaces.EventTypeDescriptor>;
    listEventTypes(publisherId: string): Promise<ServiceHooksInterfaces.EventTypeDescriptor[]>;
    publishExternalEvent(publisherId: string, channelId?: string): Promise<ServiceHooksInterfaces.PublisherEvent[]>;
    getNotification(subscriptionId: string, notificationId: number): Promise<ServiceHooksInterfaces.Notification>;
    getNotifications(subscriptionId: string, maxResults?: number, status?: ServiceHooksInterfaces.NotificationStatus, result?: ServiceHooksInterfaces.NotificationResult): Promise<ServiceHooksInterfaces.Notification[]>;
    queryNotifications(query: ServiceHooksInterfaces.NotificationsQuery): Promise<ServiceHooksInterfaces.NotificationsQuery>;
    queryInputValues(inputValuesQuery: FormInputInterfaces.InputValuesQuery, publisherId: string): Promise<FormInputInterfaces.InputValuesQuery>;
    getPublisher(publisherId: string): Promise<ServiceHooksInterfaces.Publisher>;
    listPublishers(): Promise<ServiceHooksInterfaces.Publisher[]>;
    queryPublishers(query: ServiceHooksInterfaces.PublishersQuery): Promise<ServiceHooksInterfaces.PublishersQuery>;
    createSubscription(subscription: ServiceHooksInterfaces.Subscription): Promise<ServiceHooksInterfaces.Subscription>;
    deleteSubscription(subscriptionId: string): Promise<void>;
    getSubscription(subscriptionId: string): Promise<ServiceHooksInterfaces.Subscription>;
    listSubscriptions(publisherId?: string, eventType?: string, consumerId?: string, consumerActionId?: string): Promise<ServiceHooksInterfaces.Subscription[]>;
    replaceSubscription(subscription: ServiceHooksInterfaces.Subscription, subscriptionId?: string): Promise<ServiceHooksInterfaces.Subscription>;
    createSubscriptionsQuery(query: ServiceHooksInterfaces.SubscriptionsQuery): Promise<ServiceHooksInterfaces.SubscriptionsQuery>;
    createTestNotification(testNotification: ServiceHooksInterfaces.Notification, useRealData?: boolean): Promise<ServiceHooksInterfaces.Notification>;
}

export class ServiceHooksApi extends basem.ClientApiBase implements IServiceHooksApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-ServiceHooks-api', options);
    }

    /**
     * Get details about a specific consumer action.
     * 
     * @param {string} consumerId - ID for a consumer.
     * @param {string} consumerActionId - ID for a consumerActionId.
     * @param {string} publisherId
     */
    public async getConsumerAction(
        consumerId: string,
        consumerActionId: string,
        publisherId?: string
        ): Promise<ServiceHooksInterfaces.ConsumerAction> {

        return new Promise<ServiceHooksInterfaces.ConsumerAction>(async (resolve, reject) => {
            let routeValues: any = {
                consumerId: consumerId,
                consumerActionId: consumerActionId
            };

            let queryValues: any = {
                publisherId: publisherId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "c3428e90-7a69-4194-8ed8-0f153185ee0d",
                    routeValues,
                    queryValues);

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
     * Get a list of consumer actions for a specific consumer.
     * 
     * @param {string} consumerId - ID for a consumer.
     * @param {string} publisherId
     */
    public async listConsumerActions(
        consumerId: string,
        publisherId?: string
        ): Promise<ServiceHooksInterfaces.ConsumerAction[]> {

        return new Promise<ServiceHooksInterfaces.ConsumerAction[]>(async (resolve, reject) => {
            let routeValues: any = {
                consumerId: consumerId
            };

            let queryValues: any = {
                publisherId: publisherId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "c3428e90-7a69-4194-8ed8-0f153185ee0d",
                    routeValues,
                    queryValues);

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
     * Get a specific consumer service. Optionally filter out consumer actions that do not support any event types for the specified publisher.
     * 
     * @param {string} consumerId - ID for a consumer.
     * @param {string} publisherId
     */
    public async getConsumer(
        consumerId: string,
        publisherId?: string
        ): Promise<ServiceHooksInterfaces.Consumer> {

        return new Promise<ServiceHooksInterfaces.Consumer>(async (resolve, reject) => {
            let routeValues: any = {
                consumerId: consumerId
            };

            let queryValues: any = {
                publisherId: publisherId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "4301c514-5f34-4f5d-a145-f0ea7b5b7d19",
                    routeValues,
                    queryValues);

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
     * Get a list of available service hook consumer services. Optionally filter by consumers that support at least one event type from the specific publisher.
     * 
     * @param {string} publisherId
     */
    public async listConsumers(
        publisherId?: string
        ): Promise<ServiceHooksInterfaces.Consumer[]> {

        return new Promise<ServiceHooksInterfaces.Consumer[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                publisherId: publisherId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "4301c514-5f34-4f5d-a145-f0ea7b5b7d19",
                    routeValues,
                    queryValues);

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
     * @param {string} subscriptionId
     */
    public async getSubscriptionDiagnostics(
        subscriptionId: string
        ): Promise<VSSInterfaces.SubscriptionDiagnostics> {

        return new Promise<VSSInterfaces.SubscriptionDiagnostics>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "3b36bcb5-02ad-43c6-bbfa-6dfc6f8e9d68",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.SubscriptionDiagnostics>;
                res = await this.rest.get<VSSInterfaces.SubscriptionDiagnostics>(url, options);

                let ret = this.formatResponse(res.result,
                                              VSSInterfaces.TypeInfo.SubscriptionDiagnostics,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {VSSInterfaces.UpdateSubscripitonDiagnosticsParameters} updateParameters
     * @param {string} subscriptionId
     */
    public async updateSubscriptionDiagnostics(
        updateParameters: VSSInterfaces.UpdateSubscripitonDiagnosticsParameters,
        subscriptionId: string
        ): Promise<VSSInterfaces.SubscriptionDiagnostics> {

        return new Promise<VSSInterfaces.SubscriptionDiagnostics>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "3b36bcb5-02ad-43c6-bbfa-6dfc6f8e9d68",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.SubscriptionDiagnostics>;
                res = await this.rest.replace<VSSInterfaces.SubscriptionDiagnostics>(url, updateParameters, options);

                let ret = this.formatResponse(res.result,
                                              VSSInterfaces.TypeInfo.SubscriptionDiagnostics,
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
     * @param {string} publisherId - ID for a publisher.
     * @param {string} eventTypeId
     */
    public async getEventType(
        publisherId: string,
        eventTypeId: string
        ): Promise<ServiceHooksInterfaces.EventTypeDescriptor> {

        return new Promise<ServiceHooksInterfaces.EventTypeDescriptor>(async (resolve, reject) => {
            let routeValues: any = {
                publisherId: publisherId,
                eventTypeId: eventTypeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "db4777cd-8e08-4a84-8ba3-c974ea033718",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.EventTypeDescriptor>;
                res = await this.rest.get<ServiceHooksInterfaces.EventTypeDescriptor>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.EventTypeDescriptor,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the event types for a specific publisher.
     * 
     * @param {string} publisherId - ID for a publisher.
     */
    public async listEventTypes(
        publisherId: string
        ): Promise<ServiceHooksInterfaces.EventTypeDescriptor[]> {

        return new Promise<ServiceHooksInterfaces.EventTypeDescriptor[]>(async (resolve, reject) => {
            let routeValues: any = {
                publisherId: publisherId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "db4777cd-8e08-4a84-8ba3-c974ea033718",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.EventTypeDescriptor[]>;
                res = await this.rest.get<ServiceHooksInterfaces.EventTypeDescriptor[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.EventTypeDescriptor,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Publish an external event.
     * 
     * @param {string} publisherId
     * @param {string} channelId
     */
    public async publishExternalEvent(
        publisherId: string,
        channelId?: string
        ): Promise<ServiceHooksInterfaces.PublisherEvent[]> {

        return new Promise<ServiceHooksInterfaces.PublisherEvent[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                publisherId: publisherId,
                channelId: channelId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "e0e0a1c9-beeb-4fb7-a8c8-b18e3161a50e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.PublisherEvent[]>;
                res = await this.rest.create<ServiceHooksInterfaces.PublisherEvent[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.PublisherEvent,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a specific notification for a subscription.
     * 
     * @param {string} subscriptionId - ID for a subscription.
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
                    "5.0-preview.1",
                    "hooks",
                    "0c62d343-21b0-4732-997b-017fde84dc28",
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
     * Get a list of notifications for a specific subscription. A notification includes details about the event, the request to and the response from the consumer service.
     * 
     * @param {string} subscriptionId - ID for a subscription.
     * @param {number} maxResults - Maximum number of notifications to return. Default is **100**.
     * @param {ServiceHooksInterfaces.NotificationStatus} status - Get only notifications with this status.
     * @param {ServiceHooksInterfaces.NotificationResult} result - Get only notifications with this result type.
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
                    "5.0-preview.1",
                    "hooks",
                    "0c62d343-21b0-4732-997b-017fde84dc28",
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
     * Query for notifications. A notification includes details about the event, the request to and the response from the consumer service.
     * 
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
                    "5.0-preview.1",
                    "hooks",
                    "1a57562f-160a-4b5c-9185-905e95b39d36",
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
     * @param {FormInputInterfaces.InputValuesQuery} inputValuesQuery
     * @param {string} publisherId
     */
    public async queryInputValues(
        inputValuesQuery: FormInputInterfaces.InputValuesQuery,
        publisherId: string
        ): Promise<FormInputInterfaces.InputValuesQuery> {

        return new Promise<FormInputInterfaces.InputValuesQuery>(async (resolve, reject) => {
            let routeValues: any = {
                publisherId: publisherId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "d815d352-a566-4dc1-a3e3-fd245acf688c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FormInputInterfaces.InputValuesQuery>;
                res = await this.rest.create<FormInputInterfaces.InputValuesQuery>(url, inputValuesQuery, options);

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
     * Get a specific service hooks publisher.
     * 
     * @param {string} publisherId - ID for a publisher.
     */
    public async getPublisher(
        publisherId: string
        ): Promise<ServiceHooksInterfaces.Publisher> {

        return new Promise<ServiceHooksInterfaces.Publisher>(async (resolve, reject) => {
            let routeValues: any = {
                publisherId: publisherId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "1e83a210-5b53-43bc-90f0-d476a4e5d731",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Publisher>;
                res = await this.rest.get<ServiceHooksInterfaces.Publisher>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Publisher,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of publishers.
     * 
     */
    public async listPublishers(
        ): Promise<ServiceHooksInterfaces.Publisher[]> {

        return new Promise<ServiceHooksInterfaces.Publisher[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "1e83a210-5b53-43bc-90f0-d476a4e5d731",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.Publisher[]>;
                res = await this.rest.get<ServiceHooksInterfaces.Publisher[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.Publisher,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Query for service hook publishers.
     * 
     * @param {ServiceHooksInterfaces.PublishersQuery} query
     */
    public async queryPublishers(
        query: ServiceHooksInterfaces.PublishersQuery
        ): Promise<ServiceHooksInterfaces.PublishersQuery> {

        return new Promise<ServiceHooksInterfaces.PublishersQuery>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "99b44a8a-65a8-4670-8f3e-e7f7842cce64",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceHooksInterfaces.PublishersQuery>;
                res = await this.rest.create<ServiceHooksInterfaces.PublishersQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              ServiceHooksInterfaces.TypeInfo.PublishersQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a subscription.
     * 
     * @param {ServiceHooksInterfaces.Subscription} subscription - Subscription to be created.
     */
    public async createSubscription(
        subscription: ServiceHooksInterfaces.Subscription
        ): Promise<ServiceHooksInterfaces.Subscription> {

        return new Promise<ServiceHooksInterfaces.Subscription>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "fc50d02a-849f-41fb-8af1-0a5216103269",
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
     * Delete a specific service hooks subscription.
     * 
     * @param {string} subscriptionId - ID for a subscription.
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
                    "5.0-preview.1",
                    "hooks",
                    "fc50d02a-849f-41fb-8af1-0a5216103269",
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
     * Get a specific service hooks subscription.
     * 
     * @param {string} subscriptionId - ID for a subscription.
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
                    "5.0-preview.1",
                    "hooks",
                    "fc50d02a-849f-41fb-8af1-0a5216103269",
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
     * Get a list of subscriptions.
     * 
     * @param {string} publisherId - ID for a subscription.
     * @param {string} eventType - Maximum number of notifications to return. Default is 100.
     * @param {string} consumerId - ID for a consumer.
     * @param {string} consumerActionId - ID for a consumerActionId.
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
                    "5.0-preview.1",
                    "hooks",
                    "fc50d02a-849f-41fb-8af1-0a5216103269",
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
     * Update a subscription. <param name="subscriptionId">ID for a subscription that you wish to update.</param>
     * 
     * @param {ServiceHooksInterfaces.Subscription} subscription
     * @param {string} subscriptionId
     */
    public async replaceSubscription(
        subscription: ServiceHooksInterfaces.Subscription,
        subscriptionId?: string
        ): Promise<ServiceHooksInterfaces.Subscription> {

        return new Promise<ServiceHooksInterfaces.Subscription>(async (resolve, reject) => {
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "fc50d02a-849f-41fb-8af1-0a5216103269",
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
     * Query for service hook subscriptions.
     * 
     * @param {ServiceHooksInterfaces.SubscriptionsQuery} query
     */
    public async createSubscriptionsQuery(
        query: ServiceHooksInterfaces.SubscriptionsQuery
        ): Promise<ServiceHooksInterfaces.SubscriptionsQuery> {

        return new Promise<ServiceHooksInterfaces.SubscriptionsQuery>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "c7c3c1cf-9e05-4c0d-a425-a0f922c2c6ed",
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
     * Sends a test notification. This is useful for verifying the configuration of an updated or new service hooks subscription.
     * 
     * @param {ServiceHooksInterfaces.Notification} testNotification
     * @param {boolean} useRealData - Only allow testing with real data in existing subscriptions.
     */
    public async createTestNotification(
        testNotification: ServiceHooksInterfaces.Notification,
        useRealData?: boolean
        ): Promise<ServiceHooksInterfaces.Notification> {

        return new Promise<ServiceHooksInterfaces.Notification>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                useRealData: useRealData,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "hooks",
                    "1139462c-7e27-4524-a997-31b9b73551fe",
                    routeValues,
                    queryValues);

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
