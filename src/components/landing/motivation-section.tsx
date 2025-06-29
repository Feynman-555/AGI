import Image from 'next/image';
import { Check } from 'lucide-react';

export function MotivationSection() {
    const points = [
        "Industry leaders contradict each other",
        "AGI definitions change with the wind",
        "PR statements ≠ technical reality"
    ];

    return (
        <section id="motivation" className="w-full py-16">
            <div className="container grid items-start gap-16 px-4 md:grid-cols-2 md:px-6 lg:gap-24">
                <div className="relative flex justify-center items-center h-full">
                    <div className="polaroid w-[300px] md:w-[350px] transition-transform duration-300 hover:rotate-3 hover:scale-105" style={{ transform: 'rotate(-4deg)'}}>
                        <Image
                            src="https://placehold.co/800x1000.png"
                            alt="Thinker at a whiteboard covered in complex equations"
                            width={800}
                            height={1000}
                            className="object-cover"
                            data-ai-hint="thinker whiteboard equations"
                        />
                        <p className="font-handwritten text-center mt-2 text-lg text-black/70">The state of the art.</p>
                    </div>
                </div>
                <div className="space-y-8 pt-8">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        Why Hand-Wavy Timelines Fail Us
                    </h2>
                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="mt-1 h-6 w-6 flex-shrink-0 text-green-700" />
                                <span className="text-lg text-foreground/80 font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="relative">
                        <p className="post-it relative transition-transform duration-300 hover:rotate-0" style={{ transform: 'rotate(2.5deg)'}}>
                            "I'm auditing claims with first-principles thinking"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
