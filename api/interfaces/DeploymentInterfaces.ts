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
    buildDefinitionId?: string;
    buildDefinitionName?: string;
    buildId?: number;
    buildVersion?: string;
    distance?: number;
    hash?: number[];
    imageName?: string;
    imageType?: string;
    imageUri?: string;
    layerInfo?: ImageLayer[];
    mediaType?: string;
    tags?: string[];
}

export interface ImageLayer {
    arguments?: string;
    directive?: string;
}
