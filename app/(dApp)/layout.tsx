import DappHeader from "@/components/dapp-header";
// import SidebarTool from "@/components/sidebar/sidebar-tool";

import React from "react";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="w-full h-full">
        <DappHeader />
        {children}
      </div>
  );
}

export default dAppLayout;
