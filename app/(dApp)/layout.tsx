import DappHeader from "@/components/dapp-header";
import SidebarTool from "@/components/sidebar/sidebar-tool";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  console.log(session, "sessoin in the dAppLayout page");

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

  return (
    <div className=" h-full">
      {/* Header */}
      <div className="hidden md:flex h-full w-[120px] z-30 flex-col fixed inset-y-0"> 
        <SidebarTool />
      </div>


      <div className="w-full h-full">
        <DappHeader  />
        {children}
      </div>
    </div>
  );
}

export default dAppLayout;
