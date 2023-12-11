"use client"

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ActionTooltip } from "../action-tooltip"

import { getAllChannels } from "@/lib/web3";
import { useEffect, useState } from "react"




export const NavigationItem = () => {
    const [servers , setServers] = useState([])
    const params = useParams()
    const router = useRouter()

    const onClick = () => {
        router.push(`/kittybowl/`)
    }

      // Finds gorup uisng profile iD
  useEffect(() => {
    const xyz = async () => {
        const ss = await getAllChannels()
        setServers(ss)
    }
    xyz()
  },[])


    return (
        <div className="mb-4 text-center flex items-center justify-center flex-col gap-4">

            {
                servers.map((server:any) => (
                    <ActionTooltip key={server.id.toString()} side="right" align="center" label={server.name.toString()}>
                        <button onClick={onClick} className="group relative flex items-center flex-col">
                            
                            <div className={cn("relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden")}>
                                <Image 
                                    fill
                                    src={`/groups/${server.id.toString()}`}
                                    alt="channel"
                                />
                            </div>  
                            help - 0xB12856680497d04339aCdBfecE7ed7E879D98b22
                            <div className={cn("absolute right-0 bg-primary rounded-r-full transition-all w-[4px]" )}/>
                        </button>
                    </ActionTooltip>
                ))
            }


        </div>
    )
}