import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/figma-assets";
import { EMAIL_LABEL, EMAIL_MAILTO, PHONE_LABEL, PHONE_TEL, SITE_URL } from "@/lib/links";

const SOCIAL = [
  { href: "https://api.whatsapp.com/send?phone=37444343000", label: "WhatsApp", src: ASSETS.socialWhatsappB },
  { href: "https://t.me/", label: "Telegram", src: ASSETS.socialTelegramB },
  { href: "https://instagram.com/", label: "Instagram", src: ASSETS.socialInstagramB },
  { href: "https://m.me/", label: "Messenger", src: ASSETS.socialMessengerB },
  { href: "https://www.linkedin.com/", label: "LinkedIn", src: ASSETS.socialLinkedinB },
] as const;

export function LandingFooter() {
  return (
    <footer
      className="flex w-full flex-col items-center gap-6 pb-12 pt-8"
      data-node-id="3:881"
    >
      <div className="relative h-[37px] w-[130px]">
        <Image alt="Neetrino" src={ASSETS.logo} fill className="object-cover" unoptimized />
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-4" aria-label="Social links">
        {SOCIAL.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[rgba(216,216,216,0.05)] bg-white/[0.04] p-2 shadow-[8px_4px_16px_0px_rgba(0,0,0,0.08)] backdrop-blur-[10px] transition hover:bg-white/[0.08]"
          >
            <span className="relative block size-8">
              <Image alt="" src={s.src} fill className="object-contain" unoptimized />
            </span>
            <span className="sr-only">{s.label}</span>
          </Link>
        ))}
      </nav>
      <div className="flex flex-wrap items-center justify-center gap-6 text-white">
        <Link href={PHONE_TEL} className="flex items-center gap-1.5 font-manrope text-xs">
          <span className="relative size-[19px] shrink-0">
            <Image alt="" src={ASSETS.phoneIcon} fill className="object-contain" unoptimized />
          </span>
          {PHONE_LABEL}
        </Link>
        <Link href={EMAIL_MAILTO} className="flex items-center gap-1.5 font-manrope text-xs">
          <span className="relative h-[15px] w-[19px] shrink-0">
            <Image alt="" src={ASSETS.emailIcon} fill className="object-contain" unoptimized />
          </span>
          {EMAIL_LABEL}
        </Link>
      </div>
      <div className="relative h-5 w-[18px] opacity-70">
        <Image alt="" src={ASSETS.shareIcon} fill className="object-contain" unoptimized />
      </div>
      <div className="flex max-w-[271px] flex-col items-center gap-4 pt-6 text-center font-manrope text-xs leading-4 text-white/40">
        <p>
          Copyright © 2026 | All Rights Reserved, Created by{" "}
          <Link href={SITE_URL} className="underline underline-offset-2 hover:text-white/60">
            Neetrino IT Company
          </Link>
        </p>
        <div className="flex gap-4 uppercase tracking-[1px]">
          <a href="https://neetrino.com/privacy" className="text-[10px] hover:text-white/60">
            Privacy
          </a>
          <a href="https://neetrino.com/terms" className="text-[10px] hover:text-white/60">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
