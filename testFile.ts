import { PrismaReborn } from "./reborn-client/prismaReborn";

function main() {
    let rebornClient = new PrismaReborn();

    const query = rebornClient.user.findMany({
        select: {
            username: true,
            firstName: true,
            city: {
                select: {
                    name: true
                }
            }
        }
    });
    console.log(query);
}

main()