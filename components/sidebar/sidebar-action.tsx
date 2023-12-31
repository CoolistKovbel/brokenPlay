"use client";
import React from "react";
import { useModal } from "@/hooks/use-modal-store";
import { ActionTooltip } from "../ui/action-tooltip";
import { Plus } from "lucide-react";

export function SideBarAction() {
  const { onOpen } = useModal();

  return (
    <ActionTooltip side="right" align="center" label="wok">
      <button
        className="group flex items-center cursor-pointer"
        onClick={() => onOpen("createServer")}
      >
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-[#111] group-hover:bg-emerald-500">
          <Plus
            className="group-hover:text-white transition text-emerald-500"
            size={25}
          />
        </div>
      </button>
    </ActionTooltip>
  );
}

export default SideBarAction;
