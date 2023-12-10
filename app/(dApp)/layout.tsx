// Dapp layout that will hold most pages 

import DappHeader from "@/components/dapp-header";
import SidebarTool from "@/components/sidebar/sidebar-tool";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="w-full h-full">
        <DappHeader />


        <div className="h-full">
            <div className="hidden md:flex h-full w-[120px] z-30 flex-col fixed inset-y-0">
              <SidebarTool />
            </div>
            <main className="md:pl-[120px] h-full">
                {children}
            </main>
        </div>


        
      </div>
  );
}

export default dAppLayout;
