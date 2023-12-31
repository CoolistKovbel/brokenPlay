"use client";


import { MemberRole } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings,
  Trash,
  User,
  UserPlus,
} from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

interface ServerHeaderProps {
  server: any;
  role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const { onOpen } = useModal();

  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <div>
      <DropdownMenu>
        
        <DropdownMenuTrigger className="focus:outline-none" asChild>
          <button className=" text-yellow-500 w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 border-b-2 hover:bg-slate-700/10 transition">
            <span>{server?.name?.toString()}</span>
            <ChevronDown className="h-5 w-5 ml-auto" />
          </button>
       
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
          {isModerator && (
            <DropdownMenuItem
              onClick={() => onOpen("invite", { server })}
              className="text-indigo-600 px-3 py-2 text-sm cursor-pointer"
            >
              Invite People
              <UserPlus className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isAdmin && (
            <DropdownMenuItem onClick={() => onOpen("editServer", { server })} className="text-yellow-600 px-3 py-2 text-sm cursor-pointer">
              Server Setting
              <Settings className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isAdmin && (
            <DropdownMenuItem onClick={() => onOpen("members", { server })} className="text-yellow-600 px-3 py-2 text-sm cursor-pointer">
              Manage Members
              <User className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isModerator && (
            <DropdownMenuItem onClick={() => onOpen("createChannel", { server })} className="text-indigo-600 px-3 py-2 text-sm cursor-pointer">
              Create Channel
              <PlusCircle className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isModerator && <DropdownMenuSeparator />}
          {!isAdmin && (
            <DropdownMenuItem className="text-rose-600 px-3 py-2 text-sm cursor-pointer">
              leave Server
              <LogOut className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>

      </DropdownMenu>
    </div>
  );
};
