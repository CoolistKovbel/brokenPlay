import { prisma } from "@/lib/db";

import { ChannelType, MemberRole } from "@prisma/client";
import { redirect } from "next/navigation";
import { ServerHeader } from "./sidebar-server-header";
import { User } from "@/lib/current-profile";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Hash, Mic, Shield, ShieldCheck, Video } from "lucide-react";
import { ServerSearch } from "./sidebar-server-search";
import { ServerSection } from "./sidebar-server-section";
import ServerChannel from "./sidebar-server-channels";
import { ServerMember } from "./sidebar-server-members";
import { ServerWithMembersWithProfiles } from "@/type";



interface ServerSidebarProps {
  serverId: string;
}


const iconMap = {
  [ChannelType.TEXT]: <Hash className="mr-2 h-4 w-4"/>,
  [ChannelType.AUDIO]: <Mic className="mr-2 h-4 w-4"/>,
  [ChannelType.VIDEO]: <Video className="mr-2 h-4 w-4"/>
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: <ShieldCheck className="h-4 w-4 mr-2 text-indigo-500" />,
  [MemberRole.ADMIN]: <Shield className="h-4 w-4 mr-2 text-indigo-500" />,
}

export const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
  console.log(serverId, "DE servider is heres");

  const profile = await User();

  const server = await prisma.group.findUnique({
    where: {
      id: serverId,
    },
    include: {
      channels: {
        where: {
          groupID: serverId,
        },
      },
      members: {
        include: {
          profile: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  const textChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.TEXT
  );
  const auidioChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.AUDIO
  );
  const videoChannels = server?.channels.filter(
    (channel) => channel.type === ChannelType.VIDEO
  );

  const members = server?.members.filter(
    (member) => member.profileId !== profile?.id
  );

  if (!profile) {
    return redirect("/");
  }

  const role = server?.members.find(
    (member) => member.profileId === profile.id
  )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full bg-[#222] pt-[100px]">
      <ServerHeader server={server} role={role} />
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">

          <ServerSearch
            data={[
              {
                label: "Text Channels",
                type: "channel",
                data: textChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                })),
              },
              {
                label: "Voice Channels",
                type: "channel",
                data: auidioChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: iconMap[channel.type],
                })),
              },
              // video? 
              {
                label: "Members",
                type: "member",
                data: members?.map((member) => ({
                  id: member.id,
                  name: member.profile.username,
                  icon: roleIconMap[member.role],
                })),
              },
            ]}
          />

        </div>
        <Separator className="bg-zinc-200 rounded-md my-2" />

        {!!textChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ChannelType.TEXT}
              role={role}
              label="text channels"
            />
          </div>
        )}
        {textChannels?.map((channel) => (
          <ServerChannel
            key={channel.id}
            channel={channel}
            role={role}
            server={server}
          />
        ))}

        {/* Text channels */}

        {!!auidioChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ChannelType.AUDIO}
              role={role}
              label="voice channels"
            />
          </div>
        )}
        {auidioChannels?.map((channel) => (
          <ServerChannel
            key={channel.id}
            channel={channel}
            role={role}
            server={server}
          />
        ))}

        {!!videoChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ChannelType.VIDEO}
              role={role}
              label="Video channels"
            />
          </div>
        )}
        {videoChannels?.map((channel) => (
          <ServerChannel
            key={channel.id}
            channel={channel}
            role={role}
            server={server}
          />
        ))}

        {!!members?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="members"
              role={role}
              label="Members"
              server={server}
            />
            <div className="space-y-[2px]">
              {members.map((member) => (
                <ServerMember key={member.id} member={member} server={server} />
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
