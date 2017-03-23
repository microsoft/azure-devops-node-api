/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 * 
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";

import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface Message {
    /**
     * Message content
     */
    content: string;
    /**
     * Message Id
     */
    id: number;
    /**
     * Message Type, currently only plain text is supported.
     */
    messageType: MessageType;
    /**
     * User who posted the message. May be null if message came from a system account
     */
    postedBy: VSSInterfaces.IdentityRef;
    /**
     * Id of the room in which message is posted
     */
    postedRoomId: number;
    /**
     * Message posted time
     */
    postedTime: Date;
}

export interface MessageData {
    content: string;
}

export enum MessageType {
    /**
     * A normal message that is sent by a user in plain text
     */
    Normal = 0,
    /**
     * A system message like User Entered and User Left Room
     */
    System = 1,
    /**
     * A notification from a TFS event
     */
    Notification = 2,
    /**
     * An error messsage.
     */
    Error = 3,
}

export interface Room {
    /**
     * Room creator user
     */
    createdBy: VSSInterfaces.IdentityRef;
    /**
     * Room creation date
     */
    createdDate: Date;
    /**
     * Description of the room
     */
    description: string;
    /**
     * Admin permissions for current user
     */
    hasAdminPermissions: boolean;
    /**
     * Read/Write permissions for current user
     */
    hasReadWritePermissions: boolean;
    /**
     * Id of the room
     */
    id: number;
    /**
     * Last activity in the room
     */
    lastActivity: Date;
    /**
     * Name of the room
     */
    name: string;
}

export interface RoomData {
    /**
     * Description of the room
     */
    description: string;
    /**
     * Name of the room
     */
    name: string;
}

export interface User {
    /**
     * A value indicating whether the user is online or not.
     */
    isOnline: boolean;
    /**
     * Time when user joined the room
     */
    joinedDate: Date;
    /**
     * Last activity time
     */
    lastActivity: Date;
    /**
     * Id of the Room
     */
    roomId: number;
    /**
     * The shallow reference for the user
     */
    user: VSSInterfaces.IdentityRef;
}

export interface UserData {
    userId: string;
}

export var TypeInfo = {
    Message: <any>{
    },
    MessageType: {
        enumValues: {
            "normal": 0,
            "system": 1,
            "notification": 2,
            "error": 3
        }
    },
    Room: <any>{
    },
    User: <any>{
    },
};

TypeInfo.Message.fields = {
    messageType: {
        enumType: TypeInfo.MessageType
    },
    postedTime: {
        isDate: true,
    },
};

TypeInfo.Room.fields = {
    createdDate: {
        isDate: true,
    },
    lastActivity: {
        isDate: true,
    },
};

TypeInfo.User.fields = {
    joinedDate: {
        isDate: true,
    },
    lastActivity: {
        isDate: true,
    },
};
