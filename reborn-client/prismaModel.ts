import { DMMFField, DMMFModel, SelectQuery } from "./specs/models";
import "./specs/string-extensions";
import { dmmf } from "./specs/project-dmmf";
export class PrismaModel {
    private _model: DMMFModel;

    constructor(model: DMMFModel) {
        this._model = model
    }

    findMany(query: SelectQuery, baseTable: DMMFModel = this._model): string {
        const fields: string[] = [];
        const joins: string[] = [];

        for (const key in query.select) {
            const value: SelectQuery | boolean = query.select[key];

            if (typeof value === "boolean") {
                // Direct field selection
                fields.push(`${baseTable.name}.${key}`);
            } else if (typeof value === "object") {
                // Handle nested relations (JOINs)
                const relatedField: DMMFField | undefined = baseTable.fields.find(field => field.name === key);
                if (!relatedField) {
                    console.log(`Invalid relation field: ${key}`);
                    return "";
                }

                const relatedTable: DMMFModel | undefined = dmmf.models.find(model => model.name === relatedField.type);
                const foreignKey = relatedField.relationFromFields?.[0];
                const relatedPrimaryKey = relatedField.relationToFields?.[0];

                if (!foreignKey || !relatedTable || !relatedPrimaryKey) {
                    console.log("Invalid foreign key or related table");
                    return "";
                }

                // Ensure proper JOIN syntax with correct field references
                joins.push(`LEFT JOIN ${relatedTable.name} ON ${baseTable.name}.${foreignKey} = ${relatedTable.name}.${relatedPrimaryKey}`);

                // Recursively generate nested queries
                const nestedQuery = this.findMany(value, relatedTable);

                fields.push(nestedQuery);
            }
        }

        return `SELECT ${fields.join(", ")} FROM ${baseTable.name} ${joins.join(" ")}`.trim();
    }


}