import { User } from "@/lib/current-profile"
import { prisma } from "@/lib/db"
import { writeFile } from "fs/promises"
import { NextResponse } from "next/server"

export async function PATCH(req: Request, {params }:  {params: {groupId: string}}) {
    try {
        let path;

        const profile = await User()
        const body = await req.formData()
        const name = body.get("name")?.toString()
        const imageUrl: File | null = body.get("imageUrl") as File

        console.log(profile, "This is the profile from groupID pathc")
        console.log(name, "This is the name from groupID pathc")
        console.log(imageUrl, "This is the imageUrl from groupID pathc")

        if(imageUrl !== null) {
            const fileBuffer = await (imageUrl as File).arrayBuffer();
            const buffer = Buffer.from(fileBuffer);
            path = `${process.cwd()}/public/groups/${crypto.randomUUID() + imageUrl.name}`;
            await writeFile(path, buffer)
            path = path.split(`${process.cwd()}/public/groups/`)[1]

        } else if(imageUrl === "") {
            const group = await prisma.group.findUnique({
                where: {
                    id: params.groupId,
                },
            })

            console.log(group?.imageUrl)
            path = group?.imageUrl
        }




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
                imageUrl: path
            }
        })


        return NextResponse.json(server)
        
    } catch (error) {
        console.log(error, "[SERVER_ID_PATCH")
        return new NextResponse("internal error", {status: 500})
    }
} 