"use client";

import gsap from "gsap";
import {
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

type Result = {
  value: string;
  label: string;
};

type Customer = {
  company: string;
  founder: string;
  challenge: string;
  solution: string;
  results: Result[];
  quote: string;
};

const customers: Customer[] = [
  {
    company: "Shree Sales Corporation",
    founder: "SANJAY DIGHE, FOUNDER",

    challenge:
      "Manual commission tracking caused constant disputes and eroded field-team trust.",

    solution:
      "Business OPD diagnostic + Incentiwise rollout across 3 territories.",

    results: [
      {
        value: "30%",
        label: "Fewer commission disputes",
      },
      {
        value: "40%",
        label: "Revenue growth in 12 months",
      },
      {
        value: "100%",
        label: "Field rep adoption",
      },
    ],

    quote:
      "NBBS didn't just sell us a tool. They fixed how we think about our sales team first.",
  },

  {
    company: "Customer Two",
    founder: "SUMIT GANDHI, DIRECTOR",

    challenge:
      "Inconsistent quotes were causing pricing leaks and slow close cycles.",

    solution:
      "Standardized templates and approval workflow via Quotation.",

    results: [
      {
        value: "50%",
        label: "Faster quote turnaround",
      },
      {
        value: "18%",
        label: "Higher average tickets",
      },
      {
        value: "2x",
        label: "Conversion on pitches",
      },
    ],

    quote:
      "We look like a multinational firm now, even though we operate from a tier-2 city.",
  },
];

export default function AnchorCustomers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const trackWidthRef = useRef(0);
  const totalCards = customers.length;

  // Drag state (mouse/trackpad via Pointer Events, finger swipe via Touch Events).
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragDeltaXRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Velocity tracking for a natural "flick" swipe, not just distance.
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const velocityRef = useRef(0);

  // Whether the current touch gesture has committed to horizontal swipe
  // (vs. the user trying to scroll the page vertically).
  const isHorizontalSwipeRef = useRef<boolean | null>(null);

  // Trackpad two-finger swipe (fires as wheel events with deltaX, not
  // pointer/touch events) — debounced so one gesture = one slide change.
  const wheelCooldownRef = useRef(false);
  const wheelAccumRef = useRef(0);
  const wheelResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const snapToSlide = (slide: number) => {
    const targetSlide = Math.max(0, Math.min(totalCards - 1, slide));

    if (!trackRef.current) {
      setCurrentSlide(targetSlide);
      return;
    }

    gsap.to(trackRef.current, {
      xPercent: -100 * targetSlide,
      duration: 0.5,
      ease: "power3.out",
    });

    setCurrentSlide(targetSlide);
  };

  const moveToSlide = (slide: number) => {
    snapToSlide(slide);
  };

  const nextSlide = () => {
    moveToSlide(currentSlide + 1);
  };

  const previousSlide = () => {
    moveToSlide(currentSlide - 1);
  };

  const startDrag = (clientX: number, clientY: number) => {
    if (!trackRef.current) return;

    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragStartYRef.current = clientY;
    dragDeltaXRef.current = 0;
    trackWidthRef.current = trackRef.current.getBoundingClientRect().width;

    lastMoveXRef.current = clientX;
    lastMoveTimeRef.current = performance.now();
    velocityRef.current = 0;
    isHorizontalSwipeRef.current = null;

    gsap.killTweensOf(trackRef.current);
    setIsDragging(true);
  };

  const moveDrag = (clientX: number) => {
    if (!isDraggingRef.current || !trackRef.current || !trackWidthRef.current) {
      return;
    }

    const deltaX = clientX - dragStartXRef.current;
    dragDeltaXRef.current = deltaX;

    // Track instantaneous velocity (px/ms) for flick detection.
    const now = performance.now();
    const dt = now - lastMoveTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (clientX - lastMoveXRef.current) / dt;
    }
    lastMoveXRef.current = clientX;
    lastMoveTimeRef.current = now;

    // Resist dragging past the first/last card.
    const atStart = currentSlide === 0 && deltaX > 0;
    const atEnd = currentSlide === totalCards - 1 && deltaX < 0;
    const resistedDeltaX = atStart || atEnd ? deltaX / 3 : deltaX;

    const basePercent = -100 * currentSlide;
    const deltaPercent = (resistedDeltaX / trackWidthRef.current) * 100;

    gsap.set(trackRef.current, {
      xPercent: basePercent + deltaPercent,
    });
  };

  const endDrag = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    setIsDragging(false);
    isHorizontalSwipeRef.current = null;

    const dragDistancePercent =
      trackWidthRef.current > 0
        ? (dragDeltaXRef.current / trackWidthRef.current) * 100
        : 0;

    // A fast flick should switch slides even if the finger didn't travel
    // very far — this is what makes it feel like a real touch swipe.
    const isFastFlick = Math.abs(velocityRef.current) > 0.5;
    const distanceThresholdPercent = isFastFlick ? 4 : 15;

    if (
      dragDistancePercent > distanceThresholdPercent ||
      (isFastFlick && velocityRef.current > 0)
    ) {
      snapToSlide(currentSlide - 1);
    } else if (
      dragDistancePercent < -distanceThresholdPercent ||
      (isFastFlick && velocityRef.current < 0)
    ) {
      snapToSlide(currentSlide + 1);
    } else {
      snapToSlide(currentSlide);
    }

    dragDeltaXRef.current = 0;
    velocityRef.current = 0;
  };

  // ---- Mouse / trackpad (Pointer Events) ----

  const handlePointerDown = (event: ReactPointerEvent) => {
    // Ignore drags started on the dot/arrow controls or other buttons.
    if ((event.target as HTMLElement).closest("button")) return;
    // Let touch input be handled exclusively by the Touch Event handlers below.
    if (event.pointerType === "touch") return;

    startDrag(event.clientX, event.clientY);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent) => {
    if (event.pointerType === "touch") return;
    moveDrag(event.clientX);
  };

  const handlePointerUp = (event: ReactPointerEvent) => {
    if (event.pointerType === "touch") return;
    endDrag();
  };

  const handlePointerLeave = (event: ReactPointerEvent) => {
    if (event.pointerType === "touch") return;
    if (isDraggingRef.current) {
      endDrag();
    }
  };

  // ---- Finger swipe (Touch Events) ----
  // Dedicated touch handlers give us finer control over when to hijack the
  // gesture from the page's native vertical scroll, and let us call
  // preventDefault only once a horizontal swipe is confirmed.

  const handleTouchStart = (event: ReactTouchEvent) => {
    if ((event.target as HTMLElement).closest("button")) return;

    const touch = event.touches[0];
    if (!touch) return;

    startDrag(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (event: ReactTouchEvent) => {
    if (!isDraggingRef.current) return;

    const touch = event.touches[0];
    if (!touch) return;

    // Decide once, early in the gesture, whether this is a horizontal
    // swipe (drag the cards) or a vertical scroll (let the page move).
    if (isHorizontalSwipeRef.current === null) {
      const dx = touch.clientX - dragStartXRef.current;
      const dy = touch.clientY - dragStartYRef.current;

      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) {
        // Not enough movement yet to decide.
        return;
      }

      isHorizontalSwipeRef.current = Math.abs(dx) > Math.abs(dy);

      if (!isHorizontalSwipeRef.current) {
        // Vertical intent: bail out and let the browser scroll normally.
        isDraggingRef.current = false;
        setIsDragging(false);
        return;
      }
    }

    if (isHorizontalSwipeRef.current) {
      // Prevent the page from scrolling while the card track is being swiped.
      event.preventDefault();
      moveDrag(touch.clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDraggingRef.current) {
      endDrag();
    }
    isHorizontalSwipeRef.current = null;
  };

  // ---- Trackpad swipe (Wheel Events) ----
  // Laptop trackpads emit two-finger swipes as wheel events with a
  // horizontal deltaX, not pointer/touch events, so they need their own
  // handler entirely.

  const handleWheel = (event: ReactWheelEvent) => {
    // Ignore vertical-dominant scrolling so the page can still scroll normally.
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    // Ignore tiny/noisy deltas.
    if (Math.abs(event.deltaX) < 2) return;

    event.preventDefault();

    if (wheelCooldownRef.current) return;

    wheelAccumRef.current += event.deltaX;

    if (wheelResetTimeoutRef.current) {
      clearTimeout(wheelResetTimeoutRef.current);
    }
    wheelResetTimeoutRef.current = setTimeout(() => {
      wheelAccumRef.current = 0;
    }, 150);

    const swipeThreshold = 40;

    if (Math.abs(wheelAccumRef.current) > swipeThreshold) {
      wheelCooldownRef.current = true;
      wheelAccumRef.current = 0;

      if (wheelResetTimeoutRef.current) {
        clearTimeout(wheelResetTimeoutRef.current);
      }

      gsap.killTweensOf(trackRef.current);

      const direction = event.deltaX > 0 ? 1 : -1;
      moveToSlide(currentSlide + direction);

      // Lock out further slide changes until this gesture ends.
      window.setTimeout(() => {
        wheelCooldownRef.current = false;
      }, 500);
    }
  };

  return (
    <section ref={sectionRef} className="bg-paper py-16 md:py-20">
      {/* ============================================================
          HEADER
      ============================================================ */}

      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />


        </div>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-3xl text-3xl font-black leading-[0.92] tracking-[-0.045em] text-navy sm:text-4xl md:text-5xl">
            Anchor Customers
          </h2>


        </div>
      </div>

      {/* ============================================================
          SLIDER
      ============================================================ */}

      <div className="w-full mt-10">
        <div
          className="mx-auto max-w-[92rem] px-5 sm:px-8 md:px-12 lg:px-16"
        >
        <div
          className={`overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ touchAction: "pan-y", userSelect: isDragging ? "none" : "auto" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={handlePointerLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onWheel={handleWheel}
        >
          <div
            ref={trackRef}
            className="flex"
          >
            {customers.map((customer, index) => (
              <div
                key={`${customer.company}-${index}`}
                className="w-full shrink-0 px-1"
              >
                <article
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-navy/[0.08]
                    bg-white
                    shadow-[0_24px_70px_rgba(15,23,42,0.09)]
                  "
                >
                  {/* ==================================================
                      MAIN CONTENT
                  ================================================== */}

                  <div className="grid md:grid-cols-[1.08fr_0.92fr]">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div className="flex flex-col px-8 pb-9 pt-9 sm:px-10 sm:pt-10 md:px-12 md:pb-11 md:pt-11">
                      {/* Label */}



                      {/* Company */}

                      <h3 className="mt-6 max-w-150 font-display text-4xl font-black leading-[0.98] tracking-[-0.04em] text-navy sm:text-5xl md:text-[3.1rem]">
                        {customer.company}
                      </h3>

                      {/* Founder */}

                      <div className="mt-4 flex items-center gap-3">

                        <span className="text-sm text-left font-bold uppercase tracking-[0.18em] text-secondary">
                          {customer.founder}
                        </span>
                      </div>

                      {/* Challenge */}

                      <div className="mt-9">
                        <div className="mb-3 flex items-center gap-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">
                            Challenge
                          </span>

                          <span className="h-px w-10 bg-navy/10" />
                        </div>

                        <p className="max-w-140 text-base leading-7 text-navy/65">
                          {customer.challenge}
                        </p>
                      </div>

                      {/* Solution */}

                      <div className="mt-7">
                        <div className="mb-3 flex items-center gap-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50">
                            Solution
                          </span>

                          <span className="h-px w-10 bg-gold/40" />
                        </div>

                        <p className="max-w-140 text-base font-medium leading-7 text-navy">
                          {customer.solution}
                        </p>
                      </div>

                      {/* Results */}

                      <div className="mt-9">
                        <hr className="text-primary/50 mb-4" />
                        <div className="grid grid-cols-3">
                          {customer.results.map((result, resultIndex) => (
                            <div
                              key={result.label}
                              className={`
                                ${resultIndex > 0
                                  ? "border-l border-navy/10 pl-5 sm:pl-6"
                                  : ""
                                }
                                ${resultIndex < 2
                                  ? "pr-5 sm:pr-6"
                                  : ""
                                }
                              `}
                            >
                              <div className="font-display text-3xl font-black leading-none tracking-tighter text-navy sm:text-4xl md:text-5xl">
                                {result.value}
                              </div>

                              <p className="mt-2.5 max-w-32.5 text-[9px] font-bold uppercase leading-[1.45] tracking-[0.07em] text-navy/40 sm:text-[10px]">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        RIGHT QUOTE
                    ================================================= */}

                    <div className="flex items-center justify-center bg-[#f4f0e8] px-7 py-9 sm:px-9 md:px-11">
                      <div
                        className="
                          relative
                          w-full
                          max-w-115
                          rounded-[22px]
                          bg-[#141a32]
                          px-8
                          py-8
                          shadow-[0_20px_50px_rgba(15,23,42,0.25)]
                          transition-transform
                          duration-500
                          ease-out
                          sm:px-9
                          sm:py-10
                          group-hover:scale-[1.03]
                        "
                      >
                        {/* Gold accent */}

                        <span className="absolute bottom-7 left-0 top-7 w-1 bg-[#e9c176]" />

                        {/* Quote mark */}

                        <div className="font-serif text-7xl leading-none text-[#e9c176]">
                          “
                        </div>

                        {/* Quote */}

                        <blockquote className="mt-5 font-serif text-[28px] italic leading-9.5 text-white sm:text-3xl">
                          {customer.quote}
                        </blockquote>

                        {/* Footer */}

                        <div className="mt-9 flex items-end justify-between gap-5">
                          <div>
                            <div className="mb-2 h-px w-8 bg-[#e9c176]" />


                          </div>


                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}

                  <div className="h-0.5 w-full bg-navy/[0.04]">
                    <div className="h-full w-16 bg-gold" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            SLIDER CONTROLS
        ============================================================ */}

        <div className="mt-8 flex items-center justify-between">
          {/* Left */}

          <span className="hidden text-[9px] font-bold uppercase tracking-[0.2em] text-navy/30 sm:block">
            Explore customer stories
          </span>

          {/* Controls */}

          <div className="flex items-center gap-3">
            {/* Progress */}

            <div className="flex items-center gap-2">
              {customers.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => moveToSlide(index)}
                  aria-label={`Go to customer ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500
                    ${currentSlide === index
                      ? "w-10 bg-gold"
                      : "w-2 bg-navy/15 hover:bg-navy/30"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}