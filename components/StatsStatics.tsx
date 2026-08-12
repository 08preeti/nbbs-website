const stats = [
  ["50+", "SMBS TRUST NBBS"],
  ["3Cr+", "CONSULTING DELIVERED"],
  ["94%", "CLIENT RETENTION"],
  ["6 mo.", "TO SUSTAINABLE GROWTH"],
];

export default function StatsSection() {
  return (
    <section className="w-full border-y border-black/[0.08] bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div
            key={label}
            className={`
              flex min-h-[150px] flex-col items-center justify-center
              px-5 py-8
              ${index < 3 ? "md:border-r md:border-black/[0.08]" : ""}
            `}
          >
            <span className="text-4xl font-display mb-2 text-primary">{value}</span>

            <span className="text-xs uppercase tracking-widest text-primary/50 font-sans font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
