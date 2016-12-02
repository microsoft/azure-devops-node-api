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
import ChatInterfaces = require("./interfaces/ChatInterfaces");

export interface IChatApi extends basem.ClientApiBase {
    deleteMessage(roomId: number, messageId: number): Promise<void>;
    getAllChatRoomMessages(roomId: number): Promise<ChatInterfaces.Message[]>;
    getChatRoomMessageById(roomId: number, messageId: number): Promise<ChatInterfaces.Message>;
    sendMessageToRoom(messageUpdate: ChatInterfaces.MessageData, roomId: number): Promise<ChatInterfaces.Message>;
    updateChatMessage(messageUpdate: ChatInterfaces.MessageData, roomId: number, messageId: number): Promise<ChatInterfaces.Message>;
    createChatRoom(roomUpdate: ChatInterfaces.RoomData): Promise<ChatInterfaces.Room>;
    deleteChatRoom(roomId: number): Promise<void>;
    getAllRooms(): Promise<ChatInterfaces.RoomCollection>;
    getChatRoomById(roomId: number): Promise<ChatInterfaces.Room>;
    updateChatRoom(roomUpdate: ChatInterfaces.RoomData, roomId: number): Promise<ChatInterfaces.Room>;
    getAllChatRoomUsers(roomId: number): Promise<ChatInterfaces.UserCollection>;
    getChatRoomUserById(roomId: number, userId: string): Promise<ChatInterfaces.User>;
    joinRoom(userUpdate: ChatInterfaces.UserData, roomId: number, userId: string): Promise<void>;
    leaveRoom(roomId: number, userId: string): Promise<void>;
}

export class ChatApi extends basem.ClientApiBase implements IChatApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Chat-api');
    }

    /**
    * Delete a given chat message
    * 
    * @param {number} roomId - Id of the room
    * @param {number} messageId - Id of the message to delete
    */
    public async deleteMessage(
        roomId: number,
        messageId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId,
                messageId: messageId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "7d11c820-4bdc-4bca-8957-9d74e32cdd20",
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
    * Retrieve a listing of all chat messages in a given room
    * 
    * @param {number} roomId - Id of the room
    */
    public async getAllChatRoomMessages(
        roomId: number
        ): Promise<ChatInterfaces.Message[]> {

        return new Promise<ChatInterfaces.Message[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "7d11c820-4bdc-4bca-8957-9d74e32cdd20",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.Message, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Retrieve information on a single chat message
    * 
    * @param {number} roomId - Id of the room
    * @param {number} messageId - Id of the message to retrieve
    */
    public async getChatRoomMessageById(
        roomId: number,
        messageId: number
        ): Promise<ChatInterfaces.Message> {

        return new Promise<ChatInterfaces.Message>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId,
                messageId: messageId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "7d11c820-4bdc-4bca-8957-9d74e32cdd20",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.Message, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Post message to a room
    * 
    * @param {ChatInterfaces.MessageData} messageUpdate - Content of the message to post
    * @param {number} roomId - Id of the room
    */
    public async sendMessageToRoom(
        messageUpdate: ChatInterfaces.MessageData,
        roomId: number
        ): Promise<ChatInterfaces.Message> {

        return new Promise<ChatInterfaces.Message>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "7d11c820-4bdc-4bca-8957-9d74e32cdd20",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, messageUpdate, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.Message, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update a given chat message
    * 
    * @param {ChatInterfaces.MessageData} messageUpdate - New message content
    * @param {number} roomId - Id of the room
    * @param {number} messageId - Id of the message
    */
    public async updateChatMessage(
        messageUpdate: ChatInterfaces.MessageData,
        roomId: number,
        messageId: number
        ): Promise<ChatInterfaces.Message> {

        return new Promise<ChatInterfaces.Message>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId,
                messageId: messageId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "7d11c820-4bdc-4bca-8957-9d74e32cdd20",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, messageUpdate, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.Message, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Create a single chat room
    * 
    * @param {ChatInterfaces.RoomData} roomUpdate - Information to create the room
    */
    public async createChatRoom(
        roomUpdate: ChatInterfaces.RoomData
        ): Promise<ChatInterfaces.Room> {

        return new Promise<ChatInterfaces.Room>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "3d0e7ee0-a6c9-497e-9a2c-23b687e860e2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, roomUpdate, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.Room, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Delete a given chat room
    * 
    * @param {number} roomId - Id of the room
    */
    public async deleteChatRoom(
        roomId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "3d0e7ee0-a6c9-497e-9a2c-23b687e860e2",
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
    */
    public async getAllRooms(
        ): Promise<ChatInterfaces.RoomCollection> {

        return new Promise<ChatInterfaces.RoomCollection>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "3d0e7ee0-a6c9-497e-9a2c-23b687e860e2",
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
    * Retrieve information on a single chat room
    * 
    * @param {number} roomId - Id of the room to retrieve
    */
    public async getChatRoomById(
        roomId: number
        ): Promise<ChatInterfaces.Room> {

        return new Promise<ChatInterfaces.Room>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "3d0e7ee0-a6c9-497e-9a2c-23b687e860e2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.Room, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update information on a single chat room
    * 
    * @param {ChatInterfaces.RoomData} roomUpdate - Room information
    * @param {number} roomId - Id of the room to update
    */
    public async updateChatRoom(
        roomUpdate: ChatInterfaces.RoomData,
        roomId: number
        ): Promise<ChatInterfaces.Room> {

        return new Promise<ChatInterfaces.Room>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "3d0e7ee0-a6c9-497e-9a2c-23b687e860e2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, roomUpdate, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.Room, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Retrieve a listing of all chat users
    * 
    * @param {number} roomId - Id of the room
    */
    public async getAllChatRoomUsers(
        roomId: number
        ): Promise<ChatInterfaces.UserCollection> {

        return new Promise<ChatInterfaces.UserCollection>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "01408881-1a9a-4cc9-981d-9333e354e9d9",
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
    * Retrieve information on a single chat user
    * 
    * @param {number} roomId - Id of the room
    * @param {string} userId - TfId of the user
    */
    public async getChatRoomUserById(
        roomId: number,
        userId: string
        ): Promise<ChatInterfaces.User> {

        return new Promise<ChatInterfaces.User>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId,
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "01408881-1a9a-4cc9-981d-9333e354e9d9",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: ChatInterfaces.TypeInfo.User, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Joins a user to a given room
    * 
    * @param {ChatInterfaces.UserData} userUpdate - user model information
    * @param {number} roomId - Id of the room
    * @param {string} userId - TfId of the user
    */
    public async joinRoom(
        userUpdate: ChatInterfaces.UserData,
        roomId: number,
        userId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId,
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "01408881-1a9a-4cc9-981d-9333e354e9d9",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, userUpdate, null);
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
    * Leaves a user from a given room
    * 
    * @param {number} roomId - Id of the room
    * @param {string} userId - TfId of the user
    */
    public async leaveRoom(
        roomId: number,
        userId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                roomId: roomId,
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "chat",
                    "01408881-1a9a-4cc9-981d-9333e354e9d9",
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

}
