import { ChatHeader } from "@/components/chat/chat-header";
import { getOrCreateConversation } from "@/lib/conversation";
import { User } from "@/lib/current-profile";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

interface MemberIdPage {
    params: {
      memberId: string;
      groupId: string;
    }
  }

const MemberIdPage = async ({params} : MemberIdPage) => {

    const profile = await User()


    if(!profile) {
        return redirect("/sign-in")
    }
    

    const currentMemeber = await prisma.member.findFirst({
        where: {
            groupID: params.groupId,
            profileId: profile.id
        }
    })

    if(!currentMemeber){
        return redirect('/sign-in')
    }

    
    const conversation = await getOrCreateConversation(currentMemeber.id, params.memberId)

    if(!conversation) {
        return redirect(`/groups/${params.groupId}`)
      }

    const { memberOne, memberTwo } = conversation

    const otherMember = memberOne.profileId === profile.id ? memberTwo : memberOne
    return (
        <div className="pt-[100px] w-full h-full bg-orange">
            <ChatHeader
                imageUrl={otherMember.profile.image || ""}
                name={otherMember.profile.username}
                groupId={params.groupId}
                type="conversation"
            />
        </div>
    )
}

export default MemberIdPage