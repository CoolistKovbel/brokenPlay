"use client";

import { cn } from "@/lib/utils";
import { Channel, ChannelType, Group, MemberRole } from "@prisma/client";
import { Edit, Hash, Lock, Mic,  Video } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import React from "react";
import { ActionTooltip } from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

interface ServerChannelProps {
  channel: Channel;
  server: Group;
  role?: MemberRole;
}


function ServerChannel({ channel, server, role }: ServerChannelProps) {
  const params = useParams();
  const router = useRouter();

  const { onOpen } = useModal();


  console.log(params, "from server side bar")

  const onClickV = () => {
    router.push(`/kittybowl/${params?.groupId}/channels/${channel.id}`)
  }

  return (
    <button
      onClick={onClickV}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-orange-700/10 transition mb-1"
      )}
    >
      {/* <Icon className="flex-shrink-0 w-5 h-5 text-zinc-700 " /> */}
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600  transition",
        )}
      >
        channel name
      </p>

      <div className="ml-auto flex items-center gap-x-2">
            <ActionTooltip label="Edit">
                <Edit onClick={() => onOpen("editChannel", {server, channel})} className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 transition"/>
            </ActionTooltip>
        </div>

        <Lock
          className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400"
        />
      
    </button>
  );
}

export default ServerChannel;
