import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { FinancialCalculators } from "@/components/FinancialCalculators";
import { TopFunds } from "@/components/TopFunds";
import { ServicePartners } from "@/components/ServicePartners";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <Stats />
        <HowItWorks />
        <FinancialCalculators />
        <TopFunds />
        <ServicePartners />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
