// components/Hero.tsx
export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-24 md:pt-22 md:pb-32">
      <div className="max-w-4xl reveal">

        <h1 className="font-display text-display text-primary leading-tight mb-8">
                  About
        </h1>
        <p className="font-body-lg text-body-lg text-primary/50 max-w-2xl leading-relaxed">
       Built by SMB operators,for SMB operators. <br /><br />
       We've sat in your chair. We've stared at the spreadsheet at 11pm. We've fought the same commission disputs and missed the same cashflow alerts. NBBS is the company we wished existed when we were running our.
        </p>
      </div>
    </section>
  );
}