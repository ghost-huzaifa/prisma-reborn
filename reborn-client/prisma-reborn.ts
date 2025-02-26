import { PrismaModel } from "./prisma-model";
import { DMMFModel } from "./specs/models";
import { dmmf } from "./specs/project-dmmf";

export class PrismaReborn {
    public CcmGoalTemplate: PrismaModel;
    constructor() {
        this.CcmGoalTemplate = new PrismaModel(dmmf.models.find(model => model.name === "CcmGoalTemplate"));
        // dmmf.models.forEach((model: DMMFModel) => {
        //     this[model.name.toLowerCase()] = new PrismaModel(model);
        // })
    }
}