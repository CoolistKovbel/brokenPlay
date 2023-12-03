"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signInMessageVerification } from "../../lib/web3";
import LandingPageHeader from "@/components/LandingPageHeader";
import MatrixRain from "@/components/MatrixRain";

export default function Home() {
  const handleMessageSig = async () => {
    await signInMessageVerification();
  };

  return (
    <main className="bg-black w-[100%] h-[100%] text-white">
      <LandingPageHeader />

      {/* Hero */}
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

      {/* Features */}
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
    </main>
  );
}
