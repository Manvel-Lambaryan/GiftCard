import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

export function HeroVisual() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 flex h-[678px] w-screen -translate-x-1/2 items-center justify-center">
        <div className="rotate-180">
          <div className="relative h-[678px] w-screen overflow-hidden blur-[0px]" data-node-id="3:965">
            <Image
              alt=""
              src={ASSETS.heroBackground}
              fill
              className="!inset-auto !left-0 !top-[-15.93%] !h-[115.93%] !w-full !max-w-none object-cover"
              priority
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-18px] flex h-[min(520.325px,95vw)] w-[min(525.027px,135vw)] -translate-x-[57%] items-center justify-center">
        <div className="rotate-[32.79deg]">
          <div className="relative h-[min(370.277px,62vw)] w-[min(386px,92vw)]" data-node-id="25:120">
            <Image
              alt="Neetrino gift card mockup"
              src={ASSETS.cardMockup}
              fill
              className="object-cover"
              priority
              sizes="(max-width:768px) 92vw, 386px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </>
  );
}
