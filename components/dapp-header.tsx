import {
  Home,
  LogIn,
  MessageCircle,
  PictureInPicture2Icon,
  Scroll,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";
import { InitialModal } from "./modals/initial-modal";

async function DappHeader() {
  const session = await getServerSession(authOptions);

  //   Check to see if user has nft....
  console.log(session, "data from dapp header");

  // If so then create server
  const server = await prisma.group.findFirst({
    where: {
      members: {
        some: {
          profileId: session?.user.id,
        },
      },
    },
  });

  if (server) {
    return <InitialModal />;
  }

  return (
    <header className="flex items-center justify-between w-full h-[100px] bg-[#222] z-30 fixed text-white p-4">
      {/* Heading */}
      <h2 className="font-size-3xl font-bold">
        <Link href="/">MysticMurkoXD</Link>
      </h2>

      {session?.user ? (
        <div className="flex items-center justify-between w-[250px]">
          <Link href="/" className="flex items-center">
            {" "}
            <Home /> <span>Home</span>
          </Link>
          <Link href="/mint" className="flex items-center">
            {" "}
            <PictureInPicture2Icon /> <span>Mint</span>
          </Link>
          {/* Check to see if has group if an go through the wholle process. */}
          <Link href="/kittybowl" className="flex items-center">
            {" "}
            <MessageCircle /> <span>Message</span>
          </Link>
        </div>
      ) : (
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
      )}
    </header>
  );
}

export default DappHeader;
