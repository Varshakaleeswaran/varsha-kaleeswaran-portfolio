import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/caseStudies';
import { cn } from '@/lib/cn';
import type { IconName } from '@/data/types';

const sectionIcon: Record<string, IconName> = {
  'STAR — Situation': 'Target',
  'STAR — Task': 'Briefcase',
  'STAR — Action': 'Workflow',
  'STAR — Result': 'CheckCircle2',
  'Problem Statement': 'AlertTriangle',
  'Objective': 'Target',
  'My Role': 'Briefcase',
  'Technologies Used': 'Cpu',
  'System Architecture': 'Workflow',
  'Technical Workflow': 'Workflow',
  'Implementation': 'Code',
  'AI / ML Approach': 'Brain',
  'Prompt Engineering Approach': 'MessageSquare',
  'Input → Processing → Output': 'ArrowRight',
  'Challenges': 'AlertTriangle',
  'Solutions': 'Lightbulb',
  'Result / Current Status': 'CheckCircle2',
  'Limitations': 'AlertTriangle',
  'Future Improvements': 'Rocket',
};

export function Projects({
  activeProjectId,
  onOpenProject,
  onCloseProject,
}: {
  activeProjectId: string | null;
  onOpenProject: (id: string) => void;
  onCloseProject: () => void;
}) {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Featured AI/ML & Generative AI projects."
      description="Each project includes a STAR explanation and full technical details — click 'View Technical Details' for the complete technical story, including architecture, workflow, AI/ML approach, prompt engineering where applicable, and limitations."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onViewDetails={onOpenProject} />
        ))}
      </div>

      <TechnicalDetailsModal projectId={activeProjectId} onClose={onCloseProject} />
    </Section>
  );
}

function TechnicalDetailsModal({
  projectId,
  onClose,
}: {
  projectId: string | null;
  onClose: () => void;
}) {
  const cs = caseStudies.find((c) => c.projectId === projectId);
  const project = projects.find((p) => p.id === projectId);
  if (!cs || !project) return null;

  const sections: { heading: string; body: React.ReactNode }[] = [
    { heading: 'Problem Statement', body: cs.problem },
    { heading: 'Objective', body: cs.objective },
    { heading: 'My Role', body: cs.role },
    { heading: 'STAR — Situation', body: cs.star.situation },
    { heading: 'STAR — Task', body: cs.star.task },
    { heading: 'STAR — Action', body: cs.star.action },
    { heading: 'STAR — Result', body: cs.star.result },
    {
      heading: 'Technologies Used',
      body: (
        <div className="flex flex-wrap gap-1.5">
          {cs.technologies.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      ),
    },
    {
      heading: 'System Architecture',
      body: (
        <div className="flex flex-col gap-1">
          {cs.architecture.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent-blue/70">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm text-slate-400">{step}</span>
              {i < cs.architecture.length - 1 && (
                <Icon name="ArrowRight" className="h-3 w-3 text-slate-600" />
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      heading: 'Technical Workflow',
      body: (
        <ol className="space-y-1.5">
          {cs.workflow.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="font-mono text-xs text-accent-blue/70 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ),
    },
    { heading: 'Implementation', body: cs.implementation },
    { heading: 'AI / ML Approach', body: cs.aiApproach },
    { heading: 'Prompt Engineering Approach', body: cs.promptEngineering },
    {
      heading: 'Input → Processing → Output',
      body: (
        <div className="space-y-2">
          <div>
            <span className="font-mono text-xs text-accent-cyan/80">INPUT</span>
            <p className="mt-0.5 text-sm text-slate-400">{cs.inputProcessingOutput.input}</p>
          </div>
          <div>
            <span className="font-mono text-xs text-accent-blue/80">PROCESSING</span>
            <p className="mt-0.5 text-sm text-slate-400">{cs.inputProcessingOutput.processing}</p>
          </div>
          <div>
            <span className="font-mono text-xs text-accent-violet/80">OUTPUT</span>
            <p className="mt-0.5 text-sm text-slate-400">{cs.inputProcessingOutput.output}</p>
          </div>
        </div>
      ),
    },
    {
      heading: 'Challenges',
      body: (
        <ul className="space-y-1.5">
          {cs.challenges.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="AlertTriangle" className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/60" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      heading: 'Solutions',
      body: (
        <ul className="space-y-1.5">
          {cs.solutions.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="Lightbulb" className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue/60" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      ),
    },
    { heading: 'Result / Current Status', body: cs.resultsOrStatus },
    {
      heading: 'Limitations',
      body: (
        <ul className="space-y-1.5">
          {cs.limitations.map((l, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="AlertTriangle" className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      heading: 'Future Improvements',
      body: (
        <ul className="space-y-1.5">
          {cs.futureImprovements.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="Rocket" className="mt-0.5 h-4 w-4 shrink-0 text-accent-violet/60" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="technical-details-title"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.07] bg-ink-900/90 px-6 py-5 backdrop-blur-xl sm:px-8">
          <div>
            <p className="section-label">
              <span className="h-px w-6 bg-accent-blue/60" />
              Technical Details
            </p>
            <h2 id="technical-details-title" className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
              {project.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium',
                  project.status === 'Ongoing'
                    ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
                    : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                )}
              >
                {project.status === 'Ongoing' && (
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
                )}
                {project.status}
              </span>
              <span className="text-xs text-slate-400">
                <span className="text-slate-600">My Role · </span>
                {project.role}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-white/[0.06] hover:text-white focus-ring"
            aria-label="Close technical details"
          >
            <Icon name="X" className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-6 space-y-5">
            {sections.map((section) => (
              <div key={section.heading} className="border-l border-white/[0.07] pl-4 sm:pl-5">
                <dt className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Icon
                    name={sectionIcon[section.heading] ?? 'ArrowRight'}
                    className="h-4 w-4 text-accent-blue"
                  />
                  {section.heading}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-400">{section.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex justify-end">
            <Button size="sm" variant="secondary" onClick={onClose}>
              <Icon name="X" className="h-4 w-4" />
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
