import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { getSession } from "next-auth/react";
import { ScrollArea } from "../ui/scroll-area";
import SideBarAction from "./sidebar-action";
import { prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";



async function SidebarTool() {
  
  const session = await getServerSession(authOptions);

  console.log(session, "sessoin in the dAppLayout page");
  const joined = session
  
  const server = await prisma.group.findFirst({
    where: {
      members:{
        some: {
          profileId: session?.user.id
        }
      }
    }
  })

  if(server) {
    return redirect(`/kittybowl/${server.id}`)
  }

  if(server === null || server === undefined){
    return <InitialModal />
  }

  

  return (
    <div className="space-y-2 flex flex-col items-center h-full text-[orange] w-full bg-[#444] pt-[120px]">
      {/* image */}
      <div className="relative w-[120px] h-[120px] m-auto">
        <Image src="/DarkHorsev12-test.png" alt="random iamge" fill />
      </div>

      <Separator className="h-[2px] bg-[#222] rounded-md dark:bg-[#111] w-10 mx-auto" />

      {/* Groups */}
      <div className="bg-[#222] h-full text-center overflow-auto">


        <div className="p-2">
          <div className="relative w-[25px] h-[25px] m-auto">
            <Image src="/test2.png" alt="test" fill />
          </div>

          <h2>Group #001</h2>
          <p>Price: 100</p>
          {joined ? <Button>Enter Chat</Button> : <Button>Join Chat</Button>}
        </div>

        <div className="p-2">
          <div className="relative w-[25px] h-[25px] m-auto">
            <Image src="/test2.png" alt="test" fill />
          </div>
          <h2>Group #001</h2>
          <p>Price: 100</p>
          {joined ? <Button>Enter Chat</Button> : <Button>Join Chat</Button>}
        </div>

        <div className="p-2">
          <div className="relative w-[25px] h-[25px] m-auto">
            <Image src="/test2.png" alt="test" fill />
          </div>
          <h2>Group #001</h2>
          <p>Price: 100</p>
          {joined ? <Button>Enter Chat</Button> : <Button>Join Chat</Button>}
        </div>

        
      </div>

      {/* Models */}
      <SideBarAction />
    </div>
  );
}

export default SidebarTool;
