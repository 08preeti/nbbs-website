// // app/page.tsx

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import HeroScribble from "@/components/HeroScribble";
// import Link from "next/link";

// const stats = [
//   ["50+", "SMBS IN NASHIK"],
//   ["32%+", "AVG. 6-MO GROWTH"],
//   ["1.2Cr+", "CLIENT SAVINGS"],
//   ["6 mo.", "ROI TIMELINE"],
// ];

// export default function Home() {
//   return (
//     <div className="antialiased min-h-screen flex flex-col bg-[#fbf9f8] text-[#1b1c1c]">
//       <Header />

//       <main className="flex-grow">

//         {/* ============================================================
//     HERO
// ============================================================ */}

// <section className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-[#fbf9f8]">

//   {/* Background illustration */}
//   <div className="absolute inset-0 z-0 pointer-events-none">

//     <HeroScribble />

//   </div>

//   {/* Very subtle background fade */}
//   <div
//     className="
//       absolute
//       inset-0
//       z-[1]
//       pointer-events-none
//       bg-gradient-to-b
//       from-transparent
//       via-transparent
//       to-[#fbf9f8]/20
//     "
//   />

//   {/* Hero content */}

//   <div
//     className="
//       relative
//       z-10
//       min-h-[calc(100vh-70px)]
//       flex
//       items-center
//       justify-center
//       px-5
//       sm:px-8
//       md:px-12
//       py-20
//       md:py-24
//     "
//   >

//     <div className="w-full max-w-[1100px] text-center">

//       {/* ---------------------------------------------------------
//           EYEBROW
//       --------------------------------------------------------- */}

//       <div className="flex items-center justify-center gap-4 mb-8">

//         <span className="h-px w-12 md:w-16 bg-[#c9a86a]" />

//         <span
//           className="
//             text-[9px]
//             sm:text-[10px]
//             md:text-[11px]
//             font-semibold
//             uppercase
//             tracking-[0.32em]
//             text-[#172039]
//           "
//         >
//           INTEGRATED BUSINESS SOLUTIONS
//         </span>

//         <span className="h-px w-12 md:w-16 bg-[#c9a86a]" />

//       </div>


//       {/* ---------------------------------------------------------
//           MAIN HEADING
//       --------------------------------------------------------- */}

//       <h1
//         className="
//           font-display
//           text-[#172039]
//           font-semibold
//           leading-[0.92]
//           tracking-[-0.045em]

//           text-[48px]
//           sm:text-[58px]
//           md:text-[72px]
//           lg:text-[86px]
//           xl:text-[94px]
//         "
//       >

//         <span>
//           From{" "}
//         </span>

//         <span className="italic font-normal text-[#c9a86a]">
//           Diagnosis
//         </span>

//         <br />

//         <span>
//           to Solution
//         </span>

//         <br />

//         <span>
//           Implementation.
//         </span>

//       </h1>


//       {/* ---------------------------------------------------------
//           SMALL GOLD DIVIDER
//       --------------------------------------------------------- */}

//       <div className="flex justify-center items-center mt-9 mb-7">

//         <span className="h-px w-24 bg-[#c9a86a]" />

//         <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#c9a86a]" />

//         <span className="h-px w-24 bg-[#c9a86a]" />

//       </div>


//       {/* ---------------------------------------------------------
//           DESCRIPTION
//       --------------------------------------------------------- */}

//       <p
//         className="
//           mx-auto
//           max-w-[680px]
//           text-[#424858]
//           text-[15px]
//           sm:text-[16px]
//           md:text-[17px]
//           leading-[1.7]
//         "
//       >
//         Integrated business solutions for Nashik&apos;s SMB leaders.
//         <br className="hidden sm:block" />
//         Consulting when you need a guide. Software built for your
//         sustainable growth.
//       </p>


//       {/* ---------------------------------------------------------
//           CTA
//       --------------------------------------------------------- */}

//       <div
//         className="
//           mt-9
//           flex
//           flex-col
//           sm:flex-row
//           items-center
//           justify-center
//           gap-3
//         "
//       >

//         <Link
//           href="/contacts"
//           className="
//             group
//             inline-flex
//             items-center
//             justify-center
//             gap-3

//             min-w-[250px]

//             rounded-full

//             bg-[#172039]
//             text-white

//             px-8
//             py-[15px]

//             text-[11px]
//             md:text-[12px]

//             font-bold
//             uppercase
//             tracking-[0.16em]

//             transition-all
//             duration-300

//             hover:bg-[#c9a86a]
//             hover:text-[#172039]
//             hover:-translate-y-0.5

//             shadow-[0_10px_25px_rgba(23,32,57,0.12)]
//           "
//         >

//           Book Free Diagnostic

//           <span
//             className="
//               text-[18px]
//               leading-none
//               transition-transform
//               duration-300
//               group-hover:translate-x-1
//             "
//           >
//             →
//           </span>

//         </Link>


//         <Link
//           href="/services"
//           className="
//             inline-flex
//             items-center
//             justify-center

//             min-w-[210px]

//             rounded-full

//             border
//             border-[#172039]/30

//             bg-[#fbf9f8]/80

//             px-8
//             py-[15px]

//             text-[11px]
//             md:text-[12px]

//             font-bold
//             uppercase
//             tracking-[0.16em]

//             text-[#172039]

//             backdrop-blur-sm

//             transition-all
//             duration-300

//             hover:border-[#c9a86a]
//             hover:bg-white
//             hover:-translate-y-0.5
//           "
//         >
//           Explore Services
//         </Link>

//       </div>


