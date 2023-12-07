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
import { userBoughtNFT } from "@/lib/web3";

async function DappHeader() {
  const session: any = await getServerSession(authOptions);

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

  console.log("server from header", server)

  const owns = await userBoughtNFT(session?.user.eddress)

  console.log(owns)

  if (!server) {
    return <InitialModal />;
  }

  return (
    <div className="flex items-center justify-between w-full h-[100px] bg-[#222] z-50 fixed text-[gold] p-4">

      <h2 className="font-bold">
        <Link href="/" className="text-4xl">MysticMurkoXD</Link>
      </h2>

      {session?.user ? (
        <div className="flex items-center justify-between w-[250px]">
          <Link href="/" className="flex items-center">
            <Home /> <span>Home</span>
          </Link>
          <Link href="/mint" className="flex items-center">
            <PictureInPicture2Icon /> <span>Mint</span>
          </Link>
          {/* Check to see if has group if an go through the wholle process. */}
          <Link href={`/kittybowl/${server.id}`} className="flex items-center">
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
    </div>
  );
}

export default DappHeader;
