import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { PHONE_TEL } from "@/lib/links";

export function LandingHeader() {
  return (
    <header
      className="sticky top-0 z-50 flex h-[81px] flex-col items-center justify-end"
      data-node-id="3:920"
    >
      <div className="flex h-16 w-full max-w-[392px] items-end justify-between pl-[14px] pr-6">
        <Link
          href="/"
          className="relative block aspect-[130/37] h-[37px] w-[130px] shrink-0"
        >
          <Image
            alt="Neetrino"
            src={ASSETS.logo}
            width={130}
            height={37}
            className="size-full object-contain object-left"
            priority
            unoptimized
          />
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
