import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { PHONE_TEL } from "@/lib/links";

export function LandingHeader() {
  return (
    <header
      className="absolute left-1/2 top-0 z-50 flex h-[102px] w-screen -translate-x-1/2 flex-col items-center justify-end"
      data-node-id="3:920"
    >
      <div className="flex h-[72px] w-full items-end justify-between pl-3 pr-4 min-[390px]:pl-[14px] min-[390px]:pr-6">
        <Link
          href="/"
          className="relative block aspect-[130/37] h-[33px] w-[116px] shrink-0 min-[390px]:h-[37px] min-[390px]:w-[130px]"
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
          className="relative h-[52px] w-[51px] shrink-0 min-[390px]:h-[57px] min-[390px]:w-14"
          aria-label="Call Neetrino"
        >
          <Image alt="" src={ASSETS.headerPhone} fill className="object-contain" unoptimized />
        </Link>
      </div>
    </header>
  );
}
