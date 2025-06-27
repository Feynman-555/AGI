import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export function MotivationSection() {
    const points = [
        "Industry leaders contradict each other",
        "AGI definitions change with the wind",
        "PR statements ≠ technical reality"
    ];

    return (
        <section id="motivation" className="w-full py-20 md:py-32">
            <div className="container grid items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-20">
                <div className="relative h-[500px] w-full md:h-[600px] rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
                    <Image
                        src="https://placehold.co/800x1000.png"
                        alt="Thinker at a whiteboard covered in complex equations"
                        fill
                        className="object-cover opacity-70"
                        data-ai-hint="thinker whiteboard equations"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                </div>
                <div className="space-y-8">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Why Hand-Wavy Timelines Fail Us
                    </h2>
                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                                <span className="text-lg text-foreground/80">{point}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-lg text-foreground/80 italic border-l-4 border-accent pl-4 py-2 bg-accent/10 rounded-r-md">
                        "I'm auditing claims with first-principles thinking"
                    </p>
                </div>
            </div>
        </section>
    );
}
