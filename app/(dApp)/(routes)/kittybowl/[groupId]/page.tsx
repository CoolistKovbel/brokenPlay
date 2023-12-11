
import { redirect } from "next/navigation";

import { User} from "@/lib/current-profile";
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
  
    // smile i think you know whats up 
}
 
export default ServerIdPage;