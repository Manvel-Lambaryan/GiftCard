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
      <main className="relative z-[1] mx-auto flex w-full flex-col gap-[30px] px-4 pb-[47px] pt-[min(255px,38vh)] min-[390px]:px-6">
        <HeroSection />
        <ValuesSection />
        <div className="mt-6">
          <UsageSection />
        </div>
        <div className="mt-6">
          <StepsSection />
        </div>
        <AboutSection />
        <FinalCtaSection />
      </main>
      <div className="relative z-[1] mx-auto w-full px-4 min-[390px]:px-6">
        <LandingFooter />
      </div>
    </div>
  );
}
