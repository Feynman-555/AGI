import { HeroSection } from '@/components/landing/hero-section';
import { MotivationSection } from '@/components/landing/motivation-section';
import { MethodologySection } from '@/components/landing/methodology-section';
import { ExpertShowcase } from '@/components/landing/expert-showcase';
import { CtaSection } from '@/components/landing/cta-section';
import { Footer } from '@/components/landing/footer';
import { GlowingDivider } from '@/components/landing/glowing-divider';
import { BackgroundDecor } from '@/components/landing/background-decor';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <BackgroundDecor />
      <main className="relative z-10 flex flex-col items-center">
        <HeroSection />
        <GlowingDivider />
        <MotivationSection />
        <GlowingDivider />
        <MethodologySection />
        <GlowingDivider />
        <ExpertShowcase />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
