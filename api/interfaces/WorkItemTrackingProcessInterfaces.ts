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

export interface CreateProcessModel {
    description: string;
    name: string;
    parentProcessTypeId: string;
    referenceName: string;
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
    type: FieldType;
    url: string;
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

export enum GetBehaviorsExpand {
    None = 0,
    Fields = 1,
}

export enum GetProcessExpandLevel {
    None = 0,
    Projects = 1,
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

export enum ProcessClass {
    System = 0,
    Derived = 1,
    Custom = 2,
}

export interface ProcessModel {
    description: string;
    name: string;
    projects: ProjectReference[];
    properties: ProcessProperties;
    referenceName: string;
    typeId: string;
}

export interface ProcessProperties {
    class: ProcessClass;
    isDefault: boolean;
    isEnabled: boolean;
    parentProcessTypeId: string;
    version: string;
}

export interface ProjectReference {
    id: string;
    name: string;
    url: string;
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

export interface UpdateProcessModel {
    description: string;
    isDefault: boolean;
    isEnabled: boolean;
    name: string;
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

export interface WorkItemBehavior {
    abstract: boolean;
    color: string;
    description: string;
    fields: WorkItemBehaviorField[];
    id: string;
    inherits: WorkItemBehaviorReference;
    name: string;
    overriden: boolean;
    rank: number;
    url: string;
}

export interface WorkItemBehaviorField {
    behaviorFieldId: string;
    id: string;
    url: string;
}

export interface WorkItemBehaviorReference {
    id: string;
    url: string;
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

export var TypeInfo = {
    Control: {
        fields: <any>null
    },
    CreateProcessModel: {
        fields: <any>null
    },
    Extension: {
        fields: <any>null
    },
    FieldModel: {
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
    FormLayout: {
        fields: <any>null
    },
    GetBehaviorsExpand: {
        enumValues: {
            "none": 0,
            "fields": 1,
        }
    },
    GetProcessExpandLevel: {
        enumValues: {
            "none": 0,
            "projects": 1,
        }
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
    ProcessClass: {
        enumValues: {
            "system": 0,
            "derived": 1,
            "custom": 2,
        }
    },
    ProcessModel: {
        fields: <any>null
    },
    ProcessProperties: {
        fields: <any>null
    },
    ProjectReference: {
        fields: <any>null
    },
    Section: {
        fields: <any>null
    },
    UpdateProcessModel: {
        fields: <any>null
    },
    WitContribution: {
        fields: <any>null
    },
    WorkItemBehavior: {
        fields: <any>null
    },
    WorkItemBehaviorField: {
        fields: <any>null
    },
    WorkItemBehaviorReference: {
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
    WorkItemTypeModel: {
        fields: <any>null
    },
};

TypeInfo.Control.fields = {
    contribution: {
        typeInfo: TypeInfo.WitContribution
    },
};

TypeInfo.CreateProcessModel.fields = {
};

TypeInfo.Extension.fields = {
};

TypeInfo.FieldModel.fields = {
    type: {
        enumType: TypeInfo.FieldType
    },
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

TypeInfo.ProcessModel.fields = {
    projects: {
        isArray: true,
        typeInfo: TypeInfo.ProjectReference
    },
    properties: {
        typeInfo: TypeInfo.ProcessProperties
    },
};

TypeInfo.ProcessProperties.fields = {
    class: {
        enumType: TypeInfo.ProcessClass
    },
};

TypeInfo.ProjectReference.fields = {
};

TypeInfo.Section.fields = {
    groups: {
        isArray: true,
        typeInfo: TypeInfo.Group
    },
};

TypeInfo.UpdateProcessModel.fields = {
};

TypeInfo.WitContribution.fields = {
};

TypeInfo.WorkItemBehavior.fields = {
    fields: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemBehaviorField
    },
    inherits: {
        typeInfo: TypeInfo.WorkItemBehaviorReference
    },
};

TypeInfo.WorkItemBehaviorField.fields = {
};

TypeInfo.WorkItemBehaviorReference.fields = {
};

TypeInfo.WorkItemStateResultModel.fields = {
};

TypeInfo.WorkItemTypeBehavior.fields = {
    behavior: {
        typeInfo: TypeInfo.WorkItemBehaviorReference
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
