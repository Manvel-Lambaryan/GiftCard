import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { PHONE_TEL } from "@/lib/links";

export function LandingHeader() {
  return (
    <header
      className="sticky top-0 z-50 flex h-[81px] flex-col items-center justify-end bg-[#05061b]/80 backdrop-blur-[12px] shadow-[0px_8px_32px_0px_rgba(30,38,118,0.08)]"
      data-node-id="3:920"
    >
      <div className="flex h-16 w-full max-w-[392px] items-end justify-between px-4 pr-6">
        <Link href="/" className="relative h-[37px] w-[130px] shrink-0">
          <Image alt="Neetrino" src={ASSETS.logo} fill className="object-cover" priority unoptimized />
        </Link>
        <Link
          href={PHONE_TEL}
          className="relative h-[57px] w-14 shrink-0"
          aria-label="Call Neetrino"
        >
          <Image alt="" src={ASSETS.headerPhone} fill className="object-contain" unoptimized />
        </Link>
      </div>
    </header>
  );
}
