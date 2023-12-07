import { User } from "@/lib/current-profile"
import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PATCH(req: Request, {params }:  {params: {serverId: string}}) {
    try {

        const profile = await User()
        const {name, imageUrl} = await req.json()

        if(!profile) {
            return new NextResponse("unaithorized", {status: 401})
        }

        const server = await prisma.group.update({
            where: {
                id: params.serverId,
                profileId: profile.id
            },
            data: {
                name,
                imageUrl
            }
        })


        return NextResponse.json(server)
        
    } catch (error) {
        console.log(error, "[SERVER_ID_PATCH")
        return new NextResponse("internal error", {status: 500})
    }
} 