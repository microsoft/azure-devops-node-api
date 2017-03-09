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
 * Represents a single data point processed from a DataTransformer
 */
export interface AggregatedRecord {
    group: any;
    measure: number;
    series: any;
}

/**
 * Chart configuration metadata defining a renderable chart
 */
export interface ChartConfiguration {
    chartId: string;
    /**
     * The type of chart visualization/renderer to employ on client.
     */
    chartType: string;
    /**
     * Uniquely describes a set "grouped" charts in terms of relation to a common entity.  For WIT, a set of charts referencing a stored Query GUID are all "owned" and discoverable in relation to that Query.
     */
    groupKey: string;
    /**
     * Describes a feature "scope". Scope information is required by charting to properly route REST requests to particular feature implementations.
     */
    scope: string;
    /**
     * The textual title of the chart.
     */
    title: string;
    /**
     * The options for "Transforming" chart data by "filtering" data from feature, and "tabulating" that data.
     */
    transformOptions: TransformOptions;
    /**
     * A set of colors bound to known chart group values in the chart
     */
    userColors: ColorConfiguration[];
}

/**
 * Response from RestAPI when saving and editing Chart Configurations
 */
export interface ChartConfigurationResponse extends ChartingRestResponseBase {
    /**
     * The saved Chart Configuration
     */
    chartConfiguration: ChartConfiguration;
}

/**
 * Encapsulates Rest response policy currently implemented at Charting scope.
 */
export interface ChartingRestResponseBase {
    /**
     * The URI that can GET this element
     */
    uri: string;
}

/**
 * Defines a set of user colors for a specific chart
 */
export interface ColorConfiguration {
    backgroundColor: string;
    value: string;
}

/**
 * Read-only manifest of Capabilities supported within the active charting scope.
 */
export interface DataServiceCapabilities {
    /**
     * The set of supported Fields for Grouping and Aggregation option selection.
     */
    fields: FieldInfo[];
    /**
     * The set of supported Range options.
     */
    historyRanges: NameLabelPair[];
    /**
     * The describes the set of numerical Aggregration Functions.
     */
    numericalAggregationFunctions: NameLabelPair[];
    /**
     * Provides localized plural name for the artifacts being charted, for Chart labelling ie-"14 {X}", and describing count aggregation in UI or on aggregation selection "Count of {X}", for which no field applies.
     */
    pluralArtifactName: string;
    /**
     * Scope name for the chart data provider supporting these capabilities.
     */
    scope: string;
}

/**
 * Response from RestAPI when operating on DataService Capabilities
 */
export interface DataServiceCapabilitiesResponse extends ChartingRestResponseBase {
    dataServiceCapabilities: DataServiceCapabilities;
}

/**
 * Describes a Field for use on a chart.
 */
export interface FieldInfo extends NameLabelPair {
    /**
     * Can the field be aggregated with treatment as a numerical value?
     */
    isAggregatable: boolean;
    /**
     * Can the field be meaningfully used for grouping?
     */
    isGroupable: boolean;
}

/**
 * The aggregating function to apply and which column should be aggregated in a data set
 */
export interface Measure {
    /**
     * Type of Aggregation to apply to the field
     */
    aggregation: string;
    /**
     * Data Model Property in the measure
     */
    propertyName: string;
}

/**
 * Used for describing, presenting and identifying from sets data service capabilities
 */
export interface NameLabelPair {
    /**
     * User facing label for client side presentation.
     */
    labelText: string;
    /**
     * Invariant name for unique recognition at scope of a charting provider.
     */
    name: string;
}

/**
 * The ordering direction and property which determines the ordering
 */
export interface OrderBy {
    /**
     * The ordering direction
     */
    direction: string;
    /**
     * The ordering property name
     */
    propertyName: string;
}

/**
 * Defines a means of filtering and transforming a dataset
 */
