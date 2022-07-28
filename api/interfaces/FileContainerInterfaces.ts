﻿/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";



/**
 * Compression type for file stored in Blobstore
 */
export enum BlobCompressionType {
    None = 0,
    GZip = 1,
}

/**
 * Represents an reference to a file in Blobstore
 */
export interface ContainerItemBlobReference {
    artifactHash?: string;
    artifactId?: number;
    compressionType?: BlobCompressionType;
    scopeIdentifier?: string;
    sessionId?: string;
}

/**
 * Status of a container item.
 */
export enum ContainerItemStatus {
    /**
     * Item is created.
     */
    Created = 1,
    /**
     * Item is a file pending for upload.
     */
    PendingUpload = 2,
}

/**
 * Type of a container item.
 */
export enum ContainerItemType {
    /**
     * Any item type.
     */
    Any = 0,
    /**
     * Item is a folder which can have child items.
     */
    Folder = 1,
    /**
     * Item is a file which is stored in the file service.
     */
    File = 2,
}

/**
 * Options a container can have.
 */
export enum ContainerOptions {
    /**
     * No option.
     */
    None = 0,
}

/**
 * Represents a container that encapsulates a hierarchical file system.
 */
export interface FileContainer {
    /**
     * Uri of the artifact associated with the container.
     */
    artifactUri: string;
    /**
     * Download Url for the content of this item.
     */
    contentLocation?: string;
    /**
     * Owner.
     */
    createdBy?: string;
    /**
     * Creation date.
     */
    dateCreated?: Date;
    /**
     * Description.
     */
    description?: string;
    /**
     * Id.
     */
    id: number;
    /**
     * Location of the item resource.
     */
    itemLocation?: string;
    /**
     * ItemStore Locator for this container.
     */
    locatorPath?: string;
    /**
     * Name.
     */
    name?: string;
    /**
     * Options the container can have.
     */
    options?: ContainerOptions;
    /**
     * Project Id.
     */
    scopeIdentifier?: string;
    /**
     * Security token of the artifact associated with the container.
     */
    securityToken?: string;
    /**
     * Identifier of the optional encryption key.
     */
    signingKeyId?: string;
    /**
     * Total size of the files in bytes.
     */
    size?: number;
}

/**
 * Represents an item in a container.
 */
export interface FileContainerItem {
    /**
     * Id for Blobstore reference
     */
    artifactId?: number;
    blobMetadata?: ContainerItemBlobReference;
    /**
     * Container Id.
     */
    containerId: number;
    contentId?: number[];
    /**
     * Download Url for the content of this item.
     */
    contentLocation?: string;
    /**
     * Creator.
     */
    createdBy?: string;
    /**
     * Creation date.
     */
    dateCreated?: Date;
    /**
     * Last modified date.
     */
    dateLastModified?: Date;
    /**
     * Encoding of the file. Zero if not a file.
     */
    fileEncoding?: number;
    /**
     * Hash value of the file. Null if not a file.
     */
    fileHash?: number[];
    /**
     * Id of the file content.
     */
    fileId?: number;
    /**
     * Length of the file. Zero if not of a file.
     */
    fileLength?: number;
    /**
     * Type of the file. Zero if not a file.
     */
    fileType?: number;
    /**
     * Location of the item resource.
     */
    itemLocation?: string;
    /**
     * Type of the item: Folder, File or String.
     */
    itemType: ContainerItemType;
    /**
     * Modifier.
     */
    lastModifiedBy?: string;
    /**
     * Unique path that identifies the item.
     */
    path: string;
    /**
     * Project Id.
     */
    scopeIdentifier?: string;
    /**
     * Status of the item: Created or Pending Upload.
     */
    status: ContainerItemStatus;
    ticket?: string;
}

export var TypeInfo = {
    BlobCompressionType: {
        enumValues: {
            "none": 0,
            "gZip": 1
        }
    },
    ContainerItemBlobReference: <any>{
    },
    ContainerItemStatus: {
        enumValues: {
            "created": 1,
            "pendingUpload": 2
        }
    },
    ContainerItemType: {
        enumValues: {
            "any": 0,
            "folder": 1,
            "file": 2
        }
    },
    ContainerOptions: {
        enumValues: {
            "none": 0
        }
    },
    FileContainer: <any>{
    },
    FileContainerItem: <any>{
    },
};

TypeInfo.ContainerItemBlobReference.fields = {
    compressionType: {
        enumType: TypeInfo.BlobCompressionType
    }
};

TypeInfo.FileContainer.fields = {
    dateCreated: {
        isDate: true,
    },
    options: {
        enumType: TypeInfo.ContainerOptions
    }
};

TypeInfo.FileContainerItem.fields = {
    blobMetadata: {
        typeInfo: TypeInfo.ContainerItemBlobReference
    },
    dateCreated: {
        isDate: true,
    },
    dateLastModified: {
        isDate: true,
    },
    itemType: {
        enumType: TypeInfo.ContainerItemType
    },
    status: {
        enumType: TypeInfo.ContainerItemStatus
    }
};
