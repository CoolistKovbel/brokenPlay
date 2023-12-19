/* 
  Home page landing page
*/

import LandingFeatures from "@/components/landing/LandingFeatures";
import LandingHero from "@/components/landing/LandingHero";


export default async function Home() {


  return (
    <main className="bg-black w-[100%] m-h-[100vh] text-white">
      <LandingHero />
      <LandingFeatures />
    </main>
  );
}
