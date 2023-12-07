import { User } from "@/lib/current-profile"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    {params}: {params: {groupId: string}}
) {
    try {

        const profile = await User()

        if(!profile) {
            return new NextResponse("unaithorized", {status: 401})
        }
        if(!params.groupId) {
            return new NextResponse("no ide", {status: 400})
        }

        const server = await prisma.group.update({
            where: {
                id: params.groupId,
                profileId: profile.id
            },
            data: {
                inviteCode: crypto.randomUUID()
            }
        })


        return NextResponse.json(server)
        
    } catch (error) {
        console.log("[SERVER_ID", error)
        return new NextResponse("internal errro", {status: 500})
    }
}