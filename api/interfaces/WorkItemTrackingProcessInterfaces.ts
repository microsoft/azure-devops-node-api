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
 * Class that describes a request to add a field in a work item type.
 */
export interface AddProcessWorkItemTypeFieldRequest {
    /**
     * The list of field allowed values.
     */
    allowedValues?: string[];
    /**
     * Allow setting field value to a group identity. Only applies to identity fields.
     */
    allowGroups?: boolean;
    /**
     * The default value of the field.
     */
    defaultValue?: any;
    /**
     * If true the field cannot be edited.
     */
    readOnly?: boolean;
    /**
     * Reference name of the field.
     */
    referenceName?: string;
    /**
     * If true the field cannot be empty.
     */
    required?: boolean;
}

/**
 * Represent a control in the form.
 */
export interface Control {
    /**
     * Contribution for the control.
     */
    contribution?: WitContribution;
    /**
     * Type of the control.
     */
    controlType?: string;
    /**
     * Height of the control, for html controls.
     */
    height?: number;
    /**
     * The id for the layout node.
     */
    id?: string;
    /**
     * A value indicating whether this layout node has been inherited. from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited?: boolean;
    /**
     * A value indicating if the layout node is contribution or not.
     */
    isContribution?: boolean;
    /**
     * Label for the field.
     */
    label?: string;
    /**
     * Inner text of the control.
     */
    metadata?: string;
    /**
     * Order in which the control should appear in its group.
     */
    order?: number;
    /**
     * A value indicating whether this layout node has been overridden . by a child layout.
     */
    overridden?: boolean;
    /**
     * A value indicating if the control is readonly.
     */
    readOnly?: boolean;
    /**
     * A value indicating if the control should be hidden or not.
     */
    visible?: boolean;
    /**
     * Watermark text for the textbox.
     */
    watermark?: string;
}

/**
 * Describes a process being created.
 */
export interface CreateProcessModel {
    /**
     * Description of the process
     */
    description?: string;
    /**
     * Name of the process
     */
    name?: string;
    /**
     * The ID of the parent process
     */
    parentProcessTypeId?: string;
    /**
     * Reference name of process being created. If not specified, server will assign a unique reference name
     */
    referenceName?: string;
}

/**
 * Request object/class for creating a rule on a work item type.
 */
export interface CreateProcessRuleRequest {
    /**
     * List of actions to take when the rule is triggered.
     */
    actions?: RuleAction[];
    /**
     * List of conditions when the rule should be triggered.
     */
    conditions?: RuleCondition[];
    /**
     * Indicates if the rule is disabled.
     */
    isDisabled?: boolean;
    /**
     * Name for the rule.
     */
    name?: string;
}

/**
 * Class for create work item type request
 */
export interface CreateProcessWorkItemTypeRequest {
    /**
     * Color hexadecimal code to represent the work item type
     */
    color?: string;
    /**
     * Description of the work item type
     */
    description?: string;
    /**
     * Icon to represent the work item type
     */
    icon?: string;
    /**
     * Parent work item type for work item type
     */
    inheritsFrom?: string;
    /**
     * True if the work item type need to be disabled
     */
    isDisabled?: boolean;
    /**
     * Name of work item type
     */
    name?: string;
}

/**
 * Indicates the customization-type. Customization-type is System if is system generated or by default. Customization-type is Inherited if the existing workitemtype of inherited process is customized. Customization-type is Custom if the newly created workitemtype is customized.
 */
export enum CustomizationType {
    /**
     * Customization-type is System if is system generated workitemtype.
     */
    System = 1,
    /**
     * Customization-type is Inherited if the existing workitemtype of inherited process is customized.
     */
    Inherited = 2,
    /**
     * Customization-type is Custom if the newly created workitemtype is customized.
     */
    Custom = 3,
}

/**
 * Represents the extensions part of the layout
 */
export interface Extension {
    /**
     * Id of the extension
     */
    id?: string;
}

