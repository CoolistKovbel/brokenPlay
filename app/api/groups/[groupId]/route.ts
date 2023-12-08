import { User } from "@/lib/current-profile"
import { prisma } from "@/lib/db"
import { writeFile } from "fs/promises"
import { NextResponse } from "next/server"

export async function PATCH(req: Request, {params }:  {params: {groupId: string}}) {
    try {

        const profile = await User()
        const body = await req.formData()
        const name = body.get("name")?.toString()
        const imageUrl: File | null = body.get("imageUrl") as File

        console.log(profile, "This is the profile from groupID pathc")
        console.log(name, "This is the name from groupID pathc")
        console.log(imageUrl, "This is the imageUrl from groupID pathc")


        const fileBuffer = await (imageUrl as File).arrayBuffer();
        const buffer = Buffer.from(fileBuffer);
    
        // console.log(buffer, "this is a buffer");
    
        const path = `${process.cwd()}/public/groups/${crypto.randomUUID() + imageUrl.name}`;

        await writeFile(path, buffer)

        // console.log(path.split(`${process.cwd()}/public/groups/`)[1])

        if(!profile) {
            return new NextResponse("unaithorized", {status: 401})
        }

        const server = await prisma.group.update({
            where: {
                id: params.groupId,
                profileId: profile.id
            },
            data: {
                name,
                imageUrl: path.split(`${process.cwd()}/public/groups/`)[1]
            }
        })


        return NextResponse.json(server)
        
    } catch (error) {
        console.log(error, "[SERVER_ID_PATCH")
        return new NextResponse("internal error", {status: 500})
    }
} 