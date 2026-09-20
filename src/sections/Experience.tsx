import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';
import { experience } from '@/data/experience';
import { cn } from '@/lib/cn';

const typeColor: Record<string, string> = {
  Internship: 'border-accent-blue/40 bg-accent-blue/10 text-accent-blue',
  Project: 'border-accent-violet/40 bg-accent-violet/10 text-accent-violet',
  Academic: 'border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan',
};

const dotColor: Record<string, string> = {
  Internship: 'bg-accent-blue',
  Project: 'bg-accent-violet',
  Academic: 'bg-accent-cyan',
};

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Internships and technical experience."
      description="A timeline of relevant internships and academic work across RAG, LLM applications, computer vision, and AI engineering."
    >
      <ol className="relative border-l border-white/[0.08] pl-6 sm:pl-8">
        {experience.map((item) => (
          <li key={item.id} className="relative pb-10 last:pb-0">
            <span
              className={cn(
                'absolute -left-[31px] top-1 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-ink-950 sm:-left-[39px]',
                dotColor[item.type]
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
                      typeColor[item.type]
                    )}
                  >
                    {item.type}
                  </span>
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
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
        ))}
      </ol>
    </Section>
  );
}
