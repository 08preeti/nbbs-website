"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your API here later
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#fbf9f8] text-[#141a32]">
      {/* ============================================================
          HERO / FORM SECTION
      ============================================================ */}

      <div className="relative overflow-hidden border-t border-[#c6c6ce] py-10 md:py-16">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-24 -top-24 h-105 w-105 rounded-full bg-[#e9c176]/10 blur-3xl" />

          <div className="absolute -left-32 top-1/3 h-90 w-90 rounded-full bg-[#141a32]/5 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#141a32 1px, transparent 1px), linear-gradient(90deg, #141a32 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
            {/* ========================================================
                LEFT SIDE
            ======================================================== */}

            <div className="lg:sticky lg:top-24">
              {/* Label */}
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#e9c176]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c0923e]">
                  Free Business Diagnostic
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-xl font-display text-4xl font-black leading-[0.95] tracking-[-0.045em] text-[#141a32] sm:text-5xl md:text-6xl">
                Let&apos;s understand your business.
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-md text-base leading-7 text-[#141a32]/65 md:text-lg">
                30 minutes. Honest diagnosis. Zero pitch.
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#141a32]/50">
                Tell us what&apos;s slowing your business down. We&apos;ll
                understand the problem first, then determine whether we&apos;re
                the right people to help.
              </p>

              {/* ========================================================
                  CONTACT INFORMATION
              ======================================================== */}

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* LOCATION */}
                <a
                  href="https://www.google.com/maps/place/NB+Business+Solutions/@20.00577,73.768974,3a,75y,89.18h,90t/data=!3m7!1e1!3m5!1sfTWCNlzWH7mpZaUUCa-u8A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DfTWCNlzWH7mpZaUUCa-u8A%26yaw%3D89.17774!7i16384!8i8192!4m10!1m2!2m1!1snbbs+solution!3m6!1s0x3bddebece0e0085b:0x723bcd9f9798b5c3!8m2!3d20.0057655!4d73.7690401!15sCg1uYmJzIHNvbHV0aW9uWg8iDW5iYnMgc29sdXRpb26SAR5idXNpbmVzc19tYW5hZ2VtZW50X2NvbnN1bHRhbnTgAQA!16s%2Fg%2F11wpm7fbps?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    rounded-xl
                    border
                    border-[#c6c6ce]
                    bg-white
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e9c176]
                    hover:shadow-[0_12px_30px_rgba(20,26,50,0.08)]
                  "
                >
                  <div
                    className="
                      mb-3
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-sm
                      transition-all
                      duration-300
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                      group-hover:scale-105
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4 text-[#e9c176] transition-colors duration-300 group-hover:text-[#141a32]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                      />
                      <circle cx="12" cy="9" r="2.2" />
                    </svg>
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#141a32]">
                    Nashik, Maharashtra
                  </p>

                  <p className="mt-2 text-[9px] font-medium uppercase tracking-wider text-[#141a32]/35 transition-colors group-hover:text-[#c0923e]">
                    View map →
                  </p>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    rounded-xl
                    border
                    border-[#c6c6ce]
                    bg-white
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e9c176]
                    hover:shadow-[0_12px_30px_rgba(20,26,50,0.08)]
                  "
                >
                  <div
                    className="
                      mb-3
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-[10px]
                      font-bold
                      text-[#e9c176]
                      transition-all
                      duration-300
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                      group-hover:scale-105
                    "
                  >
                    WA
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#141a32]">
                    +91 99999 99999
                  </p>

                  <p className="mt-2 text-[9px] font-medium uppercase tracking-wider text-[#141a32]/35 transition-colors group-hover:text-[#c0923e]">
                    Message us →
                  </p>
                </a>

                {/* CALL */}
                <a
                  href="tel:+919999999999"
                  className="
                    group
                    rounded-xl
                    border
                    border-[#c6c6ce]
                    bg-white
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e9c176]
                    hover:shadow-[0_12px_30px_rgba(20,26,50,0.08)]
                  "
                >
                  <div
                    className="
                      mb-3
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-[#e9c176]
                      transition-all
                      duration-300
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                      group-hover:scale-105
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 1-1 2-3 2C10.8 21 3 13.2 3 7c0-2 1-3 2-3Z"
                      />
                    </svg>
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#141a32]">
                    +91 99999 99999
                  </p>

                  <p className="mt-2 text-[9px] font-medium uppercase tracking-wider text-[#141a32]/35 transition-colors group-hover:text-[#c0923e]">
                    Mon–Sat · 10am–7pm
                  </p>
                </a>
              </div>

              {/* ========================================================
                  SOCIAL PROOF
              ======================================================== */}

              <div className="relative mt-6 overflow-hidden rounded-xl border border-[#c6c6ce] bg-[#141a32] px-5 py-5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <div className="relative flex items-start gap-3">
                  <span className="mt-1 h-px w-6 shrink-0 bg-[#e9c176]" />

                  <div>
                    <p className="text-sm font-medium leading-6 text-white/90">
                      Join{" "}
                      <span className="font-bold text-white">
                        50+ Nashik SMBs
                      </span>{" "}
                      who started here.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      No pitch. Just an honest map of where you are and what to
                      fix first.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                RIGHT SIDE — FORM
            ======================================================== */}

            <div className="relative rounded-3xl border border-[#c6c6ce] bg-white p-6 shadow-[0_30px_90px_rgba(20,26,50,0.10)] sm:p-8 md:p-10">
              {/* Accent top bar */}
              <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl bg-linear-to-r from-[#141a32] via-[#e9c176] to-[#141a32]" />

              {submitted ? (
                /* ======================================================
                   SUCCESS STATE
                ====================================================== */

                <div className="flex min-h-125 flex-col items-center justify-center px-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e9c176]/30 bg-[#e9c176]/10">
                    <span className="text-2xl text-[#c0923e]">✓</span>
                  </div>

                  <h3 className="mt-7 font-display text-3xl font-black text-[#141a32]">
                    Request received.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#141a32]/55">
                    Thank you for reaching out. We&apos;ll review your
                    information and get back to you within 2 business hours.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="
                      mt-8
                      border-b
                      border-[#e9c176]
                      pb-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#c0923e]
                      transition-colors
                      hover:border-[#141a32]
                      hover:text-[#141a32]
                    "
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* NAME + COMPANY */}
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
                        className="
                          h-14
                          w-full
                          rounded-2xl
                          border
                          border-[#c6c6ce]
                          bg-[#fbf9f8]
                          px-4
                          text-sm
                          text-[#141a32]
                          outline-none
                          transition-all
                          placeholder:text-[#141a32]/25
                          focus:border-[#c0923e]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e9c176]/10
                        "
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
                        className="
                          h-14
                          w-full
                          rounded-2xl
                          border
                          border-[#c6c6ce]
                          bg-[#fbf9f8]
                          px-4
                          text-sm
                          text-[#141a32]
                          outline-none
                          transition-all
                          placeholder:text-[#141a32]/25
                          focus:border-[#c0923e]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e9c176]/10
                        "
                      />
                    </div>
                  </div>

                  {/* PHONE + EMAIL */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Phone */}
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
                        className="
                          h-14
                          w-full
                          rounded-2xl
                          border
                          border-[#c6c6ce]
                          bg-[#fbf9f8]
                          px-4
                          text-sm
                          text-[#141a32]
                          outline-none
                          transition-all
                          placeholder:text-[#141a32]/25
                          focus:border-[#c0923e]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e9c176]/10
                        "
                      />
                    </div>

                    {/* Email */}
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
                        className="
                          h-14
                          w-full
                          rounded-2xl
                          border
                          border-[#c6c6ce]
                          bg-[#fbf9f8]
                          px-4
                          text-sm
                          text-[#141a32]
                          outline-none
                          transition-all
                          placeholder:text-[#141a32]/25
                          focus:border-[#c0923e]
                          focus:bg-white
                          focus:ring-4
                          focus:ring-[#e9c176]/10
                        "
                      />
                    </div>
                  </div>

                  {/* BUSINESS TYPE */}
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
                      className="
                        h-14
                        w-full
                        appearance-none
                        rounded-2xl
                        border
                        border-[#c6c6ce]
                        bg-[#fbf9f8]
                        px-4
                        text-sm
                        text-[#141a32]
                        outline-none
                        transition-all
                        focus:border-[#c0923e]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#e9c176]/10
                      "
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

                  {/* CHALLENGE */}
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
                      className="
                        w-full
                        resize-none
                        rounded-2xl
                        border
                        border-[#c6c6ce]
                        bg-[#fbf9f8]
                        px-4
                        py-4
                        text-sm
                        leading-6
                        text-[#141a32]
                        outline-none
                        transition-all
                        placeholder:text-[#141a32]/25
                        focus:border-[#c0923e]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#e9c176]/10
                      "
                    />
                  </div>

                  {/* SUBMIT */}
                  <div className="border-t border-[#c6c6ce] pt-7">
                    <button
                      type="submit"
                      className="
                        group
                        relative
                        flex
                        h-14
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-2xl
                        bg-[#141a32]
                        px-6
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_12px_30px_rgba(20,26,50,0.25)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#e9c176]
                        hover:text-[#141a32]
                        hover:shadow-[0_18px_40px_rgba(20,26,50,0.3)]
                      "
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
      </div>
    </section>
  );
}