
import {
  Home,
  LogIn,
  MessageCircle,
  PictureInPicture2Icon,
  Scroll,
} from "lucide-react";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserLogout from "@/lib/user-logout";


async function DappHeader() {
  const session: any = await getServerSession(authOptions);

  if(!session) {
    return window.location.href = "/sign-in"
  }

  return (
    <div className="flex items-center justify-between w-full h-[100px] bg-[#222] z-50 fixed text-[gold] p-4">
      {/* 

        Site logo
      
      */}
      <h2 className="font-bold">
        <Link href="/" className=" text-[1.2rem] md:text-4xl">MysticMurkoXD</Link>
      </h2>

      {/* 
      
        Check to see session has user load data
      
      */}
      {session?.user ? (
        // Header is there is user
        <div className="flex items-center justify-between  w-[180px] md:w-[400px] text-[10px] md:text-sm">

          <Link href="/" className="flex items-center">
            <Home className="w-4 h-4 mr-2"/> <span className="hidden md:inline-block">Home</span>
          </Link>

          <Link href="/mint" className="flex items-center">
            <PictureInPicture2Icon className="w-4 h-4 mr-2"/> <span className="hidden md:inline-block">Mint</span>
          </Link>

          {/* Message link */}
          <Link href="/kittybowl" className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="hidden md:inline-block">Message</span>
          </Link>

          <Link href="/announce" className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="hidden md:inline-block">Announce</span>
          </Link>

          <UserLogout />
        </div>
      ) : (
        // Header if there is no user
        <div className="flex items-center justify-between w-[180px]">
          <Link href="/sign-in" className="flex items-center">
            <LogIn /> <span>Login</span>
          </Link>
          <Link href="/sign-up" className="flex items-center">
            <Scroll /> <span>Register</span>
          </Link>
          
        </div>
      )}
    </div>
  );
}

export default DappHeader;
