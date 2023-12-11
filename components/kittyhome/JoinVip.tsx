"use client"
import { Button } from "@/components/ui/button";
import { getEthereumAccount, userVIP, vipActionJoin } from "@/lib/web3";
import { useEffect, useState } from "react";

function JoinVip() {

    const [accountVIP, setAccountVIP] = useState(false)


    const handleVIP = async (e:any) => {
      e.preventDefault();
      await vipActionJoin()
      
    }



    useEffect(() => {

      // Check if user connected to vip
      const zz = async ( ) => {
        const account = await getEthereumAccount()
        const vip = await userVIP(account)
        setAccountVIP(vip)
      }
      zz()





    },[])


  return (
    <div className="w-full text-right p-4">
    <h2 className="text-3xl font-bold mb-2">You may also join our exclusive nft group chat for those who have an nft</h2>
    <p className="text-md">
        You <strong>must</strong> own a nft to join the chat.... it will be free
    </p>
    <div className="w-[20%] p-2 flex items-center justify-between m-auto mt-4">
        <Button onClick={() => window.location.href = "/mint"}>Get NFT</Button>
        {
          accountVIP ? (
            <Button onClick={handleVIP}>Join VIP</Button>
            ) : (
              <Button onClick={handleVIP}>Join VIP</Button>
          )
        }
    </div>
</div>
  )
}

export default JoinVip