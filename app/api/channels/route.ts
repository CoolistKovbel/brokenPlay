
import { User } from "@/lib/current-profile"
import { prisma } from "@/lib/db"
import { MemberRole } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {

        const profile = await User()

        const { name, type } = await req.json()
        const { searchParams} = new URL(req.url)

        console.log(searchParams)
        
        const serverId = searchParams.get("serverId")


        if(!profile) {
            return new NextResponse("un auth account", {status: 401})
        }

        if(!serverId) {
            return new NextResponse("Server id mission", {status: 400})
        }


        if(name === "general") {
            return new NextResponse("name connot be 'general' ", {status: 400})
        }


        const server = await prisma.group.update({
            where: {
                id: serverId,
                members: {
                    some: {
                        profileId: profile.id,
                        role: {
                            in: [MemberRole.ADMIN, MemberRole.MODERATOR]
                        }
                    }
                }
            },
            data: {
                channels: {
                    create: {
                        profileId: profile.id,
                        name,
                        type
                    }
                }
            }
        })


        return NextResponse.json(server, {status: 200})
        
    } catch (error) {
        console.log("channel posts", error)
        return new NextResponse("internal error", {status: 500})
    }
}