//       {/* ---------------------------------------------------------
//           FEATURE VALUES
//       --------------------------------------------------------- */}

//       <div
//         className="
//           mt-16
//           md:mt-20

//           flex
//           flex-wrap
//           items-center
//           justify-center

//           gap-y-4
//         "
//       >

//         {[
//           "",
//         ].map((item, index) => (
//           <div
//             key={item}
//             className="flex items-center"
//           >

//             <span
//               className="
//                 px-5
//                 md:px-7

//                 text-[8px]
//                 sm:text-[9px]
//                 md:text-[10px]

//                 font-semibold
//                 uppercase
//                 tracking-[0.24em]

//                 text-[#172039]/70
//               "
//             >
//               {item}
//             </span>

//             {index !== 3 && (
//               <span className="h-5 w-px bg-[#c9a86a]/60" />
//             )}

//           </div>
//         ))}

//       </div>

//     </div>

//   </div>

// </section>

//         {/* ============================================================
//             STATS
//         ============================================================ */}

//         <section className="w-full border-y border-black/5 bg-[#fbf9f8]">
//           <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">

//             {stats.map(([value, label], index) => (
//               <div
//                 key={label}
//                 className={`
//                   flex min-h-[150px]
//                   flex-col
//                   items-center
//                   justify-center
//                   px-5
//                   py-8
//                   ${index < 3 ? "md:border-r md:border-black/[0.08]" : ""}
//                 `}
//               >
//                 <span className="text-4xl font-display mb-2 text-[#141a32]">
//                   {value}
//                 </span>

//                 <span className="text-xs uppercase tracking-widest text-[#141a32]/50 font-sans font-medium">
//                   {label}
//                 </span>
//               </div>
//             ))}

//           </div>
//         </section>

//         {/* ============================================================
//             NBBS ECOSYSTEM
//         ============================================================ */}

//         <section className="px-4 md:px-16 py-16 md:py-20 border-b border-[#c6c6ce] bg-[#f6f3f2]">

//           <div className="max-w-[1280px] mx-auto">

//             <div className="max-w-3xl mb-8 md:mb-10">

//               <h2 className="font-display text-[36px] md:text-[48px] font-semibold text-black leading-[1.2] tracking-[-0.02em] mb-6">
//                 The NBBS Ecosystem
//               </h2>

//               <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#46464d] max-w-2xl">
//                 we don&apos;t sell tools. We build the operating system for
//                 your growth, moving <br />
//                 from clarity to execution
//               </p>

//             </div>

//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

//               {[
//                 {
//                   n: "01",
//                   cat: "DIAGNOSIS",
//                   title: "Business OPD",
//                   text: "A deep-dive diagnostic to identify leakage and bottleneck points in your current operations.",
//                   href: "/services#service-01",
//                 },
//                 {
//                   n: "02",
//                   cat: "EDUCATION",
//                   title: "BWC Workshops",
//                   text: "Peer-led framework training designed specifically for the Indian SMB context.",
//                   href: "/services",
//                 },
//                 {
//                   n: "03",
//                   cat: "OPERATIONS",
//                   title: "NBBS CRM",
//                   text: "Custom-fitted sales tracking that your team will actually use, not ignore.",
//                   href: "/services#service-02",
//                 },
//                 {
//                   n: "04",
//                   cat: "OPERATIONS",
//                   title: "Incentiwise",
//                   text: "Transparent commission tracking that ends disputes and aligns your sales team.",
//                   href: "/services#service-03",
//                 },
//                 {
//                   n: "05",
//                   cat: "OPTIMIZATION",
//                   title: "Quotation",
//                   text: "Professional proposals in minutes. Standardize pricing and close faster.",
//                   href: "/services#service-04",
//                 },
//                 {
//                   n: "06",
//                   cat: "OPTIMIZATION",
//                   title: "Cashflow",
//                   text: "Predictive liquidity tracking so you never miss a payment or opportunity.",
//                   href: "/services#service-05",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.n}
//                   className="
//                     group
//                     relative
//                     flex
//                     min-h-[300px]
//                     flex-col
//                     overflow-hidden
//                     rounded-2xl
//                     border
//                     border-[#c6c6ce]
//                     bg-white
//                     p-8
//                     shadow-[0_8px_24px_rgba(20,26,50,0.05)]
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1.5
//                     hover:border-[#141a32]
//                     hover:bg-[#141a32]
//                     hover:shadow-[0_24px_48px_rgba(20,26,50,0.22)]
//                     md:p-9
//                   "
//                 >

//                   <div className="mb-7 flex items-center gap-3">

//                     <span className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#f6f3f2]
//                       text-[13px]
//                       font-bold
//                       text-[#141a32]
//                       transition-colors
//                       duration-300
//                       group-hover:bg-[#e9c176]
//                     ">
//                       {item.n}
//                     </span>

//                     <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#141a32]/50 group-hover:text-[#e9c176]">
//                       {item.cat}
//                     </span>

//                   </div>

//                   <h2 className="
//                     mb-4
//                     text-2xl
//                     font-bold
//                     text-black
//                     transition-colors
//                     duration-300
//                     group-hover:text-white
//                     md:text-3xl
//                   ">
//                     {item.title}
//                   </h2>

//                   <p className="
//                     mb-8
//                     text-[16px]
//                     leading-[1.6]
//                     text-[#46464d]
//                     transition-colors
//                     duration-300
//                     group-hover:text-white/70
//                     md:text-[18px]
//                   ">
//                     {item.text}
//                   </p>

