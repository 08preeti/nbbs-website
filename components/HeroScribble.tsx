// // "use client";

// // import { useMemo } from "react";

// // const round = (value: number, decimals = 2) => {
// //   const factor = 10 ** decimals;
// //   return Math.round(value * factor) / factor;
// // };

// // export default function HeroScribble() {
// //   /*
// //    * ============================================================
// //    * SCRIBBLE
// //    * ============================================================
// //    *
// //    * Important:
// //    * All generated coordinates are rounded.
// //    * This prevents React hydration mismatches caused by tiny
// //    * floating-point differences between server and browser.
// //    */

// //   const scribbles = useMemo(() => {
// //     const paths: string[] = [];

// //     const cx = 178;
// //     const cy = 175;

// //     for (let i = 0; i < 72; i++) {
// //       const angle = i * 0.71;

// //       const localCx = round(cx + Math.sin(i * 1.71) * 7);
// //       const localCy = round(cy + Math.cos(i * 1.23) * 7);

// //       const rx = round(72 + Math.sin(i * 0.83) * 25);
// //       const ry = round(68 + Math.cos(i * 1.11) * 24);

// //       const x1 = round(localCx - rx);
// //       const y1 = round(localCy);

// //       const x2 = round(localCx - rx * 0.38);
// //       const y2 = round(localCy - ry);

// //       const x3 = round(localCx + rx * 0.72);
// //       const y3 = round(localCy - ry * 0.78);

// //       const x4 = round(localCx + rx);
// //       const y4 = round(
// //         localCy + Math.sin(i * 0.79) * 12
// //       );

// //       const x5 = round(localCx + rx * 0.34);
// //       const y5 = round(localCy + ry);

// //       const x6 = round(localCx - rx * 0.78);
// //       const y6 = round(localCy + ry * 0.68);

// //       const path = `
// //         M ${x1} ${y1}

// //         C
// //           ${round(x1 - 15)}
// //           ${round(y1 - ry * 0.42)}
// //           ${round(x2 - 15)}
// //           ${round(y2 - 15)}
// //           ${x2}
// //           ${y2}

// //         C
// //           ${round(x2 + 30)}
// //           ${round(y2 - 22)}
// //           ${round(x3 - 18)}
// //           ${round(y3 - 10)}
// //           ${x3}
// //           ${y3}

// //         C
// //           ${round(x3 + 30)}
// //           ${round(y3 + 25)}
// //           ${round(x4 + 8)}
// //           ${round(y4 - 18)}
// //           ${x4}
// //           ${y4}

// //         C
// //           ${round(x4 - 20)}
// //           ${round(y4 + 38)}
// //           ${round(x5 + 20)}
// //           ${round(y5 + 18)}
// //           ${x5}
// //           ${y5}

// //         C
// //           ${round(x5 - 38)}
// //           ${round(y5 + 20)}
// //           ${round(x6 - 18)}
// //           ${round(y6 + 16)}
// //           ${x6}
// //           ${y6}

// //         C
// //           ${round(x6 - 32)}
// //           ${round(y6 - 38)}
// //           ${round(x1 + 12)}
// //           ${round(y1 + 24)}
// //           ${x1}
// //           ${y1}
// //       `;

// //       paths.push(path);
// //     }

// //     return paths;
// //   }, []);

// //   /*
// //    * ============================================================
// //    * INNER CIRCULAR SCRIBBLES
// //    * ============================================================
// //    */

// //   const innerScribbles = useMemo(() => {
// //     return Array.from({ length: 42 }).map((_, i) => {
// //       const radius = round(17 + i * 1.75);

// //       const cx = round(
// //         178 +
// //           Math.sin(i * 1.43) * 4
// //       );

// //       const cy = round(
// //         175 +
// //           Math.cos(i * 1.17) * 4
// //       );

// //       const rx = round(
// //         radius * (1.04 + Math.sin(i * 0.71) * 0.08)
// //       );

// //       const ry = round(
// //         radius * (0.98 + Math.cos(i * 0.83) * 0.1)
// //       );

// //       const rotation = round(
// //         -22 + i * 8.5
// //       );

// //       return {
// //         cx,
// //         cy,
// //         rx,
// //         ry,
// //         rotation,
// //       };
// //     });
// //   }, []);

// //   /*
// //    * ============================================================
// //    * GOLD CIRCUIT LINES
// //    * ============================================================
// //    *
// //    * These are intentionally uneven.
// //    * The reference image has branching circuit-like lines.
// //    */

// //   const circuitLines = [
// //     "M 238 138 H 300 L 318 122 H 375 L 394 106 H 470",
// //     "M 238 147 H 330 L 350 130 H 405 L 424 114 H 505",
// //     "M 238 156 H 290 L 310 141 H 365 L 384 124 H 535",

// //     "M 238 165 H 320 L 340 150 H 420 L 438 134 H 565",

// //     "M 238 174 H 650",

// //     "M 238 183 H 302 L 320 197 H 375 L 395 214 H 470",
// //     "M 238 193 H 325 L 345 208 H 410 L 430 225 H 520",
// //     "M 238 203 H 290 L 312 220 H 370 L 390 237 H 480",
// //     "M 238 213 H 320 L 340 230 H 405 L 425 247 H 530",
// //     "M 238 223 H 300 L 320 240 H 385 L 405 257 H 500",

// //     /*
// //      * Additional horizontal runs
// //      */

// //     "M 238 133 H 278 L 295 119 H 345",
// //     "M 238 143 H 290 L 308 128 H 360",
// //     "M 238 153 H 305",
// //     "M 238 188 H 300 L 318 202 H 355",
// //     "M 238 198 H 310 L 328 214 H 370",
// //     "M 238 208 H 300",
// //     "M 238 218 H 315 L 335 235 H 375",
// //   ];

// //   /*
// //    * ============================================================
// //    * BRANCHES
// //    * ============================================================
// //    */

// //   const branchLines = [
// //     "M 300 138 V 126 H 330",
// //     "M 318 122 V 112 H 350",

// //     "M 350 130 V 118 H 382",
// //     "M 394 106 V 96 H 430",

// //     "M 340 150 V 137 H 365",
// //     "M 420 134 V 121 H 455",

// //     "M 320 197 V 210 H 350",
// //     "M 345 208 V 221 H 380",
// //     "M 395 214 V 228 H 430",

// //     "M 430 225 V 240 H 465",
// //     "M 425 247 V 260 H 460",
// //   ];

// //   /*
// //    * ============================================================
// //    * RIGHT-SIDE VERTICAL GRID
// //    * ============================================================
// //    */

// //   const verticalLines = [
// //     675,
// //     684,
// //     693,
// //     702,
// //     711,
// //     720,
// //     729,
// //     738,
// //     747,
// //     756,
// //     765,
// //     774,
// //   ];

// //   return (
// //     <div
// //       className="
// //         relative
// //         w-full
// //         max-w-[850px]
// //         aspect-[850/350]
// //         select-none
// //       "
// //       aria-hidden="true"
// //     >
// //       <svg
// //         viewBox="0 0 850 350"
// //         className="
// //           absolute
// //           inset-0
// //           h-full
// //           w-full
// //           overflow-visible
// //         "
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         {/* ======================================================
// //             OUTER HAND-DRAWN SCRIBBLE
// //         ====================================================== */}

// //         <g
// //           fill="none"
// //           stroke="#172039"
// //           strokeWidth="1.15"
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           opacity="0.92"
// //         >
// //           {scribbles.map((path, index) => (
// //             <path
// //               key={`scribble-${index}`}
// //               d={path}
// //               transform={`
// //                 rotate(
// //                   ${round(-12 + index * 0.55)}
// //                   178
// //                   175
// //                 )
// //               `}
// //             />
// //           ))}
// //         </g>

// //         {/* ======================================================
// //             INNER CIRCULAR TANGLES
// //         ====================================================== */}

// //         <g
// //           fill="none"
// //           stroke="#172039"
// //           strokeWidth="0.95"
// //           strokeLinecap="round"
// //           opacity="0.92"
// //         >
// //           {innerScribbles.map((shape, index) => (
// //             <ellipse
// //               key={`inner-${index}`}
// //               cx={shape.cx}
// //               cy={shape.cy}
// //               rx={shape.rx}
// //               ry={shape.ry}
// //               transform={`
// //                 rotate(
// //                   ${shape.rotation}
// //                   ${shape.cx}
// //                   ${shape.cy}
// //                 )
// //               `}
// //             />
// //           ))}
// //         </g>

