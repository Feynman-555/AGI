import { Badge } from '@/components/ui/badge';

export function Footer() {
    return (
        <footer className="w-full border-t border-border/20 py-8 mt-16">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
                <p className="text-sm text-foreground/60">
                    © {new Date().getFullYear()} AGI Reality Check. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Badge variant="secondary">Backed by Independent Research</Badge>
                    <p className="text-sm text-foreground/60">Supported by Firebase Studio</p>
                </div>
            </div>
        </footer>
    );
}
