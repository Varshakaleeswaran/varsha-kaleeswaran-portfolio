import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';
import { skillGroups } from '@/data/skills';
import { cn } from '@/lib/cn';
import type { AccentColor } from '@/data/types';

const accentText: Record<AccentColor, string> = {
  cyan: 'text-accent-cyan',
  blue: 'text-accent-blue',
  violet: 'text-accent-violet',
};

const accentBox: Record<AccentColor, string> = {
  cyan: 'border-accent-cyan/20 bg-accent-cyan/10',
  blue: 'border-accent-blue/20 bg-accent-blue/10',
  violet: 'border-accent-violet/20 bg-accent-violet/10',
};

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical stack across the AI/ML lifecycle."
      description="From prompt engineering and RAG pipelines to computer vision and the programming languages and tools that ship them."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <GlassCard key={group.category} accent={group.accent} className="h-full">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border',
                  accentBox[group.accent],
                  accentText[group.accent]
                )}
              >
                <Icon name={group.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold leading-tight text-slate-50">
                {group.category}
              </h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-slate-300"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