export interface FieldModel {
    description?: string;
    id?: string;
    isIdentity?: boolean;
    name?: string;
    type?: FieldType;
    url?: string;
}

export interface FieldRuleModel {
    actions?: RuleActionModel[];
    conditions?: RuleConditionModel[];
    friendlyName?: string;
    id?: string;
    isDisabled?: boolean;
    isSystem?: boolean;
}

/**
 * Enum for the type of a field.
 */
export enum FieldType {
    /**
     * String field type.
     */
    String = 1,
    /**
     * Integer field type.
     */
    Integer = 2,
    /**
     * DateTime field type.
     */
    DateTime = 3,
    /**
     * Plain text field type.
     */
    PlainText = 5,
    /**
     * HTML (Multiline) field type.
     */
    Html = 7,
    /**
     * Treepath field type.
     */
    TreePath = 8,
    /**
     * History field type.
     */
    History = 9,
    /**
     * Double field type.
     */
    Double = 10,
    /**
     * Guid field type.
     */
    Guid = 11,
    /**
     * Boolean field type.
     */
    Boolean = 12,
    /**
     * Identity field type.
     */
    Identity = 13,
    /**
     * Integer picklist field type.
     */
    PicklistInteger = 14,
    /**
     * String picklist field type.
     */
    PicklistString = 15,
    /**
     * Double picklist field type.
     */
    PicklistDouble = 16,
}

/**
 * Describes the layout of a work item type
 */
export interface FormLayout {
    /**
     * Gets and sets extensions list.
     */
    extensions?: Extension[];
    /**
     * Top level tabs of the layout.
     */
    pages?: Page[];
    /**
     * Headers controls of the layout.
     */
    systemControls?: Control[];
}

/**
 * Expand options to fetch fields for behaviors API.
 */
export enum GetBehaviorsExpand {
    /**
     * Default none option.
     */
    None = 0,
    /**
     * This option returns fields associated with a behavior.
     */
    Fields = 1,
    /**
     * This option returns fields associated with this behavior and all behaviors from which it inherits.
     */
    CombinedFields = 2,
}

/**
 * The expand level of returned processes.
 */
export enum GetProcessExpandLevel {
    /**
     * No expand level.
     */
    None = 0,
    /**
     * Projects expand level.
     */
    Projects = 1,
}

/**
 * Flag to define what properties to return in get work item type response.
 */
export enum GetWorkItemTypeExpand {
    /**
     * Returns no properties in get work item type response.
     */
    None = 0,
    /**
     * Returns states property in get work item type response.
     */
    States = 1,
    /**
     * Returns behaviors property in get work item type response.
     */
    Behaviors = 2,
    /**
     * Returns layout property in get work item type response.
     */
    Layout = 4,
}

/**
 * Represent a group in the form that holds controls in it.
 */
export interface Group {
    /**
     * Contribution for the group.
     */
    contribution?: WitContribution;
    /**
     * Controls to be put in the group.
     */
    controls?: Control[];
    /**
     * The height for the contribution.
     */
    height?: number;
    /**
     * The id for the layout node.
     */
    id?: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited?: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution?: boolean;
    /**
     * Label for the group.
     */
    label?: string;
    /**
     * Order in which the group should appear in the section.
     */
    order?: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden?: boolean;
    /**
     * A value indicating if the group should be hidden or not.
     */
    visible?: boolean;
}

/**
 * Class that describes the work item state is hidden.
 */
export interface HideStateModel {
    /**
     * Returns 'true', if workitem state is hidden, 'false' otherwise.
     */
    hidden?: boolean;
}

/**
 * Describes a page in the work item form layout
 */
