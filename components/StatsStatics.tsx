import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="w-full border-y border-black/8 bg-primary">
      <div className="mx-auto grid max-w-350 grid-cols-1 md:grid-cols-3">
        {stats.map(({ value, label }, index) => (
          <div
            key={label}
            className={`
              flex min-h-37.5 flex-col items-center justify-center
              px-5 py-8
              ${index < stats.length - 1 ? "md:border-r md:border-secondary" : ""}
            `}
          >
            <span className="mb-2 text-4xl font-display text-secondary">
              {value}
            </span>

            <span className="text-xs font-sans font-medium uppercase tracking-widest text-white">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}