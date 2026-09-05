export default function Hero() {
  return (
    <section className="container page-x section-y mx-auto">
      <div className="reveal max-w-4xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="eyebrow-rule bg-[#c9a86a] text-[#c9a86a]" />
          <span className="text-eyebrow text-[#c9a86a]">About NBBS</span>
        </div>

        <h1 className="text-display mb-8 font-display font-medium leading-tight text-primary">
          We don’t just tell you what to do. We help you understand what needs
          to change and why.
        </h1>

        <p className="text-body-lg mb-6 max-w-2xl text-primary/50">
          NB Business Solutions works with MSME leaders to bring clarity to
          complex business challenges and turn strategy into practical action.
        </p>

        <p className="text-body-lg max-w-2xl text-primary/50">
          With 20+ years of business experience, NBBS combines strategic
          thinking, practical frameworks, and implementation-focused solutions
          to help growing businesses understand, prioritise, and act for
          sustainable growth.
        </p>
      </div>
    </section>
  );
}