export interface TransformOptions {
    /**
     * Describes feature-aware means of "querying" an initial data set. A Query Guid is used by the main WIT provider feature implementation.
     */
    filter: string;
    /**
     * Describes a feature-aware set of parameters to aid in querying the initial data set. Unlike all other options - this aspect is impermanent/contextual to the client state. WIT uses this to pass WIT query context info like @me, @project value state.
     */
    filterContext: { [key: string] : any; };
    /**
     * Specifies a field with a discrete set of values, for use to group together related data. ie- Priority, AssignedTo, or State
     */
    groupBy: string;
    /**
     * Specifies how the data set should be sampled over time. Empty == a transform which will just collect samples at the time of the request. Note: The original Charting implementation treats sampled dates as a grouped field. This means that Trend charts can only be stacked/grouped with 0-1 other dimension, where snapshot charts can use both.
     */
    historyRange: string;
    /**
     * Describes what value to measure against, and how that provided data should be tabulated.
     */
    measure: Measure;
    /**
     * Describes how chart data should be ordered for all groupable dimensions... Except time/History, which ignores this, and always sorts in ascending order.
     */
    orderBy: OrderBy;
    /**
     * A 2nd field dimension to specify grouping of related data.
     */
    series: string;
    /**
     * Uniquely identifies *persisted* Transform Data between client, AT and DT. This is determined by the server when persisting a transform/chart. It is irrelevant for standalone transform requests.
     */
    transformId: string;
}

/**
 * The result of a single transform
 */
export interface TransformResult {
    /**
     * Indicates if options for this Transform result reflect the state originally supplied from the request. In legacy charting implementation, a History field was injected to act as Series or Group By option.
     */
    areHistoryOptionsUnmodified: boolean;
    /**
     * The Transform Options that yielded the records of this result
     */
    options: TransformOptions;
    /**
     * An IEnumerable of the actual results of the transform
     */
    records: AggregatedRecord[];
}

export var TypeInfo = {
    AggregatedRecord: {
        fields: <any>null
    },
    ChartConfiguration: {
        fields: <any>null
    },
    ChartConfigurationResponse: {
        fields: <any>null
    },
    ChartingRestResponseBase: {
        fields: <any>null
    },
    ColorConfiguration: {
        fields: <any>null
    },
    DataServiceCapabilities: {
        fields: <any>null
    },
    DataServiceCapabilitiesResponse: {
        fields: <any>null
    },
    FieldInfo: {
        fields: <any>null
    },
    Measure: {
        fields: <any>null
    },
    NameLabelPair: {
        fields: <any>null
    },
    OrderBy: {
        fields: <any>null
    },
    TransformOptions: {
        fields: <any>null
    },
    TransformResult: {
        fields: <any>null
    },
};

TypeInfo.AggregatedRecord.fields = {
};

TypeInfo.ChartConfiguration.fields = {
    transformOptions: {
        typeInfo: TypeInfo.TransformOptions
    },
    userColors: {
        isArray: true,
        typeInfo: TypeInfo.ColorConfiguration
    },
};

TypeInfo.ChartConfigurationResponse.fields = {
    chartConfiguration: {
        typeInfo: TypeInfo.ChartConfiguration
    },
};

TypeInfo.ChartingRestResponseBase.fields = {
};

TypeInfo.ColorConfiguration.fields = {
};

TypeInfo.DataServiceCapabilities.fields = {
    fields: {
        isArray: true,
        typeInfo: TypeInfo.FieldInfo
    },
    historyRanges: {
        isArray: true,
        typeInfo: TypeInfo.NameLabelPair
    },
    numericalAggregationFunctions: {
        isArray: true,
        typeInfo: TypeInfo.NameLabelPair
    },
};

TypeInfo.DataServiceCapabilitiesResponse.fields = {
    dataServiceCapabilities: {
        typeInfo: TypeInfo.DataServiceCapabilities
    },
};

TypeInfo.FieldInfo.fields = {
};

TypeInfo.Measure.fields = {
};

TypeInfo.NameLabelPair.fields = {
};

TypeInfo.OrderBy.fields = {
};

TypeInfo.TransformOptions.fields = {
    measure: {
        typeInfo: TypeInfo.Measure
    },
    orderBy: {
        typeInfo: TypeInfo.OrderBy
    },
};

TypeInfo.TransformResult.fields = {
    options: {
        typeInfo: TypeInfo.TransformOptions
    },
    records: {
        isArray: true,
        typeInfo: TypeInfo.AggregatedRecord
    },
};
