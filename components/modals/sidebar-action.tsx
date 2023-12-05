"use client";
import React from 'react'
import { useModal } from '../model-store';
import { ActionTooltip } from '../ui/action-tooltip';
import { Plus } from "lucide-react";

export function SideBarAction() {

    const {onOpen} = useModal()

  return (
    <ActionTooltip side="right" align="center" label="ass a server">
    <button className="group flex items-center" onClick={() => onOpen("createServer")}>
      <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center dark:bg-yellow-700 group-hover:bg-emerald-500">
        <Plus
          className="group-hover:text-white transition text-emerald-500"
          size={25}
        />
      </div>
    </button>
  </ActionTooltip>
  )
}

export default SideBarAction