import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';

const pillars = [
  {
    icon: 'Target' as const,
    title: 'Practical AI Systems',
    body: 'Focused on building intelligent applications that solve real problems — not demos.',
  },
  {
    icon: 'Workflow' as const,
    title: 'End-to-End Ownership',
    body: 'From prompt design and RAG pipelines to FastAPI backends and deployment-ready code.',
  },
  {
    icon: 'Lightbulb' as const,
    title: 'Prompt Engineering',
    body: 'Special interest in instruction design, context engineering, and hallucination reduction.',
  },
];

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Final-year B.Tech student building practical AI systems."
      description="I'm Varsha Kaleeswaran, a final-year B.Tech Artificial Intelligence and Data Science student and an aspiring AI/ML Developer. I'm interested in building practical AI systems and intelligent applications — with a focus on Generative AI, LLM applications, prompt engineering, RAG, NLP, and Computer Vision."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {pillars.map((p) => (
          <GlassCard key={p.title} accent="blue" className="h-full">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent-blue/20 bg-accent-blue/10 text-accent-blue">
              <Icon name={p.icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-50">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
