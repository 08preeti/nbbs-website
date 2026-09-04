// app/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroScribble from "@/components/HeroScribble";
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
            HERO
        ============================================================ */}

        <section
          id="home"
          className="
            relative
            isolate
            w-full
            min-h-[760px]
            overflow-hidden
            border-y
            border-black/5
            bg-[#fbf9f8]
            mt-10
          "
        >

          {/* ==========================================================
              SCRIBBLE / CIRCUIT BACKGROUND

              IMPORTANT:
              The whole HeroScribble is now treated as ONE illustration.
              It is NOT positioned only on the right side.
          ========================================================== */}

          {/* <div
  className="
    pointer-events-none
    absolute
    inset-0
    z-0
    hidden
    lg:block
  "
>
  <div
  className="
    pointer-events-none
    absolute
    inset-0
    z-0
    hidden
    lg:block
  "
>
  <HeroScribble />
</div>
          </div> */}


          {/* ==========================================================
              HERO CONTENT
          ========================================================== */}

          <div
            className="
              relative
              z-20
              mx-auto
              flex
              min-h-[760px]
              w-full
              max-w-[1500px]
              items-start
              justify-center
              px-5
              sm:px-8
              md:px-10
              lg:px-[6%]
              xl:px-[7%]
              2xl:px-[8%]
            "
          >

            <div
              className="
                flex
                w-full
                flex-col
                items-center
                pt-16
                sm:pt-18
                md:pt-20
                lg:pt-16
              "
            >

              {/* ======================================================
                  EYEBROW
              ====================================================== */}

              <div
                className="
                  relative
                  z-30
                  mb-6
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  sm:mb-7
                  sm:gap-4
                  md:mb-8
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-[#c9a86a]
                    sm:w-10
                    md:w-14
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#172039]
                    sm:text-[9px]
                    md:text-[10px]
                    md:tracking-[0.27em]
                  "
                >
                  INTEGRATED BUSINESS SOLUTIONS
                </span>

                <span
                  className="
                    h-px
                    w-8
                    bg-[#c9a86a]
                    sm:w-10
                    md:w-14
                  "
                />
              </div>


              {/* ======================================================
                  MAIN HEADING
              ====================================================== */}

              <h1
                className="
                  relative
                  z-30
                  mx-auto
                  w-full
                  max-w-[1000px]
                  text-center
                  font-display
                  text-[42px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.045em]
                  text-[#172039]
                  sm:text-[50px]
                  md:text-[60px]
                  lg:text-[66px]
                  xl:text-[76px]
                  2xl:text-[82px]
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


              {/* ======================================================
                  DESCRIPTION
              ====================================================== */}

              <p
                className="
                  relative
                  z-30
                  mx-auto
                  mt-7
                  max-w-[760px]
                  text-center
                  text-[13px]
                  leading-[1.7]
                  text-[#34415c]
                  sm:mt-8
                  sm:text-[14px]
                  md:mt-9
                  md:text-[15px]
                  lg:max-w-[760px]
                "
              >
                NB Business Solutions helps MSME founders identify what is
                holding their business back, create clarity on what needs
                attention, and implement practical business solutions for
                sustainable growth.
              </p>


              {/* ======================================================
                  CTA
              ====================================================== */}

              <div
                className="
                  relative
                  z-30
                  mt-8
                  flex
                  w-full
                  justify-center
                  sm:mt-9
                  md:mt-10
                "
              >
                <a
                  href="/#services"
                  className="
                    group
                    inline-flex
                    min-h-[50px]
                    items-center
                    justify-center
                    gap-4
                    rounded-[6px]
                    bg-[#172039]
                    px-7
                    py-3
                    text-center
                    text-[10px]
                    font-bold
                    tracking-[0.1em]
                    text-white
                    shadow-[0_12px_30px_rgba(23,32,57,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#c9a86a]
                    hover:text-[#172039]
                    sm:px-8
                    sm:text-[11px]
                  "
                >
                  <span>Explore NBBS Ecosystem</span>

                  <span
                    className="
                      shrink-0
                      text-[18px]
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              </div>


              {/* ======================================================
                  STRATEGY / EXECUTION / GROWTH

                  Kept above the circuit illustration.
              ====================================================== */}

              <div
                className="
                  relative
                  z-30
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-x-4
                  text-center
                  text-[9px]
                  font-bold
                  tracking-[0.1em]
                  sm:mt-9
                  sm:gap-x-5
                  sm:text-[10px]
                  md:text-[11px]
                "
              >
                <span className="text-[#c9a86a]">
                  STRATEGY
                </span>

                <span className="text-[#c9a86a]/60">
                  •
                </span>

                <span className="text-[#c9a86a]">
                  EXECUTION
                </span>

                <span className="text-[#c9a86a]/60">
                  •
                </span>

                <span className="text-[#c9a86a]">
                  GROWTH
                </span>
              </div>

            </div>
          </div>


          {/* ==========================================================
              MOBILE SCRIBBLE

              On mobile the illustration goes underneath the content
              instead of being placed on the right.
          ========================================================== */}

          {/* <div
            className="
              pointer-events-none
              relative
              z-0
              mt-[-70px]
              flex
              w-full
              justify-center
              lg:hidden
            "
          > */}
            {/* <div
              className="
                w-[125%]
                max-w-[700px]
                translate-x-[-8%]
              "
            >
              <HeroScribble />
            </div> */}
          {/* </div> */}


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
              z-40
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