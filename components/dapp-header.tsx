
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { UserMessages } from "@/lib/user-messages";

const getEthereumObject = () => {
  return window.ethereum;
};

const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};


async function DappHeader() {
  // Server sessaion grab 
  const session: any = await getServerSession(authOptions);
  console.log(session, "in the dApp header")

  if(!session) {
    return window.location.href = "/sign-in"
  }

  const account = session?.eddress || "";
  const metaAccount = await getEthereumAccount()

  console.log(account, metaAccount, "int he dap hader")




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


          {/* Small container?  */}

          <DropdownMenu>

            <DropdownMenuTrigger asChild>
              <Button variant="outline">Messages</Button> 
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

          <UserLogout />
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
