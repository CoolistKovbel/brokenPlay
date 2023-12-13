"use client"

import React, { useEffect, useState } from 'react'
import { ServerHeader } from './sidebar-server-header'
import { ScrollArea } from '../ui/scroll-area'
import { ServerSearch } from './sidebar-server-search'
import { Separator } from '../ui/separator'
import { ServerSection } from './sidebar-server-section'
import ServerChannel from './sidebar-server-channels'
import { ServerMember } from './sidebar-server-members'
import { getAllChannels } from '@/lib/web3'

interface SideBarComponentWrapperProps {
    groupId: string;
  }

function SideBarComponentWrapper({groupId}:SideBarComponentWrapperProps) {


    const [singleGroup, SetSingleGroup] = useState<any>([])



    useEffect(() => {

        const xxyz = async() =>{
          const x =  await getAllChannels()
          SetSingleGroup(x[Number(groupId) - 1])
          console.log(x[groupId])
        }
        xxyz()
    
      },[groupId])


  return (
    <div className="flex flex-col h-full text-primary w-full bg-[#222] pt-0 md:pt-[100px] p-4">
        <ServerHeader server={singleGroup}/>

        <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ServerSearch />
        </div>

        <Separator className="bg-zinc-200 rounded-md my-2" />
        <div className="mb-2">
          <ServerSection label="Lounge 🌋"  server={singleGroup}/>
        </div>
        {/* Channel */}
        <ServerChannel />

        {/* Text channels */}
        <div className="space-y-[2px]">
          <ServerMember />
        </div>
      </ScrollArea>
    </div>
  )
}

export default SideBarComponentWrapper