import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { MissionVision } from "@/components/home/MissionVision";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <MissionVision />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
