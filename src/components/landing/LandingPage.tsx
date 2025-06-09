import { HeroSection } from './sections/Hero';
import { FeaturesSection } from './sections/Features';
import { HowItWorksSection } from './sections/HowItWorks';
import { TestimonialsSection } from './sections/Testimonials';
import { CTASection } from './sections/CTA';
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
