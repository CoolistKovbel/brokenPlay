/* 
  Home page landing page
*/

import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingHero from "@/components/landing/LandingHero";


export default async function Home() {


  return (
    <main className="bg-black w-[100%] h-[100%] text-white">
      {/* Hero */}
      <LandingHero />
      {/* Small feature */}
      <LandingFeatures />
    </main>
  );
}
