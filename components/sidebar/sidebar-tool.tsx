import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import SideBarAction from "./sidebar-action";
import { prisma } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NavigationItem } from "./navigation-item";



async function SidebarTool() {
  
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  }

  // Finds gorup uisng profile iD
  const servers = await prisma.group.findMany({
    where: {
      members: {
        some: {
          profileId: session.user.id,
        },
      },
    },
  });

  // // if(server) {
  // //   return redirect(`/kittybowl/${server.id}`)
  // // }

  // if(server === null || server === undefined){
  //   return <InitialModal />
  // }

  // console.log(servers, "All the serers from the sidebar")

  

  return (
    <div className="space-y-2 flex flex-col items-center h-full text-[orange] w-full bg-[#444] pt-[10px] md:pt-[120px] pb-[10px]">
      {/* image */}
      <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] m-auto">
        <Image src="/DarkHorsev12-test.png" alt="random iamge" fill />
      </div>

      <Separator className="h-[2px] bg-[#222] rounded-md w-10 mx-auto" />

      {/* Groups */}
      <ScrollArea className="flex-1 w-full">

        {servers.map((serv) => (
          <div key={serv.id} className="mb-4 text-center flex items-center justify-center">
            <NavigationItem
              id={serv.id}
              name={serv.name}
              imageUrl={`${serv.imageUrl}`}
            />
          </div>
        ))}
        
      </ScrollArea>

      {/* Models */}
      <SideBarAction />
    </div>
  );
}

export default SidebarTool;
