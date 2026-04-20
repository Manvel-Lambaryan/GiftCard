const TAGS = [
  { label: "Premium Design", className: "left-[-6px] top-[-12px] w-[115.39px]" },
  { label: "Agile Dev", className: "left-[117.39px] top-[-12px] w-[76.66px]" },
  { label: "Scalable Architecture", className: "left-[-6px] top-[22px] w-[145.22px]" },
] as const;

export function AboutSection() {
  return (
    <section
      className="relative w-full overflow-hidden rounded-3xl p-6 backdrop-blur-[6px] min-[390px]:p-8"
      data-node-id="3:858"
      style={{
        backgroundImage:
          "linear-gradient(-48deg, rgba(35, 43, 123, 0.4) 37.171%, rgba(29, 50, 255, 0.296) 95.343%)",
      }}
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="font-orbitron text-2xl font-bold leading-8 text-[#dfe0ff]">
        Build With Neetrino
      </h2>
      <div className="mt-4 h-[189px] font-manrope text-base font-normal leading-6 text-[#c6c5d3]">
        <p>
          <span className="font-extrabold text-[#edecf5]">Neetrino IT Company</span> is a high-
        </p>
        <p>end software development firm</p>
        <p>specializing in architecting scalable,</p>
        <p>futuristic digital ecosystems. From</p>
        <p>complex CRM integrations to AI-</p>
        <p>driven interfaces, we build the tech</p>
        <p>that powers tomorrow.</p>
      </div>
      <div className="relative mt-4 h-[68px] w-full">
        {TAGS.map((tag) => (
          <span
            key={tag.label}
            className={`absolute rounded-full border border-[rgba(70,70,81,0.1)] bg-[rgba(255,255,255,0.17)] px-[13px] py-[5px] text-xs leading-4 text-[#dfe0ff] ${tag.className}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      <div
        className="pointer-events-none absolute bottom-[-19px] right-[-33px] size-40 rounded-full bg-[rgba(111,149,255,0.1)] blur-[32px]"
        aria-hidden
      />
    </section>
  );
}
