import {
  Home,
  LogIn,
  MenuSquare,
  MessageCircle,
  PictureInPicture2Icon,
  Scroll,
  User2,
} from "lucide-react";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserLogout from "@/lib/user-logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { UserMessages } from "@/lib/user-messages";
import { useEthereum } from "@/hooks/use-ethereum";

async function DappHeader() {
  // Server sessaion grab
  const session: any = await getServerSession(authOptions);
  const ethereum = useEthereum;

  console.log(session, "in the dApp header");

  if (!session) {
    return (window.location.href = "/sign-in");
  }

  const account = session?.eddress || "";

  console.log(account, ethereum, "int he dap hader");

  return (
    <div className="flex items-center justify-between w-full h-[100px] bg-[#222] z-50 fixed text-[gold] ">
      {/* 

        Site logo
      
      */}
      <h2 className="font-bold p-4">
        <Link href="/" className=" text-[1.2rem] md:text-4xl">
          MysticMurkoXD
        </Link>
      </h2>

      {/* 
      
        Check to see session has user load data
      
      */}
      {session?.user ? (
        // Header is there is user
        <div className="flex items-center justify-between  w-[180px] md:w-[400px] text-[10px] md:text-sm">
          <Link href="/" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            <span className="hidden md:inline-block">Home</span>
          </Link>

          <Link href="/mint" className="flex items-center">
            <PictureInPicture2Icon className="w-4 h-4 mr-2" />{" "}
            <span className="hidden md:inline-block">Mint</span>
          </Link>

          {/* Small container?  */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><MenuSquare /></Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <Link href="/kittybowl">KittyBowl</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <Link href="/announce">Announce</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuLabel>My Groups</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><User2 /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Button>Connect Metamask</Button>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <UserLogout />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
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
