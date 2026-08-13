"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import opd from "@/public/opd.avif";
import crm from "@/public/crm.jpg";
import cash from "@/public/cashflow.png";
import quotation from "@/public/quot.jpg";
import incentive from "@/public/incentive.png";
import Image from "next/image";

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
  return (
    <div className="bg-[#fbf9f8] text-[#1a1b22] antialiased flex flex-col min-h-screen font-sans">
      {/* Header */}
      <Header />

      <main className="grow">
        {/* Hero Section */}
        <section className="bg-[#141A32] relative overflow-hidden py-24 md:py-32">
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-[1280px] mx-auto px-5 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 flex flex-col items-start space-y-8">
             

              <h1
                className="text-[48px] md:text-[72px] leading-[1.1] font-semibold text-white tracking-tight"
                style={{ fontFamily: "Bodoni Moda, serif" }}
              >
                The Ecosystem
              </h1>

              <p
                className="text-[48px] leading-[1.2] font-medium text-[#e8e7f0] md:w-4/5"
                style={{ fontFamily: "Bodoni Moda, serif" }}
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
       
        {/* Service Cards */}
        <section className="bg-[#fbf9f8] py-16 md:py-32">
          <div className="max-w-[1280px] mx-auto px-5 md:px-16 space-y-16">
            {services.map((service, index) => (
              <div
                key={service.number}
                className="bg-[#EEF0F3] border border-[#C6C6CE] rounded-xl overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:border-[#a17f3b] group"
              >
                {/* Start Here badge */}
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-[#ffdea5] text-[#261900] text-[10px] leading-none tracking-widest px-3 py-1.5 uppercase font-bold z-10 rounded-bl-lg">
                    Start Here
                  </div>
                )}

                <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Category */}
                  <div className="lg:col-span-3">
                    <span className="text-[12px] leading-none tracking-widest font-bold text-secondary uppercase border-b border-[#c7c5ce] pb-2 inline-block mb-4">
                      {service.number} / {service.category}
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-5 space-y-4">
                    <h3
                      className="text-[32px] leading-[1.3] font-medium text-[#141a32]"
                      style={{ fontFamily: "Bodoni Moda, serif" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-[18px] leading-[1.6] font-medium">
                      {service.subtitle}
                    </p>

                    <p className="text-[16px] leading-[1.6] text-[#5e5e5e]">
                      {service.problem}
                    </p>
                  </div>

                  {/* Right Content */}
                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#c7c5ce] pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between h-full space-y-6">
                    {/* Service Image */}
                    <div className="h-32 w-full bg-white border border-[#c7c5ce] rounded overflow-hidden relative group/image">
                      <Image
                        src={service.image}
                        alt={`${service.title} business solution`}
                        fill
                        className="object-cover transition-transform duration-500 w-full h-full group-hover/image:scale-105"
                      />

                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-[#141A32]/5 group-hover/image:bg-transparent transition-colors duration-300" />
                    </div>

                    <div>
                      {/* Points */}
                      <ul className="text-[16px] leading-[1.6] text-[#46464d] space-y-2 mb-6">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-[#e9c176] text-lg">
                              check
                            </span>

                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Audience + Proof */}
                      <p className="text-[13px] leading-[1.4] text-[#5e5e5e] mb-4 block">
                        Perfect for: {service.audience}
                        <br />
                        <span className="font-bold text-[#141a32]">
                          Proof: {service.proof}
                        </span>
                      </p>

                      {/* CTA */}
                      <Link
                        href="/contacts"
                        className="inline-flex items-center gap-2 text-[12px] leading-none tracking-widest font-bold text-[#141a32] uppercase hover:text-[#e9c176] transition-colors group/link"
                      >
                        Book a Diagnostic
                        <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        {/* <section className="bg-[#141A32] py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-5 md:px-16">
            <div className="max-w-3xl mb-16">
              <span className="text-[#e9c176] text-[12px] leading-none tracking-[0.1em] font-bold uppercase block mb-6">
                How It Works
              </span>

              <h2
                className="text-[44px] md:text-[60px] leading-[1.15] font-medium text-white"
                style={{ fontFamily: "Bodoni Moda, serif" }}
              >
                From business problem to business system.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/20">
              {stages.map((stage, index) => (
                <div
                  key={stage.number}
                  className={`p-8 md:p-10 ${
                    index !== stages.length - 1
                      ? "border-b lg:border-b-0 lg:border-r border-white/20"
                      : ""
                  }`}
                >
                  <span className="text-[#e9c176] text-[14px] tracking-[0.1em] font-bold">
                    {stage.number}
                  </span>

                  <h3
                    className="text-[28px] md:text-[32px] text-white mt-6 mb-4"
                    style={{ fontFamily: "Bodoni Moda, serif" }}
                  >
                    {stage.title}
                  </h3>

                  <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#c0c5e5]">
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Final CTA */}
        <section
          className="bg-[#fbf9f8] py-24 md:py-32 border-t border-[#c7c5ce] "
          id="diagnostic"
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-16 flex justify-center">
            <div className="border border-[#c7c5ce] bg-white p-12 md:p-16 text-center max-w-2xl w-full rounded-xl">
              <h2
                className="text-[48px] leading-[1.2] font-medium text-[#141a32] mb-6"
                style={{ fontFamily: "Bodoni Moda, serif" }}
              >
                Start with clarity.
              </h2>

              <p className="text-[18px] leading-[1.6] text-[#46464d] mb-10 mx-auto max-w-lg">
                A focused 30-minute conversation to understand your current
                operational friction and determine if our ecosystem is the right
                fit.
              </p>

              <Link
                href="/contacts"
                className="bg-[#141A32]  text-white rounded-xl px-6 py-4 text-[12px] leading-none tracking-widest font-bold uppercase hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 group"
              >
                Book Your Business Diagnostic
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
