import { PrismaReborn } from "./reborn-client/prisma-reborn";

function main() {
    let rebornClient = new PrismaReborn();

    const query = rebornClient.CcmGoalTemplate.findMany({
        select: {
            ccmGoalTemplateId: true,
            glTitle: true,
            ccmCarePlanTemplate: {
                select: {
                    title: true,
                }
            }
        }
    });
    console.log(query);
}

main()