// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import AnchorCustomers from "@/components/AnchorCustomers";
import DiagnosticCTA from "@/components/DiagnosticCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StatsSection from "@/components/StatsStatics";

export default function Home() {
  return (
    <ScrollReveal>
      <Header />
      <main>
        <Hero />
        <StatsSection/>
        <Philosophy />
        <AnchorCustomers />
        <DiagnosticCTA />
      </main>
      <Footer />
    </ScrollReveal>
  );
}