//                   <Link
//                     href={item.href}
//                     className="
//                       group/link
//                       mt-auto
//                       inline-flex
//                       items-center
//                       gap-2
//                       text-sm
//                       font-bold
//                       uppercase
//                       tracking-wider
//                       text-[#141a32]/50
//                       transition-colors
//                       duration-300
//                       group-hover:text-[#e9c176]
//                     "
//                   >
//                     Learn More

//                     <span className="text-[18px] transition-transform duration-300 group-hover/link:translate-x-1">
//                       →
//                     </span>
//                   </Link>

//                 </div>
//               ))}

//             </div>
//           </div>
//         </section>

//         {/* ============================================================
//             RESULTS
//         ============================================================ */}

//         <section className="px-4 md:px-16 py-16 md:py-20 border-b border-[#c6c6ce] bg-[#fbf9f8]">

//           <div className="max-w-[1280px] mx-auto">

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

//               {/* Testimonials */}

//               <div className="flex flex-col">

//                 <div className="mb-12">

//                   <h2 className="font-display text-[40px] md:text-[52px] font-bold text-black leading-[1.15] tracking-[-0.02em]">
//                     Results, Not Promises.
//                   </h2>

//                 </div>

//                 {/* Testimonial 01 */}

//                 <div className="border-l-2 border-[#e9c176] pl-6 md:pl-8 mb-12">

//                   <p className="text-[19px] md:text-[21px] leading-[1.6] text-[#1b1c1c] max-w-xl mb-8">
//                     &quot;The transition from manual tracking to Incentiwise
//                     cleared all disputes with our field agents.Our transparency
//                     is our competitive edge now.&quot;
//                   </p>

//                   <div className="flex items-center gap-4 mb-8">

//                     <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-[#c6c6ce] bg-[#e9c176] text-white font-bold text-[15px]">
//                       SD
//                     </div>

//                     <div>
//                       <h3 className="font-bold text-[15px] text-black leading-[1.4]">
//                         Sanjay Dighe
//                       </h3>

//                       <p className="text-[13px] text-[#76767e] leading-[1.5]">
//                         Founder, Shree Sales Corporation
//                       </p>
//                     </div>

//                   </div>

//                   <div className="pt-5">
//                     <p className="font-display text-[23px] font-bold text-[#141a32]">
//                       30% Reduction in commission disputes
//                     </p>
//                   </div>

//                 </div>

//                 {/* Testimonial 02 */}

//                 <div className="border-l-2 border-[#e9c176] pl-6 md:pl-8">

//                   <p className="text-[19px] md:text-[21px] leading-[1.6] text-[#1b1c1c] max-w-xl mb-8">
//                     &quot;We finally have visibility into what is happening
//                     across the business instead of discovering problems after
//                     they happen.&quot;
//                   </p>

//                   <div className="flex items-center gap-4 mb-8">

//                     <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-[#c6c6ce] bg-[#e9c176] text-white font-bold text-[15px]">
//                       BF
//                     </div>

//                     <div>
//                       <h3 className="font-bold text-[15px] text-black leading-[1.4]">
//                         Business Founder
//                       </h3>

//                       <p className="text-[13px] text-[#76767e] leading-[1.5]">
//                         Managing Director, SMB Enterprise
//                       </p>
//                     </div>

//                   </div>

//                   <div className="border-t border-[#c6c6ce] pt-5">
//                     <p className="font-display text-[23px] font-bold text-[#141a32]">
//                       40% Faster operational decision-making
//                     </p>
//                   </div>

//                 </div>

//               </div>

//               {/* Featured Case Study */}

//               <div className="
//                 bg-[#141a32]
//                 text-white
//                 border
//                 border-[#141a32]
//                 transition-transform
//                 duration-300
//                 ease-out
//                 hover:scale-[1.03]
//                 cursor-pointer
//                 will-change-transform
//               ">

//                 <div className="p-8 md:p-10 border-b border-[#7c839f]/30">

//                   <div className="flex items-center justify-between mb-8">

//                     <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#e9c176]">
//                       Featured Case Study
//                     </span>

//                     <span className="text-[#e9c176] text-[22px]">
//                       ↗
//                     </span>

//                   </div>

//                   {/* Growth Graph */}

//                   <div className="
//                     relative
//                     h-[220px]
//                     w-full
//                     overflow-hidden
//                     border
//                     border-[#7c839f]/20
//                     bg-[#11172c]
//                   ">

//                     <div className="absolute inset-0 opacity-20">

//                       <div className="absolute left-0 right-0 top-1/4 border-t border-[#7c839f]" />
//                       <div className="absolute left-0 right-0 top-2/4 border-t border-[#7c839f]" />
//                       <div className="absolute left-0 right-0 top-3/4 border-t border-[#7c839f]" />

//                       <div className="absolute top-0 bottom-0 left-1/4 border-l border-[#7c839f]" />
//                       <div className="absolute top-0 bottom-0 left-2/4 border-l border-[#7c839f]" />
//                       <div className="absolute top-0 bottom-0 left-3/4 border-l border-[#7c839f]" />

//                     </div>

//                     <svg
//                       viewBox="0 0 600 220"
//                       className="absolute inset-0 w-full h-full"
//                       preserveAspectRatio="none"
//                     >

//                       <defs>

//                         <linearGradient
//                           id="growthGradient"
//                           x1="0"
//                           y1="0"
//                           x2="1"
//                           y2="0"
//                         >
//                           <stop offset="0%" stopColor="#7c839f" />
//                           <stop offset="100%" stopColor="#e9c176" />
//                         </linearGradient>

//                       </defs>

