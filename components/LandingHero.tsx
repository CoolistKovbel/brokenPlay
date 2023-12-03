"use client"

import React from 'react'
import MatrixRain from "@/components/MatrixRain";
import { Button } from './ui/button';
import Image from 'next/image';

function LandingHero() {
  return (
    <div className="w-full h-full flex items-center flex-col md:flex-row relative">
    <MatrixRain />
    <div className="max-w-5xl w-full h-full flex items-center justify-center md:justify-between p-4 flex-col md:flex-row absolute z-40 translate-x-0 md:translate-x-1/2">
      <div className="w-[400px] mb-20 text-center bg-gray-600 p-4 rounded-lg">
        <h2 className="text-5xl font-bold mb-2">Ultimate NFT Collection</h2>
        <p className="text-md mb-4">
          The perrfect cute and cuddly kiddy in a digital footprint. Own
          your very own the blockchain itself. Suited for feature projects.
        </p>
        <Button className="p-4 text-2xl bg-[yellow] text-black font-bold hover:text-white">
          Mint Now
        </Button>
      </div>

      <div className="relative w-[300px] h-[300px]">
        <Image src="/DarkHorsev12-test.png" alt="image" fill />
      </div>
    </div>
  </div>
  )
}

export default LandingHero