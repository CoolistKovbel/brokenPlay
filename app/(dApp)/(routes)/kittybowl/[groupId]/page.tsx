
import { redirect } from "next/navigation";

import { User} from "@/lib/current-profile";
import { prisma } from "@/lib/db";
import { getEthereumAccount, userBoughtNFT } from "@/lib/web3";

interface ServerIdPageProps {
  params: {
    groupId: string;
  }
};

const ServerIdPage = async ({
  params
}: ServerIdPageProps) => {

  const metamaskAccount = await getEthereumAccount()

  const profile = await User();

  if (!profile && !metamaskAccount) {
    return redirect("/sign-in");
  }
  

  const server = await prisma.group.findUnique({
    where: {
      id: params.groupId,
      members: {
        some: {
          profileId: profile.id,
        }
      }
    },
    include: {
      channels: {
        where: {
          name: "general"
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  })

  const initialChannel = server?.channels[0];


  return redirect(`/kittybowl/${params.groupId}/channels/${initialChannel?.id}`)
}
 
export default ServerIdPage;