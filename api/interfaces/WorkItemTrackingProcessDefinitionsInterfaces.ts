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



export interface BehaviorCreateModel {
    /**
     * Color
     */
    color: string;
    /**
     * Parent behavior id
     */
    inherits: string;
    /**
     * Name of the behavior
     */
    name: string;
}

export interface BehaviorModel {
    /**
     * Is the behavior abstract (i.e. can not be associated with any work item type)
     */
    abstract: boolean;
    /**
     * Color
     */
    color: string;
    /**
     * Description
     */
    description: string;
    /**
     * Behavior Id
     */
    id: string;
    /**
     * Parent behavior reference
     */
    inherits: WorkItemBehaviorReference;
    /**
     * Behavior Name
     */
    name: string;
    /**
     * Is the behavior overrides a behavior from system process
     */
    overridden: boolean;
    /**
     * Rank
     */
    rank: number;
    url: string;
}

export interface BehaviorReplaceModel {
    /**
     * Color
     */
    color: string;
    /**
     * Behavior Name
     */
    name: string;
}

/**
 * Represent a control in the form.
 */
export interface Control {
    /**
     * Contribution for the control.
     */
    contribution: WitContribution;
    /**
     * Type of the control.
     */
    controlType: string;
    /**
     * Height of the control, for html controls.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution or not.
     */
    isContribution: boolean;
    /**
     * Label for the field
     */
    label: string;
    /**
     * Inner text of the control.
     */
    metadata: string;
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the control is readonly.
     */
    readOnly: boolean;
    /**
     * A value indicating if the control should be hidden or not.
     */
    visible: boolean;
    /**
     * Watermark text for the textbox.
     */
    watermark: string;
}

/**
 * Represents the extensions part of the layout
 */
export interface Extension {
    id: string;
}

export interface FieldModel {
    description: string;
    id: string;
    name: string;
    pickList: PickListMetadataModel;
    type: FieldType;
    url: string;
}

export interface FieldRuleModel {
    actions: RuleActionModel[];
    conditions: RuleConditionModel[];
    description: string;
    id: string;
    isDisabled: boolean;
    rule: string;
    value: string;
}

export enum FieldType {
    String = 1,
    Integer = 2,
    DateTime = 3,
    PlainText = 5,
    Html = 7,
    TreePath = 8,
    History = 9,
    Double = 10,
    Guid = 11,
    Boolean = 12,
    Identity = 13,
    PicklistInteger = 14,
    PicklistString = 15,
    PicklistDouble = 16,
}

export interface FieldUpdate {
    description: string;
    id: string;
}

export interface FormLayout {
    /**
     * Gets and sets extensions list
     */
    extensions: Extension[];
    /**
     * Top level tabs of the layout.
     */
    pages: Page[];
    /**
     * Headers controls of the layout.
     */
    systemControls: Control[];
}

export enum GetWorkItemTypeExpand {
    None = 0,
    States = 1,
    Behaviors = 2,
    Layout = 4,
}

/**
 * Represent a group in the form that holds controls in it.
 */
export interface Group {
    /**
     * Contribution for the group.
     */
    contribution: WitContribution;
    /**
     * Controls to be put in the group.
     */
    controls: Control[];
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * Label for the group.
     */
    label: string;
    /**
     * Order in which the group should appear in the section.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * A value indicating if the group should be hidden or not.
     */
    visible: boolean;
}

export interface HideStateModel {
    hidden: boolean;
}

export interface Page {
    /**
     * Contribution for the page.
     */
    contribution: WitContribution;
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution: boolean;
    /**
     * The label for the page.
     */
    label: string;
    /**
     * A value indicating whether any user operations are permitted on this page and the contents of this page
     */
    locked: boolean;
    /**
     * Order in which the page should appear in the layout.
     */
    order: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
    /**
     * The icon for the page.
     */
    pageType: PageType;
    /**
     * The sections of the page.
     */
    sections: Section[];
    /**
     * A value indicating if the page should be hidden or not.
     */
    visible: boolean;
}

