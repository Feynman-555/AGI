import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Search, Zap } from 'lucide-react';

const methodologies = [
    {
        icon: BrainCircuit,
        title: "Define",
        description: "Establishing testable AGI criteria"
    },
    {
        icon: Search,
        title: "Audit",
        description: "Mapping SOTA systems to AGI requirements"
    },
    {
        icon: Zap,
        title: "Bridge",
        description: "Identifying technical gaps & unknowns"
    }
];

export function MethodologySection() {
    return (
        <section id="methodology" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {methodologies.map((item, index) => (
                        <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                            <CardHeader className="flex flex-col items-center text-center">
                                <div className="mb-4 rounded-full bg-primary/10 p-4 border border-primary/20">
                                    <item.icon className="h-10 w-10 text-primary" style={{filter: `drop-shadow(0 0 8px hsl(var(--primary)))`}} />
                                </div>
                                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-foreground/80">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <p className="mt-12 text-center text-lg text-foreground/70 font-medium">
                    Rigorous interviews + technical triangulation
                </p>
            </div>
        </section>
    );
}
