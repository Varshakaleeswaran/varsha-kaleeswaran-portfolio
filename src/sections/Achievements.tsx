import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/cn';
import { achievements } from '@/data/achievements';
import type { AchievementCategory } from '@/data/achievements';

// ── Status badge colours ──────────────────────────────────────────────────────
const statusStyle: Record<string, string> = {
  'Finalist':              'border-accent-violet/40 bg-accent-violet/10 text-accent-violet',
  'Internally Selected':   'border-accent-blue/40   bg-accent-blue/10   text-accent-blue',
  'Round 2':               'border-accent-cyan/40   bg-accent-cyan/10   text-accent-cyan',
  'Team Leader':           'border-accent-violet/40 bg-accent-violet/10 text-accent-violet',
  'Participant':           'border-white/10          bg-white/[0.03]     text-slate-400',
  'Student Coordinator':   'border-accent-blue/40   bg-accent-blue/10   text-accent-blue',
  'Executive Member':      'border-accent-cyan/40   bg-accent-cyan/10   text-accent-cyan',
  'Warrior Badge':         'border-accent-violet/40 bg-accent-violet/10 text-accent-violet',
  '1st Prize':             'border-amber-400/40      bg-amber-400/10     text-amber-300',
};
const fallback = 'border-white/10 bg-white/[0.03] text-slate-400';

// ── Category config ───────────────────────────────────────────────────────────
type CatIcon = 'Zap' | 'Users' | 'Award';
const categories: { key: AchievementCategory; label: string; icon: CatIcon }[] = [
  { key: 'Competitive', label: 'Competitive Achievements',       icon: 'Zap'   },
  { key: 'Leadership',  label: 'Leadership & Campus Activities', icon: 'Users' },
  { key: 'Recognition', label: 'Recognitions',                  icon: 'Award' },
];

const categoryAccent: Record<AchievementCategory, { text: string; line: string; icon: string }> = {
  Competitive: { text: 'text-accent-violet', line: 'bg-accent-violet/40', icon: 'text-accent-violet' },
  Leadership:  { text: 'text-accent-blue',   line: 'bg-accent-blue/40',   icon: 'text-accent-blue'   },
  Recognition: { text: 'text-accent-cyan',   line: 'bg-accent-cyan/40',   icon: 'text-accent-cyan'   },
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      label="Achievements & Recognition"
      title="Achievements & Recognition."
      description="Hackathons, competitive milestones, leadership experiences, and notable recognitions."
    >
      <div className="space-y-14">
        {categories.map(({ key, label, icon }) => {
          const items  = achievements.filter((a) => a.category === key);
          const accent = categoryAccent[key];
          return (
            <div key={key}>
              {/* ── Sub-heading ── */}
              <div className="mb-6 flex items-center gap-3">
                <div className={cn('flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]', accent.icon)}>
                  <Icon name={icon} className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className={cn('text-sm font-semibold tracking-wide', accent.text)}>
                  {label}
                </h3>
                <span className={cn('h-px flex-1', accent.line)} aria-hidden="true" />
                <span className="font-mono text-[11px] text-slate-600">{items.length}</span>
              </div>

              {/* ── Cards ── */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.10] hover:bg-white/[0.03]"
                  >
                    {/* Status badge */}
                    {item.status && (
                      <span
                        className={cn(
                          'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider',
                          statusStyle[item.status] ?? fallback
                        )}
                      >
                        {item.status}
                      </span>
                    )}

                    {/* Title */}
                    <h4 className="text-sm font-semibold leading-snug text-slate-50">
                      {item.title}
                    </h4>

                    {/* Org + date */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      {item.organization && (
                        <p className="text-xs text-slate-400">{item.organization}</p>
                      )}
                      {item.date && (
                        <>
                          <span className="text-slate-700" aria-hidden="true">·</span>
                          <p className="font-mono text-[11px] text-slate-500">{item.date}</p>
                        </>
                      )}
                    </div>

                    {/* Team */}
                    {item.team && (
                      <p className="text-xs text-slate-500">
                        <span className="text-slate-600">Team · </span>
                        {item.team}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>

                    {/* Optional link */}
                    {item.url && item.urlLabel && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-slate-300 transition-colors hover:border-accent-blue/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60"
                      >
                        <Icon name="ExternalLink" className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.urlLabel}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