export enum PageType {
    Custom = 1,
    History = 2,
    Links = 3,
    Attachments = 4,
}

export interface PickListItemModel {
    id: string;
    value: string;
}

export interface PickListMetadataModel {
    id: string;
    isSuggested: boolean;
    name: string;
    type: string;
    url: string;
}

export interface PickListModel extends PickListMetadataModel {
    items: PickListItemModel[];
}

export interface RuleActionModel {
    action: string;
    value: string;
}

export interface RuleConditionModel {
    condition: string;
    field: string;
    value: string;
}

export interface Section {
    groups: Group[];
    /**
     * The id for the layout node.
     */
    id: string;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden: boolean;
}

export interface WitContribution {
    /**
     * The id for the contribution.
     */
    contributionId: string;
    /**
     * The height for the contribution.
     */
    height: number;
    /**
     * A dictionary holding key value pairs for contribution inputs.
     */
    inputs: { [key: string] : any; };
    /**
     * A value indicating if the contribution should be show on deleted workItem.
     */
    showOnDeletedWorkItem: boolean;
}

export interface WorkItemBehaviorReference {
    id: string;
    url: string;
}

export interface WorkItemStateInputModel {
    color: string;
    name: string;
    order: number;
    stateCategory: string;
}

export interface WorkItemStateResultModel {
    color: string;
    hidden: boolean;
    id: string;
    name: string;
    order: number;
    stateCategory: string;
    url: string;
}

export interface WorkItemTypeBehavior {
    behavior: WorkItemBehaviorReference;
    isDefault: boolean;
    url: string;
}

export enum WorkItemTypeClass {
    System = 0,
    Derived = 1,
    Custom = 2,
}

export interface WorkItemTypeFieldModel {
    allowGroups: boolean;
    defaultValue: string;
    id: string;
    readOnly: boolean;
    required: boolean;
    rules: FieldRuleModel[];
    url: string;
}

export interface WorkItemTypeModel {
    behaviors: WorkItemTypeBehavior[];
    class: WorkItemTypeClass;
    color: string;
    description: string;
    id: string;
    /**
     * Parent WIT Id/Internal ReferenceName that it inherits from
     */
    inherits: string;
    isDisabled: boolean;
    layout: FormLayout;
    name: string;
    states: WorkItemStateResultModel[];
    url: string;
}

export interface WorkItemTypeUpdateModel {
    color: string;
    description: string;
    isDisabled: boolean;
}

export var TypeInfo = {
    BehaviorCreateModel: {
        fields: <any>null
    },
    BehaviorModel: {
        fields: <any>null
    },
    BehaviorReplaceModel: {
        fields: <any>null
    },
    Control: {
        fields: <any>null
    },
    Extension: {
        fields: <any>null
    },
    FieldModel: {
        fields: <any>null
    },
    FieldRuleModel: {
        fields: <any>null
    },
    FieldType: {
        enumValues: {
            "string": 1,
            "integer": 2,
            "dateTime": 3,
            "plainText": 5,
            "html": 7,
            "treePath": 8,
            "history": 9,
            "double": 10,
            "guid": 11,
            "boolean": 12,
            "identity": 13,
            "picklistInteger": 14,
            "picklistString": 15,
            "picklistDouble": 16,
        }
    },
    FieldUpdate: {
        fields: <any>null
    },
    FormLayout: {
        fields: <any>null
    },
    GetWorkItemTypeExpand: {
        enumValues: {
            "none": 0,
            "states": 1,
            "behaviors": 2,
            "layout": 4,
        }
    },
    Group: {
        fields: <any>null
    },
    HideStateModel: {
        fields: <any>null
    },
    Page: {
        fields: <any>null
    },
    PageType: {
        enumValues: {
            "custom": 1,
            "history": 2,
            "links": 3,
            "attachments": 4,
        }
    },
    PickListItemModel: {
        fields: <any>null
    },
    PickListMetadataModel: {
        fields: <any>null
    },
    PickListModel: {
        fields: <any>null
    },
    RuleActionModel: {
        fields: <any>null
    },
    RuleConditionModel: {
        fields: <any>null
    },
    Section: {
        fields: <any>null
    },
    WitContribution: {
        fields: <any>null
    },
    WorkItemBehaviorReference: {
        fields: <any>null
    },
    WorkItemStateInputModel: {
        fields: <any>null
    },
    WorkItemStateResultModel: {
        fields: <any>null
    },
    WorkItemTypeBehavior: {
        fields: <any>null
    },
    WorkItemTypeClass: {
        enumValues: {
            "system": 0,
            "derived": 1,
            "custom": 2,
        }
    },
    WorkItemTypeFieldModel: {
        fields: <any>null
    },
    WorkItemTypeModel: {
        fields: <any>null
    },
    WorkItemTypeUpdateModel: {
        fields: <any>null
    },
};

