

import React from "react";
import Image from "next/image";
import MintingForm from "./forms/MintingForm";


async function MintingFeature() {


  return (
    <section id="#mint" className="bg-[#111] p-2 w-full h-[100vh] flex items-center justify-center">

      <div className="max-w-7xl m-auto flex items-center justify-between flex-col md:flex-row gap-5 ">
        
        {/* NFT image */}
        <div className="relative w-[300px] h-[300px] ">
          <Image
            src="/murko-mystic.png"
            alt="slow"
            fill
            className="rounded-xl border-2"
          />
          <h2 className="absolute bottom-0 right-6 font-bold text-white text-4xl bg-black p-2">Mystic Murko</h2>
        </div>

        <div className="text-white w-[60%] h-full p-3 border-solid">

          <h2 className="text-4xl md:text-8xl font-bold">Mystic Murko Collection</h2>
          <p className="my-2 leading-5">
            Limited 222 release, with special capabilities and features that can
            be used on this site and many others soon.
          </p>

          <p className="text-md text-[yellow] bg-[#222] p-2 inline-block font-bold">Cost: 0.042 ETH</p>

          <MintingForm />


        </div>
      </div>

    </section>
  );
}

export default MintingFeature;