// //         {/* ======================================================
// //             GOLD CIRCUIT LINES
// //         ====================================================== */}

// //         <g
// //           fill="none"
// //           stroke="#c9a86a"
// //           strokeWidth="1.25"
// //           strokeLinecap="square"
// //           strokeLinejoin="miter"
// //           opacity="0.9"
// //         >
// //           {circuitLines.map((path, index) => (
// //             <path
// //               key={`circuit-${index}`}
// //               d={path}
// //             />
// //           ))}

// //           {branchLines.map((path, index) => (
// //             <path
// //               key={`branch-${index}`}
// //               d={path}
// //             />
// //           ))}
// //         </g>

// //         {/* ======================================================
// //             GOLD CONNECTION DOTS
// //         ====================================================== */}

// //         <g fill="#c9a86a">
// //           <circle cx="300" cy="138" r="2.2" />
// //           <circle cx="318" cy="122" r="2.2" />
// //           <circle cx="394" cy="106" r="2.2" />
// //           <circle cx="350" cy="130" r="2.2" />

// //           <circle cx="340" cy="150" r="2.2" />
// //           <circle cx="438" cy="134" r="2.2" />

// //           <circle cx="320" cy="197" r="2.2" />
// //           <circle cx="345" cy="208" r="2.2" />
// //           <circle cx="395" cy="214" r="2.2" />

// //           <circle cx="430" cy="225" r="2.2" />
// //           <circle cx="425" cy="247" r="2.2" />

// //           <circle cx="650" cy="174" r="2.4" />
// //         </g>

// //         {/* ======================================================
// //             RIGHT PROCESSOR / GRID
// //         ====================================================== */}

// //         <g
// //           fill="none"
// //           stroke="#c9a86a"
// //           strokeWidth="1.35"
// //           strokeLinecap="square"
// //           strokeLinejoin="miter"
// //           opacity="0.92"
// //         >
// //           {verticalLines.map((x, index) => {
// //             const offset =
// //               index % 3 === 0
// //                 ? 0
// //                 : index % 3 === 1
// //                 ? -6
// //                 : 6;

// //             return (
// //               <path
// //                 key={`vertical-${index}`}
// //                 d={`
// //                   M ${x} 72
// //                   V 128
// //                   L ${x + offset} 138
// //                   V 212
// //                   L ${x} 222
// //                   V 286
// //                 `}
// //               />
// //             );
// //           })}
// //         </g>

// //         {/* ======================================================
// //             CROSS CONNECTIONS
// //         ====================================================== */}

// //         <g
// //           fill="none"
// //           stroke="#c9a86a"
// //           strokeWidth="1"
// //           opacity="0.82"
// //         >
// //           <path d="M 650 138 H 790" />
// //           <path d="M 650 147 H 800" />
// //           <path d="M 650 156 H 810" />

// //           <path d="M 650 165 H 820" />

// //           <path d="M 650 174 H 830" />

// //           <path d="M 650 183 H 820" />
// //           <path d="M 650 193 H 810" />
// //           <path d="M 650 203 H 800" />
// //           <path d="M 650 213 H 790" />

// //           <path d="M 650 223 H 800" />

// //           <path d="M 660 128 V 222" />
// //           <path d="M 670 120 V 230" />
// //         </g>

// //         {/* ======================================================
// //             SMALL DECORATIVE GOLD DOTS
// //         ====================================================== */}

// //         <g fill="#c9a86a">
// //           <circle cx="460" cy="96" r="2.4" />
// //           <circle cx="525" cy="121" r="2.2" />
// //           <circle cx="565" cy="174" r="2.2" />
// //           <circle cx="500" cy="238" r="2.2" />
// //         </g>
// //       </svg>
// //     </div>
// //   );
// // }
















// /////////////////////////////////




// "use client";

// /* ================================================================
//    HERO SCRIBBLE

//    Design:
//    - Dense irregular navy tangled circle on the left
//    - Clean parallel gold circuit lines
//    - Controlled diagonal transitions
//    - Dense vertical gold circuit grid on the right
//    - Deterministic SVG values to avoid hydration mismatch
//    ================================================================ */

// /* ================================================================
//    HELPERS
//    ================================================================ */

// function round(value: number, decimals = 2) {
//   const factor = 10 ** decimals;
//   return Math.round(value * factor) / factor;
// }

// /* ================================================================
//    CREATE TANGLED SCRIBBLE
//    ================================================================ */

// function createScribble(index: number): string {
//   const cx = round(178 + Math.sin(index * 2.37) * 6);
//   const cy = round(175 + Math.cos(index * 1.83) * 6);

//   const rx = round(
//   120 +
//     Math.sin(index * 1.71) * 35 +
//     Math.cos(index * 0.73) * 25
// );

// const ry = round(
//   120 +
//     Math.cos(index * 1.29) * 35 +
//     Math.sin(index * 0.91) * 25
// );

//   const rotation = round(
//     -25 +
//       Math.sin(index * 1.41) * 38 +
//       index * 4.7
//   );

//   const points: { x: number; y: number }[] = [];

//   for (let p = 0; p < 12; p++) {
//     const angle =
//       (Math.PI * 2 * p) / 12 +
//       Math.sin(index * 0.91 + p * 1.73) * 0.14;

//     const radiusX =
//       rx *
//       (
//         0.82 +
//         Math.sin(index * 1.17 + p * 2.11) * 0.17 +
//         Math.cos(index * 0.63 + p) * 0.07
//       );

//     const radiusY =
//       ry *
//       (
//         0.82 +
//         Math.cos(index * 1.31 + p * 1.77) * 0.17 +
//         Math.sin(index * 0.71 + p) * 0.07
//       );

//     const localX = Math.cos(angle) * radiusX;
//     const localY = Math.sin(angle) * radiusY;

//     const radians = (rotation * Math.PI) / 180;

//     const rotatedX =
//       localX * Math.cos(radians) -
//       localY * Math.sin(radians);

//     const rotatedY =
//       localX * Math.sin(radians) +
//       localY * Math.cos(radians);

//     points.push({
//       x: round(cx + rotatedX),
//       y: round(cy + rotatedY),
//     });
//   }

//   const midpoint = (
//     a: { x: number; y: number },
//     b: { x: number; y: number }
//   ) => ({
//     x: round((a.x + b.x) / 2),
//     y: round((a.y + b.y) / 2),
//   });

//   let path = "";

//   const firstMid = midpoint(points[0], points[1]);

//   path += `M ${firstMid.x} ${firstMid.y} `;

//   for (let i = 1; i <= points.length; i++) {
//     const current = points[i % points.length];
//     const next = points[(i + 1) % points.length];

//     const mid = midpoint(current, next);

//     path += `Q ${current.x} ${current.y} ${mid.x} ${mid.y} `;
//   }

//   path += "Z";

//   return path;
// }

// /* ================================================================
//    SECONDARY INNER LOOPS
//    ================================================================ */

// function createInnerLoop(index: number) {
//   const cx = round(
//     178 +
//       Math.sin(index * 2.17) * 7
//   );

//   const cy = round(
//     175 +
//       Math.cos(index * 1.73) * 7
//   );

//   const rx = round(
//   65 +
//     Math.sin(index * 1.19) * 39
// );

// const ry = round(
//   65 +
//     Math.cos(index * 1.43) * 39
// );

//   const rotation = Math.round(index * 19 - 35);

//   return {
//     cx,
//     cy,
//     rx,
//     ry,
//     rotation,
//   };
// }

// /* ================================================================
//    COMPONENT
//    ================================================================ */

// export default function HeroScribble() {
//   const scribbles = Array.from(
//     { length: 72 },
//     (_, index) => createScribble(index)
//   );

//   return (
//     <div
//       className="
//         relative
//         w-full
//         max-w-[1050px]
// aspect-[1050/430]
//         select-none
//       "
//       aria-hidden="true"
//     >
//       <svg
//         viewBox="0 0 850 350"
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           overflow-visible
//         "
//         xmlns="http://www.w3.org/2000/svg"
//       >

//         {/* ==========================================================
//     TANGLED CHAOTIC CIRCLE
//     Shifted right so the circuit lines begin underneath it.
// ========================================================== */}

