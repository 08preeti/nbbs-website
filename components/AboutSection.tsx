// components/AboutSection.tsx
"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsStatics";
import Philosophy from "@/components/Philosophy";
import AnchorCustomers from "@/components/AnchorCustomers";
import DiagnosticCTA from "@/components/DiagnosticCTA";

export default function AboutSection() {
  return (
    <section id="about">
      <ScrollReveal>
        <Hero />
        <StatsSection />
        <Philosophy />
        <AnchorCustomers />
        <DiagnosticCTA />
      </ScrollReveal>
    </section>
  );
}