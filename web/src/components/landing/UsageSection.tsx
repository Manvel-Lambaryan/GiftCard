import Image from "next/image";
import { ASSETS } from "@/lib/figma-assets";

const ROWS = [
  {
    title: "Website",
    subtitle: "Corporate & Landing pages",
    node: "3:776" as const,
    icon: "planet" as const,
  },
  {
    title: "Mobile App",
    subtitle: "iOS & Android development",
    node: "3:785" as const,
    icon: "mobile" as const,
  },
  {
    title: "CRM Systems",
    subtitle: "Business process automation",
    node: "3:794" as const,
    icon: "decentralize" as const,
  },
  {
    title: "SaaS Platforms",
    subtitle: "Cloud-based solutions",
    node: "3:803" as const,
    icon: "cloud" as const,
  },
  {
    title: "AI Solutions",
    subtitle: "Machine learning modules",
    node: "3:812" as const,
    icon: "ai" as const,
  },
] as const;

export function UsageSection() {
  return (
    <section className="flex w-full flex-col gap-6" data-node-id="3:772" aria-labelledby="usage-heading">
      <h2 id="usage-heading" className="font-orbitron text-2xl font-bold leading-8 text-[#dfe0ff]">
        Where Can You Use It?
      </h2>
      <div className="flex flex-col gap-4">
        {ROWS.map((row) => (
          <article
            key={row.node}
            data-node-id={row.node}
            className="flex min-h-[90px] items-center gap-5 rounded-[36px] border border-[rgba(121,209,255,0.15)] bg-[rgba(35,43,123,0.4)] p-[21px]"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[42px]">
              <UsageIcon type={row.icon} />
            </div>
            <div>
              <h3 className="font-manrope text-lg font-bold leading-7 text-[#dfe0ff]">
                {row.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-5 text-[#c6c5d3]">
                {row.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function UsageIcon({ type }: { type: (typeof ROWS)[number]["icon"] }) {
  switch (type) {
    case "planet":
      return (
        <span className="relative size-12 shrink-0">
          <Image alt="" src={ASSETS.websiteUsageIcon} fill className="object-contain" sizes="48px" />
        </span>
      );
    case "mobile":
      return (
        <span className="relative h-[45px] w-[31.5px] shrink-0">
          <Image alt="" src={ASSETS.usageMobileAppIcon} fill className="object-contain" sizes="32px" />
        </span>
      );
    case "decentralize":
      return (
        <span className="relative size-12 shrink-0">
          <Image alt="" src={ASSETS.usageCrmIcon} fill className="object-contain" sizes="48px" />
        </span>
      );
    case "cloud":
      return (
        <span className="relative size-12 shrink-0">
          <Image alt="" src={ASSETS.usageSaasIcon} fill className="object-contain" sizes="48px" />
        </span>
      );
    case "ai":
      return (
        <span className="relative size-12 shrink-0">
          <Image alt="" src={ASSETS.usageAiIcon} fill className="object-contain" sizes="48px" />
        </span>
      );
    default: {
      const _exhaustive: never = type;
      return _exhaustive;
    }
  }
}
