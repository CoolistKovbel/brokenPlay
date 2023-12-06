import DappHeader from "@/components/dapp-header";
import SidebarTool from "@/components/sidebar/sidebar-tool";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  console.log(session, "sessoin in the dAppLayout page");

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
