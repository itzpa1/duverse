import HeroSection from "@/components/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full sm:px-4 px-14 py-4 flex flex-col items-center justify-center'>
      <HeroSection />
    </div>
  );
}
