"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Expert = {
  name: string;
  affiliation: string;
  isConfirmed: boolean;
  quote: string;
  image: string;
};

export function ExpertCarousel({ experts }: { experts: Expert[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent>
        {experts.map((expert, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden group">
                {expert.isConfirmed && (
                  <div className="absolute top-0 right-0 z-10 overflow-hidden w-28 h-28">
                    <div className="w-40 h-8 bg-accent flex items-center justify-center absolute top-6 -right-10 transform rotate-45">
                      <span className="font-bold text-xs text-accent-foreground tracking-wider">CONFIRMED</span>
                    </div>
                  </div>
                )}
                <CardContent className="flex flex-col items-center justify-start p-6 text-center flex-grow pt-10">
                  <div className="relative mb-4">
                     <div className="w-32 h-32 rounded-full overflow-hidden holographic-border">
                        <Image
                            src={expert.image}
                            alt={`Headshot of ${expert.name}`}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full"
                            data-ai-hint="professional headshot"
                        />
                     </div>
                  </div>
                  <blockquote className="mt-4 flex-grow min-h-[100px]">
                    <p className="text-lg font-medium text-foreground text-balance">"{expert.quote}"</p>
                  </blockquote>
                  <footer className="mt-4">
                    <div className="font-headline text-xl text-foreground/90">{expert.name}</div>
                    <Badge variant="secondary" className="mt-2">{expert.affiliation}</Badge>
                  </footer>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex -left-12" />
      <CarouselNext className="hidden sm:flex -right-12" />
    </Carousel>
  );
}
