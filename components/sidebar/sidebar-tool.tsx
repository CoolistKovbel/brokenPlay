import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { getSession } from "next-auth/react";
import { ScrollArea } from "../ui/scroll-area";
import SideBarAction from "./sidebar-action";
import { prisma } from "@/lib/db";


async function SidebarTool() {
  const joined = false;

  const group = prisma.group.findMany({
    where: {
      members: {
        some: {
          profileId: "0",
        },
      },
    },
  });

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
