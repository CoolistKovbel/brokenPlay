import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import SideBarAction from "./sidebar-action";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NavigationItem } from "./navigation-item";




async function SidebarTool() {
  
  // Check to see if user exists
  const session = await getServerSession(authOptions);

  // Sends user
  if (!session) {
    return redirect("/sign-in");
  }
  

  return (
    <div className="space-y-2 flex flex-col items-center h-full text-[orange] w-full bg-[#444] pb-[10px]">

      {/* image */}
      <div className="relative w-[80px] h-[80px] md:w-[110px] md:h-[110px] m-auto">
        <Image src="/DarkHorsev12-test.png" alt="random iamge" fill />
      </div>

      <Separator className="h-[2px] bg-[#222] rounded-md w-10 mx-auto" />

      {/* Groups */}
      <ScrollArea className="flex-1 w-full">
        <NavigationItem />
      </ScrollArea>

      {/* Models */}
      <SideBarAction />
    </div>
  );
}

export default SidebarTool;
