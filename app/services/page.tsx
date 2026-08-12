"use client";

import { FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your API here later
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fbf9f8] text-[#141a32]">
        {/* ============================================================
            HERO / FORM SECTION
        ============================================================ */}
        <section className="relative overflow-hidden border-t border-[#c6c6ce] py-16 md:py-24">
          {/* Decorative background accents */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#e9c176]/10 blur-3xl" />
            <div className="absolute top-1/3 -left-32 h-[360px] w-[360px] rounded-full bg-[#141a32]/5 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(#141a32 1px, transparent 1px), linear-gradient(90deg, #141a32 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
              {/* ============================================================
                  LEFT SIDE
              ============================================================ */}

              <div className="lg:sticky lg:top-24">
                {/* Label */}
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#e9c176]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c0923e]">
                    Free Business Diagnostic
                  </span>
                </div>

                {/* Heading */}
                <h1 className="font-display max-w-xl text-6xl font-black leading-[0.88] tracking-[-0.055em] text-[#141a32] sm:text-7xl md:text-8xl">
                  Book a
                  <br />
                  <span className="text-[#e9c176]">Diagnostic.</span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-md text-base leading-7 text-[#141a32]/65 md:text-lg">
                  30 minutes. Honest diagnosis. Zero pitch.
                </p>

                <p className="mt-4 max-w-md text-sm leading-6 text-[#141a32]/50">
                  Tell us what&apos;s slowing your business down. We&apos;ll
                  understand the problem first, then determine whether
                  we&apos;re the right people to help.
                </p>

                {/* ============================================================
                    CONTACT INFORMATION
                ============================================================ */}

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919999999999"
                    className="group flex flex-col justify-between rounded-2xl border border-[#c6c6ce] bg-white p-5 shadow-[0_10px_30px_rgba(20,26,50,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e9c176] hover:shadow-[0_16px_36px_rgba(20,26,50,0.08)]"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#141a32] text-[13px] text-[#e9c176] transition-colors duration-300 group-hover:bg-[#e9c176] group-hover:text-[#141a32]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.892.529 3.716 1.532 5.298L2 22l4.85-1.512A9.953 9.953 0 0 0 12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.166a8.14 8.14 0 0 1-4.153-1.135l-.298-.177-3.048.951.976-2.98-.194-.306a8.15 8.15 0 0 1-1.28-4.386c0-4.508 3.667-8.174 8.175-8.174 2.184 0 4.238.852 5.783 2.398a8.12 8.12 0 0 1 2.392 5.784c0 4.508-3.667 8.175-8.175 8.175z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                        WhatsApp Us
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-[#141a32]">
                        +91 99999 99999
                      </p>
                    </div>
                  </a>

                  {/* Call */}
                  <a
                    href="tel:+919999999999"
                    className="group flex flex-col justify-between rounded-2xl border border-[#c6c6ce] bg-white p-5 shadow-[0_10px_30px_rgba(20,26,50,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e9c176] hover:shadow-[0_16px_36px_rgba(20,26,50,0.08)]"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#141a32] text-[#e9c176] transition-colors duration-300 group-hover:bg-[#e9c176] group-hover:text-[#141a32]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                        Call Us
                      </p>

                      <p className="mt-1.5 text-sm font-semibold text-[#141a32]">
                        Mon–Sat · 10am–7pm IST
                      </p>
                    </div>
                  </a>
                </div>

                {/* ============================================================
                    SOCIAL PROOF
                ============================================================ */}

                <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#c6c6ce] bg-[#141a32] px-6 py-7 shadow-[0_20px_50px_rgba(20,26,50,0.18)]">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />

                  <div className="relative mb-4 flex items-center gap-3">
                    <span className="h-px w-6 bg-[#e9c176]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e9c176]">
                      Social Proof
                    </span>
                  </div>

                  <p className="relative text-sm font-medium leading-6 text-white/90">
                    Join <span className="font-bold text-white">50+ Nashik SMBs</span>{" "}
                    who started here.
                  </p>

                  <p className="relative mt-2 text-sm leading-6 text-white/50">
                    No pitch. Just an honest map of where you are and what to
                    fix first.
                  </p>
                </div>
              </div>

              {/* ============================================================
                  RIGHT SIDE — FORM
              ============================================================ */}

              <div className="relative rounded-3xl border border-[#c6c6ce] bg-white p-6 shadow-[0_30px_90px_rgba(20,26,50,0.10)] sm:p-8 md:p-10">
                {/* Accent top bar */}
                <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-[#141a32] via-[#e9c176] to-[#141a32]" />

                {submitted ? (
                  /* ==========================================================
                     SUCCESS STATE
                  ========================================================== */

                  <div className="flex min-h-[500px] flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e9c176]/30 bg-[#e9c176]/10">
                      <span className="text-2xl text-[#c0923e]">✓</span>
                    </div>

                    <h3 className="mt-7 font-display text-3xl font-black text-[#141a32]">
                      Request received.
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-[#141a32]/55">
                      Thank you for reaching out. We&apos;ll review your
                      information and get back to you within 2 business
                      hours.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 border-b border-[#e9c176] pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c0923e] transition-colors hover:border-[#141a32] hover:text-[#141a32]"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* ======================================================
                        NAME + COMPANY
                    ====================================================== */}

                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#141a32]/55"
                        >
                          Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="h-14 w-full rounded-2xl border border-[#c6c6ce] bg-[#fbf9f8] px-4 text-sm text-[#141a32] outline-none transition-all placeholder:text-[#141a32]/25 focus:border-[#c5a059] focus:bg-white focus:ring-4 focus:ring-[#c5a059]/10"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#141a32]/55"
                        >
                          Company
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          className="h-14 w-full rounded-2xl border border-[#c6c6ce] bg-[#fbf9f8] px-4 text-sm text-[#141a32] outline-none transition-all placeholder:text-[#141a32]/25 focus:border-[#c5a059] focus:bg-white focus:ring-4 focus:ring-[#c5a059]/10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#141a32]/55"
                        >
                          Phone
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="h-14 w-full rounded-2xl border border-[#c6c6ce] bg-[#fbf9f8] px-4 text-sm text-[#141a32] outline-none transition-all placeholder:text-[#141a32]/25 focus:border-[#c5a059] focus:bg-white focus:ring-4 focus:ring-[#c5a059]/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#141a32]/55"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="h-14 w-full rounded-2xl border border-[#c6c6ce] bg-[#fbf9f8] px-4 text-sm text-[#141a32] outline-none transition-all placeholder:text-[#141a32]/25 focus:border-[#c5a059] focus:bg-white focus:ring-4 focus:ring-[#c5a059]/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="businessType"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#141a32]/55"
                      >
                        Business Type
                      </label>

                      <select
                        id="businessType"
                        name="businessType"
                        required
                        defaultValue=""
                        className="h-14 w-full appearance-none rounded-2xl border border-[#c6c6ce] bg-[#fbf9f8] px-4 text-sm text-[#141a32] outline-none transition-all focus:border-[#c5a059] focus:bg-white focus:ring-4 focus:ring-[#c5a059]/10"
                      >
                        <option value="" disabled>
                          Select business type
                        </option>

                        <option value="manufacturing">Manufacturing</option>

                        <option value="distribution">Distribution</option>

                        <option value="retail">Retail</option>

                        <option value="services">Services</option>

                        <option value="trading">Trading</option>

                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* ======================================================
                        CHALLENGE
                    ====================================================== */}

                    <div>
                      <label
                        htmlFor="challenge"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#141a32]/55"
                      >
                        What&apos;s the biggest challenge you&apos;re facing?
                      </label>

                      <textarea
                        id="challenge"
                        name="challenge"
                        required
                        rows={5}
                        placeholder="E.g. Sales team isn't updating the CRM. Commission disputes every month..."
                        className="w-full resize-none rounded-2xl border border-[#c6c6ce] bg-[#fbf9f8] px-4 py-4 text-sm leading-6 text-[#141a32] outline-none transition-all placeholder:text-[#141a32]/25 focus:border-[#c5a059] focus:bg-white focus:ring-4 focus:ring-[#c5a059]/10"
                      />
                    </div>

                    {/* ======================================================
                        SUBMIT
                    ====================================================== */}

                    <div className="border-t border-[#c6c6ce] pt-7">
                      <button
                        type="submit"
                        className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#141a32] px-6 text-sm font-bold text-white shadow-[0_12px_30px_rgba(20,26,50,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e9c176] hover:text-[#141a32] hover:shadow-[0_18px_40px_rgba(20,26,50,0.3)]"
                      >
                        <span className="relative z-10">
                          Book Your Free 30-Min Diagnostic
                        </span>

                        <span className="relative z-10 ml-3 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </button>

                      <p className="mt-4 text-center text-[10px] leading-5 text-[#141a32]/35">
                        We&apos;ll confirm your slot within 2 business hours.
                        <br />
                        No spam. Ever.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}