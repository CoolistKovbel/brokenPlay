
import LandingHero from "@/components/landing/LandingHero";

import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  
  const session = await getServerSession(authOptions);
  
  // console.log(session, "This is from the setup layout");

  const etherAddress = session?.user.eddress
  const username = session?.user.username
  const idA = session?.user.userId

  //   const group = await prisma.group.findFirst({
  //     where: {
  //         members: {
  //             some: {
  //                 profileId: idA
  //             }
  //         }
  //     }
  // })

  // if(group) { 
  //     return redirect(`/kittybowl/${group.id}`)
  // }

  return (
    <main className="bg-black w-[100%] h-[100%] text-white">
      {/* Hero */}
      <LandingHero />
    </main>
  );
}
