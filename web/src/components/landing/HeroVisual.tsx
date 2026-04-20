import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

export function HeroVisual() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 flex h-[770px] w-screen -translate-x-1/2 items-center justify-center">
        <div>
          <div
            className="hero-reference-bg relative h-[770px] w-screen overflow-hidden blur-[0px]"
            data-node-id="3:965"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-46px] flex h-[min(860.325px,156vw)] w-[min(875.027px,208vw)] -translate-x-[50%] items-center justify-center">
        <div className="rotate-[32.79deg]">
          <div className="relative h-[min(620.277px,102vw)] w-[min(646px,146vw)]" data-node-id="25:120">
            <Image
              alt="Neetrino gift card mockup"
              src={ASSETS.cardMockup}
              fill
              className="object-cover"
              priority
              sizes="(max-width:768px) 146vw, 646px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </>
  );
}
