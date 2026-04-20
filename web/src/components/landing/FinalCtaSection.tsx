import Link from "next/link";
import { EMAIL_MAILTO, WHATSAPP_URL } from "@/lib/links";
import { WhatsAppGlyph } from "@/components/landing/WhatsAppGlyph";

export function FinalCtaSection() {
  return (
    <section
      className="flex w-full flex-col gap-6 py-8"
      data-node-id="3:871"
      aria-labelledby="final-cta-heading"
    >
      <h2
        id="final-cta-heading"
        className="text-center font-orbitron text-2xl font-bold leading-8 text-[#dfe0ff]"
      >
        Ready to Use
        <br />
        Your Gift Card?
      </h2>
      <div className="flex flex-col gap-3">
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-4 rounded-full bg-[rgba(255,255,255,0.09)] py-4 text-white shadow-[0_20px_60px_rgba(48,37,255,0.15)] transition hover:bg-[rgba(255,255,255,0.14)]"
          data-node-id="3:875"
        >
          <WhatsAppGlyph />
          <span className="font-manrope text-base font-bold">Write to Us on WhatsApp</span>
        </Link>
        <Link
          href={EMAIL_MAILTO}
          className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3025ff] to-[#1d1699] py-4 font-manrope text-base font-bold text-white transition hover:brightness-110"
          data-node-id="3:878"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