export interface Page {
    /**
     * Contribution for the page.
     */
    contribution?: WitContribution;
    /**
     * The id for the layout node.
     */
    id?: string;
    /**
     * A value indicating whether this layout node has been inherited from a parent layout.  This is expected to only be only set by the combiner.
     */
    inherited?: boolean;
    /**
     * A value indicating if the layout node is contribution are not.
     */
    isContribution?: boolean;
    /**
     * The label for the page.
     */
    label?: string;
    /**
     * A value indicating whether any user operations are permitted on this page and the contents of this page
     */
    locked?: boolean;
    /**
     * Order in which the page should appear in the layout.
     */
    order?: number;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden?: boolean;
    /**
     * The icon for the page.
     */
    pageType?: PageType;
    /**
     * The sections of the page.
     */
    sections?: Section[];
    /**
     * A value indicating if the page should be hidden or not.
     */
    visible?: boolean;
}

/**
 * Enum for the types of pages in the work item form layout
 */
export enum PageType {
    /**
     * Custom page type.
     */
    Custom = 1,
    /**
     * History page type.
     */
    History = 2,
    /**
     * Link page type.
     */
    Links = 3,
    /**
     * Attachment page type.
     */
    Attachments = 4,
}

/**
 * Picklist.
 */
export interface PickList extends PickListMetadata {
    /**
     * A list of PicklistItemModel.
     */
    items?: string[];
}

/**
 * Metadata for picklist.
 */
export interface PickListMetadata {
    /**
     * ID of the picklist
     */
    id?: string;
    /**
     * Indicates whether items outside of suggested list are allowed
     */
    isSuggested?: boolean;
    /**
     * Name of the picklist
     */
    name?: string;
    /**
     * DataType of picklist
     */
    type?: string;
    /**
     * Url of the picklist
     */
    url?: string;
}

/**
 * Process Behavior Model.
 */
export interface ProcessBehavior {
    /**
     * Color.
     */
    color?: string;
    /**
     * Indicates the type of customization on this work item. System behaviors are inherited from parent process but not modified. Inherited behaviors are modified modified behaviors that were inherited from parent process. Custom behaviors are behaviors created by user in current process.
     */
    customization?: CustomizationType;
    /**
     * . Description
     */
    description?: string;
    /**
     * Process Behavior Fields.
     */
    fields?: ProcessBehaviorField[];
    /**
     * Parent behavior reference.
     */
    inherits?: ProcessBehaviorReference;
    /**
     * Behavior Name.
     */
    name?: string;
    /**
     * Rank of the behavior
     */
    rank?: number;
    /**
     * Behavior Id
     */
    referenceName?: string;
    /**
     * Url of the behavior.
     */
    url?: string;
}

/**
 * Process Behavior Create Payload.
 */
export interface ProcessBehaviorCreateRequest {
    /**
     * Color.
     */
    color?: string;
    /**
     * Parent behavior id.
     */
    inherits?: string;
    /**
     * Name of the behavior.
     */
    name?: string;
    /**
     * ReferenceName is optional, if not specified will be auto-generated.
     */
    referenceName?: string;
}

/**
 * Process Behavior Field.
 */
export interface ProcessBehaviorField {
    /**
     * Name of the field.
     */
    name?: string;
    /**
     * Reference name of the field.
     */
    referenceName?: string;
    /**
     * Url to field.
     */
    url?: string;
}

/**
 * Process behavior Reference.
 */
export interface ProcessBehaviorReference {
    /**
     * Id of a Behavior.
     */
    behaviorRefName?: string;
    /**
     * Url to behavior.
     */
    url?: string;
}

/**
 * Process Behavior Replace Payload.
 */
export interface ProcessBehaviorUpdateRequest {
    /**
     * Color.
     */
    color?: string;
    /**
     * Behavior Name.
     */
    name?: string;
}

export enum ProcessClass {
    System = 0,
    Derived = 1,
    Custom = 2,
}

/**
 * Process.
 */
