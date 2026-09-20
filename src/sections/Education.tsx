import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';
import { education } from '@/data/education';

export function Education() {
  return (
    <Section
      id="education"
      label="Education"
      title="Education."
      description="My academic background in Artificial Intelligence and Data Science."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <GlassCard key={edu.id} accent="blue" as="article" className="h-full">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-blue/20 bg-accent-blue/10 text-accent-blue">
                <Icon name="GraduationCap" className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-tight text-slate-50">{edu.degree}</h3>
                <p className="mt-1.5 text-sm text-slate-300">{edu.institution}</p>
                <p className="mt-0.5 text-xs text-slate-500">{edu.affiliation}</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">CGPA</p>
                <p className="mt-1 text-lg font-semibold text-accent-blue">{edu.cgpa}</p>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">Graduation</p>
                <p className="mt-1 text-lg font-semibold text-slate-100">{edu.expectedGraduation}</p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-lg border border-accent-violet/20 bg-accent-violet/10 px-3 py-2">
              <Icon name="Award" className="h-4 w-4 text-accent-violet" />
              <p className="text-sm font-medium text-accent-violet">{edu.achievement}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
