// app/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroScribble from "@/components/HeroScribble";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const stats = [
  ["50+", "SMBs IN NASHIK"],
  ["32%+", "AVG. 6-MO GROWTH"],
  ["1.2Cr+", "CLIENT SAVINGS"],
  ["6 mo.", "ROI TIMELINE"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf9f8] text-[#172039] antialiased">
      <Header />

      <main className="grow">
        {/* ============================================================
            HERO — locked to viewport height minus header, no scroll
        ============================================================ */}

        <section id="home" className="relative h-[calc(100dvh-70px)] max-h-[calc(100dvh-70px)] overflow-hidden bg-[#fbf9f8]">
          {/* Background illustration */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <HeroScribble />
          </div>

          {/* Very subtle background fade */}
          <div
            className="
              absolute
              inset-0
              z-1
              pointer-events-none
              bg-linear-to-b
              from-transparent
              via-transparent
              to-[#fbf9f8]/20
            "
          />

          {/* Hero content */}

          <div
            className="
              relative
              z-10
              h-full
              flex
              items-center
              justify-center
              px-5
              sm:px-8
              md:px-10
              lg:px-12
            "
          >
            <div className="w-full max-w-275 text-center mb-10">
              {/* ---------------------------------------------------------
                  EYEBROW
              --------------------------------------------------------- */}

              <div
                className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
                style={{ marginBottom: "clamp(0.75rem, 2vh, 1.75rem)" }}
              >
                <span className="h-px w-8 sm:w-12 lg:w-16 bg-[#c9a86a]" />

                <span
                  className="
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    sm:tracking-[0.32em]
                    text-[#172039]
                    whitespace-nowrap
                  "
                  style={{ fontSize: "clamp(7px, 1.1vw, 11px)" }}
                >
                  INTEGRATED BUSINESS SOLUTIONS
                </span>

                <span className="h-px w-8 sm:w-12 lg:w-16 bg-[#c9a86a]" />
              </div>

              {/* ---------------------------------------------------------
                  MAIN HEADING
              --------------------------------------------------------- */}

              <h1
                className="
                  font-display
                  text-[#172039]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.03em]
                "
                style={{ fontSize: "clamp(30px, 6.2vh, 92px)" }}
              >
                <span>From </span>

                <span className="italic font-normal text-[#c9a86a]">
                  Diagnosis
                </span>

                <br />

                <span>to solution</span>

                <br />

                <span>Implementation.</span>
              </h1>

              {/* ---------------------------------------------------------
                  SMALL GOLD DIVIDER
              --------------------------------------------------------- */}

              <div
                className="flex justify-center items-center"
                style={{
                  marginTop: "clamp(0.75rem, 2vh, 2.25rem)",
                  marginBottom: "clamp(0.65rem, 1.6vh, 1.75rem)",
                }}
              >
                <span className="h-px w-14 sm:w-20 lg:w-24 bg-[#c9a86a]" />

                <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#c9a86a] shrink-0" />

                <span className="h-px w-14 sm:w-20 lg:w-24 bg-[#c9a86a]" />
              </div>

              {/* ---------------------------------------------------------
                  DESCRIPTION
              --------------------------------------------------------- */}

              <p
                className="
                  mx-auto
                  max-w-90
                  sm:max-w-140
                  lg:max-w-170
                  text-[#424858]
                  leading-[1.6]
                "
                style={{ fontSize: "clamp(12.5px, 1.6vh, 17px)" }}
              >
                Integrated business solutions for Nashik&apos;s SMB leaders.
                <br className="hidden sm:block" />
                Consulting when you need a guide. Software built for your
                sustainable growth.
              </p>

              {/* ---------------------------------------------------------
                  CTA
              --------------------------------------------------------- */}

              <div
                className="
                  relative
                  z-20
                  flex
                  flex-col
                  sm:flex-row
                  items-center
                  justify-center
                  gap-2.5
                  sm:gap-3
                  w-full
                "
                style={{ marginTop: "clamp(1rem, 2.6vh, 2.25rem)" }}
              >
                <Link
                  href="/#contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5

                    rounded-full

                    bg-[#172039]
                    text-white

                    font-bold
                    uppercase
                    tracking-[0.14em]

                    transition-all
                    duration-300

                    hover:bg-[#c9a86a]
                    hover:text-[#172039]
                    hover:-translate-y-0.5

                    shadow-[0_8px_20px_rgba(23,32,57,0.14)]
                  "
                  style={{
                    fontSize: "clamp(10px, 1.05vw, 12px)",
                    padding:
                      "clamp(0.65rem, 1.4vh, 0.9rem) clamp(1.5rem, 2.4vw, 2rem)",
                    minWidth: "min(90vw, 220px)",
                  }}
                >
                  Book Free Diagnostic
                  <span
                    className="
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    style={{ fontSize: "clamp(14px, 1.4vw, 18px)" }}
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="/#services"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#172039]/35

                    bg-transparent

                    font-bold
                    uppercase
                    tracking-[0.14em]

                    text-[#172039]

                    transition-all
                    duration-300

                    hover:border-[#c9a86a]
                    hover:bg-[#172039]/[0.04]
                    hover:-translate-y-0.5
                  "
                  style={{
                    fontSize: "clamp(10px, 1.05vw, 12px)",
                    padding:
                      "clamp(0.65rem, 1.4vh, 0.9rem) clamp(1.5rem, 2.4vw, 2rem)",
                    minWidth: "min(90vw, 190px)",
                  }}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STATS
        ============================================================ */}

        <section className="w-full border-y border-black/5 bg-[#fbf9f8]">
          <div className="mx-auto grid max-w-350 grid-cols-2 md:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className={`
                  flex min-h-28
                  sm:min-h-32
                  md:min-h-34
                  lg:min-h-37.5
                  flex-col
                  items-center
                  justify-center
                  px-4
                  sm:px-5
                  py-6
                  sm:py-7
                  md:py-8
                  text-center
                  ${index % 2 === 0 ? "border-r border-black/8" : ""}
                  ${index < 2 ? "border-b border-black/8 md:border-b-0" : ""}
                  ${index < 3 ? "md:border-r md:border-black/8" : ""}
                  ${index === 3 ? "border-r-0" : ""}
                `}
              >
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-display mb-2 text-[#141a32]">
                  {value}
                </span>

                <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-[#141a32]/50 font-sans font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* ==========================================================
              DESKTOP SCRIBBLE / CIRCUIT

              The component itself controls the exact right edge.
          ========================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-1/2
              z-10
              hidden
              w-[674vw]
              max-w-[970px]
              -translate-y-[55%]
              lg:block
            "
          >
            <HeroScribble />
          </div>

          {/* ==========================================================
              MAIN HERO CONTENT
          ========================================================== */}

          <div
            className="
              relative
              mx-auto
              min-h-[calc(100vh-72px)]
              w-full
              max-w-[1500px]
              px-6
              sm:px-10
              md:px-14
              lg:px-[8%]
              xl:px-[7.5%]
            "
          >
            <div
              className="
                relative
                flex
                min-h-[calc(100vh-72px)]
                flex-col
                justify-center
                pt-12
                pb-12
                lg:pt-8
                lg:pb-8
              "
            >
              {/* ======================================================
                  LEFT TEXT CONTENT
              ====================================================== */}

              <div
                className="
                  relative
                  z-30
                  w-full
                  lg:w-[56%]
                  xl:w-[54%]
                "
              >
                {/* ==================================================
                    EYEBROW
                ================================================== */}

                <div className="mb-7 flex items-center gap-3 sm:mb-8 sm:gap-4">
                  <span className="h-px w-9 bg-[#c9a86a] sm:w-12" />

                  <span
                    className="
                      whitespace-nowrap
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      text-[#172039]
                      sm:text-[10px]
                      sm:tracking-[0.27em]
                    "
                  >
                    INTEGRATED BUSINESS SOLUTIONS
                  </span>

                  <span className="h-px w-9 bg-[#c9a86a] sm:w-12" />
                </div>

                {/* ==================================================
                    MAIN HEADING
                ================================================== */}

                <h1
                  className="
                    relative
                    z-20
                    max-w-[780px]
                    font-display
                    font-semibold
                    leading-[0.91]
                    tracking-[-0.052em]
                    text-[#172039]
                    text-[52px]
                    sm:text-[61px]
                    md:text-[68px]
                    lg:text-[67px]
                    xl:text-[76px]
                    2xl:text-[84px]
                  "
                >
                  <span>From </span>

                  <span className="font-normal italic text-[#c9a86a]">
                    Diagnosis
                  </span>

                  <br />

                  <span>to Solution</span>

                  <br />

                  <span>Implementation.</span>
                </h1>

                {/* ==================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mt-7
                    max-w-[590px]
                    text-[13px]
                    leading-[1.7]
                    text-[#34415c]
                    sm:mt-8
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  Integrated business solutions for Nashik&apos;s SMB
                  leaders.

                  <br className="hidden sm:block" />

                  Consulting when you need a guide. Software built for your
                  sustainable growth.
                </p>

                {/* ==================================================
                    BUTTONS
                ================================================== */}

                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    items-start
                    gap-3
                    sm:mt-9
                    sm:flex-row
                  "
                >
                  <Link
                    href="/#contact"
                    className="
                      group
                      inline-flex
                      min-h-[48px]
                      items-center
                      justify-center
                      gap-3
                      rounded-[6px]
                      bg-[#172039]
                      px-6
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-white
                      shadow-[0_12px_30px_rgba(23,32,57,0.12)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#c9a86a]
                      hover:text-[#172039]
                      sm:px-7
                      sm:text-[11px]
                    "
                  >
                    <span>Book Free Diagnostic</span>

                    <span
                      className="
                        text-[17px]
                        leading-none
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </Link>

                  <Link
                    href="/#services"
                    className="
                      inline-flex
                      min-h-[48px]
                      items-center
                      justify-center
                      rounded-[6px]
                      border
                      border-[#172039]/30
                      bg-transparent
                      px-7
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-[#172039]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#c9a86a]
                      hover:bg-white
                      sm:text-[11px]
                    "
                  >
                    Explore Services
                  </Link>
                </div>

                {/* ==================================================
                    STATS
                ================================================== */}

                <div
                  className="
                    mt-10
                    w-full
                    max-w-[735px]
                    border-t
                    border-[#c9a86a]/35
                    pt-5
                    sm:mt-12
                    sm:pt-6
                    lg:mt-14
                  "
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4">
                    {stats.map(([value, label], index) => (
                      <div
                        key={label}
                        className={`
                          flex
                          min-h-[60px]
                          flex-col
                          justify-center
                          px-4
                          first:pl-0
                          sm:px-5
                          lg:px-6
                          ${
                            index !== 0
                              ? "border-l border-[#c9a86a]/35"
                              : ""
                          }
                        `}
                      >
                        <span
                          className="
                            font-display
                            text-[26px]
                            font-semibold
                            leading-none
                            tracking-[-0.035em]
                            text-[#172039]
                            sm:text-[28px]
                            lg:text-[30px]
                          "
                        >
                          {value}
                        </span>

                        <span
                          className="
                            mt-2
                            text-[7px]
                            font-semibold
                            uppercase
                            leading-[1.35]
                            tracking-[0.1em]
                            text-[#172039]/55
                            sm:text-[8px]
                          "
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ======================================================
                  MOBILE SCRIBBLE
              ====================================================== */}

              <div
                className="
                  relative
                  z-10
                  mt-12
                  flex
                  w-full
                  justify-center
                  lg:hidden
                "
              >
                <div className="w-[115%] max-w-[620px]">
                  <HeroScribble />
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================================
              BOTTOM DIVIDER
          ========================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              h-px
              bg-[#172039]/[0.06]
            "
          />
        </section>

        {/* ============================================================
            SERVICES
        ============================================================ */}

        <section id="services">
          <ServicesSection />
        </section>

        {/* ============================================================
            ABOUT
        ============================================================ */}

        <AboutSection />

        {/* ============================================================
            CONTACT
        ============================================================ */}

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
