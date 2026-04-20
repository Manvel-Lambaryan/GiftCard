import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { PHONE_TEL } from "@/lib/links";
import { LANDING_TEXT, type Language } from "@/components/landing/translations";

type LandingHeaderProps = {
  language: Language;
};

export function LandingHeader({ language }: LandingHeaderProps) {
  const text = LANDING_TEXT[language].header;

  return (
    <header
      className="absolute left-1/2 top-0 z-50 flex h-[102px] w-screen -translate-x-1/2 flex-col items-center justify-end"
      data-node-id="3:920"
    >
      <div className="flex h-[72px] w-full items-end justify-between pl-3 pr-4 min-[390px]:pl-[14px] min-[390px]:pr-6">
        <div className="flex items-end gap-2 min-[390px]:gap-3">
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
          <nav
            aria-label={text.languageAria}
            className="mb-1 inline-flex h-[33px] items-center rounded-full border border-[rgba(121,209,255,0.25)] bg-[rgba(35,43,123,0.5)] p-1 min-[390px]:h-[37px]"
          >
            <LanguageButton href="/?lang=en" label={text.englishLabel} active={language === "en"} />
            <LanguageButton href="/?lang=hy" label={text.armenianLabel} active={language === "hy"} />
          </nav>
        </div>
        <Link
          href={PHONE_TEL}
          className="relative h-[52px] w-[51px] shrink-0 min-[390px]:h-[57px] min-[390px]:w-14"
          aria-label={text.callAria}
        >
          <Image alt="" src={ASSETS.headerPhone} fill className="object-contain" unoptimized />
        </Link>
      </div>
    </header>
  );
}

type LanguageButtonProps = {
  href: string;
  label: string;
  active: boolean;
};

function LanguageButton({ href, label, active }: LanguageButtonProps) {
  const baseClassName =
    "rounded-full px-2.5 py-1 font-manrope text-xs font-bold leading-4 transition min-[390px]:px-3";
  const activeClassName = active
    ? "bg-[#79d1ff] text-[#05061b]"
    : "text-[#dfe0ff] hover:bg-[rgba(121,209,255,0.22)]";

  return (
    <Link href={href} className={`${baseClassName} ${activeClassName}`}>
      {label}
    </Link>
  );
}
