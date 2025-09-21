import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}