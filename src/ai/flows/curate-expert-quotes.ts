'use server';
/**
 * @fileOverview An AI tool that curates expert quotes for the landing page.
 *
 * - curateExpertQuotes - A function that handles the quote curation process.
 * - CurateExpertQuotesInput - The input type for the curateExpertQuotes function.
 * - CurateExpertQuotesOutput - The return type for the curateExpertQuotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurateExpertQuotesInputSchema = z.object({
  expertResponses: z
    .array(z.string())
    .describe('An array of expert responses to be curated.'),
});
export type CurateExpertQuotesInput = z.infer<typeof CurateExpertQuotesInputSchema>;

const CurateExpertQuotesOutputSchema = z.object({
  curatedQuotes: z
    .array(z.string())
    .describe('An array of curated quotes suitable for display.'),
});
export type CurateExpertQuotesOutput = z.infer<typeof CurateExpertQuotesOutputSchema>;

export async function curateExpertQuotes(input: CurateExpertQuotesInput): Promise<CurateExpertQuotesOutput> {
  return curateExpertQuotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'curateExpertQuotesPrompt',
  input: {schema: CurateExpertQuotesInputSchema},
  output: {schema: CurateExpertQuotesOutputSchema},
  prompt: `You are an expert curator of quotes. You will be provided with an array of expert responses. Your task is to select the most impactful and concise quotes that represent key insights and varied perspectives. Maintain quote fidelity while emphasizing key insights. Return an array of the curated quotes.

Expert Responses:
{{#each expertResponses}}
- {{{this}}}
{{/each}}`,
});

const curateExpertQuotesFlow = ai.defineFlow(
  {
    name: 'curateExpertQuotesFlow',
    inputSchema: CurateExpertQuotesInputSchema,
    outputSchema: CurateExpertQuotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