//                       <path
//                         d="M0 185 C80 180 95 160 150 165 C210 170 220 130 275 140 C335 150 350 105 400 115 C450 125 470 65 510 75 C550 85 570 35 600 25"
//                         fill="none"
//                         stroke="url(#growthGradient)"
//                         strokeWidth="4"
//                       />

//                       <path
//                         d="M0 185 C80 180 95 160 150 165 C210 170 220 130 275 140 C335 150 350 105 400 115 C450 125 470 65 510 75 C550 85 570 35 600 25 L600 220 L0 220 Z"
//                         fill="url(#growthGradient)"
//                         opacity="0.08"
//                       />

//                     </svg>

//                     <div className="absolute right-5 top-5">

//                       <span className="font-display text-[32px] font-bold text-[#e9c176]">
//                         +40%
//                       </span>

//                       <span className="block text-[10px] uppercase tracking-[0.1em] text-[#7c839f]">
//                         Growth
//                       </span>

//                     </div>

//                   </div>

//                 </div>

//                 <div className="p-8 md:p-10">

//                   <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#7c839f] mb-5">
//                     Shree Sales Corporation
//                   </span>

//                   <h3 className="font-display text-[30px] md:text-[38px] font-bold leading-[1.2] mb-6">
//                     How Shree Sales scaled 40% in 12 months
//                   </h3>

//                   <p className="text-[16px] md:text-[17px] leading-[1.7] text-[#b8bbca] mb-10">
//                     Through a combination of the Business OPD diagnostic and
//                     Incentiwise automation, Shree Sales removed the operational
//                     drag that was limiting their field force capacity.
//                   </p>

//                   <Link
//                     href="#"
//                     className="
//                       group
//                       inline-flex
//                       items-center
//                       gap-3
//                       text-[12px]
//                       font-bold
//                       uppercase
//                       tracking-[0.1em]
//                       text-[#e9c176]
//                       hover:text-white
//                       transition-colors
//                       duration-300
//                     "
//                   >
//                     Read Full Case Study

//                     <span className="text-[20px] transition-transform duration-300 group-hover:translate-x-1">
//                       →
//                     </span>
//                   </Link>

//                 </div>

//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ============================================================
//             FINAL CTA — PATH TO PERFORMANCE
//         ============================================================ */}

//         <section className="px-4 md:px-16 py-16 md:py-20 bg-[#141a32] text-center">

//           <div className="max-w-[1280px] mx-auto">

//             <div className="max-w-3xl mx-auto mb-8">

//               <h2 className="font-display text-[40px] md:text-[52px] font-bold text-white leading-[1.15] tracking-[-0.02em] mb-5">
//                 The Path to Performance
//               </h2>

//               <p className="text-[17px] md:text-[18px] leading-[1.6] text-[#aeb2c2]">
//                 Four stages from where you are to where you need to be.
//               </p>

//             </div>

//             <div className="
//               grid
//               grid-cols-1
//               sm:grid-cols-2
//               lg:grid-cols-4
//               gap-px
//               bg-[#4d536b]
//               border
//               border-[#4d536b]
//               text-left
//             ">

//               {/* 01 */}

//               <div className="bg-[#141a32] p-8 md:p-10 min-h-[300px] flex flex-col">

//                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-10">
//                   01
//                 </div>

//                 <h3 className="font-display text-[28px] md:text-[30px] font-bold text-white mb-4">
//                   Diagnostic
//                 </h3>

//                 <p className="text-[16px] leading-[1.7] text-[#aeb2c2]">
//                   Identify your unique operational challenges in a 30-min
//                   session.
//                 </p>

//               </div>

//               {/* 02 */}

//               <div className="bg-[#141a32] p-8 md:p-10 min-h-[300px] flex flex-col">

//                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-10">
//                   02
//                 </div>

//                 <h3 className="font-display text-[28px] md:text-[30px] font-bold text-white mb-4">
//                   Workshops
//                 </h3>

//                 <p className="text-[16px] leading-[1.7] text-[#aeb2c2]">
//                   Learn proven frameworks alongside your peer business owners.
//                 </p>

//               </div>

//               {/* 03 */}

//               <div className="bg-[#141a32] p-8 md:p-10 min-h-[300px] flex flex-col">

//                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-10">
//                   03
//                 </div>

//                 <h3 className="font-display text-[28px] md:text-[30px] font-bold text-white mb-4">
//                   Implementation
//                 </h3>

//                 <p className="text-[16px] leading-[1.7] text-[#aeb2c2]">
//                   Deploy software tools like CRM and Cashflow to automate rigor.
//                 </p>

//               </div>

//               {/* 04 */}

//               <div className="bg-[#141a32] p-8 md:p-10 min-h-[300px] flex flex-col">

//                 <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mb-10">
//                   04
//                 </div>

//                 <h3 className="font-display text-[28px] md:text-[30px] font-bold text-white mb-4">
//                   Scale
//                 </h3>

//                 <p className="text-[16px] leading-[1.7] text-[#aeb2c2]">
//                   Manage by exception using real-time dashboard analysis.
//                 </p>

//               </div>

//             </div>

//           </div>
//         </section>

//         {/* ============================================================
//             WORKSHOP + PRIVATE DIAGNOSTIC
//         ============================================================ */}

//         <section className="px-4 md:px-16 py-16 md:py-20 bg-[#fbf9f8] border-b border-[#c6c6ce]">

//           <div className="max-w-[1180px] mx-auto">

//             <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#c6c6ce] bg-white">

//               {/* WORKSHOP */}

