"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import opd from "@/public/opd.avif";
import crm from "@/public/crm.jpg";
import cash from "@/public/cashflow.png";
import quotation from "@/public/quot.jpg";
import incentive from "@/public/incentive.png";

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

export default function ServicesPage() {
  const servicesSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".service-panel");

      if (!sections.length || !servicesSectionRef.current) return;

      // Initial position
      gsap.set(sections, {
        yPercent: 100,
      });

      // First section is already visible
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
    <div className="bg-[#fbf9f8] text-[#1a1b22] antialiased flex flex-col min-h-screen font-sans">
      <Header />

      <main className="grow">
        <section className="bg-[#141A32] relative overflow-hidden py-24 md:py-32">
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

          <div className=" mx-auto px-5 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 flex flex-col items-start space-y-8">
              <h1
                className="text-[48px] md:text-[72px] leading-[1.1] font-semibold text-white tracking-tight"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                The Ecosystem
              </h1>

              <p
                className="text-[40px] md:text-[48px] leading-[1.2] font-medium text-[#e8e7f0] md:w-4/5"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                Five solutions. One connected journey.
              </p>

              <p className="text-[18px] leading-[1.6] text-[#c0c5e5] md:w-3/4">
                We don&apos;t just solve isolated problems. We identify root
                causes and build integrated systems that scale with your
                ambition. Professional solutions designed for high-performance
                executives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <Link
                  href="/contacts"
                  className="bg-[#ffdea5] text-[#261900] text-[12px] leading-none rounded-xl tracking-widest font-bold uppercase px-6 py-4 hover:bg-[#e9c176] transition-colors flex items-center justify-center gap-2 group"
                >
                  Book a Business Diagnostic
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="#solutions"
                  className="border border-[#c7c5ce] text-white text-[12px] leading-none tracking-widest font-bold uppercase px-6 rounded-xl py-4 hover:bg-white hover:text-[#141a32] transition-colors flex items-center justify-center"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-[#fbf9f8]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-24 md:pt-36 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-[#e9c176]" />

                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#141A32]">
                  Our Solutions
                </span>

                <span className="w-12 h-px bg-[#e9c176]" />
              </div>

              <h2
                className="text-[#141A32] text-[42px] md:text-[58px] lg:text-[68px] leading-[1.02]"
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                Business problems.
                <br />
                <span className="text-[#c49b55] italic">
                  Practical solutions.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.7] text-[#62626a]">
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
            <div className="relative h-screen overflow-hidden">
              {services.map((service, index) => (
                <article
                  key={service.number}
                  className="service-panel absolute inset-0 w-full min-h-screen bg-[#EEF0F3]"
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  {/* Top Gold Line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e9c176]" />

                  {/* Service Number */}
                  <div className="absolute top-8 left-5 md:left-10 lg:left-16 z-20">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#8a8a91]">
                      Service
                    </span>

                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-[13px] font-bold text-[#141A32]">
                        {service.number}
                      </span>

                      <span className="w-8 h-px bg-[#e9c176]" />

                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#141A32]">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Top Right Label */}
                  <div className="absolute top-8 right-5 md:right-10 lg:right-16 z-20">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a91]">
                      NBBS BUSINESS SOLUTIONS
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="w-full h-full flex items-center px-5 md:px-10 lg:px-16 pt-20 pb-10">
                    <div className="w-full h-full max-w-[1600px] mx-auto flex items-center">
                      <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-0">
                        {/* LEFT */}
                        <div
                          className="
                  lg:col-span-4
                  lg:pr-12
                  xl:pr-20
                  flex
                  flex-col
                  justify-center
                  py-8
                "
                        >
                          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#b08b4d]">
                            {service.category}
                          </span>

                          <h3
                            className="
                    mt-5
                    text-[42px]
                    md:text-[54px]
                    lg:text-[60px]
                    xl:text-[72px]
                    leading-[1]
                    text-[#141A32]
                  "
                            style={{
                              fontFamily: "Bodoni Moda, serif",
                            }}
                          >
                            {service.title}
                          </h3>

                          <p
                            className="
                    mt-7
                    text-[18px]
                    md:text-[20px]
                    lg:text-[22px]
                    leading-[1.5]
                    font-medium
                    text-[#252a3e]
                    max-w-xl
                  "
                          >
                            {service.subtitle}
                          </p>

                          <div className="mt-8 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#e9c176]" />

                            <span className="text-[10px] tracking-[0.18em] uppercase text-[#777780]">
                              Business Solution
                            </span>
                          </div>

                          <Link
                            href="/contacts"
                            className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    w-fit
                    px-6
                    py-4
                    rounded-xl
                    bg-[#141A32]
                    text-white
                    text-[10px]
                    tracking-[0.18em]
                    uppercase
                    font-bold
                    hover:bg-[#1d2642]
                    transition-all
                    group
                  "
                          >
                            Book a Diagnostic
                            <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform">
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
                  border-[#c6c6ce]
                  px-0
                  lg:px-10
                  xl:px-14
                  flex
                  flex-col
                  justify-center
                  py-8
                "
                        >
                          <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#b08b4d]">
                            The Business Problem
                          </span>

                          <p
                            className="
                    mt-6
                    text-[16px]
                    md:text-[17px]
                    lg:text-[18px]
                    leading-[1.75]
                    text-[#62626a]
                  "
                          >
                            {service.problem}
                          </p>

                          <div className="w-16 h-px bg-[#e9c176] my-8" />

                          <span
                            className="
                    block
                    text-[10px]
                    tracking-[0.22em]
                    uppercase
                    font-bold
                    text-[#141A32]
                    mb-6
                  "
                          >
                            What changes
                          </span>

                          <div className="space-y-4">
                            {service.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-start gap-3"
                              >
                                <span
                                  className="
                          flex
                          shrink-0
                          items-center
                          justify-center
                          w-5
                          h-5
                          rounded-full
                          bg-[#e9c176]
                          text-[#141A32]
                          mt-0.5
                        "
                                >
                                  <span className="material-symbols-outlined text-[12px]">
                                    check
                                  </span>
                                </span>

                                <span className="text-[13px] md:text-[14px] leading-[1.5] text-[#46464d]">
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
                  flex
                  flex-col
                  justify-center
                  py-8
                "
                        >
                          {/* Image */}
                          <div
                            className="
                    relative
                    w-full
                    h-[220px]
                    md:h-[280px]
                    lg:h-[330px]
                    xl:h-[380px]
                    overflow-hidden
                    bg-[#fbf9f8]
                    border
                    border-[#c6c6ce]
                  "
                          >
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
                      bg-gradient-to-t
                      from-[#141A32]/50
                      via-transparent
                      to-transparent
                    "
                            />

                            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                              <span
                                className="
                        px-3
                        py-1.5
                        bg-[#141A32]
                        text-white
                        text-[8px]
                        tracking-[0.16em]
                        uppercase
                        font-bold
                      "
                              >
                                NBBS Solution
                              </span>

                              <div
                                className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#e9c176]
                        flex
                        items-center
                        justify-center
                        text-[#141A32]
                      "
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  north_east
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Information */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                            <div className="p-5 bg-[#fbf9f8] border border-[#c6c6ce]">
                              <span
                                className="
                        block
                        text-[8px]
                        tracking-[0.16em]
                        uppercase
                        text-[#8a8a91]
                        font-bold
                      "
                              >
                                Perfect For
                              </span>

                              <p
                                className="
                        mt-3
                        text-[12px]
                        leading-[1.5]
                        font-medium
                        text-[#141A32]
                      "
                              >
                                {service.audience}
                              </p>
                            </div>

                            <div className="p-5 bg-[#fbf9f8] border border-[#c6c6ce]">
                              <span
                                className="
                        block
                        text-[8px]
                        tracking-[0.16em]
                        uppercase
                        text-[#8a8a91]
                        font-bold
                      "
                              >
                                Business Proof
                              </span>

                              <p
                                className="
                        mt-3
                        text-[12px]
                        leading-[1.5]
                        font-bold
                        text-[#141A32]
                      "
                              >
                                {service.proof}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Progress */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 lg:px-16 py-4 border-t border-[#c6c6ce] flex items-center justify-between">
                    <p className="text-[9px] tracking-[0.16em] uppercase text-[#777780]">
                      Diagnose
                      <span className="mx-2 text-[#e9c176]">→</span>
                      Design
                      <span className="mx-2 text-[#e9c176]">→</span>
                      Implement
                    </p>

                    <p className="text-[9px] tracking-[0.16em] uppercase text-[#8a8a91]">
                      {service.number} / {service.category}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="
            bg-[#fbf9f8]
            py-24
            md:py-32
            border-t
            border-[#c7c5ce]
          "
          id="diagnostic"
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex justify-center">
            <div
              className="
                border
                border-[#c7c5ce]
                bg-white
                p-10
                md:p-16
                text-center
                max-w-2xl
                w-full
                rounded-[20px]
                shadow-[0_15px_50px_rgba(20,26,50,0.05)]
              "
            >
              <div className="flex items-center justify-center gap-4 mb-7">
                <span className="w-10 h-px bg-[#e9c176]" />

                <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#141A32]">
                  Start Here
                </span>

                <span className="w-10 h-px bg-[#e9c176]" />
              </div>

              <h2
                className="
                  text-[42px]
                  md:text-[48px]
                  leading-[1.2]
                  font-medium
                  text-[#141a32]
                  mb-6
                "
                style={{
                  fontFamily: "Bodoni Moda, serif",
                }}
              >
                Start with clarity.
              </h2>

              <p
                className="
                  text-[17px]
                  md:text-[18px]
                  leading-[1.6]
                  text-[#46464d]
                  mb-10
                  mx-auto
                  max-w-lg
                "
              >
                A focused 30-minute conversation to understand your current
                operational friction and determine if our ecosystem is the right
                fit.
              </p>

              <Link
                href="/contacts"
                className="
                  bg-[#141A32]
                  text-white
                  rounded-xl
                  px-6
                  py-4
                  text-[12px]
                  leading-none
                  tracking-widest
                  font-bold
                  uppercase
                  hover:bg-[#1d2642]
                  transition-all
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  group
                "
              >
                Book Your Business Diagnostic
                <span
                  className="
                    material-symbols-outlined
                    text-sm
                    group-hover:translate-x-1
                    transition-transform
                  "
                >
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
