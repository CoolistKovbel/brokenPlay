"use client";


import { signInMessageVerification } from "../../lib/web3";
import LandingPageHeader from "@/components/LandingPageHeader";
import LandingHero from "@/components/LandingHero";
import LandingFeatures from "@/components/LandingFeatures";


export default function Home() {
  const handleMessageSig = async () => {
    await signInMessageVerification();
  };

  return (
    <main className="bg-black w-[100%] h-[100%] text-white">
      {/* Header */}
      <LandingPageHeader />

      {/* Hero */}
      <LandingHero />

      {/* Features */}
      <LandingFeatures />

    </main>
  );
}