//               <div className="
//                 p-8
//                 md:p-12
//                 lg:p-14
//                 border-b
//                 lg:border-b-0
//                 lg:border-r
//                 border-[#c6c6ce]
//               ">

//                 <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#e9c176] mb-6">
//                   Upcoming Workshop
//                 </span>

//                 <h2 className="
//                   font-display
//                   text-[38px]
//                   md:text-[48px]
//                   font-bold
//                   text-[#141a32]
//                   leading-[1.1]
//                   tracking-[-0.02em]
//                   mb-6
//                 ">
//                   The Next Clarity
//                   <br />

//                   <span className="text-[#e9c176] italic">
//                     Workshop is Loading.
//                   </span>
//                 </h2>

//                 <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#46464d] mb-2">
//                   Nashik · July 18, 2026
//                 </p>

//                 <h3 className="text-[20px] font-bold text-[#141a32] mb-10">
//                   Solving the sales tracking chaos
//                 </h3>

//                 <div className="flex items-center gap-4 mb-4">

//                   <div className="w-12 h-12 rounded-full border-2 border-[#e9c176] bg-[#e9c176] flex items-center justify-center">
//                     <span className="text-[#141a32] text-[20px]">
//                       +
//                     </span>
//                   </div>

//                   <div className="w-12 h-12 rounded-full border-2 border-[#e9c176] bg-[#f6f3f2] flex items-center justify-center -ml-3">
//                     <span className="text-[#141a32] text-[20px]">
//                       •
//                     </span>
//                   </div>

//                   <div className="w-12 h-12 rounded-full border-2 border-[#e9c176] bg-[#141a32] flex items-center justify-center -ml-3">
//                     <span className="text-[#e9c176] text-[20px]">
//                       +
//                     </span>
//                   </div>

//                   <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#76767e] ml-2">
//                     Only 4 spots left
//                   </span>

//                 </div>

//                 <button
//                   type="button"
//                   className="
//                     group
//                     mt-8
//                     inline-flex
//                     items-center
//                     gap-3
//                     bg-[#141a32]
//                     text-white
//                     px-7
//                     py-4
//                     text-[12px]
//                     font-bold
//                     uppercase
//                     tracking-[0.1em]
//                     hover:bg-[#e9c176]
//                     hover:text-[#141a32]
//                     transition-colors
//                     duration-300
//                   "
//                 >
//                   Register for Next Workshop

//                   <span className="text-[19px] transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                   </span>
//                 </button>

//               </div>

//               {/* PRIVATE DIAGNOSTIC */}

//               <div className="
//                 p-8
//                 md:p-12
//                 lg:p-14
//                 bg-[#141a32]
//                 text-white
//                 flex
//                 flex-col
//                 justify-center
//               ">

//                 <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-[#e9c176] mb-6">
//                   Diagnostic Path
//                 </span>

//                 <h2 className="
//                   font-display
//                   text-[38px]
//                   md:text-[48px]
//                   font-bold
//                   leading-[1.1]
//                   tracking-[-0.02em]
//                   mb-6
//                 ">
//                   Can&apos;t wait for
//                   <br />
//                   the workshop?
//                 </h2>

//                 <p className="
//                   text-[16px]
//                   md:text-[17px]
//                   leading-[1.7]
//                   text-[#b8bbca]
//                   max-w-lg
//                   mb-10
//                 ">
//                   Get a 1:1 business health checkup this week. No sales pitch.
//                   Just an honest map of your current state.
//                 </p>

//                 <Link
//                   href="/contacts"
//                   className="
//                     group
//                     inline-flex
//                     items-center
//                     gap-3
//                     w-fit
//                     text-[12px]
//                     font-bold
//                     uppercase
//                     tracking-[0.1em]
//                     text-[#e9c176]
//                     hover:text-white
//                     transition-colors
//                     duration-300
//                   "
//                 >
//                   Book a Private Diagnostic Session

//                   <span className="text-[20px] transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                   </span>
//                 </Link>

//               </div>

//             </div>
//           </div>
//         </section>

//       </main>

//       <Footer />
//     </div>
//   );
// }















// app/page.tsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroScribble from "@/components/HeroScribble";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

const stats = [
  ["50+", "SMBS IN NASHIK"],
  ["32%+", "AVG. 6-MO GROWTH"],
  ["1.2Cr+", "CLIENT SAVINGS"],
  ["6 mo.", "ROI TIMELINE"],
];