// <g
//   transform="translate(165 0)"
//   fill="none"
//   stroke="#172039"
//   strokeWidth="1.05"
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   opacity="0.9"
// >
//   {scribbles.map((path, index) => (
//     <path
//       key={index}
//       d={path}
//     />
//   ))}
// </g>

//         {/* ==========================================================
//             2. INNER DENSE LOOPS
//             ========================================================== */}

//         <g
//   transform="translate(165 0)"
//   fill="none"
//   stroke="#172039"
//   strokeWidth="0.80"
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   opacity="0.82"
// >
//           {Array.from({ length: 28 }).map((_, index) => {
//             const loop = createInnerLoop(index);

//             return (
//               <ellipse
//                 key={`inner-${index}`}
//                 cx={loop.cx}
//                 cy={loop.cy}
//                 rx={loop.rx}
//                 ry={loop.ry}
//                 transform={`rotate(${loop.rotation} ${loop.cx} ${loop.cy})`}
//               />
//             );
//           })}
//         </g>

//         {/* ==========================================================
//             3. GOLD CIRCUIT SYSTEM

//             IMPORTANT:
//             These are intentionally much cleaner than before.

//             The reference has:
//             - mostly horizontal lines
//             - small controlled steps
//             - diagonal bends only near the right
//             - no chaotic branching
//             ========================================================== */}

//         <g
//           fill="none"
//           stroke="#c9a86a"
//           strokeWidth="1.15"
//           strokeLinecap="square"
//           strokeLinejoin="miter"
//           opacity="0.9"
//         >

//           <g
//   fill="none"
//   stroke="#c9a86a"
//   strokeWidth="1.15"
//   strokeLinecap="square"
//   strokeLinejoin="miter"
//   opacity="0.9"
// >
//   {/* ==========================================================
//       UPPER CIRCUIT LINES
//       ========================================================== */}
  
//   <path d="M 430 115 H 560" />

//   <path d="M 429 125 H 580" />

//   <path d="M 429 135 H 600" />

//   <path d="M 428 145 H 620" />

//   <path d="M 429 155 H 635" />

//   <path d="M 430 165 H 645" />

//   <path d="M 429 175 H 650" />

//   {/* ==========================================================
//       CENTER
//       ========================================================== */}

//   <path d="M 430 185 H 650" />

//   <path d="M 428 195 H 650" />

//   <path d="M 429 205 H 645" />

//   <path d="M 430 215 H 635" />

//   {/* ==========================================================
//       LOWER CIRCUIT LINES
//       ========================================================== */}

//   <path d="M 430 225 H 620" />

//   <path d="M 428 235 H 600" />

//   <path d="M 428 245 H 580" />

//   <path d="M 430 255 H 560" />

//   {/* ==========================================================
//       TOP DIAGONAL TRANSITIONS
//       ========================================================== */}

//   <path d="M 560 115 L 585 100 H 680" />

//   <path d="M 580 125 L 605 108 H 690" />

//   <path d="M 600 135 L 625 116 H 700" />

//   <path d="M 620 145 L 645 124 H 710" />

//   <path d="M 635 155 L 660 132 H 720" />

//   <path d="M 645 165 L 670 140 H 730" />

//   {/* ==========================================================
//       CENTER TRANSITION
//       ========================================================== */}

//   <path d="M 650 175 H 735" />

//   <path d="M 650 185 H 735" />

//   <path d="M 650 195 H 735" />

//   {/* ==========================================================
//       LOWER DIAGONAL TRANSITIONS
//       ========================================================== */}

//   <path d="M 645 205 L 670 220 H 730" />

//   <path d="M 635 215 L 660 228 H 720" />

//   <path d="M 620 225 L 645 236 H 710" />

//   <path d="M 600 235 L 625 244 H 700" />

//   <path d="M 580 245 L 605 252 H 690" />

//   <path d="M 560 255 L 585 260 H 680" />
// </g>

//           {/* ========================================================
//               CONTROLLED TOP DIAGONAL TRANSITIONS
//               ======================================================== */}

//           <path d="M 590 145 L 615 128 H 690" />

//           <path d="M 610 153 L 632 136 H 700" />

//           <path d="M 625 161 L 645 145 H 710" />

//           <path d="M 635 169 L 655 153 H 720" />

//           <path d="M 640 177 L 662 161 H 730" />

//           {/* ========================================================
//               CONTROLLED LOWER DIAGONAL TRANSITIONS
//               ======================================================== */}

//           <path d="M 635 201 L 655 217 H 720" />

//           <path d="M 625 209 L 645 225 H 710" />

//           <path d="M 610 217 L 632 234 H 700" />

//           <path d="M 590 225 L 615 242 H 690" />

//           {/* ========================================================
//               CENTER TRANSITIONS
//               ======================================================== */}

//           <path d="M 640 185 H 730" />

//           <path d="M 640 193 H 730" />

//         </g>

        
//         {/* ==========================================================
//             5. RIGHT-SIDE VERTICAL CIRCUIT GRID

//             This is the part that makes it visually match Image 2.

//             The vertical lines begin around x=690 instead of being
//             pushed too far to the right.
//             ========================================================== */}

//         <g
//   fill="none"
//   stroke="#c9a86a"
//   strokeWidth="1.25"
//   strokeLinecap="square"
//   strokeLinejoin="miter"
//   opacity="0.92"
// >
//   <path d="M 690 25 V 105 L 680 120 V 250 L 690 265 V 325" />

//   <path d="M 700 25 V 105 L 690 120 V 250 L 700 265 V 325" />

//   <path d="M 710 25 V 105 L 700 120 V 250 L 710 265 V 325" />

//   <path d="M 720 25 V 105 L 710 120 V 250 L 720 265 V 325" />

//   <path d="M 730 25 V 105 L 720 120 V 250 L 730 265 V 325" />

//   <path d="M 740 25 V 105 L 730 120 V 250 L 740 265 V 325" />

//   <path d="M 750 25 V 105 L 740 120 V 250 L 750 265 V 325" />

//   <path d="M 760 25 V 105 L 750 120 V 250 L 760 265 V 325" />

//   <path d="M 770 25 V 105 L 760 120 V 250 L 770 265 V 325" />

//   <path d="M 780 25 V 105 L 770 120 V 250 L 780 265 V 325" />

//   <path d="M 790 25 V 105 L 780 120 V 250 L 790 265 V 325" />

//   <path d="M 800 25 V 105 L 790 120 V 250 L 800 265 V 325" />

//   <path d="M 810 25 V 105 L 800 120 V 250 L 810 265 V 325" />

//   <path d="M 820 25 V 105 L 810 120 V 250 L 820 265 V 325" />
// </g>

//         {/* ==========================================================
//             6. HORIZONTAL CROSS CONNECTIONS

//             These make the right side feel like a real circuit board,
//             similar to the reference.
//             ========================================================== */}

//         <g
//           fill="none"
//           stroke="#c9a86a"
//           strokeWidth="1"
//           strokeLinecap="square"
//           opacity="0.82"
//         >

//           <path d="M 640 138 H 850" />

//           <path d="M 640 146 H 850" />

//           <path d="M 640 154 H 850" />

//           <path d="M 640 162 H 850" />

//           <path d="M 640 170 H 850" />

//           <path d="M 640 178 H 850" />

//           <path d="M 640 186 H 850" />

//           <path d="M 640 194 H 850" />

//           <path d="M 640 202 H 850" />

//           <path d="M 640 210 H 850" />

//           <path d="M 640 218 H 850" />

//           <path d="M 640 226 H 850" />

//         </g>

        

//       </svg>
//     </div>
//   );
// }












// // components/HeroScribble.tsx
// "use client";

// import { useMemo } from "react";

// function round(value: number, decimals = 2) {
//   const factor = 10 ** decimals;
//   return Math.round(value * factor) / factor;
// }

// function createScribble(index: number): string {
//   const cx = round(178 + Math.sin(index * 2.37) * 6);
//   const cy = round(175 + Math.cos(index * 1.83) * 6);




//   //controll of outer size of tangle
//   const rx = round(
//     120 + Math.sin(index * 1.71) * 35 + Math.cos(index * 0.73) * 25
//   );
//   const ry = round(
//     120 + Math.cos(index * 1.29) * 35 + Math.sin(index * 0.91) * 25
//   );

