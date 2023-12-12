
import { redirect } from "next/navigation";
import { User } from "@/lib/current-profile";

import SideBarComponentWrapper from "./SideBarComponentWrapper";

interface ServerSidebarProps {
  groupId: string;
}


export const ServerSidebar = async ({ groupId }: ServerSidebarProps) => {
  console.log(groupId, "DE servider is heres");

  const profile = await User();


  if (!profile) {
    return redirect("/");
  }

  return (
    <>
      <SideBarComponentWrapper groupId={groupId}/>
    </>
  );
};
