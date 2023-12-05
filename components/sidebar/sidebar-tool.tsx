
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { getSession } from "next-auth/react";
import User from "@/lib/current-profile";
import { ScrollArea } from "../ui/scroll-area";
import SideBarAction from "../modals/sidebar-action";

async function SidebarTool() {
    const joined = false;



  return (
    <div className="space-y-4 flex flex-col items-center h-full text-[orange] w-full bg-[#444] py-3">
      <User />
      {/* image */}
      <div className="relative w-[120px] h-[120px] m-auto">
        <Image src="/DarkHorsev12-test.png" alt="random iamge" fill />
      </div>

      {/* Groups */}
      <div className="bg-[#222] text-center">
        <div className="p-2">
          <div className="relative w-[50px] h-[50px]">
            <Image src="/test2.png" alt="test" fill />
          </div>

          <h2>Group #001</h2>
          <p>Price: 100</p>
          {joined ? <Button>Enter Chat</Button> : <Button>Join Chat</Button>}
        </div>

        <div className="p-2">
          <div className="relative w-[100px] h-[100px]">
            <Image src="/test2.png" alt="test" fill />
          </div>
          <h2>Group #001</h2>
          <p>Price: 100</p>
          {joined ? <Button>Enter Chat</Button> : <Button>Join Chat</Button>}
        </div>

        <div className="p-2">
          <div className="relative w-[100px] h-[100px]">
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
