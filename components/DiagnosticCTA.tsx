// // components/DiagnosticCTA.tsx
// import Link from "next/link";

// export default function DiagnosticCTA() {
//   return (
//     <section className="bg-paper text-primary mt-unit-xl pb-16 md:pb-24">
//       <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20 text-center reveal bg-primary rounded-2xl">
//         <h2 className="font-display text-display text-surface max-w-4xl mx-auto mb-8">
//             Want to result like these?
//         </h2>
//         <p className="text-2xl font-display font-light text-white/50">start with a free 30-minute diagnostic. We'll tell you honestly whether NBBS is the right fit for your business</p>
//         <Link
//           className="inline-flex items-center justify-center h-15 mt-4 px-8 bg-white text-2xl font-bold text-primary rounded font-button hover:bg-white transition-colors"
//           href="/contacts"
//         >
//           Book your diagnostic
//         </Link>
//       </div>
//     </section>
//   );
// }

















// components/DiagnosticCTA.tsx
import Link from "next/link";

export default function DiagnosticCTA() {
  return (
    <section className="bg-paper text-primary mt-unit-xl pb-16 md:pb-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-20 text-center reveal bg-primary rounded-2xl">
        <h2 className="font-display text-display text-surface max-w-4xl mx-auto mb-8">
            Want to result like these?
        </h2>
        <p className="text-2xl font-display font-light text-white/50">start with a free 30-minute diagnostic. We&apos;ll tell you honestly whether NBBS is the right fit for your business</p>
        <Link
          className="inline-flex items-center justify-center h-15 mt-4 px-8 bg-white text-2xl font-bold text-primary rounded font-button  transition-colors hover:bg-secondary "
          href="/#contact"
        >
          Book your diagnostic
        </Link>
      </div>
    </section>
  );
}