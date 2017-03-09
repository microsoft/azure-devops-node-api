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



export interface Default {
    value: string;
}

/**
 * Issue information for feature enablement of a process template.
 */
export interface EnablementIssue {
    /**
     * Severity of the issue.
     */
    level: any;
    /**
     * Message for the issue.
     */
    message: string;
}

export interface ExtensionsViewModel {
    extensions: WebAccessExtensionModel[];
    hasWritePermission: boolean;
    privateExtensionsEnabled: boolean;
}

/**
 * Exposes information about a feature.
 */
export interface FeatureInfo {
    /**
     * Indicates the state of the feature. 1 = Not configured 2 = Partially configured 3 = Fully configured See ProjectFeatureState enum. We store this as an int since it is only used to hand off to the client.
     */
    featureState: number;
    /**
     * Name of the feature.
     */
    name: string;
}

/**
 * Exposes the state information for all features.
 */
export interface FeaturesState {
    /**
     * Information for each of the features.
     */
    featureList: FeatureInfo[];
    /**
     * Indicates if there are any features that are are enabled.
     */
    partiallyConfigured: boolean;
}

export interface Field {
    description: string;
    id: string;
    name: string;
    pickListId: string;
    rules: Rule;
    type: string;
    usages: FieldUsage[];
}

export interface FieldUsage {
    isBehaviorField: boolean;
    isInherited: boolean;
    isSystem: boolean;
    rules: UsageRule;
    workItemTypeId: string;
}

export interface IdentityDefault extends Default {
    vsid: string;
}

export interface LayoutGroup {
    id: string;
    label: string;
}

export interface ProcessDescriptorModel {
}

export interface ProcessFieldUsageInfo {
    fields: Field[];
    workItemTypes: WorkItemType[];
}

/**
 * Summary of the feature enablement information for the process template.
 */
export interface ProcessTemplateSummary {
    /**
     * Actions which will be taken to enable the features in the project.
     */
    actions: string[];
    /**
     * Id of the process template.
     */
    id: string;
    /**
     * Indicates whether this process template is recommended for upgrade
     */
    isRecommended: boolean;
    /**
     * Issues associated with the process template which could prevent it from being used to enable features in the project.
     */
    issues: EnablementIssue[];
    /**
     * Indicates if the process template can be used to enable the features in the project.
     */
    isValid: boolean;
    /**
     * Name of the process template.
     */
    name: string;
}

export interface Rule {
    allowGroups: boolean;
    default: Default;
    isReadOnly: boolean;
    isRequired: boolean;
}

export interface UsageRule extends Rule {
    helpText: string;
    isVisible: boolean;
}

export interface WebAccessExtensionModel {
    description: string;
    enabled: boolean;
    hostType: any;
    iconUrl: string;
    id: string;
    installDate: Date;
    isPrivate: boolean;
    moreInfo: string;
    name: string;
    vendor: string;
    version: string;
}

export interface WorkItemType {
    color: string;
    description: string;
    id: string;
    isCustomType: boolean;
    isDisabled: boolean;
    layout: any;
    layoutGroups: LayoutGroup[];
    name: string;
    parentWorkItemTypeId: string;
}

export var TypeInfo = {
    Default: {
        fields: <any>null
    },
    EnablementIssue: {
        fields: <any>null
    },
    ExtensionsViewModel: {
        fields: <any>null
    },
    FeatureInfo: {
        fields: <any>null
    },
    FeaturesState: {
        fields: <any>null
    },
    Field: {
        fields: <any>null
    },
    FieldUsage: {
        fields: <any>null
    },
    IdentityDefault: {
        fields: <any>null
    },
    LayoutGroup: {
        fields: <any>null
    },
    ProcessDescriptorModel: {
        fields: <any>null
    },
    ProcessFieldUsageInfo: {
        fields: <any>null
    },
    ProcessTemplateSummary: {
        fields: <any>null
    },
    Rule: {
        fields: <any>null
    },
    UsageRule: {
        fields: <any>null
    },
    WebAccessExtensionModel: {
        fields: <any>null
    },
    WorkItemType: {
        fields: <any>null
    },
};

TypeInfo.Default.fields = {
};

TypeInfo.EnablementIssue.fields = {
};

TypeInfo.ExtensionsViewModel.fields = {
    extensions: {
        isArray: true,
        typeInfo: TypeInfo.WebAccessExtensionModel
    },
};

TypeInfo.FeatureInfo.fields = {
};

TypeInfo.FeaturesState.fields = {
    featureList: {
        isArray: true,
        typeInfo: TypeInfo.FeatureInfo
    },
};

TypeInfo.Field.fields = {
    rules: {
        typeInfo: TypeInfo.Rule
    },
    usages: {
        isArray: true,
        typeInfo: TypeInfo.FieldUsage
    },
};

TypeInfo.FieldUsage.fields = {
    rules: {
        typeInfo: TypeInfo.UsageRule
    },
};

TypeInfo.IdentityDefault.fields = {
};

TypeInfo.LayoutGroup.fields = {
};

TypeInfo.ProcessDescriptorModel.fields = {
};

TypeInfo.ProcessFieldUsageInfo.fields = {
    fields: {
        isArray: true,
        typeInfo: TypeInfo.Field
    },
    workItemTypes: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemType
    },
};

TypeInfo.ProcessTemplateSummary.fields = {
    issues: {
        isArray: true,
        typeInfo: TypeInfo.EnablementIssue
    },
};

TypeInfo.Rule.fields = {
    default: {
        typeInfo: TypeInfo.Default
    },
};

TypeInfo.UsageRule.fields = {
    default: {
        typeInfo: TypeInfo.Default
    },
};

TypeInfo.WebAccessExtensionModel.fields = {
    installDate: {
        isDate: true,
    },
};

TypeInfo.WorkItemType.fields = {
    layoutGroups: {
        isArray: true,
        typeInfo: TypeInfo.LayoutGroup
    },
};
