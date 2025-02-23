export interface DMMFModel {
    name: string;
    fields: DMMFField[];
    // dbName: string | null;
    // primaryKey: string | null;
    // uniqueFields?: any[];
    // uniqueIndexes: any[];
    // isGenerated: boolean;
    // documentation?: string;
}


export interface DMMFField {
    name: string;
    kind: string;
    isList: boolean;
    isRequired: boolean;
    type: string;
    relationToFields?: string[];
    relationFromFields?: string[];
    // isUnique: boolean;
    // isId: boolean;
    // isReadOnly: boolean;
    // hasDefaultValue: boolean;
    // isGenerated: boolean;
    // isUpdatedAt: boolean;
    // documentation?: string;
}

export type SelectQuery = {
    select: {
        [key: string]: boolean | SelectQuery;
    };
};

type GenerateSelect<T extends DMMFModel> = {
    select: {
        [Field in T["fields"][number]as Field["name"]]?:
        Field["kind"] extends "object"
        ? GenerateSelect<{ name: Field["type"]; fields: T["fields"] }> // Recursive
        : boolean;
    };
};

