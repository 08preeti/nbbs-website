"use client";

import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("navItems");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
        onClick={()=>setActive("home")}
          smooth={true}
          duration={700}
          offset={-80}
          to="home"
          className="flex items-center gap-3 group"
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

          <span className="font-display text-[24px] font-bold tracking-tight text-primary">
            NBBS
          </span>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ScrollLink
            to="services"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("service")}
            className={`relative text-[14px] font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-secondary ${active === "service" ? "text-secondary underline underline-offset-4" : "text-primary hover:text-secondary"}`}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("about")}
            className={`relative text-[14px] font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-secondary ${active === "about" ? "text-secondary underline underline-offset-4" : "text-primary hover:text-secondary"}`}
          >
            About Us
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => setActive("contact")}
            className={`relative text-[14px] font-medium text-primary cursor-pointer transition-colors duration-300 hover:text-secondary ${active === "contact" ? "text-secondary underline underline-offset-4" : "text-primary hover:text-secondary"}`}
          >
            Contact
          </ScrollLink>
        </nav>

        {/* Get Started */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={700}
          offset={-80}
          className="hidden md:inline-flex items-center rounded-xl justify-center h-11 px-6 bg-primary text-white text-[13px] font-semibold tracking-wide cursor-pointer transition-all duration-300 hover:bg-secondary"
        >
          Get Started
        </ScrollLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined text-[26px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* mobile hamburger */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 py-5 flex flex-col gap-2">
          {/* Services */}
          <ScrollLink
            to="services"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="px-4 py-3 text-primary cursor-pointer"
          >
            Services
          </ScrollLink>

          {/* About */}
          <ScrollLink
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="px-4 py-3 text-primary cursor-pointer"
          >
            About Us
          </ScrollLink>

          {/* Contact */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="px-4 py-3 text-primary cursor-pointer"
          >
            Contact
          </ScrollLink>

          {/* Get Started */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="mt-2 flex items-center justify-center cursor-pointer rounded-xl h-11 bg-primary text-white text-[13px] font-semibold hover:bg-secondary "
          >
            Get Started
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}
