import { AboutSection } from "@/components/landing/AboutSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HeroVisual } from "@/components/landing/HeroVisual";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { StepsSection } from "@/components/landing/StepsSection";
import { UsageSection } from "@/components/landing/UsageSection";
import { ValuesSection } from "@/components/landing/ValuesSection";

export function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05061b] text-white">
      <HeroVisual />
      <LandingHeader />
      <main className="relative z-[1] mx-auto flex w-full max-w-[392px] flex-col gap-12 px-6 pb-12 pt-[min(180px,28vh)]">
        <HeroSection />
        <ValuesSection />
        <UsageSection />
        <StepsSection />
        <AboutSection />
        <FinalCtaSection />
      </main>
      <div className="relative z-[1] mx-auto w-full max-w-[392px] px-6">
        <LandingFooter />
      </div>
    </div>
  );
}
