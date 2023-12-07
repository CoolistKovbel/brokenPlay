import React from "react";
import { useSession } from "next-auth/react";


import { Button } from "@/components/ui/button";

import { mintNFT } from "@/lib/web3";


function MintingForm() {
  const { data: session } = useSession();

  console.log(session, "This is data minting feature page");
  console.log(session?.user.eddress);


  const onSubmitBro = async (e:any) => {
    e.preventDefault()
    const x = e.target[0].value
    try {
        console.log("submited", x)
        await mintNFT(x)
    } catch (error) {
        console.log(error)
    }

  };
  return (
      <form className="mt-3 flex items-center justify-between" onSubmit={onSubmitBro}>
        <input type="number" className="text-black w-[30%] p-4"/>

        <Button className="mt-3" type="submit">Mint now</Button>
      </form>
  );
}

export default MintingForm;
