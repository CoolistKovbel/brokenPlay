
import { User } from "@/lib/current-profile";
import { prisma } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req: Request) {
    try {

        let {name, imageUrl} = await req.json()

        const profile =  User()

        console.log(profile, "propfeule grom groups")
        console.log(name, imageUrl)

        if(!profile) {
            return new NextResponse("unauthroized", {status: 401})
        }

        if(imageUrl){
            await writeFile(imageUrl.path, imageUrl.buffer)
        }

        

        const server = await prisma.group.create({
            data: {
                profileId: profile,
                name,
                imageUrl,
                inviteCode: crypto.randomUUID(),
                channels: {
                    create: [
                        {
                            name: "general", profileId: profile
                        }
                    ]
                },
                members: {
                    create: [
                        {profileId: profile, role: MemberRole.ADMIN}
                    ]
                }
            }
        })


        return NextResponse.json(server)
        
    } catch (error) {
        console.log("[Servers_POST", error)
        return new NextResponse("internal error", {status:500})
    }
}