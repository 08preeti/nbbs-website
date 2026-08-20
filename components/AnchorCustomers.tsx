"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

type Result = {
  value: string;
  label: string;
};

type Customer = {
  company: string;
  founder: string;
  challenge: string;
  solution: string;
  results: Result[];
  quote: string;
};

const customers: Customer[] = [
  {
    company: "Shree Sales Corporation",
    founder: "SANJAY DIGHE, FOUNDER",

    challenge:
      "Manual commission tracking caused constant disputes and eroded field-team trust.",

    solution:
      "Business OPD diagnostic + Incentiwise rollout across 3 territories.",

    results: [
      {
        value: "30%",
        label: "Fewer commission disputes",
      },
      {
        value: "40%",
        label: "Revenue growth in 12 months",
      },
      {
        value: "100%",
        label: "Field rep adoption",
      },
    ],

    quote:
      "NBBS didn't just sell us a tool. They fixed how we think about our sales team first.",
  },

  {
    company: "Customer Two",
    founder: "SUMIT GANDHI, DIRECTOR",

    challenge:
      "Inconsistent quotes were causing pricing leaks and slow close cycles.",

    solution:
      "Standardized templates and approval workflow via Quotation.",

    results: [
      {
        value: "50%",
        label: "Faster quote turnaround",
      },
      {
        value: "18%",
        label: "Higher average tickets",
      },
      {
        value: "2x",
        label: "Conversion on pitches",
      },
    ],

    quote:
      "We look like a multinational firm now, even though we operate from a tier-2 city.",
  },
];

