import React from "react";
import Link from "next/link";

function PageLayoutHeader() {
  return (
    <header className="flex items-center justify-between p-4 w-full h-full">
      <h2 className="text-3xl font-bold">
        <Link href="/">MyticMurko</Link>
      </h2>

      <nav className="w-[200px] flex items-center justify-between ">
        <a
          href="#"
          className="bg-black p-2 text-[yellow] hover:bg-[yellow] hover:text-black bg-[rounded-lg font-bold text-sm"
        >
          Mint
        </a>
        <a
          href="#"
          className="bg-black p-2 text-[yellow] hover:bg-[yellow] hover:text-black bg-[rounded-lg font-bold text-sm"
        >
          Message
        </a>
        <a
          href="#"
          className="bg-black p-2 text-[yellow] hover:bg-[yellow] hover:text-black bg-[rounded-lg font-bold text-sm"
        >
          group
        </a>
      </nav>
    </header>
  );
}

export default PageLayoutHeader;
