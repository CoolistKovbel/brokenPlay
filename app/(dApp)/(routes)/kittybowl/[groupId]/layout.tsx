// App version 1 layout

import { ServerSidebar } from "@/components/sidebar/sidebar-server";
import SidebarTool from "@/components/sidebar/sidebar-tool";
import { User } from "@/lib/current-profile";
import { redirect } from "next/navigation";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { groupId: string };
}) => {
  console.log(params, "Ther is a sservier id here");

  const dd = await User();



  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[140px] z-30 flex-col fixed pt-[10px]  md:pt-[100px] inset-y-0">
        <SidebarTool />
      </div>
      <div className="hidden md:flex h-full w-96 z-20 flex-col pl-[120px] fixed inset-y-0">
        <ServerSidebar groupId={params.groupId} />
      </div>
      <main className="h-[100vh]  md:pl-[288px] float-right">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