const ecosystem = [
  {
    n: "01",
    cat: "DIAGNOSIS",
    title: "Business OPD",
    text: "A deep-dive diagnostic to identify leakage and bottleneck points in your current operations.",
    href: "/services#service-01",
  },
  {
    n: "02",
    cat: "EDUCATION",
    title: "BWC Workshops",
    text: "Peer-led framework training designed specifically for the Indian SMB context.",
    href: "/services",
  },
  {
    n: "03",
    cat: "OPERATIONS",
    title: "NBBS CRM",
    text: "Custom-fitted sales tracking that your team will actually use, not ignore.",
    href: "/services#service-02",
  },
  {
    n: "04",
    cat: "OPERATIONS",
    title: "Incentiwise",
    text: "Transparent commission tracking that ends disputes and aligns your sales team.",
    href: "/services#service-03",
  },
  {
    n: "05",
    cat: "OPTIMIZATION",
    title: "Quotation",
    text: "Professional proposals in minutes. Standardize pricing and close faster.",
    href: "/services#service-04",
  },
  {
    n: "06",
    cat: "OPTIMIZATION",
    title: "Cashflow",
    text: "Predictive liquidity tracking so you never miss a payment or opportunity.",
    href: "/services#service-05",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fbf9f8] text-[#1b1c1c] antialiased">
      <Header />

      <main className="w-full overflow-x-hidden">
        {/* ============================================================
    HERO
============================================================ */}

        <section className="relative h-[calc(100vh-70px)] min-h-[560px] max-h-[760px] overflow-hidden bg-[#fbf9f8]">
          {/* Background illustration */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <HeroScribble />
          </div>

          {/* Background fade */}
          <div
            className="
      absolute
      inset-0
      z-[1]
      pointer-events-none
      bg-gradient-to-b
      from-transparent
      via-transparent
      to-[#fbf9f8]/30
    "
          />

          {/* Hero content */}
          <div
            className="
      relative
      z-10
      h-full
      w-full
      flex
      items-center
      justify-center
      px-5
      sm:px-8
      lg:px-10
    "
          >
            <div
              className="
        w-full
        max-w-[1050px]
        mx-auto
        text-center
        flex
        flex-col
        items-center
        justify-center
      "
            >
              {/* EYEBROW */}
              <div className="flex items-center justify-center gap-3 mb-5 lg:mb-6">
                <span className="h-px w-8 sm:w-10 lg:w-12 bg-[#c9a86a]" />

                <span
                  className="
            text-[8px]
            sm:text-[9px]
            lg:text-[10px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#172039]
            whitespace-nowrap
          "
                >
                  INTEGRATED BUSINESS SOLUTIONS
                </span>

                <span className="h-px w-8 sm:w-10 lg:w-12 bg-[#c9a86a]" />
              </div>

              {/* MAIN HEADING */}
              <h1
                className="
          font-display
          text-[#172039]
          font-semibold
          leading-[0.88]
          tracking-[-0.045em]

          text-[42px]
          sm:text-[50px]
          md:text-[58px]
          lg:text-[68px]
          xl:text-[76px]
        "
              >
                <span>From </span>

                <span className="italic font-normal text-[#c9a86a]">
                  Diagnosis
                </span>

                <br />

                <span>to Solution</span>

                <br />

                <span>Implementation.</span>
              </h1>

              {/* GOLD DIVIDER */}
              <div className="flex justify-center items-center mt-5 mb-4">
                <span className="h-px w-16 sm:w-20 bg-[#c9a86a]" />

                <span className="mx-2 h-1.5 w-1.5 rounded-full bg-[#c9a86a]" />

                <span className="h-px w-16 sm:w-20 bg-[#c9a86a]" />
              </div>

              {/* DESCRIPTION */}
              <p
                className="
          mx-auto
          max-w-[600px]
          text-[#424858]
          text-[12px]
          sm:text-[13px]
          md:text-[14px]
          lg:text-[15px]
          leading-[1.55]
        "
              >
                Integrated business solutions for Nashik&apos;s SMB leaders.
                <br className="hidden sm:block" />
                Consulting when you need a guide. Software built for your
                sustainable growth.
              </p>

              {/* CTA */}
              <div
                className="
          mt-5
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-2
        "
              >
                <Link
                  href="/contacts"
                  className="
            group
            inline-flex
            items-center
            justify-center
            gap-2

            min-w-[190px]

            rounded-full

            bg-[#172039]
            text-white

            px-6
            py-3

            text-[9px]
            sm:text-[10px]

            font-bold
            uppercase
            tracking-[0.14em]

            transition-all
            duration-300

            hover:bg-[#c9a86a]
            hover:text-[#172039]
            hover:-translate-y-0.5

            shadow-[0_8px_20px_rgba(23,32,57,0.12)]
          "
                >
                  Book Free Diagnostic
                  <span
                    className="
              text-[15px]
              leading-none
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="/services"
                  className="
            inline-flex
            items-center
            justify-center

            min-w-[170px]

            rounded-full

            border
            border-[#172039]/30

            bg-[#fbf9f8]/80

            px-6
            py-3

            text-[9px]
            sm:text-[10px]

            font-bold
            uppercase
            tracking-[0.14em]

            text-[#172039]

            backdrop-blur-sm

            transition-all
            duration-300

            hover:border-[#c9a86a]
            hover:bg-white
            hover:-translate-y-0.5
          "
                >
                  Explore Services
                </Link>
              </div>

              {/* FEATURE VALUES */}
              <div
                className="
          mt-7
          flex
          items-center
          justify-center
          gap-0
          max-w-full
          overflow-hidden
        "
              >
                {["Strategy", "Technology", "Execution"].map((item, index) => (
                  <div key={item} className="flex items-center">
                    {index !== 2 && (
                      <span className="h-4 w-px bg-[#c9a86a]/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STATS
        ============================================================ */}
        <section className="w-full border-y border-black/5 bg-[#fbf9f8]">
          <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 md:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className={`
                  flex
                  min-h-[110px]
                  flex-col
                  items-center
                  justify-center
                  px-3
                  py-5
                  sm:min-h-[120px]
                  sm:px-4
                  md:min-h-[130px]
                  ${index < 3 ? "md:border-r md:border-black/[0.08]" : ""}
                  ${
                    index === 0 || index === 2
                      ? "border-r border-black/[0.06] md:border-r"
                      : ""
                  }
                `}
              >
                <span className="mb-1 font-display text-2xl text-[#141a32] sm:text-3xl md:text-4xl">
                  {value}
                </span>

                <span className="text-center text-[8px] font-medium uppercase tracking-[0.15em] text-[#141a32]/50 sm:text-[9px] md:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            NBBS ECOSYSTEM
        ============================================================ */}
        <section className="w-full border-b border-[#c6c6ce] bg-[#f6f3f2] px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mb-8 max-w-2xl md:mb-10">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#c9a86a]">
                What We Build
              </span>

              <h2 className="mb-4 font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-black sm:text-[38px] md:text-[46px]">
                The NBBS Ecosystem
              </h2>

              <p className="max-w-xl text-[14px] leading-[1.65] text-[#46464d] sm:text-[16px]">
                We don&apos;t sell tools. We build the operating system for your
                growth, moving from clarity to execution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ecosystem.map((item) => (
                <div
                  key={item.n}
                  className="
                    group
                    relative
                    flex
                    min-h-[245px]
                    flex-col
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#c6c6ce]
                    bg-white
                    p-6
                    shadow-[0_6px_20px_rgba(20,26,50,0.04)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#141a32]
                    hover:bg-[#141a32]
                    hover:shadow-[0_18px_35px_rgba(20,26,50,0.18)]
                    sm:min-h-[260px]
                    md:p-7
                  "
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f6f3f2] text-[11px] font-bold text-[#141a32] transition-colors duration-300 group-hover:bg-[#e9c176]">
                      {item.n}
                    </span>

                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#141a32]/50 group-hover:text-[#e9c176]">
                      {item.cat}
                    </span>
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-black transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    {item.title}
                  </h2>

                  <p className="mb-6 text-[14px] leading-[1.6] text-[#46464d] transition-colors duration-300 group-hover:text-white/70 sm:text-[15px]">
                    {item.text}
                  </p>

                  <Link
                    href={item.href}
                    className="group/link mt-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#141a32]/50 transition-colors duration-300 group-hover:text-[#e9c176]"
                  >
                    Learn More
                    <span className="text-[17px] transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            SERVICES
        ============================================================ */}
        <section className="w-full border-b border-[#c6c6ce] bg-[#fbf9f8] px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
              {/* Testimonials */}
              <div>
                <div className="mb-8">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#c9a86a]">
                    Client Outcomes
                  </span>

                  <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-black sm:text-[42px] md:text-[48px]">
                    Results, Not Promises.
                  </h2>
                </div>

                {/* Testimonial 01 */}
                <div className="mb-9 border-l-2 border-[#e9c176] pl-5 sm:pl-6">
                  <p className="mb-6 max-w-xl text-[16px] leading-[1.55] text-[#1b1c1c] sm:text-[18px]">
                    &quot;The transition from manual tracking to Incentiwise
                    cleared all disputes with our field agents. Our transparency
                    is our competitive edge now.&quot;
                  </p>

                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c6c6ce] bg-[#e9c176] text-[12px] font-bold text-white">
                      SD
                    </div>

                    <div>
                      <h3 className="text-[13px] font-bold leading-[1.4] text-black">
                        Sanjay Dighe
                      </h3>

                      <p className="text-[11px] text-[#76767e]">
                        Founder, Shree Sales Corporation
                      </p>
                    </div>
                  </div>

                  <p className="border-t border-[#c6c6ce] pt-4 font-display text-[19px] font-bold text-[#141a32]">
                    30% Reduction in commission disputes
                  </p>
                </div>

                {/* Testimonial 02 */}
                <div className="border-l-2 border-[#e9c176] pl-5 sm:pl-6">
                  <p className="mb-6 max-w-xl text-[16px] leading-[1.55] text-[#1b1c1c] sm:text-[18px]">
                    &quot;We finally have visibility into what is happening
                    across the business instead of discovering problems after
                    they happen.&quot;
                  </p>

                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c6c6ce] bg-[#e9c176] text-[12px] font-bold text-white">
                      BF
                    </div>

                    <div>
                      <h3 className="text-[13px] font-bold leading-[1.4] text-black">
                        Business Founder
                      </h3>

                      <p className="text-[11px] text-[#76767e]">
                        Managing Director, SMB Enterprise
                      </p>
                    </div>
                  </div>

                  <p className="border-t border-[#c6c6ce] pt-4 font-display text-[19px] font-bold text-[#141a32]">
                    40% Faster operational decision-making
                  </p>
                </div>
              </div>

              {/* Case Study */}
              <div className="overflow-hidden border border-[#141a32] bg-[#141a32] text-white transition-transform duration-300 hover:-translate-y-1">
                <div className="border-b border-[#7c839f]/30 p-6 sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#e9c176]">
                      Featured Case Study
                    </span>

                    <span className="text-lg text-[#e9c176]">↗</span>
                  </div>

                  {/* Graph */}
                  <div className="relative h-[170px] w-full overflow-hidden border border-[#7c839f]/20 bg-[#11172c] sm:h-[190px]">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute left-0 right-0 top-1/4 border-t border-[#7c839f]" />
                      <div className="absolute left-0 right-0 top-2/4 border-t border-[#7c839f]" />
                      <div className="absolute left-0 right-0 top-3/4 border-t border-[#7c839f]" />

                      <div className="absolute bottom-0 left-1/4 top-0 border-l border-[#7c839f]" />
                      <div className="absolute bottom-0 left-2/4 top-0 border-l border-[#7c839f]" />
                      <div className="absolute bottom-0 left-3/4 top-0 border-l border-[#7c839f]" />
                    </div>

                    <svg
                      viewBox="0 0 600 220"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="growthGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#7c839f" />
                          <stop offset="100%" stopColor="#e9c176" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 185 C80 180 95 160 150 165 C210 170 220 130 275 140 C335 150 350 105 400 115 C450 125 470 65 510 75 C550 85 570 35 600 25"
                        fill="none"
                        stroke="url(#growthGradient)"
                        strokeWidth="4"
                      />

                      <path
                        d="M0 185 C80 180 95 160 150 165 C210 170 220 130 275 140 C335 150 350 105 400 115 C450 125 470 65 510 75 C550 85 570 35 600 25 L600 220 L0 220 Z"
                        fill="url(#growthGradient)"
                        opacity="0.08"
                      />
                    </svg>

                    <div className="absolute right-4 top-4">
                      <span className="font-display text-2xl font-bold text-[#e9c176] sm:text-3xl">
                        +40%
                      </span>

                      <span className="block text-[8px] uppercase tracking-[0.1em] text-[#7c839f]">
                        Growth
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.12em] text-[#7c839f]">
                    Shree Sales Corporation
                  </span>

                  <h3 className="mb-4 font-display text-[26px] font-bold leading-[1.15] sm:text-[32px]">
                    How Shree Sales scaled 40% in 12 months
                  </h3>

                  <p className="mb-7 text-[14px] leading-[1.65] text-[#b8bbca] sm:text-[15px]">
                    Through a combination of the Business OPD diagnostic and
                    Incentiwise automation, Shree Sales removed the operational
                    drag that was limiting their field force capacity.
                  </p>

                  <Link
                    href="#"
                    className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#e9c176] transition-colors duration-300 hover:text-white"
                  >
                    Read Full Case Study
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PATH TO PERFORMANCE
        ============================================================ */}
        <section className="w-full bg-[#141a32] px-4 py-12 text-center sm:px-6 md:px-8 md:py-16 lg:px-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="mx-auto mb-8 max-w-2xl">
              <span className="mb-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#e9c176]">
                Our Process
              </span>

              <h2 className="mb-4 font-display text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[42px] md:text-[48px]">
                The Path to Performance
              </h2>

              <p className="text-[14px] leading-[1.6] text-[#aeb2c2] sm:text-[16px]">
                Four stages from where you are to where you need to be.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#4d536b] bg-[#4d536b] text-left sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "01",
                  "Diagnostic",
                  "Identify your unique operational challenges in a 30-min session.",
                ],
                [
                  "02",
                  "Workshops",
                  "Learn proven frameworks alongside your peer business owners.",
                ],
                [
                  "03",
                  "Implementation",
                  "Deploy software tools like CRM and Cashflow to automate rigor.",
                ],
                [
                  "04",
                  "Scale",
                  "Manage by exception using real-time dashboard analysis.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex min-h-[230px] flex-col bg-[#141a32] p-6 sm:p-7 md:min-h-[245px] md:p-8"
                >
                  <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                    {number}
                  </div>

                  <h3 className="mb-3 font-display text-2xl font-bold text-white">
                    {title}
                  </h3>

                  <p className="text-[14px] leading-[1.65] text-[#aeb2c2]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            WORKSHOP + DIAGNOSTIC
        ============================================================ */}
        <section className="w-full border-b border-[#c6c6ce] bg-[#fbf9f8] px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10">
          <div className="mx-auto w-full max-w-[1150px]">
            <div className="grid grid-cols-1 overflow-hidden border border-[#c6c6ce] bg-white lg:grid-cols-2">
              {/* Workshop */}
              <div className="border-b border-[#c6c6ce] p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r">
                <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.12em] text-[#e9c176]">
                  Upcoming Workshop
                </span>

                <h2 className="mb-5 font-display text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[#141a32] sm:text-[40px] md:text-[44px]">
                  The Next Clarity
                  <br />
                  <span className="italic text-[#e9c176]">
                    Workshop is Loading.
                  </span>
                </h2>

                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#46464d]">
                  Nashik · July 18, 2026
                </p>

                <h3 className="mb-7 text-[17px] font-bold text-[#141a32]">
                  Solving the sales tracking chaos
                </h3>

                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e9c176] bg-[#e9c176]">
                    <span className="text-lg text-[#141a32]">+</span>
                  </div>

                  <div className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e9c176] bg-[#f6f3f2]">
                    <span className="text-lg text-[#141a32]">•</span>
                  </div>

                  <div className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e9c176] bg-[#141a32]">
                    <span className="text-lg text-[#e9c176]">+</span>
                  </div>

                  <span className="ml-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#76767e]">
                    Only 4 spots left
                  </span>
                </div>

                <button
                  type="button"
                  className="
                    group
                    mt-6
                    inline-flex
                    items-center
                    gap-3
                    bg-[#141a32]
                    px-6
                    py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-[#e9c176]
                    hover:text-[#141a32]
                  "
                >
                  Register for Next Workshop
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {/* Diagnostic */}
              <div className="flex flex-col justify-center bg-[#141a32] p-6 text-white sm:p-8 md:p-10">
                <span className="mb-4 block text-[9px] font-bold uppercase tracking-[0.12em] text-[#e9c176]">
                  Diagnostic Path
                </span>

                <h2 className="mb-5 font-display text-[32px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[40px] md:text-[44px]">
                  Can&apos;t wait for
                  <br />
                  the workshop?
                </h2>

                <p className="mb-7 max-w-lg text-[14px] leading-[1.65] text-[#b8bbca] sm:text-[15px]">
                  Get a 1:1 business health checkup this week. No sales pitch.
                  Just an honest map of your current state.
                </p>

                <Link
                  href="/contacts"
                  className="group inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#e9c176] transition-colors duration-300 hover:text-white"
                >
                  Book a Private Diagnostic Session
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
