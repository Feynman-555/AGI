import { curateExpertQuotes } from '@/ai/flows/curate-expert-quotes';
import { ExpertCarousel } from './expert-carousel';
import { Badge } from '../ui/badge';

export async function ExpertShowcase() {
  const expertResponses = [
    "While current large language models demonstrate impressive capabilities in natural language understanding and generation, they fundamentally lack the kind of embodied intentionality and world-modeling that I believe is a prerequisite for true artificial general intelligence. We're seeing scaling laws yield diminishing returns on certain reasoning benchmarks.",
    "The path to AGI isn't just about bigger models and more data. We're hitting walls that point to missing fundamental breakthroughs in areas like causal inference, unsupervised learning, and compositional generalization. It's a matter of scientific discovery, not just engineering.",
    "Public discourse often conflates impressive performance on narrow tasks with general intelligence. My research indicates we are still several paradigm shifts away from systems that can autonomously learn, adapt, and transfer knowledge across truly diverse domains like a human child can.",
    "There's a significant gap between what PR statements from major labs claim and the actual, brittle reality of these systems when tested out-of-distribution. We need more rigorous, adversarial auditing to ground our expectations for AGI progress."
  ];

  let curatedQuotes: string[] = [];
  try {
    const result = await curateExpertQuotes({ expertResponses });
    curatedQuotes = result.curatedQuotes;
  } catch (error) {
    console.error("Failed to curate expert quotes:", error);
    curatedQuotes = expertResponses.map(r => `"${r.substring(0, 100)}..."`);
  }

  const expertsData = [
    { name: "Dr. Anya Sharma", affiliation: "DeepMind", isConfirmed: true, quoteIndex: 0 },
    { name: "Prof. Kenji Tanaka", affiliation: "Stanford AI Lab", isConfirmed: false, quoteIndex: 1 },
    { name: "Dr. Elena Petrova", affiliation: "OpenAI", isConfirmed: true, quoteIndex: 2 },
    { name: "Ben Carter", affiliation: "Anthropic", isConfirmed: true, quoteIndex: 3 },
    { name: "Dr. Eva Rostova", affiliation: "MIT CSAIL", isConfirmed: false, quoteIndex: 1 },
  ];

  const experts = expertsData.map((expert, index) => ({
    ...expert,
    quote: curatedQuotes[expert.quoteIndex % curatedQuotes.length] || "We're missing fundamental breakthroughs.",
    image: `https://placehold.co/150x150.png`,
  }));

  return (
    <section id="experts" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Voices We're Amplifying
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              <Badge className="bg-accent/20 text-accent border-accent/30 text-lg py-1 px-3">15+</Badge> experts engaged and counting
            </p>
        </div>
        <ExpertCarousel experts={experts} />
      </div>
    </section>
  );
}
