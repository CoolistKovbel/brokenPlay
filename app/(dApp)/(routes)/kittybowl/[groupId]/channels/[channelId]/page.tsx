
import { redirect } from "next/navigation";


import { User } from "@/lib/current-profile";
import { ChatHeader } from "@/components/chat/chat-header";
import ChatWrapperComponent from "@/components/chat/ChatWrapperComponent";


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

  console.log(`Server components from main id page group${params.groupId} channel ${params.channelId}`)

  return ( 
    <div className="bg-[#313373] flex flex-col h-[100vh] pt-[100px]">

      <ChatWrapperComponent groupID={params.groupId} channelID={params.channelId} />
        
    </div>
   );
}
 
export default ChannelIdPage;