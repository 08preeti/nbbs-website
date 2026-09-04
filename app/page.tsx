// app/page.tsx

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsStatics";
import IndustriesMarquee from "@/components/IndustriesMarquee";
import VisionMissionSection from "@/components/Visionmissionsection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fbf9f8] text-[#172039] antialiased">
      <Header />

      <main className="w-full grow overflow-x-hidden">
        {/* ============================================================
            HERO — uses hero-* utilities only (tokens in globals.css)
        ============================================================ */}

        <section id="home" className="hero-section">
          <div className="hero-shell">
            <div className="hero-stack">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-rule" />
                <span className="hero-eyebrow-label">
                  INTEGRATED BUSINESS SOLUTIONS
                </span>
                <span className="hero-eyebrow-rule" />
              </div>

              <h1 className="hero-title">
                <span className="hero-title-line">
                  <span>From </span>
                  <span className="hero-title-accent">Diagnosis</span>
                </span>
                <br />
                <span className="hero-title-line">to Solution</span>
                <br />
                <span className="hero-title-line">Implementation.</span>
              </h1>
              <div className="hero-scribble">
                <Image
                  src="/scribble-main.png"
                  alt="From Chaos to Clarity - Business Diagnosis and Solution Implementation"
                  width={2172}
                  height={724}
                  priority
                  className="hero-scribble-img"
                />
              </div>

              <p className="hero-body mt-10">
                NB Business Solutions helps MSME founders identify what is
                holding their business back, create clarity on what needs
                attention, and implement practical business solutions for
                sustainable growth.
              </p>

              <div className="hero-cta">
                <a href="/#services" className="hero-cta-link">
                  <span className="hero-cta-label">Explore NBBS Ecosystem</span>
                  <ArrowRight
                    className="hero-cta-arrow"
                    aria-hidden="true"
                    strokeWidth={2.25}
                  />
                </a>
              </div>

              <div className="hero-meta">
                <span>STRATEGY</span>
                <span className="hero-meta-dot">•</span>
                <span>EXECUTION</span>
                <span className="hero-meta-dot">•</span>
                <span>GROWTH</span>
              </div>
            </div>
          </div>

          <div className="hero-divider" />
        </section>

        {/* ============================================================
            STATS
        ============================================================ */}

        <section className="w-full overflow-hidden">
          <StatsSection />
        </section>

        {/* ============================================================
            INDUSTRIES
        ============================================================ */}

        <section className="w-full overflow-hidden">
          <IndustriesMarquee />
        </section>

        {/* ============================================================
            VISION & MISSION
        ============================================================ */}

        <section className="w-full overflow-hidden">
          <VisionMissionSection />
        </section>

        {/* ============================================================
            SERVICES
        ============================================================ */}

        <section id="services" className="w-full overflow-hidden">
          <ServicesSection />
        </section>

        {/* ============================================================
            ABOUT
        ============================================================ */}

        <section id="about" className="w-full overflow-hidden">
          <AboutSection />
        </section>

        {/* ============================================================
            CONTACT
        ============================================================ */}

        <section className="w-full overflow-hidden">
          <ContactSection />
        </section>
      </main>

      {/* ==============================================================
          FOOTER
      ============================================================== */}

      <Footer />
    </div>
  );
}
