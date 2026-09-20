import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/cn';

const techniques = [
  {
    title: 'Instruction Design',
    body: 'Crafting clear, unambiguous instructions that constrain model behavior and produce predictable, useful outputs.',
  },
  {
    title: 'Role / Context Prompting',
    body: 'Assigning roles and rich context to steer model tone, expertise, and output format toward the task.',
  },
  {
    title: 'Few-Shot Prompting',
    body: 'Providing carefully chosen examples to anchor the model on the desired pattern and output shape.',
  },
  {
    title: 'Structured Outputs',
    body: 'Designing prompts that return structured, machine-readable formats for downstream programmatic use.',
  },
  {
    title: 'Context Engineering',
    body: 'Selecting, ordering, and budgeting the context window so the model receives the most relevant signal.',
  },
  {
    title: 'Prompt Refinement',
    body: 'Iteratively tightening prompts based on observed outputs to improve reliability and reduce drift.',
  },
  {
    title: 'Hallucination Reduction',
    body: 'Constraining responses with explicit grounding instructions, refusals, and verification cues.',
  },
  {
    title: 'RAG-Based Context Grounding',
    body: 'Pairing prompts with retrieved context so answers are anchored in source documents rather than model memory.',
  },
  {
    title: 'Evaluation & Iterative Improvement',
    body: 'Reviewing outputs against criteria, tracking failure cases, and refining prompts in a repeatable loop.',
  },
];

const accentBox: Record<string, string> = {
  cyan: 'border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan',
  blue: 'border-accent-blue/20 bg-accent-blue/10 text-accent-blue',
  violet: 'border-accent-violet/20 bg-accent-violet/10 text-accent-violet',
};

const accents: Array<'cyan' | 'blue' | 'violet'> = ['cyan', 'blue', 'violet'];

export function PromptEngineering() {
  return (
    <Section
      id="prompt-engineering"
      label="Prompt Engineering"
      title="Practical experience designing prompts that work."
      description="Prompt engineering is central to how I build LLM applications. These are the techniques I focus on in practice. I do not claim to have applied a specific technique inside a project unless that project's case study documents it."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techniques.map((t, i) => {
          const accent = accents[i % accents.length];
          return (
            <GlassCard key={t.title} accent={accent} className="h-full">
              <div
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg border',
                  accentBox[accent]
                )}
              >
                <Icon name="MessageSquare" className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-50">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.body}</p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
