"use client";

import { Group, Member, MemberRole, Profile} from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Group;
}



export const ServerMember = ({
  member,
  server
}: ServerMemberProps) => {
  const params = useParams();
  const router = useRouter();


  const onClick = () => {
    router.push(`/kittybowl/${params?.groupId}/conversations/${member.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10  transition mb-1",
      )}
    >
      <UserAvatar 
        src={""}
        className="h-8 w-8 md:h-8 md:w-8"
      />
      <p
        className={cn(
          "font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
        
        )}
      >
        profile name
      </p>

    </button>
  )
}