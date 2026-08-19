"use client";

import { useMemo } from "react";

function round(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function createScribble(index: number): string {
  const cx = round(178 + Math.sin(index * 2.37) * 6);
  const cy = round(175 + Math.cos(index * 1.83) * 6);

  const rx = round(
    120 + Math.sin(index * 1.71) * 35 + Math.cos(index * 0.73) * 25,
  );

  const ry = round(
    120 + Math.cos(index * 1.29) * 35 + Math.sin(index * 0.91) * 25,
  );

  const rotation = round(-25 + Math.sin(index * 1.41) * 38 + index * 4.7);

  const points: { x: number; y: number }[] = [];

  for (let p = 0; p < 12; p++) {
    const angle =
      (Math.PI * 2 * p) / 12 + Math.sin(index * 0.91 + p * 1.73) * 0.14;

    const radiusX =
      rx *
      (0.82 +
        Math.sin(index * 1.17 + p * 2.11) * 0.17 +
        Math.cos(index * 0.63 + p) * 0.07);

    const radiusY =
      ry *
      (0.82 +
        Math.cos(index * 1.31 + p * 1.77) * 0.17 +
        Math.sin(index * 0.71 + p) * 0.07);

    const localX = Math.cos(angle) * radiusX;
    const localY = Math.sin(angle) * radiusY;

    const radians = (rotation * Math.PI) / 180;

    const rotatedX = localX * Math.cos(radians) - localY * Math.sin(radians);

    const rotatedY = localX * Math.sin(radians) + localY * Math.cos(radians);

    points.push({
      x: round(cx + rotatedX),
      y: round(cy + rotatedY),
    });
  }

  const midpoint = (
    a: { x: number; y: number },
    b: { x: number; y: number },
  ) => ({
    x: round((a.x + b.x) / 2),
    y: round((a.y + b.y) / 2),
  });

  let path = "";

  const firstMid = midpoint(points[0], points[1]);

  path += `M ${firstMid.x} ${firstMid.y} `;

  for (let i = 1; i <= points.length; i++) {
    const current = points[i % points.length];
    const next = points[(i + 1) % points.length];

    const mid = midpoint(current, next);

    path += `Q ${current.x} ${current.y} ${mid.x} ${mid.y} `;
  }

  path += "Z";

  return path;
}

function createInnerLoop(index: number) {
  const cx = round(180 + Math.sin(index * 2.17) * 9);
  const cy = round(180 + Math.cos(index * 1.73) * 17);

  const rx = round(79 + Math.sin(index * 1.19) * 60);
  const ry = round(69 + Math.cos(index * 1.43) * 50);

  const rotation = Math.round(index * 19 - 35);

  return {
    cx,
    cy,
    rx,
    ry,
    rotation,
  };
}

/* ============================================================
   GOLD CIRCUIT LINE GROUPS
   ============================================================ */

const g1 = [590, 598, 606, 614];
const g2 = [642, 650, 658];
const g3 = [686, 694, 702];
const g4 = [730, 738, 746];

/*
 * FINAL VERTICAL LINE
 *
 * 848.5 keeps the stroke completely inside the SVG
 * while visually touching the right screen edge.
 */
const LAST_VERTICAL_X = 848.5;

/*
 * All vertical lines.
 *
 * The final vertical line is the absolute right-most
 * circuit line.
 */
const verticalLines = [...g1, ...g2, ...g3, ...g4, LAST_VERTICAL_X];

/*
 * Circuit starts here.
 */
const startX = 385;

/*
 * IMPORTANT:
 *
 * Every horizontal line ends at exactly the same
 * coordinate as the FINAL vertical line.
 *
 * Therefore nothing can extend beyond it.
 */
const endX = LAST_VERTICAL_X;

/*
 * Vertical bus height.
 */
const vTop = -15;
const vBottom = 365;

/* ============================================================
   GOLD CIRCUIT PATHS
   ============================================================ */

const goldCircuitPaths = [
  /* ----------------------------------------------------------
     TOP THROUGH-LINES
     ---------------------------------------------------------- */

  `M ${startX} 106 H ${endX}`,
  `M ${startX} 113 H ${endX}`,
  `M ${startX} 120 H ${endX}`,

  /* ----------------------------------------------------------
     UPPER STEPPED LINES
     ---------------------------------------------------------- */

  `M ${startX} 143 H ${g1[0] - (143 - 127)} L ${g1[0]} 127 H ${endX}`,

  `M ${startX} 149 H ${g1[1] - (149 - 133)} L ${g1[1]} 133 H ${endX}`,

  `M ${startX} 155 H ${g1[2] - (155 - 139)} L ${g1[2]} 139 H ${endX}`,

  `M ${startX} 161 H ${g1[3] - (161 - 145)} L ${g1[3]} 145 H ${endX}`,

  `M ${startX} 167 H ${g2[0] - (167 - 151)} L ${g2[0]} 151 H ${endX}`,

  /* ----------------------------------------------------------
     CENTER CHEVRON
     ---------------------------------------------------------- */

  `M ${g2[0]} 150 L ${g2[0] - 30} 175 L ${g2[0]} 193`,

  /* ----------------------------------------------------------
     CENTER LINE
     ---------------------------------------------------------- */

  `M ${startX} 175 H ${endX}`,

  /* ----------------------------------------------------------
     LOWER STEPPED LINES
     ---------------------------------------------------------- */

  `M ${startX} 183 H ${g2[0] - (199 - 183)} L ${g2[0]} 199 H ${endX}`,

  `M ${startX} 189 H ${g1[3] - (205 - 189)} L ${g1[3]} 205 H ${endX}`,

  `M ${startX} 195 H ${g1[2] - (211 - 195)} L ${g1[2]} 211 H ${endX}`,

  `M ${startX} 201 H ${g1[1] - (217 - 201)} L ${g1[1]} 217 H ${endX}`,

  `M ${startX} 207 H ${g1[0] - (223 - 207)} L ${g1[0]} 223 H ${endX}`,

  /* ----------------------------------------------------------
     BOTTOM THROUGH-LINES
     ---------------------------------------------------------- */

  `M ${startX} 230 H ${endX}`,
  `M ${startX} 237 H ${endX}`,
  `M ${startX} 244 H ${endX}`,
];

/* ============================================================
   HERO SCRIBBLE
   ============================================================ */

export default function HeroScribble() {
  const scribbles = useMemo(
    () => Array.from({ length: 72 }, (_, index) => createScribble(index)),
    [],
  );

  return (
    <div
      className="
        relative
        w-full
        max-w-[1050px]
        aspect-[850/350]
        select-none
        overflow-hidden
        border-none
        outline-none
      "
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 850 350"
        preserveAspectRatio="xMidYMid meet"
        className="
          absolute
          inset-0
          h-full
          w-full
          border-none
          outline-none
        "
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* =====================================================
            HARD SVG BOUNDARY
            ===================================================== */}

        <defs>
          <clipPath id="hero-circuit-clip">
            <rect x="0" y="0" width="850" height="350" />
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
              <path key={`circuit-${index}`} d={d} />
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
              <path key={`bus-${x}`} d={`M ${x} ${vTop} V ${vBottom}`} />
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
              <path key={index} d={path} />
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
            {Array.from({ length: 28 }).map((_, index) => {
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
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
