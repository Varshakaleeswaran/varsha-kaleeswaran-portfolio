import { Section } from '@/components/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { Icon } from '@/components/Icon';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/caseStudies';
import { cn } from '@/lib/cn';
import type { IconName } from '@/data/types';

const sectionIcon: Record<string, IconName> = {
  'PROJECT HEADER':               'Briefcase',
  'STATUS':                       'CheckCircle2',
  'MY ROLE':                      'Briefcase',
  'STAR EXPLANATION':             'Target',
  'TECHNOLOGIES USED':            'Cpu',
  'SYSTEM ARCHITECTURE':         'Workflow',
  'TECHNICAL WORKFLOW':           'Workflow',
  'IMPLEMENTATION':               'Code',
  'AI / ML APPROACH':             'Brain',
  'PROMPT ENGINEERING APPROACH':  'MessageSquare',
  'INPUT → PROCESSING → OUTPUT':  'ArrowRight',
  'CHALLENGES':                   'AlertTriangle',
  'SOLUTIONS':                    'Lightbulb',
  'RESULT / CURRENT STATUS':      'CheckCircle2',
  'LIMITATIONS':                  'AlertTriangle',
  'FUTURE IMPROVEMENTS':          'Rocket',
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

      {activeProjectId && (
        <TechnicalDetailsModal projectId={activeProjectId} onClose={onCloseProject} />
      )}
    </Section>
  );
}

function TechnicalDetailsModal({
  projectId,
  onClose,
}: {
  projectId: string;
  onClose: () => void;
}) {
  const cs = caseStudies.find((c) => c.projectId === projectId);
  const project = projects.find((p) => p.id === projectId);
  if (!cs || !project) return null;

  const sections: { heading: string; body: React.ReactNode }[] = [
    {
      heading: 'STAR EXPLANATION',
      body: (
        <div className="space-y-4">
          {[
            { label: 'S — Situation', text: cs.star.situation },
            { label: 'T — Task',      text: cs.star.task      },
            { label: 'A — Action',    text: cs.star.action    },
            { label: 'R — Result',    text: cs.star.result    },
          ].map(({ label, text }) => (
            <div key={label}>
              <p className="font-mono text-xs font-semibold text-accent-blue/80">{label}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      heading: 'TECHNOLOGIES USED',
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
      heading: 'SYSTEM ARCHITECTURE',
      body: (
        <div className="flex flex-wrap items-center gap-1.5">
          {cs.architecture.map((step, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
                {step}
              </span>
              {i < cs.architecture.length - 1 && (
                <Icon name="ArrowRight" className="h-3 w-3 shrink-0 text-slate-600" />
              )}
            </span>
          ))}
        </div>
      ),
    },
    {
      heading: 'TECHNICAL WORKFLOW',
      body: (
        <ol className="space-y-2">
          {cs.workflow.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
              <span className="mt-0.5 font-mono text-[11px] text-accent-blue/60">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ),
    },
    { heading: 'IMPLEMENTATION',              body: cs.implementation    },
    { heading: 'AI / ML APPROACH',            body: cs.aiApproach        },
    { heading: 'PROMPT ENGINEERING APPROACH', body: cs.promptEngineering },
    {
      heading: 'INPUT → PROCESSING → OUTPUT',
      body: (
        <div className="space-y-3">
          {[
            { label: 'INPUT',      color: 'text-accent-cyan/80',   text: cs.inputProcessingOutput.input      },
            { label: 'PROCESSING', color: 'text-accent-blue/80',   text: cs.inputProcessingOutput.processing },
            { label: 'OUTPUT',     color: 'text-accent-violet/80', text: cs.inputProcessingOutput.output     },
          ].map(({ label, color, text }) => (
            <div key={label} className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 py-3">
              <p className={`font-mono text-[10px] font-semibold uppercase tracking-widest ${color}`}>{label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      heading: 'CHALLENGES',
      body: (
        <ul className="space-y-2">
          {cs.challenges.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="AlertTriangle" className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/60" />
              {c}
            </li>
          ))}
        </ul>
      ),
    },
    {
      heading: 'SOLUTIONS',
      body: (
        <ul className="space-y-2">
          {cs.solutions.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="Lightbulb" className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue/60" />
              {s}
            </li>
          ))}
        </ul>
      ),
    },
    { heading: 'RESULT / CURRENT STATUS', body: cs.resultsOrStatus },
    {
      heading: 'LIMITATIONS',
      body: (
        <ul className="space-y-2">
          {cs.limitations.map((l, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="AlertTriangle" className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              {l}
            </li>
          ))}
        </ul>
      ),
    },
    {
      heading: 'FUTURE IMPROVEMENTS',
      body: (
        <ul className="space-y-2">
          {cs.futureImprovements.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <Icon name="Rocket" className="mt-0.5 h-4 w-4 shrink-0 text-accent-violet/60" />
              {f}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* ── Scroll container ── */}
      <div
        className="fixed inset-0 z-[101] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex min-h-full items-start justify-center px-4 py-10 sm:px-6 sm:py-14">

          {/* ── Modal card ── */}
          <div
            className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* ── Sticky header ── */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 rounded-t-2xl border-b border-white/[0.07] bg-[#0d1117] px-6 py-4 sm:px-8">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent-blue/70">
                  Technical Details
                </p>
                <h2
                  id="modal-title"
                  className="mt-1 text-base font-semibold leading-snug text-slate-50 sm:text-lg"
                >
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
                  <span className="text-xs text-slate-500">
                    My Role ·{' '}
                    <span className="text-slate-300">{project.role}</span>
                  </span>
                </div>
              </div>

              {/* ✕ Close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-slate-400 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <line x1="1" y1="1" x2="10" y2="10" />
                  <line x1="10" y1="1" x2="1" y2="10" />
                </svg>
              </button>
            </div>

            {/* ── Body ── */}
            <div className="px-6 pb-8 pt-6 sm:px-8">

              {/* Project-level tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* All sections */}
              <dl className="mt-7 space-y-6">
                {sections.map(({ heading, body }) => (
                  <div key={heading} className="border-l-2 border-accent-blue/20 pl-4">
                    <dt className="flex items-center gap-2">
                      <Icon
                        name={sectionIcon[heading] ?? 'ArrowRight'}
                        className="h-3.5 w-3.5 shrink-0 text-accent-blue/70"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-300">
                        {heading}
                      </span>
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-slate-400">{body}</dd>
                  </div>
                ))}
              </dl>

              {/* Bottom close */}
              <div className="mt-8 flex justify-end border-t border-white/[0.06] pt-5">
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <line x1="1" y1="1" x2="10" y2="10" />
                    <line x1="10" y1="1" x2="1" y2="10" />
                  </svg>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
