"use client";

import { useMemo } from "react";
import { LucideSparkles } from "lucide-react";
import { useIndustryNamesQuery } from "@/src/hooks";

export default function IndustriesMarquee() {
  const { data: dynamicIndustries } = useIndustryNamesQuery();

  const currentIndustries = useMemo(() => {
    const active = dynamicIndustries || [];
    if (active.length === 0) return [];

    let extendedList = [...active];
    while (extendedList.length > 0 && extendedList.length < 10) {
      extendedList = [...extendedList, ...active];
    }
    return extendedList;
  }, [dynamicIndustries]);

  if (!currentIndustries || currentIndustries.length === 0) {
    return null;
  }

  return (
    <section className="section-y w-full overflow-hidden border-y border-black/8 bg-primary">
      <div className="mb-6 text-center md:mb-8">
        <span className="text-headline-md font-display text-secondary">
          Industries We Serve
        </span>
      </div>

      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex w-max items-center">
          <div className="flex shrink-0 items-center">
            {currentIndustries.map((industry, index) => (
              <div
                key={`track-1-${industry}-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="text-headline-md page-x whitespace-nowrap font-display font-bold text-white">
                  {industry}
                </span>
                <LucideSparkles
                  aria-hidden="true"
                  className="icon-xs shrink-0 text-secondary"
                />
              </div>
            ))}
          </div>

          <div className="flex shrink-0 items-center" aria-hidden="true">
            {currentIndustries.map((industry, index) => (
              <div
                key={`track-2-${industry}-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="text-headline-md page-x whitespace-nowrap font-display font-bold text-white">
                  {industry}
                </span>
                <LucideSparkles
                  aria-hidden="true"
                  className="icon-xs shrink-0 text-secondary"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
