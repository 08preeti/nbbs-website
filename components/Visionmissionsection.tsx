// components/VisionMissionSection.tsx

const missionSteps = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Diagnose what is really happening.",
  },
  {
    number: "02",
    title: "PRIORITISE",
    description: "Identify what needs attention first.",
  },
  {
    number: "03",
    title: "IMPLEMENT",
    description: "Turn decisions into practical action.",
  },
];

export default function VisionMissionSection() {
  return (
    <>
      {/* ============================================================
          OUR VISION
      ============================================================ */}

      <section className="w-full border-y border-black/5 bg-[#fbf9f8]">
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
            md:py-16
            lg:px-[8%]
            lg:py-18
            xl:px-[7.5%]
          "
        >
          <div className="lg:flex lg:items-start lg:gap-16">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3 lg:mb-0 lg:w-[20%] lg:flex-none lg:items-start">
              <span className="hidden h-16 w-px bg-[#c9a86a] lg:block" />
              <div className="flex items-center gap-3 lg:hidden">
                <span className="h-px w-9 bg-[#c9a86a] sm:w-12" />
              </div>
              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#c9a86a]
                  sm:text-[10px]
                  sm:tracking-[0.27em]
                  lg:pl-4
                "
              >
                OUR VISION
              </span>
            </div>

            {/* Content */}
            <div className="lg:w-[80%]">
              <h2
                className="
                  max-w-[820px]
                  font-display
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-[#172039]
                  text-[34px]
                  sm:text-[42px]
                  md:text-[48px]
                  lg:text-[46px]
                  xl:text-[52px]
                "
              >
                A business should not have to grow through guesswork.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[620px]
                  text-[13px]
                  leading-[1.7]
                  text-[#34415c]
                  sm:mt-8
                  sm:text-[14px]
                  md:text-[15px]
                "
              >
                We envision a future where MSME leaders can make confident
                business decisions because they understand their business,
                know what needs attention, and have the right systems to act
                on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR MISSION
      ============================================================ */}

      <section className="w-full bg-[#fbf9f8]">
        <div
          className="
            mx-auto
            max-w-[1500px]
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
            md:py-16
            lg:px-[8%]
            lg:py-18
            xl:px-[7.5%]
          "
        >
          <div className="lg:flex lg:items-start lg:gap-16">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3 lg:mb-0 lg:w-[20%] lg:flex-none lg:items-start">
              <span className="hidden h-16 w-px bg-[#c9a86a] lg:block" />
              <div className="flex items-center gap-3 lg:hidden">
                <span className="h-px w-9 bg-[#c9a86a] sm:w-12" />
              </div>
              <span
                className="
                  whitespace-nowrap
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#c9a86a]
                  sm:text-[10px]
                  sm:tracking-[0.27em]
                  lg:pl-4
                "
              >
                OUR MISSION
              </span>
            </div>

            {/* Content */}
            <div className="lg:w-[80%]">
              <h2
                className="
                  max-w-[820px]
                  font-display
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-primary
                  text-[34px]
                  sm:text-[42px]
                  md:text-[48px]
                  lg:text-[46px]
                  xl:text-[52px]
                "
              >
                Make business problems easier to understand and business
                decisions easier to act on.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[620px]
                  text-[13px]
                  leading-[1.7]
                  text-primary
                  sm:mt-8
                  sm:text-[14px]
                  md:text-[15px]
                "
              >
                NBBS combines business diagnosis, strategic thinking,
                practical frameworks and technology to help MSME leaders move
                from uncertainty to clarity, and from clarity to
                implementation.
              </p>

              {/* Steps */}
              <div
                className="
                  mt-14
                  grid
                  grid-cols-1
                  gap-8
                  sm:mt-16
                  sm:grid-cols-3
                  sm:gap-6
                "
              >
                {missionSteps.map((step) => (
                  <div
                    key={step.number}
                    className="
                      border-t
                      border-[#c9a86a]/35
                      pt-5
                    "
                  >
                    <span
                      className="
                        block
                        text-[10px]
                        font-bold
                        tracking-[0.15em]
                        text-[#c9a86a]
                      "
                    >
                      {step.number}
                    </span>

                    <h3
                      className="
                        mt-3
                        font-display
                        text-[18px]
                        font-semibold
                        tracking-[0.02em]
                        text-primary
                        sm:text-[19px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[12px]
                        leading-[1.6]
                        text-primary
                        sm:text-[13px]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}