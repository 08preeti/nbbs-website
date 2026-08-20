// app/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroScribble from "@/components/HeroScribble";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Link from "next/link";
import StatsSection from "@/components/StatsStatics";
import VisionMissionSection from "@/components/Visionmissionsection";

const stats = [
  ["50+", "SMBs IN NASHIK"],
  ["32%+", "AVG. 6-MO GROWTH"],
  ["1.2Cr+", "CLIENT SAVINGS"],
  ["6 mo.", "ROI TIMELINE"],
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fbf9f8] text-[#172039] antialiased">
      <Header />

      <main className="w-full grow overflow-x-hidden">

        {/* ============================================================
            HERO
        ============================================================ */}

        <section
          id="home"
          className="
            relative
            w-full
            overflow-hidden
            border-y
            border-black/5
            bg-[#fbf9f8]
          "
        >

          {/* ==========================================================
              DESKTOP SCRIBBLE / CIRCUIT
          ========================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-80px]
              top-1/2
              z-10
              hidden
              w-[700px]
              max-w-[55vw]
              -translate-y-1/2
              lg:block
              xl:right-[-30px]
              xl:w-[760px]
              2xl:right-0
              2xl:w-[850px]
            "
          >
            <HeroScribble />
          </div>

          {/* ==========================================================
              HERO CONTENT CONTAINER
          ========================================================== */}

          <div
            className="
              relative
              z-20
              mx-auto
              w-full
              max-w-[1500px]
              px-5
              sm:px-8
              md:px-10
              lg:min-h-[calc(100vh-72px)]
              lg:px-[7%]
              xl:px-[7.5%]
              2xl:px-[8%]
            "
          >

            <div
              className="
                flex
                min-h-[auto]
                flex-col
                justify-center
                py-10
                sm:py-12
                md:py-14
                lg:min-h-[calc(100vh-72px)]
                lg:py-8
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
                  lg:w-[58%]
                  xl:w-[56%]
                  2xl:w-[54%]
                "
              >

                {/* ==================================================
                    EYEBROW
                ================================================== */}

                <div
                  className="
                    mb-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    sm:mb-7
                    sm:gap-3
                    md:justify-start
                    md:gap-4
                  "
                >
                  <span
                    className="
                      h-px
                      w-6
                      shrink-0
                      bg-[#c9a86a]
                      sm:w-9
                      md:w-12
                    "
                  />

                  <span
                    className="
                      whitespace-nowrap
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#172039]
                      sm:text-[9px]
                      sm:tracking-[0.21em]
                      md:text-[10px]
                      md:tracking-[0.27em]
                    "
                  >
                    INTEGRATED BUSINESS SOLUTIONS
                  </span>

                  <span
                    className="
                      h-px
                      w-6
                      shrink-0
                      bg-[#c9a86a]
                      sm:w-9
                      md:w-12
                    "
                  />
                </div>

                {/* ==================================================
                    MAIN HEADING
                ================================================== */}

                <h1
                  className="
                    relative
                    z-20
                    mx-auto
                    max-w-[780px]
                    text-center
                    font-display
                    text-[42px]
                    font-semibold
                    leading-[0.96]
                    tracking-[-0.045em]
                    text-[#172039]
                    sm:text-[54px]
                    sm:leading-[0.93]
                    md:text-[62px]
                    md:tracking-[-0.05em]
                    lg:mx-0
                    lg:text-left
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
                    mx-auto
                    mt-5
                    max-w-[590px]
                    text-center
                    text-[13px]
                    leading-[1.65]
                    text-[#34415c]
                    sm:mt-7
                    sm:text-[14px]
                    sm:leading-[1.7]
                    md:text-[15px]
                    lg:mx-0
                    lg:text-left
                  "
                >
                  NB Business Solutions helps MSME leaders identify what is
                  holding their business back, gain clarity on what needs
                  attention, and implement practical solutions for sustainable
                  growth.
                </p>

                {/* ==================================================
                    CTA
                ================================================== */}

                <div
                  className="
                    mt-6
                    flex
                    w-full
                    justify-center
                    sm:mt-8
                    md:mt-9
                    lg:justify-start
                  "
                >
                  <Link
                    href="/#contact"
                    className="
                      group
                      inline-flex
                      min-h-[48px]
                      w-full
                      max-w-[330px]
                      items-center
                      justify-center
                      gap-3
                      rounded-[6px]
                      bg-[#172039]
                      px-5
                      py-3
                      text-center
                      text-[9px]
                      font-bold
                      tracking-[0.11em]
                      text-white
                      shadow-[0_12px_30px_rgba(23,32,57,0.12)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#c9a86a]
                      hover:text-[#172039]
                      sm:w-auto
                      sm:max-w-none
                      sm:px-7
                      sm:text-[11px]
                    "
                  >
                    <span>Explore the NBBS Ecosystem</span>

                    <span
                      className="
                        shrink-0
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
                </div>

                {/* ==================================================
                    STRATEGY / EXECUTION / GROWTH
                ================================================== */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    items-center
                    justify-center
                    gap-x-3
                    gap-y-2
                    text-center
                    text-[9px]
                    font-bold
                    tracking-[0.08em]
                    sm:mt-7
                    sm:gap-x-4
                    sm:text-[10px]
                    md:text-[11px]
                    lg:justify-start
                    lg:text-left
                  "
                >
                  <span className="text-secondary">
                    STRATEGY
                  </span>

                  <span className="text-secondary/60">
                    •
                  </span>

                  <span className="text-secondary">
                    EXECUTION
                  </span>

                  <span className="text-secondary/60">
                    •
                  </span>

                  <span className="text-secondary">
                    GROWTH
                  </span>
                </div>

                {/* ==================================================
                    OPTIONAL STATS
                ================================================== */}

                {/*
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
                          px-3
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
                */}
              </div>

              {/* ======================================================
                  MOBILE / TABLET SCRIBBLE
              ====================================================== */}

              <div
                className="
                  relative
                  z-10
                  mt-8
                  flex
                  w-full
                  justify-center
                  sm:mt-10
                  md:mt-12
                  lg:hidden
                "
              >
                <div
                  className="
                    w-full
                    max-w-[360px]
                    sm:max-w-[500px]
                    md:max-w-[620px]
                  "
                >
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
            STATS
        ============================================================ */}

        <section className="w-full overflow-hidden">
          <StatsSection />
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

        <section
          id="services"
          className="w-full overflow-hidden"
        >
          <ServicesSection />
        </section>

        {/* ============================================================
            ABOUT
        ============================================================ */}

        <section
          id="about"
          className="w-full overflow-hidden"
        >
          <AboutSection />
        </section>

      </main>

      <Footer />
    </div>
  );
}