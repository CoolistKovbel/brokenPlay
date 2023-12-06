
import { User } from "@/lib/current-profile";
import { prisma } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        let {name, imageUrl} = await req.json()

        const profile =  User()

        if(!profile) {
            return new NextResponse("unauthroized", {status: 401})
        }

        if(imageUrl){
            const fileBuffer = await (imageUrl as Blob).arrayBuffer();
            const buffer = Buffer.from(fileBuffer);
            console.log(buffer);

            let path = `${process.cwd()}/public/${imageUrl.name}`;
            let p = `${path.split("/Users/shpintz/Desktop/hml")[1]}`;
            await writeFile(p, buffer);
      
            imageUrl = p;
      
            console.log(`open ${p} to see the uploaded file`);
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