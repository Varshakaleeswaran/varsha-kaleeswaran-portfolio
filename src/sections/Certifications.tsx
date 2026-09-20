import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';
import { certifications } from '@/data/certifications';

const accentCycle = ['violet', 'blue', 'cyan'] as const;

export function Certifications() {
  return (
    <Section
      id="certifications"
      label="Certifications"
      title="Certifications."
      description="Certifications, learning programs, job simulations, and technical participation."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const accent = accentCycle[i % accentCycle.length];
          const borderClass =
            accent === 'violet'
              ? 'border-accent-violet/20 bg-accent-violet/10 text-accent-violet'
              : accent === 'blue'
              ? 'border-accent-blue/20 bg-accent-blue/10 text-accent-blue'
              : 'border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan';

          return (
            <GlassCard key={cert.id} accent={accent} as="article" className="flex h-full flex-col gap-3">
              {/* Icon + Type */}
              <div className="flex items-center justify-between gap-2">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${borderClass}`}
                >
                  <Icon name="Award" className="h-4 w-4" />
                </div>
                {cert.type && (
                  <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-500">
                    {cert.type}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold leading-snug text-slate-50">{cert.name}</h3>

              {/* Issuer + Date */}
              <div className="flex flex-col gap-0.5">
                <p className="text-xs font-medium text-slate-300">{cert.issuer}</p>
                <p className="font-mono text-[11px] text-slate-500">{cert.issued}</p>
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <p className="font-mono text-[10px] text-slate-600 break-all">
                  ID: {cert.credentialId}
                </p>
              )}
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
