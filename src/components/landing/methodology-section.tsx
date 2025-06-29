import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Search, Zap } from 'lucide-react';

const methodologies = [
    {
        icon: BrainCircuit,
        title: "Define",
        description: "Establishing testable AGI criteria",
        rotation: -2
    },
    {
        icon: Search,
        title: "Audit",
        description: "Mapping SOTA systems to AGI requirements",
        rotation: 1
    },
    {
        icon: Zap,
        title: "Bridge",
        description: "Identifying technical gaps & unknowns",
        rotation: -1
    }
];

export function MethodologySection() {
    return (
        <section id="methodology" className="w-full py-16">
            <div className="container px-4 md:px-6">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Our Approach
                    </h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {methodologies.map((item, index) => (
                        <div key={index} className="paper p-1 transition-transform duration-300 hover:!rotate-0 hover:scale-105" style={{'--tw-rotate': `${item.rotation}deg`} as React.CSSProperties}>
                            <div className="text-center p-6 flex flex-col items-center h-full">
                                <div className="mb-4 rounded-full bg-primary/10 p-4 border border-primary/20">
                                    <item.icon className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="font-headline text-2xl">{item.title}</h3>
                                <p className="text-foreground/80 mt-2 flex-grow">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-12 text-center text-lg text-foreground/70 font-medium font-body">
                    Rigorous interviews + technical triangulation
                </p>
            </div>
        </section>
    );
}
