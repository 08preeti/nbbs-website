"use client";

export default function HeroScribble() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/hero.png"
        alt=""
        className="
          absolute
          left-[48%]
          top-[230px]
          w-[100vw]
          max-w-none
          -translate-x-1/2
          h-auto
        "
      />
    </div>
  );
}