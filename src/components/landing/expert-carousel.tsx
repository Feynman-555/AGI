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
      <CarouselContent className="-ml-8">
        {experts.map((expert, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-8">
            <div className="p-1 h-full">
              <div className="paper flex flex-col h-full overflow-hidden p-6 text-center items-center">
                <div className="polaroid w-[150px] mb-6 transition-transform duration-300 group-hover:rotate-3" style={{ transform: `rotate(${(index % 2 - 0.5) * 4}deg)`}}>
                    <Image
                        src={expert.image}
                        alt={`Headshot of ${expert.name}`}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                        data-ai-hint="professional headshot"
                    />
                </div>
                
                <blockquote className="mt-4 flex-grow min-h-[100px]">
                  <p className="text-lg font-medium text-foreground text-balance">"{expert.quote}"</p>
                </blockquote>

                <footer className="mt-6">
                  <div className="font-headline text-xl text-foreground/90">{expert.name}</div>
                  <div className="font-body text-sm mt-1 text-foreground/70">{expert.affiliation}</div>
                </footer>

              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex -left-16" />
      <CarouselNext className="hidden sm:flex -right-16" />
    </Carousel>
  );
}
