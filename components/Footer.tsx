"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollLink } from "react-scroll";

export default function Footer() {
  const [active, setActive] = useState("footerItems");

  return (
    <footer className="w-full border-t border-[#141a32] bg-[#141a32]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link
            href="/#home"
              onClick={() => setActive("home")}
              className="group flex w-fit cursor-pointer items-center gap-3"
              aria-label="NBBS Home"
            >
              <Image
                src="/nbbs-logo.webp"
                alt="NBBS Logo"
                width={50}
                height={30}
                className="object-contain"
                priority
              />
              <span className="font-display text-[24px] font-bold tracking-tight text-white">
                NBBS
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
              Serving the ambitious SMB community in Tier-2 India. Diagnosis
              before prescription. Results over hype.
            </p>

            <p className="mt-6 text-xs text-slate-400">
              Nashik, Maharashtra · hello@nbbs.in
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

              {/* Solutions */}
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                  Solutions
                </h3>

                <div className="flex flex-col gap-4">
                  <Link
                    href="/#service-01"
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Business Clarity Workshop
                  </Link>

                  <Link
                    href="/#service-02"
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Business OPD
                  </Link>

                  <Link
                    href="/#service-03"
                    className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    Incentiwise
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                  Company
                </h3>

                <div className="flex flex-col gap-4">
               <Link
  href="#about"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
>
  About Us
</Link>

<Link
  href="#vision"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("vision")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
>
  Our Vision
</Link>

<Link
  href="#mission"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("mission")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
>
  Our Mission
</Link>

<Link
  href="#services"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
>
  Services
</Link>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Contact
                </h3>

                <Link
                  href="#"
                  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Nashik, Maharashtra
                </Link>

                <Link
                  href="#"
                  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Phone
                </Link>

                <Link
                  href="/#contact"
                  className="w-fit text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">

            <span>
              © 2026 NB Business Solutions, Nashik.
            </span>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Terms
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Refunds
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Disclaimer
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                IP
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-white"
              >
                Cookies
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}