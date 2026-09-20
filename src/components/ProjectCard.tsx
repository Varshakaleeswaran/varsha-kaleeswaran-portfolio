import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { Icon } from './Icon';
import { cn } from '@/lib/cn';
import type { Project, AccentColor } from '@/data/types';

const accentIcon: Record<AccentColor, string> = {
  cyan: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20',
  blue: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20',
  violet: 'text-accent-violet bg-accent-violet/10 border-accent-violet/20',
};

interface ProjectCardProps {
  project: Project;
  onViewDetails?: (id: string) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <GlassCard as="article" accent={project.accent} className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
            accentIcon[project.accent]
          )}
        >
          <Icon name={project.icon} className="h-5 w-5" />
        </div>
        <span
          className={cn(
            'inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
            project.status === 'Ongoing'
              ? 'border-amber-400/30 bg-amber-400/10 text-amber-300'
              : 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
          )}
        >
          {project.status === 'Ongoing' && (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          )}
          {project.status === 'Completed' && (
            <Icon name="CheckCircle2" className="h-3 w-3" />
          )}
          {project.status}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-tight text-slate-50">{project.title}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-400">
        {project.tagline}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        <span className="text-slate-600">My Role · </span>
        <span className="text-slate-400">{project.role}</span>
      </p>

      <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>

      {project.context && (
        <p className="mt-2 text-xs text-slate-500">{project.context}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-1">
        {onViewDetails && (
          <Button
            size="sm"
            variant="primary"
            onClick={() => onViewDetails(project.id)}
          >
            View Technical Details
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        )}
        {project.github && (
          <Button
            size="sm"
            variant="secondary"
            href={project.github}
            aria-label={`View ${project.title} on GitHub`}
          >
            <Icon name="Github" className="h-4 w-4" />
            GitHub
          </Button>
        )}
      </div>
    </GlassCard>
  );
}