export interface ProcessInfo {
    /**
     * Indicates the type of customization on this process. System Process is default process. Inherited Process is modified process that was System process before.
     */
    customizationType?: CustomizationType;
    /**
     * Description of the process.
     */
    description?: string;
    /**
     * Is the process default.
     */
    isDefault?: boolean;
    /**
     * Is the process enabled.
     */
    isEnabled?: boolean;
    /**
     * Name of the process.
     */
    name?: string;
    /**
     * ID of the parent process.
     */
    parentProcessTypeId?: string;
    /**
     * Projects in this process to which the user is subscribed to.
     */
    projects?: ProjectReference[];
    /**
     * Reference name of the process.
     */
    referenceName?: string;
    /**
     * The ID of the process.
     */
    typeId?: string;
}

export interface ProcessModel {
    /**
     * Description of the process
     */
    description?: string;
    /**
     * Name of the process
     */
    name?: string;
    /**
     * Projects in this process
     */
    projects?: ProjectReference[];
    /**
     * Properties of the process
     */
    properties?: ProcessProperties;
    /**
     * Reference name of the process
     */
    referenceName?: string;
    /**
     * The ID of the process
     */
    typeId?: string;
}

/**
 * Properties of the process.
 */
export interface ProcessProperties {
    /**
     * Class of the process.
     */
    class?: ProcessClass;
    /**
     * Is the process default process.
     */
    isDefault?: boolean;
    /**
     * Is the process enabled.
     */
    isEnabled?: boolean;
    /**
     * ID of the parent process.
     */
    parentProcessTypeId?: string;
    /**
     * Version of the process.
     */
    version?: string;
}

/**
 * Process Rule Response.
 */
export interface ProcessRule extends CreateProcessRuleRequest {
    /**
     * Indicates if the rule is system generated or created by user.
     */
    customizationType?: CustomizationType;
    /**
     * Id to uniquely identify the rule.
     */
    id?: string;
    /**
     * Resource Url.
     */
    url?: string;
}

/**
 * Class that describes a work item type object
 */
export interface ProcessWorkItemType {
    behaviors?: WorkItemTypeBehavior[];
    /**
     * Color hexadecimal code to represent the work item type
     */
    color?: string;
    /**
     * Indicates the type of customization on this work item System work item types are inherited from parent process but not modified Inherited work item types are modified work item that were inherited from parent process Custom work item types are work item types that were created in the current process
     */
    customization?: CustomizationType;
    /**
     * Description of the work item type
     */
    description?: string;
    /**
     * Icon to represent the work item typ
     */
    icon?: string;
    /**
     * Reference name of the parent work item type
     */
    inherits?: string;
    /**
     * Indicates if a work item type is disabled
     */
    isDisabled?: boolean;
    layout?: FormLayout;
    /**
     * Name of the work item type
     */
    name?: string;
    /**
     * Reference name of work item type
     */
    referenceName?: string;
    states?: WorkItemStateResultModel[];
    /**
     * Url of the work item type
     */
    url?: string;
}

/**
 * Class that describes a field in a work item type and its properties.
 */
export interface ProcessWorkItemTypeField {
    /**
     * The list of field allowed values.
     */
    allowedValues?: any[];
    /**
     * Allow setting field value to a group identity. Only applies to identity fields.
     */
    allowGroups?: boolean;
    /**
     * Indicates the type of customization on this work item.
     */
    customization?: CustomizationType;
    /**
     * The default value of the field.
     */
    defaultValue?: any;
    /**
     * Description of the field.
     */
    description?: string;
    /**
     * Name of the field.
     */
    name?: string;
    /**
     * If true the field cannot be edited.
     */
    readOnly?: boolean;
    /**
     * Reference name of the field.
     */
    referenceName?: string;
    /**
     * If true the field cannot be empty.
     */
    required?: boolean;
    /**
     * Type of the field.
     */
    type?: FieldType;
    /**
     * Resource URL of the field.
     */
    url?: string;
}

/**
 * Expand options for the work item field(s) request.
 */
export enum ProcessWorkItemTypeFieldsExpandLevel {
    /**
     * Includes only basic properties of the field.
     */
    None = 0,
    /**
     * Includes allowed values for the field.
     */
    AllowedValues = 1,
    /**
     * Includes allowed values and dependent fields of the field.
     */
    All = 2,
}

