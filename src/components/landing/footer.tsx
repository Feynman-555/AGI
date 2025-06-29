
export function Footer() {
    return (
        <footer className="w-full border-t border-black/10 py-8 mt-16">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
                <p className="text-sm text-foreground/60 font-body">
                    © {new Date().getFullYear()} AGI Reality Check.
                </p>
                <div className="flex items-center gap-4 text-sm text-foreground/60 font-body">
                    <p>Backed by Independent Research</p>
                    <p>•</p>
                    <p>Supported by Firebase Studio</p>
                </div>
            </div>
        </footer>
    );
}
