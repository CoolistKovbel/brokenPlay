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

interface ServerSidebarProps {
  groupId: string;
}


export const ServerSidebar = async ({ groupId }: ServerSidebarProps) => {
  console.log(groupId, "DE servider is heres");

  const profile = await User();

  // const server:ServerWithMembersWithProfiles  = await prisma.group.findUnique({
  //   where: {
  //     id: groupId,
  //   },
  //   include: {
  //     channels: {
  //       where: {
  //         groupID: groupId,
  //       },
  //     },
  //     members: {
  //       include: {
  //         profile: true,
  //       },
  //       orderBy: {
  //         role: "asc",
  //       },
  //     },
  //   },
  // });

  // const textChannels = server?.channels.filter(
  //   (channel) => channel.type === ChannelType.TEXT
  // );
  // const auidioChannels = server?.channels.filter(
  //   (channel) => channel.type === ChannelType.AUDIO
  // );

  // const members = server?.members.filter(
  //   (member) => member.profileId !== profile?.id
  // );

  if (!profile) {
    return redirect("/");
  }

  // const role = server?.members.find(
  //   (member) => member.profileId === profile.id
  // )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full bg-[#222] pt-0 md:pt-[100px] p-4">
      <ServerHeader />

      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ServerSearch />
        </div>

        <Separator className="bg-zinc-200 rounded-md my-2" />
        <div className="mb-2">
          <ServerSection />
        </div>
        {/* Channel */}
        <ServerChannel />

        {/* Text channels */}
        <div className="space-y-[2px]">
          <ServerMember />
        </div>
      </ScrollArea>
    </div>
  );
};
