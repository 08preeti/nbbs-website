// components/Hero.tsx
// const processSteps = ["EXPERIENCE", "DIAGNOSIS", "STRATEGY", "IMPLEMENTATION"];

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-12 md:pt-16 md:pb-16">
      <div className="max-w-4xl reveal">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-9 bg-[#c9a86a] sm:w-12" />
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#c9a86a] sm:text-[10px] sm:tracking-[0.27em]">
            About NBBS
          </span>
        </div>
        +{/* Heading */}
        <h1
          className="font-medium text-display text-primary leading-tight mb-8"
          style={{
            fontFamily: "Bodoni Moda, serif",
          }}
        >
          We don&apos;t just tell you what to do.
          <br />
          We help you understand why it needs to change.
        </h1>
        {/* Description */}
        <p className="font-body-lg text-body-lg text-primary/50 max-w-2xl leading-relaxed mb-6">
          NB Business Solutions works with MSME leaders to bring clarity to
          business decisions and turn strategy into practical action.
        </p>
        <p className="font-body-lg text-body-lg text-primary/50 max-w-2xl leading-relaxed">
          With more than two decades of business experience, NBBS brings
          together strategic thinking, practical business frameworks and
          implementation-focused solutions to address the realities of growing
          businesses.
        </p>
        {/* Process line */}
        {/* <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold tracking-[0.08em] text-primary sm:text-[12px]">
          {processSteps.map((step, index) => (
            <span key={step} className="flex items-center gap-x-3">
              {step}
              {index < processSteps.length - 1 && (
                <span className="text-[#c9a86a]">→</span>
              )}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}