//   const rotation = round(-25 + Math.sin(index * 1.41) * 38 + index * 4.7);
//   const points: { x: number; y: number }[] = [];

//   for (let p = 0; p < 12; p++) {
//     const angle =
//       (Math.PI * 2 * p) / 12 + Math.sin(index * 0.91 + p * 1.73) * 0.14;

//     const radiusX =
//       rx *
//       (0.82 +
//         Math.sin(index * 1.17 + p * 2.11) * 0.17 +
//         Math.cos(index * 0.63 + p) * 0.07);

//     const radiusY =
//       ry *
//       (0.82 +
//         Math.cos(index * 1.31 + p * 1.77) * 0.17 +
//         Math.sin(index * 0.71 + p) * 0.07);

//     const localX = Math.cos(angle) * radiusX;
//     const localY = Math.sin(angle) * radiusY;

//     const radians = (rotation * Math.PI) / 180;
//     const rotatedX = localX * Math.cos(radians) - localY * Math.sin(radians);
//     const rotatedY = localX * Math.sin(radians) + localY * Math.cos(radians);

//     points.push({
//       x: round(cx + rotatedX),
//       y: round(cy + rotatedY),
//     });
//   }

//   const midpoint = (
//     a: { x: number; y: number },
//     b: { x: number; y: number }
//   ) => ({
//     x: round((a.x + b.x) / 2),
//     y: round((a.y + b.y) / 2),
//   });

//   let path = "";
//   const firstMid = midpoint(points[0], points[1]);
//   path += `M ${firstMid.x} ${firstMid.y} `;

//   for (let i = 1; i <= points.length; i++) {
//     const current = points[i % points.length];
//     const next = points[(i + 1) % points.length];
//     const mid = midpoint(current, next);
//     path += `Q ${current.x} ${current.y} ${mid.x} ${mid.y} `;
//   }

//   path += "Z";
//   return path;
// }

// function createInnerLoop(index: number) {
//   const cx = round(180 + Math.sin(index * 2.17) * 9);
//   const cy = round(180 + Math.cos(index * 1.73) * 17);
//   const rx = round(79 + Math.sin(index * 1.19) * 60);  //contro the size of inner tangale
//   const ry = round(69 + Math.cos(index * 1.43) * 50);
//   const rotation = Math.round(index * 19 - 35);

//   return { cx, cy, rx, ry, rotation };
// }

// const g1 = [590, 598, 606, 614];
// const g2 = [642, 650, 658];
// const g3 = [686, 694, 702];
// const g4 = [730, 738, 746];
// const g5 = [774, 782, 790];
// const LAST_VERTICAL_X = 848;
// const g6 = [,,,];   //832, 840, LAST_VERTICAL_X

// const verticalLines = [...g1, ...g2, ...g3, ...g4, ...g5, ...g6];

// const startX = 385;
// const endX = LAST_VERTICAL_X;
// const vTop = 1;
// const vBottom = 355;

// const goldCircuitPaths = [
//   // --- TOP 3 THROUGH-LINES ---
//   `M ${startX} 106 H ${endX}`,
//   `M ${startX} 113 H ${endX}`,
//   `M ${startX} 120 H ${endX}`,

//   // --- UPPER 5-STEPPED 45° RAMPS ---
//   `M ${startX} 143 H ${g1[0] - (143 - 127)} L ${g1[0]} 127 H ${endX}`,
//   `M ${startX} 149 H ${g1[1] - (149 - 133)} L ${g1[1]} 133 H ${endX}`,
//   `M ${startX} 155 H ${g1[2] - (155 - 139)} L ${g1[2]} 139 H ${endX}`,
//   `M ${startX} 161 H ${g1[3] - (161 - 145)} L ${g1[3]} 145 H ${endX}`,
//   `M ${startX} 167 H ${g2[0] - (167 - 151)} L ${g2[0]} 151 H ${endX}`,

//   // --- CENTER CHEVRON ARROW (<) ---
//   `M ${g2[0]} 150 L ${g2[0] - 30} 175 L ${g2[0]} 193`,

//   // --- CENTER THROUGH-LINE ---
//   `M ${startX} 175 H ${endX}`,

//   // --- LOWER 5-STEPPED 45° RAMPS ---
//   `M ${startX} 183 H ${g2[0] - (199 - 183)} L ${g2[0]} 199 H ${endX}`,
//   `M ${startX} 189 H ${g1[3] - (205 - 189)} L ${g1[3]} 205 H ${endX}`,
//   `M ${startX} 195 H ${g1[2] - (211 - 195)} L ${g1[2]} 211 H ${endX}`,
//   `M ${startX} 201 H ${g1[1] - (217 - 201)} L ${g1[1]} 217 H ${endX}`,
//   `M ${startX} 207 H ${g1[0] - (223 - 207)} L ${g1[0]} 223 H ${endX}`,

//   // --- BOTTOM 3 THROUGH-LINES ---
//   `M ${startX} 230 H ${endX}`,
//   `M ${startX} 237 H ${endX}`,
//   `M ${startX} 244 H ${endX}`,
// ];

// export default function HeroScribble() {
//   const scribbles = useMemo(
//     () => Array.from({ length: 72 }, (_, index) => createScribble(index)),
//     []
//   );

//   return (
//     <div
//       className="
//         relative
//         w-full
//         max-w-[1050px]
//         aspect-[850/350]
//         select-none
//         border-none
//         outline-none
//       "
//       aria-hidden="true"
//     >
//       <svg
//         viewBox="0 0 850 350"
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           border-none
//           outline-none
//         "
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* LAYER 1: GOLD CIRCUIT LINES */}
//         <g
//           fill="none"
//           stroke="#c9a86a"
//           strokeWidth="1.35"
//           strokeLinecap="round"
//           strokeLinejoin="miter"
//           opacity="1"
//         >
//           {goldCircuitPaths.map((d, index) => (
//             <path key={`circuit-${index}`} d={d} />
//           ))}
//         </g>

//         {/* LAYER 2: VERTICAL BUS */}
//         <g
//           fill="none"
//           stroke="#c9a86a"
//           strokeWidth="1.35"
//           strokeLinecap="round"
//           strokeLinejoin="miter"
//           opacity="1"
//         >
//           {verticalLines.map((x) => (
//             <path key={`bus-${x}`} d={`M ${x} ${vTop} V ${vBottom}`} />
//           ))}
//         </g>

//         {/* LAYER 3: ORIGINAL TANGLED SCRIBBLE */}
//         <g
//           transform="translate(165 0)"
//           fill="none"
//           stroke="#172039"
//           strokeWidth="1.05"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           opacity="0.9"
//         >
//           {scribbles.map((path, index) => (
//             <path key={index} d={path} />
//           ))}
//         </g>

//         {/* LAYER 4: ORIGINAL INNER DENSE LOOPS */}
//         <g
//           transform="translate(165 0)"
//           fill="none"
//           stroke="#172039"
//           strokeWidth="0.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           opacity="0.82"
//         >
//           {Array.from({ length: 28 }).map((_, index) => {
//             const loop = createInnerLoop(index);
//             return (
//               <ellipse
//                 key={`inner-${index}`}
//                 cx={loop.cx}
//                 cy={loop.cy}
//                 rx={loop.rx}
//                 ry={loop.ry}
//                 transform={`rotate(${loop.rotation} ${loop.cx} ${loop.cy})`}
//               />
//             );
//           })}
//         </g>
//       </svg>
//     </div>
//   );
// }











// "use client";

// import { useMemo } from "react";

// function round(value: number, decimals = 2) {
//   const factor = 10 ** decimals;
//   return Math.round(value * factor) / factor;
// }

// function createScribble(index: number): string {
//   const cx = round(178 + Math.sin(index * 2.37) * 6);
//   const cy = round(175 + Math.cos(index * 1.83) * 6);

//   // Control of outer size of tangle
//   const rx = round(
//     120 + Math.sin(index * 1.71) * 35 + Math.cos(index * 0.73) * 25
//   );

//   const ry = round(
//     120 + Math.cos(index * 1.29) * 35 + Math.sin(index * 0.91) * 25
//   );

//   const rotation = round(
//     -25 + Math.sin(index * 1.41) * 38 + index * 4.7
//   );

