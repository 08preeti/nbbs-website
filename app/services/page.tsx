"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import opd from "@/public/opd.jpg";
import crm from "@/public/crm.jpg";
import cash from "@/public/cash.jpg";
import quotation from "@/public/quo.jpg";
import incentive from "@/public/incentive.jpg";

import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    number: "01",
    category: "DIAGNOSIS",
    title: "Business OPD",
    subtitle: "Diagnose before you prescribe.",
    image: opd,
    problem:
      "Most SMB owners can feel something is off — but don't know where to start. Wrong diagnosis leads to expensive consulting and software that never sticks.",
    points: [
      "Structured 30-min discovery call",
      "Operations leakage assessment",
      "Custom prescription roadmap",
      "Zero sales pressure",
    ],
    audience: "Owners who want clarity before committing to a solution.",
    proof: "50+ diagnostics delivered across Nashik",
  },
  {
    number: "02",
    category: "OPERATIONS",
    title: "NBBS CRM",
    subtitle: "Make every opportunity visible.",
    image: crm,
    problem:
      "Leads get lost, follow-ups are forgotten, and sales information remains scattered across spreadsheets, WhatsApp and individual team members.",
    points: [
      "Centralized lead tracking",
      "Follow-up visibility",
      "Sales pipeline management",
      "Team accountability",
    ],
    audience: "Growing teams that need a simple CRM their people actually use.",
    proof: "Designed around real SMB workflows",
  },
  {
    number: "03",
    category: "OPERATIONS",
    title: "Incentiwise",
    subtitle: "Turn commission chaos into clarity.",
    image: incentive,
    problem:
      "Manual commission calculations create disputes, slow down payouts and make it difficult for sales teams to understand exactly what they have earned.",
    points: [
      "Automated commission tracking",
      "Transparent calculations",
      "Sales performance visibility",
      "Fewer commission disputes",
    ],
    audience:
      "Sales-driven businesses with field teams and incentive structures.",
    proof: "30% reduction in commission disputes",
  },
  {
    number: "04",
    category: "OPTIMIZATION",
    title: "Quotation",
    subtitle: "Professional proposals. Faster decisions.",
    image: quotation,
    problem:
      "Inconsistent quotations slow down sales, create pricing confusion and make businesses look less professional than they actually are.",
    points: [
      "Standardized quotations",
      "Faster proposal creation",
      "Pricing consistency",
      "Professional customer experience",
    ],
    audience: "Businesses that generate frequent quotations and proposals.",
    proof: "Designed to reduce manual proposal work",
  },
  {
    number: "05",
    category: "OPTIMIZATION",
    title: "Cashflow",
    subtitle: "Know what is coming before it arrives.",
    image: cash,
    problem:
      "Businesses can be profitable on paper while still struggling to know when money will come in, when payments are due and where liquidity is going.",
    points: [
      "Cashflow visibility",
      "Payment tracking",
      "Liquidity planning",
      "Better financial decisions",
    ],
    audience: "Owners who need a clearer view of business cash movement.",
    proof: "Built for practical day-to-day financial visibility",
  },
];

