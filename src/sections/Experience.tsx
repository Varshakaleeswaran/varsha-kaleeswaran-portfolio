import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';
import { experience } from '@/data/experience';
import { cn } from '@/lib/cn';
import type { AccentColor } from '@/data/types';

const typeColor: Record<string, { border: string; bg: string; text: string; dot: AccentColor }> = {
  Internship: { border: 'border-accent-blue/40', bg: 'bg-accent-blue/10', text: 'text-accent-blue', dot: 'blue' },
  Project: { border: 'border-accent-violet/40', bg: 'bg-accent-violet/10', text: 'text-accent-violet', dot: 'violet' },
  Program: { border: 'border-accent-cyan/40', bg: 'bg-accent-cyan/10', text: 'text-accent-cyan', dot: 'cyan' },
};

const dotColor: Record<AccentColor, string> = {
  cyan: 'bg-accent-cyan',
  blue: 'bg-accent-blue',
  violet: 'bg-accent-violet',
};

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Internships and technical experience."
      description="A timeline of relevant internships, hackathon projects, and technical programs across RAG, LLM applications, computer vision, and AI engineering."
    >
      <ol className="relative border-l border-white/[0.08] pl-6 sm:pl-8">
        {experience.map((item) => {
          const tc = typeColor[item.type] ?? typeColor.Internship;
          return (
            <li key={item.id} className="relative pb-10 last:pb-0">
              <span
                className={cn(
                  'absolute -left-[31px] top-1 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-ink-950 sm:-left-[39px]',
                  dotColor[tc.dot]
                )}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/10 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-50 sm:text-lg">{item.role}</h3>
                    <span
                      className={cn(
                        'rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider',
                        tc.border,
                        tc.bg,
                        tc.text
                      )}
                    >
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-200">{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue/70" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-mono text-xs text-slate-400">{item.period}</p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Icon name="MapPin" className="h-3.5 w-3.5" />
                    {item.location}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
