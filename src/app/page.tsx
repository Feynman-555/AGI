import { HeroSection } from '@/components/landing/hero-section';
import { MotivationSection } from '@/components/landing/motivation-section';
import { MethodologySection } from '@/components/landing/methodology-section';
import { ExpertShowcase } from '@/components/landing/expert-showcase';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <main className="relative z-10 flex flex-col items-center space-y-24 md:space-y-32">
        <HeroSection />
        <MotivationSection />
        <MethodologySection />
        <ExpertShowcase />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