TypeInfo.BehaviorCreateModel.fields = {
};

TypeInfo.BehaviorModel.fields = {
    inherits: {
        typeInfo: TypeInfo.WorkItemBehaviorReference
    },
};

TypeInfo.BehaviorReplaceModel.fields = {
};

TypeInfo.Control.fields = {
    contribution: {
        typeInfo: TypeInfo.WitContribution
    },
};

TypeInfo.Extension.fields = {
};

TypeInfo.FieldModel.fields = {
    pickList: {
        typeInfo: TypeInfo.PickListMetadataModel
    },
    type: {
        enumType: TypeInfo.FieldType
    },
};

TypeInfo.FieldRuleModel.fields = {
    actions: {
        isArray: true,
        typeInfo: TypeInfo.RuleActionModel
    },
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.RuleConditionModel
    },
};

TypeInfo.FieldUpdate.fields = {
};

TypeInfo.FormLayout.fields = {
    extensions: {
        isArray: true,
        typeInfo: TypeInfo.Extension
    },
    pages: {
        isArray: true,
        typeInfo: TypeInfo.Page
    },
    systemControls: {
        isArray: true,
        typeInfo: TypeInfo.Control
    },
};

TypeInfo.Group.fields = {
    contribution: {
        typeInfo: TypeInfo.WitContribution
    },
    controls: {
        isArray: true,
        typeInfo: TypeInfo.Control
    },
};

TypeInfo.HideStateModel.fields = {
};

TypeInfo.Page.fields = {
    contribution: {
        typeInfo: TypeInfo.WitContribution
    },
    pageType: {
        enumType: TypeInfo.PageType
    },
    sections: {
        isArray: true,
        typeInfo: TypeInfo.Section
    },
};

TypeInfo.PickListItemModel.fields = {
};

TypeInfo.PickListMetadataModel.fields = {
};

TypeInfo.PickListModel.fields = {
    items: {
        isArray: true,
        typeInfo: TypeInfo.PickListItemModel
    },
};

TypeInfo.RuleActionModel.fields = {
};

TypeInfo.RuleConditionModel.fields = {
};

TypeInfo.Section.fields = {
    groups: {
        isArray: true,
        typeInfo: TypeInfo.Group
    },
};

TypeInfo.WitContribution.fields = {
};

TypeInfo.WorkItemBehaviorReference.fields = {
};

TypeInfo.WorkItemStateInputModel.fields = {
};

TypeInfo.WorkItemStateResultModel.fields = {
};

TypeInfo.WorkItemTypeBehavior.fields = {
    behavior: {
        typeInfo: TypeInfo.WorkItemBehaviorReference
    },
};

TypeInfo.WorkItemTypeFieldModel.fields = {
    rules: {
        isArray: true,
        typeInfo: TypeInfo.FieldRuleModel
    },
};

TypeInfo.WorkItemTypeModel.fields = {
    behaviors: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemTypeBehavior
    },
    class: {
        enumType: TypeInfo.WorkItemTypeClass
    },
    layout: {
        typeInfo: TypeInfo.FormLayout
    },
    states: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemStateResultModel
    },
};

TypeInfo.WorkItemTypeUpdateModel.fields = {
};
