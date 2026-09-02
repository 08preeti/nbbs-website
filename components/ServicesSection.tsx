"use client";

import Link from "next/link";
import Image from "next/image";
import opd from "@/public/solution.jpg";
import cash from "@/public/cashflow.jpg";
import incentive from "@/public/incentives.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    number: "01",
    category: "Business Clarity Workshop",
    title: "Real Strategies, Actionable Tools.",
    subtitle: "Know what is coming before it arrives.",
    image: cash,
    cta: "Explore Workshop",
    identity: "Key Takeaways",

    title1:
      "Most businesses don’t have a growth problem. They have a clarity problem.",

    problem:
      "The Business Clarity Workshop helps founders step back from daily firefighting, assess where their business truly stands, identify what’s holding it back, and know what to focus on next through our 8-Pillar Business Clarity Diagnostic.",

    points: [
      "8-Pillar Business Clarity Diagnostic",
      "Business Frameworks",
      "Clarity on What Matters Most",
      "Visibility into Your Biggest Constraint",
      "Personalised Clarity Report",
    ],

    audience:
      "MSME owners who want clarity on where their business stands and what to do next.",

    proof:
      "An interactive 3-hour workshop built around practical business frameworks and an 8-Pillar Business Health Diagnostic.",
  },

  {
    number: "02",
    category: "The Business OPD™ DIAGNOSIS",
    title: "A Structured Clarity Diagnosis for Founders & Entrepreneurs",
    subtitle: "Diagnose before you prescribe.",
    image: opd,
    cta: "Book a Diagnostic",

    title1:
      "One focused diagnosis. A clear prescription. Actionable next steps.",

    identity: "Key Takeaways",
    identity1: "We Identify",

    problem:
      "In a focused 90-minute Business OPD™, we look beyond the symptoms to understand what’s really happening in your business, where the gaps are, and what deserves your attention first.",

    points: [
      "Where you’re stuck",
      "What’s not working",
      "What’s costing you",
      "What needs fixing first",
    ],

    title2:
      "A focused diagnosis that moves you from understanding the problem to knowing what to do next.",

    points2: [
      "✓ Business check-in & current situation analysis",
      "✓ Business symptom analysis",
      "✓ Root cause diagnosis",
      "✓ One-Page Business Diagnosis Report",
      "✓ Actionable next-step roadmap",
    ],

    audience:
      "MSME founders who need clarity on what’s holding their business back.",

    proof: "150+ Business Diagnostics Delivered",
  },

  {
    number: "03",
    category: "Incentiwise",
    title: "Incentives Made Intelligent",
    subtitle:
      "Track sales, tasks, targets, and incentive programs from one transparent platform - with live dashboards every role can trust.",
    image: incentive,
    cta: "Explore Incentiwise",

    identity: "Why Incentiwise?",

    problem:
      "Incentive management becomes complicated as teams, targets, rules, and payouts grow. Manual calculations and scattered data create errors, disputes, and a lack of visibility for both managers and employees.",

    points: [
      "Automated Incentive Calculations",
      "Flexible Incentive Rule Builder",
      "Goal & Performance Tracking",
      "Employee & Channel Partner Management",
      "Recovery & Clawback Management",
      "Transparent Incentive Visibility",
      "WhatsApp & Email Notifications",
      "Live Dashboards & Analytics",
      "Monthly Incentive Vouchers",
      "Reports & Audit Trail",
    ],

    audience: "Built for founders and growing teams who value transparency",

    proof:
      "30% fewer incentive disputes. Save hours on complex incentive calculations.",
  },
];

const stages = [
  {
    number: "01",
    title: "Diagnostic",
    text: "Identify your unique operational challenges in a focused 30-minute session.",
  },
  {
    number: "02",
    title: "Prescription",
    text: "Turn the diagnosis into a practical roadmap built around your actual business.",
  },
  {
    number: "03",
    title: "Instrumentation",
    text: "Introduce the systems, tools and workflows needed to make improvement measurable.",
  },
  {
    number: "04",
    title: "Scale",
    text: "Build repeatable processes that reduce dependency and create controlled growth.",
  },
];

