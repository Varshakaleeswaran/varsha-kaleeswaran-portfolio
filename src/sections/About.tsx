import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';
import type { IconName } from '@/data/types';

const pillars = [
  {
    icon: 'Target' as IconName,
    title: 'Practical AI Systems',
    body: 'Building intelligent applications across Generative AI, RAG, Prompt Engineering, NLP, and Computer Vision — focused on real-world usefulness.',
  },
  {
    icon: 'Workflow' as IconName,
    title: 'Practical System Integration',
    body: 'From prompt design and RAG pipelines to FastAPI backends, Streamlit interfaces, and embedded hardware integration.',
  },
  {
    icon: 'Users' as IconName,
    title: 'Team Leadership',
    body: 'Leading final-year and hackathon projects — coordinating teams, distributing tasks, driving technical direction, and managing delivery.',
  },
];

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Final-year B.Tech AI & Data Science student building practical AI applications."
      description="I'm Varsha Kaleeswaran, a final-year B.Tech Artificial Intelligence & Data Science student at P.A. College of Engineering and Technology (Anna University). I work across Generative AI, Prompt Engineering, LLM applications, RAG, NLP, Computer Vision, and real-time AI. My projects span AI-powered career intelligence, document-based question answering, AI memory systems, legal document assistance, civic-tech platforms, retail intelligence, accident detection, and computer-vision robotics."
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
