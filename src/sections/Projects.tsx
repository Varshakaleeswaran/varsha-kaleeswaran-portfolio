import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { projects, internshipProjects } from '@/data/projects';
import { caseStudies } from '@/data/caseStudies';
import type { IconName } from '@/data/types';

const sectionIcon: Record<string, IconName> = {
  'Problem Statement': 'AlertTriangle',
  Objective: 'Target',
  'My Role': 'Briefcase',
  'My Role / Contribution': 'Briefcase',
  'Technologies Used': 'Cpu',
  'System Architecture': 'Workflow',
  'Technical Workflow': 'Workflow',
  Implementation: 'Code',
  'AI/ML Approach': 'Brain',
  'Prompt Engineering Approach': 'MessageSquare',
  'Input → Processing → Output': 'ArrowRight',
  Challenges: 'AlertTriangle',
  Solutions: 'Lightbulb',
  Results: 'CheckCircle2',
  Limitations: 'AlertTriangle',
  'Future Improvements': 'Rocket',
};

export function Projects({
  activeCaseStudy,
  onOpenCaseStudy,
  onCloseCaseStudy,
}: {
  activeCaseStudy: string | null;
  onOpenCaseStudy: (id: string) => void;
  onCloseCaseStudy: () => void;
}) {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Featured AI/ML & Generative AI projects."
      description="A selection of projects across Generative AI, LLM applications, RAG, NLP, computer vision, and embedded AI — each grounded in practical implementation. Click 'View Technical Details' on any project for the full technical story."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onCaseStudy={onOpenCaseStudy} />
        ))}
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <span className="section-label">
            <span className="h-px w-8 bg-accent-violet/60" />
            Internship Projects — CodeAlpha
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-slate-50 sm:text-2xl">
          Internship Projects — CodeAlpha
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {internshipProjects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </div>

      <CaseStudyModal caseStudyId={activeCaseStudy} onClose={onCloseCaseStudy} />
    </Section>
  );
}

function CaseStudyModal({
  caseStudyId,
  onClose,
}: {
  caseStudyId: string | null;
  onClose: () => void;
}) {
  const cs = caseStudies.find((c) => c.id === caseStudyId);
  if (!cs) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
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
            <h2 id="case-study-title" className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
              {cs.title}
            </h2>
            <p className="mt-1 text-xs text-slate-400">{cs.focus}</p>
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
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-6 space-y-5">
            {cs.sections.map((section) => (
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
