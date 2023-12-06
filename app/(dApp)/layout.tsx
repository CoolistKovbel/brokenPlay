import SidebarTool from "@/components/sidebar/sidebar-tool";
import { authOptions } from "@/lib/auth";
import { LogIn, Scroll } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

async function dAppLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className=" h-full">
      {/* Header */}
      <div className="hidden md:flex h-full w-[120px] z-30 flex-col fixed inset-y-0"> 
        <SidebarTool />
      </div>


      <div className="w-full h-full">
        <header className="flex items-center justify-between w-full h-[100px] bg-[#222] z-30 fixed text-white p-4">
          <h2 className="font-size-3xl font-bold">
            <Link href="/">MysticMurkoXD</Link>
          </h2>

          <div className="flex items-center justify-between w-[180px]">
            <Link href="/sign-in" className="flex items-center">
              {" "}
              <LogIn /> <span>Login</span>
            </Link>
            <Link href="/sign-up" className="flex items-center">
              {" "}
              <Scroll /> <span>Register</span>
            </Link>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}

export default dAppLayout;