/**
 * Defines the project reference class.
 */
export interface ProjectReference {
    /**
     * Description of the project
     */
    description?: string;
    /**
     * The ID of the project
     */
    id?: string;
    /**
     * Name of the project
     */
    name?: string;
    /**
     * Url of the project
     */
    url?: string;
}

/**
 * Action to take when the rule is triggered.
 */
export interface RuleAction {
    /**
     * Type of action to take when the rule is triggered.
     */
    actionType?: RuleActionType;
    /**
     * Field on which the action should be taken.
     */
    targetField?: string;
    /**
     * Value to apply on target field, once the action is taken.
     */
    value?: string;
}

/**
 * Action to take when the rule is triggered.
 */
export interface RuleActionModel {
    actionType?: string;
    targetField?: string;
    value?: string;
}

/**
 * Type of action to take when the rule is triggered.
 */
export enum RuleActionType {
    /**
     * Make the target field required. Example : {"actionType":"$makeRequired","targetField":"Microsoft.VSTS.Common.Activity","value":""}
     */
    MakeRequired = 1,
    /**
     * Make the target field read-only. Example : {"actionType":"$makeReadOnly","targetField":"Microsoft.VSTS.Common.Activity","value":""}
     */
    MakeReadOnly = 2,
    /**
     * Set a default value on the target field. This is used if the user creates a integer/string field and sets a default value of this field.
     */
    SetDefaultValue = 3,
    /**
     * Set the default value on the target field from server clock. This is used if user creates the field like Date/Time and uses default value.
     */
    SetDefaultFromClock = 4,
    /**
     * Set the default current user value on the target field. This is used if the user creates the field of type identity and uses default value.
     */
    SetDefaultFromCurrentUser = 5,
    /**
     * Set the default value on from existing field to the target field.  This used wants to set a existing field value to the current field.
     */
    SetDefaultFromField = 6,
    /**
     * Set the value of target field to given value. Example : {actionType: "$copyValue", targetField: "ScrumInherited.mypicklist", value: "samplevalue"}
     */
    CopyValue = 7,
    /**
     * Set the value from clock.
     */
    CopyFromClock = 8,
    /**
     * Set the current user to the target field. Example : {"actionType":"$copyFromCurrentUser","targetField":"System.AssignedTo","value":""}.
     */
    CopyFromCurrentUser = 9,
    /**
     * Copy the value from a specified field and set to target field. Example : {actionType: "$copyFromField", targetField: "System.AssignedTo", value:"System.ChangedBy"}. Here, value is copied from "System.ChangedBy" and set to "System.AssingedTo" field.
     */
    CopyFromField = 10,
    /**
     * Set the value of the target field to empty.
     */
    SetValueToEmpty = 11,
    /**
     * Use the current time to set the value of the target field. Example : {actionType: "$copyFromServerClock", targetField: "System.CreatedDate", value: ""}
     */
    CopyFromServerClock = 12,
    /**
     * Use the current user to set the value of the target field.
     */
    CopyFromServerCurrentUser = 13,
    /**
     * Hides target field from the form. This is a server side only action.
     */
    HideTargetField = 14,
}

/**
 * Defines a condition on a field when the rule should be triggered.
 */
export interface RuleCondition {
    /**
     * Type of condition. $When. This condition limits the execution of its children to cases when another field has a particular value, i.e. when the Is value of the referenced field is equal to the given literal value. $WhenNot.This condition limits the execution of its children to cases when another field does not have a particular value, i.e.when the Is value of the referenced field is not equal to the given literal value. $WhenChanged.This condition limits the execution of its children to cases when another field has changed, i.e.when the Is value of the referenced field is not equal to the Was value of that field. $WhenNotChanged.This condition limits the execution of its children to cases when another field has not changed, i.e.when the Is value of the referenced field is equal to the Was value of that field.
     */
    conditionType?: RuleConditionType;
    /**
     * Field that defines condition.
     */
    field?: string;
    /**
     * Value of field to define the condition for rule.
     */
    value?: string;
}