export default function AnchorCustomers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current || customers.length < 2) {
        return;
      }

      const totalCards = customers.length;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${(totalCards - 1) * window.innerHeight}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const slide = Math.min(
              totalCards - 1,
              Math.max(0, Math.round(self.progress * (totalCards - 1)))
            );

            setCurrentSlide((previousSlide) =>
              previousSlide === slide ? previousSlide : slide,
            );
          },
        },
      });

      timeline.to(trackRef.current, {
        xPercent: -100 * (totalCards - 1),
        ease: "none",
      });

      timelineRef.current = timeline;
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      timelineRef.current = null;
      ctx.revert();
    };
  }, []);

  const moveToSlide = (slide: number) => {
    const targetSlide = Math.max(0, Math.min(customers.length - 1, slide));
    const timeline = timelineRef.current;

    if (!timeline || !timeline.scrollTrigger) {
      setCurrentSlide(targetSlide);
      return;
    }

    const scrollTrigger = timeline.scrollTrigger;
    const progress =
      customers.length > 1 ? targetSlide / (customers.length - 1) : 0;
    const targetScroll =
      scrollTrigger.start +
      (scrollTrigger.end - scrollTrigger.start) * progress;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    moveToSlide(currentSlide + 1);
  };

  const previousSlide = () => {
    moveToSlide(currentSlide - 1);
  };

  return (
    <section ref={sectionRef} className="bg-paper py-16 md:py-20">
      {/* ============================================================
          HEADER
      ============================================================ */}

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />


        </div>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-3xl text-3xl font-black leading-[0.92] tracking-[-0.045em] text-navy sm:text-4xl md:text-5xl">
            Anchor Customers
          </h2>


        </div>
      </div>

      {/* ============================================================
          SLIDER
      ============================================================ */}

      <div className="w-full mt-14">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex"
          >
            {customers.map((customer, index) => (
              <div
                key={`${customer.company}-${index}`}
                className="w-full shrink-0 px-1"
              >
                <article
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border-navy/[0.07]
                    bg-white
                    shadow-[0_18px_60px_rgba(15,23,42,0.07)]
                  "
                >
                  {/* ==================================================
                      MAIN CONTENT
                  ================================================== */}

                  <div className="grid md:grid-cols-[1.08fr_0.92fr]">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="flex flex-col px-7 pb-8 pt-8 sm:px-9 sm:pt-9 md:px-11 md:pb-10 md:pt-10">
                      {/* Label */}



                      {/* Company */}

                      <h3 className="mt-7 max-w-150 font-display text-3xl font-black leading-[0.98] tracking-[-0.04em] text-navy sm:text-4xl md:text-[2.8rem]">
                        {customer.company}
                      </h3>

                      {/* Founder */}

                      <div className="mt-4 flex items-center gap-3">

                        <span className="text-[14px] text-left font-bold uppercase tracking-[0.18em] text-secondary">
                          {customer.founder}
                        </span>
                      </div>

                      {/* Challenge */}

                      <div className="mt-10">
                        <div className="mb-3 flex items-center gap-4">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/50">
                            Challenge
                          </span>

                          <span className="h-px w-10 bg-navy/10" />
                        </div>

                        <p className="max-w-140 text-sm leading-6 text-navy/65 md:text-[15px] md:leading-7">
                          {customer.challenge}
                        </p>
                      </div>

                      {/* Solution */}

                      <div className="mt-7">
                        <div className="mb-3 flex items-center gap-4">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/50">
                            Solution
                          </span>

                          <span className="h-px w-10 bg-gold/40" />
                        </div>

                        <p className="max-w-140 text-sm font-medium leading-6 text-navy md:text-[15px] md:leading-7">
                          {customer.solution}
                        </p>
                      </div>

                      {/* Results */}

                      <div className="mt-10">
                        <hr className="text-primary/50 mb-3" />
                        <div className="grid grid-cols-3">
                          {customer.results.map((result, resultIndex) => (
                            <div
                              key={result.label}
                              className={`
                                ${resultIndex > 0
                                  ? "border-l border-navy/10 pl-4 sm:pl-5"
                                  : ""
                                }
                                ${resultIndex < 2
                                  ? "pr-4 sm:pr-5"
                                  : ""
                                }
                              `}
                            >
                              <div className="font-display text-2xl font-black leading-none tracking-tighter text-navy sm:text-3xl md:text-4xl">
                                {result.value}
                              </div>

                              <p className="mt-2 max-w-32.5 text-[8px] font-bold uppercase leading-[1.45] tracking-[0.07em] text-navy/40 sm:text-[9px]">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        RIGHT QUOTE
                    ================================================= */}

                    <div className="flex items-center justify-center bg-[#f4f0e8] px-6 py-8 sm:px-9 md:px-10">
                      <div
                        className="
                          relative
                          w-full
                          max-w-102.5
                          rounded-[20px]
                          bg-[#141a32]
                          px-7
                          py-8
                          shadow-[0_20px_50px_rgba(15,23,42,0.25)]
                          transition-transform
                          duration-500
                          ease-out
                          sm:px-9
                          sm:py-10
                          group-hover:scale-[1.03]
                        "
                      >
                        {/* Gold accent */}

                        <span className="absolute bottom-7 left-0 top-7 w-0.75 bg-[#e9c176]" />

                        {/* Quote mark */}

                        <div className="font-serif text-6xl leading-none text-[#e9c176]">
                          “
                        </div>

                        {/* Quote */}

                        <blockquote className="mt-5 font-serif text-2xl italic leading-9 text-white sm:text-[26px]">
                          {customer.quote}
                        </blockquote>

                        {/* Footer */}

                        <div className="mt-10 flex items-end justify-between gap-5">
                          <div>
                            <div className="mb-2 h-px w-8 bg-[#e9c176]" />


                          </div>


                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}

                  <div className="h-0.5 w-full bg-navy/[0.04]">
                    <div className="h-full w-16 bg-gold" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            SLIDER CONTROLS
        ============================================================ */}

        <div className="mt-8 flex items-center justify-between">
          {/* Left */}

          

          {/* Controls */}

          <div className="flex items-center gap-3">
            {/* Previous */}



            {/* Progress */}

            <div className="flex items-center gap-2">
              {customers.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => moveToSlide(index)}
                  aria-label={`Go to customer ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500
                    ${currentSlide === index
                      ? "w-10 bg-gold"
                      : "w-2 bg-navy/15 hover:bg-navy/30"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next */}


          </div>
        </div>
      </div>
    </section>
  );
}