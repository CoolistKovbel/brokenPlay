// Dapp layout that will hold most pages

import DappHeader from "@/components/dapp-header";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <DappHeader />
      <main className="h-full">{children}</main>
    </div>
  );
}

export default dAppLayout;