//   const points: { x: number; y: number }[] = [];

//   for (let p = 0; p < 12; p++) {
//     const angle =
//       (Math.PI * 2 * p) / 12 +
//       Math.sin(index * 0.91 + p * 1.73) * 0.14;

//     const radiusX =
//       rx *
//       (0.82 +
//         Math.sin(index * 1.17 + p * 2.11) * 0.17 +
//         Math.cos(index * 0.63 + p) * 0.07);

//     const radiusY =
//       ry *
//       (0.82 +
//         Math.cos(index * 1.31 + p * 1.77) * 0.17 +
//         Math.sin(index * 0.71 + p) * 0.07);

//     const localX = Math.cos(angle) * radiusX;
//     const localY = Math.sin(angle) * radiusY;

//     const radians = (rotation * Math.PI) / 180;

//     const rotatedX =
//       localX * Math.cos(radians) -
//       localY * Math.sin(radians);

//     const rotatedY =
//       localX * Math.sin(radians) +
//       localY * Math.cos(radians);

//     points.push({
//       x: round(cx + rotatedX),
//       y: round(cy + rotatedY),
//     });
//   }

//   const midpoint = (
//     a: { x: number; y: number },
//     b: { x: number; y: number }
//   ) => ({
//     x: round((a.x + b.x) / 2),
//     y: round((a.y + b.y) / 2),
//   });

//   let path = "";

//   const firstMid = midpoint(points[0], points[1]);

//   path += `M ${firstMid.x} ${firstMid.y} `;

//   for (let i = 1; i <= points.length; i++) {
//     const current = points[i % points.length];
//     const next = points[(i + 1) % points.length];

//     const mid = midpoint(current, next);

//     path += `Q ${current.x} ${current.y} ${mid.x} ${mid.y} `;
//   }

//   path += "Z";

//   return path;
// }

// function createInnerLoop(index: number) {
//   const cx = round(180 + Math.sin(index * 2.17) * 9);
//   const cy = round(180 + Math.cos(index * 1.73) * 17);

//   // Control the size of inner tangle
//   const rx = round(79 + Math.sin(index * 1.19) * 60);
//   const ry = round(69 + Math.cos(index * 1.43) * 50);

//   const rotation = Math.round(index * 19 - 35);

//   return {
//     cx,
//     cy,
//     rx,
//     ry,
//     rotation,
//   };
// }

// /* ============================================================
//    GOLD CIRCUIT LINE GROUPS
//    ============================================================ */

// const g1 = [590, 598, 606, 614];
// const g2 = [642, 650, 658];
// const g3 = [686, 694, 702];
// const g4 = [730, 738, 746];


// const LAST_VERTICAL_X = 848;



// const verticalLines = [
//   ...g1,
//   ...g2,
//   ...g3,
//   ...g4,


// ];

// const startX = 385;

// /*
//  * IMPORTANT:
//  * Every horizontal circuit line stops at the same
//  * coordinate as the final vertical line.
//  */
// const endX = LAST_VERTICAL_X;

// /*
//  * Taller vertical lines.
//  */
// const vTop = -15;
// const vBottom = 365;

// /* ============================================================
//    GOLD CIRCUIT PATHS
//    ============================================================ */

// const goldCircuitPaths = [
//   // ----------------------------------------------------------
//   // TOP 3 THROUGH-LINES
//   // ----------------------------------------------------------

//   `M ${startX} 106 H ${endX}`,
//   `M ${startX} 113 H ${endX}`,
//   `M ${startX} 120 H ${endX}`,

//   // ----------------------------------------------------------
//   // UPPER 5-STEPPED 45° RAMPS
//   // ----------------------------------------------------------

//   `M ${startX} 143 H ${
//     g1[0] - (143 - 127)
//   } L ${g1[0]} 127 H ${endX}`,

//   `M ${startX} 149 H ${
//     g1[1] - (149 - 133)
//   } L ${g1[1]} 133 H ${endX}`,

//   `M ${startX} 155 H ${
//     g1[2] - (155 - 139)
//   } L ${g1[2]} 139 H ${endX}`,

//   `M ${startX} 161 H ${
//     g1[3] - (161 - 145)
//   } L ${g1[3]} 145 H ${endX}`,

//   `M ${startX} 167 H ${
//     g2[0] - (167 - 151)
//   } L ${g2[0]} 151 H ${endX}`,

//   // ----------------------------------------------------------
//   // CENTER CHEVRON ARROW
//   // ----------------------------------------------------------

//   `M ${g2[0]} 150 L ${g2[0] - 30} 175 L ${g2[0]} 193`,

//   // ----------------------------------------------------------
//   // CENTER THROUGH-LINE
//   // ----------------------------------------------------------

//   `M ${startX} 175 H ${endX}`,

//   // ----------------------------------------------------------
//   // LOWER 5-STEPPED 45° RAMPS
//   // ----------------------------------------------------------

//   `M ${startX} 183 H ${
//     g2[0] - (199 - 183)
//   } L ${g2[0]} 199 H ${endX}`,

//   `M ${startX} 189 H ${
//     g1[3] - (205 - 189)
//   } L ${g1[3]} 205 H ${endX}`,

//   `M ${startX} 195 H ${
//     g1[2] - (211 - 195)
//   } L ${g1[2]} 211 H ${endX}`,

//   `M ${startX} 201 H ${
//     g1[1] - (217 - 201)
//   } L ${g1[1]} 217 H ${endX}`,

//   `M ${startX} 207 H ${
//     g1[0] - (223 - 207)
//   } L ${g1[0]} 223 H ${endX}`,

//   // ----------------------------------------------------------
//   // BOTTOM 3 THROUGH-LINES
//   // ----------------------------------------------------------

//   `M ${startX} 230 H ${endX}`,
//   `M ${startX} 237 H ${endX}`,
//   `M ${startX} 244 H ${endX}`,
// ];

// /* ============================================================
//    HERO SCRIBBLE
//    ============================================================ */

// export default function HeroScribble() {
//   const scribbles = useMemo(
//     () =>
//       Array.from(
//         { length: 72 },
//         (_, index) => createScribble(index)
//       ),
//     []
//   );

//   return (
//     <div
//       className="
//         relative
//         w-full
//         max-w-[1050px]
//         aspect-[850/350]
//         select-none
//         overflow-hidden
//         border-none
//         outline-none
//       "
//       aria-hidden="true"
//     >
//       <svg
//         viewBox="0 0 850 350"
//         preserveAspectRatio="xMidYMid meet"
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           border-none
//           outline-none
//         "
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* =====================================================
//             CLIP EVERYTHING TO THE SVG BOUNDARY
//             ===================================================== */}

//         <defs>
//           <clipPath id="hero-circuit-clip">
//             <rect
//               x="0"
//               y="0"
//               width="850"
//               height="350"
//             />
//           </clipPath>
//         </defs>

//         <g clipPath="url(#hero-circuit-clip)">
//           {/* ===================================================
//               LAYER 1: GOLD CIRCUIT LINES
//               =================================================== */}

//           <g
//             fill="none"
//             stroke="#c9a86a"
//             strokeWidth="1.35"
//             strokeLinecap="round"
//             strokeLinejoin="miter"
//             opacity="1"
//           >
//             {goldCircuitPaths.map((d, index) => (
//               <path
//                 key={`circuit-${index}`}
//                 d={d}
//               />
//             ))}
//           </g>

//           {/* ===================================================
//               LAYER 2: VERTICAL BUS
//               =================================================== */}

//           <g
//             fill="none"
//             stroke="#c9a86a"
//             strokeWidth="1.35"
//             strokeLinecap="round"
//             strokeLinejoin="miter"
//             opacity="1"
//           >
//             {verticalLines.map((x) => (
//               <path
//                 key={`bus-${x}`}
//                 d={`M ${x} ${vTop} V ${vBottom}`}
//               />
//             ))}
//           </g>

//           {/* ===================================================
//               LAYER 3: TANGLED SCRIBBLE
//               =================================================== */}

//           <g
//             transform="translate(165 0)"
//             fill="none"
//             stroke="#172039"
//             strokeWidth="1.05"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             opacity="0.9"
//           >
//             {scribbles.map((path, index) => (
//               <path
//                 key={index}
//                 d={path}
//               />
//             ))}
//           </g>

