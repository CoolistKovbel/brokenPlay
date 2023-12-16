"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LandingFeatures() {
  const router = useRouter()

  return (
    <div className="h-full bg-[#111]">

      
      {/* 
      
        feature obejct data

      */}


      <div className="max-w-5xl m-auto flex items-center justify-center gap-5 h-full flex-col">
        {/*
        
            Feature object 1
        
        */}
        <div className="flex items-center justify-center p-6 w-full h-[300px] p-2 bg-[#222] border-2 rounded-xl">
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
            <Button onClick={() => router.push('/mint')} className="bg-yellow-500 text-black font-bold hover:text-white">Mint Now</Button>
          </div>
        </div>

        {/*

          Feature object 2
        
        */}
        <div className="flex items-center p-6  w-full h-[300px] p-2 bg-[#222] border-2 rounded-xl flex-row-reverse">
          <div className="relative w-[200px] h-[200px]">
            <Image src="/logo-b.png" alt="feature 1" fill />
          </div>

          <div className="w-[80%]">
            <h3 className="text-4xl font-bold mb-2">
              Announcements and Groups
            </h3>
            <p className="mb-2">
              Be able to access our lounge and see all the recent announcements
              from other people and lounge members sharing their thoughts,
              promos, or certain events. Be sure to create an account first.
            </p>
            <Button onClick={() => router.push('/sign-in') } className="bg-yellow-500 text-black font-bold hover:text-white">View Now</Button>
          </div>
        </div>

        {/* 
        

        feature object 3

        */}
        <div className="flex items-center justify-center p-6  w-full h-[300px] p-2 bg-[#222] border-2 rounded-xl flex-col">
          <h3 className="text-4xl font-bold mb-2">
            You have any friends?... want to be?
          </h3>
          <p className="mb-2 text-center">
            Join and edit your profile and add and talk to some people who could end up being your friend. This will
          </p>
          <Button className="bg-yellow-500 text-black font-bold hover:text-white">see more</Button>
        </div>
      </div>

    </div>
  );
}

export default LandingFeatures;
