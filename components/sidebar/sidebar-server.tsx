import { prisma } from "@/lib/db";

import { ChannelType } from "@prisma/client";
import { redirect } from "next/navigation";
import { ServerHeader } from "./sidebar-server-header";
import { User } from "@/lib/current-profile";

interface ServerSidebarProps {
  serverId: string;
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
    </div>
  );
};
