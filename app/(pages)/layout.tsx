import PageLayoutHeader from "@/components/PageLayoutHeader"
import { initialProfile } from "@/lib/initial-profile"
import { getEthereumAccount } from "@/lib/web3"




export default async function Pagelayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const ethereumAccount = await getEthereumAccount()

    console.log(ethereumAccount, "Account? from main page layout")

    const profile = await initialProfile()



    return (
      <div className="text-white flex flex-col flex-col-reverse items-center w-full h-[100vh]">

        <div className="bg-[#111] h-[11%] w-full">
          <PageLayoutHeader />
        </div>

        <div className="bg-[#222] h-full w-full">
            {children}
        </div>


      </div>
    )
  }