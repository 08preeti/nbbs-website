import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    category: "DIAGNOSIS",
    title: "Business OPD",
    subtitle: "Diagnose before you prescribe.",
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
    <main className="bg-[#fbf9f8] text-[#141a32]">
      <Header />

      {/* =========================================================
          HERO / ECOSYSTEM
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#141a32] text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-6">
              

              

              
            </div>

            {/* Heading */}
            <h1 className="font-display text-[48px] sm:text-[60px] md:text-[80px] leading-[0.98] tracking-[-0.035em] font-semibold">
              The Ecosystem
            </h1>

            <p className="font-display text-[22px] md:text-[28px] text-white/80 mt-4">
              Six products. One connected journey.
            </p>

            <p className="max-w-2xl mx-auto mt-4 text-[15px] md:text-[17px] leading-[1.8] text-white/55">
              From the first diagnostic conversation to a fully instrumented
              business, every NBBS product is built to extend the next. Start
              small. Compound.
            </p>

            {/* Product navigation */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {services.map((service) => (
                <a
                  key={service.number}
                  href={`#service-${service.number}`}
                  className="px-4 py-2 border border-white/15 text-[10px] uppercase tracking-[0.08em] text-white/70 hover:border-[#e9c176] hover:text-[#e9c176] transition-colors duration-300"
                >
                  <span className="text-[#e9c176] mr-2">{service.number}</span>

                  {service.title}
                </a>
              ))}
            </div>

            {/* Journey */}
            
              <div className="flex justify-center items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/50">
                
              </div>
            
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE SECTIONS
      ========================================================= */}

      <section className="bg-[#fbf9f8]">
        {services.map((service, index) => (
          <div
            key={service.number}
            id={`service-${service.number}`}
            className="scroll-mt-20 border-b border-[#c6c6ce]"
          >
            <div className="max-w-[1280px] mx-auto px-4 md:px-16 py-10 md:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
                {/* LEFT */}
                <div className="lg:col-span-7">
                  {/* Category */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[15px] font-bold tracking-[0.18em] text-[#e9c176]">
                      {service.number}
                    </span>

                    <span className="w-10 h-px bg-[#e9c176]" />

                    <span className="text-[15px] font-bold uppercase tracking-[0.16em] text-[#76767e]">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-[44px] md:text-[64px] leading-[1] tracking-[-0.025em] font-semibold">
                    {service.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-4 text-[18px] md:text-[20px] text-[#33446b]">
                    {service.subtitle}
                  </p>

                  {/* Problem */}
                  <div className="mt-8 border-l-[3px] border-[#e9c176] pl-6 md:pl-8 max-w-2xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e9c176] mb-4">
                      The Problem
                    </p>

                    <p className="text-[16px] md:text-[18px] leading-[1.75] text-[#33343b]">
                      {service.problem}
                    </p>
                  </div>

                  {/* What you get */}
                  <div className="mt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#76767e] mb-5">
                      What You Get
                    </p>

                    <div className="space-y-3">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          <span className="text-[#e9c176] mt-[2px]">→</span>

                          <span className="text-[15px] md:text-[16px] text-[#33446b]">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-5">
                  <div className="bg-[#eef0f3] p-5 md:p-6">
                    {/* Preview */}
                    <div className="relative h-[280px] md:h-[330px] bg-white border border-[#d9dadd] overflow-hidden">
                      {/* Decorative lines */}
                      <div className="absolute inset-x-0 top-1/2 h-px bg-[#e8e8ea]" />
                      <div className="absolute inset-y-0 left-1/2 w-px bg-[#e8e8ea]" />

                      {/* Letter */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border border-[#d9dadd] bg-[#f7f7f7] flex items-center justify-center">
                          <span className="font-display text-[22px] text-[#76767e]">
                            {service.title.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-0 right-0 text-center">
                        <span className="text-[9px] uppercase tracking-[0.18em] text-[#8a8b91]">
                          {service.title} · Preview
                        </span>
                      </div>
                    </div>

                    {/* Audience */}
                    <div className="mt-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#76767e] mb-3">
                        Who It's For
                      </p>

                      <p className="text-[15px] leading-[1.6] text-[#33446b]">
                        {service.audience}
                      </p>
                    </div>

                    {/* Proof */}
                    <div className="mt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#76767e] mb-3">
                        Proof
                      </p>

                      <p className="text-[14px] text-[#c0923e]">
                        {service.proof}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 pt-5 border-t border-[#d4d5d8] flex flex-wrap gap-3">
                      <Link
                        href="/contacts"
                        className="inline-flex items-center justify-center px-5 py-3 bg-[#141a32] text-white text-[10px] font-bold uppercase tracking-[0.12em] hover:bg-[#e9c176] hover:text-[#141a32] transition-colors duration-300"
                      >
                        Book a Diagnostic
                      </Link>

                      <Link
                        href="#process"
                        className="inline-flex items-center justify-center px-5 py-3 border border-[#c6c6ce] text-[#141a32] text-[10px] font-bold uppercase tracking-[0.12em] hover:border-[#141a32] transition-colors duration-300"
                      >
                        How It Works
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}