export default function ServicesPage() {
  const servicesSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".service-panel");

      if (sections.length && servicesSectionRef.current) {
        gsap.set(sections, {
          yPercent: 100,
          opacity: 1,
          force3D: true,
        });
        gsap.set(sections[0], { yPercent: 0 });

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
            { yPercent: 0, duration: 1, ease: "none" },
            `service-${index}`,
          );
        });
      }

      ScrollTrigger.refresh();
    }, servicesSectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-[#fbf9f8] text-[#1a1b22] antialiased flex flex-col min-h-screen font-sans">
      <Header />

      <main className="grow">
        <section className="bg-[#141A32] relative overflow-hidden section-y">
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
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

          <div className="container page-x relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-9 lg:col-span-8 flex flex-col items-start space-y-6 sm:space-y-8">
              <h1 className="text-display font-display font-semibold text-white tracking-tight">
                NBBS Ecosystem
              </h1>

              <p className="text-headline-lg font-display font-medium text-[#e8e7f0] md:w-4/5">
                One connected journey. From diagnosis to implementation.
              </p>

              <p className="text-body-lg text-[#c0c5e5] md:w-4/5 lg:w-3/4">
                We look beyond symptoms to understand the real challenge,
                identify the right priorities, and connect strategy with
                practical implementation for sustainable business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/contacts"
                  className="bg-[#ffdea5] text-[#261900] text-button rounded-xl px-6 py-3.5 sm:py-4 hover:bg-[#e9c176] transition-colors flex items-center justify-center gap-2 group"
                >
                  EXPLORE The Business OPD™
                  <span className="material-symbols-outlined icon-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="#solutions"
                  className="border border-[#c7c5ce] text-white text-button rounded-xl px-6 py-3.5 sm:py-4 hover:bg-white hover:text-[#141a32] transition-colors flex items-center justify-center"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* solution  */}
        <section id="solutions" className="bg-[#fbf9f8]">
          <div className="container-wide page-x pt-[var(--fluid-section-y)] pb-10 sm:pb-12">
            <div className="max-w-3xl">
              <h2 className="text-display font-display text-[#141A32]">
                Business problems.
                <br />
                <span className="text-[#c49b55] italic">
                  Practical solutions.
                </span>
              </h2>

              <p className="mt-5 sm:mt-7 max-w-2xl text-body-lg text-[#4b4b54]">
                We diagnose how your business works today, identify where things
                break down, and build practical systems that help you operate,
                decide and grow better.
              </p>
            </div>
          </div>

          <div
            ref={servicesSectionRef}
            className="services-scroll relative w-full"
          >
            <div className="relative h-dvh overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="service-panel absolute inset-0 w-full h-full bg-[#e4e6ee] overflow-hidden"
                  style={{
                    zIndex: index + 1,
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                  }}
                >
                  <article className="h-full w-full overflow-y-auto overscroll-contain">
                    {/* Top Gold Line */}
                    <div className="sticky top-0 left-0 right-0 h-0.75 bg-[#e9c176] z-30" />

                    {/* Service Number */}
                    <div className="pt-7 sm:pt-8 page-x lg:absolute lg:inset-x-0 lg:top-8 lg:pt-0 z-20 flex items-center justify-between lg:block">
                      <div>
                        <span className="text-eyebrow font-semibold text-[#5c5c68]">
                          Service
                        </span>

                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-body-sm font-bold text-[#141A32]">
                            {service.number}
                          </span>

                          <span className="eyebrow-rule text-[#e9c176]" />

                          <span className="text-eyebrow text-[#141A32]">
                            {service.category}
                          </span>
                        </div>
                      </div>

                      {/* Top Right Label (inline on mobile/tablet, absolute on lg) */}
                      <span className="hidden sm:inline-block lg:absolute lg:top-0 lg:right-[var(--fluid-page-x)] text-eyebrow font-medium text-[#5c5c68]">
                        NBBS BUSINESS SOLUTIONS
                      </span>
                    </div>

                    {/* Main Content */}
                    <div className="w-full lg:h-full flex items-start lg:items-center page-x pt-6 sm:pt-8 lg:pt-20 pb-10 sm:pb-12">
                      <div className="w-full lg:h-full container-wide flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 sm:gap-10 lg:gap-0">
                          {/* LEFT */}
                          <div
                            className="
                            lg:col-span-4
                            lg:pr-12
                            xl:pr-20
                            flex
                            flex-col
                            justify-center
                            py-2
                            lg:py-8
                          "
                          >
                            <span className="text-eyebrow text-[#a3763a]">
                              {service.category}
                            </span>

                            <h3 className="mt-4 sm:mt-5 text-display font-display text-[#141A32]">
                              {service.title}
                            </h3>

                            <p className="mt-5 sm:mt-7 text-body-lg font-medium text-[#1f2333] max-w-xl">
                              {service.subtitle}
                            </p>

                            <div className="mt-6 sm:mt-8 flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-[#e9c176] shrink-0" />

                              <span className="text-eyebrow font-semibold text-[#4b4b58]">
                                Business Solution
                              </span>
                            </div>

                            <Link
                              href="/contacts"
                              className="btn-primary mt-7 sm:mt-10 w-fit bg-[#141A32] hover:bg-[#1d2642] hover:text-white shadow-none group"
                            >
                              Book a Diagnostic
                              <span className="material-symbols-outlined icon-md group-hover:translate-x-1 transition-transform">
                                arrow_forward
                              </span>
                            </Link>
                          </div>

                          {/* MIDDLE */}
                          <div
                            className="
                            lg:col-span-4
                            lg:border-l
                            lg:border-r
                            border-t
                            lg:border-t-0
                            border-[#b7bad0]
                            pt-8
                            lg:pt-8
                            px-0
                            lg:px-10
                            xl:px-14
                            flex
                            flex-col
                            justify-center
                            py-2
                            lg:py-8
                          "
                          >
                            <span className="text-eyebrow text-[#a3763a]">
                              The Business Problem
                            </span>

                            <p className="mt-5 sm:mt-6 text-body-lg text-[#3a3d4b]">
                              {service.problem}
                            </p>

                            <div className="eyebrow-rule text-[#e9c176] my-6 sm:my-8" />

                            <span className="block text-eyebrow text-[#141A32] mb-5 sm:mb-6">
                              What changes
                            </span>

                            <div className="space-y-3.5 sm:space-y-4">
                              {service.points.map((point) => (
                                <div
                                  key={point}
                                  className="flex items-start gap-3"
                                >
                                  <span className="flex shrink-0 items-center justify-center icon-sm rounded-full bg-[#e9c176] text-[#141A32] mt-0.5">
                                    <span className="material-symbols-outlined icon-xs">
                                      check
                                    </span>
                                  </span>

                                  <span className="text-body-sm font-medium text-[#2c2f3c]">
                                    {point}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div
                            className="
                            lg:col-span-4
                            lg:pl-10
                            xl:pl-14
                            border-t
                            lg:border-t-0
                            border-[#b7bad0]
                            pt-8
                            lg:pt-8
                            flex
                            flex-col
                            justify-center
                            py-2
                            lg:py-8
                          "
                          >
                            {/* Image */}
                            <div className="relative w-full media-frame overflow-hidden rounded-lg bg-[#fbf9f8] border border-[#b7bad0]">
                              <Image
                                src={service.image}
                                alt={`${service.title} business solution`}
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                hover:scale-105
                              "
                              />

                              <div
                                className="
                                absolute
                                inset-0
                                bg-linear-to-t
                                from-[#141A32]/60
                                via-transparent
                                to-transparent
                              "
                              />

                              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between">
                                <span className="px-2.5 sm:px-3 py-1.5 bg-[#141A32] text-white text-eyebrow">
                                  NBBS Solution
                                </span>

                                <div className="icon-lg rounded-full bg-[#e9c176] flex items-center justify-center text-[#141A32] shrink-0">
                                  <span className="material-symbols-outlined icon-md">
                                    north_east
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Information */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-4 sm:mt-5">
                              <div className="p-4 sm:p-5 bg-white rounded-lg border border-[#c3c6d6]">
                                <span className="block text-eyebrow text-[#5c5c68]">
                                  Perfect For
                                </span>

                                <p className="mt-2.5 sm:mt-3 text-body-sm font-medium text-[#141A32]">
                                  {service.audience}
                                </p>
                              </div>

                              <div className="p-4 sm:p-5 bg-white rounded-lg border border-[#c3c6d6]">
                                <span className="block text-eyebrow text-[#5c5c68]">
                                  Business Proof
                                </span>

                                <p className="mt-2.5 sm:mt-3 text-body-sm font-bold text-[#141A32]">
                                  {service.proof}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Progress */}
                    <div className="relative left-0 right-0 page-x py-4 border-t border-[#b7bad0] flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between">
                      <p className="text-eyebrow font-medium text-[#4b4b58] text-center sm:text-left">
                        Diagnose
                        <span className="mx-2 text-[#c49b55]">→</span>
                        Design
                        <span className="mx-2 text-[#c49b55]">→</span>
                        Implement
                      </p>

                      <p className="text-eyebrow font-medium text-[#5c5c68]">
                        {service.number} / {service.category}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* cta  */}
        <section
          className="bg-[#fbf9f8] section-y border-t border-[#c7c5ce]"
          id="diagnostic"
        >
          <div className="container page-x flex justify-center">
            <div
              className="
                border
                border-[#c7c5ce]
                bg-white
                p-6
                sm:p-10
                md:p-16
                text-center
                max-w-2xl
                w-full
                rounded-[20px]
                shadow-[0_15px_50px_rgba(20,26,50,0.05)]
              "
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-7">
                <span className="eyebrow-rule text-[#e9c176]" />

                <span className="text-eyebrow text-[#141A32]">Start Here</span>

                <span className="eyebrow-rule text-[#e9c176]" />
              </div>

              <h2 className="text-headline-lg font-display font-medium text-[#141a32] mb-5 sm:mb-6">
                Start with clarity.
              </h2>

              <p className="text-body-lg text-[#3a3d4b] mb-8 sm:mb-10 mx-auto max-w-lg">
                A focused 30-minute conversation to understand your current
                operational friction and determine if our ecosystem is the right
                fit.
              </p>

              <Link
                href="/contacts"
                className="btn-primary bg-[#141A32] hover:bg-[#1d2642] hover:text-white shadow-none group w-full sm:w-auto"
              >
                Book Your Business Diagnostic
                <span className="material-symbols-outlined icon-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
