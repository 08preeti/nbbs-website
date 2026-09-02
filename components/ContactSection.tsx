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
          CONTACT SECTION
      ============================================================ */}

      <div className="relative overflow-hidden py-10 md:py-10">
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

        {/* ============================================================
            MAIN CONTAINER
        ============================================================ */}

        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* ============================================================
              HEADING
          ============================================================ */}

          <h1
            className="mb-8 font-medium text-[44px] leading-none md:text-[50px]"
            style={{
              fontFamily: "Bodoni Moda, serif",
            }}
          >
            Contact Us
          </h1>

          {/* ============================================================
              TWO COLUMN LAYOUT
          ============================================================ */}

          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
            {/* ========================================================
                LEFT SIDE
            ======================================================== */}

            <div className="w-full">
              {/* ======================================================
                  CONTACT
              ====================================================== */}

              <a href="tel:+919145789151" className="group block py-2">
                <div className="flex items-center gap-4">
                  {/* Phone Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-[#e9c176]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 2-1 3-3 3C10.8 21 3 13.2 3 7c0-2 1-3 2-3Z"
                      />
                    </svg>
                  </div>

                  {/* Contact Text */}
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                      Contact
                    </p>

                    <p className="mt-1 text-[18px] font-semibold text-[#141a32]">
                      +91 9145789151
                    </p>

                  
                  </div>
                </div>
              </a>

              {/* ======================================================
                  EMAIL
              ====================================================== */}

              <a href="mailto:connect@nbbs.in" className="group block py-2">
                <div className="flex items-center gap-4">
                  {/* Email Icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#141a32]
                      text-[#e9c176]
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-[#e9c176]
                      group-hover:text-[#141a32]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-5 w-5"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />

                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  {/* Email Text */}
                  <div className="mb-5">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                      Email
                    </p>

                    <p className="mt-1 text-[18px] font-semibold text-[#141a32]">
                      connect@nbbs.in
                    </p>

                  
                  </div>
                </div>
              </a>

              {/* ======================================================
                  LOCATION / GOOGLE MAP
              ====================================================== */}

              <div
                className="
                  mt-4
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#c6c6ce]
                  bg-white
                "
              >
                {/* Google Map */}
                <div className="h-64 w-full overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=NB+Business+Solutions,+Nashik,+Maharashtra&output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                    }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NB Business Solutions Location"
                  />
                </div>

                {/* Location Details */}
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="flex items-center gap-3">
                    {/* Location Icon */}
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#141a32]
                        text-[#e9c176]
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
                          d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                        />

                        <circle cx="12" cy="9" r="2.2" />
                      </svg>
                    </div>

                    {/* Location Text */}
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#141a32]/35">
                        Location
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#141a32]">
                        Nashik, Maharashtra
                      </p>
                    </div>
                  </div>

                  {/* View Map */}
                  <a
                    href="https://www.google.com/maps/place/NB+Business+Solutions/@20.0057655,73.7690401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      shrink-0
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#c0923e]
                      transition-colors
                      hover:text-[#141a32]
                    "
                  >
                    View Map →
                  </a>
                </div>
              </div>
            </div>

            {/* ========================================================
                RIGHT SIDE — FORM
            ======================================================== */}

            <div
              className="
                relative
                rounded-3xl
                border
                border-[#c6c6ce]
                bg-white
                p-6
                shadow-[0_30px_90px_rgba(20,26,50,0.10)]
                sm:p-8
                md:p-9
              "
            >
              {/* Accent Top Bar */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-1.5
                  rounded-t-3xl
                  bg-linear-to-r
                  from-[#141a32]
                  via-[#e9c176]
                  to-[#141a32]
                "
              />

              {/* ======================================================
                  SUCCESS MESSAGE
              ====================================================== */}

              {submitted ? (
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
                /* ======================================================
                   FORM
                ====================================================== */

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ==================================================
                      NAME + COMPANY
                  ================================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#141a32]/55
                        "
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
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#141a32]/55
                        "
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

                  {/* ==================================================
                      PHONE + EMAIL
                  ================================================== */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#141a32]/55
                        "
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
                        className="
                          mb-2
                          block
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#141a32]/55
                        "
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

                  {/* ==================================================
                      BUSINESS TYPE
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="businessType"
                      className="
                        mb-2
                        block
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#141a32]/55
                      "
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

                  {/* ==================================================
                      CHALLENGE
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="challenge"
                      className="
                        mb-2
                        block
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#141a32]/55
                      "
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

                  {/* ==================================================
                      SUBMIT
                  ================================================== */}

                  <div className="border-t border-[#c6c6ce] pt-6">
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

                    <p className="mt-3 text-center text-[10px] leading-5 text-[#141a32]/35">
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
