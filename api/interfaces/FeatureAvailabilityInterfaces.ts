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



export interface FeatureFlag {
    description?: string;
    effectiveState?: string;
    explicitState?: string;
    name?: string;
    uri?: string;
}

/**
 * This is passed to the FeatureFlagController to edit the status of a feature flag
 */
export interface FeatureFlagPatch {
    state?: string;
}
