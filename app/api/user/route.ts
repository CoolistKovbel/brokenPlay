import  {User} from "../../../lib/current-profile";
import { prisma } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {

        const {name, imageUrl} = await req.json()
        const profile =  User()

        console.log(profile)

        if(!profile) {
            return new NextResponse("unauthroized", {status: 401})
        }


        // const server = await prisma.group.create({
        //     data: {
        //         profileId: profile.id,
        //         name,
        //         imageUrl,
        //         inviteCode: crypto.randomUUID(),
        //         channels: {
        //             create: [
        //                 {
        //                     name: "general", profileId: profile.id
        //                 }
        //             ]
        //         },
        //         members: {
        //             create: [
        //                 {profileId: profile.id, role: MemberRole.ADMIN}
        //             ]
        //         }
        //     }
        // })


        return NextResponse.json(profile, name)
        
    } catch (error) {
        console.log("[Servers_POST", error)
        return new NextResponse("internal error", {status:500})
    }
}