import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/data/types';

const pillars = [
  {
    icon: 'Target' as IconName,
    title: 'Practical AI Systems',
    body: 'Focused on building intelligent applications that solve real problems across Generative AI, RAG, NLP, and Computer Vision.',
  },
  {
    icon: 'Workflow' as IconName,
    title: 'End-to-End Ownership',
    body: 'From prompt design and RAG pipelines to FastAPI backends, Streamlit interfaces, and embedded integration.',
  },
  {
    icon: 'Lightbulb' as IconName,
    title: 'Prompt Engineering',
    body: 'Special interest in instruction design, structured outputs, context engineering, and hallucination reduction.',
  },
];

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="B.Tech AI &amp; Data Science student building practical AI applications."
      description="I'm Varsha Kaleeswaran, a B.Tech Artificial Intelligence & Data Science student focused on building practical AI applications across Generative AI, Prompt Engineering, LLM applications, RAG, NLP, and Computer Vision. My projects include AI-powered career intelligence, document-based question answering, AI memory systems, legal document assistance, civic-tech applications, retail intelligence, accident detection, and computer-vision robotics."
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
