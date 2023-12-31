import React from "react";
import Link from "next/link";
import UserLogout from "@/lib/user-logout";

function PageLayoutHeader() {
  return (
    <header className="flex items-center justify-between p-4 w-full h-full">
      <h2 className="text-3xl font-bold">
        <Link href="/">MyticMurko</Link>
      </h2>

      <nav className="w-[200px] flex items-center justify-between ">
        <a
          href="/#mint"
          className="bg-black p-2 text-[yellow] hover:bg-[yellow] hover:text-black bg-[rounded-lg font-bold text-sm"
        >
          Mint
        </a>
        <a
          href="/moew"
          className="bg-black p-2 text-[yellow] hover:bg-[yellow] hover:text-black bg-[rounded-lg font-bold text-sm"
        >
          Message
        </a>
        <a
          href="/pur"
          className="bg-black p-2 text-[yellow] hover:bg-[yellow] hover:text-black bg-[rounded-lg font-bold text-sm"
        >
          group
        </a>
      </nav>


      <UserLogout />
    </header>
  );
}

export default PageLayoutHeader;
