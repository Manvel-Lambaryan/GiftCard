import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

export function HeroVisual() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[678px] w-full overflow-hidden">
        <div className="h-full w-full rotate-180">
          <div
            className="relative h-full w-full min-w-0 overflow-hidden"
            data-node-id="3:965"
          >
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
      <div className="pointer-events-none absolute -left-8 -top-4 flex h-[min(520px,90vw)] w-[min(525px,120vw)] items-center justify-center md:left-1/2 md:-translate-x-1/3">
        <div className="rotate-[32.79deg]">
          <div className="relative h-[min(370px,55vh)] w-[min(386px,92vw)]" data-node-id="25:120">
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
