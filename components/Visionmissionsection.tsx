// components/VisionMissionSection.tsx

export default function VisionMissionSection() {
  return (
    <section
      id="vision"
      className="w-full border-y border-black/5 bg-[#fbf9f8]"
    >
      <div className="container-wide page-x section-y">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          {/* OUR VISION */}
          <div className="group/vision -m-6 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.015] hover:bg-[#c9a86a]/[0.05] sm:-m-8 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center gap-3">
                <span className="eyebrow-rule bg-[#c9a86a] text-[#c9a86a] transition-all duration-300 group-hover/vision:w-14 sm:group-hover/vision:w-16" />
                <span className="text-eyebrow whitespace-nowrap text-primary">
                  VISION
                </span>
              </div>
            </div>

            <h2 className="text-headline-lg mt-7 max-w-[820px] font-display font-medium tracking-[-0.03em] text-[#172039] transition-colors duration-300 group-hover/vision:text-[#0f1729]">
              Building businesses that grow with clarity.
            </h2>

            <p className="text-body-md mt-7 max-w-[620px] text-[#34415c] sm:mt-8">
              To build a business ecosystem where MSMEs move from uncertainty to
              clarity, from clarity to action, and from action to sustainable
              growth.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="group/mission -m-6 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.015] hover:bg-[#c9a86a]/[0.05] sm:-m-8 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-3">
                <span className="eyebrow-rule bg-[#c9a86a] text-[#c9a86a] transition-all duration-300 group-hover/mission:w-14 sm:group-hover/mission:w-16" />
                <span className="text-eyebrow whitespace-nowrap text-primary">
                  MISSION
                </span>
              </div>
            </div>

            <h2 className="text-headline-lg mt-7 max-w-[820px] font-display font-medium tracking-[-0.03em] text-primary transition-opacity duration-300 group-hover/mission:opacity-90">
              Turning business complexity into clear, actionable decisions.
            </h2>

            <p className="text-body-md mt-7 max-w-[620px] text-primary sm:mt-8">
              NBBS combines business diagnosis, strategic thinking, practical
              frameworks and technology to help MSME founders move from
              uncertainty to clarity and from clarity to implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
