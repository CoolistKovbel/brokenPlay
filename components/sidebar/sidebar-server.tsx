
import { prisma } from "@/lib/db";

import { ChannelType } from "@prisma/client";
import { redirect } from "next/navigation";
import { ServerHeader } from "./sidebar-server-header";


interface ServerSidebarProps {
    serverId: string;
}

export const ServerSidebar = async ({serverId}: ServerSidebarProps) => {

    console.log(serverId)
    
    const server = await prisma.group.findUnique({
        where: {
            id: serverId
        },
        include: {
            channels: {
                orderBy: {
                    createdAt: "asc"
                }
            },
            members: {
                include: {
                    profile: true
                },
                orderBy: {
                    role: "asc"
                }
            }
        },
    })

    console.log(server)

    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT)
    const auidioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO)
    const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO)

    // const members = server?.members.filter((member) => member.profileId !== profile.id)


    if(!server){
        return redirect('/')
    }

    // const role = server.members.find((member) => member.profileId === profile.id)?.role


    return (
        <div className="flex flex-col h-full text-primary w-full dark:bg-[#111] bg-[#222]">
            <ServerHeader 
                server={server}
                role={role || "ADMIN"}
            />
        </div>
    )
}