export interface RuleConditionModel {
    conditionType?: string;
    field?: string;
    value?: string;
}

/**
 * Type of rule condition.
 */
export enum RuleConditionType {
    /**
     * $When. This condition limits the execution of its children to cases when another field has a particular value, i.e. when the Is value of the referenced field is equal to the given literal value.
     */
    When = 1,
    /**
     * $WhenNot.This condition limits the execution of its children to cases when another field does not have a particular value, i.e.when the Is value of the referenced field is not equal to the given literal value.
     */
    WhenNot = 2,
    /**
     * $WhenChanged.This condition limits the execution of its children to cases when another field has changed, i.e.when the Is value of the referenced field is not equal to the Was value of that field.
     */
    WhenChanged = 3,
    /**
     * $WhenNotChanged.This condition limits the execution of its children to cases when another field has not changed, i.e.when the Is value of the referenced field is equal to the Was value of that field.
     */
    WhenNotChanged = 4,
    WhenWas = 5,
    WhenStateChangedTo = 6,
    WhenStateChangedFromAndTo = 7,
    WhenWorkItemIsCreated = 8,
    WhenValueIsDefined = 9,
    WhenValueIsNotDefined = 10,
    WhenCurrentUserIsMemberOfGroup = 11,
    WhenCurrentUserIsNotMemberOfGroup = 12,
}

/**
 * Defines a section of the work item form layout
 */
export interface Section {
    /**
     * List of child groups in this section
     */
    groups?: Group[];
    /**
     * The id for the layout node.
     */
    id?: string;
    /**
     * A value indicating whether this layout node has been overridden by a child layout.
     */
    overridden?: boolean;
}

/**
 * Describes a request to update a process
 */
export interface UpdateProcessModel {
    /**
     * New description of the process
     */
    description?: string;
    /**
     * If true new projects will use this process by default
     */
    isDefault?: boolean;
    /**
     * If false the process will be disabled and cannot be used to create projects
     */
    isEnabled?: boolean;
    /**
     * New name of the process
     */
    name?: string;
}

/**
 * Request class/object to update the rule.
 */
export interface UpdateProcessRuleRequest extends CreateProcessRuleRequest {
    /**
     * Id to uniquely identify the rule.
     */
    id?: string;
}

/**
 * Class to describe a request that updates a field's properties in a work item type.
 */
export interface UpdateProcessWorkItemTypeFieldRequest {
    /**
     * The list of field allowed values.
     */
    allowedValues?: string[];
    /**
     * Allow setting field value to a group identity. Only applies to identity fields.
     */
    allowGroups?: boolean;
    /**
     * The default value of the field.
     */
    defaultValue?: any;
    /**
     * If true the field cannot be edited.
     */
    readOnly?: boolean;
    /**
     * The default value of the field.
     */
    required?: boolean;
}

/**
 * Class for update request on a work item type
 */
export interface UpdateProcessWorkItemTypeRequest {
    /**
     * Color of the work item type
     */
    color?: string;
    /**
     * Description of the work item type
     */
    description?: string;
    /**
     * Icon of the work item type
     */
    icon?: string;
    /**
     * If set will disable the work item type
     */
    isDisabled?: boolean;
}

/**
 * Properties of a work item form contribution
 */
export interface WitContribution {
    /**
     * The id for the contribution.
     */
    contributionId?: string;
    /**
     * The height for the contribution.
     */
    height?: number;
    /**
     * A dictionary holding key value pairs for contribution inputs.
     */
    inputs?: { [key: string] : any; };
    /**
     * A value indicating if the contribution should be show on deleted workItem.
     */
    showOnDeletedWorkItem?: boolean;
}

export interface WorkItemBehavior {
    abstract?: boolean;
    color?: string;
    description?: string;
    fields?: WorkItemBehaviorField[];
    id?: string;
    inherits?: WorkItemBehaviorReference;
    name?: string;
    overriden?: boolean;
    rank?: number;
    url?: string;
}

