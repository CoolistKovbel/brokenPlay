"use client"

import { Button } from "@/components/ui/button";

import { mintNFT } from "@/lib/web3";


function MintingForm() {


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
      <form className="mt-3 relative" onSubmit={onSubmitBro}>
        <input type="number" className="text-black w-full p-4 "/>

        <Button className="h-full absolute right-0 bottom-0" type="submit">Mint now</Button>
      </form>
  );
}

export default MintingForm;
