// Dapp layout that will hold most pages 

import DappHeader from "@/components/dapp-header";
import SidebarTool from "@/components/sidebar/sidebar-tool";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="w-full h-full">
        <DappHeader />


        <div className="h-full">

            <main className="h-full">
                {children}
            </main>
        </div>


        
      </div>
  );
}

export default dAppLayout;
