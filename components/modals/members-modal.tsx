"use client";

import axios from "axios";
import { Check, Copy, Gavel, Loader2, MoreVertical, RefreshCw, Shell, ShieldCheck, ShieldIcon, ShieldQuestion, Siren } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ServerWithMembersWithProfiles } from "@/type";
import { useRouter } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MemberRole } from "@prisma/client";
import { UserAvatar } from "../user-avatar";
import qs from "query-string"

const roleIconMap = {
  "GUEST": null,
  "MODERATOR": <Shell className="h-4 w-4 ml-2 text-yellow-400" />,
  "ADMIN": <Siren className="h-4 w-4 text-rose-500" />
}


export const MembersModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const [loadingId, setLoadingId] = useState("")
  const router = useRouter()

  const isModalOpen = isOpen && type === "members";
  const { server } = data as {server: ServerWithMembersWithProfiles};

  const onRoleChange = async (memberId: string, role: MemberRole ) => {
    try {
      setLoadingId(memberId)

      const url = qs.stringifyUrl({
        url: `/api/members/${memberId}`,
        query: {
          groupId: server?.id,
          memberId,
        }
      })

      const response = await axios.patch(url, {role})
      
      router.refresh()
      onOpen("members", {server: response.data})


    } catch (error) {
      console.log(error)
    } finally {
      setLoadingId("")
    }
  }


  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>

      <DialogContent className="bg-white text-black p-0 overflow-hidden">

      <DialogHeader className="pt-8 px-6">

        <DialogTitle className="text-2xl text-center font-bold">
          Manage Members
        </DialogTitle>

        <DialogDescription className="text-center text-black-200 font-bold lowercase">
          {server?.members?.length} Members
        </DialogDescription>

      </DialogHeader>

        <ScrollArea className="mt-8 max-h-[420px] pr-6">
        {server?.members.map((member) => (
            <div key={member.id} className="flex items-center gap-x-2 mb-6">
                <UserAvatar src={member.profile.image || ""} />

                <div className="flex flex-col gap-y-1">
                  <div className="text-xs font-semibold flex items-center gap-x-2">
                    {member.profile.username}
                    {roleIconMap[member.role]}
                  </div>
                  <p className="text-xs text-green-500">
                    {member.profile.eddress || member.profile.email}
                  </p>
                </div>

                {server.profileId !== member.profileId && loadingId !== member.id && (
                  <div className="ml-auto">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVertical className="h-4 w-4 text-pink-900" />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent side="left">
                        <DropdownMenuSub>

                          <DropdownMenuSubTrigger className="flex items-center">
                            <ShieldQuestion className="w-4 h-4 mr-2" />
                            <span>Role</span>
                          </DropdownMenuSubTrigger>

                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>

                              <DropdownMenuItem onClick={() => onRoleChange(member.id, "GUEST")}>
                                <ShieldIcon className="h-4 w-4 mr-2" />
                                Guest
                                {member.role === "GUEST" && (
                                  <Check className="h-4 w-4 ml-auto" />
                                )}
                              </DropdownMenuItem>

                              <DropdownMenuItem onClick={() => onRoleChange(member.id, "MODERATOR")}>
                                <ShieldCheck className="h-4 w-4 mr-2" />
                                Moderator
                                {member.role === "MODERATOR" && (
                                  <Check className="h-4 w-4 ml-auto" />
                                )}
                              </DropdownMenuItem>

                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                          <Gavel className="h-4 w-4 mr-2" />
                          Kick
                        </DropdownMenuItem>

                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
                {loadingId === member.id && (
                  <Loader2 className="animate-spin text-green-500 ml-auto w-4 h-4" />
                )}
            </div>
          ))}
        </ScrollArea>

      </DialogContent>

    </Dialog>
  )
}