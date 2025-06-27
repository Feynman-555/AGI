import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center text-center">
      <div className="container z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          AGI Timelines Are <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Broken</span>. Let's Fix Them.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl text-balance">
          A first-principles investigation into what AGI <strong className="font-semibold text-foreground">actually</strong> requires – and when it's truly possible.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-8 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-primary/50">
            <Link href="#cta">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-[#0077b6] transition-all duration-500 ease-in-out group-hover:bg-right" style={{backgroundSize: '200% auto'}}></div>
              <span className="relative flex items-center">
                Join the Investigation
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
