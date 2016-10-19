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



/**
 * A feature that can be enabled or disabled
 */
export interface ContributedFeature {
    /**
     * If true, the feature is enabled unless overridden at some scope
     */
    defaultState: boolean;
    /**
     * Rules for setting the default value if not specified by any setting/scope. Evaluated in order until a rule returns an Enabled or Disabled state (not Undefined)
     */
    defaultValueRules: ContributedFeatureDefaultValueRule[];
    /**
     * The description of the feature
     */
    description: string;
    /**
     * The full contribution id of the feature
     */
    id: string;
    /**
     * The friendly name of the feature
     */
    name: string;
    /**
     * The scopes/levels at which settings can set the enabled/disabled state of this feature
     */
    scopes: ContributedFeatureSettingScope[];
}

/**
 * A rules for setting the default value of a feature if not specified by any setting/scope
 */
export interface ContributedFeatureDefaultValueRule {
    /**
     * Name of the IContributedFeatureValuePlugin to run
     */
    name: string;
    /**
     * Properties to feed to the IContributedFeatureValuePlugin
     */
    properties: { [key: string] : any; };
}

export enum ContributedFeatureEnabledValue {
    /**
     * The state of the feature is not set for the specified scope
     */
    Undefined = -1,
    /**
     * The feature is disabled at the specified scope
     */
    Disabled = 0,
    /**
     * The feature is enabled at the specified scope
     */
    Enabled = 1,
}

/**
 * The scope to which a feature setting applies
 */
export interface ContributedFeatureSettingScope {
    /**
     * The name of the settings scope to use when reading/writing the setting
     */
    settingScope: string;
    /**
     * Whether this is a user-scope or this is a host-wide (all users) setting
     */
    userScoped: boolean;
}

/**
 * A contributed feature/state pair
 */
export interface ContributedFeatureState {
    /**
     * The full contribution id of the feature
     */
    featureId: string;
    /**
     * The scope at which this state applies
     */
    scope: ContributedFeatureSettingScope;
    /**
     * The current state of this feature
     */
    state: ContributedFeatureEnabledValue;
}

export var TypeInfo = {
    ContributedFeature: {
        fields: <any>null
    },
    ContributedFeatureDefaultValueRule: {
        fields: <any>null
    },
    ContributedFeatureEnabledValue: {
        enumValues: {
            "undefined": -1,
            "disabled": 0,
            "enabled": 1,
        }
    },
    ContributedFeatureSettingScope: {
        fields: <any>null
    },
    ContributedFeatureState: {
        fields: <any>null
    },
};

TypeInfo.ContributedFeature.fields = {
    defaultValueRules: {
        isArray: true,
        typeInfo: TypeInfo.ContributedFeatureDefaultValueRule
    },
    scopes: {
        isArray: true,
        typeInfo: TypeInfo.ContributedFeatureSettingScope
    },
};

TypeInfo.ContributedFeatureDefaultValueRule.fields = {
};

TypeInfo.ContributedFeatureSettingScope.fields = {
};

TypeInfo.ContributedFeatureState.fields = {
    scope: {
        typeInfo: TypeInfo.ContributedFeatureSettingScope
    },
    state: {
        enumType: TypeInfo.ContributedFeatureEnabledValue
    },
};
