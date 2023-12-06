"use client"


import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";



function LandingFeatures() {
  return (
    <div className="h-full bg-[#222]">
    <div className="max-w-5xl m-auto flex items-center justify-center gap-5 h-full flex-col">
      {/* Feature 1 */}
      <div className="flex items-center justify-between w-full h-[300px] p-2 bg-[#333]">
        <div className="relative w-[200px] h-[200px]">
          <Image src="/logo-b.png" alt="feature 1" fill />
        </div>

        <div className="w-[80%]">
          <h3 className="text-4xl font-bold mb-2">Mint and Recieve</h3>
          <p className="mb-2">
            With everyone who mints this special NFT you will be givin early
            access exclusives to future projects. You will also be able to
            join members only chat.
          </p>
          <Button>Mint Now</Button>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center justify-between  w-full h-[300px] p-2 bg-[#333] flex-row-reverse">
        <div className="relative w-[200px] h-[200px]">
          <Image src="/logo-b.png" alt="feature 1" fill />
        </div>

        <div className="w-[80%]">
          <h3 className="text-4xl font-bold mb-2">
            Announcements and groups
          </h3>
          <p className="mb-2">
            Be able to access our lounge and see all the recent
            announcements from other people and lounge members sharing their
            thoughts, promos, or certain events.
          </p>
          <Button>View Now</Button>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center justify-between  w-full h-[300px] p-2 bg-[#333] flex-col">
        <h3 className="text-4xl font-bold mb-2">
          How did you hear about us?
        </h3>
        <p className="mb-2">
          Share your story or how you stumbled upon here and what do you
          expect. Remeber this will require a small fee and will exist on
          the blockchain forever. Be wise.
        </p>
        <Button>share now</Button>
      </div>
    </div>
  </div>
  )
}

export default LandingFeatures