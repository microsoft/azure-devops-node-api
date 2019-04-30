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



export interface ImageDetails {
    baseImageName?: string;
    baseImageUri?: string;
    createTime?: Date;
    distance?: number;
    hash?: number[];
    imageName?: string;
    imageSize?: string;
    imageType?: string;
    imageUri?: string;
    jobName?: string;
    layerInfo?: ImageLayer[];
    mediaType?: string;
    pipelineId?: string;
    pipelineName?: string;
    pipelineVersion?: string;
    runId?: number;
    tags?: string[];
}

export interface ImageLayer {
    arguments?: string;
    createdOn?: Date;
    directive?: string;
    size?: string;
}

export var TypeInfo = {
    ImageDetails: <any>{
    },
    ImageLayer: <any>{
    },
};

TypeInfo.ImageDetails.fields = {
    createTime: {
        isDate: true,
    },
    layerInfo: {
        isArray: true,
        typeInfo: TypeInfo.ImageLayer
    }
};

TypeInfo.ImageLayer.fields = {
    createdOn: {
        isDate: true,
    }
};
