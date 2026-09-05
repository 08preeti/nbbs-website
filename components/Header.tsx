"use client";

import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("navItems");
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = (key: string) =>
    `relative text-body-md font-medium cursor-pointer transition-colors duration-300 hover:text-secondary ${
      active === key
        ? "text-secondary underline underline-offset-4"
        : "text-primary hover:text-secondary"
    }`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#e5e5e5] bg-white">
      <div className="container page-x header-shell flex items-center justify-between">
        <ScrollLink
          onClick={() => setActive("home")}
          smooth={true}
          duration={700}
          offset={-80}
          to="home"
          className="group flex items-center gap-3"
          aria-label="NBBS Home"
        >
          <Image
            src="/nbbs-logo.webp"
            alt="NBBS Logo"
            width={50}
            height={30}
            className="h-auto w-[clamp(2.5rem,2rem+1.5vw,3.125rem)] object-contain"
            priority
          />

          <span className="text-headline-md font-display font-bold tracking-tight text-primary">
            NBBS
          </span>
        </ScrollLink>

        <nav className="hidden items-center gap-8 md:flex">
          <ScrollLink
            to="services"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("service")}
            className={navClass("service")}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("about")}
            className={navClass("about")}
          >
            About Us
          </ScrollLink>

          <ScrollLink
            to="vision"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("vision")}
            className={navClass("vision")}
          >
            Vision
          </ScrollLink>

          <ScrollLink
            to="vision"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("mission")}
            className={navClass("mission")}
          >
            Mission
          </ScrollLink>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-primary md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined icon-lg">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="page-x flex flex-col gap-2 py-5">
          <ScrollLink
            to="services"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="text-body-md cursor-pointer px-4 py-3 text-primary"
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="text-body-md cursor-pointer px-4 py-3 text-primary"
          >
            About Us
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="text-body-md cursor-pointer px-4 py-3 text-primary"
          >
            Contact
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}
