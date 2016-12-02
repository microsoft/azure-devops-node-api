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


import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import NotificationInterfaces = require("./interfaces/NotificationInterfaces");
import VSS_Common_Contracts = require("./VSS/WebApi/Contracts");

export interface INotificationApi extends basem.ClientApiBase {
    performBatchNotificationOperations(operation: NotificationInterfaces.BatchNotificationOperation): Promise<void>;
    publishEvent(notificationEvent: VSS_Common_Contracts.VssNotificationEvent): Promise<VSS_Common_Contracts.VssNotificationEvent>;
    queryEventTypes(inputValuesQuery: NotificationInterfaces.FieldValuesQuery, eventType: string): Promise<NotificationInterfaces.NotificationEventField[]>;
    getEventType(eventType: string): Promise<NotificationInterfaces.NotificationEventType>;
    getEventTypes(publisherId?: string): Promise<NotificationInterfaces.NotificationEventType[]>;
    followArtifact(artifact: NotificationInterfaces.ArtifactSubscription): Promise<NotificationInterfaces.ArtifactSubscription>;
    getArtifactSubscription(artifactType: string, artifactId: string): Promise<NotificationInterfaces.ArtifactSubscription>;
    getArtifactSubscriptions(): Promise<NotificationInterfaces.ArtifactSubscription[]>;
    unfollowArtifact(subscriptionId: number): Promise<void>;
    statisticsQuery(statisticsQuery: NotificationInterfaces.NotificationStatisticsQuery): Promise<NotificationInterfaces.NotificationStatistic[]>;
    subscriptionQuery(subscriptionQuery: NotificationInterfaces.SubscriptionQuery): Promise<NotificationInterfaces.NotificationSubscription[]>;
    createSubscription(notificationSubscription: NotificationInterfaces.NotificationSubscription): Promise<NotificationInterfaces.NotificationSubscription>;
    deleteSubscription(subscriptionId: string): Promise<void>;
    getSubscription(subscriptionId: string): Promise<NotificationInterfaces.NotificationSubscription>;
    updateSubscription(subscriptionPatch: NotificationInterfaces.NotificationSubscription, subscriptionId: string): Promise<NotificationInterfaces.NotificationSubscription>;
    getSubscriptionTemplates(): Promise<NotificationInterfaces.NotificationSubscriptionTemplate[]>;
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
                    "3.1-preview.1",
                    "notification",
                    "8f3c6ab2-5bae-4537-b16e-f84e0955599e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, operation, null);
                let serializationData = { requestTypeMetadata: NotificationInterfaces.TypeInfo.BatchNotificationOperation, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {VSS_Common_Contracts.VssNotificationEvent} notificationEvent
    */
    public async publishEvent(
        notificationEvent: VSS_Common_Contracts.VssNotificationEvent
        ): Promise<VSS_Common_Contracts.VssNotificationEvent> {

        return new Promise<VSS_Common_Contracts.VssNotificationEvent>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "14c57b7a-c0e6-4555-9f51-e067188fdd8e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, notificationEvent, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "notification",
                    "b5bbdd21-c178-4398-b6db-0166d910028a",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, inputValuesQuery, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
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
                    "3.1-preview.1",
                    "notification",
                    "cc84fb5f-6247-4c7a-aeae-e5a3c3fddb21",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} publisherId
    */
    public async getEventTypes(
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
                    "3.1-preview.1",
                    "notification",
                    "cc84fb5f-6247-4c7a-aeae-e5a3c3fddb21",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {NotificationInterfaces.ArtifactSubscription} artifact
    */
    public async followArtifact(
        artifact: NotificationInterfaces.ArtifactSubscription
        ): Promise<NotificationInterfaces.ArtifactSubscription> {

        return new Promise<NotificationInterfaces.ArtifactSubscription>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "831e34f0-6d93-45a4-a222-c661f08dcea9",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, artifact, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} artifactType
    * @param {string} artifactId
    */
    public async getArtifactSubscription(
        artifactType: string,
        artifactId: string
        ): Promise<NotificationInterfaces.ArtifactSubscription> {

        return new Promise<NotificationInterfaces.ArtifactSubscription>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            let queryValues: any = {
                artifactType: artifactType,
                artifactId: artifactId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "831e34f0-6d93-45a4-a222-c661f08dcea9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    */
    public async getArtifactSubscriptions(
        ): Promise<NotificationInterfaces.ArtifactSubscription[]> {

        return new Promise<NotificationInterfaces.ArtifactSubscription[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "831e34f0-6d93-45a4-a222-c661f08dcea9",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} subscriptionId
    */
    public async unfollowArtifact(
        subscriptionId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            let queryValues: any = {
                subscriptionId: subscriptionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "831e34f0-6d93-45a4-a222-c661f08dcea9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {NotificationInterfaces.NotificationStatisticsQuery} statisticsQuery
    */
    public async statisticsQuery(
        statisticsQuery: NotificationInterfaces.NotificationStatisticsQuery
        ): Promise<NotificationInterfaces.NotificationStatistic[]> {

        return new Promise<NotificationInterfaces.NotificationStatistic[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "77878ce9-6391-49af-aa9d-768ac784461f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, statisticsQuery, null);
                let serializationData = { requestTypeMetadata: NotificationInterfaces.TypeInfo.NotificationStatisticsQuery, responseTypeMetadata: NotificationInterfaces.TypeInfo.NotificationStatistic, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {NotificationInterfaces.SubscriptionQuery} subscriptionQuery
    */
    public async subscriptionQuery(
        subscriptionQuery: NotificationInterfaces.SubscriptionQuery
        ): Promise<NotificationInterfaces.NotificationSubscription[]> {

        return new Promise<NotificationInterfaces.NotificationSubscription[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "6864db85-08c0-4006-8e8e-cc1bebe31675",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, subscriptionQuery, null);
                let serializationData = { requestTypeMetadata: NotificationInterfaces.TypeInfo.SubscriptionQuery, responseTypeMetadata: NotificationInterfaces.TypeInfo.NotificationSubscription, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {NotificationInterfaces.NotificationSubscription} notificationSubscription
    */
    public async createSubscription(
        notificationSubscription: NotificationInterfaces.NotificationSubscription
        ): Promise<NotificationInterfaces.NotificationSubscription> {

        return new Promise<NotificationInterfaces.NotificationSubscription>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, notificationSubscription, null);
                let serializationData = { requestTypeMetadata: NotificationInterfaces.TypeInfo.NotificationSubscription, responseTypeMetadata: NotificationInterfaces.TypeInfo.NotificationSubscription, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
        ): Promise<NotificationInterfaces.NotificationSubscription> {

        return new Promise<NotificationInterfaces.NotificationSubscription>(async (resolve, reject) => {
            
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: NotificationInterfaces.TypeInfo.NotificationSubscription, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {NotificationInterfaces.NotificationSubscription} subscriptionPatch
    * @param {string} subscriptionId
    */
    public async updateSubscription(
        subscriptionPatch: NotificationInterfaces.NotificationSubscription,
        subscriptionId: string
        ): Promise<NotificationInterfaces.NotificationSubscription> {

        return new Promise<NotificationInterfaces.NotificationSubscription>(async (resolve, reject) => {
            
            let routeValues: any = {
                subscriptionId: subscriptionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "notification",
                    "70f911d6-abac-488c-85b3-a206bf57e165",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, subscriptionPatch, null);
                let serializationData = { requestTypeMetadata: NotificationInterfaces.TypeInfo.NotificationSubscription, responseTypeMetadata: NotificationInterfaces.TypeInfo.NotificationSubscription, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "notification",
                    "fa5d24ba-7484-4f3d-888d-4ec6b1974082",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: NotificationInterfaces.TypeInfo.NotificationSubscriptionTemplate, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
