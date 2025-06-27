import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, UserPlus, Lock } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <Card className="glowing-panel bg-card/50 backdrop-blur-sm border border-primary/20">
            <CardHeader className="text-center p-6 sm:p-8">
              <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Shape the AGI Narrative
              </CardTitle>
              <CardDescription className="mx-auto max-w-2xl text-lg text-foreground/80 md:text-xl mt-4">
                  If you're building toward AGI, researching cognitive architectures, or know someone who is, we want to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center p-6 sm:p-8 pt-0">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="mailto:contact@agirealitycheck.com">
                  <Mail className="mr-2 h-5 w-5" />
                  I Have Expertise to Share
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="https://typeform.com" target="_blank" rel="noopener noreferrer">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Nominate an Expert
                </Link>
              </Button>
            </CardContent>
            <div className="p-6 pt-0 flex items-center justify-center text-sm text-foreground/60">
              <Lock className="mr-2 h-4 w-4 animate-pulse text-accent" />
              <span>All conversations are strictly confidential.</span>
            </div>
        </Card>
      </div>
    </section>
  );
}