//           {/* ===================================================
//               LAYER 4: INNER DENSE LOOPS
//               =================================================== */}

//           <g
//             transform="translate(165 0)"
//             fill="none"
//             stroke="#172039"
//             strokeWidth="0.8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             opacity="0.82"
//           >
//             {Array.from({ length: 28 }).map(
//               (_, index) => {
//                 const loop = createInnerLoop(index);

//                 return (
//                   <ellipse
//                     key={`inner-${index}`}
//                     cx={loop.cx}
//                     cy={loop.cy}
//                     rx={loop.rx}
//                     ry={loop.ry}
//                     transform={`rotate(
//                       ${loop.rotation}
//                       ${loop.cx}
//                       ${loop.cy}
//                     )`}
//                   />
//                 );
//               }
//             )}
//           </g>
//         </g>
//       </svg>
//     </div>
//   );
// }


















// "use client";

// import { useMemo } from "react";

// function round(value: number, decimals = 2) {
//   const factor = 10 ** decimals;
//   return Math.round(value * factor) / factor;
// }

// function createScribble(index: number): string {
//   const cx = round(178 + Math.sin(index * 2.37) * 6);
//   const cy = round(175 + Math.cos(index * 1.83) * 6);

//   // Control of outer size of tangle
//   const rx = round(
//     120 + Math.sin(index * 1.71) * 35 + Math.cos(index * 0.73) * 25
//   );

//   const ry = round(
//     120 + Math.cos(index * 1.29) * 35 + Math.sin(index * 0.91) * 25
//   );

//   const rotation = round(
//     -25 + Math.sin(index * 1.41) * 38 + index * 4.7
//   );

//   const points: { x: number; y: number }[] = [];

//   for (let p = 0; p < 12; p++) {
//     const angle =
//       (Math.PI * 2 * p) / 12 +
//       Math.sin(index * 0.91 + p * 1.73) * 0.14;

//     const radiusX =
//       rx *
//       (0.82 +
//         Math.sin(index * 1.17 + p * 2.11) * 0.17 +
//         Math.cos(index * 0.63 + p) * 0.07);

//     const radiusY =
//       ry *
//       (0.82 +
//         Math.cos(index * 1.31 + p * 1.77) * 0.17 +
//         Math.sin(index * 0.71 + p) * 0.07);

//     const localX = Math.cos(angle) * radiusX;
//     const localY = Math.sin(angle) * radiusY;

//     const radians = (rotation * Math.PI) / 180;

//     const rotatedX =
//       localX * Math.cos(radians) -
//       localY * Math.sin(radians);

//     const rotatedY =
//       localX * Math.sin(radians) +
//       localY * Math.cos(radians);

//     points.push({
//       x: round(cx + rotatedX),
//       y: round(cy + rotatedY),
//     });
//   }

//   const midpoint = (
//     a: { x: number; y: number },
//     b: { x: number; y: number }
//   ) => ({
//     x: round((a.x + b.x) / 2),
//     y: round((a.y + b.y) / 2),
//   });

//   let path = "";

//   const firstMid = midpoint(points[0], points[1]);

//   path += `M ${firstMid.x} ${firstMid.y} `;

//   for (let i = 1; i <= points.length; i++) {
//     const current = points[i % points.length];
//     const next = points[(i + 1) % points.length];

//     const mid = midpoint(current, next);

//     path += `Q ${current.x} ${current.y} ${mid.x} ${mid.y} `;
//   }

//   path += "Z";

//   return path;
// }

// function createInnerLoop(index: number) {
//   const cx = round(180 + Math.sin(index * 2.17) * 9);
//   const cy = round(180 + Math.cos(index * 1.73) * 17);

//   // Control the size of inner tangle
//   const rx = round(79 + Math.sin(index * 1.19) * 60);
//   const ry = round(69 + Math.cos(index * 1.43) * 50);

//   const rotation = Math.round(index * 19 - 35);

//   return {
//     cx,
//     cy,
//     rx,
//     ry,
//     rotation,
//   };
// }

// /* ============================================================
//    GOLD CIRCUIT LINE GROUPS
//    ============================================================ */

// const g1 = [590, 598, 606, 614];
// const g2 = [642, 650, 658];
// const g3 = [686, 694, 702];
// const g4 = [730, 738, 746];

// /*
//  * FINAL VERTICAL LINE
//  *
//  * This is now exactly at the right edge
//  * of the 850px SVG.
//  */
// const LAST_VERTICAL_X = 850;


// /*
//  * All vertical lines.
//  *
//  * The final line is included here so the
//  * horizontal circuit terminates exactly on it.
//  */
// const verticalLines = [
//   ...g1,
//   ...g2,
//   ...g3,
//   ...g4,
//   LAST_VERTICAL_X,
// ];

// const startX = 385;

// /*
//  * IMPORTANT:
//  * Horizontal circuit lines end exactly where
//  * the final vertical line is located.
//  */
// const endX = LAST_VERTICAL_X;

// /*
//  * Taller vertical lines.
//  */
// const vTop = -15;
// const vBottom = 365;

// /* ============================================================
//    GOLD CIRCUIT PATHS
//    ============================================================ */

// const goldCircuitPaths = [
//   // ----------------------------------------------------------
//   // TOP 3 THROUGH-LINES
//   // ----------------------------------------------------------

//   `M ${startX} 106 H ${endX}`,
//   `M ${startX} 113 H ${endX}`,
//   `M ${startX} 120 H ${endX}`,

//   // ----------------------------------------------------------
//   // UPPER 5-STEPPED 45° RAMPS
//   // ----------------------------------------------------------

//   `M ${startX} 143 H ${
//     g1[0] - (143 - 127)
//   } L ${g1[0]} 127 H ${endX}`,

//   `M ${startX} 149 H ${
//     g1[1] - (149 - 133)
//   } L ${g1[1]} 133 H ${endX}`,

//   `M ${startX} 155 H ${
//     g1[2] - (155 - 139)
//   } L ${g1[2]} 139 H ${endX}`,

//   `M ${startX} 161 H ${
//     g1[3] - (161 - 145)
//   } L ${g1[3]} 145 H ${endX}`,

//   `M ${startX} 167 H ${
//     g2[0] - (167 - 151)
//   } L ${g2[0]} 151 H ${endX}`,

//   // ----------------------------------------------------------
//   // CENTER CHEVRON ARROW
//   // ----------------------------------------------------------

//   `M ${g2[0]} 150 L ${g2[0] - 30} 175 L ${g2[0]} 193`,

//   // ----------------------------------------------------------
//   // CENTER THROUGH-LINE
//   // ----------------------------------------------------------

//   `M ${startX} 175 H ${endX}`,

//   // ----------------------------------------------------------
//   // LOWER 5-STEPPED 45° RAMPS
//   // ----------------------------------------------------------

//   `M ${startX} 183 H ${
//     g2[0] - (199 - 183)
//   } L ${g2[0]} 199 H ${endX}`,

//   `M ${startX} 189 H ${
//     g1[3] - (205 - 189)
//   } L ${g1[3]} 205 H ${endX}`,

//   `M ${startX} 195 H ${
//     g1[2] - (211 - 195)
//   } L ${g1[2]} 211 H ${endX}`,

//   `M ${startX} 201 H ${
//     g1[1] - (217 - 201)
//   } L ${g1[1]} 217 H ${endX}`,

//   `M ${startX} 207 H ${
//     g1[0] - (223 - 207)
//   } L ${g1[0]} 223 H ${endX}`,

//   // ----------------------------------------------------------
//   // BOTTOM 3 THROUGH-LINES
//   // ----------------------------------------------------------

//   `M ${startX} 230 H ${endX}`,
//   `M ${startX} 237 H ${endX}`,
//   `M ${startX} 244 H ${endX}`,
// ];

// /* ============================================================
//    HERO SCRIBBLE
//    ============================================================ */

// export default function HeroScribble() {
//   const scribbles = useMemo(
//     () =>
//       Array.from(
//         { length: 72 },
//         (_, index) => createScribble(index)
//       ),
//     []
//   );

//   return (
//     <div
//       className="
//         relative
//         w-full
//         max-w-[1050px]
//         aspect-[850/350]
//         select-none
//         overflow-hidden
//         border-none
//         outline-none
//       "
//       aria-hidden="true"
//     >
//       <svg
//         viewBox="0 0 850 350"
//         preserveAspectRatio="xMidYMid meet"
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           border-none
//           outline-none
//         "
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* =====================================================
//             CLIP TO SVG BOUNDARY
//             ===================================================== */}

