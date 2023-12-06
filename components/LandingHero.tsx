"use client"

import React from 'react'
import MatrixRain from "@/components/MatrixRain";
import Image from 'next/image';
import Link from 'next/link';

function LandingHero() {

  


  return (
    <div className="w-full h-full relative flex items-center justify-center">
    <MatrixRain />

    <div className="max-w-4xl flex items-center justify-center p-4 flex-row absolute z-40">

      <div className='flex items-center justify-between w-[800px] h-full align-center flex-col md:flex-row'>

        <div className="w-[400px] mb-[20px] md:mb-0 text-center bg-gray-600 p-4 rounded-lg">

          <h2 className="text-5xl font-bold mb-2">Ultimate NFT Collection</h2>
          <p className="text-md mb-4">
            The perrfect cute and cuddly kiddy in a digital footprint. Own
            your very own the blockchain itself. Suited for feature projects.
          </p>
          <Link href="/mint" className="p-2 rounded-lg text-2xl bg-[yellow] text-black font-bold hover:text-white hover:bg-black" >
            Mint Now
          </Link>
          
        </div>

        <div className="relative w-[300px] h-[300px]">
          <Image src="/DarkHorsev12-test.png" alt="image" fill />
        </div>
      </div>

    </div>

  </div>
  )
}

export default LandingHero