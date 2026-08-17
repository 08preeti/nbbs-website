// // components/Header.tsx

// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e5e5e5]">
//       <div className="max-w-[1280px] mx-auto px-5 md:px-16 h-20 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           href="/"
//           className="flex items-center gap-3 group"
//           aria-label="NBBS Home"
//         >
//           <Image
//             src="/nbbs-logo.webp"
//             alt="NBBS Logo"
//             width={50}
//             height={30}
//             className="object-contain"
//             style={{ width: "50px", height: "30px" }}
//             priority
//           />

//           <span className="font-display text-[24px] font-bold tracking-tight text-primary">
//             NBBS
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">

//           <Link
//             href="/services"
//             className="relative text-[14px] font-medium text-primary transition-colors duration-300 hover:text-primary"
//           >
//             Services
//           </Link>

//           <Link
//             href="#"
//             className="relative text-[14px] font-medium text-primary transition-colors duration-300 hover:text-secondary"
//           >
//             Solutions
//           </Link>

//           <Link
//             href="/about"
//             className="relative text-[14px] font-medium text-primary transition-colors duration-300 hover:text-secondary"
//           >
//             About Us
//           </Link>

//           <Link
//             href="/contacts"
//             className="relative text-[14px] font-medium text-primary transition-colors duration-300 hover:text-secondary"
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Get Started */}
//         <Link
//           href="/contacts"
//           className="hidden md:inline-flex items-center rounded-xl justify-center h-11 px-6 bg-primary text-white text-[13px] font-semibold tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary"
//         >
//           Get Started
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           className="md:hidden p-2 text-primary"
//           aria-label="Open menu"
//         >
//           <span className="material-symbols-outlined text-[26px]">
//             menu
//           </span>
//         </button>
//       </div>
//     </header>
//   );
// }








// components/Header.tsx

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="NBBS Home"
        >
          <Image
            src="/nbbs-logo.webp"
            alt="NBBS Logo"
            width={50}
            height={30}
            className="object-contain"
            style={{ width: "50px", height: "30px" }}
            priority
          />

          <span className="font-display text-[24px] font-bold tracking-tight text-primary">
            NBBS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/#services"
            className="relative text-[14px] font-medium text-primary transition-colors duration-300 hover:text-primary"
          >
            Services
          </Link>

          <Link
            href="/#about"
            className="relative text-[14px] font-medium text-primary transition-colors duration-300 hover:text-secondary"
          >
            About Us
          </Link>

          <Link
            href="/#contact"
            className="relative text-[14px] font-medium text-primary transition-colors duration-300 hover:text-secondary"
          >
            Contact
          </Link>
        </nav>

        {/* Get Started */}
        <Link
          href="/#contact"
          className="hidden md:inline-flex items-center rounded-xl justify-center h-11 px-6 bg-primary text-white text-[13px] font-semibold tracking-wide transition-all duration-300 hover:bg-primary hover:text-primary"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-primary"
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined text-[26px]">
            menu
          </span>
        </button>
      </div>
    </header>
  );
}