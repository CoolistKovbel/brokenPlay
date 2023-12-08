
import { prisma } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { User } from "@/lib/current-profile";

export async function POST(req: Request) {
    try {
        const profile = await User()
        const bodyV = await req.formData();
        const name = bodyV.get("name") as string
        const image: File | null = bodyV.get("imageUrl") as File

        // console.log(bodyV)
        // console.log(name)
        // console.log(image, "from the server")
        // console.log(profile, "logging from the gorups routes")

        
        const fileBuffer = await (image as File).arrayBuffer();
        const buffer = Buffer.from(fileBuffer);
    
        
        const path = `${process.cwd()}/public/groups/${crypto.randomUUID() + image.name}`;
        await writeFile(path, buffer)


        if(!profile) {
            return new NextResponse("unauthroized", {status: 401})
        }


        const server = await prisma.group.create({
            data: {
                profileId: profile.id,
                name,
                imageUrl: path.split(`${process.cwd()}/public/groups/`)[1],
                inviteCode: crypto.randomUUID(),
                channels: {
                    create: [
                        {
                            name: "general", profileId: profile.id
                        }
                    ]
                },
                members: {
                    create: [
                        {profileId: profile.id, role: MemberRole.ADMIN}
                    ]
                }
            }
        })


        return NextResponse.json(server, {status: 200})
        
    } catch (error) {
        console.log("[Servers_POST", error)
        return new NextResponse("internal error", {status:500})
    }
}