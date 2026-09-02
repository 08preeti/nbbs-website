// components/IndustriesMarquee.tsx
"use client";

import { industries } from "@/data/industries";

export default function IndustriesMarquee() {
 
  const track = [...industries, ...industries];

  return (
    <section className="w-full overflow-hidden border-y border-black/8 bg-primary py-8 md:py-10">
      {/* HEADING */}
      <div className="mb-6 text-center md:mb-8">
        <span className="text-label-caps text-secondary">
          Industries We Serve
        </span>
      </div>

      {/* MARQUEE */}
      <div
        className="group relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex w-max items-center">
          {track.map((industry, index) => (
            <div key={`${industry}-${index}`} className="flex shrink-0 items-center">
              <span className="whitespace-nowrap px-6 font-display text-lg font-bold text-white sm:px-8 sm:text-xl md:text-2xl">
                {industry}
              </span>

              <span aria-hidden="true" className="text-lg text-secondary">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}