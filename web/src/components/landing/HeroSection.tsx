import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { WHATSAPP_URL } from "@/lib/links";
import { WhatsAppGlyph } from "@/components/landing/WhatsAppGlyph";

function HeroHeading() {
  return (
    <div className="flex flex-col items-center pb-4 text-center">
      <h1
        id="hero-heading"
        className="font-orbitron text-[clamp(26px,8.6vw,31px)] font-bold leading-[clamp(30px,9.6vw,35px)] tracking-[-0.9px] text-white"
      >
        <span className="block">You’ve Received a</span>
        <span className="block">
          <span className="text-[#79d1ff]">Neetrino</span>
          <span> Gift Card</span>
        </span>
      </h1>
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="min-h-[87px] w-full max-w-[342px]">
      <div className="flex flex-col items-center px-[10.91px] text-center">
        <p className="font-manrope text-[clamp(16px,5vw,18px)] font-normal leading-[clamp(26px,7.8vw,29.25px)] text-[#c6c5d3]">
          Use it as a direct discount on your next
          <br />
          digital product with Neetrino.
        </p>
      </div>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex w-full max-w-[342px] flex-col gap-4">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-[11.99px] rounded-full bg-[rgba(255,255,255,0.18)] px-4 py-4 text-white transition hover:bg-[rgba(255,255,255,0.26)] min-[390px]:px-6"
        data-node-id="3:735"
      >
        <WhatsAppGlyph />
        <span className="font-manrope text-[15px] font-bold leading-6 min-[360px]:text-base">
          Write to Us on WhatsApp
        </span>
      </Link>
      <div className="flex justify-center pt-4">
        <div
          className="flex items-center gap-2 rounded-full border border-[rgba(70,70,81,0.1)] bg-[#ff8c00] px-[17px] py-[9px]"
          data-node-id="3:741"
        >
          <span className="relative block size-2.5 shrink-0">
            <Image alt="" src={ASSETS.clockIcon} fill className="object-contain" unoptimized />
          </span>
          <p className="font-manrope text-xs font-medium leading-4 text-black">
            Valid for 3 months from the date of receipt.
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      className="flex min-h-[352px] w-full max-w-[370px] flex-col items-center justify-center"
      data-node-id="3:717"
      aria-labelledby="hero-heading"
    >
      <HeroHeading />
      <HeroDescription />
      <HeroActions />
    </section>
  );
}
