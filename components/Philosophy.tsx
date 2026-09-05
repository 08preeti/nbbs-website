// components/Philosophy.tsx
const principles = [
  {
    number: "01",
    title: "INTEGRITY",
    tagline: "Do what is right for the business. ",
    description:
      "We give honest advice, even when it isn’t the easiest answer. Our recommendations are driven by what genuinely serves the business. We start with facts, not assumptions.",
  },
  {
    number: "02",
    title: " TRUST ",
    tagline: "Earn it through every interaction. ",
    description:
      "Business decisions require confidence. We build trust through consistency, accountability, and standing by our commitments.",
  },
  {
    number: "03",
    title: " TRANSPARENCY ",
    tagline: "Clarity starts with the truth. ",
    description:
      "We believe you cannot solve what you cannot see. We work with facts, open conversations, and a clear understanding of the business before recommending what comes next. ",
  },
  {
    number: "04",
    title: "  RESULTS  ",
    tagline: "Make every action count.  ",
    description:
      "      Ideas have value only when they create change. We focus on practical actions, measurable progress, and outcomes that strengthen the business. ",
  },
  {
    number: "05",
    title: "  SOLUTIONS  ",
    tagline: "Solve the real problem. ",
    description:
      "     We don't believe in one-size-fits-all answers. We diagnose the root cause, find the right approach, and build solutions that can actually work.  ",
  },
];

export default function Philosophy() {
  return (
    <section className="section-y bg-primary text-surface">
      <div className="container-wide page-x mx-auto">
        <div className="reveal mb-6 flex items-center gap-3">
          <span className="eyebrow-rule bg-secondary text-secondary" />
          <span className="text-eyebrow text-secondary">CORE VALUES</span>
        </div>

        <h2 className="text-display reveal mb-8 max-w-2xl font-display font-medium leading-tight text-surface">
          What we believe shapes how we work.
        </h2>

        <div className="reveal grid grid-cols-1 border-t border-l border-surface/15 md:grid-cols-5">
          {principles.map((p) => (
            <div
              key={p.number}
              className="card-min-h group flex flex-col border-r border-b border-surface/15 px-5 py-6 hover:bg-secondary/5 sm:px-6 sm:py-8"
            >
              <span className="text-eyebrow block text-surface/40">
                {p.number}
              </span>

              <h3 className="text-headline-md mt-4 mb-2 font-display text-surface">
                {p.title}
              </h3>

              <p className="text-headline-md mb-2 font-semibold text-surface-variant">
                {p.tagline}
              </p>

              <p className="text-body-lg text-surface-variant opacity-80">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