export interface WorkItemBehaviorField {
    behaviorFieldId?: string;
    id?: string;
    url?: string;
}

/**
 * Reference to the behavior of a work item type.
 */
export interface WorkItemBehaviorReference {
    /**
     * The ID of the reference behavior.
     */
    id?: string;
    /**
     * The url of the reference behavior.
     */
    url?: string;
}

/**
 * Class That represents a work item state input.
 */
export interface WorkItemStateInputModel {
    /**
     * Color of the state
     */
    color?: string;
    /**
     * Name of the state
     */
    name?: string;
    /**
     * Order in which state should appear
     */
    order?: number;
    /**
     * Category of the state
     */
    stateCategory?: string;
}

/**
 * Class that represents a work item state result.
 */
export interface WorkItemStateResultModel {
    /**
     * Work item state color.
     */
    color?: string;
    /**
     * Work item state customization type.
     */
    customizationType?: CustomizationType;
    /**
     * If the Work item state is hidden.
     */
    hidden?: boolean;
    /**
     * Id of the Workitemstate.
     */
    id?: string;
    /**
     * Work item state name.
     */
    name?: string;
    /**
     * Work item state order.
     */
    order?: number;
    /**
     * Work item state statecategory.
     */
    stateCategory?: string;
    /**
     * Work item state url.
     */
    url?: string;
}

/**
 * Association between a work item type and it's behavior
 */
export interface WorkItemTypeBehavior {
    /**
     * Reference to the behavior of a work item type
     */
    behavior?: WorkItemBehaviorReference;
    /**
     * If true the work item type is the default work item type in the behavior
     */
    isDefault?: boolean;
    /**
     * URL of the work item type behavior
     */
    url?: string;
}

export enum WorkItemTypeClass {
    System = 0,
    Derived = 1,
    Custom = 2,
}

export interface WorkItemTypeModel {
    behaviors?: WorkItemTypeBehavior[];
    class?: WorkItemTypeClass;
    color?: string;
    description?: string;
    icon?: string;
    id?: string;
    /**
     * Parent WIT Id/Internal ReferenceName that it inherits from
     */
    inherits?: string;
    isDisabled?: boolean;
    layout?: FormLayout;
    name?: string;
    states?: WorkItemStateResultModel[];
    url?: string;
}

export var TypeInfo = {
    CreateProcessRuleRequest: <any>{
    },
    CustomizationType: {
        enumValues: {
            "system": 1,
            "inherited": 2,
            "custom": 3
        }
    },
    FieldModel: <any>{
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
            "picklistDouble": 16
        }
    },
    FormLayout: <any>{
    },
    GetBehaviorsExpand: {
        enumValues: {
            "none": 0,
            "fields": 1,
            "combinedFields": 2
        }
    },
    GetProcessExpandLevel: {
        enumValues: {
            "none": 0,
            "projects": 1
        }
    },
    GetWorkItemTypeExpand: {
        enumValues: {
            "none": 0,
            "states": 1,
            "behaviors": 2,
            "layout": 4
        }
    },
    Page: <any>{
    },
    PageType: {
        enumValues: {
            "custom": 1,
            "history": 2,
            "links": 3,
            "attachments": 4
        }
    },
    ProcessBehavior: <any>{
    },
    ProcessClass: {
        enumValues: {
            "system": 0,
            "derived": 1,
            "custom": 2
        }
    },
    ProcessInfo: <any>{
    },
    ProcessModel: <any>{
    },
    ProcessProperties: <any>{
    },
    ProcessRule: <any>{
    },
    ProcessWorkItemType: <any>{
    },
    ProcessWorkItemTypeField: <any>{
    },
    ProcessWorkItemTypeFieldsExpandLevel: {
        enumValues: {
            "none": 0,
            "allowedValues": 1,
            "all": 2
        }
    },
    RuleAction: <any>{
    },
    RuleActionType: {
        enumValues: {
            "makeRequired": 1,
            "makeReadOnly": 2,
            "setDefaultValue": 3,
            "setDefaultFromClock": 4,
            "setDefaultFromCurrentUser": 5,
            "setDefaultFromField": 6,
            "copyValue": 7,
            "copyFromClock": 8,
            "copyFromCurrentUser": 9,
            "copyFromField": 10,
            "setValueToEmpty": 11,
            "copyFromServerClock": 12,
            "copyFromServerCurrentUser": 13,
            "hideTargetField": 14
        }
    },
    RuleCondition: <any>{
    },
    RuleConditionType: {
        enumValues: {
            "when": 1,
            "whenNot": 2,
            "whenChanged": 3,
            "whenNotChanged": 4,
            "whenWas": 5,
            "whenStateChangedTo": 6,
            "whenStateChangedFromAndTo": 7,
            "whenWorkItemIsCreated": 8,
            "whenValueIsDefined": 9,
            "whenValueIsNotDefined": 10,
            "whenCurrentUserIsMemberOfGroup": 11,
            "whenCurrentUserIsNotMemberOfGroup": 12
        }
    },
    UpdateProcessRuleRequest: <any>{
    },
    WorkItemStateResultModel: <any>{
    },
    WorkItemTypeClass: {
        enumValues: {
            "system": 0,
            "derived": 1,
            "custom": 2
        }
    },
    WorkItemTypeModel: <any>{
    },
};

