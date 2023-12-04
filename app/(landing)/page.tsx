
import LandingPageHeader from "@/components/LandingPageHeader";
import LandingHero from "@/components/LandingHero";
import LandingFeatures from "@/components/LandingFeatures";
import MintingFeature from "@/components/MintingFeature";

export default function Home() {


  return (
    <main className="bg-black w-[100%] h-[100%] text-white">
      {/* Header */}
      <LandingPageHeader />

      {/* Hero */}
      <LandingHero />

      {/* Features */}
      <LandingFeatures />

      {/* Minting sectoin */}
      <MintingFeature />

      
    </main>
  );
}
