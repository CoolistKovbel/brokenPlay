"use client"

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { useParams, useRouter } from "next/navigation";



export const ServerSearch = () => {

    const [open,setOpen] = useState(false)
    const router = useRouter()
    const params = useParams()



    return (
        <>
           <button onClick={() => setOpen(true)} className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-500 transition">
                <Search className="w-4 h-4 text-yellow-900" />
                <p className="font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 transition">
                    search
                </p>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] ml-auto">
                    <span className="text-xs">CMD</span>K
                </kbd>
           </button>

           <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="search all channels and memeber" />
                <CommandList>
                    <CommandEmpty>
                        No results found
                    </CommandEmpty>
                    
                </CommandList>
           </CommandDialog>
        </>
    )
}