// components/GoogleReview.tsx
"use client";

import { Star } from "lucide-react";

import { useAnchorCustomers } from "@/src/hooks";

interface ReviewItem {
  id: string;
  name: string;
  review: string;
  rating: number;
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.66-.22-2.45H12v4.63h6.47c-.28 1.5-1.13 2.78-2.4 3.63v3.02h3.89c2.28-2.1 3.56-5.2 3.56-8.83z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.89-3.02c-1.08.72-2.46 1.15-4.06 1.15-3.12 0-5.77-2.11-6.72-4.94H1.27v3.11C3.25 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.29c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.6H1.27A11.98 11.98 0 000 12c0 1.93.46 3.76 1.27 5.4l4.01-3.11z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.6l4.01 3.11C6.23 6.88 8.88 4.77 12 4.77z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article
      className="
        mr-5
        w-[300px]
        shrink-0
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.04]
        px-6
        py-7
        transition-colors
        duration-300
        hover:bg-white/[0.06]
        sm:w-[340px]
        md:w-[360px]
      "
    >
      {/* QUOTE MARK */}
      <div className="font-serif text-3xl font-bold leading-none text-[#93a2d6]">
        &rdquo;
      </div>

      {/* REVIEW TEXT */}
      <p className="mt-4 text-[15px] leading-7 text-white/80">
        {review.review}
      </p>

      {/* FOOTER */}
      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[15px] font-bold text-white">{review.name}</p>
        </div>

        <div className="flex items-center gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={12} className="fill-[#e9c176] text-[#e9c176]" />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function GoogleReview() {
  const { customers } = useAnchorCustomers();

  const reviews: ReviewItem[] = customers
    .filter((customer) => Boolean(customer.quote))
    .map((customer, index) => ({
      id: `${customer.company || "customer"}-${index}`,
      name: customer.founder,
      review: customer.quote,
      rating: 5,
    }));

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#141a32] py-16 md:py-20">
      {/* HEADER */}
      <div className="mx-auto w-full max-w-3xl px-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <GoogleLogo />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#93a2d6] sm:text-xs">
            Google Reviews
          </span>
        </div>

        <h2
          className="mt-4 text-3xl leading-tight text-white sm:text-4xl md:text-[2.75rem]"
          style={{ fontFamily: "Bodoni Moda, serif" }}
        >
          Trusted by businesses like yours.
        </h2>

        <div className="mt-4 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-[#e9c176] text-[#e9c176]" />
          ))}
          <span className="ml-2 text-sm text-white/60">
            Rated by our clients
          </span>
        </div>
      </div>

      {/* MARQUEE */}
      <div
        className="group relative mt-12 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="animate-marquee-slow group-hover:[animation-play-state:paused] flex w-max items-stretch">
          {/* Track 1 */}
          <div className="flex shrink-0 items-stretch" aria-hidden={false}>
            {reviews.map((review) => (
              <ReviewCard key={`track-1-${review.id}`} review={review} />
            ))}
          </div>

          {/* Track 2 (exact duplicate for seamless continuous loop) */}
          <div className="flex shrink-0 items-stretch" aria-hidden="true">
            {reviews.map((review) => (
              <ReviewCard key={`track-2-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}