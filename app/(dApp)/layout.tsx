// Dapp layout that will hold most pages

import DappHeader from "@/components/dapp-header";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <DappHeader />
      <main className="w-full min-h-[100vh]">
        {children}
      </main>
    </div>
  );
}

export default dAppLayout;
 