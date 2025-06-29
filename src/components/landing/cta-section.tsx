import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, UserPlus, Lock } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-16">
      <div className="container px-4 md:px-6">
        <div className="paper max-w-4xl mx-auto p-8 md:p-12 transition-transform duration-300 hover:rotate-0" style={{ transform: 'rotate(1deg)' }}>
            <div className="text-center">
                <div className="flex justify-center mb-8">
                    <div className="confidential-stamp">
                        Confidential
                    </div>
                </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Shape the AGI Narrative
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-foreground/80 md:text-xl mt-4 font-body">
                  If you're building toward AGI, researching cognitive architectures, or know someone who is, we want to hear from you.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center p-6 sm:p-8 pt-8">
              <Button asChild size="lg" className="w-full sm:w-auto font-body">
                <Link href="mailto:contact@agirealitycheck.com">
                  <Mail className="mr-2 h-5 w-5" />
                  I Have Expertise to Share
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto font-body">
                <Link href="https://typeform.com" target="_blank" rel="noopener noreferrer">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Nominate an Expert
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
