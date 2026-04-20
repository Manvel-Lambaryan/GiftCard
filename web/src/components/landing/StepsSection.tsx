import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

const STEPS = [
  {
    n: "1",
    title: "Contact on WhatsApp",
    body: (
      <>
        Start a conversation with our project
        <br />
        manager to activate your card.
      </>
    ),
  },
  {
    n: "2",
    title: "Send photo/details",
    body: (
      <>
        Provide a photo of your physical card or
        <br />
        its unique identification details.
      </>
    ),
  },
  {
    n: "3",
    title: "Choose product",
    body: (
      <>
        Discuss your needs and select the digital
        <br />
        product you want to develop.
      </>
    ),
  },
  {
    n: "4",
    title: "Amount deducted",
    body: (
      <>
        The card value is automatically deducted
        <br />
        from your final project quote.
      </>
    ),
    glow: true as const,
  },
] as const;

export function StepsSection() {
  return (
    <section className="relative flex w-full flex-col gap-12" data-node-id="3:821" aria-labelledby="steps-heading">
      <h2
        id="steps-heading"
        className="text-center font-orbitron text-2xl font-bold leading-8 text-[#dfe0ff]"
      >
        4 Simple Steps to Redeem
      </h2>
      <div className="relative flex flex-col gap-12 pl-2">
        <div
          className="absolute bottom-[30px] left-[23px] top-2 w-px overflow-hidden"
          data-node-id="3:825"
          aria-hidden
        >
          <div className="relative h-full w-full">
            <Image alt="" src={ASSETS.verticalLine} fill className="object-cover" unoptimized />
          </div>
        </div>
        {STEPS.map((step) => (
          <div key={step.n} className="relative flex gap-6">
            <StepCircle label={step.n} glow={"glow" in step ? step.glow : false} />
            <div className="flex min-w-0 flex-col gap-1">
              <h3 className="font-manrope text-lg font-bold leading-7 text-[#dfe0ff]">
                {step.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-5 text-[#c6c5d3]">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepCircle({ label, glow }: { label: string; glow?: boolean }) {
  return (
    <div
      className={`z-[1] flex size-12 shrink-0 items-center justify-center rounded-full border border-[rgba(121,209,255,0.3)] bg-[#28307f] font-space-grotesk text-base font-bold text-[#79d1ff] ${
        glow
          ? "border-transparent shadow-[0px_0px_4px_0px_#79d1ff,0px_0px_14px_0px_#79d1ff]"
          : ""
      }`}
    >
      {label}
    </div>
  );
}
