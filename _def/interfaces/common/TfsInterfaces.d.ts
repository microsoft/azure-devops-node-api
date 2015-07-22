export interface TeamProjectCollectionReference {
    id: string;
    name: string;
    url: string;
}
export interface TeamProjectReference {
    abbreviation: string;
    description: string;
    id: string;
    name: string;
    revision: number;
    state: any;
    url: string;
}
export interface WebApiConnectedServiceRef {
    id: string;
    url: string;
}
export declare var TypeInfo: {
    TeamProjectCollectionReference: {
        fields: any;
    };
    TeamProjectReference: {
        fields: any;
    };
    WebApiConnectedServiceRef: {
        fields: any;
    };
};
