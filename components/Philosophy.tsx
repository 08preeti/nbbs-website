// // components/Philosophy.tsx
// const principles = [
//   {
//     id:0,
//     title: "Transparency",
//     description:
//       "Diagnosis precedes prescription. We map the entire operational ecosystem before introducing new variables.",
//     delayClass: "",
//   },
//   {
//     id:1,
//     title: "Pragmatism",
//     description:
//       "We ship what works, not what wins design awards",
//     delayClass: "delay-100",
//   },
//   {
//     id:2,
//     title: "Real Results",
//     description:
//       "Every product has a metric attached. We track it with you",
//     delayClass: "",
//   },
//   {
//     id:3,
//     title: "Founder Mindset",
//     description:
//       "We think like owners because we are owners.",
//     delayClass: "delay-100",
//   },
// ];

// export default function Philosophy() {
//   return (
//     <section className="bg-primary text-surface py-24 md:py-32 my-unit-xl">
//       <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
//           <div>
            
//             <h2 className="font-display text-display text-secondary">
//               Our Philosophy
//             </h2>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
//           {principles.map((p) => (
//             <div key={p.id}
//               className={`border-t border-secondary/30 pt-8 reveal ${p.delayClass}`}
//             >

//               <h3 className="font-headline-md text-headline-md text-surface mb-4">
//                 {p.title}
//               </h3>
//               <p className="font-body-md text-surface-variant opacity-80">
//                 {p.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







// components/Philosophy.tsx
const principles = [
  {
    id:0,
    title: "Transparency",
    description:
      "Diagnosis precedes prescription. We map the entire operational ecosystem before introducing new variables.",
    delayClass: "",
  },
  {
    id:1,
    title: "Pragmatism",
    description:
      "We ship what works, not what wins design awards",
    delayClass: "delay-100",
  },
  {
    id:2,
    title: "Real Results",
    description:
      "Every product has a metric attached. We track it with you",
    delayClass: "",
  },
  {
    id:3,
    title: "Founder Mindset",
    description:
      "We think like owners because we are owners.",
    delayClass: "delay-100",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-primary text-surface py-16 md:py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 reveal">
          <div>
            
            <h2 className="font-display text-display text-secondary">
              Our Philosophy
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {principles.map((p) => (
            <div key={p.id}
              className={`border-t border-secondary/30 pt-8 reveal ${p.delayClass}`}
            >

              <h3 className="font-headline-md text-headline-md text-surface mb-4">
                {p.title}
              </h3>
              <p className="font-body-md text-surface-variant opacity-80">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}