TypeInfo.CreateProcessRuleRequest.fields = {
    actions: {
        isArray: true,
        typeInfo: TypeInfo.RuleAction
    },
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.RuleCondition
    }
};

TypeInfo.FieldModel.fields = {
    type: {
        enumType: TypeInfo.FieldType
    }
};

TypeInfo.FormLayout.fields = {
    pages: {
        isArray: true,
        typeInfo: TypeInfo.Page
    }
};

TypeInfo.Page.fields = {
    pageType: {
        enumType: TypeInfo.PageType
    }
};

TypeInfo.ProcessBehavior.fields = {
    customization: {
        enumType: TypeInfo.CustomizationType
    }
};

TypeInfo.ProcessInfo.fields = {
    customizationType: {
        enumType: TypeInfo.CustomizationType
    }
};

TypeInfo.ProcessModel.fields = {
    properties: {
        typeInfo: TypeInfo.ProcessProperties
    }
};

TypeInfo.ProcessProperties.fields = {
    class: {
        enumType: TypeInfo.ProcessClass
    }
};

TypeInfo.ProcessRule.fields = {
    actions: {
        isArray: true,
        typeInfo: TypeInfo.RuleAction
    },
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.RuleCondition
    },
    customizationType: {
        enumType: TypeInfo.CustomizationType
    }
};

TypeInfo.ProcessWorkItemType.fields = {
    customization: {
        enumType: TypeInfo.CustomizationType
    },
    layout: {
        typeInfo: TypeInfo.FormLayout
    },
    states: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemStateResultModel
    }
};

TypeInfo.ProcessWorkItemTypeField.fields = {
    customization: {
        enumType: TypeInfo.CustomizationType
    },
    type: {
        enumType: TypeInfo.FieldType
    }
};

TypeInfo.RuleAction.fields = {
    actionType: {
        enumType: TypeInfo.RuleActionType
    }
};

TypeInfo.RuleCondition.fields = {
    conditionType: {
        enumType: TypeInfo.RuleConditionType
    }
};

TypeInfo.UpdateProcessRuleRequest.fields = {
    actions: {
        isArray: true,
        typeInfo: TypeInfo.RuleAction
    },
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.RuleCondition
    }
};

TypeInfo.WorkItemStateResultModel.fields = {
    customizationType: {
        enumType: TypeInfo.CustomizationType
    }
};

TypeInfo.WorkItemTypeModel.fields = {
    class: {
        enumType: TypeInfo.WorkItemTypeClass
    },
    layout: {
        typeInfo: TypeInfo.FormLayout
    },
    states: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemStateResultModel
    }
};
