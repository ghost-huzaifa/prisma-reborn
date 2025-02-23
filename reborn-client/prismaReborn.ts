import { PrismaModel } from "./prismaModel";
import { DMMFModel } from "./specs/models";
import { dmmf } from "./specs/project-dmmf";

export class PrismaReborn {
    public user: PrismaModel;
    constructor() {
        this.user = new PrismaModel(dmmf.models[0]);
        // dmmf.models.forEach((model: DMMFModel) => {
        //     this[model.name.toLowerCase()] = new PrismaModel(model);
        // })
    }
}