

import React from "react";
import Image from "next/image";
import MintingForm from "./forms/MintingForm";


async function MintingFeature() {




  return (
    <section id="#mint" className="bg-[#333] p-2 w-full h-full flex items-center justify-center">

      <div className="max-w-7xl m-auto flex items-center justify-between flex-col md:flex-row gap-5 ">
        
        {/* NFT image */}
        <div className="relative w-[300px] h-[300px] ">
          <Image
            src="/murko-mystic.png"
            alt="slow"
            fill
            className="rounded-xl"
          />
        </div>

        <div className="text-white w-[60%] p-3 border-solid">
          <h2 className="text-4xl font-bold">Mystic Murko Collection</h2>
          <p>
            Limited 222 release, with special capabilities and features that can
            be used on this site and many others soon.
          </p>

          <p>Cost: 0.042 ETH</p>

          <MintingForm />


        </div>
      </div>

    </section>
  );
}

export default MintingFeature;