export default function ServicesSection() {
  const servicesSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".service-panel");

      if (!sections.length || !servicesSectionRef.current) {
        return;
      }

      // Initial position of all cards
      gsap.set(sections, {
        yPercent: 100,
      });

      // First card stays visible
      gsap.set(sections[0], {
        yPercent: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: servicesSectionRef.current,
          start: "top top",
          end: `+=${sections.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      sections.forEach((section, index) => {
        if (index === 0) return;

        timeline.to(
          section,
          {
            yPercent: 0,
            duration: 1,
            ease: "none",
          },
          `service-${index}`,
        );
      });

      ScrollTrigger.refresh();
    }, servicesSectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="services"
      className="bg-[#fbf9f8] text-[#1a1b22] antialiased font-sans"
    >
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#141A32] py-14 sm:py-16 md:py-20">
        {/* Grid Background */}

        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.1) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="flex max-w-4xl flex-col items-start">
            {/* Label */}

            <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-4">
              <span className="h-px w-7 bg-[#e9c176] sm:w-12" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px] sm:tracking-[0.25em]">
                Our Services
              </span>

              <span className="h-px w-7 bg-[#e9c176] sm:w-12" />
            </div>

            {/* Heading */}

            <h1
              className="text-[44px] font-medium leading-[1.05] tracking-tight text-white xs:text-[48px] sm:text-[56px] md:text-[72px]"
              style={{
                fontFamily: "Bodoni Moda, serif",
              }}
            >
              NBBS Ecosystem
            </h1>

            {/* Subheading */}

            <p
              className="mt-5 max-w-4xl text-[30px] font-medium leading-[1.15] text-[#e8e7f0] sm:mt-6 sm:text-[36px] md:text-[48px]"
              style={{
                fontFamily: "Bodoni Moda, serif",
              }}
            >
              One connected journey. From diagnosis to implementation.
            </p>

            {/* Description */}

            <p className="mt-6 max-w-3xl text-[15px] leading-[1.65] text-[#c0c5e5] sm:mt-7 sm:text-[17px] md:text-[18px]">
              We look beyond symptoms to understand the real challenge, identify
              the right priorities, and connect strategy with practical
              implementation for sustainable business growth.
            </p>

            {/* Buttons */}

            <div className="flex w-full flex-col gap-3 pt-7 sm:w-auto sm:flex-row sm:gap-4 sm:pt-8">
              <Link
                href="/#contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#261900] transition-colors hover:bg-gray-300 sm:w-auto sm:px-6 sm:text-[12px] sm:tracking-widest"
              >
                Not sure where to start?
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>

              <Link
                href="/#contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#ffdea5] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#261900] transition-colors hover:bg-[#e9c176] sm:w-auto sm:px-6 sm:text-[12px] sm:tracking-widest"
              >
                EXPLORE The Business OPD™
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}

      <section id="solutions" className="bg-[#fbf9f8]">
        {/* =========================================================
            GSAP SERVICES
        ========================================================= */}

        <div
          ref={servicesSectionRef}
          className="services-scroll relative w-full"
        >
          <div className="relative h-screen overflow-hidden">
            {services.map((service, index) => (
              <article
                key={service.number}
                id={`service-${service.number}`}
                className="service-panel absolute inset-0 h-screen w-full overflow-hidden bg-[#EEF0F3]"
                style={{
                  zIndex: index + 1,
                }}
              >
                {/* TOP GOLD LINE */}

                <div className="absolute left-0 right-0 top-0 h-0.5 bg-[#e9c176] sm:h-0.75" />

                {/* =================================================
                    TOP LEFT
                ================================================= */}

                <div className="absolute left-5 top-5 z-20 sm:left-8 sm:top-7 md:left-10 md:top-8 lg:left-16">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-[#8a8a91] sm:text-[10px] sm:tracking-[0.25em]">
                    Service
                  </span>

                  <div className="mt-1.5 flex items-center gap-2 sm:mt-2 sm:gap-3">
                    <span className="text-[11px] font-bold text-[#141A32] sm:text-[13px]">
                      {service.number}
                    </span>

                    <span className="h-px w-5 bg-[#e9c176] sm:w-8" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#141A32] sm:text-[10px] sm:tracking-[0.2em]">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* =================================================
                    TOP RIGHT
                ================================================= */}

                <div className="absolute right-5 top-6 z-20 sm:right-8 sm:top-8 md:right-10 lg:right-16">
                  <span className="text-[7px] uppercase tracking-[0.15em] text-[#8a8a91] sm:text-[9px] sm:tracking-[0.2em]">
                    NBBS BUSINESS SOLUTIONS
                  </span>
                </div>

                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div className="h-full w-full px-5 pb-14 pt-16 sm:px-8 sm:pb-14 sm:pt-20 md:px-10 lg:px-16">
                  <div className="mx-auto flex h-full w-full max-w-[1600px] items-center">
                    <div className="grid max-h-[calc(100vh-130px)] w-full grid-cols-1 gap-0 overflow-hidden lg:grid-cols-12">
                      {/* =================================================
                          LEFT COLUMN
                      ================================================= */}

                      <div className="flex flex-col justify-center py-2 lg:col-span-4 lg:pr-10 xl:pr-20">
                        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#b08b4d] sm:text-[10px] sm:tracking-[0.25em]">
                          {service.category}
                        </span>

                        <h3
                          className="mt-2 text-[34px] font-medium leading-[0.98] text-[#141A32] sm:mt-4 sm:text-[40px] md:text-[48px] lg:mt-5 lg:text-[54px] xl:text-[52px]"
                          style={{
                            fontFamily: "Bodoni Moda, serif",
                          }}
                        >
                          {service.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-[14px] font-medium leading-[1.4] text-[#252a3e] sm:mt-5 sm:text-[16px] md:text-[18px] lg:mt-6">
                          {service.subtitle}
                        </p>

                        <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3 lg:mt-7">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#e9c176] sm:h-2 sm:w-2" />

                          <span className="text-[8px] uppercase tracking-[0.15em] text-[#777780] sm:text-[10px] sm:tracking-[0.18em]">
                            Business Solution
                          </span>
                        </div>

                        <Link
                          href="/#contact"
                          className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#141A32] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#1d2642] sm:mt-7 sm:w-fit sm:gap-3 sm:px-6 sm:py-4 sm:text-[10px] sm:tracking-[0.18em] lg:mt-8"
                        >
                          {service.cta}

                          <span className="material-symbols-outlined text-[15px] transition-transform group-hover:translate-x-1 sm:text-[17px]">
                            arrow_forward
                          </span>
                        </Link>
                      </div>

                      {/* =================================================
                          MIDDLE COLUMN
                      ================================================= */}

                      <div className="flex max-h-full flex-col justify-start overflow-y-auto py-2 scrollbar-hide lg:col-span-4 lg:border-l lg:border-r lg:border-[#c6c6ce] lg:px-8 lg:py-6 xl:px-14">
                        {/* TITLE */}

                        <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#b08b4d] sm:text-[10px] sm:tracking-[0.22em]">
                          {service.title1}
                        </span>

                        {/* PROBLEM */}

                        <p className="mt-3 text-[12px] leading-[1.5] text-[#62626a] sm:mt-4 sm:text-[14px] sm:leading-[1.65] md:text-[15px] lg:mt-5">
                          {service.problem}
                        </p>

                        {/* GOLD DIVIDER */}

                        <div className="my-4 h-px w-10 bg-[#e9c176] sm:my-5 sm:w-16 lg:my-6" />

                        {/* =================================================
                            WE IDENTIFY
                        ================================================= */}

                        {service.identity1 && (
                          <>
                            <span className="mb-2 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#141A32] sm:mb-3 sm:text-[10px] sm:tracking-[0.22em]">
                              {service.identity1}
                            </span>

                            <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                              {service.points2?.map((point) => (
                                <div
                                  key={point}
                                  className="flex items-start gap-2 sm:gap-3"
                                >
                                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e9c176] text-[#141A32] sm:h-5 sm:w-5">
                                    <span className="material-symbols-outlined text-[9px] sm:text-[12px]">
                                      check
                                    </span>
                                  </span>

                                  <span className="text-[10px] leading-[1.35] text-[#46464d] sm:text-[12px] sm:leading-[1.4] md:text-[13px]">
                                    {point.replace("✓ ", "")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {/* =================================================
                            KEY TAKEAWAYS
                        ================================================= */}

                        <span className="mb-2 mt-8 block text-[8px] font-bold uppercase tracking-[0.18em] text-[#141A32] sm:mb-3 sm:mt-10 sm:text-[10px] sm:tracking-[0.22em] lg:mt-12">
                          {service.identity}
                        </span>

                        <div className="space-y-2 sm:space-y-2.5 lg:space-y-3">
                          {service.points?.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e9c176] text-[#141A32] sm:h-5 sm:w-5">
                                <span className="material-symbols-outlined text-[9px] sm:text-[12px]">
                                  check
                                </span>
                              </span>

                              <span className="text-[10px] leading-[1.35] text-[#46464d] sm:text-[12px] sm:leading-[1.4] md:text-[13px]">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Optional title2 */}

                        {service.title2 && (
                          <p className="mt-6 text-[11px] leading-[1.5] text-[#62626a] sm:mt-7 sm:text-[13px] sm:leading-[1.6]">
                            {service.title2}
                          </p>
                        )}
                      </div>

                      {/* =================================================
                          RIGHT COLUMN
                      ================================================= */}

                      <div className="flex flex-col justify-center py-2 lg:col-span-4 lg:pl-8 xl:pl-14">
                        {/* IMAGE */}

                        <div className="relative h-36 w-full overflow-hidden border border-[#c6c6ce] bg-[#fbf9f8] sm:h-48 md:h-56 lg:h-[330px] xl:h-[380px]">
                          <Image
                            src={service.image}
                            alt={`${service.title} business solution`}
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#141A32]/50 via-transparent to-transparent" />

                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between sm:bottom-5 sm:left-5 sm:right-5">
                            <span className="bg-[#141A32] px-2 py-1 text-[7px] font-bold uppercase tracking-[0.12em] text-white sm:px-3 sm:py-1.5 sm:text-[8px] sm:tracking-[0.16em]">
                              NBBS Solution
                            </span>

                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9c176] text-[#141A32] sm:h-10 sm:w-10">
                              <span className="material-symbols-outlined text-[15px] sm:text-[18px]">
                                north_east
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* INFORMATION */}

                        <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 lg:mt-5 lg:gap-4">
                          {/* PERFECT FOR */}

                          <div className="border border-[#c6c6ce] bg-[#fbf9f8] p-3 sm:p-4 lg:p-5">
                            <span className="block text-[7px] font-bold uppercase tracking-[0.12em] text-[#8a8a91] sm:text-[8px] sm:tracking-[0.16em]">
                              Perfect For
                            </span>

                            <p className="mt-1 text-[9px] font-medium leading-[1.4] text-[#141A32] sm:mt-2 sm:text-[10px] lg:text-[12px]">
                              {service.audience}
                            </p>
                          </div>

                          {/* BUSINESS PROOF */}

                          <div className="border border-[#c6c6ce] bg-[#fbf9f8] p-3 sm:p-4 lg:p-5">
                            <span className="block text-[7px] font-bold uppercase tracking-[0.12em] text-[#8a8a91] sm:text-[8px] sm:tracking-[0.16em]">
                              Business Proof
                            </span>

                            <p className="mt-2 text-[9px] font-bold leading-[1.4] text-[#141A32] sm:text-[10px] lg:text-[12px]">
                              {service.proof}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM PROGRESS
                ================================================= */}

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 border-t border-[#c6c6ce] bg-[#EEF0F3]/95 px-5 py-2.5 backdrop-blur-sm sm:px-8 sm:py-3 md:px-10 lg:px-16 lg:py-4">
                  <p className="text-[7px] uppercase tracking-widest text-[#777780] sm:text-[8px] sm:tracking-[0.16em] lg:text-[9px]">
                    <span className="hidden sm:inline">Diagnose</span>

                    <span className="sm:hidden">D</span>

                    <span className="mx-1 text-[#e9c176] sm:mx-2">→</span>

                    <span className="hidden sm:inline">Design</span>

                    <span className="sm:hidden">D</span>

                    <span className="mx-1 text-[#e9c176] sm:mx-2">→</span>

                    <span className="hidden sm:inline">Implement</span>

                    <span className="sm:hidden">I</span>
                  </p>

                  <p className="text-right text-[7px] uppercase tracking-widest text-[#8a8a91] sm:text-[8px] sm:tracking-[0.16em] lg:text-[9px]">
                    {service.number} / {service.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
