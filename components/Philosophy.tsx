// components/Philosophy.tsx
const principles = [
  {
    number: "01",
    title: "Transparency",
    tagline: "See the business as it is.",
    description: "We start with facts, not assumptions.",
  },
  {
    number: "02",
    title: "Real Results",
    tagline: "Measure what changes.",
    description: "Activity is not the outcome. Business improvement is.",
  },
  {
    number: "03",
    title: "Founder Mindset",
    tagline: "Think like an owner.",
    description:
      "We approach every problem with ownership, accountability and long-term thinking.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-primary text-surface py-16 md:py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3 reveal">
          <span className="h-px w-9 bg-secondary sm:w-12" />
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-secondary sm:text-[10px] sm:tracking-[0.27em]">
            CORE VALUES
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-display text-surface leading-tight mb-8 max-w-2xl reveal">
          How we work matters as much as what we deliver.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-surface/15 reveal">
          {principles.map((p) => (
            <div
              key={p.number}
              className="border-r border-b border-surface/15 px-6 py-8 sm:px-8 sm:py-10"
            >
              <span className="block text-[10px] font-bold tracking-[0.15em] text-surface/40">
                {p.number}
              </span>

              <h3 className="font-display text-headline-md text-surface mt-4 mb-3">
                {p.title}
              </h3>

              <p className="font-body-md font-semibold text-surface-variant mb-2">
                {p.tagline}
              </p>

              <p className="font-body-md text-surface-variant opacity-80">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}