//         <defs>
//           <clipPath id="hero-circuit-clip">
//             <rect
//               x="0"
//               y="0"
//               width="850"
//               height="350"
//             />
//           </clipPath>
//         </defs>

//         <g clipPath="url(#hero-circuit-clip)">
//           {/* ===================================================
//               LAYER 1: GOLD CIRCUIT LINES
//               =================================================== */}

//           <g
//             fill="none"
//             stroke="#c9a86a"
//             strokeWidth="1.35"
//             strokeLinecap="round"
//             strokeLinejoin="miter"
//             opacity="1"
//           >
//             {goldCircuitPaths.map((d, index) => (
//               <path
//                 key={`circuit-${index}`}
//                 d={d}
//               />
//             ))}
//           </g>

//           {/* ===================================================
//               LAYER 2: VERTICAL BUS
//               =================================================== */}

      <g
        fill="none"
        stroke="#172039"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.52"
        filter="url(#scribbleBlur)"
      >
        <path
          d="
            M185 300
            C125 260 150 565 235 495
            C320 525 400 475 382 390
            C365 305 270 270 205 320
            C140 370 175 470 255 485
            C335 500 395 435 360 355
            C325 275 225 285 185 355
            C145 425 210 490 285 475
            C360 460 370 370 315 325
            C260 280 180 320 175 395
            C170 470 245 500 305 465
            C365 430 345 345 285 325
            C225 305 175 360 195 420
            C215 480 285 475 320 425
            C355 375 315 325 265 330
            C215 335 195 385 215 425
            C235 465 285 460 310 425
            C335 390 310 350 275 350
            C240 350 220 380 230 410
            C240 440 275 445 295 420
            C315 395 295 365 270 370
            C245 375 240 395 250 410
          "
        />

        <path
          d="
            M150 325
            C215 255 330 285 365 365
            C400 445 350 515 275 520
            C200 525 145 470 155 395
            C165 320 240 275 310 310
            C380 345 385 435 335 485
            C285 535 195 505 175 445
            C155 385 195 330 250 320
            C305 310 350 355 350 405
            C350 455 305 490 260 470
            C215 450 205 400 230 365
            C255 330 310 345 325 380
            C340 415 315 450 285 450
            C255 450 235 425 240 400
            C245 375 275 360 295 375
          "
        />

        <path
          d="
            M210 275
            C300 245 385 315 380 400
            C375 485 295 535 220 495
            C145 455 140 355 205 315
            C270 275 355 320 360 390
            C365 460 300 505 245 475
            C190 445 185 370 235 335
            C285 300 345 340 345 395
            C345 450 290 480 250 450
            C210 420 215 365 255 345
            C295 325 330 355 330 390
            C330 425 300 450 275 435
            C250 420 250 385 270 370
          "
        />

        <path
          d="
            M125 390
            C155 315 235 270 315 300
            C395 330 420 420 380 485
            C340 550 245 555 180 510
            C115 465 105 405 125 390
          "
        />

        <path
          d="
            M175 290
            C245 260 350 295 385 375
            C420 455 365 535 285 535
            C205 535 145 480 150 410
          "
        />

        <path
          d="
            M155 450
            C205 530 320 545 380 470
            C440 395 395 300 320 280
          "
        />

        <path
          d="
            M185 510
            C260 550 370 510 395 430
            C420 350 355 280 275 285
          "
        />
      </g>

      {/* Lighter secondary scribble */}

      <g
        fill="none"
        stroke="#c9a86a"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.32"
      >
        <path
          d="
            M170 350
            C130 420 185 500 260 510
            C335 520 400 465 385 395
            C370 325 295 290 230 315
          "
        />

        <path
          d="
            M155 430
            C190 350 275 315 345 355
            C415 395 390 490 320 515
          "
        />

        <path
          d="
            M205 300
            C280 275 365 325 380 400
            C395 475 325 530 250 505
          "
        />

        <path
          d="
            M190 475
            C245 530 340 505 370 440
          "
        />
      </g>

      {/* =========================================================
          CHAOS → SOLUTION TRANSITION
          ========================================================= */}

      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Navy transition lines */}

        <path
          d="
            M270 430
            C300 445 325 470 355 500
            C390 535 425 565 480 585
            C545 608 620 610 690 610
            C820 610 930 610 1030 610
          "
          stroke="#172039"
          strokeWidth="1.15"
          opacity="0.65"
        />

        <path
          d="
            M285 440
            C315 455 340 480 370 510
            C405 545 445 575 500 595
            C565 618 640 620 710 620
            C830 620 940 620 1040 620
          "
          stroke="#172039"
          strokeWidth="0.95"
          opacity="0.48"
        />

        <path
          d="
            M295 450
            C325 465 350 490 380 520
            C420 555 460 585 520 605
            C590 628 660 630 730 630
            C845 630 950 630 1050 630
          "
          stroke="#172039"
          strokeWidth="0.75"
          opacity="0.34"
        />

        {/* Gold transition lines */}

        <path
          d="
            M300 455
            C330 470 355 495 390 525
            C430 560 475 590 530 610
            C600 635 675 638 745 638
            C860 638 965 638 1060 638
          "
          stroke="#c9a86a"
          strokeWidth="1.15"
          opacity="0.72"
        />

        <path
          d="
            M310 465
            C340 480 370 505 400 535
            C445 570 490 600 545 620
            C615 645 690 648 760 648
            C875 648 975 648 1070 648
          "
          stroke="#c9a86a"
          strokeWidth="0.9"
          opacity="0.5"
        />

        <path
          d="
            M320 475
            C350 490 380 515 410 545
            C455 580 505 610 560 630
            C630 655 705 658 775 658
            C890 658 985 658 1080 658
          "
          stroke="#c9a86a"
          strokeWidth="0.7"
          opacity="0.32"
        />
      </g>

      {/* =========================================================
          PROCESS LINE — HORIZONTAL
          ========================================================= */}

      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Navy lines */}

        <path
          d="M470 610 C620 610 760 610 885 610 C1010 610 1110 610 1250 610"
          stroke="#172039"
          strokeWidth="1"
          opacity="0.42"
        />

        <path
          d="M470 620 C620 620 760 620 885 620 C1010 620 1110 620 1250 620"
          stroke="#172039"
          strokeWidth="0.8"
          opacity="0.25"
        />

        {/* Gold lines */}

        <path
          d="M470 628 C620 628 760 628 885 628 C1010 628 1110 628 1250 628"
          stroke="#c9a86a"
          strokeWidth="1"
          opacity="0.68"
        />

        <path
          d="M470 638 C620 638 760 638 885 638 C1010 638 1110 638 1250 638"
          stroke="#c9a86a"
          strokeWidth="0.75"
          opacity="0.42"
        />

        <path
          d="M470 648 C620 648 760 648 885 648 C1010 648 1110 648 1250 648"
          stroke="#c9a86a"
          strokeWidth="0.65"
          opacity="0.28"
        />
      </g>

      {/* =========================================================
          PROCESS NODES
          ========================================================= */}

      {/* ---------------------------------------------------------
          NODE 1 — DIAGNOSIS
          --------------------------------------------------------- */}

      <g>
        <circle
          cx="480"
          cy="615"
          r="45"
          fill="#fffdf9"
          stroke="#c9a86a"
          strokeWidth="1"
        />

        <circle
          cx="480"
          cy="615"
          r="50"
          stroke="#c9a86a"
          strokeWidth="0.65"
          opacity="0.28"
        />

        <circle
          cx="480"
          cy="615"
          //r="42"
          stroke="#172039"
          strokeWidth="0.6"
          opacity="0.18"
        />

        {/* Magnifying glass */}

        <g
          stroke="#172039"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="476" cy="610" r="13" />
          <path d="M486 620 L498 632" />

          {/* pulse */}
          <path d="M463 611 H468 L471 604 L475 616 L479 607 L483 612 H488" />
        </g>
      </g>

      {/* ---------------------------------------------------------
          NODE 2 — STRATEGY
          --------------------------------------------------------- */}

      <g>
        <circle
          cx="735"
          cy="615"
          r="45"
          fill="#fffdf9"
          stroke="#c9a86a"
          strokeWidth="1"
        />

        <circle
          cx="735"
          cy="615"
          r="50"
          stroke="#c9a86a"
          strokeWidth="0.65"
          opacity="0.28"
        />

        <circle
          cx="735"
          cy="615"
          //r="40"
          stroke="#172039"
          strokeWidth="0.6"
          opacity="0.18"
        />

        {/* Target */}

        <g
          stroke="#172039"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="735" cy="615" r="15" />
          <circle cx="735" cy="615" r="5" />

          <path d="M735 592 V602" />
          <path d="M735 628 V638" />
          <path d="M712 615 H722" />
          <path d="M748 615 H758" />

          <path d="M752 598 L765 585" />
          <path d="M758 585 H765 V592" />
        </g>
      </g>

      {/* ---------------------------------------------------------
          NODE 3 — IMPLEMENTATION
          --------------------------------------------------------- */}

      <g>
        <circle
          cx="920"
          cy="615"
          r="42"
          fill="#fffdf9"
          stroke="#c9a86a"
          strokeWidth="1"
        />

        <circle
          cx="920"
          cy="615"
          r="50"
          stroke="#c9a86a"
          strokeWidth="0.65"
          opacity="0.28"
        />

        <circle
          cx="920"
          cy="615"
          //r="43"
          stroke="#172039"
          strokeWidth="0.6"
          opacity="0.18"
        />

        {/* Strategy / implementation arrows */}

        <g
          stroke="#172039"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M902 627 L934 595" />
          <path d="M925 595 H934 V604" />

          <path d="M901 600 L910 609" />
          <path d="M910 600 L901 609" />

          <path d="M923 621 L932 630" />
          <path d="M932 621 L923 630" />
        </g>
      </g>

      {/* ---------------------------------------------------------
          NODE 4 — SYSTEM / OPERATIONS
          --------------------------------------------------------- */}

      <g>
        <circle
          cx="1070"
          cy="615"
          r="42"
          fill="#fffdf9"
          stroke="#c9a86a"
          strokeWidth="1"
        />

        <circle
          cx="1070"
          cy="615"
          r="50"
          stroke="#c9a86a"
          strokeWidth="0.65"
          opacity="0.28"
        />

        <circle
          cx="1070"
          cy="615"
          //r="43"
          stroke="#172039"
          strokeWidth="0.6"
          opacity="0.18"
        />

        {/* Gear */}

        <g
          stroke="#172039"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="1070" cy="615" r="10" />

          <path d="M1070 596 V601" />
          <path d="M1070 629 V634" />

          <path d="M1051 615 H1056" />
          <path d="M1084 615 H1089" />

          <path d="M1057 602 L1061 606" />
          <path d="M1079 624 L1083 628" />

          <path d="M1083 602 L1079 606" />
          <path d="M1061 624 L1057 628" />
        </g>
      </g>

      {/* ---------------------------------------------------------
          NODE 5 — GROWTH / LAUNCH
          --------------------------------------------------------- */}

      <g>
        <circle
          cx="1245"
          cy="615"
          r="42"
          fill="#fffdf9"
          stroke="#c9a86a"
          strokeWidth="1"
        />

        <circle
          cx="1245"
          cy="615"
          r="50"
          stroke="#c9a86a"
          strokeWidth="0.65"
          opacity="0.28"
        />

        <circle
          cx="1245"
          cy="615"
          //r="43"
          stroke="#172039"
          strokeWidth="0.6"
          opacity="0.18"
        />

        {/* Rocket */}

        <g
          stroke="#172039"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="
              M1232 624
              C1232 610 1240 598 1254 594
              C1257 608 1253 620 1242 629
              Z
            "
          />

          <circle cx="1248" cy="607" r="3" />

          <path d="M1233 620 L1225 621 L1224 629 L1235 626" />

          <path d="M1240 629 L1238 637 L1245 635 L1248 628" />

          <path d="M1237 631 C1231 636 1231 641 1234 644" />
          <path d="M1244 633 C1241 638 1242 642 1245 644" />
        </g>
      </g>

      {/* =========================================================
          SMALL GOLD CONNECTOR DOTS
          ========================================================= */}

      <g fill="#c9a86a">
        <circle cx="555" cy="615" r="2.4" />
        <circle cx="610" cy="615" r="2.4" />
        <circle cx="680" cy="615" r="2.4" />

        <circle cx="790" cy="615" r="2.4" />
        <circle cx="850" cy="615" r="2.4" />

        <circle cx="970" cy="615" r="2.4" />
        <circle cx="1015" cy="615" r="2.4" />

        <circle cx="1120" cy="615" r="2.4" />
        <circle cx="1180" cy="615" r="2.4" />
      </g>

      {/* =========================================================
          RIGHT SIDE — LINES RISING UPWARD
          ========================================================= */}

      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Navy line 1 */}

        <path
          d="
            M1245 610
            C1300 600 1340 575 1360 530
            C1380 485 1380 405 1380 330
            L1380 265
          "
          stroke="#172039"
          strokeWidth="1.15"
          opacity="0.58"
        />

        {/* Navy line 2 */}

        <path
          d="
            M1245 620
            C1310 610 1360 585 1385 535
            C1410 485 1410 395 1410 310
            L1410 210
          "
          stroke="#172039"
          strokeWidth="0.95"
          opacity="0.45"
        />

        {/* Gold line 1 */}

        <path
          d="
            M1245 628
            C1320 620 1380 590 1405 540
            C1430 490 1430 400 1430 315
            L1430 150
          "
          stroke="#c9a86a"
          strokeWidth="1.15"
          opacity="0.75"
        />

        {/* Gold line 2 */}

        <path
          d="
            M1245 638
            C1330 630 1390 600 1420 550
            C1450 500 1450 410 1450 320
            L1450 105
          "
          stroke="#c9a86a"
          strokeWidth="0.95"
          opacity="0.58"
        />

        {/* Gold line 3 */}

        <path
          d="
            M1245 648
            C1340 640 1410 610 1440 555
            C1470 500 1470 410 1470 320
            L1470 145
          "
          stroke="#c9a86a"
          strokeWidth="0.75"
          opacity="0.38"
        />
      </g>

      {/* =========================================================
          RIGHT SIDE — ARROWHEADS
          ========================================================= */}

        <defs>
          <clipPath id="hero-circuit-clip">
            <rect
              x="0"
              y="0"
              width="850"
              height="350"
            />
          </clipPath>
        </defs>

        <g clipPath="url(#hero-circuit-clip)">
          {/* ===================================================
              LAYER 1: GOLD CIRCUIT LINES
              =================================================== */}

          <g
            fill="none"
            stroke="#c9a86a"
            strokeWidth="1.35"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity="1"
          >
            {goldCircuitPaths.map((d, index) => (
              <path
                key={`circuit-${index}`}
                d={d}
              />
            ))}
          </g>

          {/* ===================================================
              LAYER 2: VERTICAL BUS
              =================================================== */}

          <g
            fill="none"
            stroke="#c9a86a"
            strokeWidth="1.35"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            opacity="1"
          >
            {verticalLines.map((x) => (
              <path
                key={`bus-${x}`}
                d={`M ${x} ${vTop} V ${vBottom}`}
              />
            ))}
          </g>

          {/* ===================================================
              LAYER 3: OUTER TANGLED SCRIBBLE
              =================================================== */}

          <g
            transform="translate(165 0)"
            fill="none"
            stroke="#172039"
            strokeWidth="1.05"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          >
            {scribbles.map((path, index) => (
              <path
                key={index}
                d={path}
              />
            ))}
          </g>

          {/* ===================================================
              LAYER 4: INNER DENSE LOOPS
              =================================================== */}

          <g
            transform="translate(165 0)"
            fill="none"
            stroke="#172039"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.82"
          >
            {Array.from({ length: 28 }).map(
              (_, index) => {
                const loop = createInnerLoop(index);

                return (
                  <ellipse
                    key={`inner-${index}`}
                    cx={loop.cx}
                    cy={loop.cy}
                    rx={loop.rx}
                    ry={loop.ry}
                    transform={`rotate(
                      ${loop.rotation}
                      ${loop.cx}
                      ${loop.cy}
                    )`}
                  />
                );
              }
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}