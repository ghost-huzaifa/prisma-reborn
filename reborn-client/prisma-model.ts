import { DMMFField, DMMFModel, SelectQuery } from "./specs/models";
import "./specs/string-extensions";
import { dmmf } from "./specs/project-dmmf";

export class PrismaModel {
    private _model: DMMFModel;

    constructor(model: DMMFModel) {
        this._model = model;
    }

    /*
        This function converts the prisma-specs 'findMany' json into corrosponding SQL Query, having following keys:
        1. SELECT: value is a nested object with booleans for attributes to be included
        2. WHERE: TBD
    */

    findMany(query: SelectQuery): string {
        const selectResult = this.processSelectQuery(query, this._model);
        return `SELECT\n    ${selectResult.fields.join(",\n    ")}\nFROM ${this._model.name}\n${selectResult.joins.join("\n")}`;
    }

    private processSelectQuery(
        query: SelectQuery,
        currentModel: DMMFModel,
        parentPath: string = "",
        processedJoins: Set<string> = new Set<string>()
    ): { fields: string[], joins: string[] } {
        const fields: string[] = [];
        const joins: string[] = [];

        // Process each field in the select query
        for (const key in query.select) {
            const value = query.select[key];

            // Case 1: Direct field selection (not a relation)
            if (typeof value === "boolean" && value === true) {
                fields.push(`${currentModel.name}.${key}`);
                continue;
            }

            // Case 2: Nested relation
            if (typeof value === "object") {
                const relatedField = currentModel.fields.find(field => field.name === key);
                if (!relatedField) {
                    console.error(`Invalid relation field: ${key}`);
                    continue;
                }

                const relatedModelName = relatedField.type;
                const relatedModel = dmmf.models.find(model => model.name === relatedModelName);
                if (!relatedModel) {
                    console.error(`Related model not found: ${relatedModelName}`);
                    continue;
                }

                // Get the foreign keys for this relation
                const foreignKey = relatedField.relationFromFields?.[0];
                const relatedPrimaryKey = relatedField.relationToFields?.[0];

                if (!foreignKey || !relatedPrimaryKey) {
                    console.error(`Missing foreign key information for relation: ${key}`);
                    continue;
                }

                // Create a unique join identifier
                const joinKey = `${currentModel.name}.${foreignKey}->${relatedModel.name}.${relatedPrimaryKey}`;

                // Only add this join if it hasn't been processed yet
                if (!processedJoins.has(joinKey)) {
                    joins.push(`LEFT JOIN ${relatedModel.name} ON ${currentModel.name}.${foreignKey} = ${relatedModel.name}.${relatedPrimaryKey}`);
                    processedJoins.add(joinKey);
                }

                // Recursively process the nested query
                const prefix = parentPath ? `${parentPath}${key}_` : `${key}_`;
                const result = this.processSelectQuery(value, relatedModel, prefix, processedJoins);

                // Add fields and joins from nested query
                for (const field of result.fields) {
                    // If it's a simple field (not already aliased)
                    if (!field.includes(" AS ")) {
                        const parts = field.split(".");
                        const tableName = parts[0];
                        const columnName = parts[1];
                        const aliasName = `${prefix}${columnName}`;
                        fields.push(`${tableName}.${columnName} AS ${aliasName}`);
                    } else {
                        fields.push(field);
                    }
                }

                joins.push(...result.joins);
            }
        }

        return { fields, joins };
    }
}