import LandingPageHeader from "@/components/LandingPageHeader";
import LandingHero from "@/components/LandingHero";
import LandingFeatures from "@/components/LandingFeatures";
import MintingFeature from "@/components/MintingFeature";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session?.user) {
    return <div>AdminPage {session?.user.username}</div>;
  }

  //   const group = await prisma.group.findFirst({
  //     where: {
  //         members: {
  //             some: {
  //                 profileId: profile.id
  //             }
  //         }
  //     }
  // })

  // if(group) { 
  //     return redirect(`/servers/${group.id}`)
  // }

  return (
    <main className="bg-black w-[100%] h-[100%] text-white">
      {/* Hero */}
      <LandingHero />
    </main>
  );
}
