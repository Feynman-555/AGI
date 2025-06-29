import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="paper max-w-4xl mx-auto p-8 md:p-12 text-center transition-transform duration-300 hover:rotate-0" style={{ transform: 'rotate(-1.5deg)' }}>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AGI Timelines Are <span className="relative inline-block"><span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-300 opacity-80 -z-10"></span>Broken</span>. Let's Fix Them.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/90 font-medium">
            A first-principles investigation into what AGI <strong className="font-bold text-foreground">actually</strong> requires – and when it's truly possible.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="#cta" className="font-headline text-lg text-primary hover:text-primary/80 transition-all group">
              Join the Investigation
              <span className="block h-0.5 max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary mt-1 mx-auto"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
