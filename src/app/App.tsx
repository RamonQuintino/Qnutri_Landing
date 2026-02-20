import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { PartnersSection } from "./components/partners-section";
import { ServicesSection } from "./components/services-section";
import { DifferentialsSection } from "./components/differentials-section";
import { ProcessSection } from "./components/process-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <div id="servicos">
          <ServicesSection />
        </div>
        <DifferentialsSection />
        <div id="processo">
          <ProcessSection />
        </div>
        <div id="depoimentos">
          <TestimonialsSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}