
import { redirect } from "next/navigation";


import { User } from "@/lib/current-profile";
import { prisma } from "@/lib/db";
import { ChatHeader } from "@/components/chat/chat-header";


interface ChannelIdPageProps {
  params: {
    groupId: string;
    channelId: string;
  }
}

const ChannelIdPage = async ({
  params
}: ChannelIdPageProps) => {

  const profile = await User();

  if (!profile) {
    return redirect("/sign-in");
  }

  const channel = await prisma.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });

  const member = await prisma.member.findFirst({
    where: {
      groupID: params.groupId,
      profileId: profile.id,
    }
  });

  if (!channel || !member) {
    redirect("/");
  }

  return ( 
    <div className="bg-[#313373] flex flex-col h-full pt-[100px]">
        <ChatHeader
            name={channel.name}
            groupId={channel.groupID}
            type="channel"
        />
        <div className="flex-1">
          Messages
        </div>
    </div>
   );
}
 
export default ChannelIdPage;